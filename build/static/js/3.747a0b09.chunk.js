(this["webpackJsonpportfolio-app"]=this["webpackJsonpportfolio-app"]||[]).push([[3,8],{147:function(e,t,a){"use strict";var c=a(10),n=a(2),s=a(3),r=a(4),o=a.n(r),i=a(0),l=a(6),f=a(1),u=["as","bsPrefix","className"],j=["className"];var b=i.forwardRef((function(e,t){var a=function(e){var t=e.as,a=e.bsPrefix,c=e.className,r=Object(s.a)(e,u);a=Object(l.b)(a,"col");var i=Object(l.a)(),f=[],j=[];return i.forEach((function(e){var t,c,n,s=r[e];delete r[e],"object"===typeof s&&null!=s?(t=s.span,c=s.offset,n=s.order):t=s;var o="xs"!==e?"-".concat(e):"";t&&f.push(!0===t?"".concat(a).concat(o):"".concat(a).concat(o,"-").concat(t)),null!=n&&j.push("order".concat(o,"-").concat(n)),null!=c&&j.push("offset".concat(o,"-").concat(c))})),[Object(n.a)(Object(n.a)({},r),{},{className:o.a.apply(void 0,[c].concat(f,j))}),{as:t,bsPrefix:a,spans:f}]}(e),r=Object(c.a)(a,2),i=r[0],b=i.className,d=Object(s.a)(i,j),p=r[1],O=p.as,h=void 0===O?"div":O,x=p.bsPrefix,v=p.spans;return Object(f.jsx)(h,Object(n.a)(Object(n.a)({},d),{},{ref:t,className:o()(b,!v.length&&x)}))}));b.displayName="Col",t.a=b},155:function(e,t,a){"use strict";var c=a(2),n=a(3),s=a(4),r=a.n(s),o=a(0),i=a(6),l=a(1),f=["bsPrefix","className","as"],u=o.forwardRef((function(e,t){var a=e.bsPrefix,s=e.className,o=e.as,u=void 0===o?"div":o,j=Object(n.a)(e,f),b=Object(i.b)(a,"row"),d=Object(i.a)(),p="".concat(b,"-cols"),O=[];return d.forEach((function(e){var t,a=j[e];delete j[e],t=null!=a&&"object"===typeof a?a.cols:a;var c="xs"!==e?"-".concat(e):"";null!=t&&O.push("".concat(p).concat(c,"-").concat(t))})),Object(l.jsx)(u,Object(c.a)(Object(c.a)({ref:t},j),{},{className:r.a.apply(void 0,[s,b].concat(O))}))}));u.displayName="Row",t.a=u},87:function(e,t,a){"use strict";a.r(t);a(0),a(89);var c=a(1);t.default=function(e){var t=e.title;return Object(c.jsx)("div",{className:"header",children:t})}},91:function(e,t,a){"use strict";a.r(t);var c=a(10),n=a(0),s=a(170),r=a(142),o=a(155),i=a(147),l=a(63),f=a.n(l),u=a(87),j=a(24),b=a(29),d=a(1),p={introTextContainer:{margin:10,flexDirection:"column",whiteSpace:"pre-wrap",textAlign:"left",fontSize:"1.2em",fontWeight:500},introImageContainer:{margin:10,justifyContent:"center",alignItems:"center",display:"flex"}};t.default=function(e){var t,a=e.header,l=Object(n.useState)(null),O=Object(c.a)(l,2),h=O[0],x=O[1];return Object(n.useEffect)((function(){fetch(j.a.about,{method:"GET"}).then((function(e){return e.json()})).then((function(e){return x(e)})).catch((function(e){return e}))}),[]),Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(u.default,{title:a}),Object(d.jsx)("div",{className:"section-content-container",children:Object(d.jsx)(r.a,{children:h?Object(d.jsx)(f.a,{children:Object(d.jsxs)(o.a,{children:[Object(d.jsx)(i.a,{style:p.introTextContainer,children:(t=h.about,Object(d.jsx)(s.a,{children:t}))}),Object(d.jsx)(i.a,{style:p.introImageContainer,children:Object(d.jsx)("img",{src:null===h||void 0===h?void 0:h.imageSource,alt:"profile"})})]})}):Object(d.jsx)(b.default,{})})})]})}}}]);
//# sourceMappingURL=3.747a0b09.chunk.js.map