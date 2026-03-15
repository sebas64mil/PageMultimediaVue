<template>
  <section id="banner-section">
    <div id="carouselExampleIndicators" class="carousel slide h-100" data-bs-ride="carousel">
      <div class="carousel-indicators">
        <button
          v-for="(banner, index) in banners"
          :key="index"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          :data-bs-slide-to="index"
          :class="{ active: index === 0 }"
          :aria-current="index === 0"
          :aria-label="`Slide ${index + 1}`"
        ></button>
      </div>

      <div class="carousel-inner h-100">
        <div
          v-for="(banner, index) in banners"
          :key="index"
          :class="['carousel-item', 'h-100', { active: index === 0 }]"
        >
          <img :src="banner.image" class="d-block w-100 h-100" :alt="banner.title">
          <div class="carousel-caption d-none d-md-block">
            <h5>{{ banner.title }}</h5>
            <p>{{ banner.description }}</p>
          </div>
        </div>
      </div>

      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </section>
</template>

<script>
export default {
  name: 'BannerCarousel',
  data() {
    return {
      banners: [
        {
          image: '/assets/img/Banner/Banner_ (1).jpg',
          title: '// Innovación Digital',
          description: 'Formamos profesionales del futuro multimedia con tecnologías emergentes y visión creativa.'
        },
        {
          image: '/assets/img/Banner/Banner_ (2).jpg',
          title: '// Realidad Extendida',
          description: 'Exploramos los límites de la realidad virtual, aumentada y mixed reality como herramientas de impacto.'
        },
        {
          image: '/assets/img/Banner/Banner_ (3).jpg',
          title: '// Diseño Interactivo',
          description: 'Donde el código se convierte en experiencia y la creatividad en tecnología transformadora.'
        }
      ]
    };
  }
};
</script>

<style scoped>
#banner-section {
  height: calc(100vh - 68px);
  position: relative;
  overflow: hidden;
}

#carouselExampleIndicators,
.carousel-inner,
.carousel-item {
  height: 100%;
}

.carousel-item img {
  object-fit: cover;
  width: 100%;
  height: 100%;
  filter: brightness(0.45) saturate(0.6);
}

#banner-section::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(
    105deg,
    rgba(8,12,16,0.85) 0%,
    rgba(8,12,16,0.4)  50%,
    transparent        100%
  );
  pointer-events: none;
  z-index: 1;
}

#banner-section::before {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 180px;
  background: linear-gradient(to top, var(--bg), transparent);
  z-index: 2;
  pointer-events: none;
}

.carousel-inner::before {
  content: '';
  position: absolute;
  top: 24px;
  left: 24px;
  width: 40px;
  height: 40px;
  border-top: 1px solid rgba(4, 191, 191, 0.5);
  border-left: 1px solid rgba(4, 191, 191, 0.5);
  z-index: 3;
}

.carousel-inner::after {
  content: '';
  position: absolute;
  bottom: 24px;
  right: 24px;
  width: 40px;
  height: 40px;
  border-bottom: 1px solid var(--glow-orange);
  border-right: 1px solid var(--glow-orange);
  z-index: 3;
}

.carousel-caption {
  z-index: 3;
  text-align: left;
  left: 6%;
  right: auto;
  bottom: 13%;
  max-width: 580px;
  background: none;
  padding: 0;
}

.carousel-caption h5 {
  font-family: var(--font-mono);
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--secondary);
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  gap: 10px;
}

.carousel-caption h5::before {
  content: '';
  display: inline-block;
  width: 20px;
  height: 1px;
  background: var(--secondary);
  box-shadow: 0 0 8px var(--glow-teal);
}

.carousel-caption p {
  font-size: clamp(0.9rem, 1.4vw, 1.05rem);
  color: rgba(232, 237, 242, 0.75);
  line-height: 1.65;
  margin: 0;
}

.carousel-indicators {
  z-index: 3;
  gap: 6px;
  margin-bottom: 2.5rem;
  margin-left: 6%;
  justify-content: flex-start;
}

.carousel-indicators button[data-bs-target] {
  width: 28px;
  height: 2px;
  background: rgba(255, 255, 255, 0.2);
  border: none;
  border-radius: 0;
  opacity: 1;
  transition: all 0.3s ease;
}

.carousel-indicators button.active {
  background: var(--primary);
  width: 48px;
  box-shadow: 0 0 8px var(--glow-orange);
}

.carousel-control-prev,
.carousel-control-next {
  opacity: 0.4;
  transition: opacity 0.2s;
}

.carousel-control-prev:hover,
.carousel-control-next:hover {
  opacity: 0.9;
}
</style>
