"use strict";(self.webpackChunkgoosetrack=self.webpackChunkgoosetrack||[]).push([[36],{459:function(n,e,t){t.d(e,{g:function(){return I}});var i,r,o,a,d,c,p,s,x,l,h=t(9439),f=t(2791),u=t(7689),g=t(168),b=t(6444),m=t(6856),w=t(466),y=b.ZP.span(i||(i=(0,g.Z)(["\n  padding: 6px 12px;\n  color: #fff;\n  font-size: 14px;\n  font-weight: 600;\n  background-color: #3e85f3;\n  border-radius: 8px;\n  cursor: pointer;\n  @media screen and (min-width: 768px) {\n    padding: 8px 12px;\n    font-size: 16px;\n  }\n"]))),k=(0,b.ZP)(w.Bb)(r||(r=(0,g.Z)(["\n  position: absolute;\n  left: 0;\n  top: 8px;\n\n  @media screen and (min-width: 768px) {\n    top: 13px;\n  }\n\n  .react-datepicker {\n    width: 235px;\n    height: 100%;\n    padding: 18px;\n  }\n\n  .react-datepicker__month-container {\n    width: 235px;\n  }\n\n  .react-datepicker__header {\n    padding: 0;\n  }\n  .react-datepicker__current-month {\n    margin: 0;\n    margin-bottom: 18px;\n  }\n  .react-datepicker__navigation {\n    top: 16px;\n    width: 20px;\n    height: 20px;\n    text-align: center;\n\n    :focus-visible {\n      outline: 2px solid #fff;\n    }\n  }\n\n  .react-datepicker__navigation--previous {\n    left: 20px;\n  }\n  .react-datepicker__navigation-icon--previous {\n    top: 1px;\n    right: 0;\n  }\n\n  .react-datepicker__navigation--next {\n    right: 20px;\n  }\n\n  .react-datepicker__navigation-icon--next {\n    top: 1px;\n    left: 0;\n  }\n  .react-datepicker__navigation-icon--next::before {\n  }\n\n  .react-datepicker__current-month {\n    font-size: 16px;\n    font-family: Inter;\n    font-weight: 600;\n    letter-spacing: -0.32px;\n  }\n  .react-datepicker__day-names {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    width: 199px;\n    margin-left: auto;\n    margin-right: auto;\n    margin-bottom: 8px;\n\n    border: none;\n  }\n\n  .react-datepicker__day-name {\n    width: 24px;\n    height: 17px;\n    padding: 0;\n\n    font-size: 14px;\n    font-family: Inter;\n    font-weight: 500;\n    letter-spacing: -0.28px;\n    line-height: 1.3;\n    color: #ffffff80;\n    cursor: default;\n  }\n\n  .react-datepicker__month {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 13px;\n    width: 235px;\n    padding-left: 18px;\n    padding-right: 18px;\n    padding-top: 10px;\n    border-top: 1px solid #ffffff33;\n  }\n\n  .react-datepicker__day--outside-month,\n  .react-datepicker__day--disabled {\n    color: #ffffff33;\n  }\n\n  .react-datepicker__day--disabled.react-datepicker__day {\n    cursor: default;\n  }\n\n  .react-datepicker__day--weekend {\n    opacity: 1;\n  }\n\n  .react-datepicker__week {\n    width: 199px;\n    display: flex;\n    justify-content: space-between;\n  }\n\n  .react-datepicker__day {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 24px;\n    height: 24px;\n\n    font-size: 14px;\n    font-family: Inter;\n    line-height: 1.3;\n    letter-spacing: -0.28px;\n    cursor: pointer;\n\n    :hover {\n      background-color: #fff;\n      color: #3e85f3;\n      border-radius: 24px;\n      opacity: 0.8;\n    }\n\n    :focus,\n    :focus-visible {\n      background-color: #fff;\n      color: #3e85f3;\n      border-radius: 24px;\n      opacity: 1;\n    }\n\n    :focus-visible {\n      outline: none;\n    }\n  }\n\n  .react-datepicker__day--keyboard-selected {\n    background-color: #fff;\n    color: #3e85f3;\n    opacity: 0.7;\n  }\n\n  .react-datepicker__day--today {\n    border: 1px solid #fff;\n    background-color: transparent;\n    color: #fff;\n  }\n  .react-datepicker__day--selected.react-datepicker__day--today,\n  .react-datepicker__day--outside-month.react-datepicker__day--selected {\n    background-color: #fff;\n    color: #3e85f3;\n  }\n"]))),_=(0,b.ZP)(w.Bh)(o||(o=(0,g.Z)(["\n  display: none;\n"]))),Z=b.ZP.div(a||(a=(0,g.Z)(["\n  position: relative;\n  display: flex;\n  justify-content: space-between;\n\n  @media screen and (min-width: 768px) {\n    justify-content: none;\n    gap: 8px;\n  }\n\n"]))),v=b.ZP.div(d||(d=(0,g.Z)(["\n  display: flex;\n"]))),P=b.ZP.button(c||(c=(0,g.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 36px;\n  height: 30px;\n  font-size: 14px;\n  color: #343434;\n  border: 1px solid #edf1f2;\n  background-color: #fff;\n  cursor: pointer;\n\n  @media screen and (min-width: 768px) {\n    width: 38px;\n    height: 34px;\n  }\n"]))),z=(0,b.ZP)(P)(p||(p=(0,g.Z)(["\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n  border-right: none;\n  background-color: ",";\n"])),(function(n){return"month"===n.typeDate&&"#CAE8FF"})),j=(0,b.ZP)(P)(s||(s=(0,g.Z)(["\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n  background-color: ",";\n"])),(function(n){return"day"===n.typeDate&&"#CAE8FF"})),D=(0,b.ZP)(m.RL9)(x||(x=(0,g.Z)(["\n  width: 16px;\n  height: 16px;\n  fill: ",";\n\n  @media screen and (min-width: 768px) {\n    width: 18px;\n    height: 18px;\n  }\n"])),(function(n){return n.disabled?"#DCE3E5":"#343434"})),C=(0,b.ZP)(m.Bqb)(l||(l=(0,g.Z)(["\n  width: 16px;\n  height: 16px;\n  fill: #343434;\n\n  @media screen and (min-width: 768px) {\n    width: 18px;\n    height: 18px;\n  }\n"]))),E=function(n,e){var t={},i="";if("month"===e)t.month="long",t.year="numeric",i=new Intl.DateTimeFormat("en-US",t).format(n);else if("day"===e){t.day="numeric",t.month="short",t.year="numeric";var r=new Intl.DateTimeFormat("en-US",t).format(n),o=r.split(",")[1],a=r.split(",")[0].split(" ").reverse().join(" ");i="".concat(a).concat(o)}return i},F=t(184),I=function(n){var e=n.minDate,t=n.date,i=n.setDate,r=n.typenav,o=(0,u.TH)().pathname,a=r||(o.includes("day")?"day":"month"),d=o.includes("calendar"),c=(0,u.s0)(),p=(0,f.useState)((function(){return E(t,a)})),s=(0,h.Z)(p,2),x=s[0],l=s[1],g=(0,f.useState)(!1),b=(0,h.Z)(g,2),m=b[0],w=b[1],P=(0,f.useState)(!1),I=(0,h.Z)(P,2),S=I[0],M=I[1],A=function(n){i(function(n,e,t){var i=new Date(n);return"month"===t?(i.setMonth(i.getMonth()+e),i):"day"===t?(i.setDate(i.getDate()+e),i):void 0}(t,n,a))};return(0,f.useEffect)((function(){if(d){var n=t.getDate();"day"===a&&c("/layout/calendar/day/".concat(n),{replace:!0}),"month"===a&&c("/layout/calendar/month/".concat(n),{replace:!0})}}),[t,c,a,d]),(0,f.useEffect)((function(){l(E(t,a))}),[a,t]),(0,f.useEffect)((function(){var n=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];if("day"===a){var i="".concat(n[t.getMonth()]," ").concat(t.getDate()," ").concat(t.getFullYear());M(i===e)}if("month"===a){var r="".concat(n[t.getMonth()]," ").concat(t.getFullYear()),o=e.split(" "),d="".concat(o[0]," ").concat(o[2]);w(!1),M(r===d)}}),[t,e,a]),(0,F.jsxs)(Z,{children:[(0,F.jsx)(y,{onClick:function(){"day"===a&&w(!0)},children:x}),(0,F.jsx)(k,{children:m&&"day"===a&&(0,F.jsx)(_,{open:!0,selected:t,calendarStartDay:1,closeOnSelect:!0,minDate:new Date(e),onChange:function(n){i(n),w(!1)},formatWeekDay:function(n){return n.slice(0,1)},onClickOutside:function(){return w(!1)}})}),(0,F.jsxs)(v,{children:[(0,F.jsx)(z,{onClick:function(){return A(-1)},disabled:S,children:(0,F.jsx)(D,{disabled:S})}),(0,F.jsx)(j,{onClick:function(){return A(1)},children:(0,F.jsx)(C,{})})]})]})}},466:function(n,e,t){t.d(e,{Bb:function(){return K},Bh:function(){return G},DT:function(){return M},II:function(){return R},Ik:function(){return I},N3:function(){return U},OR:function(){return A},Yq:function(){return L},__:function(){return Y},c1:function(){return W},eP:function(){return q},gy:function(){return O},hx:function(){return J},im:function(){return E},n2:function(){return B},oC:function(){return T},qE:function(){return S},r3:function(){return F},rE:function(){return N},vx:function(){return H}});var i,r,o,a,d,c,p,s,x,l,h,f,u,g,b,m,w,y,k,_,Z=t(168),v=t(6444),P=t(5705),z=t(9513),j=t.n(z),D=(t(8639),t(6763)),C=t(7692),E=v.ZP.div(i||(i=(0,Z.Z)(["\n display: flex;\n flex-direction: column;\n  align-items: center;\n  margin-left: auto;\n  margin-right: auto;\n  width: 100%;\n  background: rgba(255, 255, 255, 1); \n  border-radius: 16px;\n   padding: 40px 18px;\n\n    @media screen and (min-width: 1440px) {\n      padding-top: 60px;\n    }\n"]))),F=(0,v.ZP)(P.l0)(r||(r=(0,Z.Z)(["\ndisplay: flex;\nflex-direction: column;\nwidth: 100%;\n\n    @media screen and (min-width: 375px) {\n      width: 299px;\n    }\n\n    @media screen and (min-width: 768px) {\n        width: 354px;\n    }\n     @media screen and (min-width: 1440px) {\n        width: 758px;\n    }\n"]))),I=(0,v.ZP)(P.gN)(o||(o=(0,Z.Z)(['\nopacity: 1;\nposition: absolute;\nbottom: -6%;\nright: 20%;\noverflow: hidden;\nwidth: 14px;\nheight: 14px;\nborder-radius: 50%;\nfont-size: 15px;\n\n  ::before {\n    content: " +";\n    color: rgba(255, 255, 255, 1);\n    cursor: pointer;\n    padding: 5px;\n    background: rgba(62, 133, 243, 1);\n    position: absolute;\n          // transition: background \u0430\u043d\u0438\u043c\u0430\u0446\u0438\u044f;\n    top: -8px;\n    left: -6px;\n    width: 40px;\n    height: 40px;\n    }\n\n @media screen and (min-width: 768px) {\n      font-size: 24px;\n       width: 24px;\n       height: 24px;\n      bottom: -5%;\n      right: 20%;\n\n       ::before {\n         top: -8px;\n          left: -6px;\n          width: 40px;\n          height: 40px;\n       }\n    }\n']))),S=v.ZP.img(a||(a=(0,Z.Z)(["\n  border-radius: inherit;\n \n    width: 68px;\n    height: 68px;\n\n    @media screen and (min-width: 768px) {\n       top: 0;\n       left: -60px;\n       width: 120px;\n       height: 120px;\n    }\n"]))),M=v.ZP.label(d||(d=(0,Z.Z)(["\nposition: relative;\nmargin: 0 auto;\ntext-align: center;\n"]))),A=v.ZP.div(c||(c=(0,Z.Z)(["\nposition: absolute;\ntop: -71px;\nright: -36px;\nwidth: 72px;\nheight: 72px;\nborder: 2px solid ",";\nborder-radius: 50%;\n\n @media screen and (min-width: 768px) {\n       top: 0;\n       left: -60px;\n       width: 124px;\n       height: 124px;\n      \n    }\n"])),D.r.colors.primaryColor),B=v.ZP.div(p||(p=(0,Z.Z)(["\nposition: relative;\n"]))),O=v.ZP.div(s||(s=(0,Z.Z)(["\nposition: absolute;\nbottom: 3px;\nleft: 15px;\nfont-size: 10px;\nline-height: 1.16;\n@media screen and (min-width: 768px) {\n    font-size: 12px;\n    bottom: 0;\n    }\n"]))),T=(0,v.ZP)(C.Cw1)(x||(x=(0,Z.Z)(["\nposition: absolute;\nopacity: 0;\n    top: 30px;\n    right: 18px;\n  &.error {\n  opacity: 1;\n    }\n\n    @media screen and (min-width: 768px) {\n        top: 33px;\n    }\n"]))),N=(0,v.ZP)(C.wRn)(l||(l=(0,Z.Z)(["\nposition: absolute;\nopacity: 0;\n    top: 30px;\n    right: 18px;\n  &.success {\nopacity: 1;\n  }\n\n   @media screen and (min-width: 768px) {\n        top: 33px;\n    }\n"]))),q=(0,v.ZP)(C.OrA)(h||(h=(0,Z.Z)(["\nposition: absolute;\n    top: 30px;\n    right: 18px;\n    pointer-events: none;\n\n     @media screen and (min-width: 768px) {\n        top: 33px;\n    }\n"]))),H=v.ZP.p(f||(f=(0,Z.Z)(["\nmargin: 0 auto;\nmargin-top: 18px;\n\nfont-size: 14px;\nfont-weight: 700;\n\n @media screen and (min-width: 768px) {\n    margin-top: 144px;\n      font-size: 18px;\n      margin-bottom: 8px;\n    }\n"]))),J=v.ZP.span(u||(u=(0,Z.Z)(["\nmargin-top: 6px;\nmargin-bottom: 40px;\ntext-align: center;\nfont-size: 12px;\nfont-weight: 600;\nline-height: 1.17;\n\n @media screen and (min-width: 768px) {\n    font-size: 14px;\n    line-height: 1.3;\n    }\n"]))),R=(0,v.ZP)(P.gN)(g||(g=(0,Z.Z)(["\nwidth: 100%;\nheight: 40px;\nborder-radius: 8px;\nborder: 1px solid rgba(17, 17, 17, 0.1);\noutline: none;\nmargin-top: 8px;\nmargin-bottom: 18px;\npadding: 12px 14px;\nfont-weight: 600;\nfont-size: 14px;\nline-height: 1.3;\n\n  :hover,\n  :focus {\n    border-color: rgba(17, 17, 17, 1);\n  }\n  \n&.error {\n    border-color: rgba(231, 74, 59, 1);\n  }\n\n  &.success {\n    border-color: rgba(60, 188, 129, 1);\n  }\n\n\n \n\n @media screen and (min-width: 768px) {\n    font-size: 16px;\n    line-height: 1.13;\n    }\n\n@media screen and (min-width: 1440px) {\n   width: 354px;\n    }\n"]))),Y=v.ZP.label(b||(b=(0,Z.Z)(["\ndisplay: flex;\nflex-direction: column;\nfont-weight: 400;\nfont-size: 12px;\nline-height: 1.17;\ncolor: rgba(17, 17, 17, 1);\n\n&.error {\n    color: rgba(231, 74, 59, 1);\n  }\n\n  &.success {\n    color: rgba(60, 188, 129, 1);\n  }\n\n @media screen and (min-width: 768px) {\n    font-size: 14px;\n    line-height: 1.3;\n    }\n"]))),U=v.ZP.div(m||(m=(0,Z.Z)(["\n @media screen and (min-width: 1440px) {\n    display: flex;\n   flex-wrap: wrap;\n   gap: 50px;\n   margin-bottom: 70px;\n    }\n"]))),L=v.ZP.div(w||(w=(0,Z.Z)(["\n @media screen and (min-width: 1440px) {\n    display: flex;\n    flex-direction: column;\n\n    }\n"]))),W=v.ZP.button(y||(y=(0,Z.Z)(["\n  margin: 0 auto;\n  margin-top: 22px;\n  width: 195px;\n  height: 46px;\n  border-radius: 16px;\n  border: none;\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 1.3;\n  background: rgba(62, 133, 243, 1);\n  color: rgba(255, 255, 255, 1);\n  cursor: pointer;\n\n  @media screen and (min-width: 768px) {\n      width: 262px;\n    }\n\n//   transition: background-color \u0430\u043d\u0438\u043c\u0430\u0446\u0438\u044f;\n\n  :disabled {\n    cursor: not-allowed;\n  }\n\n  :hover,\n  :focus {\n    background-color: rgba(43, 120, 239, 1);\n  }\n\n  :disabled {\n    opacity: 0.4;\n  }\n\n"]))),G=(0,v.ZP)(j())(k||(k=(0,Z.Z)(["\n\nwidth: 100%;\nheight: 40px;\nborder-radius: 8px;\nborder: 1px solid rgba(17, 17, 17, 0.1);\noutline: none;\nmargin-top: 8px;\nmargin-bottom: 18px;\npadding: 12px 14px;\nfont-family: Inter-600, sans-serif;\nfont-weight: 600;\nfont-size: 14px;\nline-height: 1.3;\n        cursor: pointer;\n\n\n &.success {\n    border-color: rgba(60, 188, 129, 1);\n  }\n\n :hover,\n  :focus {\n    border-color: rgba(17, 17, 17, 1);\n  }\n\n\n @media screen and (min-width: 768px) {\n    font-size: 16px;\n    line-height: 1.3;\n    }\n\n@media screen and (min-width: 1440px) {\n   width: 354px;\n    }\n"]))),K=v.ZP.div(_||(_=(0,Z.Z)(["\nposition: relative;\n  .react-datepicker {\n    background-color: rgba(62, 133, 243, 1);\n    border-radius: 16px;\n    overflow: hidden;\n    border: none;\n    color: rgba(255, 255, 255, 1);\n    width: 327px;\n    height: 354px;\n    display: flex;\n    justify-content: center;\n    font-size: 14px;\n    font-weight: 400;\n    line-height: 1.3;\n}\n.react-datepicker__header {\n        position: relative;\n\n    background-color: rgba(62, 133, 243, 1);\n    border-bottom: 1px solid rgba(62, 133, 243, 1);\n  }\n\n  .react-datepicker__navigation-icon {\n    ::before {\n      border-color: rgba(255, 255, 255, 1);\n    }\n\n.react-datepicker__navigation--next {\n    right: 9px;\n    top: 35px;\n}\n  }\n\n  .react-datepicker__month-select,\n  .react-datepicker__year-select {\n    padding: 5px;\n    width: 90px;\n    color: rgba(255, 255, 255, 1);\n\n    text-align: center;\n    font-size: 10px;\n    overflow-y: auto;\n    cursor: pointer;\n\n    @media screen and (min-width: 375px) {\n      width: 110px;\n    }\n\n    @media screen and (min-width: 1440px) {\n      width: 120px;\n      font-size: 16px;\n    }\n\n    &:focus {\n      outline: none;\n    }\n\n    ::-webkit-scrollbar {\n      box-sizing: border-box;\n      width: 5px;\n    }\n\n    /* Track */\n    ::-webkit-scrollbar-track {\n      background: rgba(255, 255, 255, 1);\n      border-radius: 10px;\n      margin-top: 15px;\n      margin-bottom: 15px;\n    }\n\n    /* Handle */\n    ::-webkit-scrollbar-thumb {\n      border-radius: 10px;\n    }\n\n    /* Handle on hover */\n    ::-webkit-scrollbar-thumb:hover {\n    }\n  }\n\n  .react-datepicker__current-month {\n    margin-top: 15px;\n    margin-bottom: 11px;\n    font-size: 20px;\n    font-weight: 600;\n    line-height : 1.2;\n\n    color: rgba(255, 255, 255, 1);\n  }\n\n  .react-datepicker__day-name {\n     width: 46px;\n    height: 42px;\n    margin: 0;\n    padding: 9px;\n    color: rgba(255, 255, 255, 1);\n  }\n\n  .react-datepicker__day {\n    width: 46px;\n    height: 46px;\n    margin: 0;\n    padding: 9px;\n    color: rgba(255, 255, 255, 1);\n    :hover,\n    :focus {\n      background-color: var(--auth-bg-color);\n      color: var(--hover-btn-background-color);\n      border-radius: 24px;\n      opacity: 0.7;\n    }\n  }\n\n\n\n  .react-datepicker__day--weekend {\n    color: rgba(255, 255, 255, 1));\n    opacity: 40%;\n  }\n\n\n    .react-datepicker__day--today,\n  .react-datepicker__day--selected {\n    background-color: rgba(255, 255, 255, 1);\n    color: rgba(62, 133, 243, 1);\n    border-radius: 50%;\n    opacity: 1;\n  }\n\n    .react-datepicker__day--keyboard-selected{\n            border-radius: 50%;\n    }\n\n    .react-datepicker__month {\n    margin: 0;\n}\n\n\n.react-datepicker__navigation--previous {\n    left: 7px;\n    top: 30px;\n}\n\n.react-datepicker__navigation--next {\n    right: 7px;\n    top: 30px;\n}\n\n.react-datepicker__day-names {\nborder-bottom: 1px solid rgba(255, 255, 255, 0.2);\n}\n    "])))},7232:function(n,e,t){t.d(e,{_:function(){return i}});var i=function(n){return n.date}}}]);
//# sourceMappingURL=36.f54b92ee.chunk.js.map