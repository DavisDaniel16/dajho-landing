import type { ReactNode } from 'react'
import { Icon, type IconName } from './Icon'

interface LegalLayoutProps {
  icon: IconName
  title: string
  updated: string
  children: ReactNode
}

export default function LegalLayout({ icon, title, updated, children }: LegalLayoutProps) {
  return (
    <section className="relative py-20 sm:py-28 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-blue-50" />
        <div className="absolute inset-0 pattern-dots opacity-40" />
      </div>

      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <div className="glass-card rounded-3xl p-6 sm:p-10">
          <div className="mb-8 flex items-center gap-4">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary-600 text-white shadow-lg shadow-primary-200">
              <Icon name={icon} className="w-6 h-6" />
            </span>
            <div>
              <h1 className="text-2xl font-extrabold tracking-tight text-gray-900">{title}</h1>
              <p className="text-xs text-gray-500">Última actualización: {updated}</p>
            </div>
          </div>
          <div className="prose-sm space-y-6 text-gray-600">{children}</div>
        </div>
      </div>
    </section>
  )
}

export function LegalSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section>
      <h2 className="text-lg font-bold text-gray-900">{title}</h2>
      <div className="mt-2 space-y-3 text-sm leading-6">{children}</div>
    </section>
  )
}
