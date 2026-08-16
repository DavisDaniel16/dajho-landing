import LegalLayout, { LegalSection } from '../components/LegalLayout'

export default function Cookies() {
  return (
    <LegalLayout icon="shield" title="Política de cookies" updated="16 de agosto de 2026">
      <LegalSection title="1. ¿Qué son las cookies?">
        <p>
          Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo al visitar un sitio
          web. Ayudan a que el sitio funcione correctamente y a mejorar tu experiencia.
        </p>
      </LegalSection>

      <LegalSection title="2. Cookies que utilizamos">
        <p>
          Utilizamos cookies estrictamente necesarias para el funcionamiento de la aplicación, como recordar
          tu sesión y tus preferencias. También podemos usar cookies analíticas, de forma anónima, para
          entender cómo se usa el producto y mejorarlo.
        </p>
      </LegalSection>

      <LegalSection title="3. Cómo controlar las cookies">
        <p>
          Puedes configurar tu navegador para bloquear o eliminar las cookies. Ten en cuenta que algunas
          funciones del servicio podrían dejar de funcionar correctamente si las desactivas.
        </p>
      </LegalSection>

      <LegalSection title="4. Cookies de terceros">
        <p>
          No utilizamos cookies de publicidad de terceros. Si en el futuro incorporamos herramientas de
          análisis externas, actualizaremos esta política para informarte.
        </p>
      </LegalSection>

      <LegalSection title="5. Contacto">
        <p>
          Si tienes dudas sobre nuestra política de cookies, contáctanos en davisvacacela@gmail.com.
        </p>
      </LegalSection>
    </LegalLayout>
  )
}
