(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 3686:
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


function LogoText({ title  }) {
    const siteTitle = title;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "siteLogo",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                src: "/vercel.svg",
                alt: "Logo",
                width: 60,
                height: 60,
                priority: true
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                className: "text-skin-base text-3xl font-mono font-bold",
                children: siteTitle
            })
        ]
    });
}
{}
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/components/organism/navbar-menu.jsx


function NavbarMenu(pageRoutes) {
    pageRoutes = [
        {
            name: "Home",
            path: "/"
        },
        {
            name: "Dashboard",
            path: "/dashboard"
        },
        {
            name: "Project",
            path: "/dashboard/project"
        },
        {
            name: "Business",
            path: "/dashbaord/business"
        }
    ];
    return /*#__PURE__*/ jsx_runtime_.jsx("nav", {
        className: "navbar",
        children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
            children: pageRoutes.map((route, index)=>/*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: route.path,
                    children: route.name
                }, index))
        })
    });
}

;// CONCATENATED MODULE: ./src/components/organism/navbar-bottom.jsx


function NavbarBottom({ children  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("nav", {
        className: "navbar-bottom fixed bottom-0 left-0 flex h-18 w-full items-end justify-center bg-gradient-to-r  from-purple-500 to-pink-500 via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none ",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
            className: "pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0",
            href: "#",
            target: "_blank",
            rel: "noopener noreferrer",
            children: [
                "KENTOVERSE ",
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
    });
}

;// CONCATENATED MODULE: ./src/components/organism/hero-next.jsx


function HeroNext({ color , children  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "hero flex place-items-center ",
            children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                className: "relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert",
                src: "/next.svg",
                alt: "Next.js Logo",
                width: 200,
                height: 80,
                priority: true
            })
        })
    });
}
{}
;// CONCATENATED MODULE: external "styled-jsx/style"
const style_namespaceObject = require("styled-jsx/style");
var style_default = /*#__PURE__*/__webpack_require__.n(style_namespaceObject);
;// CONCATENATED MODULE: ./src/components/atoms/button-styled.jsx


const ButtonDynamic = (props)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
        className: "jsx-5fa8b7f90e65e6ad " + style_default().dynamic([
            [
                "60de054a78bed2fe",
                [
                    "large" in props ? "30" : "10"
                ]
            ]
        ]),
        children: [
            props.children,
            jsx_runtime_.jsx((style_default()), {
                id: "5fa8b7f90e65e6ad",
                children: "button.jsx-5fa8b7f90e65e6ad{color:#999;display:inline-block;font-size:2em}"
            }),
            jsx_runtime_.jsx((style_default()), {
                id: "60de054a78bed2fe",
                dynamic: [
                    "large" in props ? "30" : "10"
                ],
                children: `button.__jsx-style-dynamic-selector{padding:${"large" in props ? "30" : "10"}px;background:"indigo"}`
            })
        ]
    });
const ButtonClassName = (props)=>/*#__PURE__*/ _jsxs("button", {
        className: "jsx-89e506fe0edbec92" + " " + ("large" in props && "large" || ""),
        children: [
            props.children,
            _jsx(_JSXStyle, {
                id: "89e506fe0edbec92",
                children: "button.jsx-89e506fe0edbec92{padding:20px;background:#eee;color:#999}.large.jsx-89e506fe0edbec92{padding:50px}"
            })
        ]
    });
// const theme = {
//   buttonColor: 'bg-gradient-to-r from-cyan-500 to-blue-500',
//   buttonSize: 'mx-auto px-4'
// }
const ButtonInline = ({ label , theme  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
        type: "button",
        className: "jsx-8194571c9920d4f7" + " " + `${theme.buttonColor + ` ` + theme.buttonSize}`,
        children: [
            label,
            jsx_runtime_.jsx((style_default()), {
                id: "8194571c9920d4f7",
                children: "button.jsx-8194571c9920d4f7{padding:10px}"
            })
        ]
    });


;// CONCATENATED MODULE: ./src/components/atoms/button-tw.jsx

function ButtonTW({ number , label  }) {
    const getSet = [
        "default",
        "action",
        "success",
        "warning",
        "danger",
        "accent"
    ];
    return /*#__PURE__*/ jsx_runtime_.jsx("button", {
        type: "button",
        className: `button--${getSet[number]}`,
        children: label
    });
}
{} //    <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
 //    <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
 //      Purple to blue
 //    </span>
 //  </button>
 //  <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
 //    <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
 //      Cyan to blue
 //    </span>
 //  </button>
 //  <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
 //    <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
 //      Green to blue
 //    </span>
 //  </button>
 //  <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
 //    <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
 //      Purple to pink
 //    </span>
 //  </button>
 //  <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
 //    <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
 //      Pink to orange
 //    </span>
 //  </button>
 //  <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800">
 //    <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
 //      Teal to Lime
 //    </span>
 //  </button>
 //  <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400">
 //    <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
 //      Red to Yellow
 //    </span>
 //  </button>

;// CONCATENATED MODULE: ./src/components/system/header-kv.jsx







const theme = {
    buttonColor: "bg-gradient-to-r from-cyan-500 to-blue-500",
    buttonSize: "mx-auto px-4"
};
function HeaderKV(props, { children  }) {
    const { setTheme =`theme-kv` , number =3 , label ="Tailwind"  } = props;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("header", {
                className: `${setTheme}
            bg-gradient-to-r from-cyan-500 to-blue-500`,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(LogoText, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(NavbarMenu, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(NavbarBottom, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "wrapper"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(HeroNext, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(ButtonTW, {
                        number: number,
                        label: label
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(ButtonDynamic, {
                        children: "STYLED DYNAMIC"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(ButtonInline, {
                        theme: theme,
                        label: "INLINE"
                    })
                ]
            }),
            children
        ]
    });
} // ${inter.variable} 
 /* <header className="header
bg-gradient-to-r from-cyan-500 to-blue-500
items-center mx-auto px-4"> */ 

// EXTERNAL MODULE: ./src/styles/globals.css
var globals = __webpack_require__(108);
;// CONCATENATED MODULE: ./src/pages/_app.tsx



console.log("FireBase--->", process.env.FIREBASE_API_KEY);
function App({ Component , pageProps  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(HeaderKV, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                ...pageProps
            })
        ]
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
var __webpack_exports__ = __webpack_require__.X(0, [636,61], () => (__webpack_exec__(3686)));
module.exports = __webpack_exports__;

})();