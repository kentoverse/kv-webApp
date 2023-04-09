"use strict";
exports.id = 153;
exports.ids = [153];
exports.modules = {

/***/ 3453:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TC": () => (/* binding */ useThemeContext),
/* harmony export */   "ze": () => (/* binding */ ThemeContextProvider)
/* harmony export */ });
/* unused harmony export emptyTheme */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const emptyTheme = {
    name: "",
    description: "",
    color: {
        base: "",
        inverted: ""
    },
    background: {
        fill: "",
        image: ""
    },
    button: {
        action: "",
        success: "",
        size: ""
    }
};
const ThemeContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({
    themeId: "",
    setThemeId: ()=>"",
    data: emptyTheme,
    setData: ()=>emptyTheme
});
const ThemeContextProvider = ({ children  })=>{
    const [themeId, setThemeId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(emptyTheme);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ThemeContext.Provider, {
        value: {
            themeId,
            setThemeId,
            data,
            setData
        },
        children: children
    });
};
const useThemeContext = ()=>(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(ThemeContext);


/***/ }),

/***/ 2153:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Layout),
  "sampleTheme": () => (/* binding */ sampleTheme)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/components/template/main-kv.tsx

function MainKV({ children  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("main", {
            className: `bg-pink-100 container md:container md:mx-auto`,
            children: [
                children,
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("footer", {
                    className: "footer w-full",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "grid grid-rows-2 grid-flow-col gap-2",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse justo est, finibus et pulvinar non, tempus eu ligula. Mauris nisl ligula, fermentum vel massa a, tempus malesuada nunc. Mauris eu placerat lorem. Integer aliquam ultrices sem ac luctus. Donec et porttitor lorem. Etiam lacinia dolor ut blandit malesuada."
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse justo est, finibus et pulvinar non, tempus eu ligula. Mauris nisl ligula, fermentum vel massa a, tempus malesuada nunc. Mauris eu placerat lorem. Integer aliquam ultrices sem ac luctus. Donec et porttitor lorem. Etiam lacinia dolor ut blandit malesuada."
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                children: "\xa9 2023 My Website"
                            })
                        })
                    ]
                })
            ]
        })
    });
} // ${inter.variable} 

;// CONCATENATED MODULE: ./src/components/template/header-kv.tsx

function HeaderKV({ children , theme  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("header", {
            className: `${theme} bg-gradient-to-r from-cyan-500 to-blue-500 items-center mx-auto px-4`,
            children: children
        })
    });
} // ${inter.variable} 
 /* <header className="header
bg-gradient-to-r from-cyan-500 to-blue-500
items-center mx-auto px-4"> */ 

// EXTERNAL MODULE: ./node_modules/next/navigation.js
var navigation = __webpack_require__(9332);
// EXTERNAL MODULE: ./src/libs/store/ThemeContext.tsx
var ThemeContext = __webpack_require__(3453);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
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
                width: 100,
                height: 60,
                priority: true
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                className: "text-skin-base text-3xl font-mono font-bold",
                children: siteTitle
            })
        ]
    });
} /* <h2 className="fixed left-0 top-0 flex w-full 
justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 
pb-6 pt-8 backdrop-blur-2xl 
dark:border-neutral-800 dark:bg-zinc-800/30 
dark:from-inherit lg:static lg:w-auto 
lg:rounded-xl lg:border lg:bg-gray-200 
lg:p-4 lg:dark:bg-zinc-800/30"></h2> */ 

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/components/organs/navbar-menu.jsx


const pageRoutes = [
    {
        name: "Home",
        path: "/"
    },
    {
        name: "Dashboard",
        path: "/dashboard"
    },
    {
        name: "About",
        path: "/about-us"
    },
    {
        name: "Project",
        path: "/dashboard/project"
    }
];
function NavbarMenu(props) {
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

;// CONCATENATED MODULE: ./src/components/organs/navbar-bottom.jsx


function NavbarBottom(props) {
    return /*#__PURE__*/ jsx_runtime_.jsx("nav", {
        className: "navbar-bottom fixed bottom-0 left-0 flex h-18 w-full items-end justify-center bg-gradient-to-r from-purple-500 to-pink-500 via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none",
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
                    width: 120,
                    height: 24,
                    priority: true
                })
            ]
        })
    });
}

;// CONCATENATED MODULE: ./src/components/organs/hero-next.jsx


function HeroNext(props) {
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "hero flex place-items-center",
            children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                className: "relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert",
                src: "/next.svg",
                alt: "Next.js Logo",
                width: 140,
                height: 80,
                priority: true
            })
        })
    });
} /* <div className="hero flex
place-items-center
before:absolute
before:h-[300px] 
before:w-[480px] 
before:-translate-x-1/2 
before:rounded-full 
before:bg-gradient-radial 
before:from-white 
before:to-transparent 
before:blur-2xl 
before:content-[''] 
after:absolute 
after:-z-20 
after:h-[180px] 
after:w-[240px] 
after:translate-x-1/3 
after:bg-gradient-conic 
after:from-sky-200 
after:via-blue-200 
after:blur-2xl 
after:content-[''] 
before:dark:bg-gradient-to-br 
before:dark:from-transparent 
before:dark:to-blue-700/10 
after:dark:from-sky-900 
after:dark:via-[#0141ff]/40 
before:lg:h-[360px]"> */ 

// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__(9816);
var style_default = /*#__PURE__*/__webpack_require__.n(style_);
;// CONCATENATED MODULE: ./src/components/atoms/button-styled.jsx


const ButtonDynamic = (props)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
        className: style_default().dynamic([
            [
                "73a62bd087d20b90",
                [
                    "large" in props ? "30" : "10"
                ]
            ],
            [
                "4c428d78178e5d94",
                [
                    props.action
                ]
            ]
        ]),
        children: [
            props.children,
            jsx_runtime_.jsx((style_default()), {
                id: "4c428d78178e5d94",
                dynamic: [
                    props.action
                ],
                children: `.buttonSet.__jsx-style-dynamic-selector{color:${props.action};display:inline-block;font-size:2em}`
            }),
            jsx_runtime_.jsx((style_default()), {
                id: "73a62bd087d20b90",
                dynamic: [
                    "large" in props ? "30" : "10"
                ],
                children: `.buttonSet.__jsx-style-dynamic-selector{padding:${"large" in props ? "30" : "10"}px;background:"indigo"}`
            })
        ]
    });
const ButtonClassName = (props)=>/*#__PURE__*/ _jsxs("button", {
        className: "jsx-a6678d0641b9c06e" + " " + ("large" in props && "large" || ""),
        children: [
            props.children,
            _jsx(_JSXStyle, {
                id: "a6678d0641b9c06e",
                children: ".buttonSet.jsx-a6678d0641b9c06e{padding:20px;background:#eee;color:#999}.large.jsx-a6678d0641b9c06e{padding:50px}"
            })
        ]
    });
const ButtonInline = ({ label , theme  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
        type: "button",
        className: "jsx-80365c30c72b709d" + " " + `"${theme.action + ` ` + theme.size}"`,
        children: [
            label,
            jsx_runtime_.jsx((style_default()), {
                id: "80365c30c72b709d",
                children: ".buttonSet.jsx-80365c30c72b709d{padding:10px}"
            })
        ]
    });


;// CONCATENATED MODULE: ./src/components/organs/card-group.tsx

function CardGroup({ color , children  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                    href: "#",
                    className: "group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h2", {
                            className: `${true} mb-3 text-2xl font-semibold`,
                            children: [
                                "Docs",
                                " ",
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none",
                                    children: "->"
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: `${true} m-0 max-w-[30ch] text-sm opacity-50`,
                            children: "Find in-depth information about Next.js features and API."
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                    href: "https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app",
                    className: "group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h2", {
                            className: `${true} mb-3 text-2xl font-semibold`,
                            children: [
                                "Learn",
                                " ",
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none",
                                    children: "->"
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: `${true} m-0 max-w-[30ch] text-sm opacity-50`,
                            children: "Learn about Next.js in an interactive course with\xa0quizzes!"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                    href: "https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app",
                    className: "group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h2", {
                            className: `${true} mb-3 text-2xl font-semibold`,
                            children: [
                                "Templates",
                                " ",
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none",
                                    children: "->"
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: `${true} m-0 max-w-[30ch] text-sm opacity-50`,
                            children: "Discover and deploy boilerplate example Next.js\xa0projects."
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                    href: "https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app",
                    className: "group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h2", {
                            className: `${true} mb-3 text-2xl font-semibold`,
                            children: [
                                "Deploy",
                                " ",
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none",
                                    children: "->"
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: `${true} m-0 max-w-[30ch] text-sm opacity-50`,
                            children: "Instantly deploy your Next.js site to a shareable URL with Vercel."
                        })
                    ]
                })
            ]
        })
    });
}

;// CONCATENATED MODULE: ./src/pages/layout.tsx












function Layout({ children  }) {
    const pageName = (0,navigation.usePathname)().slice(1);
    const { themeId , setThemeId , data , setData  } = (0,ThemeContext/* useThemeContext */.TC)();
    (0,external_react_.useEffect)(()=>{
        console.log("This is page: ", pageName);
        setThemeId("theme-kv");
        setData(sampleTheme);
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(HeaderKV, {
                theme: data.name,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(LogoText, {
                        title: undefined
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(NavbarMenu, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(NavbarBottom, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(HeroNext, {
                        color: data.color,
                        children: undefined
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(CardGroup, {
                color: "",
                children: undefined
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(MainKV, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                        children: [
                            "Theme Details : ",
                            themeId,
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                className: "text-sm",
                                children: [
                                    data.name,
                                    ",",
                                    data.description,
                                    ",",
                                    data.color.base,
                                    ",",
                                    data.color.inverted,
                                    ",",
                                    data.background.fill,
                                    ",",
                                    data.background.image,
                                    ",",
                                    data.button.action,
                                    ",",
                                    data.button.success,
                                    ",",
                                    data.button.size
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "noWrapper",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(ButtonDynamic, {
                                children: "STYLED DYNAMIC"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(ButtonInline, {
                                theme: data.button,
                                label: "INLINE"
                            })
                        ]
                    }),
                    children
                ]
            })
        ]
    });
}
const sampleTheme = {
    name: "theme-kv",
    description: "nice theme by Marc",
    color: {
        base: "#f2340a",
        inverted: "#f5e3df"
    },
    background: {
        fill: "#5b0ced",
        image: "/img/sample.png"
    },
    button: {
        action: "bg-gradient-to-r from-cyan-500 to-blue-500",
        success: "#0aeaf2",
        size: "mx-auto px-4"
    }
};


/***/ })

};
;