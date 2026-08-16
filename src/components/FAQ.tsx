import { useState } from 'react'

const faqs = [
  {
    question: '¿DAJHO funciona sin internet?',
    answer:
      'Sí, DAJHO guarda tus datos localmente (SQLite). Puedes vender sin internet y tus datos estarán seguros.',
  },
  {
    question: '¿Qué es RIMPE?',
    answer:
      'Es el régimen para microempresas en Ecuador. Las notas de venta RIMPE no cobran IVA. DAJHO genera estos documentos automáticamente.',
  },
  {
    question: '¿Puedo usar DAJHO en mi celular?',
    answer:
      'Sí, DAJHO es una aplicación web que funciona en cualquier navegador (celular, tablet, computador).',
  },
  {
    question: '¿Dónde se guardan mis datos?',
    answer:
      'Los datos se guardan en tu dispositivo (local) por defecto. Si pagas el plan Pro, puedes tener respaldos automáticos en la nube.',
  },
  {
    question: '¿Cómo sé qué plan necesito?',
    answer:
      'Si tienes 1-2 empleados y quieres estadísticas básicas, el plan Gratis es suficiente. Si necesitas más funcionalidades, revisa Pro o Pro+.',
  },
  {
    question: '¿Puedo cambiar de plan en cualquier momento?',
    answer:
      'Sí, puedes actualizar o cancelar tu suscripción en cualquier momento.',
  },
  {
    question: '¿DAJHO reemplaza a mi contador?',
    answer:
      'DAJHO te da reportes claros, pero no reemplaza un contador para declaraciones fiscales.',
  },
  {
    question: '¿Cómo empiezo?',
    answer:
      'Regístrate gratis y empieza a usar DAJHO en 5 minutos.',
  },
]

function FAQItem({
  question,
  answer,
  open,
  onToggle,
}: {
  question: string
  answer: string
  open: boolean
  onToggle: () => void
}) {
  return (
    <div className="border-b border-gray-200">
      <button
        type="button"
        className="flex w-full items-center justify-between gap-4 py-5 text-left text-base font-medium text-gray-900 hover:text-primary-600 transition-colors"
        onClick={onToggle}
        aria-expanded={open}
      >
        <span>{question}</span>
        <span
          className={`relative flex-shrink-0 w-8 h-8 rounded-full border transition-all duration-300 ${
            open
              ? 'bg-primary-600 border-primary-600 rotate-45'
              : 'border-gray-300 hover:border-primary-400'
          }`}
        >
          <svg
            className={`absolute inset-0 m-auto w-4 h-4 transition-colors ${open ? 'text-white' : 'text-gray-500'}`}
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
        </span>
      </button>
      <div
        className={`grid transition-all duration-300 ease-out ${
          open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <p className="pb-5 pr-12 text-base text-gray-600">{answer}</p>
        </div>
      </div>
    </div>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="py-16 sm:py-24 bg-white scroll-mt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mx-auto mb-4 inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-primary-50 text-primary-600">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Preguntas frecuentes
          </h2>
        </div>

        <div className="mx-auto mt-12 max-w-3xl divide-y divide-gray-200 border-t border-gray-200">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              open={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
