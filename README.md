# win7dialogs

Diálogos con ventanas tipo Windows 7.

## Instalación

Primero, clonar el repositorio de git.

Segundo, importar en el proyecto estos 2 ficheros:

 - [`docs/lib/win7dialogs/win7dialogs.js`](docs/lib/win7dialogs/win7dialogs.js)
 - [`docs/lib/win7dialogs/win7dialogs.css`](docs/lib/win7dialogs/win7dialogs.css)

Tercero, cerciorarse que se tiene importado el css del proyecto [`win7.css`](https://khang-nd.github.io/7.css/) en el HTML.

```html
<link href="lib/win7/win7.scoped.css" type="text/css" />
```

Cuarto y último, incorporar en el HTML estas 2 librerías:

```html
<link href="lib/win7dialogs/win7dialogs.css" type="text/css" />
<script src="lib/win7dialogs/win7dialogs.js"></script>
```

## Uso

Un diálogo que acepta:

```js
const aceptar = await window.win7dialogs.open({
    title: "Diálogo de aceptación",
    message: "<button>Aceptar</button>",
    footer: "Un diálogo normal"
});
```

Un diálogo que pide nombre y contraseña.

```js
const formulario_de_nombre = await window.win7dialogs.open({
    title: "Diálogo de nombre",
    message: ""
    + "<div>"
    + "  <div>"
    + "    <div>Pon tu nombre.</div>"
    + "    <input type='text' name='nombre' placeholder='Nombre aquí' style='width:100%;' />"
    + "  </div>"
    + "  <div>"
    + "    <div>Pon tu apellido.</div>"
    + "    <input type='text' name='apellido' placeholder='Apellido aquí' style='width:100%;' />"
    + "  </div>"
    + "  <div>"
    + "    <button>Aceptar</button>"
    + "  </div>"
    + "</div>",
    footer: "Un diálogo donde se pide el nombre"
});
const nombre = formulario_de_nombre.elements[0].value;
const contrasenya = formulario_de_nombre.elements[1].value;
console.log("Nombre: " + nombre);
console.log("Contraseña: " + contrasenya);

```