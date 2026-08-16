import { Link } from 'react-router-dom'
import { Icon } from './Icon'
import { articles } from '../data/blog'

export default function Blog() {
  return (
    <section id="blog" className="py-16 sm:py-24 bg-white scroll-mt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Aprende con DAJHO
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Consejos, guías y recursos para hacer crecer tu negocio.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {articles.map((article) => (
            <Link
              key={article.slug}
              to={`/blog/${article.slug}`}
              className="card-lift group rounded-2xl border border-gray-100 bg-white p-6 shadow-sm hover:border-primary-100 flex flex-col"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary-50 text-primary-600 group-hover:bg-primary-100 transition-colors">
                  <Icon name={article.icon} className="w-5 h-5" />
                </span>
                <span className="inline-flex items-center rounded-full bg-primary-50 px-3 py-1 text-xs font-medium text-primary-700 group-hover:bg-primary-100 transition-colors">
                  {article.category}
                </span>
              </div>

              <h3 className="text-base font-semibold text-gray-900 leading-6 group-hover:text-primary-700 transition-colors">
                {article.title}
              </h3>

              <p className="mt-2 text-sm text-gray-600 leading-6 flex-1">
                {article.excerpt}
              </p>

              <div className="mt-6 flex items-center justify-between border-t border-gray-100 pt-4">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-medium text-gray-500">{article.author}</span>
                  <span className="text-gray-300">·</span>
                  <span className="text-xs text-gray-400">{article.date}</span>
                </div>
                <span className="inline-flex items-center gap-1 text-xs font-medium text-primary-600 group-hover:text-primary-700 transition-colors">
                  Leer más
                  <Icon name="arrow-right" className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 rounded-xl border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-700 shadow-sm hover:border-primary-400 hover:text-primary-600 transition-colors"
          >
            Ver todos los artículos
            <Icon name="arrow-right" className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

