"use strict";(self.webpackChunkgoosetrack=self.webpackChunkgoosetrack||[]).push([[421],{73095:function(n,e,t){t.d(e,{n:function(){return k}});var i,r,o,a,d,p=t(57689),l=t(35716),s=t(13629),u=t(24565),c=t(91951),x=t(39040),f=t(54690),g=t(72680),h=t(30168),m=t(16444),b=m.ZP.ul(i||(i=(0,h.Z)(["\n  height: ",";\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border-radius: 8px;\n  border: 1px solid rgba(220, 227, 229, 0.5);\n  margin-top: 24px;\n  margin-bottom: 14px;\n  padding: ",";\n\n  @media (min-width: 768px) {\n    padding: ",";\n    height: ",";\n    margin-bottom: ",";\n    margin-top: ",";\n  }\n\n  @media (min-width: 1440px) {\n    margin-bottom: ",";\n    padding: ",";\n    margin-top: 32px;\n  }\n"])),(function(n){return n.page?"50px":"74px"}),(function(n){return n.page?"16px":"14px 18px"}),(function(n){return n.page?"14px 40px":"10px 32px"}),(function(n){return n.page?"46px":"68px"}),(function(n){return n.page?"18px":"16px"}),(function(n){return n.page?"32px":"24px"}),(function(n){return n.page?"15px":"16px"}),(function(n){return n.page?"14px 60px":"10px 46px"})),w=(m.ZP.li(r||(r=(0,h.Z)(["\n  color: #3e85f3;\n"]))),m.ZP.li(o||(o=(0,h.Z)(["\n  background: ",";\n  font-family: 'Inter';\n\n  text-align: center;\n  color: ",";\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  gap: 4px;\n  border-radius: 8px;\n\n  cursor: ",";\n\n  @media (min-width: 376px) {\n    min-width: 40px;\n    gap: 6px;\n  }\n\n  :hover {\n    color: ",";\n    background-color: ",";\n    transform: ",";\n    font-size: ",";\n    transition-duration: ",";\n  }\n"])),(function(n){return n.theme.mainBackgroundColor}),(function(n){return n.theme.CalendarHead}),(function(n){return n.page?"default":"pointer"}),(function(n){return!n.page&&"#fff"}),(function(n){return!n.page&&"#3e85f3"}),(function(n){return!n.page&&"scale(1.12)"}),(function(n){return!n.page&&"12px"}),(function(n){return!n.page&&"500ms"}))),v=m.ZP.p(a||(a=(0,h.Z)(["\n  font-weight: 600;\n  color: ",";\n  text-transform: uppercase;\n  font-size: 16px;\n  line-height: 1.12;\n  @media (min-width: 768px) {\n    font-size: ",";\n    line-height: ",";\n  }\n"])),(function(n){return n.weekend&&"#3e85f3"}),(function(n){return n.page?"16px":"14px"}),(function(n){return n.page?"1.12":"1.3"})),Z=m.ZP.p(d||(d=(0,h.Z)(["\n  color: ",";\n  background-color: ",";\n  border-radius: 6px;\n  padding: 4px 6px;\n  font-weight: 700;\n\n  font-size: 12px;\n  line-height: 1.17;\n\n  @media (min-width: 768px) {\n    padding: 4px 8px;\n    border-radius: 8px;\n    font-size: 16px;\n    line-height: 1.12;\n  }\n"])),(function(n){return n.isCurrentDay&&"#fff"}),(function(n){return n.isCurrentDay?"#3e85f3":"".concat((function(n){return n.theme.mainBackgroundColor}))})),j=t(80184),k=function(n){for(var e=n.date,t=n.setDate,i=(0,p.TH)().pathname.includes("day"),r=(0,l.Z)("(max-width: 767px)")?"EEEEE":"E",o=(0,s.default)(e,{weekStartsOn:1}),a=(0,u.default)(e,{weekStartsOn:1}),d=[],h=o;h<=a;){var m=(0,c.default)(h,"d"),k=(0,c.default)(h,r);d.push({date:m,day:k,fullDate:h}),h=(0,x.default)(h,1)}return(0,j.jsx)(b,{page:!i,children:d.map((function(n){var r=(0,f.default)(n.fullDate,e);return(0,j.jsxs)(w,{onClick:function(){return i&&t(n.fullDate)},page:!i,children:[(0,j.jsx)(v,{weekend:(0,g.Z)(n.fullDate)&&!i,page:!i,children:n.day}),i&&(0,j.jsx)(Z,{isCurrentDay:r,page:!i,children:n.date})]},n.fullDate)}))})}},18421:function(n,e,t){t.r(e),t.d(e,{default:function(){return en}});var i,r,o,a,d,p,l,s,u,c,x,f,g,h,m,b,w=t(95048),v=t(73095),Z=t(29439),j=t(23853),k=t(30168),y=t(16444),P=y.ZP.div(i||(i=(0,k.Z)(["\n  display: flex;\n  margin-right: auto;\n  margin-left: auto;\n  padding: 30px 0;\n  background-color: beige;\n"]))),C=y.ZP.button(r||(r=(0,k.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  padding: 16px 20px;\n  width: 100%;\n\n  cursor: pointer;\n  border-radius: 8px;\n  backface-visibility: hidden;\n  transition: transform 0.2s ease-in-out;\n  &:hover,\n  &:focus {\n    transform: scale(1.05);\n  }\n\n  //! \u0434\u043b\u044f \u0441\u0432\u0435\u0442\u043b\u043e\u0439 \u0442\u0435\u043c\u044b\n  // border: 2px dashed #3e85f3;\n  background-color: #e3f3ff;\n  //? background-color: ","; //\u043f\u0435\u0440\u0435\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435 \u043f\u043e \u0442\u0435\u043c\u0435\n  color: #111111;\n  //? color: ","; //\u043f\u0435\u0440\u0435\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435 \u043f\u043e \u0442\u0435\u043c\u0435\n\n  //! \u0434\u043b\u044f \u0442\u0435\u043c\u043d\u043e\u0439 \u0442\u0435\u043c\u044b\n  // border: none;\n  // background-color: #3e85f3;\n  //// ? background-color: ","; //\u043f\u0435\u0440\u0435\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435 \u043f\u043e \u0442\u0435\u043c\u0435\n  // color: #ffffff;\n  //// ? color: ","; //\u043f\u0435\u0440\u0435\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435 \u043f\u043e \u0442\u0435\u043c\u0435\n"])),(function(n){return n.theme.ltMainAccentColor}),(function(n){return n.theme.ltTextColor}),(function(n){return n.theme.ltMainAccentColor}),(function(n){return n.theme.ltTextColor})),D=y.ZP.span(o||(o=(0,k.Z)(["\n  font-size: 14px;\n  font-family: Inter, sans-serif;\n  font-weight: 600;\n  line-height: 18px;\n"]))),E=t(80184),I=function(n){var e=n.listId,t=n.handleAddTask;return(0,E.jsx)(P,{children:(0,E.jsxs)(C,{id:e,type:"button",onClick:t,children:[(0,E.jsx)(j.OvN,{size:24}),(0,E.jsx)(D,{children:"Add task"})]})})},z=y.ZP.li(a||(a=(0,k.Z)(["\n  border-radius: 8px;\n  border: 1px solid rgba(220, 227, 229, 0.5);\n  width: 100%;\n  height: 100%;\n  min-height: 155px;\n  max-height: 432px;\n  height: fit-content;\n  min-width: 335px;\n  line-height: 1.12;\n  font-size: 18px;\n  font-weight: 700;\n  padding: 18px 18px 10px 18px;\n  gap: 16px;\n  font-family: 'InterSemiBolt';\n\n\n  @media screen and (min-width: 768px) {\n    padding: 18px 22px;\n    font-size: 20px;\n  }\n"]))),F=t(78820),B=y.ZP.div(d||(d=(0,k.Z)(["\n  display: flex;\n  justify-content: space-between;\n  padding: 7px 0;\n"]))),S=y.ZP.h3(p||(p=(0,k.Z)(["\n  font-family: 'InterSemiBolt';\n  font-weight: 700;\n  font-size: 18px;\n  line-height: 1.11;\n  color: #111111;\n  text-align: center;\n\n  @media (min-width: 768px) {\n    font-size: 20px;\n    line-height: 1.2;\n  }\n"]))),T=(0,y.ZP)(F.dEn)(l||(l=(0,k.Z)(["\n  width: 22px;\n  height: 22px;\n  fill: black;\n"]))),A=y.ZP.button(s||(s=(0,k.Z)(["\n  border: none;\n  background-color: transparent;\n  width: 22px;\n  height: 22px;\n"]))),_=function(n){var e=n.title;return(0,E.jsx)(E.Fragment,{children:(0,E.jsxs)(B,{children:[(0,E.jsx)(S,{children:"toDo"===e?"To do":"inProgress"===e?"In progress":"done"===e?"Done":null}),(0,E.jsx)(A,{children:(0,E.jsx)(T,{})})]})})},G=y.ZP.ul(u||(u=(0,k.Z)(["\ndisplay: flex;\nflex-direction: column;\ngap: 14px;\nlist-style: none;\nwidth: 100%;\nheight: 356px;\n\n  overflow: hidden;\n  overflow-y: auto;\n  scroll-snap-type: y mandatory;\n\n  @media screen and (min-width: 768px) {\n  height: 372px;\n  gap: 18px;\n  }\n\n"]))),L=y.ZP.li(c||(c=(0,k.Z)(["\nmax-width: 300px;\nheight: 108px;\n\n@media screen and (min-width: 768px) {\n  height: 112px;\n  }\n"]))),M=y.ZP.div(x||(x=(0,k.Z)(["\npadding: 14px 14px 18px 14px;\nwidth: 100%;\nheight: 100%;\nbackground-color: #F7F6F9;\nborder: 1px solid #DCE3E5CC;\nborder-radius: 8px;\n\n"]))),O=y.ZP.p(f||(f=(0,k.Z)(["\nmargin-bottom: 28px;\n\ncolor: #111;\ntext-overflow: ellipsis;\nwhite-space: nowrap;\noverflow: hidden;\nfont-size: 14px;\nfont-family: Inter;\nfont-weight: 500;\nline-height: 1.3;\n\n@media screen and (min-width: 768px) {\n  margin-bottom: 32px;\n  }\n"]))),H=(y.ZP.div(g||(g=(0,k.Z)(["\npadding: 14px 14px 18px 14px;\nwidth: 100%;\nheight: 100%;\nbackground-color: #F7F6F9;\nborder: 1px solid #DCE3E5CC;\nborder-radius: 8px;\n\n"]))),y.ZP.div(h||(h=(0,k.Z)(["\n  display: flex;\n  background-color: tomato;\n  width: 62px;\n  box-sizing: content-box;\n  padding: 0px;\n  \n  @media screen and (min-width: 768px) {\n    background-color: tomato;\n    width: 68px;\n    box-sizing: content-box;\n    padding: 0px;\n\n  }\n"])))),N=y.ZP.button(m||(m=(0,k.Z)(["\n  max-width: 14px;\n  max-height: 14px;\npadding: 0px;\n  border-radius: 50%;\n  cursor: pointer;\n  &:hover,\n  &:focus {\n    fill: green;\n  }\n\n  :not(:last-child) {\nmargin-right: 10px;\n  }\n  @media (min-width: 768px) {\n    width: 16px;\n    height: 16px;\n  }\n\n"]))),Y=function(){return(0,E.jsxs)(H,{children:[(0,E.jsx)(N,{children:(0,E.jsx)("img",{src:"/project-Bra1n_Gain/images/icons/icon-arrow-circle-broken-right-16x16.svg",alt:"button-move"})}),(0,E.jsx)(N,{children:(0,E.jsx)("img",{src:"/project-Bra1n_Gain/images/icons/icon-pencil-16x16.svg",alt:"button-edit"})}),(0,E.jsx)(N,{children:(0,E.jsx)("img",{src:"/project-Bra1n_Gain/images/icons/icon-trash-16x16.svg",alt:"button-delete"})})]})},q=function(n){var e=n.task;return(0,E.jsxs)(M,{children:[(0,E.jsx)(O,{children:e}),(0,E.jsx)(Y,{})]})},J=function(n){n.listId;return(0,E.jsx)(G,{children:["Euer esse enim cillum voluptate minim voluptate velit eiusmod dolor Lorem.","Euer esse enim cillum voluptate minim voluptate velit eiusmod dolor Lorem.","Eue esse enim cillum voluptate minim voluptate velit eiusmod dolor Lorem.","Eu esse enim cillum voluptate minim voluptate velit eiusmod dolor Lorem."].map((function(n){return(0,E.jsx)(L,{children:(0,E.jsx)(q,{task:n})},n)}))})},K=t(72791),Q=function(n){var e=n.listId,t=(n.date,n.tasks),i=(0,K.useState)(!1),r=(0,Z.Z)(i,1)[0];return(0,E.jsxs)(z,{children:[(0,E.jsx)(_,{title:e}),(0,E.jsx)(J,{listId:e,tasks:t}),(0,E.jsx)(I,{listId:e,handleAddTask:function(){return r(!0)}})]})},R=y.ZP.ul(b||(b=(0,k.Z)(["\n  display: flex;\n  list-style: none;\n  gap: 16px;\n  padding: 0px;\n  padding-bottom: 44px;\n  margin-top: 16px;\n  overflow: hidden;\n  overflow-x: auto;\n  scroll-snap-type: x mandatory;\n\n  @media screen and (min-width: 1280px) {\n    gap: 27px;\n  }\n"]))),U=t(54690),V=t(59831),W=function(n){var e=n.date,t=(0,w.v9)((function(n){return n.tasks.tasks})),i=t.filter((function(n){return"toDo"===n.category})),r=t.filter((function(n){return"inProgress"===n.category})),o=t.filter((function(n){return"done"===n.category})),a=i.filter((function(n){return(0,U.default)(e,(0,V.default)(n.date))})),d=r.filter((function(n){return(0,U.default)(e,(0,V.default)(n.date))})),p=o.filter((function(n){return(0,U.default)(e,(0,V.default)(n.date))}));return(0,E.jsxs)(R,{children:[(0,E.jsx)(Q,{listId:"toDo",date:e,tasks:a}),(0,E.jsx)(Q,{listId:"inProgress",date:e,tasks:d}),(0,E.jsx)(Q,{listId:"done",date:e,tasks:p})]})},X=t(37232),$=t(86803),nn=t(56175),en=function(){var n=(0,w.I0)(),e=new Date((0,w.v9)(X._)),t=e.getDate(),i={month:e.getMonth()+1,day:t,year:e.getFullYear()};return(0,K.useEffect)((function(){n((0,nn.wZ)(i))}),[e,n]),(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(v.n,{date:e,setDate:function(e){n((0,$.G)(e.toString()))}}),(0,E.jsx)(W,{date:e})]})}},37232:function(n,e,t){t.d(e,{_:function(){return i}});var i=function(n){return n.date}}}]);
//# sourceMappingURL=421.8e9b3a7e.chunk.js.map