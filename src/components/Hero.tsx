import BatSymbol from './BatSymbol';

export default function Hero() {
  return (
    <section
      id='hero'
      className='relative min-h-screen flex items-center justify-center overflow-hidden'
    >
      <div
        className='absolute inset-0 pointer-events-none'
        style={{
          background:
            'radial-gradient(ellipse 70% 60% at 50% 60%, rgba(201,168,76,0.06) 0%, transparent 70%)',
        }}
      />

      <div
        className='absolute top-0 left-0 w-96 h-96 pointer-events-none'
        style={{
          background:
            'radial-gradient(circle at 0% 0%, rgba(201,168,76,0.05) 0%, transparent 60%)',
        }}
      />

      <div
        className='absolute inset-0 pointer-events-none opacity-[0.03]'
        style={{
          backgroundImage:
            'linear-gradient(rgba(201,168,76,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.5) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      <div className='relative z-10 text-center px-6 max-w-4xl mx-auto'>
        <div className='flex justify-center mb-8 opacity-20'>
          <BatSymbol size={80} className='text-gold' />
        </div>

        <div className='mb-4'>
          <span className='section-label'>Portfolio &middot; LMF3z Enterprises</span>
        </div>

        <h1
          className='text-4xl sm:text-5xl md:text-7xl font-black leading-[1.05] mb-6 tracking-tight'
          style={{ fontFamily: 'Cinzel, serif' }}
        >
          <span className='text-white block'>Full-Stack</span>
          <span className='text-gold-gradient block'>Developer</span>
          <span className='text-white block text-3xl sm:text-4xl md:text-5xl font-semibold mt-2'>
            &amp; Software Engineer
          </span>
        </h1>

        <p className='text-titanium text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-10 font-light'>
          <span className='text-gold font-medium'>Full-stack developer</span>{' '}
          with 5+ years of experience building web and mobile applications that
          streamline business operations. Worked across{' '}
          <span className='text-gold font-medium'>
            Venezuela, Peru, Guatemala, and Spain
          </span>
          .
        </p>

        <div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
          <a href='#contact'>
            <button className='bat-btn px-8 py-3.5 text-sm font-semibold rounded-sm flex items-center gap-3'>
              <BatSymbol size={16} className='shrink-0' />
              <span>Get In Touch</span>
            </button>
          </a>
          <a href='#files'>
            <button
              className='px-8 py-3.5 text-sm font-medium rounded-sm border border-[rgba(255,255,255,0.1)] text-titanium hover:text-white hover:border-[rgba(255,255,255,0.25)] transition-all duration-300'
              style={{ fontFamily: 'Cinzel, serif', letterSpacing: '0.1em' }}
            >
              <span>View Projects</span>
            </button>
          </a>
        </div>

        <div className='mt-20 grid grid-cols-3 gap-6 md:gap-10 max-w-lg mx-auto'>
          {[
            { value: '5+', label: 'Years' },
            { value: '12+', label: 'Projects' },
            { value: '8+', label: 'Technologies' },
          ].map((s) => (
            <div key={s.label} className='text-center'>
              <div
                className='text-2xl md:text-3xl font-bold text-gold-gradient mb-1'
                style={{ fontFamily: 'Cinzel, serif' }}
              >
                {s.value}
              </div>
              <div
                className='text-[#4b5563] text-xs tracking-widest uppercase'
                style={{ fontFamily: 'JetBrains Mono, monospace' }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
