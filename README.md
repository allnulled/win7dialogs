# win7dialogs

Window dialogs with Windows 7 styles.

## Installation

First, clone the repository from git.

```sh
git clone https://github.com/allnulled/win7dialogs.git .
```

Second, import these 2 files into your project:

 - [`docs/lib/win7dialogs/win7dialogs.js`](docs/lib/win7dialogs/win7dialogs.js)
 - [`docs/lib/win7dialogs/win7dialogs.css`](docs/lib/win7dialogs/win7dialogs.css)

Third, ensure the css from the project [`win7.css`](https://khang-nd.github.io/7.css/) is imported from your HTML.

```html
<link href="docs/lib/win7/win7.scoped.css" type="text/css" />
```

Fourth and last, import these 2 libraries from your HTML:

```html
<link href="docs/lib/win7dialogs/win7dialogs.css" type="text/css" />
<script src="docs/lib/win7dialogs/win7dialogs.js"></script>
```

The library does not use jQuery or anything else.

## Usage

A dialog that accepts:

```js
const accept = await window.win7dialogs.open({
    title: "Diálogo de aceptación",
    message: "<button>Aceptar</button>",
    footer: "Un diálogo normal"
});
```

A dialog that asks for name and surname:

```js
const { nombre, apellido } = await window.win7dialogs.open({
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
console.log("Nombre: " + nombre);
console.log("Apellido: " + apellido);
```

The `message` is built inside a `<form>`.

This way, when you click on a button without `onclick` event, by default the `form` is submited.

That `onsubmit` event is captured.

That event is going to *resolve* the dialog with `Win7Dialogs.resolve` static method.

To resolve it, all the form elements are extracted and mapped to their `value` property, or `files` property in case of `<input type="file" />`.

The property `name` of the inputs is used as label in the output object.

This way, all the form variables appear in the output object.