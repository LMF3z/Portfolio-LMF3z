import { TECH_CATEGORIES } from '../constants/techStack.constants';

export default function TechStack() {
  return (
    <section id='arsenal' className='py-28 px-6'>
      <div className='max-w-6xl mx-auto'>
        <div className='mb-16 reveal'>
          <span className='section-label'>// Tech Arsenal</span>
          <h2
            className='text-3xl md:text-5xl font-bold text-white mt-3'
            style={{ fontFamily: 'Cinzel, serif' }}
          >
            The <span className='text-gold-gradient'>Utility Belt</span>
          </h2>
          <p className='text-[#6b7280] mt-4 max-w-xl text-sm leading-relaxed'>
            Every tool chosen with purpose.
          </p>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5'>
          {TECH_CATEGORIES.map((cat, ci) => (
            <div
              key={cat.category}
              className={`glass-card rounded-sm p-6 reveal reveal-delay-${ci + 1}`}
            >
              <div className='flex items-center gap-3 mb-5'>
                <span className='text-gold text-xl'>{cat.icon}</span>
                <h3
                  className='text-white text-sm font-semibold tracking-wide'
                  style={{ fontFamily: 'Cinzel, serif' }}
                >
                  {cat.category}
                </h3>
              </div>
              <div className='space-y-3'>
                {cat.items.map((tech) => (
                  <div
                    key={tech.name}
                    className='group flex items-start justify-between'
                  >
                    <div>
                      <span
                        className='text-[#e2e2e2] text-sm font-medium group-hover:text-gold transition-colors duration-200'
                        style={{ fontFamily: 'JetBrains Mono, monospace' }}
                      >
                        {tech.name}
                        {'learning' in tech && tech.learning && (
                          <span className='ml-2 text-[10px] text-gold/60 border border-gold/20 rounded-sm px-1.5 py-0.5 align-middle'>
                            learning
                          </span>
                        )}
                      </span>
                      <p className='text-[#4b5563] text-xs mt-0.5'>
                        {tech.desc}
                      </p>
                    </div>
                    <span className='text-[#c9a84c44] text-xs mt-0.5 group-hover:text-[#c9a84c88] transition-colors duration-200'>
                      ▸
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
