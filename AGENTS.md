# agents.md — Degoro Ecommerce

> **"Tejidos únicos, hechos con el corazón"**
> Guía de referencia para agentes de IA que trabajen en este proyecto.

---

## 1. Visión General del Proyecto

**Degoro** es un ecommerce frontend de ropa tradicional con identidad artesanal y presencia elegante. El sitio debe comunicar autenticidad, calidez y calidad artesanal, sin caer en lo rústico ni en lo genérico. La experiencia de usuario debe sentirse como caminar por una boutique cuidadosamente curada.

- **Stack:** Astro 6+ + TypeScript
- **Tipo:** Frontend ecommerce (sin backend propio; consume APIs externas si aplica)
- **Audiencia:** Personas que valoran la artesanía, la identidad cultural y la moda con propósito
- **Tono visual:** Orgánico, editorial, refinado, con calidez terrosa
- **Idioma:** Español para contenido de usuario; inglés para código y variables

---

## 3. Convenciones de Código

### 3.1 Estructura de Archivos

```
src/
├── assets/          # Imágenes, fuentes estáticas
├── components/      # Componentes reutilizables (.astro)
├── data/            # Datos estáticos (JSON, types)
├── layouts/         # Layouts base (.astro)
├── pages/           # Rutas/pages (.astro)
├── styles/          # CSS global y tokens
└── utils/           # Funciones helper TypeScript (.ts)
```

### 3.2 Imports Rutas y Estilos

- Usar alias `@/` para imports desde `src/`:
  ```astro
  import Layout from "@/layouts/Layout.astro"
  import "@/styles/main.css"
  ```
- Imports absolutos de node solo cuando sea necesario (ej: `path`, `fs`)
- Usa archivos css globales para colores y medidas, pero en la arquitectura de componentes usa styles.module.css para cada componente individual

### 3.3 TypeScript

- **Modo strict** habilitado via `astro/tsconfigs/strict`
- Definir interfaces para todos los datos estructurados
- Props de componentes Astro tipadas con `interface Props`
- No usar `any`; si es necesario, usar `unknown` y type guards
- Los tipados hazlos en archivos  `.d.ts`
```astro
---
interface Props {
  titulo: string
  descripcion?: string
}

const { titulo, descripcion = "" } = Astro.props
---
```

### 3.4 Nomenclatura

| Elemento | Convención | Ejemplo |
|----------|------------|---------|
| Archivos .astro | PascalCase | `ProductCard.astro` |
| Archivos .ts | camelCase | `formatCurrency.ts` |
| Componentes React | PascalCase | `Button.tsx` |

### 3.5 Formato y Estilo

- **Indentación:** 2 espacios (estilo Astro por defecto)
- **Fin de línea:** LF (line feed)
- **Quotes:** Comillas simples para strings en JS/TS
- **Punto y coma:** Opcional, mantener consistencia con archivo
- **Línea en blanco:** Máximo 1 línea en blanco consecutiva
- **Longitud de línea:** Soft wrap a ~100 caracteres

---

## 4. Sistema de Diseño

### 4.1 Paleta de Color

Respetar **estrictamente** esta paleta y sus roles. No introducir colores fuera de ella.

```css
:root {
  --color-primary:        #7A3722;
  --color-secondary:      #DBBA8F;
  --color-accent:         #519474;
  --color-primary-light:  #9E4E33;
  --color-primary-dark:   #571F10;
  --color-secondary-light:#EDD5AE;
  --color-secondary-dark: #C49E6F;
  --color-accent-light:   #6BAF8E;
  --color-accent-dark:    #3A7059;
  --color-ebony:          #2E2E2E;
  --color-smoke-white:    #F5F3EF;
  --color-bg:             var(--color-secondary);
  --color-bg-alt:         var(--color-smoke-white);
  --color-text:           var(--color-ebony);
  --color-text-muted:     #6B5A47;
  --color-cta:            var(--color-accent);
  --color-cta-hover:      var(--color-accent-dark);
  --color-heading:        var(--color-primary);
  --color-surface:        #FFFFFF;
  --color-border:         rgba(122, 55, 34, 0.15);
}
```

