import FadeIn from '../components/FadeIn'
import { SERVICES } from '../data'

export default function ServicesSection() {
  return (
    <section
      id="price"
      className="bg-white rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 relative z-0"
    >
      <h2
        className="text-[#0C0C0C] font-black uppercase text-center mb-16 sm:mb-20 md:mb-28"
        style={{ fontSize: 'clamp(3rem, 12vw, 160px)', lineHeight: 1 }}
      >
        Services
      </h2>

      <div className="max-w-5xl mx-auto">
        {SERVICES.map((service, i) => (
          <FadeIn
            key={service.num}
            delay={i * 0.1}
            className="flex items-start gap-4 sm:gap-8 py-8 sm:py-10 md:py-12"
            style={{
              borderTop: i === 0 ? 'none' : '1px solid rgba(12, 12, 12, 0.15)',
            }}
          >
            <span
              className="font-black text-[#0C0C0C] shrink-0"
              style={{ fontSize: 'clamp(3rem, 10vw, 140px)', lineHeight: 1 }}
            >
              {service.num}
            </span>
            <div className="flex flex-col gap-2 sm:gap-3 pt-1 sm:pt-2 min-w-0">
              <h3
                className="font-medium uppercase text-[#0C0C0C]"
                style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
              >
                {service.name}
              </h3>
              <p
                className="font-light leading-relaxed max-w-2xl text-[#0C0C0C]"
                style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)', opacity: 0.6 }}
              >
                {service.desc}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
