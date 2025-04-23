# Atajos de Teclado - Guía del Jugador 🎮

## Combos Básicos ⌨️

### Abrir/Cerrar DevTools
```javascript
// Windows/Linux
const abrirDevTools = {
  F12: "Abrir/Cerrar",
  "Ctrl + Shift + I": "Abrir/Cerrar",
  "Ctrl + Shift + J": "Abrir Consola",
  "Ctrl + Shift + C": "Inspeccionar elemento"
};

// macOS
const abrirDevToolsMac = {
  "Cmd + Option + I": "Abrir/Cerrar",
  "Cmd + Option + J": "Abrir Consola",
  "Cmd + Option + C": "Inspeccionar elemento"
};
```

## Movimientos Especiales 🎯

### Navegación entre Paneles
```javascript
// Cambiar entre paneles
const panelNavigation = {
  "Ctrl + ]": "Panel siguiente",
  "Ctrl + [": "Panel anterior",
  "Ctrl + 1-9": "Ir al panel #",
  Esc: "Toggle console drawer"
};
```

## Power-Ups de Búsqueda 🔍

### Búsqueda Global
```javascript
// Comandos de búsqueda
const searchCommands = {
  "Ctrl + F": "Buscar en panel actual",
  "Ctrl + Shift + F": "Buscar en todos los archivos",
  "Ctrl + O": "Ir a archivo",
  "Ctrl + Shift + O": "Ir a símbolo"
};
```

## Combos del DOM 🌳

### Manipulación de Elementos
```javascript
// Atajos del panel Elements
const elementShortcuts = {
  "↑/↓": "Navegar elementos",
  Enter: "Expandir/colapsar",
  Tab: "Editar atributo",
  Delete: "Eliminar elemento",
  "H": "Ocultar elemento"
};
```

## Hechizos de la Consola 💻

### Console Magic
```javascript
// Trucos de consola
const consoleShortcuts = {
  "Ctrl + L": "Limpiar consola",
  "Shift + Enter": "Nueva línea",
  "↑/↓": "Navegar historial",
  "Ctrl + U": "Limpiar línea actual"
};
```

## Técnicas de Debugging 🐛

### Control de Ejecución
```javascript
// Atajos de debugging
const debuggingShortcuts = {
  F8: "Continuar/Pausar",
  F10: "Step over",
  F11: "Step into",
  "Shift + F11": "Step out",
  "Ctrl + F8": "Desactivar breakpoints"
};
```

## Movimientos de Red 🌐

### Network Panel
```javascript
// Atajos de Network
const networkShortcuts = {
  "Ctrl + E": "Limpiar requests",
  "Ctrl + R": "Recargar normal",
  "Ctrl + Shift + R": "Recargar sin caché",
  "Ctrl + S": "Guardar HAR"
};
```

## Combos de Estilo 🎨

### Manipulación CSS
```javascript
// Atajos de estilos
const styleShortcuts = {
  "Alt + ↑/↓": "Incrementar/decrementar 0.1",
  "↑/↓": "Incrementar/decrementar 1",
  "Shift + ↑/↓": "Incrementar/decrementar 10",
  "Ctrl + Space": "Mostrar autocompletado"
};
```

## Técnicas Avanzadas 🔥

### Command Menu
```javascript
// Menú de comandos
const commandMenu = {
  "Ctrl + Shift + P": {
    description: "Abrir Command Menu",
    commands: [
      "Show Coverage",
      "Capture screenshot",
      "Toggle device mode"
    ]
  }
};
```

## Movimientos Rápidos ⚡

### Quick Access
| Acción | Windows/Linux | Mac |
|--------|---------------|-----|
| Device Mode | `Ctrl + Shift + M` | `Cmd + Shift + M` |
| Toggle Drawer | `Esc` | `Esc` |
| Settings | `F1` | `F1` |
| Help | `F1` | `Fn + F1` |

## Combos por Panel 🎯

### Elements
```javascript
// Atajos específicos
elements = {
  "Ctrl + F": "Buscar en DOM",
  "↑/↓": "Seleccionar elemento",
  "←/→": "Expandir/colapsar",
  "Enter": "Editar como HTML"
};
```

### Console
```javascript
// Atajos de consola
console = {
  "Ctrl + '": "Enfocar consola",
  "Ctrl + L": "Limpiar",
  "Alt + /": "Ir a línea anterior"
};
```

### Sources
```javascript
// Atajos de código
sources = {
  "Ctrl + O": "Buscar archivo",
  "Ctrl + G": "Ir a línea",
  "Ctrl + S": "Guardar cambios"
};
```

## Power-Ups de Productividad 🚀

### Snippets
```javascript
// Atajos de snippets
snippets = {
  "Ctrl + Shift + O": "Crear snippet",
  "Ctrl + Enter": "Ejecutar snippet",
  "Ctrl + S": "Guardar snippet"
};
```

## Logros de Teclado 🏆

### Novato
- [x] Abrir DevTools
- [x] Navegar paneles
- [x] Usar búsqueda

### Experto
- [ ] Dominar debugging
- [ ] Usar Command Menu
- [ ] Crear snippets

## Recursos de Entrenamiento 📚

### Documentación
- [Referencia completa de atajos](https://developers.google.com/web/tools/chrome-devtools/shortcuts)
- [Guía de productividad](https://developers.google.com/web/tools/chrome-devtools/productivity)

:::tip Poder Secreto
Mantén presionada la tecla `Alt` mientras navegas por los menús para descubrir atajos ocultos.
:::

:::warning Zona de Peligro
Algunos atajos pueden variar según tu sistema operativo y la disposición de tu teclado.
::: 