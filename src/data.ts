/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Project, ServicePlan, GalleryPhoto, Testimonial, ProcessStep } from './types';

export const PROJECTS_DATA: Project[] = [
  {
    id: 'manthan-trailer',
    title: 'Manthan 2025 Trailer',
    category: 'Cinematic Trailer',
    year: '2025',
    description: 'A slow, atmospheric, and highly stylized black-and-white cinematic festival trailer that redefines traditional event recaps with an independent film aesthetic.',
    challenge: 'Event trailers are universally fast, loud, and hyper-colored. The challenge was to break the mold entirely: capturing the soul of a massive student festival through slow-paced, intimate, high-contrast monochrome cinematography that feels like a feature film.',
    process: 'Shot strictly with manual primes and a focus on physical emotion rather than stage actions. We processed the color palette to remove all light pollution, creating stark contrasts, heavy shadows, and deep gray gradients that let the physical movement and scale of the crowd speak.',
    results: 'Marked as the first-ever video of its kind for the Manthan festival. It garnered massive organic reach and sparked a cultural shift in how creative events are documented.',
    tools: ['DaVinci Resolve', 'Premiere Pro', 'After Effects'],
    coverImage: '/assets/manthan.jpg',
    videoUrl: 'https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0543f3d9c22e03259e355f307842c67&profile_id=139&oauth2_token_id=57447761',
    embedType: 'native',
    gallery: [
      'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&w=800&q=80'
    ],
    stats: [
      { label: 'Cinematography', value: 'Monochrome' },
      { label: 'Organic Reach', value: 'High' },
      { label: 'Role', value: 'Director & Editor' }
    ]
  },
  {
    id: 'life-within',
    title: 'The Life Within',
    category: 'Narrative Short',
    year: '2024',
    description: 'A compelling, emotional short film written, directed, and edited for a blood donation awareness campaign under zero-budget limitations.',
    challenge: 'How do you create an emotional and highly professional narrative that motivates blood donation without resorting to generic PSAs or having any financial budget for actors, lighting rigs, or studios?',
    process: 'We engineered a highly focused screenplay based on real human stories. We utilized ambient street lighting, natural window reflections, and deliberate long-take cinematography. Pacing was established slowly to let the audience build a profound connection with the characters, supplemented by bespoke, organic sound design.',
    results: 'The film successfully premiered at the campaign\'s headline event, receiving critical acclaim for delivering a deeply moving, cinema-grade product from conception to finish with zero monetary resources.',
    tools: ['Premiere Pro', 'DaVinci Resolve', 'After Effects', 'CapCut'],
    coverImage: '/assets/life-within.jpg',
    videoUrl: 'https://www.youtube.com/embed/Udk7zP7b05w',
    embedType: 'youtube',
    gallery: [
      'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=800&q=80'
    ],
    stats: [
      { label: 'Production Budget', value: '₹0' },
      { label: 'Role', value: 'Writer, Director & Editor' },
      { label: 'Impact', value: 'Premiere Launch' }
    ]
  },
  {
    id: 'tedx-highlights',
    title: 'TEDx Speaker Series',
    category: 'Creative Direction',
    year: '2024',
    description: 'An immersive documentary-style visual series documenting the speakers, backstage moments, and intellectual density of TEDx BITBangalore.',
    challenge: 'To turn static stage presentations into highly cinematic, visually rhythmic content that captures the dynamic spark of live ideas and retains viewers on short-form digital channels.',
    process: 'Using triple-camera perspective layouts and active shoulder rigs, we captured the visceral body language of speakers. In post-production, we implemented high-retention zoom pacing, custom sound triggers, and a refined warm color grade to mirror a high-end global studio look.',
    results: 'Resulted in the most-watched video series in the institution\'s history, with individual speaker clips trending regionally across LinkedIn and YouTube.',
    tools: ['Premiere Pro', 'Lightroom', 'After Effects'],
    coverImage: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1600&q=90',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-speaker-at-a-business-seminar-31514-large.mp4',
    embedType: 'native',
    gallery: [
      'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=800&q=80'
    ],
    stats: [
      { label: 'Client', value: 'TEDx BIT' },
      { label: 'Average Retention', value: '78%' },
      { label: 'Total Views', value: '150K+' }
    ]
  },
  {
    id: 'nature-films',
    title: 'Nature Films & Visuals',
    category: 'Cinematography',
    year: '2024',
    description: 'An ongoing experimental series focusing on raw organic details, waterfalls, forest lighting, and macro wildlife portraits.',
    challenge: 'Capturing the unpredictability of natural life and transient meteorological states with absolute color precision, patience, and technical excellence.',
    process: 'We traveled to rain-slicked forest corridors and mountain ridges, shooting exclusively during twilight hours and heavy rainstorms. The editing centers heavily on the sensory atmosphere: high-definition water splashes, wind friction, and insects moving in macro precision.',
    results: 'A highly acclaimed compilation of visual loops that have been shared widely by independent filmmakers and featured in premium ambient showreels.',
    tools: ['DaVinci Resolve', 'Lightroom', 'Premiere Pro'],
    coverImage: 'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?auto=format&fit=crop&w=1600&q=90',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-forest-stream-in-the-sunlight-529-large.mp4',
    embedType: 'native',
    gallery: [
      'https://images.unsplash.com/photo-1470240731273-7821a6eeb6bd?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1507608869274-d3177c8bb4c7?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1433832597046-4f10e10ac764?auto=format&fit=crop&w=800&q=80'
    ],
    stats: [
      { label: 'Resolution', value: '4K Cinema' },
      { label: 'Color Grade', value: 'Organic Warm' },
      { label: 'Locations', value: 'Forest & Mountain Ridge' }
    ]
  },
  {
    id: 'podcast-mastery',
    title: 'Podcast Editing Suite',
    category: 'Podcast Editing',
    year: '2024',
    description: 'Premium visual podcast development, editing, and pacing optimization for conversational and commentary content creators.',
    challenge: 'Static multicam video formats struggle to maintain high retention rates. Our mission was to develop a proprietary editing system that reads the emotional pulse of conversations and matches it with micro-zooms, curated overlays, and clean pacing.',
    process: 'We structured a workflow involving precise multi-camera color matching, seamless silent-gap removal, bespoke lower-thirds, and high-fidelity vocal EQ mastering that rivals global studio standards.',
    results: 'Boosted visual retention rate by over 45% for our anchor podcast shows, turning long interviews into highly shareable, gold-standard clips.',
    tools: ['Premiere Pro', 'DaVinci Resolve', 'Adobe Audition'],
    coverImage: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=1600&q=90',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-sound-producer-working-at-sound-board-31498-large.mp4',
    embedType: 'native',
    gallery: [
      'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1581333100576-b73bbe79c219?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1461360370896-922624d12aa1?auto=format&fit=crop&w=800&q=80'
    ],
    stats: [
      { label: 'Audience Retention', value: '+45%' },
      { label: 'Mastering', value: 'Ultra-Clear' },
      { label: 'Episodes Delivered', value: '120+' }
    ]
  }
];

