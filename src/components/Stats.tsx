import { Icon, type IconName } from './Icon'

const stats: { value: string; label: string; icon: IconName }[] = [
  { value: '10,000+', label: 'negocios confían en DAJHO', icon: 'store' },
  { value: '100%', label: 'offline — tus datos seguros', icon: 'lock' },
  { value: '4.8', label: 'estrellas en Google Play', icon: 'star' },
  { value: '24/7', label: 'soporte disponible', icon: 'headset' },
]

export default function Stats() {
  return (
    <section className="relative py-12 sm:py-16 bg-gradient-to-r from-primary-800 via-primary-700 to-primary-800 overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 pattern-grid">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="mx-auto mb-3 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-white backdrop-blur-sm border border-white/15">
                <Icon name={stat.icon} className="w-6 h-6" />
              </div>
              <div className="text-3xl sm:text-4xl font-extrabold text-white">
                {stat.value}
              </div>
              <div className="mt-1 text-sm sm:text-base text-primary-200 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
