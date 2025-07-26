import { swarmLogo, clientVipImage } from '@/app/assets/projects';

export const productsSeeds = [
  {
    title: 'Swarm App',
    description:
      'I wanted to carry out a project where I could demonstrate most of my skills. So I decided to create a billing system with add-ons. I built the backend with Nest js and Postgresql. Authentication with JWT, it is multi-company and multi-branch. I implemented multi-tenancy to keep the data of each user of the system organized. I built the frontend with Next.js 15. Custom SSR and SSG components. Tailwind was a must, as was Next Auth. Additionally, I tested Astro.js on the official landing page. You can see a demo.',
    image: swarmLogo,
    link: 'https://swarm-landing.netlify.app/',
    tools: ['Typescript', 'PostgreSQL', 'Nest', 'Next 15', 'Tailwind', 'Astro'],
    video: 'https://www.youtube.com/embed/GSNrqxqIE5c',
  },
  {
    title: 'Client Vip App',
    description:
      'PWA to achieve better tracking of time spent by customers in the establishment and monthly payments. Expense history. Tools used: React, Express js (TypeScript) and MySQL.',
    image: clientVipImage,
    link: 'https://client-vip-app.vercel.app/auth/login',
    tools: ['React', 'Typescript', 'Tailwind', 'Express', 'MySQL'],
    video: 'https://www.youtube.com/embed/KtyYtXOHPzI',
  },
];
