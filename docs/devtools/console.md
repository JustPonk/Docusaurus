# Panel Console

La consola es una herramienta esencial para debugging y desarrollo. Aquí aprenderás a utilizarla efectivamente.

## Vista General

![Panel Console](/img/consola.jpg)

## Tipos de Mensajes

### Mensajes Básicos
```javascript
// Mensaje normal
console.log('Hola mundo');

// Mensaje informativo (ℹ️)
console.info('Esto es información');

// Mensaje de advertencia (⚠️)
console.warn('Esto es una advertencia');

// Mensaje de error (❌)
console.error('Esto es un error');
```

### Estilizando Mensajes
```javascript
// Mensaje con CSS
console.log('%cHola Mundo', 'color: blue; font-size: 20px; font-weight: bold;');

// Múltiples estilos
console.log(
  '%cTexto Rojo %cTexto Verde', 
  'color: red; font-size: 16px;',
  'color: green; font-weight: bold;'
);
```

## Grupos y Tablas

### Agrupando Mensajes
```javascript
// Grupo expandido
console.group('Detalles del Usuario');
console.log('Nombre: Juan');
console.log('Edad: 25');
console.log('Ciudad: Madrid');
console.groupEnd();

// Grupo colapsado
console.groupCollapsed('Información Adicional');
console.log('Teléfono: 123456789');
console.log('Email: juan@ejemplo.com');
console.groupEnd();
```

### Tablas de Datos
```javascript
const usuarios = [
  { nombre: 'Juan', edad: 25, ciudad: 'Madrid' },
  { nombre: 'Ana', edad: 30, ciudad: 'Barcelona' },
  { nombre: 'Carlos', edad: 28, ciudad: 'Valencia' }
];

console.table(usuarios);
```

## Debugging Avanzado

### Contadores y Temporizadores
```javascript
// Contador
console.count('botón-click');    // botón-click: 1
console.count('botón-click');    // botón-click: 2
console.countReset('botón-click');

// Temporizador
console.time('búsqueda');
// ... código a medir
console.timeEnd('búsqueda');     // búsqueda: 1.234ms
```

### Stack Trace y Assertions
```javascript
// Stack trace
function funcionC() {
  console.trace('¿Quién me llamó?');
}
function funcionB() {
  funcionC();
}
function funcionA() {
  funcionB();
}
funcionA();

// Assertions
console.assert(1 === 1, 'Esto no se mostrará');
console.assert(1 === 2, 'Esto se mostrará como error');
```

## Selectores del DOM

```javascript
// Seleccionar un elemento (como querySelector)
$('h1')              // Retorna el primer h1
$$('p')              // Retorna todos los párrafos

// Monitorear eventos
monitorEvents($('button'), ['click', 'mouseover']);

// Último elemento seleccionado en el panel Elements
$0                   // Elemento actual
$1                   // Elemento anterior
```

## Filtros de Consola

### Sintaxis de Filtros
```javascript
// En la barra de filtros de la consola:

// Por tipo de mensaje
error                // Solo errores
warn                // Solo advertencias
info                // Solo información
log                 // Solo logs normales

// Por texto
/api/               // Mensajes que contengan "api"
-webpack            // Excluir mensajes con "webpack"

// Por nivel
debug               // Mensajes de nivel debug
verbose             // Mensajes detallados
```

## Ejercicios Prácticos

### Ejercicio 1: Logging Creativo
```javascript
// 1. Crea un mensaje con múltiples estilos
console.log(
  '%cBienvenido %ca %cDevTools', 
  'color: blue; font-size: 20px;',
  'color: black; font-size: 16px;',
  'color: red; font-size: 20px; font-weight: bold;'
);

// 2. Crea una tabla de datos
const productos = [
  { id: 1, nombre: 'Laptop', precio: 999 },
  { id: 2, nombre: 'Mouse', precio: 25 },
  { id: 3, nombre: 'Teclado', precio: 50 }
];
console.table(productos);
```

### Ejercicio 2: Debugging
```javascript
// 1. Mide el tiempo de un bucle
console.time('bucle');
for(let i = 0; i < 1000000; i++) {
  // Operación costosa
}
console.timeEnd('bucle');

// 2. Usa assertions para validar
const edad = 15;
console.assert(edad >= 18, 'El usuario es menor de edad');
```

## Atajos de Teclado

| Acción | Windows/Linux | Mac |
|--------|---------------|-----|
| Abrir Consola | `Ctrl + Shift + J` | `Cmd + Option + J` |
| Limpiar Consola | `Ctrl + L` | `Cmd + K` |
| Ejecutar Comando | `Enter` | `Enter` |
| Historial Anterior | `↑` | `↑` |

:::tip Consejo Pro
Usa `Shift + Enter` para crear líneas múltiples en la consola sin ejecutar el código.
:::

## Mejores Prácticas

### 1. Organización
```javascript
// Usar grupos para relacionar mensajes
console.group('Datos de Usuario');
console.log('Cargando...');
console.info('Datos recibidos');
console.groupEnd();

// Usar niveles apropiados
console.info('Aplicación iniciada');  // Información general
console.warn('Cache no disponible');  // Advertencias
console.error('Error de conexión');   // Errores críticos
```

### 2. Debugging Efectivo
```javascript
// Usar puntos de interrupción condicionales
// En el código:
if (condición) {
  debugger;
}

// Monitorear cambios en variables
console.log({variable1, variable2}); // Objeto con nombres de variables

// Usar etiquetas descriptivas
console.time('⌛ Tiempo de carga');
// ... código
console.timeEnd('⌛ Tiempo de carga');
```

## Recursos Adicionales

### Enlaces Útiles
- [Console API Reference](https://developers.google.com/web/tools/chrome-devtools/console/api)
- [Console Utilities API](https://developers.google.com/web/tools/chrome-devtools/console/utilities)
- [Command Line Reference](https://developers.google.com/web/tools/chrome-devtools/console/command-line-reference) 