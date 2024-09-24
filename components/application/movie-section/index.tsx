import Link from 'next/link'

interface MovieSectionProps {
  title: string
  children: React.ReactNode
}

export function MovieSection({ title, children }: MovieSectionProps) {
  const sectionSlug = title.toLowerCase().replace(/\s+/g, '-')

  return (
    <section className="py-8 md:py-12 lg:py-16">
      <div className="container px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            {title}
          </h2>
          <Link
            href={`/filmes/${sectionSlug}`}
            className="text-sm font-medium hover:underline underline-offset-4"
          >
            Ver tudo
          </Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6 md:gap-8">
          {children}
        </div>
      </div>
    </section>
  )
}
