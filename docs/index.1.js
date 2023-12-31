
// [castelog:html5izable] ACTIVADO con: {"autor":"allnulled","nombre":"index","version":"1","contenido":{"head":"<head>\n    <title>🌐 Win7Dialogs</title>\n    <meta charset=\"utf8\" />\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n    <link rel=\"stylesheet\" type=\"text/css\" href=\"lib/win7/win7.scoped.css\" />\n    <link rel=\"stylesheet\" type=\"text/css\" href=\"lib/ui-script/ui-script.css\" />\n    <link rel=\"stylesheet\" type=\"text/css\" href=\"lib/win7dialogs/win7dialogs.css\" />\n    <script src=\"lib/calo/calo.js\"></script>\n    <script src=\"lib/ui-script/ui-script.js\"></script>\n    <script src=\"lib/win7dialogs/win7dialogs.js\"></script>\n</head>","body":"<body>\n  <div id=\"app\"></div>\n  <div class=\"win7dialogs\"></div>\n</body>"}}

window.PaginaDeInicio = Castelog.metodos.un_componente_vue2("PaginaDeInicio",
  "<div class=\"PaginaDeInicio Component\">"
 + "    <xtitle>Win7Dialogs</xtitle>"
 + "    <xlayout>"
 + "      <button v-on:click=\"abrir_dialogo_1\">Ejemplo 1</button>"
 + "      <button v-on:click=\"abrir_dialogo_2\">Ejemplo 2</button>"
 + "      <button v-on:click=\"abrir_dialogo_3\">Ejemplo 3</button>"
 + "    </xlayout>"
 + "    <div>Documentation at <a href=\"https://github.com/allnulled/win7dialogs\">https://github.com/allnulled/win7dialogs</a></div>"
 + "  </div>",
  function(component) {return { props:{ root:{ type:Object,
required:true
}
},
data() {try {
return { 
};
} catch(error) {
console.log(error);
throw error;
}

},
methods:{ abrir_dialogo_1() {try {
this.root.$window.win7dialogs.form( "<p>Un nuevo mensaje en un diálogo!</p><button>Aceptar</button>" );
} catch(error) {
console.log(error);
throw error;
}

},
async abrir_dialogo_3() {try {
const confirmacion = (await this.root.$window.win7dialogs.confirm( "<p>¿Estás seguro de bla bla bla?</p>" ));
const anuncio = (await this.root.$window.win7dialogs.inform( "<p>La confirmación terminó en " + confirmacion + "</p>" ));
} catch(error) {
console.log(error);
throw error;
}

},
async abrir_dialogo_2() {try {
window.process_form_2 = function( evento ) {try {
const nombre = evento.target.querySelector( "input[name=nombre]" ).value;
const contrasenya = evento.target.querySelector( "input[name=contrasenya]" ).value;
window.alert( "Te has logueado con " + nombre + " y " + contrasenya );
Win7Dialogs.resolve( evento );
return false;
} catch(error) {
console.log(error);
throw error;
}

};
const formulario = (await this.root.$window.win7dialogs.form( "" + "<div>" + "  <div style='padding:8px;'>" + "    <div>Usuario: </div>" + "    <input style='width:100%;' type='text' name='nombre' placeholder='usuario' value='admin' />" + "  </div>" + "  <div style='padding:8px;'>" + "    <div>Contraseña: </div>" + "    <input style='width:100%;' type='password' name='contrasenya' placeholder='contraseña' value='admin' />" + "  </div>" + "  <div style='padding:8px; text-align:right;'>" + "    <button>Entrar</button>" + "  </div>" + "</div>",
"Fake login" ));
const { nombre, contrasenya
} = formulario;
const formulario2 = (await this.root.$window.win7dialogs.form( "" + "<div>" + "  <div style='padding:8px;'>" + "    <div>La ventana anterior nos ha proporcionado los datos. Ahora podemos reusarlos en otra ventana aparte.</div>" + "  </div>" + "  <div style='padding:8px;'>" + "    <div>¿A que su usuario era " + ( JSON.stringify(nombre, null, 2) ) + " y su contraseña era " + ( JSON.stringify(contrasenya, null, 2) ) + "?</div>" + "  </div>" + "  <div style='padding:8px; text-align:right;'>" + "    <button>Sí. Lo acepto.</button>" + "  </div>" + "</div>",
"Fake login continuation..." ));
} catch(error) {
console.log(error);
throw error;
}

}
},
watch:{ 
},
computed:{ 
},
beforeCreate() {
},
created() {
},
beforeMount() {
},
mounted() {
},
beforeUpdate() {
},
updated() {
},
beforeUnmount() {
},
unmounted() {
},
activated() {
},
deactivated() {
}
};},
  null);
window.App = Castelog.metodos.una_aplicacion_vue2(
  "App",
  "<div class=\"App Component Castelog-app win7\">"
 + "    <router-view :root=\"this\"></router-view>"
 + "  </div>",
  function(component) {return { data() {try {
return { 
};
} catch(error) {
console.log(error);
throw error;
}

},
methods:{ 
},
watch:{ 
},
beforeMount() {try {
this.$window = window;
} catch(error) {
console.log(error);
throw error;
}

},
mounted() {
}
};},
  "html {}\n    body {}\n    .Component {}\n    .App {}\n",
  {},
  [ { path:"/",
name:"PaginaDeInicio",
component:PaginaDeInicio,
props:{ 
}
} ],
  { es:{ 
},
en:{ 
},
ca:{ 
}
},
  "#app");