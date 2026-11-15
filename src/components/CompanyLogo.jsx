// Renders an employer's real logo inside a consistent rounded tile.
// Falls back to a monochrome monogram (matching the site's "MK" mark) when
// no logo image is supplied.
const MARKS = {
  'PwC ETIC': 'PwC',
  'Project Management Institute': 'PMI',
  'Accord Business Group': 'ABG',
  'Eastman Kodak Company': 'EK',
}

function markFor(company) {
  if (MARKS[company]) return MARKS[company]
  const words = company.split(/\s+/).filter(w => !/^(the|of|and|&|group|company|inc|ltd)$/i.test(w))
  return words.slice(0, 2).map(w => w[0]).join('').toUpperCase()
}

const SIZES = {
  sm: 'w-9 h-9 rounded-lg text-[11px]',
  md: 'w-11 h-11 rounded-xl text-xs',
  lg: 'w-12 h-12 rounded-xl text-sm',
}

export default function CompanyLogo({ company, logo, size = 'md', className = '' }) {
  if (logo) {
    return (
      <span
        className={`inline-flex items-center justify-center shrink-0 overflow-hidden bg-white border border-ink-200 ${SIZES[size]} ${className}`}
      >
        <img src={logo} alt={`${company} logo`} loading="lazy" className="w-full h-full object-cover" />
      </span>
    )
  }

  return (
    <span
      className={`inline-flex items-center justify-center shrink-0 bg-ink-900 text-white font-semibold tracking-tight select-none ${SIZES[size]} ${className}`}
      aria-hidden="true"
    >
      {markFor(company)}
    </span>
  )
}
