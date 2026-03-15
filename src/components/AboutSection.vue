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
    import('../utils/aboutThree.js').then((module) => {
      if (module.initAboutThree) {
        module.initAboutThree();
      }
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
  width: 600px;
  height: 600px;
  background: radial-gradient(circle, rgba(242,145,27,0.08), transparent 65%);
  pointer-events: none;
  z-index: 0;
}

.about-content {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  gap: clamp(3rem, 7vw, 6rem);
  max-width: 1200px;
  width: 100%;
  margin: auto;
}

@media (min-width: 1024px) {
  .about-content {
    flex-direction: row;
    align-items: center;
  }
}

.about-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
}

.about-text h1 {
  font-family: var(--font-display);
  font-size: clamp(3rem, 7vw, 6rem);
  font-weight: 800;
  color: var(--text-heading);
  line-height: 1.0;
  margin-bottom: var(--sp-5);
}

.accent {
  color: var(--primary);
  display: block;
  text-shadow: 0 0 40px var(--glow-orange);
}

.about-code-snippet {
  font-family: var(--font-mono);
  font-size: 0.72rem;
  color: var(--text-muted);
  border-left: 2px solid var(--support);
  padding-left: var(--sp-4);
  margin-bottom: var(--sp-5);
  line-height: 1.8;
}

.kw {
  color: var(--secondary);
}

.str {
  color: #a8d8a8;
}

.fn {
  color: var(--secondary);
}

.about-text p {
  color: var(--text-muted);
  font-family: var(--font-mono);
  font-size: 0.93rem;
  line-height: 1.8;
  max-width: 460px;
  margin: 0 0 var(--sp-5);
}

.about-buttons {
  display: flex;
  flex-direction: column;
  gap: var(--sp-3);
}
@media (min-width: 560px) {
  .about-buttons {
    flex-direction: row;
    flex-wrap: wrap;
  }
}

.about-stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1px;
  background: var(--border);
  border: 1px solid var(--border);
}

.stat-card {
  text-align: center;
  padding: var(--sp-5) var(--sp-4);
  background: var(--bg2);
  position: relative;
  transition: background 0.2s ease;
}
.stat-card:hover {
  background: var(--bg3);
}

.stat-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--primary), transparent);
  opacity: 0;
  transition: opacity 0.2s;
}
.stat-card:hover::before {
  opacity: 1;
}

.stat-card h3 {
  color: var(--primary);
  font-family: var(--font-id);
  font-size: 2.4rem;
  font-weight: 700;
  margin-bottom: 6px;
  letter-spacing: -0.02em;
  text-shadow: 0 0 20px var(--glow-orange);
}

.stat-card p {
  margin: 0;
  font-size: 0.72rem;
  font-family: var(--font-mono);
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: var(--text-muted);
}

.about-image-container {
  position: relative;
  flex-shrink: 0;
  width: 100%;
  max-width: 480px;
  aspect-ratio: 1 / 1;
  margin: auto;
  overflow: hidden;
  border: 1px solid var(--border);
}

/* Bracket corners on 3D container */
.about-image-container::before,
.about-image-container::after {
  content: '';
  position: absolute;
  width: 24px;
  height: 24px;
  z-index: 3;
  pointer-events: none;
  border-color: var(--secondary);
  border-style: solid;
}
.about-image-container::before {
  top: 0;
  left: 0;
  border-width: 1px 0 0 1px;
  box-shadow: -2px -2px 8px var(--glow-teal);
}
.about-image-container::after {
  bottom: 0;
  right: 0;
  border-width: 0 1px 1px 0;
  box-shadow: 2px 2px 8px var(--glow-orange);
  border-color: var(--primary);
}

.img-frame {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.about-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.hud-label {
  position: absolute;
  bottom: 14px;
  left: 14px;
  z-index: 4;
  font-family: var(--font-mono);
  font-size: 0.65rem;
  color: var(--secondary);
  letter-spacing: 0.1em;
  opacity: 0.6;
}

@media (max-width: 768px) {
  .about-content {
    flex-direction: column;
  }

  .about-stats {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
