(this["webpackJsonpreact-portfolio"]=this["webpackJsonpreact-portfolio"]||[]).push([[1],[,,,,,,,,,,,function(e,t,o){e.exports={cardWrapper:"ModalProjectCard_cardWrapper__2hkXS",image:"ModalProjectCard_image__1AUDf",cardBody:"ModalProjectCard_cardBody__2bjZ6",cardFooter:"ModalProjectCard_cardFooter__2SETa",title:"ModalProjectCard_title___9BP8",technologies:"ModalProjectCard_technologies__1KqnL"}},function(e,t,o){e.exports={container:"Modal_container__10-sg",modal:"Modal_modal__3vGBo",closeWrapper:"Modal_closeWrapper__2iOty",closeIcon:"Modal_closeIcon__1xiwL",closeButton:"Modal_closeButton__3hQLl",body:"Modal_body__jh9hP"}},,function(e,t,o){e.exports={btn:"Button_btn__3p22K",primary:"Button_primary__3HkSo"}},,function(e,t,o){"use strict";var n=o(17),a=o.n(n),c=o(14),r=o.n(c),i=o(2);t.a=function(e){var t=e.type,o=void 0===t?"button":t,n=e.onClick,c=e.disabled,s=e.className,l=e.children,d=e.href,p=e.target,u=e.style,h=e.addClass;return d?Object(i.jsx)("a",{style:u,className:a()(r.a.btn,r.a[s],h),href:d,target:p,children:l}):Object(i.jsx)("button",{style:u,className:a()(r.a.btn,r.a[s],h),type:o,onClick:n,disabled:c,children:l})}},,,,,,function(e,t,o){"use strict";o.d(t,"b",(function(){return N}));var n,a,c=o(1),r=o(3),i=o(11),s=o.n(i),l=o(46),d=o(12),p=o.n(d),u=["title","titleId"];function h(){return(h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e}).apply(this,arguments)}function m(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)o=c[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)o=c[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}function g(e,t){var o=e.title,r=e.titleId,i=m(e,u);return c.createElement("svg",h({xmlns:"http://www.w3.org/2000/svg",width:20,height:20,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",ref:t,"aria-labelledby":r},i),o?c.createElement("title",{id:r},o):null,n||(n=c.createElement("line",{x1:18,y1:6,x2:6,y2:18})),a||(a=c.createElement("line",{x1:6,y1:6,x2:18,y2:18})))}var j=c.forwardRef(g),b=(o.p,o(47)),f=o(23),v=o(2),x=function(e){var t=e.children,o=e.show,n=e.onClose,a=Object(r.f)(),i=function(e){n(),e.stopPropagation(),a.goBack()};return Object(c.useEffect)((function(){return document.body.classList.add("overflow-hidden"),function(){document.body.classList.remove("overflow-hidden")}}),[]),Object(v.jsxs)("div",{className:p.a.container,children:[o&&Object(v.jsx)(f.a,{onClick:i}),Object(v.jsx)(b.a,{in:o,timeout:300,classNames:"modal",mountOnEnter:!0,unmountOnExit:!0,children:Object(v.jsxs)("div",{className:p.a.modal,children:[Object(v.jsx)("div",{className:p.a.closeWrapper,onClick:i,children:Object(v.jsx)("button",{className:p.a.closeButton,children:Object(v.jsx)(j,{className:p.a.closeIcon})})}),t]})})]})},y=o(16),O=o(15),k=o(27),w=o(24),_=function(){var e=Object(r.h)().id,t=k.a.find((function(t){return e===t.id})),o=t.image,n=t.title,a=t.links,i=t.technologies,d=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=Object(c.useState)(e),o=Object(O.a)(t,2),n=o[0],a=o[1];return{isVisible:n,toggleModal:function(){a((function(e){return!e}))}}}(),p=d.isVisible,u=d.toggleModal;return Object(c.useEffect)((function(){u()}),[]),Object(v.jsx)(x,{show:p,onClose:u,children:Object(v.jsxs)("div",{className:s.a.cardWrapper,children:[Object(v.jsx)(w.LazyLoadImage,{alt:"project-img",src:o.src,effect:"blur",width:"100%",wrapperClassName:s.a.image,placeholderSrc:o.placeholderSrc}),Object(v.jsxs)("div",{className:s.a.cardBody,children:[Object(v.jsx)("h3",{className:s.a.title,children:n}),Object(v.jsx)("div",{className:s.a.technologies,children:i.map((function(e){return Object(v.jsx)("span",{children:e})}))})]}),Object(v.jsxs)("div",{className:s.a.cardFooter,children:[Object(v.jsxs)(y.a,{style:{width:"12rem"},className:"primary",href:a.site,target:"_blank",children:[Object(v.jsx)(l.a,{})," \xa0 View project"]}),Object(v.jsxs)(y.a,{style:{width:"12rem"},className:"primary",href:a.repo,target:"_blank",children:[Object(v.jsx)(l.a,{})," \xa0 Know more"]})]})]})})},C=Object(c.lazy)((function(){return Promise.all([o.e(0),o.e(8),o.e(5)]).then(o.bind(null,402))})),M=Object(c.lazy)((function(){return Promise.all([o.e(0),o.e(7),o.e(4)]).then(o.bind(null,403))})),P=Object(c.lazy)((function(){return Promise.all([o.e(0),o.e(6)]).then(o.bind(null,404))})),N={HOME:"/",ABOUT:"/about",PROJECTS:"/projects",PROJECT:"/project/:id",RESUME:"/resume"};t.a=function(){var e,t=Object(r.g)(),o=null===(e=t.state)||void 0===e?void 0:e.background;return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsxs)(r.c,{location:o||t,children:[Object(v.jsx)(r.a,{path:N.HOME,exact:!0,component:C}),Object(v.jsx)(r.a,{path:N.ABOUT,component:M}),Object(v.jsx)(r.a,{path:N.PROJECTS,component:P}),Object(v.jsx)(r.a,{path:N.PROJECT,component:_})]}),o&&Object(v.jsx)(r.a,{path:N.PROJECT,component:_})]})}},function(e,t,o){"use strict";var n=o(28),a=o.n(n),c=o(2);t.a=function(e){var t=e.onClick;return Object(c.jsx)("div",{className:a.a.backdrop,onClick:t})}},,function(e,t,o){"use strict";o.d(t,"a",(function(){return r})),o.d(t,"b",(function(){return i}));var n=o(15),a=o(1),c=o(2),r=Object(a.createContext)({dark:!0,toggle:function(){}}),i=function(e){var t=e.children,o=Object(a.useState)(!0),i=Object(n.a)(o,2),s=i[0],l=i[1];return Object(a.useEffect)((function(){var e=JSON.parse(localStorage.getItem("dark"));"boolean"!==typeof e?document.body.classList.add(s?"dark":"light"):(l(e),document.body.classList.add(e?"dark":"light"))}),[]),Object(c.jsx)(r.Provider,{value:{dark:s,toggleTheme:function(){localStorage.setItem("dark",JSON.stringify(!s)),l(!s),document.body.classList.toggle("dark",!s),document.body.classList.toggle("light",s)}},children:t})}},,function(e,t,o){"use strict";o.d(t,"a",(function(){return n}));var n=[{id:"1",title:"E-commerce",description:"An online marketplace made with React. The project was developed on 8th Apiko Intensive.",image:{src:"https://res.cloudinary.com/dx6tl6aa2/image/upload/v1628348072/portfolio/projects/react-marketplace/apiko-marketplace-lg_xppe9n.jpg",placeholderSrc:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzIDIiPjwvc3ZnPg=="},links:{site:"https://apiko-marketplace-app-snaichuk.herokuapp.com/",repo:"https://github.com/vsnaichuk/apiko-marketplace-app-snaichuk"},technologies:["#react","#redux","#socket.io","#scss","#formik","#react-window","#restapi"]},{id:"2",title:"Places App",description:"A MERN app to let users share their experience of places along with Details. It is user friendly and can be useful to many others.",image:{src:"https://res.cloudinary.com/dx6tl6aa2/image/upload/v1628348070/portfolio/projects/mern-places/mern-places-lg_xf6zom.jpg",placeholderSrc:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzIDIiPjwvc3ZnPg=="},links:{site:"https://yourplaces-sv.netlify.app/",repo:"https://github.com/vsnaichuk/MERN-places"},technologies:["#react","#nodejs","#express","#mongodb","#react-query","#react-transition-group","#mongoose","#jwt","#aws"]},{id:"3",title:"eCommerce Mobile App",description:"A Mobile eCommerce application built with React Native that includes cart functionality, push notifications, user authentication and user orders",image:{src:"https://res.cloudinary.com/dx6tl6aa2/image/upload/v1628348073/portfolio/projects/rn-shop/rn-shop-lg_fofglf.jpg",placeholderSrc:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzIDIiPjwvc3ZnPg=="},links:{site:"https://expo.dev/@v_snaichuk/online-shop-app",repo:"https://github.com/vsnaichuk/RN-shop"},technologies:["#react-native","expo","#redux","#redux-toolkit","#react-navigation","#nodejs","#express","#mongodb"]},{id:"4",title:"Places Mobile App",description:"A Mobile application for sharing places that people visit from all over the world. Uses React Native, TypeScript, MobX and Native Device Features",image:{src:"https://res.cloudinary.com/dx6tl6aa2/image/upload/v1628348073/portfolio/projects/rn-places/rn-places-lg_ljyikm.jpg",placeholderSrc:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzIDIiPjwvc3ZnPg=="},links:{site:"https://expo.dev/@v_snaichuk/rn-places",repo:"https://github.com/vsnaichuk/RN-places"},technologies:["#react-native","#typescript","#expo","#mobx","#sqlite","#react-native-maps","#expo-location"]},{id:"5",title:"Shopping Cart",description:"Simple eCommerce cart application built with React and TypeScript. Uses SWR hook to fetch the data from the API and Styled Components",image:{src:"https://res.cloudinary.com/dx6tl6aa2/image/upload/v1628348073/portfolio/projects/react-shop-cart/rn-shop-cart-lg_w3qxn6.jpg",placeholderSrc:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzIDIiPjwvc3ZnPg=="},links:{site:"https://shopping-cart-sv.netlify.app/",repo:"https://github.com/vsnaichuk/React-ShoppingCart"},technologies:["#react","#typescript","#material-ui","#styled-components","#swr","#fakestoreapi"]}]},function(e,t,o){e.exports={backdrop:"Backdrop_backdrop__2droF"}},,function(e,t,o){e.exports={preloader:"Preloader_preloader__1JJxT"}},,,,,,,function(e,t,o){},,,,,,function(e,t,o){"use strict";o.r(t);var n=o(10),a=o.n(n),c=(o(37),o(1)),r=o(13),i=o(22),s=o(30),l=o.n(s),d=o(2),p=function(){return Object(d.jsx)("div",{className:l.a.preloader})},u=function(){return Object(d.jsx)(c.Suspense,{fallback:Object(d.jsx)(p,{}),children:Object(d.jsx)(r.a,{children:Object(d.jsx)(i.a,{})})})},h=function(e){e&&e instanceof Function&&o.e(9).then(o.bind(null,401)).then((function(t){var o=t.getCLS,n=t.getFID,a=t.getFCP,c=t.getLCP,r=t.getTTFB;o(e),n(e),a(e),c(e),r(e)}))},m=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function g(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var o=e.installing;null!=o&&(o.onstatechange=function(){"installed"===o.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var j=o(25),b=function(){return Object(d.jsx)(j.b,{children:Object(d.jsx)(u,{})})};a.a.render(Object(d.jsx)(b,{}),document.getElementById("root")),h(),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");m?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(o){var n=o.headers.get("content-type");404===o.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):g(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):g(t,e)}))}}()}],[[43,2,3]]]);
//# sourceMappingURL=main.3b3512c4.chunk.js.map