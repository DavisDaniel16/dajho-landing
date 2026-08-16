import { Link } from 'react-router-dom'
import { Icon } from '../components/Icon'

export default function NotFound() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-blue-50" />
        <div className="absolute inset-0 pattern-dots opacity-40" />
      </div>

      <div className="mx-auto max-w-xl px-4 text-center">
        <div className="text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-blue-500">
          404
        </div>
        <h1 className="mt-4 text-2xl font-bold text-gray-900">Página no encontrada</h1>
        <p className="mt-3 text-gray-600">
          La página que buscas no existe o fue movida a otra dirección.
        </p>
        <Link
          to="/"
          className="btn-shine mt-8 inline-flex items-center gap-2 rounded-xl bg-primary-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-primary-200"
        >
          <Icon name="arrow-right" className="w-4 h-4 rotate-180" />
          Volver al inicio
        </Link>
      </div>
    </section>
  )
}
