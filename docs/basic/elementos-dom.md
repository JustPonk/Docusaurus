---
sidebar_position: 1
---

# 🔍 Elementos DOM - ¡Explorando el Reino!

## 🏰 El DOM: Tu Mapa del Reino

El DOM (Document Object Model) es como el mapa de un nivel de Mario Bros. Cada elemento es una plataforma, un bloque o un enemigo que necesitas inspeccionar.

## 🎯 Inspeccionar Elementos

### Seleccionar un Elemento
```css
/* Como cuando Mario toca un bloque... */
.elemento {
  border: 2px dashed #e52521; /* Borde rojo Mario */
  animation: parpadeo 1s infinite;
}

@keyframes parpadeo {
  0% { opacity: 1; }
  50% { opacity: 0.5; }
  100% { opacity: 1; }
}
```

### Ver la Estructura
```html
<!-- Como los niveles de Mario, todo tiene una estructura -->
<div class="nivel">
  <div class="plataforma">
    <div class="bloque-sorpresa">?</div>
    <div class="tuberia">🌿</div>
  </div>
</div>
```

## 🎮 Controles Básicos

### Atajos de Teclado
- `Ctrl + Shift + C` - Activar el selector (como tomar una estrella de invencibilidad)
- `H` - Ocultar elemento (como cuando Mario se agacha)
- `Delete` - Eliminar elemento (como cuando Mario rompe un bloque)

## 🌟 Power-Ups para el Inspector

### Breadcrumbs
```css
/* La ruta hasta tu elemento */
.breadcrumb-trail {
  color: #fbd000; /* Amarillo moneda */
  font-family: 'Press Start 2P';
}
```

### Búsqueda de Elementos
```javascript
// Encuentra elementos como si buscaras monedas
document.querySelector('.moneda'); // Encuentra la primera moneda
document.querySelectorAll('.bloque'); // Encuentra todos los bloques
```

## 🎨 Estilos en Vivo

### Modificar Propiedades
```css
.elemento {
  /* Cambia los estilos como power-ups */
  transform: scale(2); /* Hongo de crecimiento */
  animation: estrella 1s infinite; /* Estrella de invencibilidad */
}
```

## 🎯 Ejercicios Prácticos

1. **Misión: Encuentra el Tesoro**
   - Usa el inspector para encontrar un elemento oculto
   - Modifica sus propiedades CSS
   - ¡Hazlo visible!

2. **Desafío: Constructor de Niveles**
   - Inspecciona la estructura de la página
   - Identifica los elementos principales
   - Dibuja un mapa de la jerarquía

## 💡 Tips Pro

:::tip ¡Power-Up!
Usa `Ctrl + F` en el panel Elements para buscar elementos por selector, como buscar warp pipes en un nivel.
:::

:::warning ¡Cuidado!
Los cambios en el inspector son temporales, como el efecto de una estrella. ¡No olvides guardar tus cambios en el código!
:::

## 🎮 Próxima Aventura
¡Continúa tu viaje aprendiendo sobre estilos CSS en el siguiente nivel! 