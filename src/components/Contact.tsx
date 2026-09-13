import { actions } from 'astro:actions';
import { useState } from 'react';

import BatSymbol from './BatSymbol';

const SOCIALS = [
  {
    name: 'GitHub',
    handle: 'https://github.com/LMF3z',
    icon: (
      <svg viewBox='0 0 24 24' fill='currentColor' className='w-4 h-4'>
        <path d='M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12' />
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    handle: 'https://www.linkedin.com/in/lmf3z',
    icon: (
      <svg viewBox='0 0 24 24' fill='currentColor' className='w-4 h-4'>
        <path d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' />
      </svg>
    ),
  },
];

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const finalFormData = new FormData(e.target);

    const { data, error: actionError } = await actions.sendEmail(finalFormData);

    if (actionError) {
      setError(actionError.message);
      setLoading(false);
      return;
    }

    if (data?.error) {
      setError(data.error);
      setLoading(false);
      return;
    }

    setSent(true);
  };

  return (
    <section
      id='contact'
      className='py-28 px-6 bg-[#0d0d0d] relative overflow-hidden'
    >
      <div
        className='absolute bottom-0 left-1/2 -translate-x-1/2 w-150 h-75 pointer-events-none'
        style={{
          background:
            'radial-gradient(ellipse at 50% 100%, rgba(201,168,76,0.07) 0%, transparent 70%)',
        }}
      />

      <div className='max-w-5xl mx-auto relative z-10'>
        <div className='text-center mb-16 reveal'>
          <span className='section-label'>// Contact</span>
          <h2
            className='text-3xl md:text-5xl font-bold text-white mt-3'
            style={{ fontFamily: 'Cinzel, serif' }}
          >
            Send the <span className='text-gold-gradient'>Bat-Signal</span>
          </h2>
          <p className='text-[#6b7280] mt-4 text-sm max-w-lg mx-auto'>
            Have a project or an idea to build? Let&apos;s talk.
          </p>
        </div>

        <div className='grid md:grid-cols-5 gap-10'>
          <div className='md:col-span-3 reveal'>
            {sent ? (
              <div className='glass-card rounded-sm p-10 text-center flex flex-col items-center gap-4'>
                <BatSymbol size={48} className='text-gold' />
                <h3
                  className='text-white text-xl font-bold'
                  style={{ fontFamily: 'Cinzel, serif' }}
                >
                  Message Received
                </h3>
                <p className='text-[#6b7280] text-sm'>
                  I&apos;ll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className='space-y-5'>
                {error && (
                  <div className='text-red-400 text-xs bg-red-400/10 border border-red-400/20 rounded-sm px-4 py-3'>
                    {error}
                  </div>
                )}
                <div className='grid sm:grid-cols-2 gap-5'>
                  <div>
                    <label className='section-label block mb-2 text-[0.65rem]'>
                      Name
                    </label>
                    <input
                      type='text'
                      name='name'
                      required
                      placeholder='Joker'
                      value={form.name}
                      onChange={(e) =>
                        setForm({ ...form, name: e.target.value })
                      }
                      className='form-field w-full px-4 py-3 text-sm rounded-sm'
                    />
                  </div>
                  <div>
                    <label className='section-label block mb-2 text-[0.65rem]'>
                      Email
                    </label>
                    <input
                      type='email'
                      name='email'
                      required
                      placeholder='joker@gotham.com'
                      value={form.email}
                      onChange={(e) =>
                        setForm({ ...form, email: e.target.value })
                      }
                      className='form-field w-full px-4 py-3 text-sm rounded-sm'
                    />
                  </div>
                </div>
                <div>
                  <label className='section-label block mb-2 text-[0.65rem]'>
                    Message
                  </label>
                  <textarea
                    required
                    name='message'
                    rows={5}
                    placeholder='Tell me about your project...'
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                    className='form-field w-full px-4 py-3 text-sm rounded-sm resize-none'
                  />
                </div>
                <button
                  type='submit'
                  disabled={loading}
                  className='bat-btn w-full py-3.5 text-sm font-semibold rounded-sm flex items-center justify-center gap-3 disabled:opacity-50'
                >
                  <BatSymbol size={14} />
                  <span>{loading ? 'Sending...' : 'Send Message'}</span>
                </button>
              </form>
            )}
          </div>

          <div className='md:col-span-2 flex flex-col gap-5 reveal reveal-delay-2'>
            <div className='glass-card rounded-sm p-6'>
              <h4
                className='text-white text-sm font-semibold mb-4 tracking-wide'
                style={{ fontFamily: 'Cinzel, serif' }}
              >
                Social
              </h4>
              <div className='space-y-3'>
                {SOCIALS.map((s) => (
                  <a
                    key={s.name}
                    href={s.handle}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='flex items-center gap-3 group'
                  >
                    <span className='text-gold group-hover:scale-110 transition-transform duration-200'>
                      {s.icon}
                    </span>
                    <div>
                      <div
                        className='text-white text-xs font-medium group-hover:text-gold transition-colors duration-200'
                        style={{ fontFamily: 'Cinzel, serif' }}
                      >
                        {s.name}
                      </div>
                      <div
                        className='text-[#4b5563] text-[0.65rem]'
                        style={{ fontFamily: 'JetBrains Mono, monospace' }}
                      >
                        {s.handle}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className='glass-card rounded-sm p-6'>
              <p className='text-[#6b7280] text-xs leading-relaxed'>
                Available for freelance projects, long-term collaborations, and
                full-time remote positions.
              </p>
              <div className='mt-3 flex items-center gap-2'>
                <span className='w-2 h-2 rounded-full bg-[#86efac] animate-pulse' />
                <span
                  className='text-[#86efac] text-[0.65rem] tracking-widest uppercase'
                  style={{ fontFamily: 'JetBrains Mono, monospace' }}
                >
                  Available
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
