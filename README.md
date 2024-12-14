1. # README - Actividades del Día

   ## 1. **Configuración de TypeScript**

   ### Instalación de TypeScript

   Para comenzar, instala TypeScript globalmente en tu sistema usando `npm`:

   ```bash
   bash
   
   
   Copy code
   npm install -g typescript
   ```

   ### Inicialización del Proyecto TypeScript

   Crea un archivo de configuración `tsconfig.json` para tu proyecto. Esto se puede hacer fácilmente con el comando:

   ```bash
   bash
   
   
   Copy code
   tsc --init
   ```

   Este comando generará un archivo `tsconfig.json` en tu directorio de trabajo, donde puedes personalizar las opciones de compilación.

   ### Activar el Modo Observador

   Para compilar automáticamente tus archivos TypeScript cada vez que se realicen cambios, utiliza el siguiente comando:

   ```bash
   bash
   
   
   Copy code
   tsc -w
   ```

   Esto compilará continuamente cualquier cambio en tus archivos `.ts` y generará los archivos `.js` correspondientes.

   ------

   ## 2. **Control de Rango y Visualización en Tiempo Real**

   - Se implementó un control deslizante (slider) que actualiza en tiempo real el valor mostrado en un span adyacente.
   - Se configuró un sistema para posicionar dinámicamente el marcador visual del slider (`rangeBullet`) según el valor seleccionado.
   - El estilo y la funcionalidad del slider están integrados con TypeScript.

   ## 3. **Almacenamiento de Valores y Cálculo del Promedio**

   - Se creó una lista (`mylist`) para almacenar hasta 10 valores seleccionados con el slider.
   - Se desarrolló un botón **SAVE** que guarda el valor actual del slider en la lista y actualiza el contador de iteraciones en pantalla.
   - Una vez que se completaron las 10 iteraciones:
     - Se calculó el promedio de los valores.
     - Los resultados fueron mostrados en pantalla.
     - La lista de valores fue ordenada utilizando el método `sort()`.

   ## 4. **Reinicio de la Aplicación**

   - Se implementó una función `clerdata()` que reinicia la aplicación simulando un recargado de página (como un `F5`) usando `location.reload()`.

   ## 5. **Uso de Variables CSS**

   - Se trabajó con variables CSS (`--size-m`) para definir tamaños reutilizables.
   - Se utilizó `-var(--size-m)` para aplicar un valor negativo derivado de la variable positiva.
   - Se discutió la flexibilidad y beneficios del uso de CSS Variables y alternativas como `calc()` para realizar cálculos dinámicos.

   ## 6. **Mejoras Visuales**

   - Se añadió un estilo más llamativo al título utilizando gradientes, sombras, y transiciones.
   - Se ajustó el diseño del slider y sus elementos para una mejor experiencia de usuario.

   ------

   ### **Puntos Clave Aprendidos**

   1. Configuración y uso de TypeScript en proyectos.
   2. Integración de TypeScript para manejar interactividad en el DOM.
   3. Uso efectivo de variables CSS para valores dinámicos.
   4. Métodos en listas (`sort`, acceso por índices) y su implementación en lógica.
   5. Manejo de eventos en botones y controles de entrada.
   6. Simulación de reinicio de estado en aplicaciones web.