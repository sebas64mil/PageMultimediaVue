<template>
  <section class="sectionInvestigacion">
    <SectionLabel number="02" label="Semilleros e Investigación" />
    
    <h2>Grupos de<br>Investigación</h2>
    <p>
      Nuestros semilleros son espacios donde estudiantes y docentes colaboran en proyectos
      innovadores que impactan la industria multimedia y tecnológica.
    </p>

    <div class="semilleros">
      <SemilleroCard 
        v-for="(semillero, index) in semilleros" 
        :key="index" 
        :semillero="semillero"
        :index="index"
      />
    </div>
  </section>
</template>

<script>
import SectionLabel from './SectionLabel.vue';
import SemilleroCard from './SemilleroCard.vue';

export default {
  name: 'SemillerosSection',
  components: {
    SectionLabel,
    SemilleroCard
  },
  data() {
    return {
      semilleros: [
        {
          label: '// Semillero 01',
          title: 'Videojuegos & XR',
          description: 'Creación de videojuegos y experiencias inmersivas con motores como Unity y Unreal Engine. Investigación en mecánicas de juego, narrativa interactiva y realidad extendida.',
          members: '05',
          projects: '12'
        },
        {
          label: '// Semillero 02',
          title: 'Inteligencia Artificial',
          description: 'Aplicación de machine learning y redes neuronales en producción audiovisual, generación de contenido y análisis de datos para medios digitales.',
          members: '08',
          projects: '07'
        },
        {
          label: '// Semillero 03',
          title: 'Diseño Interactivo',
          description: 'Investigación en UX/UI avanzado, interfaces tangibles y diseño de experiencias digitales centradas en el usuario para plataformas emergentes.',
          members: '06',
          projects: '09'
        }
      ]
    };
  }
};
</script>

<style scoped>
.sectionInvestigacion {
  background: var(--bg2);
  padding: clamp(80px, 8vw, 120px) clamp(24px, 5vw, 64px);
  position: relative;
  overflow: hidden;
}

.sectionInvestigacion::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent,
    var(--secondary),
    var(--primary),
    transparent
  );
}

.sectionInvestigacion::after {
  content: '';
  position: absolute;
  bottom: -120px;
  left: -80px;
  width: 400px;
  height: 400px;
  background: radial-gradient(circle, rgba(4, 191, 191, 0.06), transparent 65%);
  pointer-events: none;
}

.sectionInvestigacion > h2 {
  text-align: left;
  margin-bottom: var(--sp-4);
  max-width: 640px;
  font-family: var(--font-display);
  font-size: clamp(2.2rem, 5vw, 3.8rem);
  font-weight: 800;
  letter-spacing: -0.03em;
  line-height: 1.05;
  color: var(--text-heading);
}

.sectionInvestigacion > p {
  max-width: 580px;
  margin-bottom: clamp(48px, 6vw, 80px);
  color: var(--text-muted);
  font-family: var(--font-mono);
  font-size: 0.93rem;
  line-height: 1.8;
}

.semilleros {
  display: flex;
  flex-wrap: wrap;
  gap: 1px;
  background: var(--border);
  position: relative;
  z-index: 1;
}
</style>
