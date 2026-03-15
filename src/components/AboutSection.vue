<template>
  <section class="about-section" id="home">
    <div id="particles-about" class="particles-bg"></div>
    <div class="glow-blob"></div>

    <div class="about-content">
      <!-- LEFT: Info -->
      <div class="about-info">
        <div class="about-text">
          <SectionLabel number="01" label="Sobre el programa" />
          <h1>Ingeniería<br><span class="accent">Multimedia</span></h1>

          <div class="about-code-snippet">
            <span class="kw">const</span> programa = {<br>
            &nbsp;&nbsp;nombre: <span class="str">"Ingeniería Multimedia"</span>,<br>
            &nbsp;&nbsp;mision: <span class="fn">await launchProject</span>(<span class="str">"innovation"</span>)<br>
            }
          </div>

          <p>Formamos profesionales capaces de crear, desarrollar e innovar en el mundo de los medios digitales, la realidad virtual y las tecnologías emergentes.</p>

          <div class="about-buttons">
            <AppButton variant="primary" href="#" :show-arrow="true">Conoce más</AppButton>
            <AppButton variant="ghost" href="#">Contáctenos</AppButton>
          </div>
        </div>

        <!-- Stats -->
        <div class="about-stats">
          <div class="stat-card">
            <h3>15+</h3>
            <p>Años de experiencia</p>
          </div>
          <div class="stat-card">
            <h3>800+</h3>
            <p>Graduados</p>
          </div>
          <div class="stat-card">
            <h3>98%</h3>
            <p>Empleabilidad</p>
          </div>
        </div>
      </div>

      <!-- Three.js 3D Container -->
      <div class="about-image-container" id="aboutThree">
        <div class="img-frame">
          <img src="/assets/img/Img_1.png" class="about-image" alt="Estudiante con dispositivos de realidad virtual">
        </div>
        <span class="hud-label">terrain_render.glsl</span>
      </div>
    </div>
  </section>
</template>

<script>
import SectionLabel from './SectionLabel.vue';
import AppButton from './AppButton.vue';

export default {
  name: 'AboutSection',
  components: {
    SectionLabel,
    AppButton
  },
  mounted() {
    // Importa y ejecuta el script de Three.js cuando el componente se monta
    import('../utils/aboutThree.js').then(() => {
      // Script ya está cargado
    });
  }
};
</script>

<style scoped>
.about-section {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: clamp(80px, 8vw, 120px) clamp(24px, 5vw, 64px);
  overflow: hidden;
  background: var(--bg);
}

.about-section > .glow-blob {
  position: absolute;
  top: -200px;
  right: -150px;
  width: 400px;
  height: 400px;
  background: radial-gradient(circle, var(--glow-teal) 0%, transparent 70%);
  filter: blur(80px);
  pointer-events: none;
}

.about-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: clamp(40px, 8vw, 80px);
  align-items: center;
  max-width: 1340px;
  width: 100%;
  position: relative;
  z-index: 1;
}

.about-info {
  display: flex;
  flex-direction: column;
  gap: 48px;
}

.about-text h1 {
  font-family: var(--font-display);
  font-size: clamp(2.2rem, 6vw, 3.8rem);
  font-weight: 800;
  color: var(--text-heading);
  line-height: 1.15;
  margin: 16px 0 24px 0;
}

.accent {
  color: var(--primary);
}

.about-code-snippet {
  background: rgba(4, 191, 191, 0.05);
  border: 1px solid var(--border);
  padding: 16px 20px;
  font-family: var(--font-mono);
  font-size: 0.85rem;
  color: var(--text);
  margin: 24px 0;
  line-height: 1.6;
}

.kw {
  color: var(--secondary);
}

.str {
  color: var(--primary);
}

.fn {
  color: var(--secondary);
}

.about-text p {
  font-size: 1rem;
  color: var(--text);
  line-height: 1.7;
  margin: 0 0 24px 0;
}

.about-buttons {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
}

.about-stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.stat-card {
  background: rgba(4, 191, 191, 0.05);
  border: 1px solid var(--border);
  padding: 24px;
  text-align: center;
}

.stat-card h3 {
  font-family: var(--font-display);
  font-size: 2rem;
  color: var(--secondary);
  margin: 0 0 8px 0;
}

.stat-card p {
  font-size: 0.9rem;
  color: var(--text-muted);
  margin: 0;
}

.about-image-container {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 500px;
}

.img-frame {
  position: relative;
  width: 100%;
  aspect-ratio: 1;
  border: 1px solid rgba(4, 191, 191, 0.2);
  background: rgba(4, 191, 191, 0.02);
  overflow: hidden;
}

.about-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(0.95) saturate(0.9);
}

.hud-label {
  position: absolute;
  bottom: -25px;
  left: 0;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.75rem;
  color: #04BFBF;
  letter-spacing: 0.1em;
  opacity: 0.6;
}

@media (max-width: 768px) {
  .about-content {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .about-stats {
    grid-template-columns: 1fr;
  }

  .about-image-container {
    min-height: 300px;
  }
}
</style>
