(function(t){function e(e){for(var n,r,o=e[0],c=e[1],l=e[2],u=0,p=[];u<o.length;u++)r=o[u],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&p.push(s[r][0]),s[r]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);d&&d(e);while(p.length)p.shift()();return i.push.apply(i,l||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],n=!0,r=1;r<a.length;r++){var o=a[r];0!==s[o]&&(n=!1)}n&&(i.splice(e--,1),t=c(c.s=a[0]))}return t}var n={},r={app:0},s={app:0},i=[];function o(t){return c.p+"js/"+({about:"about"}[t]||t)+"."+{about:"94fac6d9"}[t]+".js"}function c(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.e=function(t){var e=[],a={about:1};r[t]?e.push(r[t]):0!==r[t]&&a[t]&&e.push(r[t]=new Promise((function(e,a){for(var n="css/"+({about:"about"}[t]||t)+"."+{about:"89807985"}[t]+".css",s=c.p+n,i=document.getElementsByTagName("link"),o=0;o<i.length;o++){var l=i[o],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===n||u===s))return e()}var p=document.getElementsByTagName("style");for(o=0;o<p.length;o++){l=p[o],u=l.getAttribute("data-href");if(u===n||u===s)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var n=e&&e.target&&e.target.src||s,i=new Error("Loading CSS chunk "+t+" failed.\n("+n+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=n,delete r[t],d.parentNode.removeChild(d),a(i)},d.href=s;var f=document.getElementsByTagName("head")[0];f.appendChild(d)})).then((function(){r[t]=0})));var n=s[t];if(0!==n)if(n)e.push(n[2]);else{var i=new Promise((function(e,a){n=s[t]=[e,a]}));e.push(n[2]=i);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=o(t);var p=new Error;l=function(e){u.onerror=u.onload=null,clearTimeout(d);var a=s[t];if(0!==a){if(a){var n=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;p.message="Loading chunk "+t+" failed.\n("+n+": "+r+")",p.name="ChunkLoadError",p.type=n,p.request=r,a[1](p)}s[t]=void 0}};var d=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(e)},c.m=t,c.c=n,c.d=function(t,e,a){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)c.d(a,n,function(e){return t[e]}.bind(null,n));return a},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var p=0;p<l.length;p++)e(l[p]);var d=u;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var n=a("85ec"),r=a.n(n);r.a},"06ad":function(t,e,a){},"0f48":function(t,e,a){t.exports=a.p+"img/gmail.c0897aa4.png"},3547:function(t,e,a){t.exports=a.p+"img/phone.79f42b3a.png"},5170:function(t,e,a){},5307:function(t,e,a){t.exports=a.p+"img/facebook.c80c8d49.png"},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"container"}},[t._m(0),a("router-view"),a("div",{attrs:{id:"Home"}},[a("Homepage")],1),a("div",{attrs:{id:"About"}},[a("Aboutpage")],1),a("div",{attrs:{id:"Contact"}},[a("Contactpage")],1)],1)},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{staticClass:"navbar fixed-top navbar-expand-lg navbar-light bg-light"},[a("a",{staticClass:"navbar-brand"},[t._v("Astroly")]),a("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"}},[a("span",{staticClass:"navbar-toggler-icon"})]),a("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarNav"}},[a("ul",{staticClass:"navbar-nav"},[a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link",attrs:{href:"#Home"}},[t._v("Home"),a("span",{staticClass:"sr-only"},[t._v("(current)")])])]),t._v(" "),a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link",attrs:{href:"#About"}},[t._v("About")])]),t._v(" "),a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link",attrs:{href:"#Contact"}},[t._v("Contact")])])])])])}],i=a("5f5b"),o=(a("f9e3"),a("2dd8"),function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),c=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("p",{staticClass:"line-1 anim-typewriter"},[t._v("Welcome to my Website :)")])])}],l={name:"Homepage"},u=l,p=(a("e62e"),a("2877")),d=Object(p["a"])(u,o,c,!1,null,"10561fb3",null),f=d.exports,v=a("801a"),m=a("6787");n["default"].use(i["a"]);var h={name:"app",components:{Homepage:f,Aboutpage:v["a"],Contactpage:m["a"]}},b=h,g=(a("034f"),Object(p["a"])(b,r,s,!1,null,null,null)),C=g.exports,_=(a("d3b7"),a("8c4f")),x=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("Homepage")],1)},y=[],w={name:"Home",components:{Homepage:f}},E=w,O=Object(p["a"])(E,x,y,!1,null,null,null),j=O.exports;n["default"].use(_["a"]);var k=[{path:"/home",name:"Home",component:j},{path:"/about",name:"About",component:function(){return a.e("about").then(a.bind(null,"f820"))}},{path:"/Contact",name:"Contact",component:function(){return a.e("about").then(a.bind(null,"b8fa"))}}],P=new _["a"]({mode:"history",base:"/",routes:k}),S=P;a("4989"),a("ab8b");n["default"].config.productionTip=!1,new n["default"]({router:S,render:function(t){return t(C)}}).$mount("#app")},6083:function(t,e,a){"use strict";var n=a("b94c"),r=a.n(n);r.a},6786:function(t,e,a){t.exports=a.p+"img/PicProfile.337e9489.png"},6787:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},r=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"contact"},[n("h1",[t._v("Contact Me")]),n("div",{staticClass:"card",staticStyle:{width:"18rem"}},[n("div",{staticClass:"card-body"},[n("p",{staticClass:"card-text"},[n("img",{attrs:{src:a("0f48"),alt:"",width:"50 px",height:"50 px"}}),t._v(" nitipon000@gmail.com")]),n("p",{staticClass:"card-text"},[n("img",{attrs:{src:a("3547"),alt:"",width:"50 px",height:"50 px"}}),t._v("+66822454815")]),n("p",{staticClass:"card-text"},[n("img",{attrs:{src:a("aa06"),alt:"",width:"50 px",height:"50 px"}}),n("a",{attrs:{href:"http://line.me/ti/p/~best.ntp"}},[t._v("best.ntp")])]),n("p",{staticClass:"card-text"},[n("img",{attrs:{src:a("5307"),alt:"",width:"50 px",height:"50 px"}}),n("a",{attrs:{href:"https://facebook.com/nitipon.numlamun"}},[t._v("Nitipon Numlamun")])]),n("p",{staticClass:"card-text"},[n("img",{attrs:{src:a("c7f8"),alt:"",width:"50 px",height:"50 px"}}),n("a",{attrs:{href:"https://instagram.com/best.ntp"}},[t._v("best.ntp")])]),n("br")])])])}],s={name:"Contactpage"},i=s,o=(a("7c7b"),a("2877")),c=Object(o["a"])(i,n,r,!1,null,"61812f5b",null);e["a"]=c.exports},"7c7b":function(t,e,a){"use strict";var n=a("06ad"),r=a.n(n);r.a},"801a":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},r=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"about"},[n("h1",[t._v("This is about me")]),n("div",{staticClass:"carousel slide",attrs:{id:"carouselExampleControls","data-ride":"carousel"}},[n("div",{staticClass:"carousel-inner"},[n("div",{staticClass:"carousel-item active"},[n("div",{staticClass:"card",staticStyle:{width:"18rem"}},[n("div",{staticClass:"card-body"},[n("h5",{staticClass:"card-title"},[t._v("It's me")]),n("img",{attrs:{src:a("6786"),alt:"",width:"150 px",height:"150 px"}}),n("br"),n("p",{staticClass:"card-text"},[t._v("I am Nitipon Numlamun."),n("br"),t._v(' You can call "Best"')])])])]),n("div",{staticClass:"carousel-item"},[n("div",{staticClass:"card",staticStyle:{width:"18rem"}},[n("div",{staticClass:"card-body"},[n("h5",{staticClass:"card-title"},[t._v("Education")]),n("img",{attrs:{src:a("b6d7"),alt:"",width:"100 px",height:"100 px"}}),n("br"),n("p",{staticClass:"card-text"},[t._v("Bachelor of Science "),n("br"),t._v(" Software Engineering "),n("br"),t._v(" Prince of Songkla University Phuket campus")])])])])]),n("a",{staticClass:"carousel-control-prev",attrs:{href:"#carouselExampleControls",role:"button","data-slide":"prev"}},[n("span",{staticClass:"carousel-control-prev-icon",attrs:{"aria-hidden":"true"}}),n("span",{staticClass:"sr-only"},[t._v("Previous")])]),n("a",{staticClass:"carousel-control-next",attrs:{href:"#carouselExampleControls",role:"button","data-slide":"next"}},[n("span",{staticClass:"carousel-control-next-icon",attrs:{"aria-hidden":"true"}}),n("span",{staticClass:"sr-only"},[t._v("Next")])])])])}],s={name:"Aboutpage"},i=s,o=(a("6083"),a("2877")),c=Object(o["a"])(i,n,r,!1,null,"95225cac",null);e["a"]=c.exports},"85ec":function(t,e,a){},aa06:function(t,e,a){t.exports=a.p+"img/line.65a8c452.png"},b6d7:function(t,e,a){t.exports=a.p+"img/graduation-cap.bc7e6a0c.png"},b94c:function(t,e,a){},c7f8:function(t,e,a){t.exports=a.p+"img/instagram.fa0c7102.png"},e62e:function(t,e,a){"use strict";var n=a("5170"),r=a.n(n);r.a}});
//# sourceMappingURL=app.d1c31b91.js.map