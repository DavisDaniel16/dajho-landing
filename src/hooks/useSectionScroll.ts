import { useLocation, useNavigate } from 'react-router-dom'

/**
 * Permite desplazarse a una sección de la landing.
 * Si estamos en otra página, navega primero a la raíz y luego hace scroll.
 */
export function useSectionScroll() {
  const navigate = useNavigate()
  const { pathname } = useLocation()

  return (id: string) => {
    const scroll = () => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    if (pathname !== '/') {
      navigate('/')
      window.setTimeout(scroll, 150)
    } else {
      scroll()
    }
  }
}
