import type { IconName } from '../components/Icon'

export interface Article {
  slug: string
  category: string
  title: string
  excerpt: string
  author: string
  date: string
  readTime: string
  icon: IconName
  content: { heading: string; body: string }[]
}

export const articles: Article[] = [
  {
    slug: 'gestionar-negocio-5-pasos',
    category: 'Guía',
    title: 'Cómo empezar a gestionar tu negocio en 5 pasos',
    excerpt:
      'Descubre cómo organizar tus ventas, inventario y clientes sin complicaciones. Una guía práctica para emprendedores.',
    author: 'Equipo DAJHO',
    date: '15 Jul 2026',
    readTime: '6 min',
    icon: 'file',
    content: [
      {
        heading: '1. Registra tus productos',
        body: 'El primer paso es digitalizar tu catálogo. Con DAJHO puedes cargar tu inventario manualmente o importarlo desde Excel en segundos. Así siempre sabrás qué tienes y qué necesitas reponer.',
      },
      {
        heading: '2. Controla tu flujo de caja',
        body: 'Registra cada venta y cada gasto el mismo día. Verás tus ingresos y egresos en tiempo real, lo que te permite detectar fugas de dinero y tomar mejores decisiones.',
      },
      {
        heading: '3. Organiza tus clientes',
        body: 'Guarda la información de tus clientes, sus historiales de compra y sus deudas pendientes. Un cliente bien atendido vuelve, y con DAJHO tienes todo al alcance de un clic.',
      },
      {
        heading: '4. Emite notas RIMPE',
        body: 'Genera notas de venta RIMPE con formato oficial automáticamente. Cumples con el SRI sin complicaciones y tu negocio gana formalidad.',
      },
      {
        heading: '5. Analiza y crece',
        body: 'Revisa los reportes automáticos cada semana. Identifica qué productos rinden más, qué horarios tienen más ventas y enfoca tus esfuerzos donde realmente importa.',
      },
    ],
  },
  {
    slug: 'todo-sobre-rimpe-ecuador',
    category: 'RIMPE',
    title: 'Todo lo que necesitas saber sobre RIMPE en Ecuador',
    excerpt:
      'Guía completa sobre el régimen RIMPE: quiénes aplican, cómo emitir notas de venta y evitar multas del SRI.',
    author: 'Equipo DAJHO',
    date: '10 Jul 2026',
    readTime: '8 min',
    icon: 'flag',
    content: [
      {
        heading: '¿Qué es RIMPE?',
        body: 'RIMPE es el Régimen Simplificado para Emprendedores y Negocios Populares del Ecuador. Está dirigido a microempresas y pequeños negocios que facturan hasta cierto monto anual, y simplifica el cumplimiento tributario frente al SRI.',
      },
      {
        heading: '¿Quiénes aplican?',
        body: 'Aplican los emprendedores y negocios populares con ingresos brutos anuales dentro de los topes establecidos por la ley. Esto incluye tiendas de barrio, ferreterías, salones de belleza, restaurantes y muchos otros negocios.',
      },
      {
        heading: '¿Qué es una nota de venta RIMPE?',
        body: 'Es el comprobante que emites en tus ventas. Para negocios populares no aplica el cobro de IVA en estas notas, lo que simplifica tu contabilidad y reduce tu carga administrativa.',
      },
      {
        heading: 'Cómo emitirlas con DAJHO',
        body: 'DAJHO genera las notas de venta RIMPE automáticamente con el formato oficial. Solo registras la venta y el sistema crea el comprobante. Tú te concentras en vender, nosotros en los papeles.',
      },
      {
        heading: 'Evita multas del SRI',
        body: 'Llevar un registro ordenado y emitir los comprobantes correctamente evita sanciones. Con los reportes de DAJHO siempre tendrás la información lista para declarar.',
      },
    ],
  },
  {
    slug: 'errores-financieros-negocio-pequeno',
    category: 'Consejos',
    title: '5 errores financieros que todo negocio pequeño comete',
    excerpt:
      'Evita estos errores comunes que afectan la rentabilidad de tu negocio y aprende a mantener tus finanzas sanas.',
    author: 'Equipo DAJHO',
    date: '5 Jul 2026',
    readTime: '5 min',
    icon: 'bulb',
    content: [
      {
        heading: '1. No separar finanzas personales y del negocio',
        body: 'Mezclar el dinero del negocio con el personal es el error más común. Te impide saber si realmente ganas o pierdes. Lleva cuentas separadas desde el primer día.',
      },
      {
        heading: '2. Ignorar el inventario',
        body: 'No saber cuánto tienes en bodega genera pérdidas por productos vencidos o falta de stock en los momentos clave. Un inventario al día evita que pierdas ventas.',
      },
      {
        heading: '3. Vender sin registrar',
        body: 'Cada venta no registrada es información perdida. Sin datos no puedes analizar tu negocio ni prepararte para el SRI. Registra todo, incluso las ventas pequeñas.',
      },
      {
        heading: '4. No tener respaldo de datos',
        body: 'Perder la información de tus ventas puede ser devastador. Con el plan Pro de DAJHO tus datos se respaldan automáticamente en la nube.',
      },
      {
        heading: '5. Gastar sin control',
        body: 'Los gastos pequeños y constantes se acumulan. Revisa semanalmente dónde se va tu dinero y elimina los gastos que no aportan valor a tu negocio.',
      },
    ],
  },
]
