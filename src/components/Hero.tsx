import { Link } from 'react-router-dom'
import { Icon } from './Icon'
import { useSectionScroll } from '../hooks/useSectionScroll'

export default function Hero() {
  const scrollToSection = useSectionScroll()

  return (
    <section id="inicio" className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 overflow-hidden scroll-mt-16">
      {/* Background gradient + pattern */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-blue-50" />
        <div className="absolute inset-0 pattern-dots opacity-40" />
        <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[600px] h-[600px] rounded-full bg-primary-100/30 blur-3xl" />
        <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[500px] h-[500px] rounded-full bg-blue-100/20 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left column: text */}
          <div>
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl leading-tight">
              <span className="block">Gestiona tu negocio</span>
              <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-blue-500">
                sin internet y sin pagar de más
              </span>
            </h1>

            <p className="mt-6 text-lg leading-8 text-gray-600 sm:text-xl">
              El sistema de gestión para negocios populares en Ecuador. 100% offline, notas de venta RIMPE, sin suscripciones caras.
            </p>

            {/* Feature list with SVG check icons */}
            <ul className="mt-8 space-y-4">
              {[
                'Somos la plataforma más fácil e intuitiva',
                'Úsalo desde el celular y computador',
                'Conoce las estadísticas de tu negocio en tiempo real',
              ].map((text) => (
                <li key={text} className="flex items-center gap-3 text-gray-700">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary-50 text-primary-600 flex-shrink-0 shadow-sm">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </span>
                  <span className="text-sm sm:text-base">{text}</span>
                </li>
              ))}
            </ul>

            {/* CTA buttons (uiverse: botón 3D + botón con flecha) */}
            <div className="mt-10 flex flex-col sm:flex-row items-start gap-5">
              <Link
                to="/contacto"
                className="btn-3d inline-flex items-center gap-2 rounded-xl bg-primary-600 px-8 py-4 text-base font-bold text-white"
              >
                <Icon name="headset" className="w-5 h-5" />
                Contáctanos
              </Link>
              <button
                type="button"
                onClick={() => scrollToSection('como-funciona')}
                className="btn-arrow inline-flex items-center rounded-xl border-2 border-gray-300 bg-white px-8 py-4 text-base font-semibold text-gray-700 hover:border-primary-500 hover:text-primary-600"
              >
                <span>Ver demo (2 min)</span>
                <svg className="btn-arrow-icon w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
                </svg>
              </button>
            </div>

            {/* Star rating */}
            <div className="mt-10 flex items-center gap-3 text-sm text-gray-600">
              <div className="flex text-yellow-400 text-lg tracking-wide">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.958a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.367 2.446a1 1 0 00-.364 1.118l1.286 3.958c.3.922-.755 1.688-1.539 1.118l-3.367-2.446a1 1 0 00-1.176 0l-3.367 2.446c-.784.57-1.838-.196-1.539-1.118l1.286-3.958a1 1 0 00-.364-1.118L2.05 9.385c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.958z" />
                  </svg>
                ))}
              </div>
              <span>4.8 de 5 en Google Play y App Store</span>
            </div>

            {/* Stats counters */}
            <div className="mt-8 flex flex-wrap gap-8">
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-primary-50 text-primary-600">
                  <Icon name="store" className="w-5 h-5" />
                </span>
                <div>
                  <div className="font-bold text-lg text-gray-900">+10.000</div>
                  <div className="text-xs text-gray-500">negocios usan DAJHO</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-primary-50 text-primary-600">
                  <Icon name="flag" className="w-5 h-5" />
                </span>
                <div>
                  <div className="font-bold text-lg text-gray-900">+1</div>
                  <div className="text-xs text-gray-500">país, ¡Ecuador!</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right column: device mockup (glassmorphism) */}
          <div className="relative flex justify-center lg:justify-end">
            <span className="absolute top-4 right-4 bg-primary-600 text-white text-xs font-bold px-3 py-1.5 rounded-full z-10 shadow-lg shadow-primary-300">
              Planes desde $0/mes
            </span>

            {/* Floating mini card */}
            <div className="absolute -left-2 top-16 z-10 hidden sm:flex items-center gap-2 rounded-xl glass-card px-4 py-3 animate-float">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-xs font-semibold text-gray-700">Venta registrada · Offline</span>
            </div>

            <div className="w-full max-w-md rounded-3xl p-8 shadow-2xl border border-primary-200 bg-gradient-to-br from-primary-100 to-blue-50 relative">
              {/* Skeleton shine overlay */}
              <div className="absolute inset-0 overflow-hidden rounded-3xl pointer-events-none">
                <div className="absolute -inset-x-40 top-0 h-full w-40 rotate-12 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-pulse" />
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-inner relative">
                <div className="flex items-center gap-3 mb-6">
                  <img
                    src="/favicon.ico"
                    alt="DAJHO"
                    className="h-8 w-8"
                  />
                  <span className="font-bold text-gray-900">DAJHO</span>
                </div>

                {/* Mini panel */}
                <div className="rounded-xl bg-gradient-to-br from-primary-600 to-primary-800 p-4 text-white shadow-lg">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-medium text-primary-100">Ventas de hoy</span>
                    <span className="text-[10px] font-bold bg-white/20 px-2 py-0.5 rounded-full">+24%</span>
                  </div>
                  <div className="text-2xl font-extrabold">$1,284.50</div>
                  <div className="mt-3 h-10 flex items-end gap-1">
                    {[35, 55, 42, 70, 58, 85, 65].map((h, i) => (
                      <div
                        key={i}
                        className="flex-1 rounded-sm bg-white/25"
                        style={{ height: `${h}%`, transitionDelay: `${i * 60}ms` }}
                      />
                    ))}
                  </div>
                </div>

                <div className="mt-4 grid grid-cols-2 gap-3">
                  <div className="rounded-xl border border-gray-100 bg-gray-50 p-3">
                    <div className="text-[10px] text-gray-500">Inventario</div>
                    <div className="text-sm font-bold text-gray-800 mt-0.5">1,248 ítems</div>
                  </div>
                  <div className="rounded-xl border border-gray-100 bg-gray-50 p-3">
                    <div className="text-[10px] text-gray-500">Notas RIMPE</div>
                    <div className="text-sm font-bold text-gray-800 mt-0.5">42 emitidas</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
