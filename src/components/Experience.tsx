import BatSymbol from './BatSymbol';

const JOBS = [
  {
    company: 'Farma24',
    role: 'Full-Stack Developer',
    location: 'Zulia, Venezuela',
    period: 'Aug 2023 — Present',
    accent: '#c9a84c',
    highlights: [
      'Architected and built platforms to unify purchase orders, merchandise reception, and invoice uploads across the company.',
      'Implemented Excel file processing for bulk purchase order loading, reducing registration time by 80%.',
      'Built real-time notification system via WebSockets for reception tracking and error alerts.',
      'Developed Flutter mobile application for end-to-end order delivery tracking after merchandise dispatch.',
      'Set up CI/CD pipelines reducing deployment times by over 70%.',
      'Enabled automatic accounts receivable initiation upon order delivery confirmation.',
    ],
    tags: ['NestJS', 'Next.js', 'Angular', 'Flutter', 'MySQL', 'SQL Server'],
  },
  {
    company: 'Atik Solutions',
    role: 'Frontend Developer',
    location: 'Lima, Peru',
    period: 'Aug 2021 — Mar 2022',
    accent: '#7dd3fc',
    highlights: [
      'Led the creation, maintenance, and adaptation of e-commerce interfaces for multiple clients.',
      'Integrated complete delivery workflows — from type selection (delivery, pick-up) to payment registration.',
      'Integrated Google Maps API for branch and merchandise location services.',
      'Managed user permissions based on roles and access levels.',
    ],
    tags: ['React', 'TypeScript', 'Redux'],
  },
  {
    company: 'Atel Comunicaciones C.A.',
    role: 'Full-Stack Developer',
    location: 'Zulia, Venezuela',
    period: 'Apr 2021 — Dec 2021',
    accent: '#86efac',
    highlights: [
      'Implemented from scratch the entire infrastructure for an online educational platform using the MERN stack.',
      'Built all REST APIs and managed administrative, student, and teacher user roles.',
      'Developed multimedia content upload features for classes.',
      'Migrated modules from legacy platform including blog content with rich text editors.',
    ],
    tags: ['React', 'Express', 'MongoDB', 'JavaScript'],
  },
];

export default function Experience() {
  return (
    <section id='experience' className='py-28 px-6 bg-[#0d0d0d]'>
      <div className='max-w-6xl mx-auto'>
        <div className='mb-16 reveal'>
          <span className='section-label'>// Work Log</span>
          <h2
            className='text-3xl md:text-5xl font-bold text-white mt-3'
            style={{ fontFamily: 'Cinzel, serif' }}
          >
            Professional <span className='text-gold-gradient'>Experience</span>
          </h2>
          <p className='text-[#6b7280] mt-4 max-w-xl text-sm leading-relaxed'>
            5+ years building production software across Venezuela, Peru,
            Guatemala, and Spain.
          </p>
        </div>

        <div className='space-y-6'>
          {JOBS.map((job, i) => (
            <div
              key={job.company}
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
                      {job.period}
                    </span>
                  </div>
                  <h3
                    className='text-white text-xl md:text-2xl font-bold leading-tight mb-1'
                    style={{ fontFamily: 'Cinzel, serif' }}
                  >
                    {job.company}
                  </h3>
                  <p className='text-[#6b7280] text-sm'>{job.role}</p>
                  <p className='text-[#4b5563] text-xs mt-1'>{job.location}</p>
                </div>

                {/* Divider */}
                <div className='hidden md:block w-px self-stretch bg-[rgba(201,168,76,0.1)]' />

                {/* Right column */}
                <div className='flex-1'>
                  <ul className='space-y-2.5 mb-5'>
                    {job.highlights.map((h, j) => (
                      <li
                        key={j}
                        className='flex items-start gap-2 text-titanium text-sm leading-relaxed'
                      >
                        <span
                          className='mt-1.5 w-1.5 h-1.5 rounded-full shrink-0'
                          style={{ background: job.accent }}
                        />
                        {h}
                      </li>
                    ))}
                  </ul>
                  <div className='flex flex-wrap gap-2'>
                    {job.tags.map((t) => (
                      <span key={t} className='tech-tag'>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
