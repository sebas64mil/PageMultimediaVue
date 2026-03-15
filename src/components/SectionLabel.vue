<template>
  <div>
    <p class="section-number">{{ number }} //</p>
    <div class="section-label">{{ label }}</div>
  </div>
</template>

<script>
export default {
  name: 'SectionLabel',
  props: {
    number: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped>
.section-number {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--text-muted);
  margin: 0 0 var(--sp-3);
}

.section-label {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--secondary);
  letter-spacing: 0.18em;
  text-transform: uppercase;
  margin: 0 0 var(--sp-3);
  display: flex;
  align-items: center;
  gap: 12px;
}

.section-label::before {
  content: '';
  display: block;
  width: 28px;
  height: 1px;
  background: var(--secondary);
  box-shadow: 0 0 6px var(--glow-teal);
}
</style>
