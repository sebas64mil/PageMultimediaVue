<template>
  <footer class="site-footer">
    <div class="footer-content">
      <!-- Col 1: Identity -->
      <div class="footer-col">
        <img src="/assets/img/Logo.png" alt="Logo Ingeniería Multimedia" class="footer-logo">
        <p class="muted">
          Ingeniería Multimedia USBBOG. Formación, tecnología y creatividad para transformar el mundo digital.
        </p>
      </div>

      <!-- Col 2: Links -->
      <div class="footer-col">
        <h4>Navegación</h4>
        <ul class="footer-links">
          <li><a href="#home">Inicio</a></li>
          <li><a href="#home">Miembros</a></li>
          <li><a href="#news">Eventos</a></li>
          <li><a href="#">Servicios</a></li>
        </ul>
      </div>

      <!-- Col 3: Contact -->
      <div class="footer-col">
        <h4>Contacto</h4>
        <ul class="footer-contact">
          <li><i class="fa-solid fa-location-dot"></i> Bogotá, Colombia</li>
          <li><i class="fa-solid fa-envelope"></i> ingenieria@usb.edu.co</li>
          <li><i class="fa-solid fa-phone"></i> +57 1 234 5678</li>
        </ul>
      </div>

      <!-- Col 4: Social -->
      <div class="footer-col">
        <h4>Redes</h4>
        <div class="footer-social">
          <a href="#" aria-label="Facebook"><i class="fa-brands fa-facebook-f"></i></a>
          <a href="#" aria-label="Instagram"><i class="fa-brands fa-instagram"></i></a>
          <a href="#" aria-label="YouTube"><i class="fa-brands fa-youtube"></i></a>
          <a href="#" aria-label="X / Twitter"><i class="fa-brands fa-x-twitter"></i></a>
        </div>
      </div>
    </div>

    <hr class="footer-hr">

    <div class="footer-bottom">
      <p>2025 Ingeniería Multimedia USBBOG — Todos los derechos reservados.</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter'
};
</script>

<style scoped>
.site-footer {
  background: var(--bg2);
  border-top: 1px solid var(--border);
  color: var(--text-muted);
  padding: 64px clamp(24px, 5vw, 64px) 32px;
  position: relative;
  overflow: hidden;
}

.site-footer::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent 0%,
    var(--secondary) 30%,
    var(--primary) 70%,
    transparent 100%
  );
}

.site-footer::after {
  content: '';
  position: absolute;
  bottom: -120px;
  right: -120px;
  width: 360px;
  height: 360px;
  background: radial-gradient(circle, rgba(4, 191, 191, 0.06), transparent 65%);
  pointer-events: none;
}

.footer-content {
  display: grid;
  gap: var(--sp-7);
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  align-items: start;
  max-width: 1240px;
  margin-inline: auto;
}

.footer-col {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.footer-logo {
  max-width: 130px;
  margin-bottom: var(--sp-4);
  filter: drop-shadow(0 0 6px var(--glow-teal));
}

.footer-col h4 {
  font-family: var(--font-mono);
  font-size: 0.7rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.18em;
  color: var(--secondary);
  margin-bottom: var(--sp-4);
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 0 0 var(--sp-4) 0;
}

.footer-col h4::before {
  content: '//';
  color: var(--primary);
  font-size: 0.65rem;
}

.muted {
  color: var(--text-muted);
  font-size: 0.82rem;
  line-height: 1.5;
  margin: 0;
}

.footer-links,
.footer-contact {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 10px;
}

.footer-links a {
  color: var(--text-muted);
  font-family: var(--font-mono);
  font-size: 0.82rem;
  border: none;
  transition: color 0.2s ease, padding-left 0.15s ease;
  display: block;
}

.footer-links a:hover {
  color: var(--secondary);
  padding-left: 8px;
}

.footer-links a::before {
  content: '→ ';
  color: var(--primary);
  opacity: 0;
  transition: opacity 0.2s;
}

.footer-links a:hover::before {
  opacity: 1;
}

.footer-contact li {
  font-size: 0.82rem;
  font-family: var(--font-mono);
  display: flex;
  gap: var(--sp-3);
  align-items: flex-start;
  color: var(--text-muted);
}

.footer-contact li i {
  color: var(--primary);
  flex-shrink: 0;
}

.footer-social {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

.footer-social a {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  background: var(--bg3);
  border: 1px solid var(--border);
  color: var(--text-muted);
  font-size: 1.1rem;
  text-decoration: none;
  border-bottom: none;
  transition: all 0.2s ease;
}

.footer-social a:hover {
  border-color: var(--secondary);
  color: var(--secondary);
  background: rgba(4, 191, 191, 0.08);
  box-shadow: 0 0 14px var(--glow-teal);
}

.footer-hr {
  border: none;
  height: 1px;
  background: var(--border);
  margin: 32px 0;
}

.footer-bottom {
  text-align: center;
  padding-top: var(--sp-5);
  max-width: 1240px;
  margin-inline: auto;
}

.footer-bottom p {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  color: var(--text-muted);
  margin: 0;
}

@media (max-width: 768px) {
  .footer-content {
    grid-template-columns: 1fr 1fr;
    gap: 32px;
  }
}
</style>
