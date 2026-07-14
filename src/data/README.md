# Como editar el portfolio

## Cambiar textos o datos de un proyecto

Edita `src/data/portfolio.js`.

Dentro de `projects` cada producto es un objeto. Para modificar un producto, cambia sus campos:

- `title`: nombre visible del proyecto.
- `year`: ano del proyecto.
- `discipline`: categoria que sale en la tarjeta.
- `summary`: resumen de la pagina del proyecto.
- `modalText`: texto corto del pop up.
- `challenge` y `solution`: bloques de la pagina completa.
- `highlights`: lista de puntos destacados del pop up.
- `specs`: datos tecnicos.
- `gallery`: imagenes de la galeria.
- `logo`: logo que aparece en la tarjeta del proyecto.
- `logoHover`: logo alternativo al pasar el raton por la tarjeta.
- `document`: PDF principal.
- `plans`: PDFs de planos.

## Anadir un proyecto nuevo

1. Crea una carpeta en `src/assets/projects/` con un identificador simple, por ejemplo `nuevo-proyecto`.
2. Dentro, usa esta estructura:

```text
nuevo-proyecto/
  documents/
  images/
  logo/
  plans/
  renders/
```

3. Duplica el objeto de `toca-a-tiempo` en `src/data/portfolio.js`.
4. Cambia el `id`, textos y rutas. El `id` debe coincidir con el nombre de la carpeta.

Ejemplo de ruta:

```js
cover: projectAsset("nuevo-proyecto", "images/portada.jpg")
```

## Cambiar datos personales

En `src/data/portfolio.js`, edita:

- `profile`: nombre, rol, curriculum, contacto y about.
- `programs`: programas y logos.
- `languages`: idiomas.
- `hobbies`: hobbies.
