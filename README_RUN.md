# Cómo ejecutar el proyecto Tienda PadelBox

## 1. Instalación inicial

Este proyecto utiliza Node.js para gestionar los scripts de construcción (generación de datos).

1. Asegúrate de tener **Node.js** instalado.
2. Abre una terminal en la carpeta del proyecto.
3. Ejecuta el siguiente comando para instalar las dependencias necesarias:

```bash
npm install
```

## 2. Generar los datos de las paletas

El sitio web lee la información de las paletas desde el archivo `paletas.json`. Este archivo se genera automáticamente a partir de los archivos que están en la carpeta `content/paletas/`.

Cada vez que agregues, modifiques o borres una paleta (archivo .md), debes actualizar el archivo JSON.

**Opción A: Generación única**
Ejecuta esto cuando hagas cambios:
```bash
npm run build
```

**Opción B: Modo observación (Automático)**
Puedes dejar este comando corriendo mientras trabajas. Actualizará el archivo JSON automáticamente cada vez que cambies un archivo .md:
```bash
npm run dev
```

## 3. Visualizar el sitio web

Una vez generado el archivo `paletas.json`, puedes ver el sitio web utilizando cualquier servidor web local.

*   **Live Server (Recomendado):** Si usas VS Code, la extensión "Live Server" funciona perfectamente. Solo haz clic derecho en `index.html` y selecciona "Open with Live Server".
*   **Python:** O puedes usar python en la terminal: `python3 -m http.server` y abrir `http://localhost:8000`.

## Resumen del flujo de trabajo

1. Agrega una nueva paleta en `content/paletas/nueva-paleta.md`.
2. Ejecuta `npm run build` en la terminal (o ten `npm run dev` corriendo).
3. Recarga tu navegador (Live Server) para ver los cambios.
