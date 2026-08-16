const testimonials = [
  {
    quote:
      '"Antes perdía muchas ventas por no controlar el inventario. Ahora sé exactamente qué tengo y qué necesito."',
    author: 'Carlos',
    role: 'Ferretería "El Martillo"',
    location: 'Guayaquil',
    gradient: 'from-blue-400 to-blue-600',
    badge: 'Redujo pérdidas 60%',
    initial: 'C',
  },
  {
    quote:
      '"DAJHO me ayudó a entender qué servicios me dan más ganancia. Ahora puedo planificar mejor mi negocio."',
    author: 'Ana',
    role: 'Salón de Belleza Glamour',
    location: 'Cuenca',
    gradient: 'from-pink-400 to-rose-500',
    badge: 'Mejoró rentabilidad 35%',
    initial: 'A',
  },
  {
    quote:
      '"Con DAJHO pude organizar mis ventas y ahora facturo mucho más que antes. Es súper fácil de usar."',
    author: 'María',
    role: 'Tienda de ropa "La Elegancia"',
    location: 'Quito',
    gradient: 'from-purple-400 to-purple-600',
    badge: 'Aumentó ventas 40%',
    initial: 'M',
  },
]

import { Link } from 'react-router-dom'
import { Icon } from './Icon'

export default function Testimonials() {
  return (
    <section id="testimonios" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
            Casos de éxito reales
          </h2>
          <p className="text-xl text-gray-500">
            Miles de emprendedores ya transformaron sus negocios con DAJHO
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.author}
              className="card-lift bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:border-primary-100"
            >
              <div className="text-primary-300 text-3xl font-serif leading-none mb-4">
                &ldquo;
              </div>
              <p className="text-sm text-gray-600 mb-6 italic leading-relaxed">
                {t.quote}
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {/* Placeholder avatar */}
                  <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.gradient} flex items-center justify-center text-white text-sm font-bold`}>
                    {t.initial}
                  </div>
                  <div>
                    <div className="font-bold text-sm text-gray-900">{t.author}</div>
                    <div className="text-xs text-gray-500">
                      {t.role}
                      <br />{t.location}
                    </div>
                  </div>
                </div>
                <div className="text-xs font-semibold text-green-700 bg-green-50 px-2.5 py-1 rounded-full whitespace-nowrap">
                  {t.badge}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="mt-16 bg-primary-50 rounded-2xl p-8 md:p-12 text-center max-w-3xl mx-auto border border-primary-100">
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            Únete a la comunidad de más de 10,000 empresarios
          </h3>
          <p className="text-gray-600 mb-6 text-sm">
            Y descubre en DAJHO el aliado para la gestión de tu negocio
          </p>
          <Link
            to="/contacto"
            className="btn-shine inline-flex items-center gap-2 rounded-xl bg-primary-600 px-8 py-3.5 text-base font-bold text-white shadow-lg shadow-primary-200"
          >
            Contáctanos
            <Icon name="arrow-right" className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
