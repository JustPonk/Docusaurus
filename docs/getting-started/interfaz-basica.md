# Interfaz Básica de DevTools 🎮

## El HUD Principal 🎯

### Barra de Herramientas Superior
```javascript
// Componentes principales
toolbar = {
  toggleDevice: "📱 Modo dispositivo",
  elements: "🔍 Inspector",
  console: "💻 Consola",
  sources: "📁 Código fuente",
  network: "🌐 Red",
  performance: "⚡ Rendimiento",
  memory: "💾 Memoria",
  // ... más herramientas
}
```

## Zonas de Control 🎨

### 1. Panel Principal
```css
.main-panel {
  /* Área de trabajo principal */
  position: relative;
  display: flex;
  height: 100%;
}

/* Subpaneles disponibles */
.panels {
  elements: "Inspección DOM",
  console: "Terminal JavaScript",
  sources: "Editor de código",
  network: "Monitor de red"
}
```

### 2. Panel Lateral
```css
.side-panel {
  /* Panel secundario */
  position: right;
  width: 30%;
  
  /* Contenido típico */
  content: {
    styles: "CSS",
    computed: "Valores calculados",
    eventListeners: "Eventos",
    properties: "Propiedades"
  }
}
```

## Controles de Navegación 🕹️

### Atajos Esenciales
| Acción | Comando | Descripción |
|--------|---------|-------------|
| Alternar DevTools | `F12` | Mostrar/Ocultar |
| Cambiar Dock | `Ctrl + Shift + D` | Cambiar posición |
| Buscar | `Ctrl + F` | Buscar en panel |
| Comando | `Ctrl + Shift + P` | Menú de comandos |

## Personalización del HUD ⚙️

### 1. Posición del Panel
```javascript
// Opciones de dock
const dockPositions = {
  RIGHT: "Panel a la derecha",
  BOTTOM: "Panel abajo",
  LEFT: "Panel a la izquierda",
  UNDOCKED: "Ventana separada"
};
```

### 2. Tema Visual
```css
/* Temas disponibles */
.devtools-theme {
  --theme-light: {
    background: #ffffff;
    text: #333333;
  }
  
  --theme-dark: {
    background: #1e1e1e;
    text: #ffffff;
  }
}
```

## Menús Contextuales 📋

### Click Derecho en Elementos
```javascript
// Opciones disponibles
const contextMenu = {
  "Add attribute": "Añadir atributo",
  "Edit as HTML": "Editar como HTML",
  "Copy": {
    "selector": "Copiar selector",
    "styles": "Copiar estilos",
    "xpath": "Copiar XPath"
  },
  "Break on": {
    "subtree": "Cambios en subárbol",
    "attribute": "Cambios de atributo",
    "node": "Eliminación de nodo"
  }
};
```

## Power-Ups: Funciones Especiales ⭐

### 1. Drawer Panel
```javascript
// Panel inferior oculto
// Activar: Esc
drawer = {
  console: "Consola rápida",
  animations: "Editor de animaciones",
  network: "Condiciones de red",
  rendering: "Opciones de renderizado"
}
```

### 2. Command Menu
```javascript
// Menú de comandos rápidos
// Activar: Ctrl + Shift + P
commands = [
  "Show Coverage",
  "Capture screenshot",
  "Toggle device mode",
  "Show Console drawer"
]
```

## Mini-Juegos de Práctica 🎮

### 1. Explorador DOM
```html
<!-- Misión: Encuentra elementos ocultos -->
<div class="secreto" style="display: none">
  ¡Tesoro encontrado! 🎁
</div>
```

### 2. Cazador de Estilos
```css
/* Misión: Modifica estos estilos */
.objetivo {
  color: #mystery;
  transform: rotate(?deg);
  animation: bounce ?s;
}
```

### 3. Detective de Red
```javascript
// Misión: Analiza estas peticiones
fetch('/api/secreto')
  .then(res => console.log('¿Qué contiene?'))
```

## Logros de Interfaz 🏆

### Novato
- [x] Abrir DevTools
- [x] Cambiar tema
- [x] Usar búsqueda

### Aventurero
- [ ] Usar Command Menu
- [ ] Personalizar layout
- [ ] Dominar atajos

## Próximas Misiones 🗺️

1. Dominar el Panel Elements
2. Maestría de la Consola
3. Exploración de Network
4. Aventuras en Sources

## Recursos de Mejora 📚

### Documentación
- [Guía de Interfaz](https://developers.google.com/web/tools/chrome-devtools/ui)
- [Atajos de Teclado](https://developers.google.com/web/tools/chrome-devtools/shortcuts)
- [Personalización](https://developers.google.com/web/tools/chrome-devtools/customize)

:::tip Poder Especial
Presiona `?` en cualquier momento para ver todos los atajos disponibles en el panel actual.
:::

:::warning Zona de Peligro
¡Cuidado al modificar la configuración experimental! Podría afectar el funcionamiento de DevTools.
::: 