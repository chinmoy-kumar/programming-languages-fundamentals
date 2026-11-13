"use strict";
class UIElement {
    id;
    constructor(id) {
        this.id = id;
    }
}
class Input extends UIElement {
    _type;
    _placeholder;
    constructor(id, _type, _placeholder) {
        super(id);
        this._type = _type;
        this._placeholder = _placeholder;
    }
    rendar() {
        return `<input id="${this.id}" type="${this._type}" placeholder="${this._placeholder}"/>`;
    }
}
class Button extends UIElement {
    _label;
    constructor(id, _label) {
        super(id);
        this._label = _label;
    }
    rendar() {
        return `<button id=${this.id} label=${this._label}> Submit </button>`;
    }
}
class Form extends UIElement {
    //- class also works as a type defination
    childern = [];
    appendChild(child) {
        this.childern.push(child);
    }
    rendar() {
        const childrenHTML = this.childern
            .map((child) => child.rendar())
            .join("\n ");
        // console.log(childrenHTML)
        return `<form id=${this.id} style="border: 1px solid #ccc; padding:20px; display:flex; flex-direction: column; max-width: 300px; gap: 5px; border-raius: 5px">\n ${childrenHTML} \n</form>`;
    }
}
const formElement = new Form("login-form");
const emailInput = new Input("email", "email", "Enter your e-mail here");
const passwordInput = new Input("pass", "password", "Enter your password");
const submitButton = new Button("submit-btn", "btn");
formElement.appendChild(emailInput);
formElement.appendChild(passwordInput);
formElement.appendChild(submitButton);
// console.log(emailInput.rendar());
// console.log(passwordInput.rendar());
// console.log(submitButton.rendar());
console.log(formElement.rendar());
const rootElement = document.getElementById("root");
if (rootElement) {
    rootElement.innerHTML = formElement.rendar();
}
