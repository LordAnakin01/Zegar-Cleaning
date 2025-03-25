export interface ServicePackage {
  name: string;
  price: number;
  frequency?: string;
  features: string[];
}

export interface ServiceProcess {
  step: number;
  title: string;
  description: string;
  image?: string;
}

export interface BeforeAfter {
  title: string;
  before: string;
  after: string;
  description: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
  price: number;
  image?: string;
  
  // Detailed information for service detail page
  heroImage?: string;
  detailImages?: string[];
  longDescription?: string;
  highlights?: string[];
  packages?: ServicePackage[];
  process?: ServiceProcess[];
  beforeAfter?: BeforeAfter[];
  equipment?: {
    name: string;
    image: string;
    description: string;
  }[];
  guarantees?: string[];
  faqs?: FAQ[];
  relatedServices?: string[]; // Array of service IDs
}

export interface Stat {
  icon: string;
  count: string;
  label: string;
}

export const services: Service[] = [
  {
    id: 'residential-cleaning',
    icon: '/assets/icons/residential-cleaning.svg',
    title: 'Residential Cleaning',
    description: 'Professional home cleaning services tailored to your needs and schedule.',
    price: 40.00,
    image: '/assets/images/residential-cleaning.jpg',
    heroImage: '/assets/images/residential-cleaning-hero.jpg',
    longDescription: 'Our residential cleaning service is designed to keep your home spotless and comfortable. We understand that every home is unique, and we tailor our services to meet your specific needs.\n\nOur experienced team uses eco-friendly products and proven techniques to ensure your home is clean, fresh, and healthy for you and your family.',
    highlights: [
      'Customized cleaning plans',
      'Eco-friendly cleaning products',
      'Trained and vetted professionals',
      'Flexible scheduling',
      'Attention to detail',
      'Regular quality checks'
    ],
    packages: [
      {
        name: 'Basic Clean',
        price: 40.00,
        frequency: 'Weekly',
        features: [
          'General dusting and wiping',
          'Vacuum and mop floors',
          'Bathroom cleaning',
          'Kitchen cleaning',
          'Bed making'
        ]
      },
      {
        name: 'Deep Clean',
        price: 65.00,
        frequency: 'Bi-weekly',
        features: [
          'All Basic Clean features',
          'Inside cabinet cleaning',
          'Baseboards and door frames',
          'Window sills and tracks',
          'Light fixture cleaning'
        ]
      },
      {
        name: 'Premium Clean',
        price: 90.00,
        frequency: 'Monthly',
        features: [
          'All Deep Clean features',
          'Inside window cleaning',
          'Inside oven cleaning',
          'Inside fridge cleaning',
          'Wall spot cleaning',
          '30-day satisfaction guarantee'
        ]
      }
    ],
    process: [
      {
        step: 1,
        title: 'Initial Consultation',
        description: 'We discuss your needs and create a customized cleaning plan.',
        image: '/assets/images/residential-cleaning-step1.jpg'
      },
      {
        step: 2,
        title: 'Professional Cleaning',
        description: 'Our trained team executes the cleaning plan with attention to detail.',
        image: '/assets/images/residential-cleaning-step2.jpg'
      },
      {
        step: 3,
        title: 'Quality Check',
        description: 'We perform a thorough inspection to ensure everything meets our standards.',
        image: '/assets/images/residential-cleaning-step3.jpg'
      },
      {
        step: 4,
        title: 'Final Walkthrough',
        description: 'We review the results with you to ensure complete satisfaction.',
        image: '/assets/images/residential-cleaning-step4.jpg'
      }
    ],
    faqs: [
      {
        question: 'How often should I schedule residential cleaning?',
        answer: 'The frequency depends on your lifestyle and needs. We recommend weekly or bi-weekly cleaning for most homes, but we also offer monthly and one-time cleaning services.'
      },
      {
        question: 'Do I need to be home during the cleaning?',
        answer: 'No, you do not need to be home. Many of our clients provide a key or access code. We are fully bonded and insured for your peace of mind.'
      },
      {
        question: 'What products do you use?',
        answer: 'We use eco-friendly, non-toxic cleaning products that are safe for children and pets while still being highly effective.'
      },
      {
        question: 'Can I get the same cleaning team each time?',
        answer: 'Yes, we strive to send the same team for recurring services to ensure consistency and build trust.'
      }
    ]
  },
  {
    id: 'commercial-cleaning',
    icon: '/assets/icons/commercial-cleaning.svg',
    title: 'Commercial Cleaning',
    description: 'Professional cleaning solutions for offices and commercial spaces.',
    price: 60.00,
    image: '/assets/images/commercial-cleaning.jpg',
    heroImage: '/assets/images/commercial-cleaning-hero.jpg',
    longDescription: 'Our commercial cleaning service is designed to maintain a pristine and professional environment for your business. We understand the unique requirements of commercial spaces and deliver reliable, consistent results.',
    highlights: [
      'Customized commercial cleaning plans',
      'Flexible scheduling options',
      'Professional grade equipment',
      'Trained commercial cleaning staff',
      'Quality assurance program',
      'Green cleaning solutions'
    ]
  },
  {
    id: 'industrial-cleaning',
    icon: '/assets/icons/industrial-cleaning.svg',
    title: 'Industrial Cleaning',
    description: 'Specialized cleaning services for industrial facilities and warehouses.',
    price: 75.00,
    image: '/assets/images/industrial-cleaning.jpg',
    heroImage: '/assets/images/industrial-cleaning-hero.jpg',
    longDescription: 'Our industrial cleaning service addresses the unique challenges of manufacturing facilities, warehouses, and industrial spaces. We use specialized equipment and techniques to ensure safety and cleanliness.',
    highlights: [
      'Heavy-duty cleaning capabilities',
      'Safety protocol compliance',
      'Industrial equipment cleaning',
      'Warehouse floor maintenance',
      'Loading dock cleaning',
      'Industrial waste management'
    ]
  },
  {
    id: 'window-cleaning',
    icon: '/assets/icons/window-cleaning.svg',
    title: 'Window Cleaning',
    description: 'Professional window cleaning services for homes and businesses.',
    price: 35.00,
    image: '/assets/images/window-cleaning.jpg',
    heroImage: '/assets/images/window-cleaning-hero.jpg',
    longDescription: 'Our window cleaning service ensures crystal-clear views and enhanced curb appeal. We use professional-grade equipment and eco-friendly solutions for streak-free results.',
    highlights: [
      'Interior and exterior cleaning',
      'High-rise capability',
      'Screen cleaning included',
      'Track and sill cleaning',
      'Hard water removal',
      'Window frame cleaning'
    ]
  },
  {
    id: 'deep-cleaning',
    icon: '/assets/icons/deep-cleaning.svg',
    title: 'Deep Cleaning',
    description: 'Thorough deep cleaning service for a complete refresh.',
    price: 55.00,
    image: '/assets/images/deep-cleaning.jpg',
    heroImage: '/assets/images/deep-cleaning-hero.jpg',
    longDescription: 'Our deep cleaning service goes beyond regular cleaning to tackle built-up dirt and grime. Perfect for spring cleaning or preparing spaces for special occasions.',
    highlights: [
      'Detailed surface cleaning',
      'Behind furniture cleaning',
      'Baseboard and trim cleaning',
      'Light fixture cleaning',
      'Cabinet interior cleaning',
      'Appliance deep cleaning'
    ]
  },
  {
    id: 'carpet-cleaning',
    icon: '/assets/icons/carpet-cleaning.svg',
    title: 'Carpet Cleaning',
    description: 'Professional carpet cleaning and stain removal services.',
    price: 45.00,
    image: '/assets/images/carpet-cleaning.jpg',
    heroImage: '/assets/images/carpet-cleaning-hero.jpg',
    longDescription: 'Our carpet cleaning service removes deep-seated dirt, allergens, and stains. We use hot water extraction and eco-friendly solutions for optimal results.',
    highlights: [
      'Deep steam cleaning',
      'Stain removal treatment',
      'Deodorizing service',
      'Pet stain treatment',
      'Allergen removal',
      'Carpet protection'
    ]
  },
  {
    id: 'upholstery-cleaning',
    icon: '/assets/icons/upholstery-cleaning.svg',
    title: 'Upholstery Cleaning',
    description: 'Expert cleaning for furniture and upholstery.',
    price: 50.00,
    image: '/assets/images/upholstery-cleaning.jpg',
    heroImage: '/assets/images/upholstery-cleaning-hero.jpg',
    longDescription: 'Revitalize your furniture with our professional upholstery cleaning service. We use specialized equipment and gentle cleaning solutions to protect your valuable furnishings.',
    highlights: [
      'Fabric-specific cleaning',
      'Stain removal',
      'Odor elimination',
      'Fabric protection',
      'Color brightening',
      'Allergen removal'
    ]
  },
  {
    id: 'move-cleaning',
    icon: '/assets/icons/move-cleaning.svg',
    title: 'Move In/Out Cleaning',
    description: 'Thorough cleaning services for moving transitions.',
    price: 65.00,
    image: '/assets/images/move-cleaning.jpg',
    heroImage: '/assets/images/move-cleaning-hero.jpg',
    longDescription: 'Our move in/out cleaning service ensures your new space is pristine and your old space is ready for the next occupant. We provide comprehensive cleaning for a fresh start.',
    highlights: [
      'Complete space cleaning',
      'Cabinet and drawer cleaning',
      'Appliance cleaning',
      'Wall cleaning',
      'Floor deep cleaning',
      'Window cleaning'
    ]
  },
  {
    id: 'special-event',
    icon: '/assets/icons/special-event-cleaning.svg',
    title: 'Special Event Cleaning',
    description: 'Pre and post-event cleaning services for any occasion.',
    price: 70.00,
    image: '/assets/images/special-event-cleaning.jpg',
    heroImage: '/assets/images/special-event-cleaning-hero.jpg',
    longDescription: 'Make your special event perfect with our pre and post-event cleaning services. We ensure your venue is pristine before and after your celebration.',
    highlights: [
      'Pre-event preparation',
      'Post-event cleanup',
      'Quick turnaround',
      'Venue restoration',
      'Waste management',
      'Flexible scheduling'
    ]
  },
  {
    id: 'disinfection',
    icon: '/assets/icons/disinfection-cleaning.svg',
    title: 'Disinfection & Sanitizing',
    description: 'Professional disinfection services for health and safety.',
    price: 80.00,
    image: '/assets/images/disinfection-cleaning.jpg',
    heroImage: '/assets/images/disinfection-cleaning-hero.jpg',
    longDescription: 'Our disinfection and sanitizing service uses hospital-grade products to eliminate harmful pathogens. We follow CDC guidelines for comprehensive protection.',
    highlights: [
      'EPA-registered disinfectants',
      'Touch point focus',
      'Electrostatic spraying',
      'Air purification',
      'Surface protection',
      'Detailed reporting'
    ]
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