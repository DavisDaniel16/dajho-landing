import { Link } from 'react-router-dom'
import { Icon, type IconName } from './Icon'

const categories: {
  icon: IconName
  title: string
  gradient: string
  items: string[]
}[] = [
  {
    icon: 'bag',
    title: 'Tiendas de ropa',
    gradient: 'from-pink-400 to-rose-500',
    items: ['Ropa y accesorios', 'Calzado', 'Boutiques', 'Bisutería'],
  },
  {
    icon: 'chef',
    title: 'Gastronomía',
    gradient: 'from-orange-400 to-red-500',
    items: ['Restaurantes', 'Cafeterías', 'Comida rápida', 'Panaderías'],
  },
  {
    icon: 'wrench',
    title: 'Servicios',
    gradient: 'from-blue-400 to-indigo-500',
    items: ['Talleres', 'Salones de belleza', 'Servicios profesionales', 'Veterinarias'],
  },
  {
    icon: 'store',
    title: 'Mercados y abastos',
    gradient: 'from-emerald-400 to-teal-500',
    items: ['Minimercados', 'Tiendas de barrio', 'Distribuidores', 'Verdulerías'],
  },
]

export default function BusinessTypes() {
  return (
    <section id="para-ti" className="py-20 px-6 bg-white scroll-mt-16">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
            No importa el tipo de negocio que tengas
          </h2>
          <p className="text-xl text-gray-500">En DAJHO somos tus aliados</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <div
              key={cat.title}
              className="border border-gray-200 rounded-2xl overflow-hidden flex flex-col h-full bg-white hover:shadow-lg transition-all duration-300"
            >
              {/* Header gradient as image placeholder */}
              <div className={`h-40 bg-gradient-to-br ${cat.gradient} flex items-center justify-center relative overflow-hidden`}>
                <span className="text-7xl opacity-30 absolute -right-4 -bottom-4">✦</span>
                <span className="relative z-10 drop-shadow-lg text-white">
                  <Icon name={cat.icon} className="w-12 h-12" />
                </span>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-lg font-bold mb-4">{cat.title}</h3>
                <ul className="text-sm text-gray-600 space-y-2.5 mb-6 flex-grow">
                  {cat.items.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-primary-500 rounded-full flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contacto"
                  className="block w-full text-center bg-gray-900 text-white py-2.5 rounded-lg text-sm font-semibold hover:bg-gray-800 transition-colors mt-auto inline-flex items-center justify-center gap-1.5"
                >
                  Contáctanos
                  <Icon name="arrow-right" className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
