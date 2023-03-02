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

        // 样式注入方式1
        // const style = document.createElement('style');
        // style.textContent = `
        //     span {
        //         color: red;
        //     }
        // `;
        // this.shadowRoot.appendChild(style);

        // 样式注入方式2 可以采用
        const link = document.createElement('link');
        link.setAttribute('rel', 'stylesheet');
        // 注意文件地址引用
        link.setAttribute('href', 'custom-element.css');
        this.shadowRoot.appendChild(link);

        // 样式注入方式3
        // const styleSheet = new CSSStyleSheet();
        // styleSheet.replaceSync("span { color: red; }");
        // this.shadowRoot.adoptedStyleSheets = [styleSheet];

        this.shadowRoot.appendChild(this.root);
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