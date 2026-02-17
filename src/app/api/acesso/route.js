import { registrarAcesso } from '@/src/server/crud';

const HEADERS_IP = [
    'cf-connecting-ip',
    'x-real-ip',
    'x-forwarded-for',
    'x-client-ip',
    'true-client-ip',
    'x-cluster-client-ip',
];

function ehIpPrivado(ip) {
    if (!ip) return true;
    return (
        ip === '::1' ||
        ip === '127.0.0.1' ||
        ip.startsWith('192.168.') ||
        ip.startsWith('10.') ||
        ip.startsWith('172.')
    );
}

async function pegarIpReal(headers) {
    if (headers.get) {
        for (const nome of HEADERS_IP) {
            const valor = headers.get(nome);
            if (valor) {
                const ip = valor.split(',')[0].trim();
                if (!ehIpPrivado(ip)) return ip;
            }
        }
    }

    try {
        const res = await fetch('https://api.ipify.org?format=json', {
            signal: AbortSignal.timeout(5000),
        });
        const { ip } = await res.json();
        if (ip) return ip;
    } catch (_) {}

    try {
        const res = await fetch('https://api64.ipify.org?format=json', {
            signal: AbortSignal.timeout(5000),
        });
        const { ip } = await res.json();
        if (ip) return ip;
    } catch (_) {}

    return 'Desconhecido';
}

async function pegarLocalizacao(ip) {
    const fallback = {
        uf: 'Desconhecido',
        cidade: 'Desconhecido',
        localizacao: 'Desconhecido',
        latitude: 0,
        longitude: 0,
    };

    if (!ip || ip === 'Desconhecido') return fallback;

    try {
        const res = await fetch(
            `http://ip-api.com/json/${ip}?fields=66846719`,
            { signal: AbortSignal.timeout(8000) }
        );
        const data = await res.json();
        if (data.status === 'success') {
            return {
                uf: data.regionName || fallback.uf,
                cidade: data.city || fallback.cidade,
                latitude: data.lat || fallback.latitude,
                longitude: data.lon || fallback.longitude,
                localizacao:
                    [data.city, data.regionName, data.country]
                        .filter(Boolean)
                        .join(', ') || fallback.localizacao,
            };
        }
    } catch (_) {}

    try {
        const res = await fetch(`https://ipwho.is/${ip}`, {
            signal: AbortSignal.timeout(8000),
        });
        const data = await res.json();
        if (data.success !== false) {
            return {
                uf: data.region || fallback.uf,
                cidade: data.city || fallback.cidade,
                latitude: data.latitude || fallback.latitude,
                longitude: data.longitude || fallback.longitude,
                localizacao:
                    [data.city, data.region, data.country]
                        .filter(Boolean)
                        .join(', ') || fallback.localizacao,
            };
        }
    } catch (_) {}

    try {
        const res = await fetch(`https://ipapi.co/${ip}/json/`, {
            signal: AbortSignal.timeout(8000),
        });
        const data = await res.json();
        if (!data.error) {
            return {
                uf: data.region || fallback.uf,
                cidade: data.city || fallback.cidade,
                latitude: data.latitude || fallback.latitude,
                longitude: data.longitude || fallback.longitude,
                localizacao:
                    [data.city, data.region, data.country_name]
                        .filter(Boolean)
                        .join(', ') || fallback.localizacao,
            };
        }
    } catch (_) {}

    try {
        const res = await fetch(`https://ipinfo.io/${ip}/json`, {
            signal: AbortSignal.timeout(8000),
        });
        const data = await res.json();
        if (data && !data.error) {
            const [lat, lon] = (data.loc || '').split(',').map(Number);
            return {
                uf: data.region || fallback.uf,
                cidade: data.city || fallback.cidade,
                latitude: lat || fallback.latitude,
                longitude: lon || fallback.longitude,
                localizacao:
                    [data.city, data.region, data.country]
                        .filter(Boolean)
                        .join(', ') || fallback.localizacao,
            };
        }
    } catch (_) {}

    return fallback;
}

export async function POST(req) {
    try {
        const ip = await pegarIpReal(req.headers);
        const geo = await pegarLocalizacao(ip);
        await registrarAcesso({ ip, ...geo });
    } catch (_) {}
    return new Response(null, { status: 204 });
}
