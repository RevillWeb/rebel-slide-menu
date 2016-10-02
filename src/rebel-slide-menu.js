/**
 * Created by Leon Revill on 02/08/2016.
 * Twitter: @RevillWeb
 * Blog: blog.revillweb.com
 * Website: www.revillweb.com
 */

/**
 * Class which represents the main countdown timer element
 */
class RebelSlideMenu extends HTMLElement {
    /**
     * Construct the timer element with some initial markup and styling
     */
    connectedCallback() {
        this._open = false;
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>     
                .rebel-slide-menu--frame > * {
                    font-family: sans-serif;
                    margin: 0;
                }
                .rebel-slide-menu--frame {
                    position: fixed;
                    left: 0;
                    top: 0;
                    right: 0;
                    bottom: 0;
                    overflow: hidden;
                    pointer-events: none;
                    z-index: 1000;
                    transition: background-color 300ms ease-in;
                }
                .rebel-slide-menu--container {
                    position: relative;
                    width: 80%;
                    max-width: 400px;
                    background: #FFF;
                    height: 100%;
                    transform: translateX(-100%);
                    will-change: transform;
                    transition: transform 300ms ease-in;
                }
                .rebel-slide-menu--container .title {
                    padding: 0 20px;
                    height: 80px;
                    line-height: 80px;                   
                    overflow: hidden;
                    font-size: 26px;
                }             
                .rebel-slide-menu--container .title .close {
                    position: absolute;
                    top: -2px;
                    right: 20px;
                    display: block;
                    width: 100px;
                    text-align: right;
                    font-size: 30px;
                    cursor: pointer;
                }
                .rebel-slide-menu--frame.open {
                    pointer-events: auto;
                    background-color: rgba(0, 0, 0, 0.25);
                }
                .rebel-slide-menu--frame.open .rebel-slide-menu--container {
                    transform: none;
                }
                /** For browsers that support CSS custom properties (i.e. IE/EDGE) **/
                .rebel-slide-menu--frame > * {
                    font-family: var(--font-family), sans-serif;
                }
                .rebel-slide-menu--container .title {
                    background-color: var(--header-bg-color, #253b7f);
                    color: var(--header-color, #FFF);
                }    
            </style>
            <div class="rebel-slide-menu--frame">
                <nav class="rebel-slide-menu--container">
                    <div class="title"><slot name="title">Menu</slot> <a class="close">&#10006;</a></div>
                    <div class="rebel-slide-menu--list">
                        <slot name="content"></slot>
                    </div>
                </nav>
            </div>
        `;
        this.$frame = this.shadowRoot.querySelector('.rebel-slide-menu--frame');
        this.$close = this.shadowRoot.querySelector('.close');
        this.$close.addEventListener("click", (event) => {
            event.preventDefault();
            this.close();
        });
    }

    open() {
        this.$frame.classList.add("open");
        this._open = true;
    }

    close() {
        this.$frame.classList.remove("open");
        this._open = false;
    }

    isOpen() {
        return (this._open === true);
    }

    toggle() {
        if (this._open === true) {
            this.close();
        } else {
            this.open();
        }
    }
}

/**
 * Define the custom element as countdown-timer using the Custom Elements V1 API
 */
customElements.define("rebel-slide-menu", RebelSlideMenu);