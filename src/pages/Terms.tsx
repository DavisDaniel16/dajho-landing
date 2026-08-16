import LegalLayout, { LegalSection } from '../components/LegalLayout'

export default function Terms() {
  return (
    <LegalLayout icon="file" title="Términos y condiciones" updated="16 de agosto de 2026">
      <LegalSection title="1. Aceptación de los términos">
        <p>
          Al acceder y utilizar DAJHO, aceptas cumplir estos términos y condiciones. Si no estás de acuerdo
          con alguna parte de ellos, te pedimos que no uses el servicio.
        </p>
      </LegalSection>

      <LegalSection title="2. Descripción del servicio">
        <p>
          DAJHO es un sistema de gestión para negocios populares en Ecuador que permite registrar ventas,
          administrar inventario, gestionar clientes y generar notas de venta RIMPE, funcionando incluso
          sin conexión a internet.
        </p>
      </LegalSection>

      <LegalSection title="3. Uso correcto de la cuenta">
        <p>
          Eres responsable de mantener la confidencialidad de tu cuenta y contraseña. Debes notificarnos de
          cualquier uso no autorizado. No puedes usar el servicio para actividades ilegales.
        </p>
      </LegalSection>

      <LegalSection title="4. Planes y pagos">
        <p>
          DAJHO ofrece un plan gratuito y planes de pago con funcionalidades adicionales. Los precios pueden
          cambiar con previo aviso. Puedes cancelar tu suscripción en cualquier momento.
        </p>
      </LegalSection>

      <LegalSection title="5. Propiedad intelectual">
        <p>
          El software, los diseños y el contenido de DAJHO son de nuestra propiedad o de nuestros
          licenciantes. No está permitido copiar, modificar o distribuir el software sin autorización.
        </p>
      </LegalSection>

      <LegalSection title="6. Limitación de responsabilidad">
        <p>
          DAJHO se proporciona "tal cual". No garantizamos que el servicio esté libre de errores ni que sea
          ininterrumpido. No somos responsables de daños directos o indirectos derivados del uso del servicio.
        </p>
      </LegalSection>

      <LegalSection title="7. Contacto">
        <p>
          Para consultas sobre estos términos, puedes escribirnos a davisvacacela@gmail.com.
        </p>
      </LegalSection>
    </LegalLayout>
  )
}
