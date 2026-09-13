import { PROJECTS } from '../constants/projects.constants';
import BatSymbol from './BatSymbol';

export default function Projects() {
  return (
    <section id='files' className='py-28 px-6 bg-[#0d0d0d]'>
      <div className='max-w-6xl mx-auto'>
        <div className='mb-16 reveal'>
          <span className='section-label'>// The Files</span>
          <h2
            className='text-3xl md:text-5xl font-bold text-white mt-3'
            style={{ fontFamily: 'Cinzel, serif' }}
          >
            Featured <span className='text-gold-gradient'>Projects</span>
          </h2>
        </div>

        <div className='space-y-6'>
          {PROJECTS.map((p, i) => (
            <div
              key={p.file}
              className={`glass-card rounded-sm p-7 md:p-9 reveal reveal-delay-${i + 1}`}
            >
              <div className='flex flex-col md:flex-row md:items-start gap-6'>
                {/* Left column */}
                <div className='md:w-64 shrink-0'>
                  <div className='flex items-center gap-2 mb-3'>
                    <BatSymbol size={14} className='text-gold' />
                    <span
                      className='text-gold text-[0.65rem] tracking-[0.25em]'
                      style={{ fontFamily: 'JetBrains Mono, monospace' }}
                    >
                      {p.file}
                    </span>
                  </div>
                  <h3
                    className='text-white text-xl md:text-2xl font-bold leading-tight mb-1'
                    style={{ fontFamily: 'Cinzel, serif' }}
                  >
                    {p.title}
                  </h3>
                  <p className='text-[#6b7280] text-sm'>{p.subtitle}</p>
                  <div className='mt-4'>
                    <span
                      className='text-[0.6rem] tracking-[0.2em] uppercase px-2 py-1 rounded-sm border'
                      style={{
                        fontFamily: 'JetBrains Mono, monospace',
                        color: p.accent,
                        borderColor: `${p.accent}33`,
                        background: `${p.accent}0d`,
                      }}
                    >
                      {p.status}
                    </span>
                  </div>
                </div>

                {/* Divider */}
                <div className='hidden md:block w-px self-stretch bg-[rgba(201,168,76,0.1)]' />

                {/* Right column */}
                <div className='flex-1'>
                  <p className='text-titanium text-sm leading-relaxed mb-5'>
                    {p.description}
                  </p>
                  <div className='flex flex-wrap gap-2'>
                    {p.tags.map((t) => (
                      <span key={t} className='tech-tag'>
                        {t}
                      </span>
                    ))}
                  </div>
                  {'demoUrl' in p && p.demoUrl && (
                    <a
                      href={p.demoUrl}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='inline-flex items-center gap-2 mt-4 text-xs font-medium text-gold border border-gold/30 rounded-sm px-4 py-2 hover:bg-gold/10 transition-colors duration-200'
                      style={{ fontFamily: 'JetBrains Mono, monospace' }}
                    >
                      Request Demo
                      <span className='text-[10px] opacity-60'>↗</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
