import { useEffect, useState } from 'react'
import { Icon } from './Icon'
import { waLink } from '../data/site'

const MESSAGE = 'Hola DAJHO 👋, me gustaría recibir más información sobre la plataforma.'

export default function WhatsAppButton() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 240)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <a
      href={waLink(MESSAGE)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escríbenos por WhatsApp"
      title="Escríbenos por WhatsApp"
      className={`wa-fab fixed bottom-6 right-6 z-40 transition-all duration-300 ${
        visible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-6 pointer-events-none'
      }`}
    >
      <span className="wa-fab__pulse" aria-hidden="true" />
      <Icon name="whatsapp" className="wa-fab__icon" />
    </a>
  )
}
