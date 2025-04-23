# Panel Sources 🔍

El panel Sources es tu centro de control para debugging de JavaScript, permitiéndote examinar y modificar el código fuente de tu aplicación.

## Estructura del Panel 📁

### Árbol de Archivos
```plaintext
├── src/
│   ├── js/
│   │   ├── main.js
│   │   └── utils.js
│   ├── css/
│   │   └── styles.css
│   └── index.html
```

## Debugging Básico 🐛

### Puntos de Interrupción
```javascript
// 1. Breakpoint en línea de código
debugger;

// 2. Breakpoint condicional
// Click derecho en el número de línea:
if (contador > 10) {
  console.log('Valor alto');
}

// 3. Breakpoint de evento
// En el panel Event Listener Breakpoints:
// - click
// - keydown
// - etc.
```

### Navegación del Debugger ⚡

| Acción | Atajo | Descripción |
|--------|-------|-------------|
| Continuar | `F8` | Continúa hasta el siguiente breakpoint |
| Step Over | `F10` | Salta sobre la función actual |
| Step Into | `F11` | Entra en la función |
| Step Out | `Shift + F11` | Sale de la función actual |
| Deactivate Breakpoints | `Ctrl + F8` | Desactiva todos los breakpoints |

## Debugging Avanzado 🚀

### Watch Expressions
```javascript
// Agregar expresiones para monitorear
myVariable          // Variable simple
user.name          // Propiedad de objeto
array.length       // Longitud de array
!isValid           // Expresión booleana
```

### Scope Variables
```javascript
// Variables disponibles en diferentes ámbitos
function ejemplo() {
  let local = 'local';      // Scope local
  if (true) {
    let bloque = 'bloque';  // Scope de bloque
  }
}
const global = 'global';    // Scope global
```

### Call Stack
```javascript
function funcionC() {
  console.log('C');
}

function funcionB() {
  funcionC();
}

function funcionA() {
  funcionB();
}

funcionA();
// Call Stack:
// - funcionC
// - funcionB
// - funcionA
```

## Snippets de Código 📝

### Crear y Ejecutar Snippets
```javascript
// Snippet: monitorearRendimiento.js
console.time('operación');
// Tu código aquí
console.timeEnd('operación');

// Snippet: limpiarDatos.js
localStorage.clear();
sessionStorage.clear();
console.log('Storage limpio');
```

## Workspaces 💼

### Configurar Workspace Local
```javascript
// 1. Agregar carpeta al workspace
// 2. Permitir acceso al DevTools
// 3. Mapear archivos fuente
```

### Live Editing
```javascript
// Los cambios se guardan automáticamente
// en los archivos locales cuando:
// 1. Editas en Sources
// 2. Guardas (Ctrl + S)
```

## Debugging Asíncrono 🔄

### Async/Await
```javascript
async function fetchData() {
  try {
    const response = await fetch('/api/data');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
  }
}
```

### Promises
```javascript
fetch('/api/users')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));
```

## Source Maps 🗺️

### Configuración
```javascript
// webpack.config.js
module.exports = {
  devtool: 'source-map',
  // ...
};
```

### Debugging con Source Maps
```javascript
// Archivo original
function ejemplo() {
  console.log('Debug en archivo fuente');
}

// Archivo minificado
function e(){console.log("Debug en archivo fuente")}
```

## Ejercicios Prácticos 💪

### 1. Debugging Básico
```javascript
// 1. Establecer breakpoint
function calcular(a, b) {
  let resultado = a + b;
  if (resultado > 10) {
    resultado *= 2;
  }
  return resultado;
}

// 2. Inspeccionar variables
// 3. Usar step over/into
```

### 2. Debugging Asíncrono
```javascript
async function cargarDatos() {
  const datos = await fetchData();
  procesarDatos(datos);
}

// 1. Establecer breakpoints
// 2. Examinar promesas
// 3. Verificar respuestas
```

## Mejores Prácticas 🌟

### 1. Organización
- Usar nombres descriptivos para breakpoints
- Mantener snippets organizados
- Documentar puntos de debug importantes

### 2. Performance
- Limitar número de breakpoints
- Usar breakpoints condicionales
- Desactivar breakpoints no usados

### 3. Colaboración
- Compartir snippets útiles
- Documentar problemas encontrados
- Mantener source maps actualizados

## Consejos Pro 💡

### Debugging Eficiente
```javascript
// 1. Usar console.table para datos tabulares
console.table([
  { id: 1, nombre: 'Juan' },
  { id: 2, nombre: 'Ana' }
]);

// 2. Agrupar logs relacionados
console.group('Datos Usuario');
console.log('Nombre:', usuario.nombre);
console.log('Email:', usuario.email);
console.groupEnd();
```

### Atajos Personalizados
```javascript
// Crear snippet con atajo:
// 1. Crear snippet
// 2. Usar Command Menu (Ctrl + Shift + P)
// 3. Asignar atajo personalizado
```

## Recursos Adicionales 📚

### Documentación
- [Chrome DevTools Protocol](https://chromedevtools.github.io/devtools-protocol/)
- [JavaScript Debugging Reference](https://developers.google.com/web/tools/chrome-devtools/javascript/reference)

### Herramientas Complementarias
1. VS Code Debugger
2. React/Vue DevTools
3. Performance Profiler

:::tip Consejo Pro
Usa `console.trace()` para ver la pila de llamadas completa en cualquier punto del código.
:::

:::warning Importante
Asegúrate de deshabilitar los breakpoints cuando termines de debuggear para no afectar el rendimiento en producción.
::: 