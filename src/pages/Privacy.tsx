import LegalLayout, { LegalSection } from '../components/LegalLayout'

export default function Privacy() {
  return (
    <LegalLayout icon="lock" title="Política de privacidad" updated="16 de agosto de 2026">
      <LegalSection title="1. Información que recopilamos">
        <p>
          Recopilamos la información que nos proporcionas al crear tu cuenta, como tu nombre, correo
          electrónico y el nombre de tu negocio. También almacenamos los datos que registras en el sistema,
          como ventas, inventario y clientes.
        </p>
      </LegalSection>

      <LegalSection title="2. Almacenamiento local">
        <p>
          Una de las prioridades de DAJHO es tu privacidad. Por defecto, tus datos se almacenan de forma
          local en tu dispositivo mediante una base de datos SQLite. Esto significa que tú tienes el control
          total sobre tu información.
        </p>
      </LegalSection>

      <LegalSection title="3. Respaldos en la nube">
        <p>
          Solo si contratas el plan Pro podrás habilitar respaldos automáticos en la nube. Estos respaldos se
          utilizan únicamente para proteger tu información y nunca se comparten con terceros.
        </p>
      </LegalSection>

      <LegalSection title="4. Uso de la información">
        <p>
          Utilizamos tu información para ofrecerte el servicio, mejorar la experiencia y enviarte comunicaciones
          relacionadas con el producto. Nunca vendemos tus datos a terceros.
        </p>
      </LegalSection>

      <LegalSection title="5. Tus derechos">
        <p>
          Puedes solicitar el acceso, corrección o eliminación de tus datos personales en cualquier momento
          escribiéndonos a davisvacacela@gmail.com.
        </p>
      </LegalSection>

      <LegalSection title="6. Cambios en esta política">
        <p>
          Podemos actualizar esta política periódicamente. Te notificaremos de los cambios importantes a
          través del servicio o por correo electrónico.
        </p>
      </LegalSection>
    </LegalLayout>
  )
}
