class CheeseIcon extends HTMLElement {
    constructor() {
        super();
        console.log('Say CHEESE!!!');
        this.attachShadow({ mode: 'open' });
        this._webp = '';
        this._jpeg = '';
        this._alt = 'title';
    }

    _getHTMLTemplate() {
        return `
            <style>
                :host {
                    width: 4rem;
                    height: 4.8rem;
                    display: grid;
                    grid-template-areas: "icon";
                }

                #icon {
                    grid-area: icon;
                }

                #icon img {
                    width: 4rem;
                    height: 4rem;
                    object-fit: cover;
                    object-position: center;
                    border-radius: 2rem;
                    background-color: cornsilk;
                    box-shadow: 1px 2px 8px rgba(0, 0, 0, 0.8);
                }

                #title {
                    grid-area: icon;
                    display: flex;
                    justify-content: center;
                    align-items: flex-end;
                }

                #title span {
                    padding: 0 0.5rem;
                    background-color: white;
                    color: #333;
                    font-size: 1rem;
                    box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.3);
                }
            </style>
            <div id="icon">
                <picture>
                    <source srcset="${this._webp}" type="image/webp"></source>
                    <source srcset="${this._jpeg}" type="image/jpeg"></source>
                    <img src="${this._jpeg}" alt="${this._alt}">
                </picture>
            </div> 
            <div id="title"><span><slot></slot></span></div>
        `;
    }

    connectedCallback() {
        if (this.hasAttribute('webp')) {
            this._webp = this.getAttribute('webp');
        }
        if (this.hasAttribute('jpeg')) {
            this._jpeg = this.getAttribute('jpeg');
        }
        if (this.hasAttribute('alt')) {
            this._alt = this.getAttribute('alt');
        }
        this.shadowRoot.innerHTML = this._getHTMLTemplate();
    }
}

customElements.define('aff-cheese-icon', CheeseIcon);