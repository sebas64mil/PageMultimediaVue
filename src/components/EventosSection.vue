<template>
  <section class="Eventos" id="news">
    <div id="particles-events" class="particles-bg"></div>

    <SectionLabel number="03" label="// En vivo" />
    <h2>Próximos<br>Eventos</h2>

    <div class="VideoEvento">
      <!-- Video -->
      <div class="video-wrapper">
        <iframe 
          title="Segunda Creación Colectiva — Ingeniería Multimedia USBBOG"
          src="https://www.youtube.com/embed/0gQwwXwgSUs"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen>
        </iframe>
      </div>

      <!-- Event info -->
      <div class="event-info">
        <h5>// Segunda Creación Colectiva</h5>
        <h3>Segunda Creación Colectiva — Ingeniería Multimedia USBBOG</h3>
        <p>
          Ya puedes ver la segunda creación colectiva del USB Medialab. Los estudiantes de Ingeniería
          Multimedia estuvieron trabajando en una animación donde los personajes más reconocidos de
          Cartoon Network bailan y cantan al ritmo de Thrift Shop.
        </p>
        <AppButton variant="primary" href="#">Eventos pasados</AppButton>
      </div>
    </div>
  </section>
</template>

<script>
import SectionLabel from './SectionLabel.vue';
import AppButton from './AppButton.vue';

export default {
  name: 'EventosSection',
  components: {
    SectionLabel,
    AppButton
  },
  mounted() {
    // Importa el script de particles
    import('../utils/about.js').catch(() => {
      // Script opcional, no falla si no se carga
    });
  }
};
</script>

<style scoped>
.Eventos {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 80vh;
  padding: clamp(80px, 8vw, 120px) clamp(24px, 5vw, 64px);
  overflow: hidden;
  background: var(--bg);
}

.Eventos::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent,
    var(--primary),
    var(--secondary),
    transparent
  );
}

.Eventos::after {
  content: '';
  position: absolute;
  top: 50%;
  right: -150px;
  transform: translateY(-50%);
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, rgba(4, 191, 191, 0.07), transparent 65%);
  pointer-events: none;
}

.particles-bg {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.Eventos h2 {
  text-align: left;
  margin-bottom: clamp(40px, 5vw, 60px);
  max-width: 700px;
  position: relative;
  z-index: 1;
}

.VideoEvento {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--sp-5);
  width: 100%;
  position: relative;
  z-index: 1;
}

@media (min-width: 900px) {
  .VideoEvento {
    grid-template-columns: 1fr 1fr;
    gap: var(--sp-6);
    align-items: start;
  }
}

.video-wrapper {
  position: relative;
}

.video-wrapper::before,
.video-wrapper::after {
  content: '';
  position: absolute;
  width: 20px;
  height: 20px;
  z-index: 2;
  pointer-events: none;
}

.video-wrapper::before {
  top: -6px;
  left: -6px;
  border-top: 1px solid var(--secondary);
  border-left: 1px solid var(--secondary);
}

.video-wrapper::after {
  bottom: -6px;
  right: -6px;
  border-bottom: 1px solid var(--primary);
  border-right: 1px solid var(--primary);
}

.video-wrapper iframe {
  width: 100%;
  aspect-ratio: 16 / 9;
  border: 1px solid var(--border);
  box-shadow: 0 0 32px var(--glow-teal), 0 16px 48px rgba(0, 0, 0, 0.6);
  display: block;
}

.event-info {
  display: flex;
  flex-direction: column;
  gap: var(--sp-4);
}

.event-info h5 {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  color: var(--secondary);
  letter-spacing: 0.1em;
  margin: 0;
  text-transform: uppercase;
}

.event-info h3 {
  color: var(--text-heading);
  font-size: 1.1rem;
  margin: 0;
  line-height: 1.4;
}

.event-info p {
  font-size: 0.85rem;
  margin-bottom: 0;
}

.event-info :deep(.btn) {
  align-self: flex-start;
}
</style>
