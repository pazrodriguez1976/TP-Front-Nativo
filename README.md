# PAZ Pulseras - Catálogo y Ventas (SPA)

Este repositorio contiene la entrega del Trabajo Práctico de maquetación web e integración de APIs. 

El proyecto simula una tienda de joyería utilizando el modelo de **Single Page Application (SPA)**, permitiendo navegar entre el catálogo local y productos importados sin recargar la página.

## Características Principales

* **Modelo SPA:** Navegación dinámica entre el catálogo de "PAZ Pulseras" y la sección de "Ventas Exclusivas" mediante manipulación del DOM con JavaScript.
* **Integración de API Externa:** Uso de `fetch` asíncrono para consumir datos en tiempo real de *FakeStore API* (limitado a 6 productos para mantener la integridad del diseño de la grilla).
* **Arquitectura Modular:** Uso de ES6 Modules (`import`/`export`) separando la lógica de la aplicación (`script.js`) de los datos locales (`data.mjs`).
* **Diseño Responsivo:** Maquetación con CSS puro, utilizando Flexbox/Grid, esquema de colores de la marca y bordes personalizados.

## Cómo visualizar el proyecto

** IMPORTANTE SOBRE MÓDULOS Y FETCH:**
Debido a las políticas de seguridad de los navegadores (CORS) con los Módulos de JS y peticiones Fetch, el proyecto **no funcionará haciendo doble clic en el archivo `index.html` (protocolo file:///)**.

Para evaluarlo correctamente, tienes dos opciones:

**Opción 1 (Recomendada - Online):**
Visitar el despliegue en vivo del proyecto a través de GitHub Pages:
**https://pazrodriguez1976.github.io/TP-Front-Nativo/**

**Opción 2 (Local):**
1. Clonar este repositorio.
2. Abrir la carpeta en Visual Studio Code.
3. Ejecutar el proyecto utilizando la extensión **Live Server** (para que corra sobre el protocolo `http://127.0.0.1`).

## Estructura de Archivos
* `index.html`: Estructura principal y contenedor SPA.
* `style.css`: Estilos visuales.
* `script.js`: Lógica principal, peticiones asíncronas y renderizado SPA.
* `data.mjs`: Base de datos local simulada del catálogo.
