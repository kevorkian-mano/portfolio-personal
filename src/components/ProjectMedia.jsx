// Renders a project's screenshot inside a window-chrome frame, or a clean
// neutral cover tile when the project has no image.
export default function ProjectMedia({ project, className = '' }) {
  const { image, imageAlt, imageFit = 'contain', tag, title } = project

  return (
    <div className={`media-frame aspect-[16/10] border-b border-ink-100 ${className}`}>
      {/* window chrome */}
      <div className="absolute top-0 inset-x-0 h-7 bg-white/80 backdrop-blur-sm border-b border-ink-100 flex items-center gap-1.5 px-3 z-10">
        <span className="w-2 h-2 rounded-full bg-ink-200" />
        <span className="w-2 h-2 rounded-full bg-ink-200" />
        <span className="w-2 h-2 rounded-full bg-ink-200" />
        <span className="ml-2 text-[10px] text-ink-400 font-mono truncate">{tag}</span>
      </div>

      {image ? (
        <img
          src={image}
          alt={imageAlt || title}
          loading="lazy"
          className="w-full h-full pt-7"
          style={{ objectFit: imageFit, objectPosition: 'top center', background: imageFit === 'contain' ? 'var(--color-ink-50)' : undefined }}
        />
      ) : (
        <div className="absolute inset-0 pt-7 grid-pattern flex items-center justify-center">
          <span className="font-serif text-5xl text-ink-300 select-none">
            {title.split(' ').slice(0, 2).map(w => w[0]).join('')}
          </span>
        </div>
      )}
    </div>
  )
}
