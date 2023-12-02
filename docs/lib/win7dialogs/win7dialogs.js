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
    open(html_arg, title_arg = "Message", footer_arg = false) {
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