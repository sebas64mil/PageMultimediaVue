<template>
  <div class="semilleroCard">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" stroke-width="1.5" stroke-linecap="square">
      <template v-if="index === 0">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
      </template>
      <template v-else-if="index === 1">
        <circle cx="12" cy="12" r="3"></circle>
        <path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14"></path>
        <path d="M15.54 8.46a5 5 0 0 1 0 7.07M8.46 8.46a5 5 0 0 0 0 7.07"></path>
      </template>
      <template v-else>
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
      </template>
    </svg>
    <h5>{{ semillero.label }}</h5>
    <h3>{{ semillero.title }}</h3>
    <p>{{ semillero.description }}</p>
    <div>
      <div>
        <h5>{{ semillero.members }}</h5>
        <span>miembros</span>
      </div>
      <div>
        <h5>{{ semillero.projects }}</h5>
        <span>proyectos</span>
      </div>
    </div>
    <AppButton variant="secondary" href="#">Conoce más</AppButton>
  </div>
</template>

<script>
import AppButton from './AppButton.vue';

export default {
  name: 'SemilleroCard',
  components: {
    AppButton
  },
  props: {
    semillero: {
      type: Object,
      required: true,
      validator: (obj) => {
        return obj.label && obj.title && obj.description && obj.members && obj.projects;
      }
    },
    index: {
      type: Number,
      required: true
    }
  }
};
</script>

<style scoped>
.semilleroCard {
  background: var(--bg3);
  font-family: var(--font-mono);
  padding: var(--sp-7);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 1;
  min-width: 280px;
  max-width: 420px;
  position: relative;
  transition: background 0.25s ease;
}

.semilleroCard:hover {
  background: var(--bg2);
}

.semilleroCard::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg, var(--secondary), var(--primary));
  opacity: 0;
  transition: opacity 0.25s ease;
}

.semilleroCard:hover::before {
  opacity: 1;
}

.semilleroCard::after {
  content: '';
  position: absolute;
  bottom: 14px;
  right: 14px;
  width: 14px;
  height: 14px;
  border-bottom: 1px solid rgba(4, 191, 191, 0.3);
  border-right: 1px solid rgba(4, 191, 191, 0.3);
  transition: border-color 0.25s ease;
}

.semilleroCard:hover::after {
  border-color: rgba(4, 191, 191, 0.7);
}

.semilleroCard svg {
  width: 40px;
  height: 40px;
  color: var(--secondary);
  margin-bottom: var(--sp-5);
  filter: drop-shadow(0 0 6px var(--glow-teal));
  transition: filter 0.2s ease;
}

.semilleroCard:hover svg {
  filter: drop-shadow(0 0 12px var(--glow-teal));
}

.semilleroCard h3 {
  color: var(--text-heading);
  font-size: 1.15rem;
  margin: 0 0 var(--sp-3);
}

.semilleroCard h5:first-of-type {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 0.14em;
  margin: 0 0 var(--sp-3);
}

.semilleroCard p {
  font-size: .85rem;
  margin-bottom: var(--sp-5);
  line-height: 1.75;
  color: var(--text-muted);
}

.semilleroCard > div {
  display: flex;
  gap: 0;
  width: 100%;
  margin-bottom: var(--sp-5);
  flex-direction: row;
  background: var(--bg2);
  border: 1px solid var(--border);
}

.semilleroCard > div > div {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: var(--sp-4) var(--sp-3);
  border-right: 1px solid var(--border);
}

.semilleroCard > div > div:last-child {
  border-right: none;
}

.semilleroCard > div > div h5 {
  color: var(--primary) !important;
  font-family: var(--font-id) !important;
  font-size: 1.6rem !important;
  font-weight: 700 !important;
  letter-spacing: -0.02em !important;
  margin-bottom: 4px !important;
  text-shadow: 0 0 14px var(--glow-orange) !important;
}

.semilleroCard > div span {
  color: var(--text-muted);
  font-family: var(--font-mono);
  font-size: 0.65rem;
  text-transform: uppercase;
  letter-spacing: 0.12em;
}

.semilleroCard :deep(.btn) {
  width: 100%;
  margin-top: auto;
}
</style>
