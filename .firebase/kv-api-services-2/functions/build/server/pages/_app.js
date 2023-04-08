(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 8638:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ App)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./src/components/cells/logo-text.jsx


function LogoText({ site_title , site_description  }) {
    const theme = "kv-theme";
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: `${theme} kv-logotext`,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                    src: "/vercel.svg",
                    alt: "Logo",
                    width: 100,
                    height: 100,
                    priority: true
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h2", {
                    className: "fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30",
                    children: [
                        site_title,
                        "\xa0 ",
                        /*#__PURE__*/ jsx_runtime_.jsx("code", {
                            className: "font-mono font-bold",
                            children: site_description
                        })
                    ]
                })
            ]
        })
    });
}

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/components/atoms/button-fillSet.jsx

function ButtonFillSet({ number , label  }) {
    const getSet = [
        "default",
        "action",
        "success",
        "warning",
        "danger",
        "neutral"
    ];
    return /*#__PURE__*/ jsx_runtime_.jsx("button", {
        type: "button",
        className: "button--accent",
        children: "Marc"
    });
} // <button type="button" className={`button--``${set[number]}`}>{label}</button>
 // <button type="button" className={`button--``${set[number]}`}>{label}</button>
 // <button type="button" className={`button--``${set[number]}`}>{label}</button>
 // <button type="button" className={`button--``${set[number]}`}>{label}</button>
 // <button type="button" className={`button--``${set[number]}`}>{label}</button>
 // <button type="button" className={`button--``${set[number]}`}>{label}</button>

;// CONCATENATED MODULE: ./src/components/organism/navbar-menu.jsx



const pageRoutes = [
    {
        name: "bg-e",
        path: "bg-r"
    },
    {
        name: "bg-e",
        path: "bg-r"
    },
    {
        name: "bg-e",
        path: "bg-r"
    },
    {
        name: "bg-e",
        path: "bg-r"
    }
];
function NavbarMenu({ theme , number , label  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(ButtonFillSet, {
                number: number,
                label: label
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("nav", {
                className: `${theme}`,
                children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                    children: pageRoutes.map((route, index)=>/*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: route.path,
                            children: route.name
                        }, index))
                })
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/components/organism/navbar-bottom.jsx


function NavbarBottom({ children  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("nav", {
            className: "fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                className: "pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0",
                href: "https://vercel.com?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app",
                target: "_blank",
                rel: "noopener noreferrer",
                children: [
                    "ccc ",
                    " ",
                    /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                        src: "/vercel.svg",
                        alt: "Vercel Logo",
                        className: "dark:invert",
                        width: 100,
                        height: 24,
                        priority: true
                    })
                ]
            })
        })
    });
}

;// CONCATENATED MODULE: ./src/components/organism/hero-next.jsx


function HeroNext({ color , children  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full  before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3  after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700/10 after:dark:from-sky-900 after:dark:via-[#0141ff]/40 before:lg:h-[360px]",
            children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                className: "relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert",
                src: "/next.svg",
                alt: "Next.js Logo",
                width: 180,
                height: 37,
                priority: true
            })
        })
    });
}

;// CONCATENATED MODULE: ./src/components/system/header-kv.jsx





function HeaderKV({ children  }) {
    const theme = "kv-theme";
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("header", {
                className: `${theme} flex min-h-screen flex-col items-center justify-between p-24`,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "header-wrapper z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(LogoText, {}),
                            /*#__PURE__*/ jsx_runtime_.jsx(NavbarMenu, {
                                numbwe: 2,
                                label: "Action"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(NavbarBottom, {})
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(HeroNext, {})
                ]
            }),
            children
        ]
    });
} // ${inter.variable} 

// EXTERNAL MODULE: ./src/styles/globals.css
var globals = __webpack_require__(108);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/pages/_app.tsx




console.log("FireBase-------->", process.env.FIREBASE_API_KEY);
function App({ Component , pageProps  }) {
    const [themeContext, setThemeContext] = (0,external_react_.useState)("default");
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(HeaderKV, {
            children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                ...pageProps
            })
        })
    });
}


/***/ }),

/***/ 108:
/***/ (() => {



/***/ }),

/***/ 3918:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 2470:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [636,61], () => (__webpack_exec__(8638)));
module.exports = __webpack_exports__;

})();