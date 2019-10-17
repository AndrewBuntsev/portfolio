type PAGE = {
  title: string;
  route?: string;
  externalLink?: string;
};

export const PAGES: Array<PAGE> = [
  { title: 'About', route: '/' },
  { title: 'Experiences', route: '/experiences' },
  { title: 'Projects', route: '/projects' },
  { title: 'Blog', externalLink: 'http://andrewbuntsev.blogspot.com/' },
  { title: 'Profile', route: '/profile' },
  { title: 'Contacts', route: '/contacts' }
];
