<template>
  <component
    :is="tag"
    :href="href"
    :class="['btn', `btn--${variant}`]"
  >
    <slot />
    <svg v-if="showArrow" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
      fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"
      stroke-linejoin="round" class="arrow">
      <line x1="5" y1="12" x2="19" y2="12"></line>
      <polyline points="12 5 19 12 12 19"></polyline>
    </svg>
  </component>
</template>

<script>
export default {
  name: 'AppButton',
  props: {
    variant: {
      type: String,
      default: 'primary',
      validator: (value) => ['primary', 'secondary', 'ghost'].includes(value)
    },
    href: {
      type: String,
      default: null
    },
    showArrow: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    tag() {
      return this.href ? 'a' : 'button';
    }
  }
};
</script>

<style scoped>
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 13px 28px;
  font-family: var(--font-mono);
  font-size: 0.82rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  text-decoration: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
  position: relative;
}

.btn--primary {
  background: var(--primary);
  color: #080C10;
  clip-path: polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px));
  box-shadow: 0 0 20px var(--glow-orange);
}

.btn--primary:hover {
  background: #ffaa44;
  color: #080C10;
  box-shadow: 0 0 36px var(--glow-orange);
  transform: translateY(-2px);
}

.btn--secondary {
  background: transparent;
  color: var(--secondary);
  clip-path: polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px));
  box-shadow: inset 0 0 0 1px rgba(4,191,191,0.4), 0 0 16px var(--glow-teal);
}

.btn--secondary:hover {
  background: rgba(4,191,191,0.1);
  color: var(--secondary);
  box-shadow: inset 0 0 0 1px var(--secondary), 0 0 28px var(--glow-teal);
  transform: translateY(-2px);
}

.btn--ghost {
  background: transparent;
  color: var(--secondary);
  clip-path: none;
  border: 1px solid rgba(4,191,191,0.45);
  box-shadow: 0 0 10px var(--glow-teal);
}

.btn--ghost:hover {
  background: rgba(4,191,191,0.07);
  color: var(--secondary);
  box-shadow: 0 0 22px var(--glow-teal);
  transform: translateY(-2px);
}

.arrow {
  width: 14px;
  height: 14px;
}
</style>
