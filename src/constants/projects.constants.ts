export const PROJECTS = [
  {
    file: 'CASE #001',
    title: 'Phar Dash',
    subtitle: 'Enterprise pharmacy management system',
    description:
      'Centralized dashboard that consolidates sales, top-performing brands, product rotation, and AI-driven purchase order suggestions across multiple pharmacies. Built with NestJS 11 and Angular 22 SSR. Every layer is locked down — HTTP-only cookies, PostgreSQL Row-Level Security with a NOBYPASSRLS role, and role-based access across 16 modules. Analytics powered by 12 stored procedures, all running inside a tenant-isolated multi-tenant architecture designed to scale across companies with zero data leakage.',
    tags: [
      'NestJS',
      'Angular 22',
      'SSR',
      'PostgreSQL',
      'RLS',
      'Drizzle ORM',
      'Redis',
      'Docker',
    ],
    status: 'Production',
    accent: '#c9a84c',
  },
  {
    file: 'CASE #002',
    title: 'Farma24 Flota',
    subtitle: 'Fleet delivery management system',
    description:
      'End-to-end delivery orchestration for a national pharmacy chain. Manages the full lifecycle — load creation, truck assignment, carrier routing, offline-first delivery with local SQLite sync, QR-based warehouse return validation, and real-time integration with external order systems. Built with NestJS 11 and Flutter, backed by 3 MySQL databases and Redis. Reduced the manual delivery process from hours to minutes — cutting operational time by 80%.',
    tags: ['NestJS', 'Flutter', 'MySQL', 'Redis', 'Offline-First', 'Docker'],
    status: 'Production',
    accent: '#86efac',
  },
  {
    file: 'CASE #003',
    title: 'Client VIP',
    subtitle: 'Gym management PWA',
    description:
      'Progressive Web App that handles subscriptions, attendance tracking, trainer assignments, and expense history for active gyms. Real-time revenue dashboards and monthly payment control. Designed to run offline and install directly from the browser — no app store needed.',
    tags: ['Express', 'React', 'PWA', 'MySQL'],
    status: 'Production',
    accent: '#7dd3fc',
    demoUrl: 'https://wa.link/zhxrr4',
  },
  {
    file: 'CASE #004',
    title: 'Secure CLI Manager',
    subtitle: 'Terminal password manager',
    description:
      'JackPass Command-line tool built in Go for encrypted credential storage. Uses Argon2id for key derivation and AES-256-GCM for at-rest encryption.',
    tags: ['Go', 'Argon2id', 'AES-256-GCM', 'CLI', 'SQLite'],
    status: 'Open Source',
    accent: '#f0abfc',
  },
];
