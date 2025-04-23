# Panel de Estilos

El Panel de Estilos es una herramienta fundamental en Chrome DevTools que te permite ver y modificar los estilos CSS de cualquier elemento en la página.

## Interfaz Principal

El panel de estilos muestra todos los estilos CSS aplicados al elemento seleccionado, organizados por especificidad y origen.

![Panel de Estilos](/img/styles.jpg)

## Características Principales

### 1. Edición en Tiempo Real
- Modificar propiedades existentes
- Agregar nuevas propiedades
- Ver cambios instantáneamente
- Autocompletado de propiedades y valores

### 2. Selectores y Especificidad
- Ver la cascada de estilos
- Entender la especificidad de selectores
- Identificar estilos sobrescritos
- Resolver conflictos de CSS

### 3. Estados del Elemento
- :hover
- :active
- :focus
- :visited
- Otros pseudo-estados

## Panel Computed

El panel Computed muestra los estilos finales aplicados después de que todas las reglas CSS han sido procesadas.

![Panel Computed](/img/computed.jpg)

### Características del Panel Computed
1. Ver valores calculados finales
2. Identificar origen de cada propiedad
3. Filtrar propiedades
4. Copiar valores computados

## Layout y Box Model

La sección de layout te permite visualizar y modificar las dimensiones y espaciado de los elementos.

![Panel Layout](/img/layout.jpg)

### Funcionalidades de Layout
1. Visualización del modelo de caja
2. Edición de márgenes y padding
3. Dimensiones del elemento
4. Posicionamiento

## Mejores Prácticas

### 1. Organización de Estilos
- Mantener selectores simples
- Usar clases en lugar de IDs cuando sea posible
- Agrupar propiedades relacionadas
- Comentar secciones complejas

### 2. Debugging de Estilos
- Usar el toggle de propiedades
- Verificar la cascada de estilos
- Identificar conflictos rápidamente
- Utilizar filtros de propiedades

### 3. Optimización
- Eliminar estilos no utilizados
- Reducir la especificidad cuando sea posible
- Mantener la coherencia en nombres de clases
- Documentar cambios importantes

## Ejercicios Prácticos

### Ejercicio 1: Inspección de Estilos
1. Seleccionar un elemento en la página
2. Identificar todos sus estilos aplicados
3. Encontrar estilos sobrescritos
4. Modificar valores existentes

### Ejercicio 2: Box Model
1. Analizar el modelo de caja
2. Modificar márgenes y padding
3. Ajustar dimensiones
4. Observar cambios en tiempo real

### Ejercicio 3: Debugging
1. Encontrar conflictos de estilos
2. Resolver problemas de especificidad
3. Optimizar selectores
4. Documentar cambios realizados

## Atajos de Teclado Útiles

| Acción | Windows/Linux | Mac |
|--------|---------------|-----|
| Abrir DevTools | `Ctrl + Shift + I` | `Cmd + Option + I` |
| Seleccionar elemento | `Ctrl + Shift + C` | `Cmd + Shift + C` |
| Buscar en estilos | `Ctrl + F` | `Cmd + F` |
| Incrementar valor | `↑` | `↑` |
| Decrementar valor | `↓` | `↓` |

:::tip Consejo Pro
Usa el modificador `Shift` con las flechas arriba/abajo para incrementar/decrementar valores en 10 unidades.
:::

## Recursos Adicionales

### Documentación Oficial
- [CSS Reference](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference)
- [Chrome DevTools CSS Features](https://developers.google.com/web/tools/chrome-devtools/css)
- [CSS Specifications](https://www.w3.org/Style/CSS/specs.en.html)

### Herramientas Complementarias
- ColorPicker incorporado
- Sugerencias de valores
- Visualización de fuentes
- Paletas de colores 