**Regla 60–30–10:** 60% beige, 30% marrón, 10% verde ceniza.

### 4.2 Tipografía

```css
:root {
  --font-brand:   'Alegreya', serif;        /* Bold Italic */
  --font-heading: 'Alegreya', serif;        /* Regular */
  --font-body:    'Alegreya Sans', sans-serif;

  --text-xs:   clamp(0.75rem,  1.5vw, 0.875rem);
  --text-sm:   clamp(0.875rem, 1.8vw, 1rem);
  --text-base: clamp(1rem,     2vw,   1.125rem);
  --text-lg:   clamp(1.125rem, 2.2vw, 1.25rem);
  --text-xl:   clamp(1.25rem,  2.5vw, 1.5rem);
  --text-2xl:  clamp(1.5rem,   3vw,   2rem);
  --text-3xl:  clamp(2rem,     4vw,   3rem);
  --text-4xl:  clamp(2.5rem,   5vw,   4rem);
}
```

### 4.3 Espaciado y Layout

```css
:root {
  --space-1:  0.25rem;  --space-2:  0.5rem;
  --space-3:  0.75rem;  --space-4:  1rem;
  --space-6:  1.5rem;   --space-8:  2rem;
  --space-12: 3rem;     --space-16: 4rem;
  --space-24: 6rem;

  --radius-sm:  4px;   --radius-md:  8px;
  --radius-lg:  16px;  --radius-full: 9999px;

  --container-max: 1280px;
  --container-padding: clamp(1rem, 5vw, 3rem);

  --shadow-sm: 0 1px 3px rgba(46,46,46,0.08);
  --shadow-md: 0 4px 16px rgba(122,55,34,0.12);
  --shadow-lg: 0 8px 32px rgba(122,55,34,0.16);
}
```

### 4.4 Tokens de Componentes

```css
:root {
  --btn-primary-bg:    var(--color-accent);
  --btn-primary-text:  var(--color-smoke-white);
  --btn-primary-hover: var(--color-accent-dark);

  --btn-secondary-bg:    transparent;
  --btn-secondary-border: var(--color-primary);
  --btn-secondary-text:  var(--color-primary);

  --card-bg:      var(--color-surface);
  --card-border:  var(--color-border);
  --card-radius:  var(--radius-md);
  --card-shadow:  var(--shadow-md);
}
```

---

## 5. Secciones de Página Home (`/`)

1. **Hero** — Imagen full-bleed con tagline, CTA a tienda
2. **Colección Destacada** — Grid de productos con `isFeatured: true`
3. **Historia de la marca** — Bloque editorial con `--color-primary`
4. **Por qué Degoro** — 3 pilares: Artesanía, Materiales naturales, Identidad
5. **Testimonio** — Frase destacada centrada, tipografía brand
6. **Newsletter** — Email + CTA, fondo `--color-secondary-dark`

---

## 6. Reglas de Accesibilidad y Visual

1. **Colores:** Usar solo tokens del sistema de diseño
2. **Fondo por defecto:** `--color-secondary` (beige); no blancos puros
3. **Verde ceniza:** Solo en CTAs, links activos, acentos (máx 10%)
4. **Imágenes:** Siempre con `alt` descriptivo; usar `<Image />` de Astro
5. **Contraste:** Mínimo AA en todos los textos
6. **Focus:** Visible en todos los elementos interactivos
7. **Semántica:** HTML correcto (`<main>`, `<nav>`, `<article>`, etc.)
8. **Motion:** Respetar `prefers-reduced-motion`:
   ```css
   @media (prefers-reduced-motion: reduce) {
     * { animation-duration: 0.01ms !important; transition-duration: 0.01ms !important; }
   }
   ```

---

## 7. IMPORTANTE

- No tienes permiso para hacer commits
- No tienes permiso de ejecutar comandos de terminal (me dejas las instrucciones de lo que quieres hacer al final)