export const SERVICE_PLANS: ServicePlan[] = [
  {
    id: 'cut',
    name: 'CUT',
    priceINR: 400,
    priceUSD: 5,
    description: 'Perfect for quick, clean, and highly professional basic edits that establish a crisp narrative pacing.',
    features: [
      'Seamless clean cuts & pacing',
      'Removal of mistakes, pauses, and filler words',
      'Basic dynamic subtitle overlays',
      'Premium audio cleanup & background noise reduction',
      'Standard 1080p high-fidelity delivery',
      '1 structural revision round'
    ]
  },
  {
    id: 'frame',
    name: 'FRAME',
    priceINR: 750,
    priceUSD: 10,
    description: 'Designed specifically for content creators wanting polished, highly-engaging, and professional social or promotional video.',
    features: [
      'Advanced editorial pacing & rhythm syncing',
      'Custom styled brand captions & typographic popups',
      'High-end color grading & visual enhancement',
      'Dynamic keyframe zooms & transition effects',
      'Sound design with immersive spatial mixing',
      'Social cutdowns & multi-aspect exports (9:16 + 16:9)',
      '2 interactive revision rounds'
    ],
    popular: true
  },
  {
    id: 'cinema',
    name: 'CINEMA',
    priceINR: 1200,
    priceUSD: 15,
    description: 'Our flagship premium service. High-retention, cinematic editing engineered to tell stories that captivate global audiences.',
    features: [
      'Masterful cinematic narrative storytelling structure',
      'Bespoke cinematic color grading & LUT matching',
      'Dynamic audio mastering, soundscapes & vocal treatment',
      'B-roll integration & custom overlay setups',
      'Sleek, minimal custom motion graphics & title screens',
      'Unrestricted high-retention premium typography styling',
      'Unlimited revisions & priority creative consulting'
    ]
  }
];

