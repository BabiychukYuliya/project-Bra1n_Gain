"use strict";(self.webpackChunkgoosetrack=self.webpackChunkgoosetrack||[]).push([[43],{5452:function(n,e,t){t.d(e,{n:function(){return C}});var r=t(7689),i=t(2791);var a="undefined"!==typeof window,u=function(n,e){var t=(0,i.useState)(function(n,e){return void 0!==e?e:!!a&&window.matchMedia(n).matches}(n,e)),r=t[0],u=t[1];return(0,i.useEffect)((function(){var e=!0,t=window.matchMedia(n),r=function(){e&&u(!!t.matches)};return t.addListener(r),u(t.matches),function(){e=!1,t.removeListener(r)}}),[n]),r},o=t(3629),d=t(4565),f=t(1951),s=t(9040),c=t(4690),p=t(8527),l=t(4522);function g(n){(0,l.Z)(1,arguments);var e=(0,p.default)(n),t=e.getDay();return 0===t||6===t}var x,m,h,w,v,D=t(168),y=t(6444),N=y.ZP.ul(x||(x=(0,D.Z)(["\n  height: ",";\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border-radius: 8px;\n  border: 1px solid rgba(220, 227, 229, 0.5);\n  margin-top: 24px;\n  margin-bottom: 14px;\n  padding: ",";\n\n  @media (min-width: 768px) {\n    padding: ",";\n    height: ",";\n    margin-bottom: ",";\n    margin-top: ",";\n  }\n\n  @media (min-width: 1440px) {\n    margin-bottom: ",";\n    padding: ",";\n    margin-top: 32px;\n  }\n"])),(function(n){return n.page?"50px":"74px"}),(function(n){return n.page?"16px":"14px 18px"}),(function(n){return n.page?"14px 40px":"10px 32px"}),(function(n){return n.page?"46px":"68px"}),(function(n){return n.page?"18px":"16px"}),(function(n){return n.page?"32px":"24px"}),(function(n){return n.page?"15px":"16px"}),(function(n){return n.page?"14px 60px":"10px 46px"})),Z=(y.ZP.li(m||(m=(0,D.Z)(["\n  color: #3e85f3;\n"]))),y.ZP.li(h||(h=(0,D.Z)(["\n  background: ",";\n  font-family: 'Inter';\n\n  text-align: center;\n  color: ",";\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  gap: 4px;\n  border-radius: 8px;\n\n  cursor: ",";\n\n  @media (min-width: 376px) {\n    min-width: 40px;\n    gap: 6px;\n  }\n\n  :hover {\n    color: ",";\n    background-color: ",";\n    transform: ",";\n    font-size: ",";\n    transition-duration: ",";\n  }\n"])),(function(n){return n.theme.mainBackgroundColor}),(function(n){return n.theme.CalendarHead}),(function(n){return n.page?"default":"pointer"}),(function(n){return!n.page&&"#fff"}),(function(n){return!n.page&&"#3e85f3"}),(function(n){return!n.page&&"scale(1.12)"}),(function(n){return!n.page&&"12px"}),(function(n){return!n.page&&"500ms"}))),b=y.ZP.p(w||(w=(0,D.Z)(["\n  font-weight: 600;\n  color: ",";\n  text-transform: uppercase;\n  font-size: 16px;\n  line-height: 1.12;\n  @media (min-width: 768px) {\n    font-size: ",";\n    line-height: ",";\n  }\n"])),(function(n){return n.weekend&&"#3e85f3"}),(function(n){return n.page?"16px":"14px"}),(function(n){return n.page?"1.12":"1.3"})),k=y.ZP.p(v||(v=(0,D.Z)(["\n  color: ",";\n  background-color: ",";\n  border-radius: 6px;\n  padding: 4px 6px;\n  font-weight: 700;\n\n  font-size: 12px;\n  line-height: 1.17;\n\n  @media (min-width: 768px) {\n    padding: 4px 8px;\n    border-radius: 8px;\n    font-size: 16px;\n    line-height: 1.12;\n  }\n"])),(function(n){return n.isCurrentDay&&"#fff"}),(function(n){return n.isCurrentDay?"#3e85f3":"".concat((function(n){return n.theme.mainBackgroundColor}))})),j=t(184),C=function(n){for(var e=n.date,t=n.setDate,i=(0,r.TH)().pathname.includes("day"),a=u("(max-width: 767px)")?"EEEEE":"E",p=(0,o.default)(e,{weekStartsOn:1}),l=(0,d.default)(e,{weekStartsOn:1}),x=[],m=p;m<=l;){var h=(0,f.default)(m,"d"),w=(0,f.default)(m,a);x.push({date:h,day:w,fullDate:m}),m=(0,s.default)(m,1)}return(0,j.jsx)(N,{page:!i,children:x.map((function(n){var r=(0,c.default)(n.fullDate,e);return(0,j.jsxs)(Z,{onClick:function(){return i&&t(n.fullDate)},page:!i,children:[(0,j.jsx)(b,{weekend:g(n.fullDate)&&!i,page:!i,children:n.day}),i&&(0,j.jsx)(k,{isCurrentDay:r,page:!i,children:n.date})]},n.fullDate)}))})}},8043:function(n,e,t){t.r(e),t.d(e,{default:function(){return j}});var r,i,a,u,o=t(5048),d=t(5452),f=t(168),s=t(6444),c=s.ZP.li(r||(r=(0,f.Z)(["\n  border-radius: 8px;\n  border: 1px solid rgba(220, 227, 229, 0.5);\n  width: 100%;\n  height: 100%;\n  min-height: 155px;\n  max-height: 432px;\n  height: fit-content;\n  min-width: 335px;\n  line-height: 1.12;\n  font-size: 18px;\n  font-weight: 700;\n  padding: 18px 18px 20px;\n  gap: 16px;\n  font-family: 'InterSemiBolt';\n\n  @media screen and (min-width: 768px) {\n    padding: 20px;\n    font-size: 20px;\n  }\n"]))),p=s.ZP.div(i||(i=(0,f.Z)(["\n  display: flex;\n  justify-content: space-between;\n  padding: 7px 0;\n  max-width: 301px;\n"]))),l=s.ZP.h3(a||(a=(0,f.Z)(["\n  font-family: 'InterSemiBolt';\n  font-weight: 700;\n  font-size: 18px;\n  line-height: 1.11;\n  color: #111111;\n\n  @media (min-width: 768px) {\n    font-size: 20px;\n    line-height: 1.2;\n  }\n"]))),g=t(184),x=function(n){var e=n.title;switch(e){case"toDo":return"To do";case"inProgress":return"In progress";case"done":return"Done"}return(0,g.jsx)(p,{children:(0,g.jsx)(l,{children:e})})},m=function(n){n.listId;return(0,g.jsx)(g.Fragment,{})},h=function(n){var e=n.listId,t=(n.date,n.tasks);return(0,g.jsxs)(c,{children:[(0,g.jsx)(x,{title:e}),(0,g.jsx)(m,{listId:e,tasks:t})]})},w=s.ZP.ul(u||(u=(0,f.Z)(["\n  display: flex;\n  list-style: none;\n  gap: 16px;\n  padding: 0px;\n  padding-bottom: 44px;\n  margin-top: 16px;\n  overflow: hidden;\n  overflow-x: auto;\n  scroll-snap-type: x mandatory;\n\n  @media screen and (min-width: 1280px) {\n    gap: 27px;\n  }\n"]))),v=t(4690),D=t(9831),y=function(n){var e=n.date,t=(0,o.v9)((function(n){return n.tasks.tasks})),r=t.filter((function(n){return"toDo"===n.category})),i=t.filter((function(n){return"inProgress"===n.category})),a=t.filter((function(n){return"done"===n.category})),u=r.filter((function(n){return(0,v.default)(e,(0,D.default)(n.date))})),d=i.filter((function(n){return(0,v.default)(e,(0,D.default)(n.date))})),f=a.filter((function(n){return(0,v.default)(e,(0,D.default)(n.date))}));return(0,g.jsxs)(w,{children:[(0,g.jsx)(h,{listId:"toDo",date:e,tasks:u}),(0,g.jsx)(h,{listId:"inProgress",date:e,tasks:d}),(0,g.jsx)(h,{listId:"done",date:e,tasks:f})]})},N=t(7232),Z=t(6803),b=t(2791),k=t(6175),j=function(){var n=(0,o.I0)(),e=new Date((0,o.v9)(N._));return(0,b.useEffect)((function(){n((0,k.wZ)())}),[n]),(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(d.n,{date:e,setDate:function(e){n((0,Z.G)(e.toString()))}}),(0,g.jsx)(y,{date:e})]})}},7232:function(n,e,t){t.d(e,{_:function(){return r}});var r=function(n){return n.date}},2729:function(n,e,t){t.d(e,{qk:function(){return a},vh:function(){return i},yJ:function(){return r}});Math.pow(10,8);var r=6e4,i=36e5,a=1e3},9831:function(n,e,t){t.r(e),t.d(e,{default:function(){return u}});var r=t(2729),i=t(4522),a=t(9297);function u(n,e){var t;(0,i.Z)(1,arguments);var r=(0,a.Z)(null!==(t=null===e||void 0===e?void 0:e.additionalDigits)&&void 0!==t?t:2);if(2!==r&&1!==r&&0!==r)throw new RangeError("additionalDigits must be 0, 1 or 2");if("string"!==typeof n&&"[object String]"!==Object.prototype.toString.call(n))return new Date(NaN);var u,o=c(n);if(o.date){var d=p(o.date,r);u=l(d.restDateString,d.year)}if(!u||isNaN(u.getTime()))return new Date(NaN);var f,s=u.getTime(),g=0;if(o.time&&(g=x(o.time),isNaN(g)))return new Date(NaN);if(!o.timezone){var m=new Date(s+g),w=new Date(0);return w.setFullYear(m.getUTCFullYear(),m.getUTCMonth(),m.getUTCDate()),w.setHours(m.getUTCHours(),m.getUTCMinutes(),m.getUTCSeconds(),m.getUTCMilliseconds()),w}return f=h(o.timezone),isNaN(f)?new Date(NaN):new Date(s+g+f)}var o={dateTimeDelimiter:/[T ]/,timeZoneDelimiter:/[Z ]/i,timezone:/([Z+-].*)$/},d=/^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,f=/^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,s=/^([+-])(\d{2})(?::?(\d{2}))?$/;function c(n){var e,t={},r=n.split(o.dateTimeDelimiter);if(r.length>2)return t;if(/:/.test(r[0])?e=r[0]:(t.date=r[0],e=r[1],o.timeZoneDelimiter.test(t.date)&&(t.date=n.split(o.timeZoneDelimiter)[0],e=n.substr(t.date.length,n.length))),e){var i=o.timezone.exec(e);i?(t.time=e.replace(i[1],""),t.timezone=i[1]):t.time=e}return t}function p(n,e){var t=new RegExp("^(?:(\\d{4}|[+-]\\d{"+(4+e)+"})|(\\d{2}|[+-]\\d{"+(2+e)+"})$)"),r=n.match(t);if(!r)return{year:NaN,restDateString:""};var i=r[1]?parseInt(r[1]):null,a=r[2]?parseInt(r[2]):null;return{year:null===a?i:100*a,restDateString:n.slice((r[1]||r[2]).length)}}function l(n,e){if(null===e)return new Date(NaN);var t=n.match(d);if(!t)return new Date(NaN);var r=!!t[4],i=g(t[1]),a=g(t[2])-1,u=g(t[3]),o=g(t[4]),f=g(t[5])-1;if(r)return function(n,e,t){return e>=1&&e<=53&&t>=0&&t<=6}(0,o,f)?function(n,e,t){var r=new Date(0);r.setUTCFullYear(n,0,4);var i=r.getUTCDay()||7,a=7*(e-1)+t+1-i;return r.setUTCDate(r.getUTCDate()+a),r}(e,o,f):new Date(NaN);var s=new Date(0);return function(n,e,t){return e>=0&&e<=11&&t>=1&&t<=(w[e]||(v(n)?29:28))}(e,a,u)&&function(n,e){return e>=1&&e<=(v(n)?366:365)}(e,i)?(s.setUTCFullYear(e,a,Math.max(i,u)),s):new Date(NaN)}function g(n){return n?parseInt(n):1}function x(n){var e=n.match(f);if(!e)return NaN;var t=m(e[1]),i=m(e[2]),a=m(e[3]);return function(n,e,t){if(24===n)return 0===e&&0===t;return t>=0&&t<60&&e>=0&&e<60&&n>=0&&n<25}(t,i,a)?t*r.vh+i*r.yJ+1e3*a:NaN}function m(n){return n&&parseFloat(n.replace(",","."))||0}function h(n){if("Z"===n)return 0;var e=n.match(s);if(!e)return 0;var t="+"===e[1]?-1:1,i=parseInt(e[2]),a=e[3]&&parseInt(e[3])||0;return function(n,e){return e>=0&&e<=59}(0,a)?t*(i*r.vh+a*r.yJ):NaN}var w=[31,null,31,30,31,30,31,31,30,31,30,31];function v(n){return n%400===0||n%4===0&&n%100!==0}}}]);
//# sourceMappingURL=43.5cff7c35.chunk.js.map