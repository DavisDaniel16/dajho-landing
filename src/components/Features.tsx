import { Link } from 'react-router-dom'
import { Icon, type IconName } from './Icon'

const features: { icon: IconName; title: string; description: string }[] = [
  {
    icon: 'money',
    title: 'Controla tu flujo de caja',
    description:
      'Registra ventas y gastos fácilmente y mantén tus finanzas claras todos los días.',
  },
  {
    icon: 'box',
    title: 'Gestiona tu inventario',
    description:
      'Conoce qué productos rotan más, evita pérdidas y pide a tiempo lo necesario.',
  },
  {
    icon: 'smartphone',
    title: 'Accede desde cualquier dispositivo',
    description:
      'Administra tu negocio desde el celular o computador, estés donde estés, sin complicaciones.',
  },
  {
    icon: 'chart',
    title: 'Toma decisiones con datos reales',
    description:
      'Revisa estadísticas claras y reportes automáticos que muestran cómo hacer crecer tu negocio.',
  },
  {
    icon: 'users',
    title: 'Maneja clientes, proveedores y empleados',
    description:
      'Organiza contactos, controla pagos pendientes y fortalece relaciones clave en un solo lugar.',
  },
  {
    icon: 'shield',
    title: 'Formaliza tu negocio',
    description:
      'Genera notas de venta RIMPE fácilmente y cumple con requisitos legales para crecer con confianza.',
  },
]

export default function Features() {
  return (
    <section id="funcionalidades" className="py-16 sm:py-24 bg-gray-50 scroll-mt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            ¿Qué puedes hacer con DAJHO?
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Herramientas completas para administrar tu tienda sin complicaciones.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="card-lift relative bg-white p-8 rounded-2xl shadow-sm hover:shadow-md hover:border-primary-100 border border-transparent text-center group overflow-hidden"
            >
              {/* Corner accent on hover */}
              <div className="absolute top-0 right-0 w-12 h-12 bg-primary-500 rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-all duration-300" />

              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl group-hover:from-primary-50 group-hover:to-primary-100 group-hover:scale-110 transition-all duration-300 shadow-sm">
                <Icon name={feature.icon} className="w-7 h-7 text-primary-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-sm leading-6 text-gray-500">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
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