export const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    id: 'photo-1',
    title: 'The Guardian',
    category: 'Wildlife & Portrait',
    imageUrl: '/assets/the-guardian.jpg',
    aspectRatio: 'square',
    location:'Chikmaglur, Karnataka',
    cameraSettings: '50mm • f/1.8 • ISO 400 • 1/160s'
  },
  {
    id: 'photo-2',
    title: 'Temple glory',
    category: 'Fine Art Portrait',
    imageUrl: '/assets/temple-glory.png',
    aspectRatio: 'portrait',
    location: 'Chikmaglur, Karnataka',
    cameraSettings: '35mm • f/1.4 • ISO 100 • 1/250s'
  },
  {
    id: 'photo-3',
    title: 'The Fire Ritual',
    category: 'Cultural Documentary',
    imageUrl: '/assets/fire-ritual.jpg',
    aspectRatio: 'portrait',
    location: 'Bangalore',
    cameraSettings: '85mm • f/1.4 • ISO 1600 • 1/1000s'
  },
  {
    id: 'photo-4',
    title: 'The Dragonfly',
    category: 'Wildlife',
    imageUrl: '/assets/the-dragonfly.jpg',
    aspectRatio: 'landscape',
    location: 'Chikmaglur, Karnataka',
    cameraSettings: '24mm • f/8.0 • ISO 100 • 1/40s'
  },
  {
    id: 'photo-5',
    title: 'The Frog',
    category: 'Wildlife',
    imageUrl: '/assets/the-frog.jpg',
    aspectRatio: 'landscape',
    location: 'Chikmaglur, Karnataka',
    cameraSettings: '50mm • f/2.0 • ISO 800 • 1/320s'
  },
  {
    id: 'photo-6',
    title: 'The Cat',
    category: 'Wildlife',
    imageUrl: '/assets/the-cat.jpg',
    aspectRatio: 'portrait',
    location: 'Chikmaglur, Karnataka',
    cameraSettings: '35mm • f/4.0 • ISO 200 • 1/80s'
  },
  {
    id: 'photo-7',
    title: 'Flight of Flame',
    category: 'Avian & Sunset',
    imageUrl: '/assets/flight-of-flame.jpg',
    aspectRatio: 'landscape',
    location: 'Chikmaglur, Karnataka',
    cameraSettings: '400mm • f/5.6 • ISO 400 • 1/2000s'
  },
  {
    id: 'photo-8',
    title: 'High Forest',
    category: 'Wildlife',
    imageUrl: '/assets/high-forest.png',
    aspectRatio: 'portrait',
    location: 'Chikmaglur, Karnataka',
    cameraSettings: '135mm • f/2.8 • ISO 200 • 1/500s'
  },
  {
    id: 'photo-9',
    title: 'Rain Slicked',
    category: 'Fine Art Potrait',
    imageUrl: '/assets/rain-slicked.png',
    aspectRatio: 'square',
    location: 'Chikmaglur, Karnataka',
    cameraSettings: '90mm Macro • f/4.5 • ISO 100 • 1/125s'
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 't1',
    quote: 'SUJ STUDIOS completely revolutionized our visual identity. The trailer they made for us had a level of cinematic density, artistic restraint, and gravitas that we didn\'t believe was possible under our timeline. They are absolute craftsmen who understand that silence and shadow speak louder than empty noise.',
    author: 'Advait Rao',
    role: 'Creative Director',
    project: 'Manthan Fest 2025'
  },
  {
    id: 't2',
    quote: 'We commissioned SUJ STUDIOS for our flagship documentary Series. Their ability to craft a highly compelling human narrative with absolutely zero budget was incredible. Deliberate cinematography, cinematic grade coloring, and flawless sound design. Visitors were moved to tears, and we exceeded our donor goals by double.',
    author: 'Elena D\'Souza',
    role: 'Program Coordinator',
    project: 'The Life Within Short Film'
  },
  {
    id: 't3',
    quote: 'I have worked with dozens of post-production agencies, but SUJ STUDIOS is unique. They don\'t just slice clips; they understand pacing, human psychology, and dramatic tension. Our podcast channel saw an immediate 45% retention spike after switching our edit layouts to them. Highly recommended for premium creators.',
    author: 'Siddharth Roy',
    role: 'Creator & Host',
    project: 'The Roy Conversations Podcast'
  }
];

