import {
  NarutoMemoryImage,
  expenditureImage,
  favAlbumsImage,
  findLyricsImage,
  weatherSearchImage,
} from '@/app/assets/projects';

export const projectsSeeds = [
  {
    title: 'Save Favorites Albums',
    description:
      "App to save and delete favorite albums, consuming Spotify's Rest API. Login, verification with Spotify, refresh token and logout. React with TypeScript, react-router-dom, React-icons and Tailwind.css were used.",
    image: favAlbumsImage,
    link: 'https://lennon-sanchez-front.vercel.app/login',
  },
  {
    title: 'Naruto memory app',
    description:
      'Challenge placed in the community. It consists of solving a memory game, with the desired theme, in a set time.',
    image: NarutoMemoryImage,
    link: 'https://amazing-naruto-memory-game.netlify.app',
  },
  {
    title: 'Expenditure recording app',
    description:
      'App to keep a list of expenses. It is initialized with an initial balance, as expenses are added they are subtracted from that balance and the percentage spent is shown in the graph. You can delete, edit and filter by category each expense.',
    image: expenditureImage,
    link: 'https://recording-expediture.netlify.app',
  },
  {
    title: 'Weather search app',
    description:
      'Consumption of a Rest API that returns weather data according to country and city selected.',
    image: weatherSearchImage,
    link: 'https://weather-search-cities-app.netlify.app',
  },
  {
    title: 'Search songs lyrics',
    description:
      'Search for song lyrics by artist and song name. A Rest API is consumed.',
    image: findLyricsImage,
    link: 'https://find-lyrics-app.netlify.app',
  },
];
