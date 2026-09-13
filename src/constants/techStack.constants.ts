export const TECH_CATEGORIES = [
  {
    category: 'Backend & Systems',
    icon: '⬡',
    items: [
      { name: 'NestJS', desc: 'Enterprise framework' },
      { name: 'Express', desc: 'Minimalist HTTP' },
      { name: 'Go', desc: 'High concurrency | CLI Tools' },
      { name: 'Spring Boot', desc: 'Learning', learning: true },
    ],
  },
  {
    category: 'Frontend & Mobile',
    icon: '◈',
    items: [
      { name: 'React', desc: 'Declarative UI' },
      { name: 'Next.js', desc: 'Full-stack framework' },
      { name: 'Angular', desc: 'Enterprise SPA + SSR' },
      { name: 'Flutter', desc: 'Cross-platform + Offline Support' },
    ],
  },
  {
    category: 'Databases',
    icon: '◎',
    items: [
      { name: 'MySQL', desc: 'Relational DB' },
      { name: 'MariaDB', desc: 'MySQL fork' },
      { name: 'SQL Server', desc: 'Enterprise DB' },
      { name: 'PostgreSQL', desc: 'Row-Level Security | Multi-tenant' },
    ],
  },
  {
    category: 'DevOps & Deploy',
    icon: '⬢',
    items: [
      { name: 'GNU/Linux', desc: 'Administration' },
      { name: 'Docker', desc: 'Containerization' },
      { name: 'Dokploy', desc: 'Self-hosted deploy' },
    ],
  },
];
