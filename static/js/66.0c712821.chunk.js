"use strict";(self.webpackChunkgoosetrack=self.webpackChunkgoosetrack||[]).push([[66],{5880:function(e,t,o){o.d(t,{pLM:function(){return r}});var n=o(9983);function r(e){return(0,n.w_)({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none"},child:[{tag:"path",attr:{d:"M2 6C2 5.44772 2.44772 5 3 5H21C21.5523 5 22 5.44772 22 6C22 6.55228 21.5523 7 21 7H3C2.44772 7 2 6.55228 2 6Z",fill:"currentColor"}},{tag:"path",attr:{d:"M2 12.0322C2 11.4799 2.44772 11.0322 3 11.0322H21C21.5523 11.0322 22 11.4799 22 12.0322C22 12.5845 21.5523 13.0322 21 13.0322H3C2.44772 13.0322 2 12.5845 2 12.0322Z",fill:"currentColor"}},{tag:"path",attr:{d:"M3 17.0645C2.44772 17.0645 2 17.5122 2 18.0645C2 18.6167 2.44772 19.0645 3 19.0645H21C21.5523 19.0645 22 18.6167 22 18.0645C22 17.5122 21.5523 17.0645 21 17.0645H3Z",fill:"currentColor"}}]})(e)}},9983:function(e,t,o){o.d(t,{w_:function(){return s}});var n=o(2791),r={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},i=n.createContext&&n.createContext(r),l=function(){return l=Object.assign||function(e){for(var t,o=1,n=arguments.length;o<n;o++)for(var r in t=arguments[o])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},l.apply(this,arguments)},a=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(o[n[r]]=e[n[r]])}return o};function c(e){return e&&e.map((function(e,t){return n.createElement(e.tag,l({key:t},e.attr),c(e.child))}))}function s(e){return function(t){return n.createElement(u,l({attr:l({},e.attr)},t),c(e.child))}}function u(e){var t=function(t){var o,r=e.attr,i=e.size,c=e.title,s=a(e,["attr","size","title"]),u=i||t.size||"1em";return t.className&&(o=t.className),e.className&&(o=(o?o+" ":"")+e.className),n.createElement("svg",l({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,r,s,{className:o,style:l(l({color:e.color||t.color},t.style),e.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),c&&n.createElement("title",null,c),e.children)};return void 0!==i?n.createElement(i.Consumer,null,(function(e){return t(e)})):t(r)}},6375:function(e,t,o){var n=o(184),r=o(2791),i=function(){return i=Object.assign||function(e){for(var t,o=1,n=arguments.length;o<n;o++)for(var r in t=arguments[o])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},i.apply(this,arguments)};function l(e,t,o){if(o||2===arguments.length)for(var n,r=0,i=t.length;r<i;r++)!n&&r in t||(n||(n=Array.prototype.slice.call(t,0,r)),n[r]=t[r]);return e.concat(n||Array.prototype.slice.call(t))}function a(e){var t=e.size,o=void 0===t?25:t,r=e.SVGstrokeColor,l=void 0===r?"currentColor":r,a=e.SVGstorkeWidth,c=void 0===a?0:a,s=e.SVGclassName,u=void 0===s?"star-svg":s,d=e.SVGstyle;return n.jsx("svg",i({className:u,style:d,stroke:l,fill:"currentColor",strokeWidth:c,viewBox:"0 0 24 24",width:o,height:o,xmlns:"http://www.w3.org/2000/svg"},{children:n.jsx("path",{d:"M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"})}))}function c(e,t){switch(t.type){case"PointerMove":return i(i({},e),{hoverValue:t.payload,hoverIndex:t.index});case"PointerLeave":return i(i({},e),{ratingValue:e.ratingValue,hoverIndex:0,hoverValue:null});case"MouseClick":return i(i({},e),{valueIndex:e.hoverIndex,ratingValue:t.payload});default:return e}}function s(){return"undefined"!=typeof window&&window.matchMedia("(pointer: coarse)").matches||"ontouchstart"in window||"undefined"!=typeof navigator&&navigator.maxTouchPoints>0}!function(e,t){void 0===t&&(t={});var o=t.insertAt;if("undefined"!=typeof document){var n=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css","top"===o&&n.firstChild?n.insertBefore(r,n.firstChild):n.appendChild(r),r.styleSheet?r.styleSheet.cssText=e:r.appendChild(document.createTextNode(e))}}(".style-module_starRatingWrap__q-lJC{display:inline-block;touch-action:none}.style-module_simpleStarRating__nWUxf{display:inline-block;overflow:hidden;position:relative;touch-action:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;vertical-align:middle;white-space:nowrap}.style-module_fillIcons__6---A{display:inline-block;overflow:hidden;position:absolute;top:0;white-space:nowrap}.style-module_emptyIcons__Bg-FZ{display:inline-block}.style-module_tooltip__tKc3i{background-color:#333;border-radius:5px;color:#fff;display:inline-block;padding:5px 15px;vertical-align:middle}"),t.i=function(e){var t,o,u=e.onClick,d=e.onPointerMove,v=e.onPointerEnter,f=e.onPointerLeave,p=e.initialValue,h=void 0===p?0:p,y=e.iconsCount,m=void 0===y?5:y,g=e.size,C=void 0===g?40:g,w=e.readonly,x=void 0!==w&&w,k=e.rtl,_=void 0!==k&&k,b=e.customIcons,S=void 0===b?[]:b,V=e.allowFraction,M=void 0!==V&&V,N=e.style,j=e.className,I=void 0===j?"react-simple-star-rating":j,G=e.transition,P=void 0!==G&&G,O=e.allowHover,E=void 0===O||O,A=e.disableFillHover,z=void 0!==A&&A,L=e.fillIcon,W=void 0===L?null:L,T=e.fillColor,H=void 0===T?"#ffbc0b":T,R=e.fillColorArray,B=void 0===R?[]:R,F=e.fillStyle,Z=e.fillClassName,q=void 0===Z?"filled-icons":Z,J=e.emptyIcon,K=void 0===J?null:J,U=e.emptyColor,D=void 0===U?"#cccccc":U,X=e.emptyStyle,Y=e.emptyClassName,Q=void 0===Y?"empty-icons":Y,$=e.allowTitleTag,ee=void 0===$||$,te=e.showTooltip,oe=void 0!==te&&te,ne=e.tooltipDefaultText,re=void 0===ne?"Your Rate":ne,ie=e.tooltipArray,le=void 0===ie?[]:ie,ae=e.tooltipStyle,ce=e.tooltipClassName,se=void 0===ce?"react-simple-star-rating-tooltip":ce,ue=e.SVGclassName,de=void 0===ue?"star-svg":ue,ve=e.titleSeparator,fe=void 0===ve?"out of":ve,pe=e.SVGstyle,he=e.SVGstorkeWidth,ye=void 0===he?0:he,me=e.SVGstrokeColor,ge=void 0===me?"currentColor":me,Ce=r.useReducer(c,{hoverIndex:0,valueIndex:0,ratingValue:h,hoverValue:null}),we=Ce[0],xe=we.ratingValue,ke=we.hoverValue,_e=we.hoverIndex,be=we.valueIndex,Se=Ce[1];r.useEffect((function(){h&&Se({type:"MouseClick",payload:0})}),[h]);var Ve=r.useMemo((function(){return M?2*m:m}),[M,m]),Me=r.useMemo((function(){return h>Ve?0:M||Math.floor(h)===h?Math.round(h/m*100):2*Math.ceil(h)*10}),[M,h,m,Ve]),Ne=r.useMemo((function(){return(M?2*h-1:h-1)||0}),[M,h]),je=r.useCallback((function(e){return m%2!=0?e/2/10:e*m/100}),[m]),Ie=function(e){for(var t=e.clientX,o=e.currentTarget.children[0].getBoundingClientRect(),n=o.left,r=o.right,i=o.width,l=_?r-t:t-n,a=Ve,c=Math.round(i/Ve),s=0;s<=Ve;s+=1)if(l<=c*s){a=0===s&&l<c?0:s;break}var u=a-1;a>0&&(Se({type:"PointerMove",payload:100*a/Ve,index:u}),d&&ke&&d(je(ke),u,e))},Ge=function(e){ke&&(Se({type:"MouseClick",payload:ke}),u&&u(je(ke),_e,e))},Pe=r.useMemo((function(){if(E){if(z){var e=xe&&xe||Me;return ke&&ke>e?ke:e}return ke&&ke||xe&&xe||Me}return xe&&xe||Me}),[E,z,ke,xe,Me]);r.useEffect((function(){le.length>Ve&&console.error("tooltipArray Array length is bigger then Icons Count length.")}),[le.length,Ve]);var Oe=r.useCallback((function(e){return ke&&e[_e]||xe&&e[be]||h&&e[Ne]}),[ke,_e,xe,be,h,Ne]),Ee=r.useMemo((function(){return ke&&je(ke)||xe&&je(xe)||h&&je(Me)}),[ke,je,xe,h,Me]);return n.jsxs("span",i({className:"style-module_starRatingWrap__q-lJC",style:{direction:"".concat(_?"rtl":"ltr")}},{children:[n.jsxs("span",i({className:"".concat("style-module_simpleStarRating__nWUxf"," ").concat(I),style:i({cursor:x?"":"pointer"},N),onPointerMove:x?void 0:Ie,onPointerEnter:x?void 0:function(e){v&&v(e),s()&&Ie(e)},onPointerLeave:x?void 0:function(e){s()&&Ge(),Se({type:"PointerLeave"}),f&&f(e)},onClick:x?void 0:Ge,"aria-hidden":"true"},{children:[n.jsx("span",i({className:"".concat("style-module_emptyIcons__Bg-FZ"," ").concat(Q),style:i({color:D},X)},{children:l([],Array(m),!0).map((function(e,t){var o;return n.jsx(r.Fragment,{children:(null===(o=S[t])||void 0===o?void 0:o.icon)||K||n.jsx(a,{SVGclassName:de,SVGstyle:pe,SVGstorkeWidth:ye,SVGstrokeColor:ge,size:C})},t)}))})),n.jsx("span",i({className:"".concat("style-module_fillIcons__6---A"," ").concat(q),style:i((t={},t[_?"right":"left"]=0,t.color=Oe(B)||H,t.transition=P?"width .2s ease, color .2s ease":"",t.width="".concat(Pe,"%"),t),F),title:ee?"".concat(Ee," ").concat(fe," ").concat(m):void 0},{children:l([],Array(m),!0).map((function(e,t){var o;return n.jsx(r.Fragment,{children:(null===(o=S[t])||void 0===o?void 0:o.icon)||W||n.jsx(a,{SVGclassName:de,SVGstyle:pe,SVGstorkeWidth:ye,SVGstrokeColor:ge,size:C})},t)}))}))]})),oe&&n.jsx("span",i({className:"".concat("style-module_tooltip__tKc3i"," ").concat(se),style:i((o={},o[_?"marginRight":"marginLeft"]=20,o),ae)},{children:(le.length>0?Oe(le):Ee)||re}))]}))}}}]);
//# sourceMappingURL=66.0c712821.chunk.js.map