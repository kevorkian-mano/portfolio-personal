// Monochrome monogram marks for employers. Consistent with the site's own
// "MK" brand mark so the logo treatment reads as one deliberate system.
const MARKS = {
  'PwC ETIC': 'PwC',
  'Project Management Institute': 'PMI',
  'Accord Business Group': 'ABG',
  'Eastman Kodak Company': 'EK',
}

function markFor(company) {
  if (MARKS[company]) return MARKS[company]
  // Fallback: initials from the first two significant words.
  const words = company.split(/\s+/).filter(w => !/^(the|of|and|&|group|company|inc|ltd)$/i.test(w))
  return words.slice(0, 2).map(w => w[0]).join('').toUpperCase()
}

const SIZES = {
  sm: 'w-9 h-9 text-[11px] rounded-lg',
  md: 'w-11 h-11 text-xs rounded-xl',
  lg: 'w-12 h-12 text-sm rounded-xl',
}

export default function CompanyLogo({ company, size = 'md', className = '' }) {
  return (
    <span
      className={`inline-flex items-center justify-center shrink-0 bg-ink-900 text-white font-semibold tracking-tight select-none ${SIZES[size]} ${className}`}
      aria-hidden="true"
    >
      {markFor(company)}
    </span>
  )
}
