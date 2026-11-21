import FadeIn from '../components/FadeIn'
import Magnet from '../components/Magnet'
import ContactButton from '../components/ContactButton'
import { profile } from '../data'
import portrait from '../assets/portrait.webp'

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export default function HeroSection() {
  return (
    <section className="relative h-screen flex flex-col" style={{ overflowX: 'clip' }}>
      {/* Navbar */}
      <FadeIn
        as="nav"
        delay={0}
        y={-20}
        className="flex items-center justify-between gap-4 px-6 md:px-10 pt-6 md:pt-8 relative z-20"
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

      {/* Portrait (magnetic cursor-follow) */}
      <div className="absolute left-1/2 -translate-x-1/2 z-10 top-[11%] sm:top-[9%] md:top-[7%] w-[230px] sm:w-[300px] md:w-[360px] lg:w-[410px] pointer-events-none">
        {/* soft glow behind the head */}
        <div
          className="absolute inset-0 -z-10"
          style={{ background: 'radial-gradient(circle at 50% 45%, rgba(187,204,215,0.16), transparent 62%)' }}
        />
        <FadeIn delay={0.3} y={30} className="pointer-events-auto">
          <Magnet padding={150} strength={3} activeTransition="transform 0.3s ease-out" inactiveTransition="transform 0.6s ease-in-out">
            <img src={portrait} alt="Manuel" className="w-full h-auto select-none drop-shadow-2xl" draggable={false} />
          </Magnet>
        </FadeIn>
      </div>

      {/* Heading + bottom bar */}
      <div className="relative z-20 flex-1 flex flex-col justify-end px-6 md:px-10">
        <div className="overflow-hidden">
          <FadeIn
            as="h1"
            delay={0.15}
            y={40}
            className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-[11vw] sm:text-[12vw] md:text-[12.5vw] lg:text-[13vw] mt-6 sm:mt-4 md:-mt-5"
          >
            Hi, i&rsquo;m {profile.firstName}
          </FadeIn>
        </div>

        <div className="flex flex-col gap-6 pb-7 sm:pb-8 md:pb-10">
          <div className="flex justify-between items-end gap-6 relative z-20">
            <FadeIn delay={0.35} y={20}>
              <p
                className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug max-w-[220px] sm:max-w-[300px] md:max-w-[380px]"
                style={{ fontSize: 'clamp(0.75rem, 1.4vw, 1.5rem)' }}
              >
                {profile.tagline}
              </p>
            </FadeIn>

            <FadeIn delay={0.5} y={20}>
              <ContactButton />
            </FadeIn>
          </div>

          <FadeIn
            delay={0.6}
            y={16}
            className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[#D7E2EA]/60 text-xs sm:text-sm uppercase tracking-wider pt-4 border-t border-[#D7E2EA]/10"
          >
            <span>{profile.location}</span>
            <span className="hidden sm:inline">GIU · Expected Jun 2027</span>
            <a href={profile.github} target="_blank" rel="noreferrer" className="hover:text-[#D7E2EA] transition-colors">
              github.com/kevorkian-mano
            </a>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
