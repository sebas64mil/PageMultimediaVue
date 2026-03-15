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
  background: var(--bgOP);
  border-top: 1px solid var(--border);
  padding: 48px clamp(24px, 5vw, 64px) 24px;
  position: relative;
  z-index: 1;
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 48px;
  max-width: 1200px;
  margin: 0 auto 40px;
}

.footer-col {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.footer-logo {
  height: 40px;
  width: auto;
  margin-bottom: 8px;
}

.footer-col h4 {
  font-family: var(--font-display);
  color: var(--text-heading);
  font-size: 0.95rem;
  margin: 0;
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
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.footer-links a,
.footer-contact a {
  color: var(--text);
  text-decoration: none;
  font-size: 0.9rem;
  transition: color .2s;
}

.footer-links a:hover,
.footer-contact a:hover {
  color: var(--primary);
}

.footer-contact li {
  color: var(--text);
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  gap: 8px;
}

.footer-social {
  display: flex;
  gap: 16px;
}

.footer-social a {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border: 1px solid rgba(4,191,191,0.25);
  color: var(--secondary);
  transition: all .2s;
}

.footer-social a:hover {
  background: rgba(4,191,191,0.1);
  box-shadow: 0 0 12px rgba(4,191,191,0.3);
}

.footer-hr {
  border: none;
  height: 1px;
  background: var(--border);
  margin: 32px 0;
}

.footer-bottom {
  text-align: center;
  color: var(--text-muted);
  font-size: 0.9rem;
}

.footer-bottom p {
  margin: 0;
}

@media (max-width: 768px) {
  .footer-content {
    grid-template-columns: 1fr 1fr;
    gap: 32px;
  }
}
</style>
