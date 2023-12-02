# win7dialogs

Window dialogs with Windows 7 styles.

## Online demo

Go to online demonstration now at:

 - [https://allnulled.github.io/win7dialogs](https://allnulled.github.io/win7dialogs)

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
const accept = await window.win7dialogs.inform({
    title: "Acceptance",
    message: "<p>You can only accept</p>",
    footer: "A normal dialog"
});
```

A dialog that asks for confirmation:

```js
const confirmation = await window.win7dialogs.confirm({
    title: "Confirmation",
    message: "<p>Accept or reject</p>",
    footer: "A dialog of confirmation"
});
console.log("Confirmed: " + confirmation);
```

A dialog that asks for name and surname:

```js
const { name, surname } = await window.win7dialogs.form({
    title: "Diálogo de nombre",
    message: ""
    + "<div>"
    + "  <div>"
    + "    <div>Write your name.</div>"
    + "    <input type='text' name='name' placeholder='Nombre aquí' style='width:100%;' />"
    + "  </div>"
    + "  <div>"
    + "    <div>Write your surname.</div>"
    + "    <input type='text' name='surname' placeholder='Apellido aquí' style='width:100%;' />"
    + "  </div>"
    + "  <div>"
    + "    <button>Accept</button>"
    + "  </div>"
    + "</div>",
    footer: "Un diálogo donde se pide el nombre"
});
console.log("Name: " + name);
console.log("Surname: " + surname);
```

The `message` is built inside a `<form>`.

This way, when you click on a button without `onclick` event, by default the `form` is submited.

That `onsubmit` event is captured.

That event is going to *resolve* the dialog with `Win7Dialogs.resolve` static method.

To resolve it, all the form elements are extracted and mapped to their `value` property, or `files` property in case of `<input type="file" />`.

The property `name` of the inputs is used as label in the output object.

This way, all the form variables appear in the output object.