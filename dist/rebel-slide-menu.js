"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Created by Leon Revill on 02/08/2016.
 * Twitter: @RevillWeb
 * Blog: blog.revillweb.com
 * Website: www.revillweb.com
 */

/**
 * Class which represents the main countdown timer element
 */
var RebelSlideMenu = function (_HTMLElement) {
    _inherits(RebelSlideMenu, _HTMLElement);

    /**
     * Construct the timer element with some initial markup and styling
     */
    function RebelSlideMenu() {
        _classCallCheck(this, RebelSlideMenu);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(RebelSlideMenu).call(this));

        _this._open = false;
        _this.$frame = null;
        _this.$close = null;
        _this.attachShadow({ mode: 'open' });
        _this.shadowRoot.innerHTML = "\n            <style>               \n                * {\n                    font-family: var(--font-family), sans-serif;\n                }\n                .rebel-slide-menu--frame {\n                    position: fixed;\n                    left: 0;\n                    top: 0;\n                    right: 0;\n                    bottom: 0;\n                    overflow: hidden;\n                    pointer-events: none;\n                    z-index: 1000;\n                    transition: background-color 300ms ease-in;\n                }\n                .rebel-slide-menu--container {\n                    position: relative;\n                    width: 80%;\n                    max-width: 400px;\n                    background: #FFF;\n                    height: 100%;\n                    transform: translateX(-100%);\n                    will-change: transform;\n                    transition: transform 300ms ease-in;\n                }\n                .rebel-slide-menu--container h2 {\n                    background-color: var(--header-bg-color, #253b7f);\n                    color: var(--header-color, #FFF);\n                    margin: 0;\n                    padding: 0 20px;\n                    line-height: 80px;\n                }\n                .rebel-slide-menu--container h2 .close {\n                    float: right;\n                    display: block;\n                    width: 100px;\n                    text-align: right;\n                    font-size: 30px;\n                    cursor: pointer;\n                    margin-top: -3px;\n                }\n                .rebel-slide-menu--frame.open {\n                    pointer-events: auto;\n                    background-color: rgba(0, 0, 0, 0.25);\n                }\n                .rebel-slide-menu--frame.open .rebel-slide-menu--container {\n                    transform: none;\n                }\n                .rebel-slide-menu--list {\n                    list-style: none;\n                    padding: 0;\n                    margin: 0;\n                }\n                .rebel-slide-menu--list li a {\n                    display: block;\n                    line-height: 80px;\n                    text-decoration: none;\n                    padding: 0 20px;\n                    border-bottom: solid 1px rgba(204, 204, 204, 0.25);\n                    color: var(--list-item-color, #333);\n                    transition: color 300ms ease;\n                }\n                .rebel-slide-menu--list li a:hover {\n                    color: var(--list-item-hover-color, #253b7f);\n                }\n            </style>\n            <div class=\"rebel-slide-menu--frame\">\n                <nav class=\"rebel-slide-menu--container\">\n                    <h2>Menu <a class=\"close\">&#10006;</a></h2>\n                    <ul class=\"rebel-slide-menu--list\">\n                        <li><a href=\"#\">HOME</a></li>\n                        <li><a href=\"#speakers\">SPEAKERS</a></li>\n                        <li><a href=\"#panel\">PANEL</a></li>\n                        <li><a href=\"#sponsors\">SPONSORS</a></li>\n                    </ul>\n                    <slot name=\"test\">Default</slot>\n                </nav>\n            </div>\n        ";
        return _this;
    }

    _createClass(RebelSlideMenu, [{
        key: "open",
        value: function open() {
            this.$frame.classList.add("open");
            this._open = true;
        }
    }, {
        key: "close",
        value: function close() {
            this.$frame.classList.remove("open");
            this._open = false;
        }
    }, {
        key: "isOpen",
        value: function isOpen() {
            return this._open === true;
        }

        /**
         * Method to initiate the interval when the timer is added to the DOM
         */

    }, {
        key: "connectedCallback",
        value: function connectedCallback() {
            var _this2 = this;

            this.$frame = this.shadowRoot.querySelector('.rebel-slide-menu--frame');
            this.$close = this.shadowRoot.querySelector('.close');
            this.$close.addEventListener("click", function (event) {
                event.preventDefault();
                _this2.close();
            });
        }
    }]);

    return RebelSlideMenu;
}(HTMLElement);

/**
 * Define the custom element as countdown-timer using the Custom Elements V1 API
 */


customElements.define("rebel-slide-menu", RebelSlideMenu);
