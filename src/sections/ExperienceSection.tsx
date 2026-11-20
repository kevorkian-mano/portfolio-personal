import FadeIn from '../components/FadeIn'
import { experiences } from '../data'

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="bg-[#0C0C0C] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-28"
    >
      <FadeIn
        as="h2"
        delay={0}
        y={40}
        className="hero-heading font-black uppercase leading-none tracking-tight text-center mb-14 sm:mb-20"
        style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
      >
        Experience
      </FadeIn>

      <div className="max-w-5xl mx-auto flex flex-col gap-4 sm:gap-5">
        {experiences.map((exp, i) => (
          <FadeIn
            key={exp.company}
            delay={i * 0.08}
            className="rounded-[28px] sm:rounded-[36px] border border-[#D7E2EA]/15 bg-white/[0.02] p-5 sm:p-7 md:p-8 transition-colors hover:border-[#D7E2EA]/30"
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-5">
              <div className="flex items-start gap-4">
                <span className="inline-flex items-center justify-center shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-2xl overflow-hidden bg-white border border-[#D7E2EA]/20">
                  <img src={exp.logo} alt={`${exp.company} logo`} className="w-full h-full object-cover" />
                </span>
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="text-[#D7E2EA] font-semibold uppercase tracking-wide text-base sm:text-xl">
                      {exp.company}
                    </h3>
                    {exp.current && (
                      <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full border border-[#D7E2EA]/30 text-[#D7E2EA]/70 text-[10px] font-semibold uppercase tracking-wider">
                        <span className="w-1 h-1 rounded-full bg-[#BBCCD7]" /> Current
                      </span>
                    )}
                  </div>
                  <p className="text-[#D7E2EA]/70 text-sm sm:text-base mt-1">{exp.role}</p>
                  <p className="text-[#D7E2EA]/40 text-xs mt-1">{exp.location}</p>
                </div>
              </div>
              <span className="text-[#D7E2EA]/50 text-xs sm:text-sm uppercase tracking-wider whitespace-nowrap shrink-0">
                {exp.period}
              </span>
            </div>

            <ul className="flex flex-col gap-2 mb-5">
              {exp.bullets.map((b, j) => (
                <li key={j} className="flex gap-3 text-[#D7E2EA]/75 text-sm sm:text-[15px] leading-relaxed font-light">
                  <span className="mt-2 w-1 h-1 rounded-full bg-[#D7E2EA]/40 shrink-0" />
                  {b}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2">
              {exp.tech.map((t) => (
                <span
                  key={t}
                  className="text-[11px] sm:text-xs text-[#D7E2EA]/60 border border-[#D7E2EA]/15 rounded-full px-3 py-1 uppercase tracking-wider"
                >
                  {t}
                </span>
              ))}
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
