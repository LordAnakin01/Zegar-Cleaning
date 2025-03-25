export interface Service {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  icon: string;
  image: string;
  faqs: Array<{
    question: string;
    answer: string;
  }>;
}

export const services: Service[] = [
  {
    id: 'home-cleaning',
    title: 'Home Cleaning',
    description: 'Professional home cleaning services tailored to your needs.',
    longDescription: 'Our comprehensive home cleaning service is designed to transform your living space into a spotless sanctuary. Our trained professionals use eco-friendly products and proven techniques to ensure every corner of your home sparkles.\n\nWe pay special attention to high-traffic areas, dust-prone surfaces, and those often-overlooked spots. From baseboards to ceiling fans, we make sure nothing escapes our attention to detail.\n\nOur service includes:\n• Deep cleaning of all rooms\n• Dusting and wiping all surfaces\n• Vacuuming and mopping floors\n• Bathroom and kitchen sanitization\n• Window sill and track cleaning\n• Cobweb removal\n• Baseboard dusting',
    icon: 'faHome',
    image: '/images/home-cleaning.jpg',
    faqs: [
      {
        question: 'How often should I schedule a home cleaning?',
        answer: 'The frequency depends on your lifestyle and needs. We recommend weekly or bi-weekly cleaning for most households, but we also offer monthly and one-time deep cleaning services.'
      },
      {
        question: 'Do I need to provide cleaning supplies?',
        answer: 'No, we bring all necessary cleaning supplies and equipment. However, if you prefer specific products, we are happy to use them.'
      },
      {
        question: 'How long does a typical home cleaning take?',
        answer: 'A standard cleaning usually takes 2-4 hours, depending on the size of your home and the level of cleaning required.'
      }
    ]
  },
  {
    id: 'office-cleaning',
    title: 'Office Cleaning',
    description: 'Keep your workplace clean, safe, and productive.',
    longDescription: 'Maintain a professional and hygienic workplace with our comprehensive office cleaning services. We understand that a clean office environment is crucial for productivity and employee well-being.\n\nOur commercial cleaning team is trained in the latest cleaning protocols and uses commercial-grade equipment to ensure your office space meets the highest standards of cleanliness.\n\nOur service includes:\n• Daily maintenance cleaning\n• Floor care (vacuuming, mopping)\n• Restroom sanitization\n• Kitchen and break room cleaning\n• Trash removal and recycling\n• Glass and surface cleaning\n• Evening and weekend service options',
    icon: 'faBuilding',
    image: '/images/office-cleaning.jpg',
    faqs: [
      {
        question: 'Do you offer after-hours cleaning?',
        answer: 'Yes, we provide flexible scheduling including evening and weekend services to minimize disruption to your business operations.'
      },
      {
        question: 'Are your cleaning products safe for office equipment?',
        answer: 'Yes, we use specialized cleaning products that are safe for electronics and office equipment while still being effective.'
      },
      {
        question: 'Can you accommodate special cleaning requests?',
        answer: 'Absolutely! We can customize our cleaning schedule and services to meet your specific needs.'
      }
    ]
  },
  {
    id: 'deep-cleaning',
    title: 'Deep Cleaning',
    description: 'Thorough cleaning for a fresh start.',
    longDescription: 'Our deep cleaning service goes beyond regular cleaning to tackle those hard-to-reach areas and stubborn dirt. Perfect for move-in/move-out situations, post-renovation cleanup, or seasonal deep cleaning.\n\nWe use specialized equipment and techniques to ensure every surface is thoroughly cleaned and sanitized. This service is particularly beneficial for those with allergies or respiratory issues.\n\nOur service includes:\n• Deep cleaning of all surfaces\n• Behind and under furniture cleaning\n• Inside cabinet and drawer cleaning\n• Appliance deep cleaning\n• Window and track detailed cleaning\n• Grout and tile scrubbing\n• Wall washing\n• Light fixture cleaning',
    icon: 'faBroom',
    image: '/images/deep-cleaning.jpg',
    faqs: [
      {
        question: 'How long does a deep cleaning take?',
        answer: 'A deep cleaning typically takes 6-8 hours for an average-sized home. The exact duration depends on the property size and condition.'
      },
      {
        question: 'How often should I schedule a deep cleaning?',
        answer: 'We recommend a deep cleaning every 3-6 months in addition to regular cleaning maintenance.'
      },
      {
        question: 'Is deep cleaning safe for all surfaces?',
        answer: 'Yes, we use appropriate cleaning methods and products for different surfaces to ensure effective cleaning without damage.'
      }
    ]
  }
]; 