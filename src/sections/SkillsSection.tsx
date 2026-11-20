import FadeIn from '../components/FadeIn'
import { skillGroups } from '../data'

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="bg-white rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 relative z-0"
    >
      <h2
        className="text-[#0C0C0C] font-black uppercase text-center mb-16 sm:mb-20 md:mb-28"
        style={{ fontSize: 'clamp(3rem, 12vw, 160px)', lineHeight: 1 }}
      >
        Skills
      </h2>

      <div className="max-w-5xl mx-auto">
        {skillGroups.map((group, i) => (
          <FadeIn
            key={group.category}
            delay={i * 0.08}
            className="flex items-start gap-4 sm:gap-8 py-8 sm:py-10 md:py-12"
            style={{ borderTop: i === 0 ? 'none' : '1px solid rgba(12, 12, 12, 0.15)' }}
          >
            <span
              className="font-black text-[#0C0C0C] shrink-0"
              style={{ fontSize: 'clamp(3rem, 10vw, 140px)', lineHeight: 1 }}
            >
              {String(i + 1).padStart(2, '0')}
            </span>
            <div className="flex flex-col gap-3 sm:gap-4 pt-1 sm:pt-2 min-w-0">
              <h3
                className="font-medium uppercase text-[#0C0C0C]"
                style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
              >
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-[#0C0C0C] border border-[#0C0C0C]/15 rounded-full px-3 py-1 text-xs sm:text-sm font-light"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
