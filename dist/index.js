function ___$insertStyle(e){if(e&&"undefined"!=typeof window){var t=document.createElement("style");return t.setAttribute("type","text/css"),t.innerHTML=e,document.head.appendChild(t),e}}Object.defineProperty(exports,"__esModule",{value:!0}),require("firebase/firestore");var react=require("react"),useFirestorePagination=function(t,e){void 0===e&&(e=10);var r=react.useState(e),n=r[0],a=r[1],u=react.useState(),c=u[0],i=u[1],s=react.useState(),o=s[0],f=s[1],l=react.useState(t.limit(e)),d=l[0],S=l[1],m=react.useState(0),p=m[0],b=m[1],g=react.useState(),h=g[0],v=g[1],y=react.useState(0),_=y[0],C=y[1],k=react.useState(!1),x=k[0],E=k[1];return react.useEffect(function(){t.get().then(function(e){return b(e.size)})},[]),react.useEffect(function(){E(!0),d.get().then(function(e){E(!1),v(e),i(e.docs[0]),f(e.docs[e.docs.length-1])})},[d]),[h,react.useCallback(function(){C(function(e){return e+1}),S(t.startAfter(o).limit(n))},[]),react.useCallback(function(){C(function(e){return e-1}),S(t.endBefore(c).limitToLast(n))},[]),react.useCallback(function(e){C(0),a(e),S(t.limit(e))},[]),x,_,p]};exports.default=useFirestorePagination;
//# sourceMappingURL=index.js.map
