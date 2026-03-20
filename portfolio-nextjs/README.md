# 🚀 Portfolio Pau Berenguer - Next.js Pro

Portfolio profesional de nivel enterprise construido con las tecnologías más modernas y avanzadas del ecosistema React.

## ✨ Tecnologías Premium

- **Next.js 15** - Framework React de última generación con App Router
- **TypeScript** - Tipado estático completo para máxima seguridad
- **Tailwind CSS v4** - Estilos utilitarios con la nueva versión
- **Framer Motion** - Animaciones profesionales y fluidas de 60 FPS
- **Radix UI** - Componentes accesibles de máxima calidad
- **Lucide React** - Sistema de iconos moderno y consistente
- **next-themes** - Soporte completo para tema claro/oscuro

## 🎯 Características Destacadas

### 🎬 Animaciones Cinematográficas
- **Hero Section** con animaciones parallax, elementos flotantes y gradientes dinámicos
- **Timeline interactiva** con efectos 3D, hover states y transiciones suaves
- **Cards animadas** que responden al scroll con efectos de entrada staggered
- **Micro-interacciones** en todos los elementos clickeables
- **Transiciones fluidas** entre temas con animaciones de color
- **Floating rings** y efectos de profundidad en imágenes

### 🎨 Diseño de Nivel Profesional
- **Navegación glassmorphism** sticky con blur y transparencias
- **Scroll suave** con indicadores animados
- **Responsive design** optimizado para todos los dispositivos
- **Dark mode fluido** con transiciones de color suaves
- **Gradientes animados** y efectos de luz dinámicos
- **Scrollbar personalizado** con estilos dark/light

### 🧩 Arquitectura de Componentes
- Sistema modular con TypeScript completo
- Componentes UI reutilizables (Button, Card, Dialog)
- Radix UI para máxima accesibilidad
- Framer Motion integrado en todos los componentes
- Animaciones optimizadas para rendimiento

## 📱 Secciones Implementadas

1. **Hero Impactante** - Presentación con foto 3D, estadísticas animadas y CTAs
2. **Experiencia Timeline** - Línea temporal interactiva con dots animados
3. **Testimonios Dinámicos** - Grid de cards con quotes y ratings
4. **Sobre Mí** - Historia personal con stats contadores
5. **Comunidad** - Enlaces a YouTube, Skool y Newsletter con iconos animados
6. **Contacto Interactivo** - Formulario funcional y métodos de contacto
7. **Footer Elegante** - Con gradientes animados y enlaces

## 🚀 Instalación Rápida

```bash
# Navegar al proyecto
cd portfolio-nextjs

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) para ver la magia ✨

## 🎨 Estructura del Proyecto

```
portfolio-nextjs/
├── app/
│   ├── layout.tsx          # Layout principal con ThemeProvider
│   ├── page.tsx             # Página principal con todas las secciones
│   └── globals.css          # Estilos globales y variables CSS
├── components/
│   ├── navigation.tsx       # Navbar con glassmorphism
│   ├── hero-section.tsx     # Hero con animaciones parallax
│   ├── experience-section.tsx    # Timeline interactiva
│   ├── testimonials-section.tsx  # Grid de testimonios
│   ├── about-section.tsx    # Sección personal
│   ├── community-section.tsx     # Enlaces de comunidad
│   ├── contact-section.tsx  # Formulario de contacto
│   ├── footer.tsx           # Footer animado
│   ├── theme-provider.tsx   # Provider de next-themes
│   └── ui/
│       ├── button.tsx       # Botón con Framer Motion
│       ├── card.tsx         # Card animada
│       └── dialog.tsx       # Dialog de Radix UI
└── lib/
    └── utils.ts             # Utilidades (cn para clsx)
```

## ⚡ Optimizaciones Implementadas

- **Code splitting automático** con Next.js App Router
- **Image optimization** con next/image para carga rápida
- **Lazy loading** de componentes no críticos
- **Animaciones GPU-accelerated** con Framer Motion
- **Bundle size optimizado** con tree-shaking
- **Scroll performance** optimizado con viewport detection
- **CSS moderno** con custom properties y gradients

## 🎯 Características Técnicas Destacadas

### Animaciones Avanzadas
- Parallax scrolling en hero
- Staggered animations para listas
- Viewport-based triggers para rendimiento
- Spring physics para movimientos naturales
- Gesture animations (hover, tap, drag)

### Dark Mode Profesional
- Sistema completo con next-themes
- Transiciones suaves de colores
- Persistencia en localStorage
- Respeto a preferencias del sistema
- Toggle animado con rotación

### Accesibilidad (A11y)
- Componentes Radix UI 100% accesibles
- Navegación por teclado completa
- ARIA labels apropiados
- Contraste de colores WCAG AA
- Focus states visibles

## 🌐 Despliegue en Vercel

```bash
# Opción 1: Conectar con GitHub
# 1. Push a GitHub
# 2. Importar en Vercel
# 3. Deploy automático

# Opción 2: CLI de Vercel
npm i -g vercel
vercel
```

## 🎨 Personalización

### Colores
Edita `app/globals.css` para cambiar el esquema de colores:
```css
:root {
  --background: 0 0% 100%;
  --foreground: 0 0% 3.9%;
  /* ... más variables */
}
```

### Animaciones
Ajusta duraciones y efectos en componentes individuales:
```typescript
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
/>
```

## 📝 Próximas Mejoras Sugeridas

- [ ] Conectar formulario con servicio de email
- [ ] Añadir blog con MDX
- [ ] Implementar CMS headless
- [ ] Añadir analytics (Vercel Analytics)
- [ ] Implementar sitemap y SEO avanzado
- [ ] Añadir tests con Playwright

## 🤝 Soporte

Para cualquier duda o sugerencia sobre el código:
- Email: pauberenguerlabella@gmail.com
- LinkedIn: [linkedin.com/in/pauberenguer-ai](https://linkedin.com/in/pauberenguer-ai)

## 📄 Licencia

© 2025 Pau Berenguer. Todos los derechos reservados.

---

**Construido con ❤️ usando Next.js, Framer Motion y Radix UI**
