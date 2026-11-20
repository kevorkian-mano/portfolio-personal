interface LiveProjectButtonProps {
  className?: string
  href?: string
  label?: string
}

export default function LiveProjectButton({
  className = '',
  href = '#',
  label = 'View Project',
}: LiveProjectButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`inline-block rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest px-6 py-2.5 sm:px-8 sm:py-3 text-xs sm:text-sm transition-colors hover:bg-[#D7E2EA]/10 ${className}`}
    >
      {label}
    </a>
  )
}
