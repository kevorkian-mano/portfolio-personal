import { Cloud, Code2, Sparkles } from 'lucide-react'
import FadeIn from '../components/FadeIn'
import Magnet from '../components/Magnet'
import ContactButton from '../components/ContactButton'
import { profile, experiences } from '../data'
import portrait from '../assets/portrait.webp'

const CHIPS = [
  { icon: Cloud, label: 'Cloud' },
  { icon: Code2, label: 'Full-Stack' },
  { icon: Sparkles, label: 'AI Tools' },
]

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

const CURRENT_BADGE = `${experiences[0].role} @ PwC`

function PortraitImg() {
  return (
    <FadeIn delay={0.3} y={30} className="pointer-events-auto">
      <Magnet
        padding={150}
        strength={3}
        activeTransition="transform 0.3s ease-out"
        inactiveTransition="transform 0.6s ease-in-out"
      >
        <img src={portrait} alt="Manuel" className="w-full h-auto select-none drop-shadow-2xl" draggable={false} />
      </Magnet>
    </FadeIn>
  )
}

function Glow() {
  return (
    <div
      className="absolute inset-0 -z-10"
      style={{ background: 'radial-gradient(circle at 50% 45%, rgba(187,204,215,0.16), transparent 62%)' }}
    />
  )
}

function StatusBadge() {
  return (
    <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#D7E2EA]/15 bg-white/[0.03] text-[#D7E2EA]/85 text-[10px] sm:text-xs font-medium uppercase tracking-wider">
      <span className="relative flex h-2 w-2 shrink-0">
        <span className="absolute inset-0 rounded-full bg-emerald-400 opacity-60 animate-ping" />
        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
      </span>
      {CURRENT_BADGE}
    </span>
  )
}

function Tagline() {
  return (
    <p
      className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug max-w-[190px] sm:max-w-[300px] md:max-w-[380px]"
      style={{ fontSize: 'clamp(0.75rem, 1.4vw, 1.5rem)' }}
    >
      {profile.tagline}
    </p>
  )
}

function MetaRow() {
  return (
    <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[#D7E2EA]/60 text-xs sm:text-sm uppercase tracking-wider pt-4 border-t border-[#D7E2EA]/10">
      <span>{profile.location}</span>
      <span className="hidden sm:inline">GIU · Expected Jun 2027</span>
      <a href={profile.github} target="_blank" rel="noreferrer" className="hover:text-[#D7E2EA] transition-colors">
        github.com/kevorkian-mano
      </a>
    </div>
  )
}

export default function HeroSection() {
  return (
    <section className="relative h-screen flex flex-col" style={{ overflowX: 'clip' }}>
      {/* Navbar */}
      <FadeIn
        as="nav"
        delay={0}
        y={-20}
        className="flex items-center justify-between gap-4 px-6 md:px-10 pt-[max(1.75rem,env(safe-area-inset-top))] md:pt-8 relative z-40"
      >
        <span className="text-[#D7E2EA] font-semibold uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] hidden sm:block">
          MK
        </span>
        <div className="flex items-center justify-between gap-4 sm:gap-8 flex-1 sm:flex-none">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] transition-opacity duration-200 hover:opacity-70"
            >
              {link.label}
            </a>
          ))}
        </div>
      </FadeIn>

      {/* Desktop portrait: big, centered, layered in front of the name */}
      <div className="hidden sm:block absolute left-1/2 -translate-x-1/2 z-30 sm:top-[11%] md:top-[8%] lg:top-[7%] w-[400px] md:w-[460px] lg:w-[520px] max-w-[86vw] pointer-events-none">
        <Glow />
        <PortraitImg />
      </div>

      {/* DESKTOP content: pinned to the bottom (unchanged) */}
      <div className="hidden sm:flex relative z-20 flex-1 flex-col justify-end px-6 md:px-10">
        <FadeIn delay={0.1} y={-10} className="mb-7">
          <StatusBadge />
        </FadeIn>
        <div className="overflow-hidden">
          <FadeIn
            as="h1"
            delay={0.15}
            y={40}
            className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-[12vw] md:text-[12.5vw] lg:text-[13vw] mt-4 md:-mt-5"
          >
            Hi, i&rsquo;m {profile.firstName}
          </FadeIn>
        </div>
        <div className="flex flex-col gap-6 pb-8 md:pb-10">
          <div className="flex justify-between items-end gap-6">
            <FadeIn delay={0.35} y={20}>
              <Tagline />
            </FadeIn>
            <FadeIn delay={0.5} y={20}>
              <ContactButton />
            </FadeIn>
          </div>
          <FadeIn delay={0.6} y={16}>
            <MetaRow />
          </FadeIn>
        </div>
      </div>

      {/* PHONE content: fills from under the nav to the bottom */}
      <div className="flex sm:hidden relative z-20 flex-1 flex-col justify-between px-6 pt-3 pb-7">
        {/* badge + name + portrait */}
        <div>
          <FadeIn delay={0.1} y={-10} className="mb-4">
            <StatusBadge />
          </FadeIn>
          <div className="relative">
            <div className="absolute right-0 -top-[26%] w-[170px] max-w-[48vw] z-30 pointer-events-none">
              <Glow />
              <PortraitImg />
            </div>
            <div className="overflow-hidden">
              <FadeIn
                as="h1"
                delay={0.15}
                y={40}
                className="hero-heading font-black uppercase tracking-tight leading-[0.92] w-full text-[18vw]"
              >
                Hi, i&rsquo;m {profile.firstName}
              </FadeIn>
            </div>
          </div>
        </div>

        {/* tagline + button + chips (one cluster) */}
        <div className="flex flex-col gap-5">
          <div className="flex justify-between items-end gap-4">
            <FadeIn delay={0.35} y={20}>
              <Tagline />
            </FadeIn>
            <FadeIn delay={0.5} y={20}>
              <ContactButton />
            </FadeIn>
          </div>

          <FadeIn delay={0.55} y={16} className="flex flex-wrap gap-2">
            {CHIPS.map(({ icon: Icon, label }) => (
              <span
                key={label}
                className="inline-flex items-center gap-1.5 rounded-full border border-[#D7E2EA]/15 bg-white/[0.03] px-3 py-1.5 text-[#D7E2EA]/80 text-[11px] font-medium uppercase tracking-wider"
              >
                <Icon size={13} className="text-[#BBCCD7]" />
                {label}
              </span>
            ))}
          </FadeIn>
        </div>

        {/* meta */}
        <FadeIn delay={0.6} y={16}>
          <MetaRow />
        </FadeIn>
      </div>
    </section>
  )
}
