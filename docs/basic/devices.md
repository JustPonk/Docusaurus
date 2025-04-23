---
sidebar_position: 3
---

# 📱 Panel de Dispositivos - ¡Mario en Todas las Pantallas!

## 🎮 Introducción al Modo Dispositivo

¡Bienvenido al Mundo de los Dispositivos Móviles! Así como Mario se adapta a diferentes mundos, nuestras aplicaciones deben adaptarse a diferentes pantallas.

## 🔄 Activando el Modo Dispositivo

### Método Rápido
- Presiona `Ctrl + Shift + M` (Windows/Linux)
- Presiona `Cmd + Shift + M` (Mac)

:::tip ¡Power-Up!
¡Como usar la Super Estrella, estos atajos te dan superpoderes instantáneos!
:::

## 📱 Tipos de Dispositivos

### Dispositivos Predefinidos
```css
/* Estilos para iPhone 12 Pro */
@media screen and (width: 390px) and (height: 844px) {
  .mario-jump {
    height: calc(100vh - 50px);
  }
}

/* Estilos para iPad Air */
@media screen and (width: 820px) and (height: 1180px) {
  .power-up-menu {
    grid-template-columns: repeat(3, 1fr);
  }
}
```

### Modo Responsivo
```css
/* Breakpoints comunes */
.nivel-container {
  /* Móvil: Como el Mundo 1-1 */
  width: 100%;
}

@media (min-width: 768px) {
  /* Tablet: Como el Mundo 1-2 */
  .nivel-container {
    width: 80%;
  }
}

@media (min-width: 1024px) {
  /* Desktop: Como el Mundo 1-3 */
  .nivel-container {
    width: 60%;
  }
}
```

## 🌐 Orientación y Rotación

```css
/* Modo Paisaje - Como correr por el nivel */
@media (orientation: landscape) {
  .mario-run {
    animation: run 0.5s infinite;
  }
}

/* Modo Retrato - Como subir una tubería */
@media (orientation: portrait) {
  .mario-climb {
    animation: climb 0.8s infinite;
  }
}
```

## 🔍 Herramientas de Inspección

### Barra de Herramientas Superior
```javascript
// Funciones útiles para debugging móvil
function verificarTouchEvents() {
  if ('ontouchstart' in window) {
    console.log('🎮 Touch events disponibles');
  }
}
```

### Sensor de Acelerómetro
```javascript
// Como detectar saltos de Mario
window.addEventListener('devicemotion', (event) => {
  const acceleration = event.accelerationIncludingGravity;
  if (acceleration.y > 20) {
    console.log('🦘 ¡Salto detectado!');
  }
});
```

## 📊 Rendimiento Móvil

### Throttling de Red
```javascript
// Simular conexión lenta
async function cargarNivel() {
  console.time('⏱️ Tiempo de carga');
  try {
    await fetch('mundo-1-1.json');
    console.timeEnd('⏱️ Tiempo de carga');
  } catch (error) {
    console.error('❌ Bowser bloqueó la conexión');
  }
}
```

## 🎯 Ejercicios Prácticos

1. **Misión: Viewport Responsivo**
```html
<!-- Configura el viewport para dispositivos móviles -->
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<!-- Prueba diferentes anchos -->
<div class="nivel-container">
  <div class="mario-sprite"></div>
</div>
```

2. **Desafío: Touch Events**
```javascript
// Implementa controles táctiles
element.addEventListener('touchstart', (e) => {
  e.preventDefault();
  console.log('👆 Inicio del toque');
});
```

## 💡 Tips Pro

:::tip ¡Super Champiñón de Desarrollo!
Usa Chrome Remote Debugging para depurar en dispositivos reales, ¡como tener un P-Wing en el desarrollo!
:::

:::warning ¡Cuidado con Bowser!
No olvides probar en diferentes dispositivos reales, las emulaciones no siempre son perfectas.
:::

## 🔧 Herramientas Avanzadas

### Geolocalización
```javascript
// Como el mapa del mundo de Mario
if ("geolocation" in navigator) {
  navigator.geolocation.getCurrentPosition(position => {
    console.log(`🗺️ Mundo actual: ${position.coords.latitude}`);
  });
}
```

### Modo Offline
```javascript
// Como guardar una partida
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js')
    .then(() => console.log('🎮 Punto de guardado creado'));
}
```

## 🏁 Checklist del Desarrollador Móvil

- [ ] Configurar viewport
- [ ] Probar diferentes dispositivos
- [ ] Verificar orientaciones
- [ ] Testear touch events
- [ ] Optimizar rendimiento
- [ ] Implementar diseño responsivo

## 🎮 Siguiente Nivel
¡Continúa tu aventura aprendiendo sobre el rendimiento y optimización en el siguiente mundo! 