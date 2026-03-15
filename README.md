# Migración USB_MultimediaPage a Vue - Resumen de Componentes

## 📁 Estructura de Componentes

### Componentes Reutilizables (`src/components/`)

#### 1. **AppNav.vue** - Navegación Principal
- Navbar sticky con logo y menús dropdown
- Dropdown para "Investigación" y "Servicios"
- Botón "Contáctenos" destacado
- Estilos incluidos (sin CSS externo)

#### 2. **AppFooter.vue** - Pie de Página
- 4 columnas: Identity, Navegación, Contacto, Redes
- Enlaces de redes sociales con FontAwesome
- Diseño responsivo en grid
- Copyright y información de empresa

#### 3. **AppButton.vue** - Componente Botón Reutilizable
- 3 variantes: `primary`, `secondary`, `ghost`
- Prop opcional `showArrow` para mostrar flecha
- Soporta tanto `<a>` (con `href`) como `<button>`
- Transiciones y hover effects

#### 4. **SectionLabel.vue** - Etiqueta de Sección
- Número de sección (01, 02, 03)
- Etiqueta descriptiva con estilo mono
- Usado en todas las secciones principales

### Componentes de Secciones (`src/components/`)

#### 5. **BannerCarousel.vue** - Carousel de Banner
- Bootstrap carousel con 3 slides (imágenes de banner)
- Captions dinámicas con títulos y descripciones
- Indicadores personalizados (barras horizontales)
- Filtros de imagen (brightness, saturate)
- Decoradores de esquina con bordes

#### 6. **AboutSection.vue** - Sección Sobre el Programa
- Información en dos columnas: texto + 3D/imagen
- Code snippet con sintaxis coloreada
- 3 tarjetas de estadísticas
- Carga automática del script Three.js para el modelo 3D
- Botones de acción (Conoce más, Contáctenos)

#### 7. **SemillerosSection.vue** - Sección de Semilleros e Investigación
- 3 tarjetas de semilleros (Videojuegos, IA, Diseño)
- SVG icons dinámicos según el índice
- Estadísticas de miembros y proyectos
- Hover effects con border y sombra
- Ubicadas en grid responsivo

#### 8. **EventosSection.vue** - Sección de Próximos Eventos
- Embed de YouTube video con aspect ratio 16:9
- Información del evento a la derecha
- Botón "Eventos pasados"
- Layout responsive (2 columnas → 1 columna en mobile)
- Incluye particles.js opcional

### Utilidades (`src/utils/`)

#### **about.js** - Funciones de Animación
```javascript
- initParticles(id) → Inicializa particles.js en contenedores específicos
- initScrollReveal() → Anima elementos con [data-reveal] en scroll
```
- Configuración de partículas: 155 partículas, múltiples colores
- Interactividad: hover (grab) y click (push)
- Scroll reveal con IntersectionObserver

#### **aboutThree.js** - Escena 3D con Three.js
```javascript
- initAboutThree() → Carga modelo GLB y renderiza escena 3D
```
- Sistema de luces: ambient, directional, rim light
- Modelo GLB cargado desde `/assets/3d/modelo.glb`
- Interactividad:
  - Mouse parallax (seguimiento del mouse)
  - Raycast hover (detecta si mouse sobre modelo)
  - Escala suave en hover (1.0 → 2.12)
  - Rotación lenta + flotante (bob)

## 🎨 Design System

### Colores (CSS Variables)
```css
--primary:     #F2911B (Naranja)
--secondary:   #04BFBF (Teal/Cyan)
--support:     #037F8C (Teal oscuro)
--bg:          #080C10 (Fondo principal)
--bg2:         #0D1117 (Fondo secundario)
--text:        #E8EDF2 (Texto principal)
--text-muted:  #6B7B8A (Texto tenue)
```

### Tipografía
- **Display**: `Syne` 700/800 (títulos)
- **Mono**: `JetBrains Mono` (código, etiquetas)
- **ID**: `Space Mono` (identificadores)

### Espacios (spacing)
- Escala: `--sp-1` (4px) a `--sp-8` (64px)

## 📦 Dependencias Instaladas

```json
{
  "dependencies": {
    "pinia": "^3.0.4",
    "vue": "^3.5.29",
    "bootstrap": "^5.3.3",
    "@fortawesome/fontawesome-free": "^6.5.1",
    "three": "^0.158.0",
    "particles.js": "^2.0.0"
  }
}
```

## 🔧 Cómo Usar

### Importar Componentes en Vue
```vue
<script>
import AppNav from './components/AppNav.vue';
import AppButton from './components/AppButton.vue';
</script>

<template>
  <AppNav />
  <AppButton variant="primary" href="#" :show-arrow="true">
    Ir a algún lado
  </AppButton>
</template>
```

### Usar AppButton
```vue
<!-- Variante primary con flecha -->
<AppButton variant="primary" href="#" :show-arrow="true">Conoce más</AppButton>

<!-- Variante secondary sin flecha -->
<AppButton variant="secondary" href="#">Contáctenos</AppButton>

<!-- Variante ghost como botón -->
<AppButton variant="ghost">Clickeame</AppButton>
```

### Agregar Datos Dinámicos
Todos los componentes de secciones tienen `data()` donde puedes modificar contenido:
- `BannerCarousel`: Array `banners` con `{ image, title, description }`
- `SemillerosSection`: Array `semilleros` con datos de tarjetas
- Los textos de otras secciones se pueden hacer props si lo necesitas

## 🎬 Estilos Scoped

Cada componente tiene `<style scoped>` con:
- Variables CSS globales accesibles
- Media queries para responsividad
- Transiciones y animaciones suaves
- Decoradores (::before, ::after) para bordes y glows

## 📱 Responsive Design

- Mobile: Stacks vertical
- Tablet: 2 columnas donde aplica
- Desktop: Layout completo con múltiples columnas

## 🚀 Para Correr el Proyecto

```bash
# Desarrollo
npm run dev

# Build para producción
npm run build

# Preview de build
npm run preview
```

## ⚠️ Notas Importantes

1. **Particles.js**: Se carga desde CDN en `index.html`
2. **Three.js**: Se importa desde CDN con importmap, también vía npm
3. **FontAwesome**: Instalado vía npm, cargado en `main.js`
4. **Assets**: Deben estar en `/public/assets/` (imágenes, 3D models)
5. **El archivo 3D** (modelo.glb) debe estar en `/public/assets/3d/`

## 📝 Estructura de Carpetas Finales

```
src/
├── components/
│   ├── AppNav.vue
│   ├── AppFooter.vue
│   ├── AppButton.vue
│   ├── SectionLabel.vue
│   ├── BannerCarousel.vue
│   ├── AboutSection.vue
│   ├── SemillerosSection.vue
│   └── EventosSection.vue
├── utils/
│   ├── about.js (particles + scroll reveal)
│   └── aboutThree.js (Three.js scene)
├── App.vue
└── main.js
```

---
**Migración completada**: USB_MultimediaPage → PageMultimediaVue ✅
