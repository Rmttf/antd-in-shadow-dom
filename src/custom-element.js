import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import { Button } from 'antd';
import { StyleProvider } from '@ant-design/cssinjs';

class CustomElement extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.root = document.createElement('div');
        const style = document.createElement('style');
        style.textContent = `
            span {
                color: red;
            }
        `;
        this.shadowRoot.appendChild(this.root);
        this.shadowRoot.appendChild(style);
    }

    render() {
        ReactDOM.render(
            <StyleProvider container={this.shadowRoot}>
                <Button>TestWebComponent</Button>
                <div id="yzz" />
            </StyleProvider>,
            this.root
        );
    }

    connectedCallback() {
        this.render();
        console.log('connectedCallback');
    }
}

const tagName = 'custom-element';

if (!window.customElements.get(tagName)) {
    window.customElements.define(tagName, CustomElement);
}