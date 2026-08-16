import { Icon, type IconName } from './Icon'

const benefits: { icon: IconName; title: string; description: string }[] = [
  {
    icon: 'bolt',
    title: 'Offline-first',
    description:
      'Tus datos se guardan localmente (SQLite). No necesitas internet para vender.',
  },
  {
    icon: 'flag',
    title: 'Hecho para RIMPE',
    description:
      'Notas de venta con formato oficial. 0% IVA para negocios populares.',
  },
  {
    icon: 'money',
    title: 'Gratis y económico',
    description:
      'Plan gratuito con funcionalidades básicas. Plan Pro desde $4.99/mes.',
  },
  {
    icon: 'shield',
    title: 'Tus datos, tuyos',
    description:
      'No almacenamos tus datos en la nube. Solo tú tienes acceso.',
  },
  {
    icon: 'smartphone',
    title: 'Acceso desde cualquier navegador',
    description:
      'Funciona en Windows, Mac, Linux, celular y tablet.',
  },
  {
    icon: 'zap',
    title: 'Rápido y ligero',
    description:
      'Interfaz optimizada. Abre en segundos.',
  },
]

export default function Benefits() {
  return (
    <section id="beneficios" className="py-16 sm:py-24 bg-gray-50 scroll-mt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            ¿Por qué DAJHO es diferente?
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Ventajas que marcan la diferencia para tu negocio.
          </p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="card-lift relative rounded-2xl border border-gray-200 bg-white p-8 shadow-sm hover:border-primary-200 group"
            >
              <div className="mb-4 inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary-50 text-primary-600 group-hover:bg-primary-100 group-hover:scale-110 transition-all duration-300">
                <Icon name={benefit.icon} className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">{benefit.title}</h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
