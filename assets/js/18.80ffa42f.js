(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{196:function(t,s,a){"use strict";a.r(s);var e=a(6),r=Object(e.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"测试"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#测试","aria-hidden":"true"}},[t._v("#")]),t._v(" 测试")]),t._v(" "),a("p",[t._v("许多开发者会使用 puppeteer 去进行自动化的 UI 测试。然而 puppeteer 仅仅是一个用于控制 Chromium 的软件，它不可能提供断言方法让您用于测试。")]),t._v(" "),a("p",[t._v("Rize 提供了很多有用的断言方法用于测试。Rize 仅仅是一个库并且使用了 Node.js 的 "),a("code",[t._v("assert")]),t._v(" 模块，所以您可以将它和任何您喜欢的测试框架一起使用。")]),t._v(" "),a("h2",{attrs:{id:"断言页面信息"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#断言页面信息","aria-hidden":"true"}},[t._v("#")]),t._v(" 断言页面信息")]),t._v(" "),a("p",[t._v("您可能想断言当前页面的 URL，那么您可以使用 "),a("a",{attrs:{href:"https://rize.js.org/api/classes/_index_.rize.html#asserturlis",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("assertUrlIs")]),a("OutboundLink")],1),t._v(" 方法：")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("rize"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("assertUrlIs")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://example.com/'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("如果您想检查 URL 是否匹配指定的正则表达式，可以使用 "),a("a",{attrs:{href:"https://rize.js.org/api/classes/_index_.rize.html#asserturlmatch",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("assertUrlMatch")]),a("OutboundLink")],1),t._v(" 方法：")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("rize"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("assertUrlMatch")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/^https?/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("您也可以断言 query string。只需使用 "),a("a",{attrs:{href:"https://rize.js.org/api/classes/_index_.rize.html#assertquerystringhas",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("assertQueryStringHas")]),a("OutboundLink")],1),t._v(" 方法：")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("rize"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("assertQueryStringHas")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'key'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("您可能还想检查 query string 上的值，而不仅仅是键：")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("rize"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("assertQueryStringHas")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'key'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'value'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("上面的断言表示检查 query string 中 "),a("code",[t._v("key")]),t._v(" 对应的值。如果实际的值与给定的不同，测试将不能通过。")]),t._v(" "),a("p",[t._v("您甚至可以断言 query string 不存在指定的键：")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("rize"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("assertQueryStringMissing")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'nope'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("另外，如果您想断言 cookies 您可以使用 "),a("a",{attrs:{href:"https://rize.js.org/api/classes/_index_.rize.html#assertcookiehas",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("assertCookieHas")]),a("OutboundLink")],1),t._v(" 方法。")]),t._v(" "),a("h2",{attrs:{id:"断言页面内容和元素"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#断言页面内容和元素","aria-hidden":"true"}},[t._v("#")]),t._v(" 断言页面内容和元素")]),t._v(" "),a("h3",{attrs:{id:"页面"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#页面","aria-hidden":"true"}},[t._v("#")]),t._v(" 页面")]),t._v(" "),a("p",[t._v("您可以用 "),a("a",{attrs:{href:"https://rize.js.org/api/classes/_index_.rize.html#asserttitle",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("assertTitle")]),a("OutboundLink")],1),t._v(" 方法或 "),a("a",{attrs:{href:"https://rize.js.org/api/classes/_index_.rize.html#asserttitlecontains",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("assertTitleContains")]),a("OutboundLink")],1),t._v(" 方法断言当前页面的标题。")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("rize"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("assertTitle")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'page title'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("rize"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("assertTitleContains")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'title'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("如果您想检查当前页面是否包含指定的文本，可以使用 "),a("a",{attrs:{href:"https://rize.js.org/api/classes/_index_.rize.html#assertsee",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("assertSee")]),a("OutboundLink")],1),t._v(" 方法。")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("rize"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("assertSee")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'something'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("您也可以使用 "),a("a",{attrs:{href:"https://rize.js.org/api/classes/_index_.rize.html#assertseein",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("assertSeeIn")]),a("OutboundLink")],1),t._v(" 方法来断言某些文本是否存在某个元素中，您只需要给出该元素的选择器。")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("rize"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("assertSeeIn")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#greeting'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Hello!'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("您还可以使用 "),a("a",{attrs:{href:"https://rize.js.org/api/classes/_index_.rize.html#assertdontsee",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("assertDontSee")]),a("OutboundLink")],1),t._v(" 或 "),a("a",{attrs:{href:"https://rize.js.org/api/classes/_index_.rize.html#assertdontseein",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("assertDontSeeIn")]),a("OutboundLink")],1),t._v(" 方法来断言指定的文本是否不存在于页面或某个元素中。")]),t._v(" "),a("h3",{attrs:{id:"元素"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#元素","aria-hidden":"true"}},[t._v("#")]),t._v(" 元素")]),t._v(" "),a("p",[t._v("您可以断言某个元素的状态：")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("rize"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("assertElementPresent")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'div'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nrize"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("assertElementMissing")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'div'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nrize"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("assertElementVisible")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'div'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nrize"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("assertElementHidden")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'div'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("可以检查某个元素是否包含指定的 class：")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("rize"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("assertClassHas")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#greeting'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'pull-right'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("或不存在某个 class：")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("rize"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("assertClassMissing")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#greeting'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'pull-left'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("您可以断言某个复选框或某个单选框或某个下拉菜单的状态：")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("rize"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("assertChecked")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'input[type=checkbox]'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nrize"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("assertNotChecked")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'input[type=checkbox]'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nrize"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("assertRadioSelected")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'input[type=radio]'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'south'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nrize"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("assertRadioNotSelected")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'input[type=radio]'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'north'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("也可以使用 "),a("a",{attrs:{href:"https://rize.js.org/api/classes/_index_.rize.html#assertvalueis",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("assertValueIs")]),a("OutboundLink")],1),t._v(" 方法或 "),a("a",{attrs:{href:"https://rize.js.org/api/classes/_index_.rize.html#assertvalueisnot",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("assertValueIsNot")]),a("OutboundLink")],1),t._v(" 方法来断言它的值。")]),t._v(" "),a("h2",{attrs:{id:"全部的-api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#全部的-api","aria-hidden":"true"}},[t._v("#")]),t._v(" 全部的 API")]),t._v(" "),a("p",[t._v("所有的断言方法都在"),a("a",{attrs:{href:"https://rize.js.org/api/classes/_index_.rize.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("这里"),a("OutboundLink")],1),t._v("列出，它们都以 "),a("code",[t._v("assert")]),t._v(" 开头。")])])},[],!1,null,null,null);s.default=r.exports}}]);