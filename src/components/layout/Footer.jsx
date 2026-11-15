import { Mail, Award } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '../icons/Brand'

const socials = [
  { icon: GithubIcon, href: 'https://github.com/kevorkian-mano', label: 'GitHub' },
  { icon: LinkedinIcon, href: 'https://www.linkedin.com/in/manuel-haik-kevorkian-261102371/', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:mano.kevorkian@yahoo.com', label: 'Email' },
  { icon: Award, href: 'https://www.credly.com/users/manuel-kevorkian/edit/badges/credly', label: 'Credly' },
]

export default function Footer() {
  return (
    <footer className="border-t border-ink-100 bg-white mt-auto">
      <div className="container-content py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-center sm:text-left">
          <p className="text-sm text-ink-600">
            <span className="font-semibold text-ink-900">Manuel Youssef Haik Kevorkian</span>
            <span className="text-ink-400"> · © {new Date().getFullYear()}</span>
          </p>
        </div>
        <div className="flex gap-1.5">
          {socials.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('mailto') ? undefined : '_blank'}
              rel="noreferrer"
              aria-label={label}
              className="w-9 h-9 flex items-center justify-center rounded-md text-ink-500 hover:text-ink-900 hover:bg-ink-100 transition-colors"
            >
              <Icon size={15} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
