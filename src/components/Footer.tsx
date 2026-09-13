import BatSymbol from './BatSymbol';

export default function Footer() {
  return (
    <footer className='border-t border-[rgba(201,168,76,0.08)] py-10 px-6'>
      <div className='max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4'>
        <div className='flex items-center gap-3'>
          <BatSymbol size={20} className='text-gold opacity-60' />
          <span
            className='text-[#4b5563] text-xs tracking-widest uppercase'
            style={{ fontFamily: 'Cinzel, serif' }}
          >
            LMF3z Enterprises Dev Division
          </span>
        </div>
        <p
          className='text-[#3b3b3b] text-[0.65rem]'
          style={{ fontFamily: 'JetBrains Mono, monospace' }}
        >
          &copy; 2026 &middot; Built with Astro, React &amp; TypeScript
        </p>
      </div>
    </footer>
  );
}
