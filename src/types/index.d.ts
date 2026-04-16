export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  slug: string;
  isFeatured: boolean;
  category: string;
}

export interface Pillar {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
}

export interface HeroData {
  tagline: string;
  subtitle: string;
  ctaText: string;
  ctaHref: string;
  backgroundImage: string;
}

export interface BrandStoryData {
  title: string;
  description: string;
  image: string;
}

export interface NewsletterData {
  title: string;
  subtitle: string;
  placeholder: string;
  ctaText: string;
}

export interface SiteConfig {
  brandName: string;
  hero: HeroData;
  brandStory: BrandStoryData;
  newsletter: NewsletterData;
  pillars: Pillar[];
  testimonial: Testimonial;
}
