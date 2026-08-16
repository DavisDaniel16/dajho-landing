import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { Icon, type IconName } from './Icon'

type Billing = 'mensual' | 'trimestral' | 'anual'

const billingOptions: { key: Billing; label: string; badge?: string }[] = [
  { key: 'mensual', label: 'Mensual' },
  { key: 'trimestral', label: 'Trimestral', badge: '-10%' },
  { key: 'anual', label: 'Anual', badge: '-25%' },
]

const plans: {
  name: string
  icon: IconName
  price: Record<Billing, string>
  period: string
  description: string
  cta: string
  to: string
  featured: boolean
  features: { text: string; included: boolean }[]
}[] = [
  {
    name: 'Gratis',
    icon: 'smartphone',
    price: { mensual: '$0', trimestral: '$0', anual: '$0' },
    period: '/mes',
    description: 'Para empezar a gestionar tu negocio sin costo.',
    cta: 'Contáctanos',
    to: '/contacto',
    featured: false,
    features: [
      { text: 'Registro de ventas', included: true },
      { text: 'Registro de inventarios', included: true },
      { text: 'Gestión de clientes', included: true },
      { text: 'Gestión de proveedores', included: true },
      { text: 'Notas de venta RIMPE', included: true },
      { text: 'Modo offline', included: true },
      { text: 'Estadísticas avanzadas', included: false },
      { text: 'Backup automático', included: false },
      { text: 'Soporte prioritario', included: false },
    ],
  },
  {
    name: 'Pro',
    icon: 'laptop',
    price: { mensual: '$4.99', trimestral: '$4.49', anual: '$3.74' },
    period: '/mes',
    description: 'Para negocios en crecimiento que necesitan más control.',
    cta: 'Contáctanos',
    to: '/contacto',
    featured: true,
    features: [
      { text: 'Registro de ventas', included: true },
      { text: 'Registro de inventarios', included: true },
      { text: 'Gestión de clientes', included: true },
      { text: 'Gestión de proveedores', included: true },
      { text: 'Notas de venta RIMPE', included: true },
      { text: 'Modo offline', included: true },
      { text: 'Estadísticas avanzadas', included: true },
      { text: 'Empleados (hasta 5)', included: true },
      { text: 'Backup automático', included: true },
      { text: 'Soporte prioritario', included: true },
    ],
  },
  {
    name: 'Pro+',
    icon: 'building',
    price: { mensual: '$9.99', trimestral: '$8.99', anual: '$7.49' },
    period: '/mes',
    description: 'Para dueños de múltiples negocios o equipos grandes.',
    cta: 'Contactar ventas',
    to: '/contacto',
    featured: false,
    features: [
      { text: 'Todo lo del plan Pro', included: true },
      { text: 'Empleados ilimitados', included: true },
      { text: 'Múltiples negocios (hasta 3)', included: true },
      { text: 'Reportes personalizados', included: true },
      { text: 'API para integraciones', included: true },
      { text: 'Soporte 24/7', included: true },
    ],
  },
]

export default function Pricing() {
  const [billing, setBilling] = useState<Billing>('mensual')
  const segmentRef = useRef<HTMLDivElement>(null)
  const activeIndex = billingOptions.findIndex((o) => o.key === billing)

  const handleBilling = (key: Billing) => setBilling(key)

  return (
    <section id="planes" className="py-16 sm:py-24 bg-gray-50 scroll-mt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Planes y precios
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Elige el plan que mejor se ajuste a las necesidades de tu negocio.
          </p>

          {/* Segmented control con píldora deslizante (uiverse: toggle animado) */}
          <div
            ref={segmentRef}
            className="segmented mt-8 inline-flex bg-white rounded-full border border-gray-200 shadow-sm"
            role="tablist"
            aria-label="Periodo de facturación"
          >
            <span
              className="segmented__thumb"
              style={{
                width: `calc((100% - 8px) / ${billingOptions.length})`,
                transform: `translateX(${activeIndex * 100}%)`,
              }}
            />
            {billingOptions.map(({ key, label, badge }) => (
              <button
                key={key}
                type="button"
                role="tab"
                aria-selected={billing === key}
                onClick={() => handleBilling(key)}
                className={`segmented__option px-5 py-2 rounded-full text-sm font-medium ${
                  billing === key ? 'text-white' : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {label}
                {badge && (
                  <span
                    className={`ml-1.5 text-xs px-1.5 py-0.5 rounded ${
                      billing === key ? 'bg-white/25 text-white' : 'bg-green-100 text-green-700'
                    }`}
                  >
                    {badge}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-3 items-start max-w-5xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-8 flex flex-col h-full ${
                plan.featured
                  ? 'gradient-border bg-white shadow-xl lg:scale-105'
                  : 'card-lift border border-gray-200 bg-white shadow-sm hover:border-primary-200'
              }`}
            >
              {plan.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 rounded-full bg-primary-600 px-4 py-1 text-xs font-semibold text-white whitespace-nowrap shadow-lg shadow-primary-300">
                  <Icon name="star" className="w-3.5 h-3.5" />
                  Recomendado para emprendedores
                </span>
              )}

              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-50 text-primary-600 rounded-xl mb-4 border border-primary-100">
                  <Icon name={plan.icon} className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">{plan.name}</h3>
                <div className="mt-3">
                  <span className="text-4xl font-extrabold text-gray-900">{plan.price[billing]}</span>
                  <span className="text-sm text-gray-500 ml-1">{plan.period}</span>
                </div>
                <p className="mt-2 text-sm text-gray-500">{plan.description}</p>
              </div>

              <ul className="space-y-3 text-sm flex-grow" role="list">
                {plan.features.map((feature) => (
                  <li key={feature.text} className="flex items-center gap-3">
                    {feature.included ? (
                      <span className="w-5 h-5 rounded-full bg-green-50 flex items-center justify-center flex-shrink-0">
                        <svg className="w-3.5 h-3.5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                    ) : (
                      <span className="w-5 h-5 rounded-full bg-gray-50 flex items-center justify-center flex-shrink-0">
                        <svg className="w-3.5 h-3.5 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </span>
                    )}
                    <span className={feature.included ? 'text-gray-700' : 'text-gray-400 line-through decoration-gray-200'}>{feature.text}</span>
                  </li>
                ))}
              </ul>

              <Link
                to={plan.to}
                className={`mt-8 w-full py-3 rounded-xl text-sm font-semibold transition-all text-center inline-flex items-center justify-center gap-2 ${
                  plan.featured
                    ? 'btn-shine bg-primary-600 text-white shadow-lg shadow-primary-200'
                    : 'border-2 border-gray-300 bg-white text-gray-700 hover:border-primary-500 hover:text-primary-600 hover:bg-primary-50/40'
                }`}
              >
                {plan.cta}
                <Icon name="arrow-right" className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
