const Win7Dialogs = class {
    static ports = {};
    static resolve(form_element) {
        const dialogs_port = form_element.closest(".win7-dialogs-port");
        const uuid = dialogs_port.getAttribute("data-uuid");
        const { promise, ok, fail } = this.ports[uuid];
        const input_elements = form_element.elements;
        dialogs_port.parentElement.remove();
        const output = {};
        for (let index = 0; index < input_elements.length; index++) {
            const input_element = input_elements[index];
            const name = input_element.name;
            if (input_element.type === "file") {
                output[name] = input_element.files;
            } else {
                output[name] = input_element.value;
            }
        }
        ok(output);
        return false;
    }
    static resolve_confirming(button_element) {
        const dialogs_port = button_element.closest(".win7-dialogs-port");
        const form_element = dialogs_port.querySelector("form");
        const uuid = dialogs_port.getAttribute("data-uuid");
        dialogs_port.parentElement.remove();
        this.ports[uuid].ok(true);
        return false;
    }
    static resolve_canceling(button_element) {
        const dialogs_port = button_element.closest(".win7-dialogs-port");
        const form_element = dialogs_port.querySelector("form");
        const uuid = dialogs_port.getAttribute("data-uuid");
        dialogs_port.parentElement.remove();
        this.ports[uuid].ok(false);
        return false;
    }
    static noop() { }
    constructor() {

    }
    generate_random_token(len = 10, alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ") {
        let out = "";
        while (out.length < len) {
            out += alphabet[Math.floor(Math.random() * alphabet.length)];
        }
        return out;
    }
    inform(html_arg, title_arg = "Message", footer_arg = false, accept_arg = "Aceptar") {
        let inner_html, title, footer;
        if (typeof html_arg === "object") {
            const { message, title: title_2, footer: footer_2 } = html_arg;
            inner_html = message;
            title = title_2;
            footer = footer_2;
        } else {
            inner_html = html_arg;
            title = title_arg;
            footer = footer_arg;
        }
        const uuid = this.generate_random_token();
        let ok = undefined;
        let fail = undefined;
        const promise = new Promise((ok2, fail2) => {
            ok = ok2;
            fail = fail2;
        });
        this.constructor.ports[uuid] = { promise, ok, fail, is_confirmed: undefined };
        let html = "";
        html += "<div class='win7'>\n";
        html += "  <div class='win7-dialogs-port' data-uuid=" + JSON.stringify(uuid) + ">\n";
        html += "  <table class=''>\n";
        html += "  <tbody class=''>\n";
        html += "  <tr class=''>\n";
        html += "  <td class=''>\n";
        html += "  <div class='window'>\n";
        html += "    <div class='title-bar'>\n";
        html += "      <div class='title-bar-text'>\n";
        html += title;
        html += "      </div>\n";
        html += "    </div>\n";
        html += "    <div class='window-body'>\n";
        html += "      <form onsubmit='Win7Dialogs.resolve(event.target)'>\n";
        html += "        <div style='overflow:scroll;'>\n";
        html += inner_html;
        html += "        </div>\n";
        html += "        <div style='border-top:1px solid #CCC; padding:4px; text-align:right;'>\n";
        html += "          <button class='default' onclick='Win7Dialogs.resolve_confirming(event.target)'>";
        html += accept_arg;
        html += "\n";
        html += "          </button>\n";
        html += "        </div>";
        html += "      </form>\n";
        html += "    </div>\n";
        if (footer) {
            html += "      <div class='status-bar'>\n";
            html += "        <div class='status-bar-field'>\n";
            html += footer;
            html += "        </div>\n";
            html += "      </div>\n";
        }
        html += "  </div>\n";
        html += "  </td>\n";
        html += "  </tr>\n";
        html += "  </tbody>\n";
        html += "  </table>\n";
        html += "  </div>\n";
        html += "</div>\n";
        const div = document.createElement("div");
        div.innerHTML = html;
        document.querySelector(".win7dialogs").appendChild(div);
        return promise;
    }
    confirm(html_arg, title_arg = "Message", footer_arg = false, accept_arg = "Aceptar", reject_arg = "Cancelar") {
        let inner_html, title, footer;
        if (typeof html_arg === "object") {
            const { message, title: title_2, footer: footer_2 } = html_arg;
            inner_html = message;
            title = title_2;
            footer = footer_2;
        } else {
            inner_html = html_arg;
            title = title_arg;
            footer = footer_arg;
        }
        const uuid = this.generate_random_token();
        let ok = undefined;
        let fail = undefined;
        const promise = new Promise((ok2, fail2) => {
            ok = ok2;
            fail = fail2;
        });
        this.constructor.ports[uuid] = { promise, ok, fail, is_confirmed: undefined };
        let html = "";
        html += "<div class='win7'>\n";
        html += "  <div class='win7-dialogs-port' data-uuid=" + JSON.stringify(uuid) + ">\n";
        html += "  <table class=''>\n";
        html += "  <tbody class=''>\n";
        html += "  <tr class=''>\n";
        html += "  <td class=''>\n";
        html += "  <div class='window'>\n";
        html += "    <div class='title-bar'>\n";
        html += "      <div class='title-bar-text'>\n";
        html += title;
        html += "      </div>\n";
        html += "    </div>\n";
        html += "    <div class='window-body'>\n";
        html += "      <form onsubmit='Win7Dialogs.resolve(event.target)'>\n";
        html += "        <div style='overflow:scroll;'>\n";
        html += inner_html;
        html += "        </div>\n";
        html += "        <div style='border-top:1px solid #CCC; padding:4px; text-align:right;'>\n";
        html += "          <button class='default' onclick='Win7Dialogs.resolve_confirming(event.target)'>\n";
        html += accept_arg;
        html += "          </button>\n";
        html += "          <button onclick='Win7Dialogs.resolve_canceling(event.target)'>\n";
        html += reject_arg;
        html += "          </button>\n";
        html += "        </div>";
        html += "      </form>\n";
        html += "    </div>\n";
        if (footer) {
            html += "      <div class='status-bar'>\n";
            html += "        <div class='status-bar-field'>\n";
            html += footer;
            html += "        </div>\n";
            html += "      </div>\n";
        }
        html += "  </div>\n";
        html += "  </td>\n";
        html += "  </tr>\n";
        html += "  </tbody>\n";
        html += "  </table>\n";
        html += "  </div>\n";
        html += "</div>\n";
        const div = document.createElement("div");
        div.innerHTML = html;
        document.querySelector(".win7dialogs").appendChild(div);
        return promise;
    }
    form(html_arg, title_arg = "Message", footer_arg = false) {
        let inner_html, title, footer;
        if (typeof html_arg === "object") {
            const { message, title: title_2, footer: footer_2 } = html_arg;
            inner_html = message;
            title = title_2;
            footer = footer_2;
        } else {
            inner_html = html_arg;
            title = title_arg;
            footer = footer_arg;
        }
        const uuid = this.generate_random_token();
        let ok = undefined;
        let fail = undefined;
        const promise = new Promise((ok2, fail2) => {
            ok = ok2;
            fail = fail2;
        });
        this.constructor.ports[uuid] = { promise, ok, fail };
        let html = "";
        html += "<div class='win7'>\n";
        html += "  <div class='win7-dialogs-port' data-uuid=" + JSON.stringify(uuid) + ">\n";
        html += "  <table class=''>\n";
        html += "  <tbody class=''>\n";
        html += "  <tr class=''>\n";
        html += "  <td class=''>\n";
        html += "  <div class='window'>\n";
        html += "    <div class='title-bar'>\n";
        html += "      <div class='title-bar-text'>\n";
        html += title;
        html += "      </div>\n";
        html += "    </div>\n";
        html += "    <div class='window-body'>\n";
        html += "      <form onsubmit='Win7Dialogs.resolve(event.target)'>\n";
        html += inner_html;
        html += "      </form>\n";
        html += "    </div>\n";
        if (footer) {
            html += "      <div class='status-bar'>\n";
            html += "        <div class='status-bar-field'>\n";
            html += footer;
            html += "        </div>\n";
            html += "      </div>\n";
        }
        html += "  </div>\n";
        html += "  </td>\n";
        html += "  </tr>\n";
        html += "  </tbody>\n";
        html += "  </table>\n";
        html += "  </div>\n";
        html += "</div>\n";
        const div = document.createElement("div");
        div.innerHTML = html;
        document.querySelector(".win7dialogs").appendChild(div);
        return promise;
    }
};

window.Win7Dialogs = Win7Dialogs;
window.win7dialogs = new Win7Dialogs();