export interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
  price: number;
  image?: string;
}

export interface Stat {
  icon: string;
  count: string;
  label: string;
}

export const services: Service[] = [
  {
    id: 'renovation-cleaning',
    icon: '/assets/icons/renovation-cleaning.svg',
    title: 'Renovation Cleaning',
    description: 'Tempus bibendum scelerisque lobortis elementum placerat. Faucibus nunc lacus curabitur netus tellus. Nunc id eget tellus molestie quis dolor ultrices eu. Est sed congue ut tristique at.',
    price: 50.00,
    image: '/assets/images/renovation-cleaning.jpg'
  },
  {
    id: 'carpet-cleaning',
    icon: '/assets/icons/carpet-cleaning.svg',
    title: 'Carpet Cleaning',
    description: 'Professional deep cleaning for all types of carpets and rugs. We use eco-friendly products and advanced techniques to remove stains and refresh your carpets.',
    price: 45.00,
    image: '/assets/images/carpet-cleaning.jpg'
  },
  {
    id: 'commercial-cleaning',
    icon: '/assets/icons/commercial-cleaning.svg',
    title: 'Commercial Cleaning',
    description: 'Comprehensive cleaning solutions for offices, retail spaces, and commercial buildings. Regular maintenance and deep cleaning services available.',
    price: 60.00,
    image: '/assets/images/commercial-cleaning.jpg'
  },
  {
    id: 'home-cleaning',
    icon: '/assets/icons/home-cleaning.svg',
    title: 'Home Cleaning',
    description: 'Velit in vitae in in tristique cursus. Ut sit tellus blandit sed sed non at sed. Ut et scelerisque viverra interdum cursus. Congue sed lacinia etiam arcu.',
    price: 40.00,
    image: '/assets/images/home-cleaning.jpg'
  },
  {
    id: 'window-cleaning',
    icon: '/assets/icons/window-cleaning.svg',
    title: 'Window Cleaning',
    description: 'Professional window cleaning services for homes and businesses. We clean both interior and exterior windows, leaving them spotless and streak-free.',
    price: 35.00,
    image: '/assets/images/window-cleaning.jpg'
  },
  {
    id: 'deep-cleaning',
    icon: '/assets/icons/deep-cleaning.svg',
    title: 'Deep Cleaning',
    description: 'Thorough deep cleaning service that covers every corner of your space. Perfect for spring cleaning or preparing your property for special occasions.',
    price: 55.00,
    image: '/assets/images/deep-cleaning.jpg'
  }
];

export const stats: Stat[] = [
  {
    icon: '/assets/icons/stats/projects-done.svg',
    count: '1200+',
    label: 'PROJECT DONE'
  },
  {
    icon: '/assets/icons/stats/happy-clients.svg',
    count: '1300+',
    label: 'HAPPY CLIENTS'
  },
  {
    icon: '/assets/icons/stats/award-winner.svg',
    count: '18+',
    label: 'AWARD WINNER'
  },
  {
    icon: '/assets/icons/stats/team-member.svg',
    count: '650+',
    label: 'TEAM MEMBER'
  }
]; 