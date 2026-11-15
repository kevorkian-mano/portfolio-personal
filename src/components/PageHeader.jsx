export default function PageHeader({ eyebrow, title, description }) {
  return (
    <div className="relative border-b border-ink-100 bg-white">
      <div className="absolute inset-0 dot-pattern opacity-40" />
      <div className="relative container-content py-14 md:py-20">
        <div className="animate-fade-in-up max-w-2xl">
          <p className="text-[11px] font-semibold text-ink-400 tracking-[0.18em] uppercase mb-3">
            {eyebrow}
          </p>
          <h1 className="text-3xl md:text-5xl font-semibold text-ink-900 tracking-tight leading-[1.1] mb-4">
            {title}
          </h1>
          {description && (
            <p className="text-base md:text-lg text-ink-500 leading-relaxed">
              {description}
            </p>
          )}
        </div>
      </div>
    </div>
  )
}
