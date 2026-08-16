export const site = {
  name: 'DAJHO',
  email: 'davisvacacela@gmail.com',
  phone: '+593 98 662 7675',
  whatsapp: '593986627675',
  location: 'Guaranda, Bolívar, Ecuador',
  description:
    'El sistema de gestión para negocios populares en Ecuador. 100% offline, notas de venta RIMPE, sin suscripciones caras.',
}

/** Enlace directo a WhatsApp (wa.me) con mensaje opcional pre-escrito. */
export function waLink(message?: string): string {
  const base = `https://wa.me/${site.whatsapp}`
  return message ? `${base}?text=${encodeURIComponent(message)}` : base
}
