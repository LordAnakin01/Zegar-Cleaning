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
  image: string;
  
  // Detailed information for service detail page
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
    description: 'Top-to-bottom cleaning of every room in your home, including dusting, mopping, vacuuming, and disinfecting surfaces. We ensure a sparkling clean living space that feels truly welcoming.',
    price: 40.00,
    image: '/assets/images/residential-cleaning.jpg',
    detailImages: [
      '/assets/images/residential-cleaning-1.jpg',
      '/assets/images/residential-cleaning-2.jpg',
      '/assets/images/residential-cleaning-3.jpg'
    ],
    longDescription: "Your home is more than just a place—it's where life happens. Our residential cleaning service is designed to give you the peace of mind that comes with a sparkling clean living space. We provide top-to-bottom cleaning of every room in your home, including dusting, mopping, vacuuming, disinfecting surfaces, and refreshing bathrooms and kitchens. We also offer attention to high-touch areas and hidden corners to ensure nothing is missed. Whether you need regular weekly upkeep, a seasonal deep clean, or move-in/move-out service, our team works around your schedule to keep your home healthy, organized, and truly welcoming.",
    process: [
      {
        step: 1,
        title: "Initial Consultation",
        description: "We begin with a walkthrough or virtual assessment to understand your home's layout and your unique preferences or concerns."
      },
      {
        step: 2,
        title: "Customized Cleaning Plan",
        description: "We design a cleaning schedule tailored to your lifestyle—whether one-time, weekly, or bi-weekly."
      },
      {
        step: 3,
        title: "Room-by-Room Cleaning",
        description: "Each area of the home is cleaned with specific techniques:\n- Living Areas & Bedrooms: Dusting furniture, vacuuming, wiping surfaces, and organizing clutter.\n- Kitchen: Degreasing stovetops, wiping countertops, cleaning sinks, polishing appliances, and mopping floors.\n- Bathrooms: Disinfecting toilets, sinks, tubs, and mirrors. We also scrub tiles, remove soap scum, and polish fixtures."
      },
      {
        step: 4,
        title: "High-Touch Surfaces",
        description: "We disinfect light switches, door handles, and remote controls to eliminate germs."
      },
      {
        step: 5,
        title: "Final Walkthrough",
        description: "Before we leave, we inspect every area to ensure it meets our high standards."
      }
    ],
    highlights: [
      'Customized room-by-room cleaning plans',
      'Safe, eco-friendly home cleaning products',
      'Trusted, background-checked professionals',
      'Flexible service options (weekly, bi-weekly, one-time)',
      'Attention to detail in high-touch and hidden areas',
      'Spot checks to ensure consistent quality'
    ],
    equipment: [
      {
        name: "Gasoline High Pressure Washer",
        image: "/assets/equipment/pressure-washer.svg",
        description: "Used for heavy-duty cleaning of outdoor surfaces such as driveways, walls, pavements, vehicles, and heavily stained floors. It sprays high-pressure water to remove dirt, grime, paint, mold, and grease."
      },
      {
        name: "Wet & Dry Vacuum Cleaner",
        image: "/assets/equipment/wet-dry-vacuum.svg",
        description: "Designed to clean both dry dust and wet spills. Often used in industrial, commercial, or post-construction cleaning where mixed debris needs removal."
      },
      {
        name: "Steam Cleaner",
        image: "/assets/equipment/steam-cleaner.svg",
        description: "Utilizes hot steam to sanitize and clean surfaces without chemicals. Commonly used for upholstery, curtains, kitchen appliances, and areas requiring hygienic cleaning like bathrooms."
      },
      {
        name: "Rotary Floor Scrubber/Buffer",
        image: "/assets/equipment/floor-scrubber.svg",
        description: "Used for deep-cleaning and polishing hard floors (tile, marble, vinyl, etc.). It scrubs away tough stains and can also be used for stripping and waxing floors."
      },
      {
        name: "Upright Vacuum/Carpet Extractor",
        image: "/assets/equipment/carpet-extractor.svg",
        description: "Used to deep-clean carpets by injecting cleaning solution and extracting it with embedded dirt."
      },
      {
        name: "Window Cleaning Kit",
        image: "/assets/equipment/window-cleaner.svg",
        description: "Professional window cleaning tools including squeegee and washer for streak-free results."
      },
      {
        name: "Microfiber Mop",
        image: "/assets/equipment/microfiber-mop.svg",
        description: "Advanced cleaning tool with microfiber technology for effective dust and dirt removal."
      },
      {
        name: "HEPA Vacuum",
        image: "/assets/equipment/hepa-vacuum.svg",
        description: "High-efficiency vacuum with HEPA filtration for superior dust and allergen removal."
      }
    ],
    faqs: [
      {
        question: "What areas do you serve?",
        answer: "We proudly offer our cleaning services across Abuja and surrounding areas. If you're unsure whether your location falls within our service range, feel free to contact us—we're always happy to accommodate where possible."
      },
      {
        question: "Are your cleaners trained and vetted?",
        answer: "Yes, every Zegar Elite Cleaning team member undergoes rigorous training and background checks before they join the field. We prioritize professionalism, safety, and integrity on every job site."
      },
      {
        question: "Do I need to provide cleaning supplies or equipment?",
        answer: "Not at all. We come fully equipped with our own professional-grade tools, machines, and cleaning products. However, if you have a preferred product you'd like us to use, we're happy to accommodate."
      },
      {
        question: "Do you use eco-friendly products?",
        answer: "Absolutely. We offer a Green Cleaning option that uses 100% biodegradable, non-toxic, pet- and child-safe cleaning solutions. Just let us know during booking if you'd prefer this option."
      },
      {
        question: "How do I book a service?",
        answer: "You can book through our website, call us directly, or fill out our contact form. We'll get back to you with a confirmation and a personalized cleaning plan based on your needs."
      },
      {
        question: "What's included in your residential cleaning service?",
        answer: "Our residential cleaning covers every room in your home. We clean floors, surfaces, baseboards, furniture, kitchens, and bathrooms. You can also request fridge, oven, and window cleaning as add-ons."
      },
      {
        question: "Do I need to be home during the cleaning?",
        answer: "It's completely up to you. Some clients prefer to be present, while others provide secure access. Your comfort and convenience are our top priority."
      }
    ],
  },
  {
    id: 'commercial-cleaning',
    icon: '/assets/icons/commercial-cleaning.svg',
    title: 'Commercial Cleaning',
    description: 'Maintain a pristine professional environment with our comprehensive commercial cleaning services. We ensure spotless floors, dust-free surfaces, and sanitized facilities.',
    price: 60.00,
    image: '/assets/images/commercial-cleaning.jpg',
    detailImages: [
      '/assets/images/commercial-cleaning-1.jpg',
      '/assets/images/commercial-cleaning-2.jpg',
      '/assets/images/commercial-cleaning-3.jpg'
    ],
    longDescription: "First impressions matter—especially in a professional environment. Our commercial cleaning service provides consistent, high-quality results that help you maintain a clean and professional business space. From office buildings and retail stores to showrooms and co-working hubs, we ensure floors are spotless, surfaces are dust-free, and restrooms are sanitized. We accommodate early morning, evening, or weekend service to avoid disrupting your operations, and we tailor our approach to your business type and workflow. Whether you manage a single office or a multi-floor facility, we create a customized cleaning plan that supports your brand image and workplace wellness.",
    process: [
      {
        step: 1,
        title: "On-Site Assessment",
        description: "We evaluate the workspace layout, business hours, and sanitation needs."
      },
      {
        step: 2,
        title: "Service Planning",
        description: "A custom cleaning plan is developed based on traffic flow, industry type, and client priorities."
      },
      {
        step: 3,
        title: "Scheduled Cleaning",
        description: "We clean at a time that minimizes disruption—before opening hours, after closing, or weekends."
      },
      {
        step: 4,
        title: "Workspace Detailing",
        description: "Desks, keyboards, monitors, and furniture are dusted and sanitized."
      },
      {
        step: 5,
        title: "Floor Maintenance",
        description: "Vacuuming carpets, sweeping and mopping tile or hardwood, and buffing as needed."
      },
      {
        step: 6,
        title: "Sanitizing High-Touch Zones",
        description: "Elevator buttons, door handles, shared electronics, and kitchenettes are disinfected."
      },
      {
        step: 7,
        title: "Restroom Deep Clean",
        description: "Toilets, urinals, sinks, partitions, and floors are disinfected with commercial-grade products."
      }
    ],
    highlights: [
      'Cleaning plans tailored to business hours and operations',
      'Discreet, after-hours or weekend availability',
      'Trained staff familiar with office, retail & shared spaces',
      'Sanitization of workstations, restrooms & shared equipment',
      'Use of industry-grade, non-disruptive cleaning products',
      'Ongoing supervision & quality assurance inspections'
    ],
    equipment: [
      {
        name: "Gasoline High Pressure Washer",
        image: "/assets/equipment/pressure-washer.svg",
        description: "Used for heavy-duty cleaning of outdoor surfaces such as driveways, walls, pavements, vehicles, and heavily stained floors. It sprays high-pressure water to remove dirt, grime, paint, mold, and grease."
      },
      {
        name: "Wet & Dry Vacuum Cleaner",
        image: "/assets/equipment/wet-dry-vacuum.svg",
        description: "Designed to clean both dry dust and wet spills. Often used in industrial, commercial, or post-construction cleaning where mixed debris needs removal."
      },
      {
        name: "Steam Cleaner",
        image: "/assets/equipment/steam-cleaner.svg",
        description: "Utilizes hot steam to sanitize and clean surfaces without chemicals. Commonly used for upholstery, curtains, kitchen appliances, and areas requiring hygienic cleaning like bathrooms."
      },
      {
        name: "Rotary Floor Scrubber/Buffer",
        image: "/assets/equipment/floor-scrubber.svg",
        description: "Used for deep-cleaning and polishing hard floors (tile, marble, vinyl, etc.). It scrubs away tough stains and can also be used for stripping and waxing floors."
      },
      {
        name: "Upright Vacuum/Carpet Extractor",
        image: "/assets/equipment/carpet-extractor.svg",
        description: "Used to deep-clean carpets by injecting cleaning solution and extracting it with embedded dirt."
      },
      {
        name: "Window Cleaning Kit",
        image: "/assets/equipment/window-cleaner.svg",
        description: "Professional window cleaning tools including squeegee and washer for streak-free results."
      },
      {
        name: "Microfiber Mop",
        image: "/assets/equipment/microfiber-mop.svg",
        description: "Advanced cleaning tool with microfiber technology for effective dust and dirt removal."
      },
      {
        name: "HEPA Vacuum",
        image: "/assets/equipment/hepa-vacuum.svg",
        description: "High-efficiency vacuum with HEPA filtration for superior dust and allergen removal."
      }
    ],
    faqs: [
      {
        question: "Do you offer after-hours commercial cleaning?",
        answer: "Yes, we provide flexible cleaning schedules, including evenings and weekends, so your business operations are never interrupted."
      },
      {
        question: "Can I schedule recurring cleanings for my office?",
        answer: "Absolutely. We offer daily, weekly, and bi-weekly recurring commercial cleaning packages. We'll customize a plan that best suits your workspace and staff needs."
      },
      {
        question: "What types of commercial spaces do you clean?",
        answer: "We service all types of commercial spaces including offices, retail stores, medical facilities, schools, restaurants, and more. Each space receives a customized cleaning plan."
      },
      {
        question: "Do you provide cleaning supplies and equipment?",
        answer: "Yes, we bring all necessary professional-grade cleaning supplies and equipment. We use commercial-grade products that are effective yet safe for your workspace."
      }
    ],
  },
  {
    id: 'window-cleaning',
    icon: '/assets/icons/window-cleaning.svg',
    title: 'Window Cleaning',
    description: 'Professional window cleaning that enhances curb appeal and lets in more natural light. We safely clean interior and exterior windows using eco-friendly solutions.',
    price: 45.00,
    image: '/assets/images/window-cleaning.jpg',
    detailImages: [
      '/assets/images/window-cleaning-1.jpg',
      '/assets/images/window-cleaning-2.jpg',
      '/assets/images/window-cleaning-3.jpg'
    ],
    longDescription: "Clean, streak-free windows do more than just improve visibility—they enhance curb appeal and let in more natural light. Our window cleaning service is perfect for homes, storefronts, offices, and high-visibility properties. We safely clean interior and exterior windows using eco-friendly, non-abrasive solutions that remove smudges, dust, and mineral buildup. Our trained professionals handle all window types, including glass panels, skylights, sliders, and multi-pane frames. Whether it's a small apartment or a large commercial building, we ensure every window shines bright and clear.",
    process: [
      {
        step: 1,
        title: "Pre-Clean Inspection",
        description: "We assess glass type, access requirements, and any hard water or paint residue issues."
      },
      {
        step: 2,
        title: "Surface Preparation",
        description: "We remove loose dirt and debris with microfiber cloths or soft brushes."
      },
      {
        step: 3,
        title: "Eco-Safe Cleaners",
        description: "Application of streak-free, non-abrasive cleaning solutions."
      },
      {
        step: 4,
        title: "Detailed Cleaning",
        description: "We clean both sides of the window panes, sills, and tracks using squeegees and lint-free cloths."
      },
      {
        step: 5,
        title: "Final Polish",
        description: "Edges and corners are hand-polished to remove drips or missed spots."
      },
      {
        step: 6,
        title: "Safety Assurance",
        description: "All high windows are serviced using ladders or extension poles with safety precautions."
      }
    ],
    highlights: [
      'Streak-free glass cleaning inside and out',
      'Safe products for tinted and treated windows',
      'Expert care for sills, frames, and tracks',
      'Ladders and extension tools for hard-to-reach areas',
      'Improved lighting and visibility post-clean',
      'Scheduled or seasonal window maintenance plans'
    ],
    equipment: [
      {
        name: "Gasoline High Pressure Washer",
        image: "/assets/equipment/pressure-washer.svg",
        description: "Used for heavy-duty cleaning of outdoor surfaces such as driveways, walls, pavements, vehicles, and heavily stained floors. It sprays high-pressure water to remove dirt, grime, paint, mold, and grease."
      },
      {
        name: "Wet & Dry Vacuum Cleaner",
        image: "/assets/equipment/wet-dry-vacuum.svg",
        description: "Designed to clean both dry dust and wet spills. Often used in industrial, commercial, or post-construction cleaning where mixed debris needs removal."
      },
      {
        name: "Steam Cleaner",
        image: "/assets/equipment/steam-cleaner.svg",
        description: "Utilizes hot steam to sanitize and clean surfaces without chemicals. Commonly used for upholstery, curtains, kitchen appliances, and areas requiring hygienic cleaning like bathrooms."
      },
      {
        name: "Rotary Floor Scrubber/Buffer",
        image: "/assets/equipment/floor-scrubber.svg",
        description: "Used for deep-cleaning and polishing hard floors (tile, marble, vinyl, etc.). It scrubs away tough stains and can also be used for stripping and waxing floors."
      },
      {
        name: "Upright Vacuum/Carpet Extractor",
        image: "/assets/equipment/carpet-extractor.svg",
        description: "Used to deep-clean carpets by injecting cleaning solution and extracting it with embedded dirt."
      },
      {
        name: "Window Cleaning Kit",
        image: "/assets/equipment/window-cleaner.svg",
        description: "Professional window cleaning tools including squeegee and washer for streak-free results."
      },
      {
        name: "Microfiber Mop",
        image: "/assets/equipment/microfiber-mop.svg",
        description: "Advanced cleaning tool with microfiber technology for effective dust and dirt removal."
      },
      {
        name: "HEPA Vacuum",
        image: "/assets/equipment/hepa-vacuum.svg",
        description: "High-efficiency vacuum with HEPA filtration for superior dust and allergen removal."
      }
    ],
    faqs: [
      {
        question: "Do you clean exterior and interior windows?",
        answer: "Yes. Our service includes both interior and exterior window cleaning, as well as frame and sill wipe-downs. For hard-to-reach windows, we use extendable poles and ladders for a safe, spotless finish."
      },
      {
        question: "Will your cleaning damage tinted or treated windows?",
        answer: "No, we use non-abrasive, pH-neutral cleaning solutions and soft tools that are completely safe for treated and tinted glass."
      },
      {
        question: "How often should windows be professionally cleaned?",
        answer: "For residential properties, we recommend cleaning every 3-6 months. Commercial properties may require more frequent cleaning depending on location and exposure."
      },
      {
        question: "Can you clean high-rise windows?",
        answer: "Yes, we have specialized equipment and trained professionals for high-rise window cleaning. We follow all safety protocols and regulations for elevated work."
      }
    ],
  },
  {
    id: 'renovation-cleaning',
    icon: '/assets/icons/renovation-cleaning.svg',
    title: 'Renovation Cleaning',
    description: 'Post-construction and renovation cleanup that removes dust, debris, and construction residue. We ensure your space is safe and ready for use.',
    price: 75.00,
    image: '/assets/images/renovation-cleaning.jpg',
    detailImages: [
      '/assets/images/renovation-cleaning-1.jpg',
      '/assets/images/renovation-cleaning-2.jpg',
      '/assets/images/renovation-cleaning-3.jpg'
    ],
    longDescription: "Remodeling and construction can transform a space—but they also leave behind a serious mess. Our renovation cleaning service tackles the aftermath of any building project, no matter the size. We remove dust, drywall residue, sawdust, adhesive, paint splatters, and leftover debris. We deep clean floors, walls, baseboards, fixtures, and windows to restore a fresh and polished environment. Whether you're a contractor handing over a newly renovated site or a homeowner returning after a remodel, we make the space spotless and ready for immediate use.",
    process: [
      {
        step: 1,
        title: "Debris Removal",
        description: "We begin by removing large debris, dust piles, and leftover materials from construction crews."
      },
      {
        step: 2,
        title: "Dusting from Top to Bottom",
        description: "Light fixtures, air vents, and ceiling fans are dusted before moving down to walls and baseboards."
      },
      {
        step: 3,
        title: "Surface Wipe-Down",
        description: "Every surface, including counters, shelves, doors, and window sills, is wiped thoroughly."
      },
      {
        step: 4,
        title: "Paint & Adhesive Spot Cleaning",
        description: "Gentle scrapers and safe solvents are used to remove splatter or residue."
      },
      {
        step: 5,
        title: "Vacuuming & Mopping",
        description: "We use HEPA vacuums and industrial-grade mops to eliminate fine dust and ensure a polished finish."
      },
      {
        step: 6,
        title: "Final Touches",
        description: "We inspect and clean all details, leaving the renovated area sparkling and ready for move-in."
      }
    ],
    highlights: [
      'Post-construction cleanup customized to your project',
      'Removal of dust, paint splatters, and adhesives',
      'Heavy-duty tools for deep restoration',
      'Safe disposal of construction residue',
      'Rapid turnaround for move-in readiness',
      'Final inspection to ensure spotless results'
    ],
    equipment: [
      {
        name: "Gasoline High Pressure Washer",
        image: "/assets/equipment/pressure-washer.svg",
        description: "Used for heavy-duty cleaning of outdoor surfaces such as driveways, walls, pavements, vehicles, and heavily stained floors. It sprays high-pressure water to remove dirt, grime, paint, mold, and grease."
      },
      {
        name: "Wet & Dry Vacuum Cleaner",
        image: "/assets/equipment/wet-dry-vacuum.svg",
        description: "Designed to clean both dry dust and wet spills. Often used in industrial, commercial, or post-construction cleaning where mixed debris needs removal."
      },
      {
        name: "Steam Cleaner",
        image: "/assets/equipment/steam-cleaner.svg",
        description: "Utilizes hot steam to sanitize and clean surfaces without chemicals. Commonly used for upholstery, curtains, kitchen appliances, and areas requiring hygienic cleaning like bathrooms."
      },
      {
        name: "Rotary Floor Scrubber/Buffer",
        image: "/assets/equipment/floor-scrubber.svg",
        description: "Used for deep-cleaning and polishing hard floors (tile, marble, vinyl, etc.). It scrubs away tough stains and can also be used for stripping and waxing floors."
      },
      {
        name: "Upright Vacuum/Carpet Extractor",
        image: "/assets/equipment/carpet-extractor.svg",
        description: "Used to deep-clean carpets by injecting cleaning solution and extracting it with embedded dirt."
      },
      {
        name: "Window Cleaning Kit",
        image: "/assets/equipment/window-cleaner.svg",
        description: "Professional window cleaning tools including squeegee and washer for streak-free results."
      },
      {
        name: "Microfiber Mop",
        image: "/assets/equipment/microfiber-mop.svg",
        description: "Advanced cleaning tool with microfiber technology for effective dust and dirt removal."
      },
      {
        name: "HEPA Vacuum",
        image: "/assets/equipment/hepa-vacuum.svg",
        description: "High-efficiency vacuum with HEPA filtration for superior dust and allergen removal."
      }
    ],
    faqs: [
      {
        question: "What's the difference between regular and post-renovation cleaning?",
        answer: "Post-renovation cleaning is much more detailed. We remove construction dust, paint splatters, adhesives, and debris that standard cleaning can't handle. It's the final polish your space needs after remodeling."
      },
      {
        question: "How soon after construction can cleaning begin?",
        answer: "We can begin as soon as the contractors finish and the site is safe to enter. We recommend a 12–24 hour window for dust to fully settle before deep cleaning begins."
      },
      {
        question: "Do you handle debris removal?",
        answer: "Yes, we handle the removal of construction debris, packaging materials, and other renovation waste. We ensure proper disposal following local regulations."
      },
      {
        question: "How long does post-renovation cleaning take?",
        answer: "The duration depends on the size of the space and extent of renovation. We provide a detailed timeline during our initial assessment."
      }
    ],
  },
  {
    id: 'deep-cleaning',
    icon: '/assets/icons/deep-cleaning.svg',
    title: 'Deep Cleaning',
    description: 'Thorough cleaning of every surface, nook, and cranny. Perfect for spring cleaning, move-in/out, or when you need a complete refresh.',
    price: 65.00,
    image: '/assets/images/deep-cleaning.jpg',
    detailImages: [
      '/assets/images/deep-cleaning-1.jpg',
      '/assets/images/deep-cleaning-2.jpg',
      '/assets/images/deep-cleaning-3.jpg'
    ],
    longDescription: "Our deep cleaning service is designed to address areas that regular cleaning routines often overlook. We go beyond surface-level tidying to target accumulated grime, limescale, grease, and hidden dust. Our professionals meticulously clean baseboards, light fixtures, ceiling fans, cabinet interiors, behind appliances, and under furniture. Bathrooms receive extra attention, including grout scrubbing, sink polishing, and tile disinfection. Kitchens are thoroughly sanitized, with appliance exteriors and interiors cleaned. Ideal for spring cleaning, preparing for guests, or periodic home refreshes, our deep cleaning leaves your entire space revitalized.",
    process: [
      {
        step: 1,
        title: "Pre-Clean Audit",
        description: "We assess neglected or problem areas needing extra attention."
      },
      {
        step: 2,
        title: "Detailed Scrubbing",
        description: "Bathrooms and kitchens receive heavy-duty scrubbing, including grout, faucets, and appliance interiors."
      },
      {
        step: 3,
        title: "Furniture & Floor Care",
        description: "Dusting behind and under furniture, vacuuming under rugs, and polishing hard floors."
      },
      {
        step: 4,
        title: "High Areas Reached",
        description: "We dust ceiling fans, light fixtures, vents, and crown molding."
      },
      {
        step: 5,
        title: "Organizational Touches",
        description: "Clutter is tidied, and items are returned to neat positions after cleaning."
      },
      {
        step: 6,
        title: "Final Disinfection",
        description: "Entire space is sanitized, especially high-touch surfaces and overlooked zones."
      }
    ],
    highlights: [
      'Floor-to-ceiling, wall-to-wall thorough cleaning',
      'Sanitizing of hard-to-reach and neglected spaces',
      'Appliance interior cleaning (fridge, oven, etc.)',
      'Detailed bathroom and kitchen scrubbing',
      'Seasonal or one-time reset cleans',
      'Optional add-ons: grout detailing, vent cleaning'
    ],
    equipment: [
      {
        name: "Gasoline High Pressure Washer",
        image: "/assets/equipment/pressure-washer.svg",
        description: "Used for heavy-duty cleaning of outdoor surfaces such as driveways, walls, pavements, vehicles, and heavily stained floors. It sprays high-pressure water to remove dirt, grime, paint, mold, and grease."
      },
      {
        name: "Wet & Dry Vacuum Cleaner",
        image: "/assets/equipment/wet-dry-vacuum.svg",
        description: "Designed to clean both dry dust and wet spills. Often used in industrial, commercial, or post-construction cleaning where mixed debris needs removal."
      },
      {
        name: "Steam Cleaner",
        image: "/assets/equipment/steam-cleaner.svg",
        description: "Utilizes hot steam to sanitize and clean surfaces without chemicals. Commonly used for upholstery, curtains, kitchen appliances, and areas requiring hygienic cleaning like bathrooms."
      },
      {
        name: "Rotary Floor Scrubber/Buffer",
        image: "/assets/equipment/floor-scrubber.svg",
        description: "Used for deep-cleaning and polishing hard floors (tile, marble, vinyl, etc.). It scrubs away tough stains and can also be used for stripping and waxing floors."
      },
      {
        name: "Upright Vacuum/Carpet Extractor",
        image: "/assets/equipment/carpet-extractor.svg",
        description: "Used to deep-clean carpets by injecting cleaning solution and extracting it with embedded dirt."
      },
      {
        name: "Window Cleaning Kit",
        image: "/assets/equipment/window-cleaner.svg",
        description: "Professional window cleaning tools including squeegee and washer for streak-free results."
      },
      {
        name: "Microfiber Mop",
        image: "/assets/equipment/microfiber-mop.svg",
        description: "Advanced cleaning tool with microfiber technology for effective dust and dirt removal."
      },
      {
        name: "HEPA Vacuum",
        image: "/assets/equipment/hepa-vacuum.svg",
        description: "High-efficiency vacuum with HEPA filtration for superior dust and allergen removal."
      }
    ],
    faqs: [
      {
        question: "How is deep cleaning different from standard cleaning?",
        answer: "Deep cleaning targets areas often missed during regular upkeep, like behind appliances, vents, grout, and baseboards. It's ideal for first-time clients, seasonal resets, or homes that haven't been cleaned in a while."
      },
      {
        question: "How often should I book a deep cleaning?",
        answer: "We recommend a deep cleaning every 3–6 months, or before hosting an event, moving in/out, or transitioning to recurring service."
      },
      {
        question: "How long does a deep cleaning take?",
        answer: "A thorough deep cleaning typically takes 4-8 hours depending on the size and condition of your space. We ensure no detail is overlooked."
      },
      {
        question: "What areas are included in deep cleaning?",
        answer: "We clean everything from ceiling to floor, including light fixtures, window tracks, appliance interiors, cabinet organization, and detailed bathroom scrubbing."
      }
    ],
  },
  {
    id: 'green-cleaning',
    icon: '/assets/icons/green-cleaning.svg',
    title: 'Green Cleaning',
    description: 'Eco-friendly cleaning using certified sustainable products that are safe for children, pets, and allergy-sensitive individuals.',
    price: 55.00,
    image: '/assets/images/green-cleaning.jpg',
    detailImages: [
      '/assets/images/green-cleaning-1.jpg',
      '/assets/images/green-cleaning-2.jpg',
      '/assets/images/green-cleaning-3.jpg'
    ],
    longDescription: "Eco-conscious doesn't have to mean less effective. Our green cleaning service is ideal for clients seeking sustainable, non-toxic solutions without sacrificing quality. We use certified eco-friendly products that are safe for children, pets, and allergy-sensitive individuals. From biodegradable disinfectants to reusable microfiber cloths, we minimize environmental impact while maintaining the highest standards of cleanliness. This service is perfect for wellness-focused households, offices with sustainability goals, and anyone who values a healthier indoor environment.",
    process: [
      {
        step: 1,
        title: "Consultation for Sensitivities",
        description: "We identify allergies, sensitivities, or green certifications required."
      },
      {
        step: 2,
        title: "Selection of Products",
        description: "Only plant-based, non-toxic, biodegradable cleaning agents are used."
      },
      {
        step: 3,
        title: "Gentle Yet Effective Techniques",
        description: "Steam cleaning, microfiber cloths, and eco-safe solutions ensure deep but safe cleaning."
      },
      {
        step: 4,
        title: "Waste Minimization",
        description: "Use of reusable tools, refillable containers, and minimal packaging."
      },
      {
        step: 5,
        title: "Air-Friendly Practices",
        description: "No harsh chemical sprays or VOC-heavy cleaners."
      },
      {
        step: 6,
        title: "Final Eco Check",
        description: "We ensure both safety and cleanliness without leaving behind chemical residues."
      }
    ],
    highlights: [
      'Certified non-toxic, biodegradable products',
      'Ideal for homes with kids, pets, or allergy concerns',
      'Zero harsh chemicals or VOCs',
      'Sustainable tools and water-saving methods',
      'Gentle yet effective on all surfaces',
      'Responsible, wellness-focused cleaning approach'
    ],
    equipment: [
      {
        name: "Gasoline High Pressure Washer",
        image: "/assets/equipment/pressure-washer.svg",
        description: "Used for heavy-duty cleaning of outdoor surfaces such as driveways, walls, pavements, vehicles, and heavily stained floors. It sprays high-pressure water to remove dirt, grime, paint, mold, and grease."
      },
      {
        name: "Wet & Dry Vacuum Cleaner",
        image: "/assets/equipment/wet-dry-vacuum.svg",
        description: "Designed to clean both dry dust and wet spills. Often used in industrial, commercial, or post-construction cleaning where mixed debris needs removal."
      },
      {
        name: "Steam Cleaner",
        image: "/assets/equipment/steam-cleaner.svg",
        description: "Utilizes hot steam to sanitize and clean surfaces without chemicals. Commonly used for upholstery, curtains, kitchen appliances, and areas requiring hygienic cleaning like bathrooms."
      },
      {
        name: "Rotary Floor Scrubber/Buffer",
        image: "/assets/equipment/floor-scrubber.svg",
        description: "Used for deep-cleaning and polishing hard floors (tile, marble, vinyl, etc.). It scrubs away tough stains and can also be used for stripping and waxing floors."
      },
      {
        name: "Upright Vacuum/Carpet Extractor",
        image: "/assets/equipment/carpet-extractor.svg",
        description: "Used to deep-clean carpets by injecting cleaning solution and extracting it with embedded dirt."
      },
      {
        name: "Window Cleaning Kit",
        image: "/assets/equipment/window-cleaner.svg",
        description: "Professional window cleaning tools including squeegee and washer for streak-free results."
      },
      {
        name: "Microfiber Mop",
        image: "/assets/equipment/microfiber-mop.svg",
        description: "Advanced cleaning tool with microfiber technology for effective dust and dirt removal."
      },
      {
        name: "HEPA Vacuum",
        image: "/assets/equipment/hepa-vacuum.svg",
        description: "High-efficiency vacuum with HEPA filtration for superior dust and allergen removal."
      }
    ],
    faqs: [
      {
        question: "Are your green cleaning products truly non-toxic?",
        answer: "Yes. All products in our green cleaning package are plant-based, biodegradable, and free from harsh chemicals or artificial fragrances. Safe for babies, pets, and allergy-prone clients."
      },
      {
        question: "Is green cleaning as effective as traditional methods?",
        answer: "Absolutely. Our green methods clean just as deeply—especially with steam and microfiber—while being gentler on your health and the environment."
      },
      {
        question: "What makes your green cleaning service eco-friendly?",
        answer: "We use biodegradable products, minimize water waste, employ reusable tools, and follow sustainable practices throughout our service delivery."
      },
      {
        question: "Is green cleaning suitable for all surfaces?",
        answer: "Yes, our eco-friendly products are safe and effective on all surfaces while being gentler than harsh chemicals. We match the right product to each surface type."
      }
    ],
  },
  {
    id: 'upholstery-carpet-cleaning',
    icon: '/assets/icons/upholstery-cleaning.svg',
    title: 'Upholstery & Carpet Cleaning',
    description: 'Professional cleaning of carpets, rugs, sofas, and chairs. We remove stains, odors, and allergens using hot water extraction.',
    price: 50.00,
    image: '/assets/images/upholstery-cleaning.jpg',
    detailImages: [
      '/assets/images/upholstery-cleaning-1.jpg',
      '/assets/images/upholstery-cleaning-2.jpg',
      '/assets/images/upholstery-cleaning-3.jpg'
    ],
    longDescription: "Furniture and carpets act like sponges, absorbing dirt, dust, allergens, and odors over time. Our upholstery and carpet cleaning service revives your soft surfaces with professional-grade steam cleaning and extraction equipment. We treat stains, lift embedded dirt, and restore vibrant colors and freshness. Whether it's a well-loved sofa, area rugs, office chairs, or wall-to-wall carpet, we handle it with care—using the right cleaning method for each fabric type. The result is a cleaner, more comfortable, and more breathable space.",
    process: [
      {
        step: 1,
        title: "Material Inspection",
        description: "We examine fabric type, colorfastness, stains, and texture before choosing a cleaning method."
      },
      {
        step: 2,
        title: "Pre-Treatment",
        description: "Stains and high-traffic areas are pre-treated with gentle, effective solutions."
      },
      {
        step: 3,
        title: "Deep Extraction or Steam Cleaning",
        description: "We use hot water extraction or steam to lift embedded dirt and sanitize fibers."
      },
      {
        step: 4,
        title: "Fabric Protection (Optional)",
        description: "Application of protectants to guard against future stains."
      },
      {
        step: 5,
        title: "Drying Process",
        description: "High-powered blowers are used to speed up drying and prevent mildew."
      },
      {
        step: 6,
        title: "Final Fabric Grooming",
        description: "We finish with light brushing to restore the fabric's natural texture and softness."
      }
    ],
    highlights: [
      'Deep steam or extraction cleaning for all fabrics',
      'Pre-treatment of stains and high-traffic areas',
      'Odor removal and allergen reduction',
      'Upholstery-safe, fiber-specific products',
      'Fast-drying, residue-free finishes',
      'Restores softness, vibrancy, and cleanliness'
    ],
    equipment: [
      {
        name: "Gasoline High Pressure Washer",
        image: "/assets/equipment/pressure-washer.svg",
        description: "Used for heavy-duty cleaning of outdoor surfaces such as driveways, walls, pavements, vehicles, and heavily stained floors. It sprays high-pressure water to remove dirt, grime, paint, mold, and grease."
      },
      {
        name: "Wet & Dry Vacuum Cleaner",
        image: "/assets/equipment/wet-dry-vacuum.svg",
        description: "Designed to clean both dry dust and wet spills. Often used in industrial, commercial, or post-construction cleaning where mixed debris needs removal."
      },
      {
        name: "Steam Cleaner",
        image: "/assets/equipment/steam-cleaner.svg",
        description: "Utilizes hot steam to sanitize and clean surfaces without chemicals. Commonly used for upholstery, curtains, kitchen appliances, and areas requiring hygienic cleaning like bathrooms."
      },
      {
        name: "Rotary Floor Scrubber/Buffer",
        image: "/assets/equipment/floor-scrubber.svg",
        description: "Used for deep-cleaning and polishing hard floors (tile, marble, vinyl, etc.). It scrubs away tough stains and can also be used for stripping and waxing floors."
      },
      {
        name: "Upright Vacuum/Carpet Extractor",
        image: "/assets/equipment/carpet-extractor.svg",
        description: "Used to deep-clean carpets by injecting cleaning solution and extracting it with embedded dirt."
      },
      {
        name: "Window Cleaning Kit",
        image: "/assets/equipment/window-cleaner.svg",
        description: "Professional window cleaning tools including squeegee and washer for streak-free results."
      },
      {
        name: "Microfiber Mop",
        image: "/assets/equipment/microfiber-mop.svg",
        description: "Advanced cleaning tool with microfiber technology for effective dust and dirt removal."
      },
      {
        name: "HEPA Vacuum",
        image: "/assets/equipment/hepa-vacuum.svg",
        description: "High-efficiency vacuum with HEPA filtration for superior dust and allergen removal."
      }
    ],
    faqs: [
      {
        question: "Can you remove tough stains from my couch or carpet?",
        answer: "Yes. Our technicians use powerful extraction machines and safe spot treatments to remove food, pet, wine, and dirt stains without damaging fabric or fibers."
      },
      {
        question: "How long will it take for my furniture or carpet to dry?",
        answer: "Typically, drying takes 4–6 hours depending on airflow and fabric type. We use fast-drying techniques and can speed up the process with blowers if requested."
      },
      {
        question: "Do you test fabrics before cleaning?",
        answer: "Yes, we always perform a spot test in an inconspicuous area to ensure colorfastness and determine the best cleaning method for your specific fabric type."
      },
      {
        question: "How often should I have my carpets and upholstery professionally cleaned?",
        answer: "For optimal maintenance, we recommend professional cleaning every 6-12 months for carpets and upholstery, or more frequently for high-traffic areas and homes with pets."
      }
    ],
  },
  {
    id: 'industrial-cleaning',
    icon: '/assets/icons/industrial-cleaning.svg',
    title: 'Industrial Cleaning',
    description: 'Heavy-duty cleaning for warehouses, factories, and industrial facilities. We handle tough grime, oil, and specialized cleaning needs.',
    price: 90.00,
    image: '/assets/images/industrial-cleaning.jpg',
    detailImages: [
      '/assets/images/industrial-cleaning-1.jpg',
      '/assets/images/industrial-cleaning-2.jpg',
      '/assets/images/industrial-cleaning-3.jpg'
    ],
    longDescription: "Industrial sites require heavy-duty solutions—and that's exactly what we deliver. Our industrial cleaning service is tailored to the unique challenges of warehouses, factories, and production facilities. We clean large-scale surfaces, machinery exteriors, loading docks, floors, storage areas, and high-dust zones using powerful equipment and industrial-strength, compliant products. Safety is always a priority, and our team adheres to all relevant regulations and site-specific protocols. Whether it's ongoing maintenance or a one-time cleanup, we help ensure your operations run in a clean and safe environment.",
    process: [
      {
        step: 1,
        title: "Safety Briefing & Planning",
        description: "We review facility hazards, PPE requirements, and cleaning zones."
      },
      {
        step: 2,
        title: "Surface Decontamination",
        description: "We remove grease, oil, and industrial residue from machinery exteriors and floors."
      },
      {
        step: 3,
        title: "Dust & Debris Control",
        description: "High-efficiency vacuums capture particulate matter from ceilings, vents, and rafters."
      },
      {
        step: 4,
        title: "Heavy-Duty Floor Scrubbing",
        description: "Auto scrubbers or degreasers are used on warehouse or factory floors."
      },
      {
        step: 5,
        title: "Storage & Equipment Area Cleaning",
        description: "We clean shelving units, loading docks, and specialized equipment exteriors."
      },
      {
        step: 6,
        title: "Final Compliance Check",
        description: "We confirm that the cleaned areas meet safety and sanitation standards per industry regulations."
      }
    ],
    highlights: [
      'Heavy-duty equipment for large-scale areas',
      'Safe degreasing of machinery and workspaces',
      'Compliance with health, safety, and industry standards',
      'Team trained in industrial hazard awareness',
      'Warehouse, plant, and facility readiness',
      'Scheduled or emergency deep cleaning support'
    ],
    equipment: [
      {
        name: "Gasoline High Pressure Washer",
        image: "/assets/equipment/pressure-washer.svg",
        description: "Used for heavy-duty cleaning of outdoor surfaces such as driveways, walls, pavements, vehicles, and heavily stained floors. It sprays high-pressure water to remove dirt, grime, paint, mold, and grease."
      },
      {
        name: "Wet & Dry Vacuum Cleaner",
        image: "/assets/equipment/wet-dry-vacuum.svg",
        description: "Designed to clean both dry dust and wet spills. Often used in industrial, commercial, or post-construction cleaning where mixed debris needs removal."
      },
      {
        name: "Steam Cleaner",
        image: "/assets/equipment/steam-cleaner.svg",
        description: "Utilizes hot steam to sanitize and clean surfaces without chemicals. Commonly used for upholstery, curtains, kitchen appliances, and areas requiring hygienic cleaning like bathrooms."
      },
      {
        name: "Rotary Floor Scrubber/Buffer",
        image: "/assets/equipment/floor-scrubber.svg",
        description: "Used for deep-cleaning and polishing hard floors (tile, marble, vinyl, etc.). It scrubs away tough stains and can also be used for stripping and waxing floors."
      },
      {
        name: "Upright Vacuum/Carpet Extractor",
        image: "/assets/equipment/carpet-extractor.svg",
        description: "Used to deep-clean carpets by injecting cleaning solution and extracting it with embedded dirt."
      },
      {
        name: "Window Cleaning Kit",
        image: "/assets/equipment/window-cleaner.svg",
        description: "Professional window cleaning tools including squeegee and washer for streak-free results."
      },
      {
        name: "Microfiber Mop",
        image: "/assets/equipment/microfiber-mop.svg",
        description: "Advanced cleaning tool with microfiber technology for effective dust and dirt removal."
      },
      {
        name: "HEPA Vacuum",
        image: "/assets/equipment/hepa-vacuum.svg",
        description: "High-efficiency vacuum with HEPA filtration for superior dust and allergen removal."
      }
    ],
    faqs: [
      {
        question: "What types of industrial spaces do you service?",
        answer: "We clean warehouses, manufacturing plants, loading docks, storage facilities, and production areas. Services include floor scrubbing, grease removal, ventilation cleaning, and machine exterior wipe-downs."
      },
      {
        question: "Are your cleaners certified for industrial environments?",
        answer: "Yes. Our team is trained in safety compliance, PPE use, and operational standards specific to industrial settings."
      },
      {
        question: "Can you work around our production schedule?",
        answer: "Yes, we offer flexible scheduling including nights and weekends to minimize disruption to your operations. We can also work in sections to keep your facility running."
      },
      {
        question: "Do you follow industry-specific cleaning protocols?",
        answer: "Absolutely. We adhere to all relevant industry standards and regulations, including OSHA requirements and specific protocols for different manufacturing environments."
      }
    ],
  },
  {
    id: 'sanitization-services',
    icon: '/assets/icons/sanitization.svg',
    title: 'Sanitization Services',
    description: 'Comprehensive disinfection using hospital-grade products and electrostatic technology to eliminate pathogens from all surfaces.',
    price: 85.00,
    image: '/assets/images/sanitization.jpg',
    detailImages: [
      '/assets/images/sanitization-1.jpg',
      '/assets/images/sanitization-2.jpg',
      '/assets/images/sanitization-3.jpg'
    ],
    longDescription: "Health and hygiene are at the core of our sanitization services. We provide comprehensive disinfecting solutions for residential, commercial, and institutional spaces. Using hospital-grade disinfectants and electrostatic spraying technology, we eliminate bacteria, viruses, and other pathogens from all major surfaces and touchpoints—doorknobs, desks, light switches, remote controls, and more. Whether it's part of routine upkeep or a response to illness exposure, our sanitization services provide peace of mind and a cleaner, safer space for everyone.",
    process: [
      {
        step: 1,
        title: "Risk Assessment",
        description: "We identify high-traffic areas and touchpoints that require prioritization."
      },
      {
        step: 2,
        title: "Surface Preparation",
        description: "General cleaning is done first to remove visible dirt before disinfecting."
      },
      {
        step: 3,
        title: "Disinfection Application",
        description: "EPA-approved or hospital-grade disinfectants are applied using misting or electrostatic sprayers."
      },
      {
        step: 4,
        title: "Dwell Time Monitoring",
        description: "We allow sufficient contact time for disinfectants to be fully effective."
      },
      {
        step: 5,
        title: "Targeted Sanitization",
        description: "Focus on doorknobs, light switches, faucet handles, remotes, phones, and common-use equipment."
      },
      {
        step: 6,
        title: "Post-Service Report",
        description: "We offer a breakdown of the areas sanitized and guidelines for ongoing hygiene practices."
      }
    ],
    highlights: [
      'Hospital-grade disinfectants & misting systems',
      'Electrostatic spraying for complete coverage',
      'Focus on high-touch areas and shared surfaces',
      'Ideal for homes, offices, schools & public spaces',
      'CDC-recommended cleaning protocols',
      'Peace of mind through proactive hygiene'
    ],
    equipment: [
      {
        name: "Gasoline High Pressure Washer",
        image: "/assets/equipment/pressure-washer.svg",
        description: "Used for heavy-duty cleaning of outdoor surfaces such as driveways, walls, pavements, vehicles, and heavily stained floors. It sprays high-pressure water to remove dirt, grime, paint, mold, and grease."
      },
      {
        name: "Wet & Dry Vacuum Cleaner",
        image: "/assets/equipment/wet-dry-vacuum.svg",
        description: "Designed to clean both dry dust and wet spills. Often used in industrial, commercial, or post-construction cleaning where mixed debris needs removal."
      },
      {
        name: "Steam Cleaner",
        image: "/assets/equipment/steam-cleaner.svg",
        description: "Utilizes hot steam to sanitize and clean surfaces without chemicals. Commonly used for upholstery, curtains, kitchen appliances, and areas requiring hygienic cleaning like bathrooms."
      },
      {
        name: "Rotary Floor Scrubber/Buffer",
        image: "/assets/equipment/floor-scrubber.svg",
        description: "Used for deep-cleaning and polishing hard floors (tile, marble, vinyl, etc.). It scrubs away tough stains and can also be used for stripping and waxing floors."
      },
      {
        name: "Upright Vacuum/Carpet Extractor",
        image: "/assets/equipment/carpet-extractor.svg",
        description: "Used to deep-clean carpets by injecting cleaning solution and extracting it with embedded dirt."
      },
      {
        name: "Window Cleaning Kit",
        image: "/assets/equipment/window-cleaner.svg",
        description: "Professional window cleaning tools including squeegee and washer for streak-free results."
      },
      {
        name: "Microfiber Mop",
        image: "/assets/equipment/microfiber-mop.svg",
        description: "Advanced cleaning tool with microfiber technology for effective dust and dirt removal."
      },
      {
        name: "HEPA Vacuum",
        image: "/assets/equipment/hepa-vacuum.svg",
        description: "High-efficiency vacuum with HEPA filtration for superior dust and allergen removal."
      }
    ],
    faqs: [
      {
        question: "What disinfectants do you use for sanitization?",
        answer: "We use hospital-grade, EPA-approved disinfectants that are proven to eliminate bacteria, viruses (including COVID-19), and fungi from high-touch surfaces."
      },
      {
        question: "How often should I schedule sanitization?",
        answer: "For homes, monthly or seasonal is often enough. For offices, gyms, and schools, we recommend weekly or bi-weekly sanitization depending on foot traffic and exposure risk."
      },
      {
        question: "How long does the sanitization process take?",
        answer: "The process typically takes 1-3 hours depending on space size. Surfaces are safe to touch once dry, usually within 10-15 minutes after application."
      },
      {
        question: "Is your sanitization service safe for sensitive environments?",
        answer: "Yes, we use EPA-registered products that are safe for use around people, pets, and food preparation areas. We can also provide low-odor options for sensitive individuals."
      }
    ],
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