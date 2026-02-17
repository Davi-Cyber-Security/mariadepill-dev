import postgres from 'postgres';

const conexao = postgres({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    port: Number(process.env.DB_PORT),
    ssl: 'require',
});

const SUPABASE_URL = 'https://xnoqddyfqdatieyzfmtb.supabase.co';
const SUPABASE_KEY = process.env.SUPABASE_KEY || '';

let tabelaCriada = false;

async function garantirTabela() {
    if (tabelaCriada) return;
    await conexao`
        CREATE TABLE IF NOT EXISTS acessos (
            id SERIAL PRIMARY KEY,
            ip TEXT NOT NULL UNIQUE,
            uf TEXT DEFAULT 'Desconhecido',
            cidade TEXT DEFAULT 'Desconhecido',
            localizacao TEXT DEFAULT 'Desconhecido',
            latitude DOUBLE PRECISION DEFAULT 0,
            longitude DOUBLE PRECISION DEFAULT 0,
            primeiro_acesso TIMESTAMP NOT NULL DEFAULT NOW(),
            ultima_visita TIMESTAMP NOT NULL DEFAULT NOW(),
            qntd_de_vezes_acessou INT NOT NULL DEFAULT 1,
            tempo_total_segundos BIGINT NOT NULL DEFAULT 0
        )
    `;
    tabelaCriada = true;
}

async function supabaseRest(caminho, metodo, corpo, headersExtra = {}) {
    if (!SUPABASE_KEY) return null;
    const res = await fetch(`${SUPABASE_URL}/rest/v1/${caminho}`, {
        method: metodo,
        headers: {
            'Content-Type': 'application/json',
            'apikey': SUPABASE_KEY,
            'Authorization': `Bearer ${SUPABASE_KEY}`,
            ...headersExtra,
        },
        body: corpo ? JSON.stringify(corpo) : undefined,
    });
    if (!res.ok) return null;
    const texto = await res.text();
    return texto ? JSON.parse(texto) : null;
}

export async function registrarAcesso({ ip, uf, cidade, localizacao, latitude, longitude }) {
    try {
        await garantirTabela();
        const [row] = await conexao`
            INSERT INTO acessos (ip, uf, cidade, localizacao, latitude, longitude)
            VALUES (${ip}, ${uf}, ${cidade}, ${localizacao}, ${latitude}, ${longitude})
            ON CONFLICT (ip) DO UPDATE SET
                ultima_visita = NOW(),
                qntd_de_vezes_acessou = acessos.qntd_de_vezes_acessou + 1,
                uf = COALESCE(NULLIF(EXCLUDED.uf, 'Desconhecido'), acessos.uf),
                cidade = COALESCE(NULLIF(EXCLUDED.cidade, 'Desconhecido'), acessos.cidade),
                localizacao = COALESCE(NULLIF(EXCLUDED.localizacao, 'Desconhecido'), acessos.localizacao),
                latitude = CASE WHEN EXCLUDED.latitude != 0 THEN EXCLUDED.latitude ELSE acessos.latitude END,
                longitude = CASE WHEN EXCLUDED.longitude != 0 THEN EXCLUDED.longitude ELSE acessos.longitude END
            RETURNING *
        `;
        return row;
    } catch (error) {
        try {
            const existente = await supabaseRest(
                `acessos?ip=eq.${encodeURIComponent(ip)}&select=qntd_de_vezes_acessou`,
                'GET'
            );
            if (existente?.length > 0) {
                return await supabaseRest(
                    `acessos?ip=eq.${encodeURIComponent(ip)}`,
                    'PATCH',
                    {
                        ultima_visita: new Date().toISOString(),
                        qntd_de_vezes_acessou: existente[0].qntd_de_vezes_acessou + 1,
                        ...(uf !== 'Desconhecido' && { uf }),
                        ...(cidade !== 'Desconhecido' && { cidade }),
                        ...(localizacao !== 'Desconhecido' && { localizacao }),
                        ...(latitude !== 0 && { latitude }),
                        ...(longitude !== 0 && { longitude }),
                    },
                    { 'Prefer': 'return=representation' }
                );
            }
            return await supabaseRest(
                'acessos',
                'POST',
                { ip, uf, cidade, localizacao, latitude, longitude },
                { 'Prefer': 'return=representation' }
            );
        } catch (_) {
            return null;
        }
    }
}

export async function somarTempo({ ip, segundos }) {
    try {
        await garantirTabela();
        const [row] = await conexao`
            UPDATE acessos SET
                tempo_total_segundos = tempo_total_segundos + ${segundos},
                ultima_visita = NOW()
            WHERE ip = ${ip}
            RETURNING *
        `;
        return row;
    } catch (error) {
        try {
            const existente = await supabaseRest(
                `acessos?ip=eq.${encodeURIComponent(ip)}&select=tempo_total_segundos`,
                'GET'
            );
            if (existente?.length > 0) {
                return await supabaseRest(
                    `acessos?ip=eq.${encodeURIComponent(ip)}`,
                    'PATCH',
                    {
                        tempo_total_segundos: existente[0].tempo_total_segundos + segundos,
                        ultima_visita: new Date().toISOString(),
                    },
                    { 'Prefer': 'return=representation' }
                );
            }
            return null;
        } catch (_) {
            return null;
        }
    }
}
