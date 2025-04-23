# Primeros Pasos con DevTools 🎮

## Nivel 1: Acceso Rápido 🚀

### Formas de Abrir DevTools
```javascript
// Método 1: Click Derecho
Click derecho > Inspeccionar

// Método 2: Atajos de Teclado
Windows/Linux: F12
macOS: Cmd + Option + I

// Método 3: Menú Chrome
Menú > Más Herramientas > Herramientas de desarrollo
```

## Nivel 2: Interfaz Básica 🎨

### Paneles Principales
```javascript
// 1. Elements - Para DOM y CSS
elements = {
  dom: "Estructura HTML",
  styles: "CSS aplicado",
  computed: "Estilos calculados"
}

// 2. Console - Para JavaScript
console = {
  logs: "Mensajes y errores",
  commands: "Ejecutar código",
  debug: "Depuración básica"
}

// 3. Network - Para solicitudes
network = {
  requests: "Peticiones HTTP",
  performance: "Tiempos de carga",
  headers: "Información de red"
}
```

## Nivel 3: Primeras Acciones 🎯

### 1. Inspeccionar Elementos
```html
<!-- Paso 1: Seleccionar elemento -->
<div class="mi-elemento">
  Haz click en el icono 🔍 y selecciona esto
</div>

<!-- Paso 2: Ver estilos -->
<style>
  .mi-elemento {
    color: blue;
    padding: 10px;
  }
</style>
```

### 2. Usar la Consola
```javascript
// Prueba estos comandos:
console.log('¡Hola DevTools!');
document.title = 'Mi Página';
$('h1').style.color = 'red';
```

### 3. Monitorear Red
```javascript
// 1. Abre el panel Network
// 2. Recarga la página (F5)
// 3. Observa las solicitudes
fetch('/api/datos')
  .then(response => console.log('¡Solicitud completada!'));
```

## Nivel 4: Personalización 🎨

### Tema y Disposición
```css
/* Cambiar tema */
devtools.theme = {
  light: "Tema claro",
  dark: "Tema oscuro"
};

/* Posición del panel */
devtools.dock = {
  right: "Derecha",
  bottom: "Abajo",
  separate: "Ventana separada"
};
```

## Power-Ups: Atajos Útiles ⚡

### Navegación Rápida
| Acción | Windows/Linux | Mac |
|--------|---------------|-----|
| Abrir DevTools | `F12` | `Cmd + Option + I` |
| Cambiar panel | `Ctrl + [` | `Cmd + [` |
| Buscar archivos | `Ctrl + P` | `Cmd + P` |
| Comando rápido | `Ctrl + Shift + P` | `Cmd + Shift + P` |

## Misiones de Práctica 🎯

### Misión 1: Inspector
```javascript
// Objetivo: Encuentra y modifica
// 1. Localiza el título de la página
// 2. Cambia su color
// 3. Modifica el texto
```

### Misión 2: Consola
```javascript
// Objetivo: Debug básico
// 1. Crea variables
let nombre = "Jugador1";
let nivel = 5;

// 2. Muestra información
console.log(`${nombre} - Nivel ${nivel}`);

// 3. Experimenta con comandos
```

### Misión 3: Network
```javascript
// Objetivo: Analizar carga
// 1. Activa Network
// 2. Recarga la página
// 3. Identifica recursos lentos
```

## Logros Desbloqueados 🏆

### Principiante
- [x] Abrir DevTools
- [x] Cambiar temas
- [x] Usar inspector

### Explorador
- [ ] Modificar DOM
- [ ] Usar console.log
- [ ] Ver network

## Próxima Aventura 🗺️

### Áreas a Explorar
1. Panel Elements en profundidad
2. Debugging avanzado
3. Análisis de rendimiento

## Recursos Extra 📚

### Documentación
- [Guía Oficial](https://developers.google.com/web/tools/chrome-devtools)
- [Tutoriales](https://developers.google.com/web/tools/chrome-devtools/javascript)
- [Tips y Trucos](https://developers.google.com/web/tools/chrome-devtools/tips)

:::tip Consejo Pro
Mantén DevTools abierto mientras desarrollas para ver cambios en tiempo real.
:::

:::warning ¡Cuidado!
Los cambios en el panel Elements son temporales. ¡No olvides guardarlos en tu código! 