"use strict";(self.webpackChunkgoosetrack=self.webpackChunkgoosetrack||[]).push([[941],{1941:function(t,e,n){n.r(e),n.d(e,{default:function(){return C}});var a,r,i=n(9439),o=n(9434),s=n(168),d=n(6444),l=d.ZP.div(a||(a=(0,s.Z)(["\n  text-align: center;\n  padding: 40px;\n  border: 0.8px solid #e3f3ff;\n  border-radius: 29px;\n"]))),h=d.ZP.p(r||(r=(0,s.Z)(["\n  color: #343434;\n  font-size: 16px;\n  font-weight: 600;\n  line-height: 150%;\n  text-align: left;\n"]))),c=n(459),f=n(2791),u=n(601),x=n(6123),p=n(2839),g=n(3052),y=n(2891),j=n(5667),m=n(4400),v=n(184),D=function(t){var e=t.date,n=t.tasks,a=(0,f.useState)([]),r=(0,i.Z)(a,2),o=r[0],s=r[1],d=(0,f.useCallback)((function(t){for(var e=function(t){return isFinite(t)?t:0},n=0,a=0,r=0,i=0;i<t.length;i++)"to-do"===t[i].category?n++:"in-progress"===t[i].category?a++:r++;return[e(Math.floor(100*n/t.length)),e(Math.floor(100*a/t.length)),e(Math.floor(100*r/t.length))]}),[]);(0,f.useEffect)((function(){var t=[{name:"To Do",day:0,month:0},{name:"In Progress",day:0,month:0},{name:"Done",day:0,month:0}],a=n.filter((function(t){return new Date(t.date).getMonth()===e.getMonth()})),r=n.filter((function(t){return new Date(t.date).getDate()===e.getDate()})),i=d(a),o=d(r);t[0].month=i[0],t[1].month=i[1],t[2].month=i[2],t[0].day=o[0],t[1].day=o[1],t[2].day=o[2],s(t)}),[e,d,n]);var l=function(t){var e=t.x,n=t.y,a=t.width,r=t.value;return(0,v.jsxs)("text",{x:e+a/2,y:n,fill:"#black",textAnchor:"middle",dy:-6,children:[r," %"]})};return(0,v.jsx)(u.h,{width:"100%",height:"100%",children:(0,v.jsxs)(x.v,{width:150,height:40,data:o,barGap:-95,maxBarSize:27,margin:{top:20,right:20,left:20,bottom:20},children:[(0,v.jsx)(p.q,{strokeDasharray:"0",vertical:!1}),(0,v.jsx)(g.K,{dataKey:"name"}),(0,v.jsx)(y.B,{axisLine:!1,tickLine:!1,domain:[0,100],tickCount:6}),(0,v.jsx)(j.u,{cursor:{fill:"transparent"}}),(0,v.jsx)(m.$,{dataKey:"day",unit:"%",fill:"url(#gradient)",label:{content:l},radius:[0,0,10,10]}),(0,v.jsx)("defs",{children:(0,v.jsxs)("linearGradient",{id:"gradient",x1:"0",y1:"0",x2:"0",y2:"1",children:[(0,v.jsx)("stop",{offset:"5%",stopColor:"#FFD2DD",stopOpacity:.1}),(0,v.jsx)("stop",{offset:"95%",stopColor:"#FFD2DD",stopOpacity:1})]})}),(0,v.jsx)(m.$,{dataKey:"month",unit:"%",fill:"url(#gradient2)",label:{content:l},radius:[0,0,10,10]}),(0,v.jsx)("defs",{children:(0,v.jsxs)("linearGradient",{id:"gradient2",x1:"0",y1:"0",x2:"0",y2:"1",children:[(0,v.jsx)("stop",{offset:"5%",stopColor:"#3E85F3",stopOpacity:.1}),(0,v.jsx)("stop",{offset:"95%",stopColor:"#3E85F3",stopOpacity:1})]})})]})})},k=n(8712),b=n(8558),w=n(1661),C=function(){var t=(0,b.Y)(),e=(0,i.Z)(t,2),n=e[0],a=e[1];(0,w.h)();var r=(0,o.v9)(k.jF);return(0,v.jsxs)("div",{style:{padding:"100px"},children:[(0,v.jsx)(c.g,{minDate:"Jun 23 2023",date:n,setDate:a,typenav:"day"}),(0,v.jsxs)(l,{style:{width:860,height:440,margin:"auto"},children:[(0,v.jsx)(h,{children:"Tasks"}),(0,v.jsx)(D,{date:n,tasks:r})]})]})}}}]);
//# sourceMappingURL=941.0452c895.chunk.js.map