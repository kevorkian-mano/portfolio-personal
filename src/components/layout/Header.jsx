import { useState, useEffect } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { GithubIcon } from '../icons/Brand'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/experience', label: 'Experience' },
  { to: '/projects', label: 'Projects' },
  { to: '/skills', label: 'Skills' },
  { to: '/achievements', label: 'Achievements' },
  { to: '/contact', label: 'Contact' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => { setOpen(false) }, [location.pathname])

  return (
    <header className="sticky top-0 z-50 bg-white/85 backdrop-blur-md border-b border-ink-100">
      <div className="container-content flex items-center justify-between h-14">
        <Link to="/" className="flex items-center gap-2.5 group shrink-0">
          <span className="w-7 h-7 rounded-md bg-ink-900 text-white flex items-center justify-center text-xs font-bold tracking-tight">
            MK
          </span>
          <span className="hidden sm:inline font-semibold text-ink-900 text-sm tracking-tight">
            Manuel Haik Kevorkian
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-0.5">
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) =>
                `relative px-3 py-1.5 text-[13px] font-medium rounded-md transition-colors ${
                  isActive
                    ? 'text-ink-900'
                    : 'text-ink-500 hover:text-ink-900'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {label}
                  {isActive && (
                    <span className="absolute left-3 right-3 -bottom-[15px] h-0.5 bg-ink-900 rounded-full" />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2 shrink-0">
          <a
            href="https://github.com/kevorkian-mano"
            target="_blank"
            rel="noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-[13px] font-medium text-ink-700 hover:text-ink-900 bg-white border border-ink-200 rounded-md hover:border-ink-300 hover:shadow-sm transition-all"
          >
            <GithubIcon size={13} /> GitHub
          </a>
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden w-9 h-9 flex items-center justify-center rounded-md text-ink-700 hover:bg-ink-100 transition-colors"
            aria-label="Toggle menu"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-ink-100 bg-white">
          <nav className="container-content py-3 flex flex-col gap-0.5">
            {navLinks.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                className={({ isActive }) =>
                  `px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                    isActive ? 'text-ink-900 bg-ink-50' : 'text-ink-600 hover:bg-ink-50'
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
