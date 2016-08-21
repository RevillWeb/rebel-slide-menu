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
    constructor() {
        super();
        this._open = false;
        this.$frame = null;
        this.$close = null;
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>               
                * {
                    font-family: var(--font-family), sans-serif;
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
                .rebel-slide-menu--container h2 {
                    background-color: var(--header-bg-color, #253b7f);
                    color: var(--header-color, #FFF);
                    margin: 0;
                    padding: 0 20px;
                    line-height: 80px;
                }
                .rebel-slide-menu--container h2 .close {
                    float: right;
                    display: block;
                    width: 100px;
                    text-align: right;
                    font-size: 30px;
                    cursor: pointer;
                    margin-top: -3px;
                }
                .rebel-slide-menu--frame.open {
                    pointer-events: auto;
                    background-color: rgba(0, 0, 0, 0.25);
                }
                .rebel-slide-menu--frame.open .rebel-slide-menu--container {
                    transform: none;
                }
                .rebel-slide-menu--list {
                    list-style: none;
                    padding: 0;
                    margin: 0;
                }
                .rebel-slide-menu--list li a {
                    display: block;
                    line-height: 80px;
                    text-decoration: none;
                    padding: 0 20px;
                    border-bottom: solid 1px rgba(204, 204, 204, 0.25);
                    color: var(--list-item-color, #333);
                    transition: color 300ms ease;
                }
                .rebel-slide-menu--list li a:hover {
                    color: var(--list-item-hover-color, #253b7f);
                }
            </style>
            <div class="rebel-slide-menu--frame">
                <nav class="rebel-slide-menu--container">
                    <h2>Menu <a class="close">&#10006;</a></h2>
                    <ul class="rebel-slide-menu--list">
                        <li><a href="#">HOME</a></li>
                        <li><a href="#speakers">SPEAKERS</a></li>
                        <li><a href="#panel">PANEL</a></li>
                        <li><a href="#sponsors">SPONSORS</a></li>
                    </ul>
                    <slot name="test">Default</slot>
                </nav>
            </div>
        `;
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

    /**
     * Method to initiate the interval when the timer is added to the DOM
     */
    connectedCallback() {
        this.$frame = this.shadowRoot.querySelector('.rebel-slide-menu--frame');
        this.$close = this.shadowRoot.querySelector('.close');
        this.$close.addEventListener("click", (event) => {
            event.preventDefault();
            this.close();
        });
    }

}

/**
 * Define the custom element as countdown-timer using the Custom Elements V1 API
 */
customElements.define("rebel-slide-menu", RebelSlideMenu);