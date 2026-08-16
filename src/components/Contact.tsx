import { useState, type FormEvent } from 'react'
import { Link } from 'react-router-dom'
import { Icon } from './Icon'
import { site } from '../data/site'

export default function Contact() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (!email) return
    // Simulación de suscripción con estado de carga
    setLoading(true)
    window.setTimeout(() => {
      setSubscribed(true)
      setEmail('')
      setLoading(false)
    }, 1200)
  }

  return (
    <section id="contacto" className="py-16 sm:py-24 bg-white scroll-mt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary-600 to-primary-800 px-6 py-12 sm:px-12 sm:py-16 shadow-2xl">
            {/* Decorative elements */}
            <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-white/5 blur-3xl" />
            <div className="absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-white/5 blur-3xl" />
            <div className="absolute inset-0 pattern-grid" />

            <div className="relative">
              <div className="mx-auto max-w-2xl text-center">
                <div className="mx-auto mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-white backdrop-blur-sm border border-white/15">
                  <Icon name="megaphone" className="w-6 h-6" />
                </div>
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  No te pierdas las novedades
                </h2>
                <p className="mt-4 text-lg text-primary-100">
                  Suscríbete para recibir actualizaciones, tips y novedades de DAJHO directamente en tu correo.
                </p>
              </div>

              {subscribed ? (
                <div className="mt-8 text-center">
                  <div className="inline-flex items-center gap-3 rounded-xl bg-white/10 px-6 py-4 text-white backdrop-blur-sm border border-white/15">
                    <Icon name="check-circle" className="w-6 h-6 text-green-400" />
                    <span className="font-medium">¡Gracias por suscribirte! Te mantendremos al tanto.</span>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-8 mx-auto max-w-lg">
                  <div className="flex flex-col sm:flex-row gap-4">
                    {/* Input con etiqueta flotante (uiverse: input fields) */}
                    <div className="field flex-1 min-w-0">
                      <input
                        id="email-input"
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder=" "
                        autoComplete="email"
                        className="field__input"
                      />
                      <label htmlFor="email-input" className="field__label">
                        tu@correo.com
                      </label>
                    </div>
                    <button
                      type="submit"
                      disabled={loading}
                      className="btn-shine inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-base font-bold text-primary-700 shadow-lg hover:bg-primary-50 transition-colors disabled:opacity-80 disabled:cursor-not-allowed"
                    >
                      {loading ? (
                        <>
                          <span className="spinner border-primary-300 border-t-primary-600" />
                          <span>Enviando…</span>
                        </>
                      ) : (
                        'Suscribirme'
                      )}
                    </button>
                  </div>
                  <p className="mt-3 text-xs text-primary-200 text-center">
                    Sin spam. Solo contenido útil para tu negocio. Puedes darte de baja cuando quieras.
                  </p>
                </form>
              )}

              {/* Contact info */}
              <div className="mt-12 grid gap-6 sm:grid-cols-3 border-t border-white/10 pt-10">
                <div className="text-center">
                  <div className="mx-auto mb-2 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-white border border-white/15">
                    <Icon name="mail" className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-semibold text-white">Email</h3>
                  <a href={`mailto:${site.email}`} className="mt-1 text-sm text-primary-200 hover:text-white transition-colors block">
                    {site.email}
                  </a>
                </div>
                <div className="text-center">
                  <div className="mx-auto mb-2 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-white border border-white/15">
                    <Icon name="chat" className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-semibold text-white">WhatsApp</h3>
                  <a href={`tel:${site.phone.replace(/\s/g, '')}`} className="mt-1 text-sm text-primary-200 hover:text-white transition-colors block">
                    {site.phone}
                  </a>
                </div>
                <div className="text-center">
                  <div className="mx-auto mb-2 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-white border border-white/15">
                    <Icon name="map-pin" className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-semibold text-white">Ubicación</h3>
                  <p className="mt-1 text-sm text-primary-200">{site.location}</p>
                </div>
              </div>

              <div className="mt-8 text-center">
                <Link
                  to="/contacto"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/15 rounded-full px-5 py-2.5 backdrop-blur-sm transition-colors"
                >
                  Ver formulario de contacto
                  <Icon name="arrow-right" className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
