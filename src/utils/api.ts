import type { Product } from '@/types/index.d.ts';

// TODO: Cambia esta URL por la ruta a tu archivo JSON
const API_BASE_URL = '/api/products.json';

export async function fetchProducts(): Promise<Product[]> {
  const res = await fetch(`${API_BASE_URL}`);
  if (!res.ok) throw new Error(`Error al cargar productos: ${res.statusText}`);
  const data = await res.json();
  return data as Product[];
}
