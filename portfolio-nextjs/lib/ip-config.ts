// Lista de IPs permitidas para acceder al panel de administración
// Añade tu IP pública aquí
export const ALLOWED_IPS = [
  "127.0.0.1",           // Localhost IPv4
  "::1",                 // Localhost IPv6
  "::ffff:127.0.0.1",    // Localhost IPv6 mapped
  "93.156.199.2",        // IP de Pau Berenguer
];

// Función para obtener la IP del cliente
export function getClientIp(request: Request): string {
  // Intentar obtener la IP de varios headers (depende del entorno)
  const forwarded = request.headers.get("x-forwarded-for");
  const realIp = request.headers.get("x-real-ip");
  const cfConnectingIp = request.headers.get("cf-connecting-ip"); // Cloudflare

  if (forwarded) {
    // x-forwarded-for puede contener múltiples IPs separadas por coma
    return forwarded.split(",")[0].trim();
  }

  if (realIp) {
    return realIp;
  }

  if (cfConnectingIp) {
    return cfConnectingIp;
  }

  // Fallback a localhost
  return "127.0.0.1";
}

// Función para verificar si una IP está permitida
export function isIpAllowed(ip: string): boolean {
  return ALLOWED_IPS.includes(ip);
}
