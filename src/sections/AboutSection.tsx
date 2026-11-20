import FadeIn from '../components/FadeIn'
import AnimatedText from '../components/AnimatedText'
import ContactButton from '../components/ContactButton'
import { profile, stats } from '../data'

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col items-center justify-center px-5 sm:px-8 md:px-10 py-20 sm:py-24 bg-[#0C0C0C]"
    >
      <div className="flex flex-col items-center gap-10 sm:gap-14 md:gap-16 relative z-10 w-full max-w-5xl">
        <FadeIn
          as="h2"
          delay={0}
          y={40}
          className="hero-heading font-black uppercase leading-none tracking-tight text-center"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          About me
        </FadeIn>

        <div className="flex flex-col items-center gap-16 sm:gap-20 md:gap-24 w-full">
          <AnimatedText
            text={profile.about}
            className="text-[#D7E2EA] font-medium text-center leading-relaxed max-w-[640px] mx-auto"
            style={{ fontSize: 'clamp(1rem, 2vw, 1.35rem)' }}
          />

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[#D7E2EA]/10 w-full rounded-2xl overflow-hidden border border-[#D7E2EA]/10">
            {stats.map((s, i) => (
              <FadeIn
                key={s.label}
                delay={i * 0.08}
                className="bg-[#0C0C0C] px-5 py-8 text-center flex flex-col gap-2"
              >
                <span className="hero-heading font-black tracking-tight" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', lineHeight: 1 }}>
                  {s.value}
                </span>
                <span className="text-[#D7E2EA]/60 text-xs sm:text-sm uppercase tracking-wider leading-snug">
                  {s.label}
                </span>
              </FadeIn>
            ))}
          </div>

          <ContactButton />
        </div>
      </div>
    </section>
  )
}
