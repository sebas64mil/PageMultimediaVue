<template>
  <nav>
    <img src="/assets/img/Logo.png" alt="Ingeniería Multimedia USBBOG" class="logo">

    <div class="navbar">
      <a href="#home">Home</a>
      <a href="#home">Miembros</a>
      
      <div class="dropdown">
        <a class="dropbtn">Investigación</a>
        <div class="dropdown-content">
          <a href="#">Semilleros</a>
          <a href="#">Publicaciones</a>
          <a href="#">Grupos</a>
        </div>
      </div>

      <a href="#news">Eventos</a>

      <div class="dropdown">
        <a class="dropbtn">Servicios</a>
        <div class="dropdown-content">
          <a href="#">Laboratorios</a>
          <a href="#">Equipos</a>
          <a href="#">Convenios</a>
        </div>
      </div>
    </div>

    <button>Contáctenos</button>
  </nav>
</template>

<script>
export default {
  name: 'AppNav'
};
</script>

<style scoped>
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 clamp(24px, 5vw, 64px);
  height: 68px;
  background: rgba(8, 12, 16, 0.96);
  border-bottom: 1px solid var(--border);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  position: sticky;
  top: 0;
  z-index: 1000;
}

/* Top accent bar */
nav::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent 0%,
    var(--secondary) 20%,
    var(--primary) 50%,
    var(--secondary) 80%,
    transparent 100%
  );
  opacity: 0.7;
}

/* Decorative corner bracket top-right */
nav::after {
  content: '';
  position: absolute;
  top: 8px;
  right: 8px;
  width: 10px;
  height: 10px;
  border-top: 1px solid var(--secondary);
  border-right: 1px solid var(--secondary);
  opacity: 0.4;
}

.logo {
  height: clamp(2rem, 3.5vw, 2.8rem);
  width: auto;
  filter: drop-shadow(0 0 6px var(--glow-teal));
  transition: filter 0.2s;
}

.logo:hover {
  filter: drop-shadow(0 0 12px var(--glow-orange));
}

.navbar {
  display: flex;
  align-items: center;
  gap: 2px;
}

.navbar a {
  padding: 8px 14px;
  color: var(--text-muted);
  font-family: var(--font-mono);
  font-weight: 400;
  font-size: 0.8rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  text-decoration: none;
  border: none;
  position: relative;
  transition: color 0.2s ease;
}

.navbar a::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 14px;
  right: 14px;
  height: 1px;
  background: var(--secondary);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.2s ease;
}

.navbar a:hover {
  color: var(--secondary);
}

.navbar a:hover::after {
  transform: scaleX(1);
}

/* Dropdowns */
.dropdown {
  position: relative;
  display: inline-block;
}

.dropbtn {
  background: none;
  border: none;
  color: var(--text-muted);
  padding: 8px 14px;
  font-size: 0.8rem;
  font-weight: 400;
  font-family: var(--font-mono);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 6px;
  transition: color 0.2s ease;
}

.dropbtn:hover {
  color: var(--secondary);
}

.dropdown-content {
  display: none;
  position: absolute;
  top: calc(100% + 4px);
  left: 0;
  background: var(--bg2);
  border: 1px solid var(--border);
  min-width: 180px;
  z-index: 200;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.7);
}

/* Top accent on dropdown */
.dropdown-content::before {
  content: '';
  display: block;
  height: 1px;
  background: linear-gradient(90deg, var(--secondary), var(--primary));
}

.dropdown-content a {
  display: block;
  color: var(--text-muted);
  padding: 10px 16px;
  font-size: 0.8rem;
  font-family: var(--font-mono);
  letter-spacing: 0.06em;
  border: none;
  transition: color 0.15s ease, background 0.15s ease;
}

.dropdown-content a:hover {
  color: var(--secondary);
  background: rgba(4, 191, 191, 0.06);
}

.dropdown-content a::before {
  content: '> ';
  color: var(--primary);
  opacity: 0;
  transition: opacity 0.15s;
}

.dropdown-content a:hover::before {
  opacity: 1;
}

.dropdown:hover .dropdown-content {
  display: block;
}

/* NAV BUTTON — CONTACT */
nav > button {
  padding: 9px 20px;
  background: transparent;
  color: var(--primary);
  font-family: var(--font-mono);
  font-weight: 600;
  font-size: 0.78rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  cursor: pointer;
  clip-path: polygon(
    0 0,
    calc(100% - 8px) 0,
    100% 8px,
    100% 100%,
    8px 100%,
    0 calc(100% - 8px)
  );
  border: none;
  box-shadow: inset 0 0 0 1px rgba(242, 145, 27, 0.5),
    0 0 12px var(--glow-orange);
  transition: all 0.2s ease;
}

nav > button:hover {
  background: var(--primary);
  color: #080c10;
  box-shadow: 0 0 28px var(--glow-orange);
}
</style>