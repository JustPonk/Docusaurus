# Panel Network

El panel Network es fundamental para analizar el rendimiento y depurar las solicitudes de red de tu aplicación web.

## Vista General

![Panel Network](/img/network.jpg)

## Análisis de Solicitudes

### Tipos de Solicitudes
```http
GET /api/users HTTP/1.1          // Obtener datos
POST /api/users HTTP/1.1         // Crear datos
PUT /api/users/1 HTTP/1.1        // Actualizar datos
DELETE /api/users/1 HTTP/1.1     // Eliminar datos
```

### Headers Comunes
```http
// Request Headers
Accept: application/json
Content-Type: application/json
Authorization: Bearer token123

// Response Headers
Content-Type: application/json
Cache-Control: max-age=3600
Access-Control-Allow-Origin: *
```

## Análisis de Rendimiento

### Línea de Tiempo de Solicitud
```plaintext
DNS Lookup       ██░░░░░░░░░░░░  (~20ms)
Initial Connection ░░██░░░░░░░░░░  (~40ms)
SSL Handshake    ░░░░██░░░░░░░░  (~100ms)
Time to First Byte ░░░░░░██░░░░░░  (~150ms)
Content Download  ░░░░░░░░██░░░░  (~200ms)
```

### Métricas Clave
```javascript
// Tiempos típicos a optimizar
const metricas = {
  dnsLookup: '20ms',      // Búsqueda DNS
  tcpConnect: '40ms',     // Conexión TCP
  sslHandshake: '100ms',  // Negociación SSL
  ttfb: '150ms',         // Time to First Byte
  download: '200ms'      // Descarga de contenido
};
```

## Filtrado y Búsqueda

### Filtros Predefinidos
```plaintext
// Por tipo de recurso
XHR         // Solicitudes XMLHttpRequest/Fetch
JS         // Archivos JavaScript
CSS        // Hojas de estilo
Img        // Imágenes
Media      // Archivos multimedia
Font       // Fuentes web
Doc        // Documentos HTML
WS         // WebSockets
```

### Filtros Personalizados
```plaintext
// Ejemplos de filtros
larger-than: 100kb    // Archivos mayores a 100KB
status-code: 404     // Respuestas con error 404
mime-type: image/*   // Todas las imágenes
has-response-header: Cache-Control  // Con header específico
```

## Manipulación de Solicitudes

### Interceptar Solicitudes
```javascript
// En la consola de DevTools
await fetch('/api/users', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    name: 'Juan',
    email: 'juan@ejemplo.com'
  })
});
```

### Simular Condiciones de Red
```javascript
// Condiciones de red disponibles
const condiciones = {
  'Offline': 'Sin conexión',
  'Slow 3G': {
    latency: '400ms',
    downloadSpeed: '500kb/s',
    uploadSpeed: '250kb/s'
  },
  'Fast 3G': {
    latency: '150ms',
    downloadSpeed: '1.5mb/s',
    uploadSpeed: '750kb/s'
  }
};
```

## Ejercicios Prácticos

### Ejercicio 1: Análisis de Carga
```javascript
// 1. Analizar tiempo de carga
console.time('cargaPagina');
window.addEventListener('load', () => {
  console.timeEnd('cargaPagina');
});

// 2. Verificar recursos grandes
// Filtrar: larger-than:1mb
```

### Ejercicio 2: Depuración de API
```javascript
// 1. Monitorear llamadas a API
const response = await fetch('/api/datos');
console.log({
  status: response.status,
  headers: Object.fromEntries(response.headers),
  body: await response.json()
});

// 2. Simular errores
// Usar el panel Network para simular respuestas 404/500
```

## Mejores Prácticas

### 1. Optimización
```javascript
// Verificar headers de caché
const headers = {
  'Cache-Control': 'max-age=31536000',
  'ETag': '"33a64df551425fcc55e4d42a148795d9f25f89d4"'
};

// Comprimir respuestas
const compressionHeaders = {
  'Content-Encoding': 'gzip',
  'Vary': 'Accept-Encoding'
};
```

### 2. Seguridad
```javascript
// Headers de seguridad recomendados
const securityHeaders = {
  'Strict-Transport-Security': 'max-age=31536000',
  'Content-Security-Policy': "default-src 'self'",
  'X-Content-Type-Options': 'nosniff',
  'X-Frame-Options': 'SAMEORIGIN'
};
```

## Atajos de Teclado

| Acción | Windows/Linux | Mac |
|--------|---------------|-----|
| Abrir Network | `Ctrl + Shift + E` | `Cmd + Option + E` |
| Limpiar | `Ctrl + E` | `Cmd + E` |
| Filtrar | `Ctrl + F` | `Cmd + F` |
| Preservar Log | `Ctrl + Shift + P` | `Cmd + Shift + P` |

:::tip Consejo Pro
Mantén presionado Shift mientras recargas la página para forzar una recarga sin caché.
:::

## Recursos Adicionales

### Enlaces Útiles
- [Network Analysis Reference](https://developers.google.com/web/tools/chrome-devtools/network)
- [Network Issues Guide](https://developers.google.com/web/tools/chrome-devtools/network/issues)
- [Resource Loading](https://developers.google.com/web/fundamentals/performance/resource-prioritization) 