import { Link } from 'react-router-dom'
import { Icon, type IconName } from './Icon'

const steps: { number: string; icon: IconName; title: string; description: string }[] = [
  {
    number: '1',
    icon: 'pen',
    title: 'Regístrate gratis',
    description:
      'Crea tu cuenta en menos de 2 minutos. Solo necesitas tu nombre, email y negocio.',
  },
  {
    number: '2',
    icon: 'gear',
    title: 'Configura tu negocio',
    description:
      'Ingresa los datos de tu negocio: nombre, RUC, dirección. ¡Así de fácil!',
  },
  {
    number: '3',
    icon: 'box',
    title: 'Añade tu inventario',
    description:
      'Registra tus productos manualmente o impórtalos desde Excel en segundos.',
  },
  {
    number: '4',
    icon: 'cash',
    title: 'Empieza a vender',
    description:
      'Registra ventas, imprime notas RIMPE, controla tu caja y mucho más.',
  },
]

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="py-16 sm:py-24 bg-white scroll-mt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Cómo funciona DAJHO
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Empezar es más fácil de lo que imaginas. En 5 minutos tendrás tu negocio funcionando.
          </p>
        </div>

        <div className="relative mt-16">
          {/* Línea conectora vertical (escritorio) */}
          <div className="absolute left-1/2 top-0 bottom-0 hidden lg:block w-0.5 bg-primary-100" />

          <div className="space-y-12 lg:space-y-16">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className={`relative flex flex-col ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } items-center gap-8 lg:gap-16`}
              >
                {/* Contenido */}
                <div className={`flex-1 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                  <div
                    className={`inline-flex items-center gap-3 ${
                      index % 2 === 0 ? 'lg:flex-row-reverse' : ''
                    }`}
                  >
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-50 text-primary-600">
                      <Icon name={step.icon} className="w-6 h-6" />
                    </span>
                    <span className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-primary-600 text-white text-sm font-bold">
                      {step.number}
                    </span>
                  </div>
                  <h3 className="mt-4 text-xl font-semibold text-gray-900">{step.title}</h3>
                  <p className="mt-2 text-base text-gray-600 max-w-md mx-auto lg:mx-0">
                    {step.description}
                  </p>
                </div>

                {/* Versión móvil: punto conector */}
                <div className="hidden lg:flex items-center justify-center w-8 h-8">
                  <div className="w-4 h-4 rounded-full bg-primary-500 ring-4 ring-primary-50" />
                </div>

                {/* Espacio vacío para mantener el layout en escritorio */}
                <div className="flex-1 hidden lg:block" />
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <Link
            to="/contacto"
            className="btn-shine inline-flex items-center gap-2 rounded-xl bg-primary-600 px-8 py-3.5 text-base font-bold text-white shadow-lg shadow-primary-200"
          >
            <Icon name="arrow-right" className="w-5 h-5" />
            Contáctanos
          </Link>
        </div>
      </div>
    </section>
  )
}
