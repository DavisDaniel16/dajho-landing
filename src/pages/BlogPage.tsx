import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Icon } from '../components/Icon'
import { articles } from '../data/blog'

const categories = ['Todos', 'Guía', 'RIMPE', 'Consejos']

export default function BlogPage() {
  const [filter, setFilter] = useState('Todos')
  const [search, setSearch] = useState('')

  const filtered = articles.filter((a) => {
    const matchCategory = filter === 'Todos' || a.category === filter
    const q = search.trim().toLowerCase()
    const matchSearch =
      !q || a.title.toLowerCase().includes(q) || a.excerpt.toLowerCase().includes(q)
    return matchCategory && matchSearch
  })

  return (
    <section className="relative py-20 sm:py-28 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-blue-50" />
        <div className="absolute inset-0 pattern-dots opacity-40" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Aprende con DAJHO
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Consejos, guías y recursos para hacer crecer tu negocio.
          </p>
        </div>

        {/* Búsqueda y filtros */}
        <div className="mx-auto mt-8 flex max-w-xl flex-col gap-4 sm:flex-row">
          <div className="relative flex-1">
            <Icon name="search" className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Buscar artículos…"
              aria-label="Buscar artículos"
              className="w-full rounded-xl border border-gray-300 bg-white py-3 pl-11 pr-4 text-sm text-gray-900 placeholder-gray-400 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all"
            />
          </div>
        </div>

        <div className="mt-6 flex flex-wrap justify-center gap-2">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                filter === c
                  ? 'bg-primary-600 text-white shadow-sm'
                  : 'border border-gray-300 bg-white text-gray-600 hover:border-primary-400 hover:text-primary-600'
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {filtered.length === 0 ? (
          <div className="mt-16 text-center text-gray-500">
            <Icon name="search" className="mx-auto w-10 h-10 mb-3 text-gray-300" />
            <p className="font-medium text-gray-700">No encontramos artículos con esos criterios.</p>
            <p className="text-sm mt-1">Prueba con otra búsqueda o categoría.</p>
          </div>
        ) : (
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((article) => (
              <Link
                key={article.slug}
                to={`/blog/${article.slug}`}
                className="card-lift group flex flex-col rounded-2xl border border-gray-100 bg-white p-6 shadow-sm hover:border-primary-100"
              >
                <div className="mb-4 flex items-center justify-between">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary-50 text-primary-600 group-hover:bg-primary-100 transition-colors">
                    <Icon name={article.icon} className="w-5 h-5" />
                  </span>
                  <span className="inline-flex items-center rounded-full bg-primary-50 px-3 py-1 text-xs font-medium text-primary-700 group-hover:bg-primary-100 transition-colors">
                    {article.category}
                  </span>
                </div>

                <h2 className="text-base font-semibold text-gray-900 leading-6">{article.title}</h2>
                <p className="mt-2 text-sm text-gray-600 leading-6 flex-1">{article.excerpt}</p>

                <div className="mt-6 flex items-center justify-between border-t border-gray-100 pt-4">
                  <div className="flex items-center gap-3 text-xs text-gray-400">
                    <span className="font-medium text-gray-500">{article.author}</span>
                    <span className="flex items-center gap-1">
                      <Icon name="calendar" className="w-3.5 h-3.5" />
                      {article.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Icon name="clock" className="w-3.5 h-3.5" />
                      {article.readTime}
                    </span>
                  </div>
                  <span className="text-xs font-medium text-primary-600 group-hover:text-primary-700 inline-flex items-center gap-1">
                    Leer
                    <Icon name="arrow-right" className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
