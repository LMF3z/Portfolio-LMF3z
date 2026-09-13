import BatSymbol from './BatSymbol';

const PRINCIPLES = [
  {
    icon: '\u25c8',
    title: 'Problem-First Thinking',
    desc: 'Understand the problem deeply before writing a single line. The best solution comes from clarity, not code.',
  },
  {
    icon: '\u2b21',
    title: 'Full-Stack Thinking',
    desc: 'Every frontend decision considers the impact on backend, database, and network latency. No silos.',
  },
  {
    icon: '\u25ce',
    title: 'AI-Augmented Development',
    desc: 'Using AI tools with criteria to accelerate delivery without sacrificing quality. Constantly updating what works.',
  },
  {
    icon: '\u2b22',
    title: 'Never Stop Learning',
    desc: 'Go enthusiast, currently learning Spring Boot. Staying curious and diving deep into what interests me.',
  },
];

export default function About() {
  return (
    <section id='about' className='py-28 px-6'>
      <div className='max-w-6xl mx-auto'>
        <div className='grid md:grid-cols-2 gap-16 items-center'>
          <div className='reveal'>
            <span className='section-label'>// About Me</span>
            <h2
              className='text-3xl md:text-4xl font-bold text-white mt-3 mb-6 leading-tight'
              style={{ fontFamily: 'Cinzel, serif' }}
            >
              The Man{' '}
              <span className='text-gold-gradient'>Behind the Mask</span>
            </h2>
            <p className='text-titanium text-sm leading-relaxed mb-6'>
              Full-stack developer with 5+ years of experience building
              production software for companies across Venezuela, Peru, Guatemala,
              and Spain. I like studying interesting things, understanding the
              problem deeply, and researching the best tools to build the right
              solution.
            </p>
            <p className='text-titanium text-sm leading-relaxed mb-8'>
              I use GitHub Actions, OpenCode, and AI to power up my workflow —
              always with criteria earned through constant learning. I love Go
              and in my free time I&apos;m learning Spring Boot. GNU/Linux is
              my daily driver.
            </p>
            <a href='#contact'>
              <button className='bat-btn px-6 py-3 text-xs font-semibold rounded-sm flex items-center gap-2'>
                <BatSymbol size={12} />
                <span>Let&apos;s Work Together</span>
              </button>
            </a>
          </div>

          {/* Right — principles */}
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
            {PRINCIPLES.map((p, i) => (
              <div
                key={p.title}
                className={`glass-card rounded-sm p-5 reveal reveal-delay-${i + 1}`}
              >
                <span className='text-gold text-lg'>{p.icon}</span>
                <h4
                  className='text-white text-sm font-semibold mt-2 mb-2'
                  style={{ fontFamily: 'Cinzel, serif' }}
                >
                  {p.title}
                </h4>
                <p className='text-[#6b7280] text-xs leading-relaxed'>
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
