import { Card } from '@shared/components/card/card.interface';

export const CARDS: Card[] = [
  {
    imgSrc: 'assets/image/projects/ticket-app.png',
    tags: ['JavaScript', 'Tailwind CSS', 'Next.js', 'Mongo', 'Docker'],
    title: 'Ticket App',
    description: 'First try of Next.js',
    actions: [
      {
        label: 'github',
        url: 'https://github.com/edwarmv/nextjs-mongodb-docker-ticket-app',
      },
    ],
  },
  {
    imgSrc: 'assets/image/projects/ws-thinking-reactively-pokedex.png',
    tags: ['TypeScript', 'SCSS', 'HTML', 'Angular', 'RxJS'],
    title: 'Pokédex',
    description:
      'Practical excersite about reactive programming and how to think reactively',
    actions: [
      {
        label: 'live',
        url: 'https://edwarmv.github.io/ws-thinking-reactively-pokedex/',
      },
      {
        label: 'github',
        url: 'https://github.com/edwarmv/ws-thinking-reactively-pokedex.git',
      },
    ],
  },
  {
    imgSrc: 'assets/image/projects/clothing-e-commerce-app.png',
    tags: ['TypeScript', 'CSS', 'HTML', 'React'],
    title: 'Clothing E-Commerce App',
    description: 'Demo app about an clothing e-commerce app',
    actions: [
      {
        label: 'live',
        url: 'https://edwarmv.github.io/clothing-e-commerce-app/',
      },
      {
        label: 'github',
        url: 'https://github.com/edwarmv/clothing-e-commerce-app.git',
      },
    ],
  },
];
