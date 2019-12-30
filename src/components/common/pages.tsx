type PAGE = {
  title: string;
  route?: string;
  externalLink?: string;
};

export const PAGES: Array<PAGE> = [
  { title: 'About', route: '/' },
  { title: 'Experiences', route: '/experiences' },
  { title: 'Projects', route: '/projects' },
  { title: 'Blog', externalLink: 'https://andreibuntsev.blogspot.com/' },
  { title: 'Recommendations', route: '/recommendations' } //,
  //{ title: 'Contacts', route: '/contacts' }
];
