import { Link, useParams } from 'react-router-dom'
import { Icon } from '../components/Icon'
import { articles } from '../data/blog'

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>()
  const article = articles.find((a) => a.slug === slug)

  if (!article) {
    return (
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-2xl px-4 text-center">
          <Icon name="help" className="mx-auto w-12 h-12 mb-4 text-primary-400" />
          <h1 className="text-3xl font-bold text-gray-900">Artículo no encontrado</h1>
          <p className="mt-3 text-gray-600">
            El artículo que buscas no existe o fue movido.
          </p>
          <Link
            to="/blog"
            className="btn-shine mt-8 inline-flex items-center gap-2 rounded-xl bg-primary-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-primary-200"
          >
            <Icon name="arrow-right" className="w-4 h-4 rotate-180" />
            Volver al blog
          </Link>
        </div>
      </section>
    )
  }

  const related = articles.filter((a) => a.slug !== article.slug).slice(0, 2)

  return (
    <section className="relative py-20 sm:py-28 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-blue-50" />
        <div className="absolute inset-0 pattern-dots opacity-40" />
      </div>

      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        {/* Migas de pan */}
        <nav className="mb-8 flex items-center gap-2 text-sm text-gray-500" aria-label="Breadcrumb">
          <Link to="/" className="hover:text-primary-600 transition-colors">Inicio</Link>
          <Icon name="arrow-right" className="w-3.5 h-3.5 rotate-180" />
          <Link to="/blog" className="hover:text-primary-600 transition-colors">Blog</Link>
          <Icon name="arrow-right" className="w-3.5 h-3.5 rotate-180" />
          <span className="text-gray-700 font-medium truncate">{article.title}</span>
        </nav>

        <article className="glass-card rounded-3xl p-6 sm:p-10">
          <div className="mb-6 flex flex-wrap items-center gap-3 text-xs text-gray-500">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-primary-50 px-3 py-1 font-medium text-primary-700">
              <Icon name={article.icon} className="w-3.5 h-3.5" />
              {article.category}
            </span>
            <span className="flex items-center gap-1">
              <Icon name="calendar" className="w-3.5 h-3.5" />
              {article.date}
            </span>
            <span className="flex items-center gap-1">
              <Icon name="clock" className="w-3.5 h-3.5" />
              {article.readTime} de lectura
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-gray-900">
            {article.title}
          </h1>
          <p className="mt-4 text-lg text-gray-600 leading-8">{article.excerpt}</p>

          <div className="mt-8 space-y-8">
            {article.content.map((section, i) => (
              <div key={i}>
                <h2 className="text-xl font-bold text-gray-900">{section.heading}</h2>
                <p className="mt-3 text-base leading-7 text-gray-600">{section.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex items-center justify-between border-t border-gray-100 pt-6">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-primary-500 to-primary-700 text-white text-sm font-bold">
                {article.author.charAt(0)}
              </span>
              <div>
                <div className="text-sm font-semibold text-gray-900">{article.author}</div>
                <div className="text-xs text-gray-500">Publicado por el equipo</div>
              </div>
            </div>
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:border-primary-400 hover:text-primary-600 transition-colors"
            >
              <Icon name="arrow-right" className="w-4 h-4 rotate-180" />
              Ver más artículos
            </Link>
          </div>
        </article>

        {/* Artículos relacionados */}
        {related.length > 0 && (
          <div className="mt-14">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Sigue leyendo</h2>
            <div className="grid gap-6 sm:grid-cols-2">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  to={`/blog/${r.slug}`}
                  className="card-lift group rounded-2xl border border-gray-100 bg-white p-6 shadow-sm hover:border-primary-100"
                >
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary-50 text-primary-600 mb-3">
                    <Icon name={r.icon} className="w-5 h-5" />
                  </span>
                  <h3 className="text-sm font-semibold text-gray-900 leading-6 group-hover:text-primary-700 transition-colors">
                    {r.title}
                  </h3>
                  <p className="mt-1 text-xs text-gray-500">{r.readTime} de lectura</p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
