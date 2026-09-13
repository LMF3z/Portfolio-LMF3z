import { useEffect, useState } from 'react';
import BatSymbol from './BatSymbol';

const links = ['Arsenal', 'Projects', 'Experience', 'About', 'Contact'];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <nav
      className='fixed top-0 left-0 right-0 z-50 transition-all duration-500'
      style={{
        background: scrolled ? 'rgba(8,8,8,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(201,168,76,0.1)' : 'none',
      }}
    >
      <div className='max-w-6xl mx-auto px-6 py-4 flex items-center justify-between'>
        <div className='flex items-center gap-3'>
          <BatSymbol size={28} className='text-gold' />
          <span
            className='text-gold text-xs tracking-[0.25em] uppercase'
            style={{ fontFamily: 'Cinzel, serif' }}
          >
            LMF3z Dev
          </span>
        </div>

        {/* Desktop */}
        <div className='hidden md:flex items-center gap-8'>
          {links.map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`} className='nav-link'>
              {l}
            </a>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          className='md:hidden flex flex-col gap-1.5 p-1'
          onClick={() => setOpen(!open)}
          aria-label='Menu'
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className='block h-px w-6 bg-gold transition-all duration-300'
              style={{
                transform:
                  open && i === 0
                    ? 'rotate(45deg) translate(4px,4px)'
                    : open && i === 2
                      ? 'rotate(-45deg) translate(4px,-4px)'
                      : open && i === 1
                        ? 'scaleX(0)'
                        : 'none',
              }}
            />
          ))}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className='md:hidden overflow-hidden transition-all duration-400'
        style={{ maxHeight: open ? '240px' : '0' }}
      >
        <div className='px-6 pb-6 flex flex-col gap-4 border-t border-[rgba(201,168,76,0.1)]'>
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className='nav-link'
              onClick={() => setOpen(false)}
            >
              {l}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
