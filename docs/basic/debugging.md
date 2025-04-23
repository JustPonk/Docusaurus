---
sidebar_position: 2
---

# 🐞 Debugging - ¡Arreglando el Reino!

## 🔧 El Arte del Debugging

Debuggear es como ser un fontanero experto: ¡encontramos y arreglamos las fugas en nuestro código! Vamos a aprender las herramientas esenciales para mantener nuestro reino funcionando perfectamente.

## 🎯 Puntos de Interrupción (Breakpoints)

### Colocando Breakpoints
```javascript
function saltarObstaculo() {
  // Coloca un breakpoint aquí para ver por qué Mario no salta
  const fuerzaSalto = calcularFuerza();
  const altura = aplicarGravedad(fuerzaSalto);
  return altura;
}
```

### Tipos de Breakpoints
1. **Breakpoint de Línea** - Como una tubería de parada
2. **Breakpoint Condicional** - Solo se activa bajo ciertas condiciones
```javascript
// Se detiene solo cuando Mario tiene una estrella
if (mario.tieneEstrella) {
  console.log('¡Mario es invencible!');
}
```

## 🎮 Panel de Control

### Watch Expressions
```javascript
// Observa estas variables
mario.vidas
mario.monedas
mario.powerUpActivo
```

### Call Stack
```javascript
function saltar() {
  aplicarFuerza();
}

function aplicarFuerza() {
  calcularTrayectoria();
} // <- Ver la pila de llamadas
```

## 🌟 Herramientas Especiales

### Console.log con Estilo
```javascript
// Mensajes con estilo Mario Bros
console.log('%c¡Es-a me, Mario!', `
  color: #e52521;
  font-family: 'Press Start 2P';
  font-size: 20px;
  text-shadow: 2px 2px #000;
`);
```

### Debugger Statement
```javascript
function verificarColision() {
  debugger; // Pausa automática, como presionar START
  const colision = detectarImpacto();
  return colision;
}
```

## 🎯 Ejercicios de Debugging

1. **Misión: El Salto Misterioso**
```javascript
function saltoMisterioso() {
  let altura = 0;
  for (let i = 0; i < 5; i++) {
    altura += i * 2; // ¿Por qué no alcanza la altura correcta?
  }
  return altura;
}
```

2. **Desafío: La Moneda Perdida**
```javascript
function recolectarMonedas() {
  let monedas = [];
  // Usa breakpoints para encontrar la moneda que falta
  monedas.push('🪙');
  if (condicionSecreta) {
    monedas.push('⭐');
  }
  return monedas;
}
```

## 💡 Tips Pro

:::tip ¡Power-Up de Debugging!
Usa `console.table()` para ver arrays y objetos en formato de tabla, ¡como el marcador de puntuación!
:::

:::warning ¡Bowser Alert!
No dejes `console.log()` en producción, ¡son como Bowser en el castillo equivocado!
:::

## 🎮 Técnicas Avanzadas

### Logging con Niveles
```javascript
const DEBUG = {
  INFO: '🍄',
  WARN: '⭐',
  ERROR: '👻'
};

function log(nivel, mensaje) {
  console.log(`${DEBUG[nivel]} ${mensaje}`);
}
```

### Performance Profiling
```javascript
console.time('Nivel 1-1');
cargarNivel();
console.timeEnd('Nivel 1-1');
```

## 🏁 Checklist del Debugger Pro

- [ ] Aprender atajos de teclado
- [ ] Dominar los breakpoints
- [ ] Usar watch expressions
- [ ] Entender el call stack
- [ ] Practicar con console methods

## 🎮 Siguiente Nivel
¡Avanza al siguiente mundo para aprender sobre el rendimiento y optimización! 