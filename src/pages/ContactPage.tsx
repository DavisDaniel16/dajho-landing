import { useState, type FormEvent } from 'react'
import { Icon } from '../components/Icon'
import { site } from '../data/site'

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setError('')

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setError('Completa todos los campos del formulario.')
      return
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setError('El formato del correo electrónico no es válido.')
      return
    }

    setLoading(true)
    window.setTimeout(() => {
      setLoading(false)
      setSent(true)
    }, 1000)
  }

  const inputClass =
    'w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-base text-gray-900 placeholder-gray-400 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all'

  return (
    <section className="relative py-20 sm:py-28 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-blue-50" />
        <div className="absolute inset-0 pattern-dots opacity-40" />
        <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[500px] h-[500px] rounded-full bg-primary-100/30 blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Contáctanos
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Cuéntanos sobre tu negocio y te ayudaremos a elegir el mejor plan.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-5 items-start">
          {/* Información de contacto */}
          <div className="lg:col-span-2 space-y-4">
            <div className="glass-card rounded-2xl p-6">
              <div className="flex items-center gap-4">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary-600 text-white">
                  <Icon name="mail" className="w-5 h-5" />
                </span>
                <div>
                  <h2 className="text-sm font-semibold text-gray-900">Email</h2>
                  <a href={`mailto:${site.email}`} className="text-sm text-gray-600 hover:text-primary-600 transition-colors">
                    {site.email}
                  </a>
                </div>
              </div>
            </div>

            <div className="glass-card rounded-2xl p-6">
              <div className="flex items-center gap-4">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary-600 text-white">
                  <Icon name="chat" className="w-5 h-5" />
                </span>
                <div>
                  <h2 className="text-sm font-semibold text-gray-900">WhatsApp</h2>
                  <a href={`tel:${site.phone.replace(/\s/g, '')}`} className="text-sm text-gray-600 hover:text-primary-600 transition-colors">
                    {site.phone}
                  </a>
                </div>
              </div>
            </div>

            <div className="glass-card rounded-2xl p-6">
              <div className="flex items-center gap-4">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary-600 text-white">
                  <Icon name="map-pin" className="w-5 h-5" />
                </span>
                <div>
                  <h2 className="text-sm font-semibold text-gray-900">Ubicación</h2>
                  <p className="text-sm text-gray-600">{site.location}</p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl bg-gradient-to-br from-primary-600 to-primary-800 p-6 text-white shadow-lg">
              <Icon name="headset" className="w-8 h-8 mb-3 text-primary-100" />
              <h2 className="text-base font-bold">Soporte 24/7</h2>
              <p className="mt-1 text-sm text-primary-100">
                Nuestro equipo está disponible para ayudarte en cualquier momento, incluso en los planes de pago.
              </p>
            </div>
          </div>

          {/* Formulario */}
          <div className="lg:col-span-3 glass-card rounded-3xl p-6 sm:p-8">
            {sent ? (
              <div className="py-16 text-center">
                <span className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-50 text-green-600 mb-4">
                  <Icon name="check-circle" className="w-8 h-8" />
                </span>
                <h2 className="text-xl font-bold text-gray-900">¡Mensaje enviado!</h2>
                <p className="mt-2 text-sm text-gray-600">
                  Gracias por escribirnos. Te responderemos lo antes posible.
                </p>
                <button
                  onClick={() => {
                    setSent(false)
                    setForm({ name: '', email: '', message: '' })
                  }}
                  className="mt-6 text-sm font-medium text-primary-600 hover:text-primary-700 transition-colors"
                >
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                {error && (
                  <div className="flex items-start gap-2 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700" role="alert">
                    <Icon name="x" className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span>{error}</span>
                  </div>
                )}

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="contact-name" className="mb-1.5 block text-sm font-medium text-gray-700">
                      Nombre
                    </label>
                    <div className="relative">
                      <Icon name="user" className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        id="contact-name"
                        type="text"
                        value={form.name}
                        onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                        placeholder="Tu nombre"
                        className={`${inputClass} pl-11`}
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="mb-1.5 block text-sm font-medium text-gray-700">
                      Correo electrónico
                    </label>
                    <div className="relative">
                      <Icon name="mail" className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        id="contact-email"
                        type="email"
                        value={form.email}
                        onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                        placeholder="tu@correo.com"
                        className={`${inputClass} pl-11`}
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-message" className="mb-1.5 block text-sm font-medium text-gray-700">
                    Mensaje
                  </label>
                  <textarea
                    id="contact-message"
                    rows={6}
                    value={form.message}
                    onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                    placeholder="Cuéntanos sobre tu negocio y cómo podemos ayudarte…"
                    className={`${inputClass} resize-none`}
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="btn-shine flex w-full items-center justify-center gap-2 rounded-xl bg-primary-600 px-6 py-3.5 text-base font-bold text-white shadow-lg shadow-primary-200 disabled:opacity-80 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <>
                      <span className="spinner" />
                      <span>Enviando…</span>
                    </>
                  ) : (
                    <>
                      <Icon name="mail" className="w-5 h-5" />
                      Enviar mensaje
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
