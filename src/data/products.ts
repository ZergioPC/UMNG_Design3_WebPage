import type { Product } from '@/types/index.d.ts';

export const products: Product[] = [
  {
    id: '1',
    name: 'Chaqueta Wayuu',
    description: 'Tejida a mano con técnicas ancestrales de la comunidad Wayuu',
    price: 285000,
    image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600',
    slug: 'chaqueta-wayuu',
    isFeatured: true,
    category: 'chaquetas'
  },
  {
    id: '2',
    name: 'Bolso Macramé',
    description: 'Bolsón artesanal con tejido de macramé y detalles en cuero',
    price: 145000,
    image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=600',
    slug: 'bolso-macrame',
    isFeatured: true,
    category: 'accesorios'
  },
  {
    id: '3',
    name: 'Mochila Indígena',
    description: 'Mochila tejida con motivos tradicionales y correas ajustables',
    price: 195000,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600',
    slug: 'mochila-indigena',
    isFeatured: true,
    category: 'accesorios'
  },
  {
    id: '4',
    name: 'Poncho Andino',
    description: 'Poncho de lana de oveja con bordados típicos de los Andes',
    price: 320000,
    image: 'https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?w=600',
    slug: 'poncho-andino',
    isFeatured: true,
    category: 'prendas-superiores'
  },
  {
    id: '5',
    name: 'Bufanda Artesanal',
    description: 'Bufanda tejida con hilado natural de alpaca',
    price: 85000,
    image: 'https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?w=600',
    slug: 'bufanda-artesanal',
    isFeatured: false,
    category: 'accesorios'
  },
  {
    id: '6',
    name: 'Hamaca Artesanal',
    description: 'Hamaca tejida con algodón orgánico y madera native',
    price: 450000,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600',
    slug: 'hamaca-artesanal',
    isFeatured: true,
    category: 'hogar'
  }
];

export function getFeaturedProducts(): Product[] {
  return products.filter(p => p.isFeatured);
}

export function formatPrice(price: number): string {
  return new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0
  }).format(price);
}
