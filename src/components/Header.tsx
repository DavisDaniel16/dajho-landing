import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Icon } from './Icon'
import { useSectionScroll } from '../hooks/useSectionScroll'

type NavItem =
  | { name: string; type: 'section'; id: string }
  | { name: string; type: 'link'; to: string }

const navigation: NavItem[] = [
  { name: 'Inicio', type: 'section', id: 'inicio' },
  { name: 'Cómo funciona', type: 'section', id: 'como-funciona' },
  { name: 'Funcionalidades', type: 'section', id: 'funcionalidades' },
  { name: 'Planes', type: 'section', id: 'planes' },
  { name: 'Blog', type: 'link', to: '/blog' },
  { name: 'FAQ', type: 'section', id: 'faq' },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()
  const scrollToSection = useSectionScroll()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Cierra el menú al cambiar de página
  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  // Bloquea el scroll del fondo cuando el menú móvil está abierto
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  const handleItem = (item: NavItem) => {
    setMobileOpen(false)
    if (item.type === 'section') scrollToSection(item.id)
  }

  const renderItem = (item: NavItem, mobile = false) => {
    const base = mobile
      ? 'block text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors text-left'
      : 'nav-link text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors'

    if (item.type === 'section') {
      return (
        <button key={item.name} type="button" onClick={() => handleItem(item)} className={base}>
          {item.name}
        </button>
      )
    }
    return (
      <Link key={item.name} to={item.to} onClick={() => setMobileOpen(false)} className={base}>
        {item.name}
      </Link>
    )
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white/85 backdrop-blur-md border-b transition-all duration-300 ${
        scrolled || mobileOpen
          ? 'border-gray-200 shadow-[0_8px_30px_-12px_rgba(15,23,42,0.15)]'
          : 'border-transparent'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group" aria-label="DAJHO — Inicio">
            <img
              src="/favicon.ico"
              alt="DAJHO"
              className="h-8 w-8 transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110"
            />
            <span className="text-xl font-extrabold tracking-tight text-gray-900">
              DAJHO<span className="text-primary-500">.</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {navigation.map((item) => renderItem(item))}
            <Link
              to="/contacto"
              className="btn-shine inline-flex items-center gap-2 rounded-full bg-primary-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-primary-200"
            >
              <Icon name="headset" className="w-4 h-4" />
              Contáctanos
            </Link>
          </nav>

          {/* Mobile menu button (hamburguesa animada) */}
          <button
            type="button"
            className="lg:hidden inline-flex items-center justify-center rounded-lg p-2 text-gray-700 hover:bg-gray-100 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={mobileOpen}
          >
            <span className={`burger ${mobileOpen ? 'burger--open' : ''}`}>
              <span className="burger__line" />
              <span className="burger__line" />
              <span className="burger__line" />
            </span>
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            mobileOpen ? 'max-h-[560px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="border-t border-gray-100 py-5 space-y-4">
            {navigation.map((item) => renderItem(item, true))}
            <div className="border-t border-gray-100 pt-4 space-y-3">
              <Link
                to="/contacto"
                onClick={() => setMobileOpen(false)}
                className="btn-shine inline-flex items-center gap-2 rounded-full bg-primary-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-primary-200"
              >
                <Icon name="headset" className="w-4 h-4" />
                Contáctanos
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
