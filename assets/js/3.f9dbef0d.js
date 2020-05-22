(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{181:function(a,t,s){"use strict";s.r(t);var e=s(6),r=Object(e.a)({},function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"introduction"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#introduction","aria-hidden":"true"}},[a._v("#")]),a._v(" Introduction")]),a._v(" "),s("p",[a._v("Rize is a high-level, fluent and chainable API provided library which let you use puppeteer simply.")]),a._v(" "),s("h2",{attrs:{id:"features"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#features","aria-hidden":"true"}},[a._v("#")]),a._v(" Features")]),a._v(" "),s("ul",[s("li",[s("p",[a._v("Full TypeScript support")])]),a._v(" "),s("li",[s("p",[a._v("Chainable API")])]),a._v(" "),s("li",[s("p",[a._v("You still can visit low-level "),s("code",[a._v("puppeteer")]),a._v(" browser and page instance.")])]),a._v(" "),s("li",[s("p",[a._v("Providing lots of useful assertions")])])]),a._v(" "),s("h2",{attrs:{id:"api-reference"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#api-reference","aria-hidden":"true"}},[a._v("#")]),a._v(" API Reference")]),a._v(" "),s("p",[a._v("If you are looking for all available APIs of "),s("code",[a._v("Rize")]),a._v(", please go "),s("a",{attrs:{href:"https://rize.js.org/api/modules/_index_.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("here"),s("OutboundLink")],1),a._v(".")]),a._v(" "),s("h2",{attrs:{id:"installation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#installation","aria-hidden":"true"}},[a._v("#")]),a._v(" Installation")]),a._v(" "),s("p",[s("code",[a._v("puppeteer")]),a._v(" is as a peer dependency of "),s("code",[a._v("Rize")]),a._v(", so you should install "),s("code",[a._v("puppeteer")]),a._v(" manually.")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("yarn add --dev puppeteer rize\n")])])]),s("p",[a._v("or via npm:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("npm")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" --save-dev puppeteer rize\n")])])]),s("p",[a._v("If you are in China, you may specify Chromium binary mirror.")]),a._v(" "),s("p",[a._v("On Linux or macOS:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("PUPPETEER_DOWNLOAD_HOST"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("https://npm.taobao.org/mirrors yarn add --dev puppeteer rize\n")])])]),s("p",[a._v("On Windows:")]),a._v(" "),s("div",{staticClass:"language-batch extra-class"},[s("pre",{pre:!0,attrs:{class:"language-batch"}},[s("code",[s("span",{pre:!0,attrs:{class:"token command"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("SET")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("PUPPETEER_DOWNLOAD_HOST")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("https:"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("npm.taobao.org"),s("span",{pre:!0,attrs:{class:"token parameter attr-name"}},[a._v("/mirrors")]),a._v(" yarn add "),s("span",{pre:!0,attrs:{class:"token parameter attr-name"}},[a._v("--dev")]),a._v(" puppeteer rize")]),a._v("\n")])])]),s("p",[a._v("For TypeScript users, you may install type declarations of "),s("code",[a._v("puppeteer")]),a._v(". This is optional and it is recommended to install it if you are going to visit puppeteer's API directly:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("yarn add --dev @types/puppeteer\n")])])]),s("p",[a._v("or")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("npm")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" --save-dev @types/puppeteer\n")])])]),s("h2",{attrs:{id:"getting-started"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#getting-started","aria-hidden":"true"}},[a._v("#")]),a._v(" Getting Started")]),a._v(" "),s("p",[a._v("We recommend to use ES-style "),s("code",[a._v("import")]),a._v(" syntax:")]),a._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("import")]),a._v(" Rize "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("from")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'rize'")]),a._v("\n")])])]),s("p",[a._v("Also, using CommonJS-style syntax is OK:")]),a._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("const")]),a._v(" Rize "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'rize'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])])]),s("p",[a._v("Now we can create a "),s("code",[a._v("Rize")]),a._v(" instance:")]),a._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("const")]),a._v(" rize "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Rize")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])])]),s("p",[a._v("Here is an example:")]),a._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[a._v("rize\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("goto")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'https://github.com/'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("type")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'input.header-search-input'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'node'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("press")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'Enter'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("waitForNavigation")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("assertSee")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'Node.js'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("end")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// Don't forget to call `end` function to exit browser!")]),a._v("\n")])])]),s("p",[a._v("Now you can go ahead to read this documentation to look for more details!")]),a._v(" "),s("h2",{attrs:{id:"faq"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#faq","aria-hidden":"true"}},[a._v("#")]),a._v(" FAQ")]),a._v(" "),s("p",[a._v("See "),s("RouterLink",{attrs:{to:"/faq.html"}},[a._v("FAQ")]),a._v(".")],1),a._v(" "),s("h2",{attrs:{id:"license"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#license","aria-hidden":"true"}},[a._v("#")]),a._v(" License")]),a._v(" "),s("p",[a._v("MIT License")]),a._v(" "),s("p",[a._v("Copyright (c) 2018-present Pig Fang")])])},[],!1,null,null,null);t.default=r.exports}}]);