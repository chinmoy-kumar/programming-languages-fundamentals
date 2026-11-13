abstract class UIElement {
    constructor(protected id: string) {}
    abstract rendar(): string;
}

class Input extends UIElement {
    constructor(
        id: string,
        private _type: string,
        private _placeholder: string,
    ) {
        super(id);
    }

    rendar() {
        return `<input id="${this.id}" type="${this._type}" placeholder="${this._placeholder}"/>`;
    }
}

class Button extends UIElement {
    constructor(
        id: string,
        private _label: string,
    ) {
        super(id);
    }

    rendar() {
        return `<button id=${this.id} label=${this._label}> Submit </button>`;
    }
}

class Form extends UIElement {
    //- class also works as a type defination
    private childern: UIElement[] = [];

    appendChild(child: UIElement) {
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
