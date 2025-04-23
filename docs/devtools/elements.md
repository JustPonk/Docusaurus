# Panel Elements 🎨

El panel Elements es tu herramienta principal para inspeccionar y modificar el DOM y CSS en tiempo real.

## Inspección del DOM 🔍

### Estructura del DOM
```html
<div class="container">
  <header class="header">
    <h1>Título</h1>
  </header>
  <main class="content">
    <!-- Contenido -->
  </main>
</div>
```

### Atajos de Selección ⌨️

| Acción | Atajo |
|--------|-------|
| Seleccionar elemento | `Ctrl + Shift + C` |
| Expandir nodo | `→` |
| Colapsar nodo | `←` |
| Expandir todo | `Alt + Click ►` |
| Editar como HTML | `F2` |

## Manipulación del DOM 🛠️

### Editar Elementos
```html
<!-- Doble click en cualquier texto para editar -->
<h1>Título Editable</h1>

<!-- Arrastrar y soltar elementos para reordenar -->
<div>Elemento 1</div>
<div>Elemento 2</div>
```

### Comandos Útiles
```javascript
// En la consola:
// Copiar elemento como selector
copy($0)

// Almacenar referencia
temp1 = $0

// Mostrar todos los event listeners
getEventListeners($0)
```

## Panel de Estilos 🎨

### Estilos Computados
```css
/* Ver estilos aplicados y heredados */
.elemento {
  color: inherit;
  margin: 10px;
  padding: 15px;
}
```

### Box Model 📦
```css
/* Visualizar y editar dimensiones */
.box {
  margin: 10px;
  border: 1px solid #000;
  padding: 15px;
  width: 200px;
  height: 100px;
}
```

## Estados y Pseudo-clases 🔄

### Forzar Estados
```css
/* Simular :hover, :active, :focus */
.button:hover {
  background-color: #eee;
}

.input:focus {
  border-color: blue;
}
```

## Animaciones y Transiciones 🎬

### Inspector de Animaciones
```css
.elemento {
  transition: all 0.3s ease;
  animation: slide 1s infinite;
}

@keyframes slide {
  from { transform: translateX(0); }
  to { transform: translateX(100px); }
}
```

## Accesibilidad 👥

### Árbol de Accesibilidad
```html
<!-- Verificar roles ARIA y atributos -->
<button 
  role="button"
  aria-label="Cerrar menú"
  aria-expanded="false">
  ✕
</button>
```

## Grid y Flexbox 📐

### Grid Layout
```css
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
}
```

### Flexbox
```css
.flex-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
```

## Breakpoints del DOM 🔍

### Observar Cambios
```javascript
// Establecer breakpoints para:
// - Modificaciones de subárbol
// - Modificaciones de atributos
// - Eliminación de nodos
```

## Ejercicios Prácticos 💪

### 1. Inspección Básica
1. Abrir DevTools (`F12`)
2. Seleccionar un elemento
3. Modificar sus estilos
4. Observar cambios en tiempo real

### 2. Manipulación Avanzada
```javascript
// 1. Crear nuevo elemento
const newDiv = document.createElement('div');
newDiv.textContent = 'Nuevo Elemento';

// 2. Insertarlo en el DOM
document.body.appendChild(newDiv);

// 3. Modificar con DevTools
```

## Mejores Prácticas 🌟

### 1. Organización
- Mantener el panel limpio
- Usar filtros de búsqueda
- Guardar cambios importantes

### 2. Debugging
- Verificar herencia de estilos
- Usar breakpoints del DOM
- Validar accesibilidad

### 3. Optimización
- Revisar especificidad CSS
- Verificar rendimiento de animaciones
- Mantener el DOM ligero

## Consejos Pro 💡

### Búsqueda Avanzada
```javascript
// Buscar por:
// - Selectores CSS
// - XPath
// - Texto contenido
// - Propiedades
```

### Copiar Estilos
```css
/* Copiar estilos computados */
.elemento {
  /* Usar el botón de copiar en el panel */
}
```

### Modificaciones en Lote
```javascript
// Seleccionar múltiples elementos
$$('.clase').forEach(el => {
  el.style.backgroundColor = 'red';
});
```

## Recursos Adicionales 📚

### Documentación
- [MDN Web Docs - DOM](https://developer.mozilla.org/es/docs/Web/API/Document_Object_Model)
- [CSS Reference](https://developer.mozilla.org/es/docs/Web/CSS/Reference)

### Herramientas Complementarias
1. Extensiones de Chrome
2. Snippets personalizados
3. Workspaces locales

:::tip Consejo
Usa el modo de diseño responsivo (`Ctrl + Shift + M`) para probar diferentes tamaños de pantalla.
:::

:::warning Importante
Los cambios realizados en el panel Elements son temporales y se perderán al recargar la página.
::: 