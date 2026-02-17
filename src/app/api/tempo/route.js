import { somarTempo } from '@/src/server/crud';

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

    return '';
}

export async function POST(req) {
    try {
        const ip = await pegarIpReal(req.headers);
        if (!ip) return new Response(null, { status: 204 });

        const body = await req.json().catch(() => ({}));
        const segundos = Number(body?.segundos ?? 0);

        if (!Number.isFinite(segundos) || segundos < 0) {
            return new Response(null, { status: 204 });
        }

        await somarTempo({ ip, segundos: Math.floor(segundos) });
    } catch (_) {}
    return new Response(null, { status: 204 });
}
