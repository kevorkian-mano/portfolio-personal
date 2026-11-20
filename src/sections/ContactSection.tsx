import FadeIn from '../components/FadeIn'
import { profile, achievements } from '../data'

const CHANNELS = [
  { label: 'GitHub', value: 'kevorkian-mano', href: profile.github },
  { label: 'LinkedIn', value: 'Manuel Haik Kevorkian', href: profile.linkedin },
  { label: 'Credly', value: 'Badges & certifications', href: profile.credly },
]

export default function ContactSection() {
  return (
    <section id="contact" className="bg-[#0C0C0C] px-5 sm:px-8 md:px-10 pt-20 sm:pt-24 pb-10">
      <FadeIn
        as="h2"
        delay={0}
        y={40}
        className="hero-heading font-black uppercase leading-none tracking-tight text-center"
        style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
      >
        Let&rsquo;s talk
      </FadeIn>

      <div className="max-w-5xl mx-auto mt-12 sm:mt-16 flex flex-col gap-10">
        {/* Email */}
        <FadeIn className="flex flex-col items-center gap-3 text-center">
          <span className="text-[#D7E2EA]/50 uppercase tracking-widest text-xs">Email</span>
          <a
            href={`mailto:${profile.email}`}
            className="text-[#D7E2EA] font-medium break-all hover:opacity-70 transition-opacity"
            style={{ fontSize: 'clamp(1.1rem, 3.5vw, 2.25rem)' }}
          >
            {profile.email}
          </a>
          <span className="text-[#D7E2EA]/40 text-sm">{profile.phone} · {profile.location}</span>
        </FadeIn>

        {/* Channels */}
        <div className="grid sm:grid-cols-3 gap-3 sm:gap-4">
          {CHANNELS.map((c, i) => (
            <FadeIn key={c.label} delay={i * 0.08}>
              <a
                href={c.href}
                target="_blank"
                rel="noreferrer"
                className="group block h-full rounded-[24px] border border-[#D7E2EA]/15 bg-white/[0.02] p-5 transition-colors hover:border-[#D7E2EA]/35"
              >
                <span className="text-[#D7E2EA]/50 uppercase tracking-widest text-[11px]">{c.label}</span>
                <p className="text-[#D7E2EA] font-medium mt-2 group-hover:opacity-80 transition-opacity">{c.value}</p>
              </a>
            </FadeIn>
          ))}
        </div>

        {/* Achievements */}
        <FadeIn className="flex flex-wrap justify-center gap-2 sm:gap-3 pt-2">
          {achievements.map((a) => (
            <a
              key={a.title}
              href={a.link}
              target="_blank"
              rel="noreferrer"
              className="text-[11px] sm:text-xs text-[#D7E2EA]/60 border border-[#D7E2EA]/15 rounded-full px-3 py-1.5 uppercase tracking-wider hover:border-[#D7E2EA]/35 hover:text-[#D7E2EA] transition-colors"
            >
              {a.title}
            </a>
          ))}
        </FadeIn>

        {/* Footer line */}
        <div className="pt-8 border-t border-[#D7E2EA]/10 text-center">
          <p className="text-[#D7E2EA]/40 text-xs sm:text-sm uppercase tracking-wider">
            {profile.name} · © {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </section>
  )
}
