import type { SiteConfig, Pillar, Testimonial, HeroData, BrandStoryData, NewsletterData } from '@/types/index.d.ts';

export const heroData: HeroData = {
  tagline: 'Tejidos únicos, hechos con el corazón',
  subtitle: 'Cada pieza cuenta una historia de tradición, artesanía y amor por nuestra tierra',
  ctaText: 'Explorar Colección',
  ctaHref: '/tienda',
  backgroundImage: 'https://images.unsplash.com/photo-1558171813-4c088753af8f?w=1920'
};

export const pillars: Pillar[] = [
  {
    id: '1',
    title: 'Artesanía Auténtica',
    description: 'Cada prenda es tejida a mano por artesanos colombianos, preservando técnicas transmitidas por generaciones.',
    icon: 'hands'
  },
  {
    id: '2',
    title: 'Materiales Naturales',
    description: 'Utilizamos fibras naturales como algodón, lana de oveja y alpaca, cuidando el medio ambiente.',
    icon: 'leaf'
  },
  {
    id: '3',
    title: 'Identidad Cultural',
    description: 'Diseños inspirados en los pueblos indígenas de Colombia, celebrando nuestra diversidad.',
    icon: 'heart'
  }
];

export const brandStory: BrandStoryData = {
  title: 'Nuestra Historia',
  description: 'Degoro nació del deseo de conectar a las comunidades artesanales colombianas con personas que valoran la autenticidad y la historia detrás de cada prenda. Cada pieza que creamos es un puente entre la tradición y la moda contemporánea.',
  image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800'
};

export const testimonial: Testimonial = {
  id: '1',
  quote: 'Cuando uso mis prendas Degoro, siento que llevo conmigo pedazos de historia y amor de Colombia.',
  author: 'María Elena Gómez',
  role: 'Clienta fiel desde 2022'
};

export const newsletter: NewsletterData = {
  title: 'Únete a nuestra comunidad',
  subtitle: 'Recibe historias de nuestros artesanos, nuevos diseños y ofertas exclusivas',
  placeholder: 'Tu correo electrónico',
  ctaText: 'Suscribirme'
};

export const siteConfig: SiteConfig = {
  brandName: 'Degoro',
  hero: heroData,
  brandStory,
  newsletter,
  pillars,
  testimonial
};
