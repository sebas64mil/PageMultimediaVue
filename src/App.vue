<script>
import AppNav from './components/AppNav.vue';
import BannerCarousel from './components/BannerCarousel.vue';
import AboutSection from './components/AboutSection.vue';
import SemillerosSection from './components/SemillerosSection.vue';
import EventosSection from './components/EventosSection.vue';
import AppFooter from './components/AppFooter.vue';

import { initParticles, initScrollReveal } from './utils/about.js';
import { initAboutThree } from './utils/aboutThree.js';

export default {
  name: 'App',
  components: {
    AppNav,
    BannerCarousel,
    AboutSection,
    SemillerosSection,
    EventosSection,
    AppFooter
  },
  mounted() {
    // Inicializar funcionalidades
    this.$nextTick(() => {
      ['particles-about', 'particles-events'].forEach(initParticles);
      initScrollReveal();
      initAboutThree();
    });
  }
};
</script>

<template>
  <div id="app">
    <!-- Navigation -->
    <AppNav />

    <!-- Banner -->
    <BannerCarousel />

    <!-- About Section -->
    <AboutSection />

    <!-- Semilleros Section -->
    <SemillerosSection />

    <!-- Eventos Section -->
    <EventosSection />

    <!-- Footer -->
    <AppFooter />
  </div>
</template>

<style>
/* RESET + BASE */
*, *::before, *::after { 
  box-sizing: border-box; 
  margin: 0; 
  padding: 0; 
}

html { 
  scroll-behavior: smooth; 
}

html, body { 
  height: 100%; 
}

body {
  margin: 0;
  background: var(--bg);
  color: var(--text);
  font-family: var(--font-mono);
  line-height: 1.65;
  -webkit-font-smoothing: antialiased;
  overflow-x: hidden;
}

#app {
  position: relative;
  z-index: 1;
}

img, svg, video { 
  display: block; 
  max-width: 100%; 
  height: auto; 
}

a {
  color: var(--secondary);
  text-decoration: none;
  border-bottom: none;
  transition: color .2s ease;
}

a:hover { 
  color: var(--primary); 
}

a:focus-visible { 
  outline: 1px solid var(--secondary); 
  outline-offset: 3px; 
}

/* TYPOGRAPHY */
h1, h2, h3, h4 {
  font-family: var(--font-display);
  color: var(--text-heading);
  font-weight: 800;
  line-height: 1.2;
}

h1 { font-size: 3rem; }
h2 { font-size: 2.2rem; }
h3 { font-size: 1.5rem; }
h4 { font-size: 1.1rem; }

p {
  margin: 0;
  line-height: 1.7;
}

/* Scroll reveal animation */
[data-reveal] {
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.6s ease 0s;
}

[data-reveal].visible {
  opacity: 1;
  transform: translateY(0);
}
</style>
