(this.webpackJsonphacker_news=this.webpackJsonphacker_news||[]).push([[0],{38:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){},48:function(e,t,n){},49:function(e,t,n){},50:function(e,t,n){},51:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n(0),a=n(15),s=n.n(a),i=n(11),o=n(3),l=n(7),d=n(12),u=n(14),j=n.n(u),b=n(20),m="https://hacker-news.firebaseio.com/v0/",h=m+'newstories.json?print=pretty&orderBy="$key"&limitToFirst=100',f=document.getElementById("preloader");function O(){return x.apply(this,arguments)}function x(){return(x=Object(b.a)(j.a.mark((function e(){var t,n,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(h);case 2:if(!(t=e.sent).ok){e.next=10;break}return e.next=6,t.json();case 6:return n=e.sent,e.abrupt("return",n);case 10:(c=document.createElement("div")).textContent="\u041e\u0448\u0438\u0431\u043a\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438",f.appendChild(c);case 13:case 14:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function _(e){return p.apply(this,arguments)}function p(){return(p=Object(b.a)(j.a.mark((function e(t){var n,c,r,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=m+"item/".concat(t,".json?print=pretty"),e.next=3,fetch(n);case 3:if(!(c=e.sent).ok){e.next=11;break}return e.next=7,c.json();case 7:return r=e.sent,e.abrupt("return",r);case 11:(a=document.createElement("div")).textContent="\u041e\u0448\u0438\u0431\u043a\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438",f.appendChild(a);case 14:case 15:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var v=function(e){return{type:"UPDATE_IDS",ids:e}},g=function(e){return{type:"UPDATE_CURRENT_DATA",currentData:e}},N=function(e){return{type:"LOADING",loading:e}};function k(e){return new Date(1e3*e).toLocaleString()}n(38);var y={updateCurrentData:g},w=Object(r.memo)(Object(l.b)(null,y)((function(e){var t=e.item_id,n=e.updateCurrentData,a=Object(r.useState)(null),s=Object(d.a)(a,2),o=s[0],l=s[1];return Object(r.useEffect)((function(){return _(t).then((function(e){return l(e)})),function(){l(null)}}),[t]),o?Object(c.jsxs)("div",{className:"item",children:[Object(c.jsxs)("div",{className:"item__header",children:[Object(c.jsx)(i.b,{to:{pathname:"/info/".concat(o.id)},onClick:function(){return n(o)},children:Object(c.jsx)("h2",{className:"item__label",children:o.title})}),Object(c.jsx)("span",{className:"item__comments-count",children:o.descendants})]}),Object(c.jsxs)("div",{className:"item__info",children:[Object(c.jsxs)("div",{className:"score",children:["\u0420\u0435\u0439\u0442\u0438\u043d\u0433: ",o.score]}),Object(c.jsx)("div",{className:"author",children:o.by}),Object(c.jsx)("div",{className:"date",children:k(o.time)})]})]}):null})));n(42);function D(){return Object(c.jsx)("div",{className:"buttonPrev nav_btn",children:Object(c.jsx)("div",{children:Object(c.jsx)(i.b,{to:{pathname:"/"},children:"\u041d\u0430\u0437\u0430\u0434"})})})}function I(e){var t=e.reload;return Object(c.jsx)("div",{className:"buttonPrev nav_btn",children:Object(c.jsx)("div",{onClick:function(){return t()},children:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c"})})}n(43);var E={updateIds:v,loading:N},C=Object(l.b)((function(e){return{ids:e.ids}}),E)((function(e){var t=e.ids,n=e.updateIds,r=e.loading;return Object(c.jsxs)("section",{className:"main__list",children:[Object(c.jsx)(I,{reload:function(){r(!0),O().then((function(e){n(e),r(!1)}))}}),t.map((function(e,t){return Object(c.jsx)(w,{item_id:e},t)}))]})}));n(44);function S(e){var t=e.comment_id,n=e.root,a=Object(r.useState)(null),s=Object(d.a)(a,2),i=s[0],o=s[1];Object(r.useEffect)((function(){_(t).then((function(e){o(e)}))}),[t]);var l=i&&i.kids&&i.kids.length?i.kids.map((function(e,t){return Object(c.jsx)(S,{comment_id:e},t)})):null;return i?Object(c.jsxs)("div",{className:"comment",id:"comment",children:[Object(c.jsxs)("div",{className:"comment__header",children:[i.by,", ",k(i.time)]}),Object(c.jsx)("div",{className:"comment__text",dangerouslySetInnerHTML:{__html:i.text}}),n&&i&&i.kids&&i.kids.length?Object(c.jsx)("div",{className:"comment__btn",onClick:function(e){"block"===e.target.nextSibling.style.display?e.target.nextSibling.style.display="none":e.target.nextSibling.style.display="block"},children:"\u0412\u0441\u0435 \u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0438"}):null,Object(c.jsx)("div",{id:n?"descendants root":"descendants",style:n?{display:"none"}:{display:"block"},children:l})]}):null}var A=Object(r.memo)(S);n(45);var T={updateCurrentData:g,loading:N},H=Object(r.memo)(Object(l.b)((function(e){return{currentData:e.currentData,currentLoading:e.loading}}),T)((function(e){var t=e.currentData,n=e.updateCurrentData,a=e.currentLoading,s=e.loading;Object(r.useEffect)((function(){0===Object.keys(t).length?_(window.localStorage.getItem("id")).then((function(e){n(e)})):window.localStorage.setItem("id","".concat(t.id))}),[t]),t&&a&&_(window.localStorage.getItem("id")).then((function(e){s(!1),n(e)}));var i=t&&t.descendants&&t.kids.length?t.kids.map((function(e,t){return Object(c.jsx)(A,{comment_id:e,root:!0},t)})):"\u041d\u0435\u0442 \u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0435\u0432";return Object(c.jsxs)("section",{className:"info__list",children:[Object(c.jsxs)("div",{className:"info__header",children:[Object(c.jsx)("h2",{className:"info__label",id:"qwe",children:t.title}),Object(c.jsx)("a",{href:t.url,className:"info__url",target:"_blank",rel:"noreferrer",children:t.url})]}),Object(c.jsxs)("div",{className:"info__nav-btns",children:[Object(c.jsx)(D,{}),Object(c.jsx)(I,{reload:function(){s(!0),_(t.id).then((function(e){n(e)}))}})]}),Object(c.jsx)("hr",{}),Object(c.jsxs)("div",{className:"info__block",children:[Object(c.jsxs)("div",{className:"info__block_author",children:["\u0410\u0432\u0442\u043e\u0440: ",Object(c.jsx)("span",{children:t.by})," "]}),Object(c.jsxs)("div",{className:"info__block_date",children:["\u0414\u0430\u0442\u0430 \u0438 \u0432\u0440\u0435\u043c\u044f \u043f\u0443\u0431\u043b\u0438\u043a\u0430\u0446\u0438\u0438: ",Object(c.jsx)("span",{children:k(t.time)})," "]}),Object(c.jsxs)("div",{className:"info__block_comments-count",children:["\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0435\u0432: ",Object(c.jsx)("span",{children:t.descendants})," "]})]}),Object(c.jsx)("div",{className:"info__comments",children:i})]})})));n(46);var L={updateIds:v,loading:N},P=Object(l.b)(null,L)((function(e){var t=e.updateIds,n=e.loading,a=Object(r.useState)(l()),s=Object(d.a)(a,2),i=s[0],o=s[1];function l(){var e=new Date;return{h:e.getHours()<10?"0"+e.getHours():e.getHours(),m:e.getMinutes()<10?"0"+e.getMinutes():e.getMinutes()}}return Object(r.useEffect)((function(){var e=setInterval((function(){o(l())}),1e3);return n(!0),O().then((function(e){t(e),n(!1)})),function(){clearInterval(e)}}),[i.m]),Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)("header",{className:"header",children:[Object(c.jsx)("h1",{className:"header__label",id:"header",children:"Hacker News"}),Object(c.jsxs)("div",{className:"header__timer",id:"timer",children:[Object(c.jsx)("span",{children:i.h}),":",Object(c.jsx)("span",{children:i.m})]})]})})}));n(47);var U=function(){return Object(c.jsx)("footer",{className:"footer",children:Object(c.jsxs)("div",{className:"footer__links",children:[Object(c.jsx)("div",{className:"footer__link",children:Object(c.jsx)("a",{href:"https://github.com/freak1ngawesome",target:"_blank",rel:"noreferrer",children:"Github \u0430\u0432\u0442\u043e\u0440\u0430"})}),Object(c.jsx)("div",{className:"footer__link",children:Object(c.jsx)("a",{href:"https://news.ycombinator.com/news",target:"_blank",rel:"noreferrer",children:"Hucker News"})})]})})},M=n.p+"static/media/preloader.5ec33ab4.svg";n(48);var R=Object(l.b)((function(e){return{loading:e.loading}}),null)((function(e){return e.loading?Object(c.jsx)("div",{className:"preloader",id:"preloader",children:Object(c.jsx)("img",{src:M,alt:"loading...",className:"preloader__img"})}):null}));n(49);var B=function(){return Object(c.jsxs)(i.a,{children:[Object(c.jsx)(R,{}),Object(c.jsxs)("div",{className:"container",children:[Object(c.jsx)(P,{}),Object(c.jsxs)(o.c,{children:[Object(c.jsx)(o.a,{path:"/info",component:H}),Object(c.jsx)(o.a,{path:"/",component:C})]}),Object(c.jsx)(U,{})]})]})},G=n(16),F=n(9),J={ids:[],currentData:{},loading:!0},q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE_IDS":return Object(F.a)(Object(F.a)({},e),{},{ids:t.ids});case"UPDATE_CURRENT_DATA":return Object(F.a)(Object(F.a)({},e),{},{currentData:t.currentData});case"LOADING":return Object(F.a)(Object(F.a)({},e),{},{loading:t.loading});default:return e}},$=Object(G.b)(q);n(50);s.a.render(Object(c.jsx)(l.a,{store:$,children:Object(c.jsx)(B,{})}),document.getElementById("root"))}},[[51,1,2]]]);
//# sourceMappingURL=main.7806c080.chunk.js.map