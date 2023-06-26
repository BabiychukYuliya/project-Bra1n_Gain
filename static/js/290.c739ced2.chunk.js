"use strict";(self.webpackChunkgoosetrack=self.webpackChunkgoosetrack||[]).push([[290],{5290:function(n,t,e){e.r(t),e.d(t,{default:function(){return O}});var i,r,o,d,a,l,c,s,u,x,h,p,f,g,m=e(9434),w=e(9439),j=e(2791),b=e(168),v=e(1087),Z=e(6444),F=Z.ZP.div(i||(i=(0,b.Z)(["\n  display: grid;\n  grid-template-columns: repeat(7, 1fr);\n  border-radius: 8px;\n"]))),y=Z.ZP.div(r||(r=(0,b.Z)(["\n  color: ",";\n  background-color: ",";\n  border-radius: 6px;\n  padding: 4px 6px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 20px;\n  width: 22px;\n\n  @media (min-width: 768px) {\n    padding: 4px 8px;\n    margin: -4px -8px;\n    border-radius: 8px;\n  }\n"])),(function(n){return n.isCurrentDate?"#FFFFFF":"inherit"}),(function(n){return n.isCurrentDate?"#3e85f3":"inherit"})),k=(Z.ZP.ul(o||(o=(0,b.Z)(["\n  background-color: red;\n  color: red;\n"]))),(0,Z.ZP)(v.OL)(d||(d=(0,b.Z)(["\n  min-width: 28px;\n  min-height: 94px;\n  border: 1px solid rgba(220, 227, 229, 0.5);\n  background: #fff;\n  font-family: 'InterBolt';\n  font-style: normal;\n  font-weight: 700;\n  font-size: 16px;\n  line-height: 1.17;\n  color: ",";\n\n  &:first-child {\n    border-top-left-radius: 8px;\n  }\n\n  &:last-child {\n    border-bottom-right-radius: 8px;\n  }\n\n  &:nth-child(7) {\n    border-top-right-radius: 8px;\n  }\n\n  &:nth-last-child(7) {\n    border-bottom-left-radius: 8px;\n  }\n\n  @media (min-width: 376px) {\n    min-width: 48px;\n  }\n\n  @media (min-width: 768px) {\n    min-width: 100px;\n    height: 144px;\n    line-height: 1.12;\n  }\n\n  @media (min-width: 1280px) {\n    height: 135px;\n  }\n"])),(function(n){return n.selected?"red":"#343434"}))),D=Z.ZP.div(a||(a=(0,b.Z)(["\n  padding: 10px 12px;\n  font-weight: 700;\n  font-family: 'InterBolt';\n\n  @media (min-width: 768px) {\n    padding: 18px 22px;\n  }\n"]))),P=Z.ZP.div(l||(l=(0,b.Z)(["\n  display: flex;\n  justify-content: flex-end;\n"]))),C=(Z.ZP.div(c||(c=(0,b.Z)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),Z.ZP.div(s||(s=(0,b.Z)(["\n  background-color: #fff;\n  padding: 40px;\n"]))),Z.ZP.li(u||(u=(0,b.Z)(["\n  height: 22px;\n  padding: 4px 4px 4px 8px;\n  font-family: 'InterBolt';\n  font-style: normal;\n  font-weight: 700;\n  font-size: 10px;\n  line-height: 1.4;\n  border-radius: 8px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  margin-bottom: 4px;\n  ",";\n\n  @media (min-width: 768px) {\n    min-width: 92px;\n    height: 26px;\n    padding: 4px 8px 4px 12px;\n    font-size: 10px;\n    line-height: 1.29;\n  }\n\n  @media (min-width: 1280px) {\n    min-width: 114px;\n  }\n"])),(function(n){return function(n){switch(n.taskColor){case"low":return"color: #3E85F3; background-color: #CEEEFD;";case"medium":return"color: #F3B249; background-color: #FCF0D4;";case"high":return"color: #EA3D65; background-color: #FFD2DD;";default:return"color: #3E85F3; background-color: #FFFFFF"}}(n)}))),S=Z.ZP.div(x||(x=(0,b.Z)(["\n  margin-top: auto;\n  margin: auto;\n  color: #3e85f3;\n  text-align: center;\n  overflow: hidden;\n  font-size: 14px;\n"]))),E=Z.ZP.ul(h||(h=(0,b.Z)(["\n  list-style-type: none;\n  padding: 0 8px 0px 8px;\n"]))),z=e(5984),B=e(184),I=function(n){var t=n.date,e=n.setDate,i=(0,j.useState)(null),r=(0,w.Z)(i,2),o=r[0],d=r[1],a=(0,j.useState)([]),l=(0,w.Z)(a,2),c=l[0],s=l[1],u=(0,m.v9)((function(n){return n.tasks.tasks}));(0,j.useEffect)((function(){x()}),[t]);var x=function(){for(var n=t.getFullYear(),i=t.getMonth(),r=new Date(n,i+1,0).getDate(),a=new Date(n,i,1).getDay(),l=[],c=0===a?6:a-1,x=Math.ceil((c+r)/7),h=0;h<c;h++)l.push((0,B.jsx)(k,{},(0,z.x0)()));for(var p=function(r){var a=new Date(n,i,r),c=r===t.getDate()&&i===(new Date).getMonth()&&n===(new Date).getFullYear(),s=u.filter((function(n){return n.dateS.toDateString()===a.toDateString()}));l.push((0,B.jsxs)(k,{selected:o===t,to:"/calendar/day/".concat(r),children:[(0,B.jsx)(P,{onClick:function(){return e(a)},children:(0,B.jsx)(D,{children:(0,B.jsx)(y,{isCurrentDate:c,children:r})})}),s.length>0&&(0,B.jsx)(E,{children:s.slice(0,2).map((function(n){return(0,B.jsx)(C,{onClick:function(){return function(n){d(n)}(t)},children:n.task},(0,z.x0)())}))}),(null===s||void 0===s?void 0:s.length)>2&&(0,B.jsx)(S,{children:"..."})]},(0,z.x0)()))},f=1;f<=r;f++)p(f);for(var g=7*x-c-r,m=0;m<g;m++)l.push((0,B.jsx)(k,{},(0,z.x0)()));s(l)};return(0,B.jsx)(B.Fragment,{children:(0,B.jsx)(F,{children:c})})},M=Z.ZP.ul(p||(p=(0,b.Z)(["\n  display: grid;\n  grid-template-columns: repeat(7, 1fr);\n  border-radius: 8px;\n  border: 1px solid rgba(220, 227, 229, 0.5);\n  padding-left: 0;\n  margin-bottom: 14px;\n"]))),L=Z.ZP.div(f||(f=(0,b.Z)(["\n  height: 50px;\n  background: #ffffff;\n  font-family: 'InterSemiBolt';\n  font-style: normal;\n  font-weight: 600;\n  font-size: 16px;\n  line-height: 1.12;\n  text-align: center;\n  text-transform: uppercase;\n  color: #343434;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  &:first-child {\n    border-top-left-radius: 8px;\n    border-bottom-left-radius: 8px;\n  }\n\n  &:last-child {\n    border-top-right-radius: 8px;\n    border-bottom-right-radius: 8px;\n  }\n\n  @media (min-width: 376px) {\n    min-width: 40px;\n  }\n\n  @media (min-width: 768px) {\n    height: 46px;\n  }\n"]))),_=Z.ZP.li(g||(g=(0,b.Z)(["\n  color: #3e85f3;\n"]))),A=e(5716),U=function(){var n=(0,A.Z)("(max-width: 767px)");return(0,B.jsx)(M,{children:n?(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)(L,{children:"m"}),(0,B.jsx)(L,{children:"t"}),(0,B.jsx)(L,{children:"w"}),(0,B.jsx)(L,{children:"t"}),(0,B.jsx)(L,{children:"f"}),(0,B.jsx)(L,{children:(0,B.jsx)(_,{children:"s"})}),(0,B.jsx)(L,{children:(0,B.jsx)(_,{children:"s"})})]}):(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)(L,{children:"mon"}),(0,B.jsx)(L,{children:"tue"}),(0,B.jsx)(L,{children:"wed"}),(0,B.jsx)(L,{children:"thu"}),(0,B.jsx)(L,{children:"fri"}),(0,B.jsx)(L,{children:(0,B.jsx)(_,{children:"sat"})}),(0,B.jsx)(L,{children:(0,B.jsx)(_,{children:"sun"})})]})})},Y=e(7232),G=e(6803),O=function(){var n=(0,m.I0)(),t=new Date((0,m.v9)(Y._));return(0,B.jsxs)("div",{children:[(0,B.jsx)(U,{}),(0,B.jsx)(I,{date:t,setDate:function(t){n((0,G.G)(t.toString()))}})]})}},7232:function(n,t,e){e.d(t,{_:function(){return i}});var i=function(n){return n.date}},5716:function(n,t,e){e.d(t,{Z:function(){return o}});var i=e(2791);var r="undefined"!==typeof window,o=function(n,t){var e=(0,i.useState)(function(n,t){return void 0!==t?t:!!r&&window.matchMedia(n).matches}(n,t)),o=e[0],d=e[1];return(0,i.useEffect)((function(){var t=!0,e=window.matchMedia(n),i=function(){t&&d(!!e.matches)};return e.addListener(i),d(e.matches),function(){t=!1,e.removeListener(i)}}),[n]),o}},5984:function(n,t,e){e.d(t,{x0:function(){return i}});var i=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(n)).reduce((function(n,t){return n+=(t&=63)<36?t.toString(36):t<62?(t-26).toString(36).toUpperCase():t>62?"-":"_"}),"")}}}]);
//# sourceMappingURL=290.c739ced2.chunk.js.map