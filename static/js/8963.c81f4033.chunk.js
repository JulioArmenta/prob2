"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[8963],{48963:function(e,n,t){t.r(n),t.d(n,{default:function(){return J}});var a=t(1413),o=t(29439),s=t(47313),c=t(82295),r=t(1084),i=t(43855),l=t(31763),d=t(31881),u=t.n(d),m=t(70816),x=t.n(m),h=t(50804),p=function(e){return{type:h.V.getAppoiments,payload:e}},j=t(46417),Z=function(e){var n=Object.assign({},e),t=n.data.status;return(0,j.jsx)(l.JW.Appointment,(0,a.Z)((0,a.Z)({},n),{},{style:"Cancelada"===t?{backgroundColor:"#F73208",borderRadius:"8px"}:"Pendiente"===t?{backgroundColor:"#FFC102",borderRadius:"8px"}:"Confirmada"===t?{backgroundColor:"#14B6CA",borderRadius:"8px"}:{backgroundColor:"#10C53C",borderRadius:"8px"}}))},C=t(4942),f=t(43997),g=t(9019),b=t(47131),v=t(66067),D=t(76937),w=t(8130),y="Demo",N={icon:"".concat(y,"-icon"),textCenter:"".concat(y,"-textCenter"),firstRoom:"".concat(y,"-firstRoom"),secondRoom:"".concat(y,"-secondRoom"),thirdRoom:"".concat(y,"-thirdRoom"),header:"".concat(y,"-header"),commandButton:"".concat(y,"-commandButton")},k=(0,v.ZP)(b.Z)((function(){return(0,C.Z)({},"&.".concat(N.commandButton),{backgroundColor:"rgba(255,255,255,0.65)"})})),P=(0,v.ZP)(g.ZP)((function(){return(0,C.Z)({},"&.".concat(N.textCenter),{textAlign:"center"})})),R=(0,v.ZP)(D.Z)((function(e){var n=e.theme.palette;return(0,C.Z)({},"&.".concat(N.icon),{color:n.action.active})})),_=(0,v.ZP)(w.Z)((function(e){var n=e.theme.palette;return(0,C.Z)({},"&.".concat(N.icon),{color:n.action.active})})),B=(0,v.ZP)(l.fi.CommandButton)((function(){return(0,C.Z)({},"&.".concat(N.commandButton),{backgroundColor:"rgba(255,255,255,0.65)"})})),I=function(e){var n=Object.assign({},e);return(0,j.jsx)(l.fi.Header,(0,a.Z)((0,a.Z)({},n),{},{appointmentData:n.appointmentData,children:(0,j.jsx)(k,{onClick:function(){return console.log("BOTON DE GUARDAR")},className:N.commandButton,size:"large",children:(0,j.jsx)(f.Z,{})})}))},S=function(e){var n=Object.assign({},e),t=n.appointmentData;return(0,j.jsxs)(l.fi.Content,(0,a.Z)((0,a.Z)({},n),{},{appointmentData:t,children:[(0,j.jsxs)(g.ZP,{container:!0,alignItems:"center",children:[(0,j.jsx)(P,{item:!0,xs:2,className:N.textCenter,children:(0,j.jsx)(R,{className:N.icon})}),(0,j.jsx)(g.ZP,{item:!0,xs:10,children:(0,j.jsx)("span",{children:t.phone})})]}),(0,j.jsxs)(g.ZP,{container:!0,alignItems:"center",style:{paddingTop:5},children:[(0,j.jsx)(P,{item:!0,xs:2,className:N.textCenter,children:(0,j.jsx)(_,{className:N.icon})}),(0,j.jsx)(g.ZP,{item:!0,xs:10,children:(0,j.jsx)("span",{children:t.description})})]})]}))},O=function(e){var n=Object.assign({},e);return(0,j.jsx)(B,(0,a.Z)((0,a.Z)({},n),{},{className:N.commandButton}))},A=t(23306),F=t(47903),E=t(1550),H=t(49100),T=t(16783),U=t(50045),V=t(23208),W=t(1855),z=t(74374),G=function(e){var n=Object.assign({},e),t=n.onFieldChange,o=(0,a.Z)({},n.appointmentData),s=function(e){console.log(e),t((0,C.Z)({},e.target.name,e.target.value))};console.log(n);return(0,j.jsxs)("div",{className:"row",style:{padding:40,marginRight:0},children:[(0,j.jsx)("div",{className:"col-12",children:(0,j.jsx)(z.Z,{disablePortal:!0,id:"combo-box-demo",options:[{label:"Cosette Doody - 3435002900",id:13}],name:"customer",value:void 0==o.customer?null:o.customer,onChange:function(e,n){t({customer:n})},renderInput:function(e){return(0,j.jsx)(T.Z,(0,a.Z)((0,a.Z)({},e),{},{label:"Cliente",style:{margin:10}}))}})}),(0,j.jsxs)(V._,{dateAdapter:W.Z,children:[(0,j.jsx)("div",{className:"col-md-6",children:(0,j.jsx)(U.x,{label:"Fecha Inicio",name:"startDate",value:o.startDate,onChange:function(e){t({startDate:new Date(e)})},renderInput:function(e){return(0,j.jsx)(T.Z,(0,a.Z)((0,a.Z)({},e),{},{style:{width:"100%",margin:10}}))}})}),(0,j.jsx)("div",{className:"col-md-6",children:(0,j.jsx)(U.x,{label:"Fecha Fin",name:"endDate",value:o.endDate,onChange:function(e){t({endDate:new Date(e)})},renderInput:function(e){return(0,j.jsx)(T.Z,(0,a.Z)((0,a.Z)({},e),{},{style:{margin:10,width:"100%"}}))}})})]}),(0,j.jsx)("div",{className:"col-12",children:(0,j.jsx)(T.Z,{id:"outlined-multiline-static",label:"Comentarios",multiline:!0,rows:4,name:"description",value:o.description,onChange:s,style:{margin:10,width:"100%"}})}),(0,j.jsx)("div",{className:"col-12",children:(0,j.jsxs)(E.Z,{sx:{m:1,minWidth:"100%"},children:[(0,j.jsx)(A.Z,{id:"demo-select-small",children:"Estatus"}),(0,j.jsxs)(H.Z,{labelId:"demo-select-small",id:"demo-select-small",name:"status",value:void 0==o.status?"Pendiente":o.status,label:"Estatus",onChange:s,children:[(0,j.jsx)(F.Z,{value:"Pendiente",children:"Pendiente"}),(0,j.jsx)(F.Z,{value:"Confirmada",children:"Confirmada"}),(0,j.jsx)(F.Z,{value:"Cancelada",children:"Cancelada"}),(0,j.jsx)(F.Z,{value:"Realizada",children:"Realizada"})]})]})}),(0,j.jsx)("div",{className:"col-12",children:(0,j.jsxs)(E.Z,{sx:{m:1,minWidth:"100%"},children:[(0,j.jsx)(A.Z,{id:"select-branch",children:"Sucursal"}),(0,j.jsxs)(H.Z,{labelId:"select-branch",id:"select-branch",name:"branch",value:void 0==o.branch?1:o.branch,label:"Sucursal",onChange:s,children:[(0,j.jsx)(F.Z,{value:1,children:"Sucursal 1 "}),(0,j.jsx)(F.Z,{value:2,children:"Sucursal 2"}),(0,j.jsx)(F.Z,{value:3,children:"Sucursal 3"}),(0,j.jsx)(F.Z,{value:4,children:"Sucursal 4"})]})]})})]})},J=(t(40356),function(){var e=(0,r.I0)(),n=(0,r.v9)((function(e){return e.appoiments})),t=(0,s.useState)("work-week"),d=(0,o.Z)(t,2),m=d[0],h=d[1];(0,s.useEffect)((function(){e((function(e){u().get("https://dental-app-backend.herokuapp.com/api/appoiments").then((function(n){console.log(n);var t=n.data.map((function(e){var n=x()(e.appoiment_date).add(e.duration,"minutes");return{startDate:new Date(e.appoiment_date),endDate:new Date(n),title:"".concat(e.customer.name," ").concat(e.customer.lastname),status:e.status,phone:e.customer.phone,email:e.customer.email,description:e.description,customer:{label:"".concat(e.customer.name," ").concat(e.customer.lastname," - ").concat(e.customer.phone),id:e.customerId}}}));e(p(t))})).catch((function(e){console.log(e)}))}))}),[]);return(0,j.jsx)(c.Z,{children:(0,j.jsxs)(l.b2,{data:n,locale:"es",children:[(0,j.jsx)(i.f7,{defaultCurrentDate:Date.now(),currentViewName:m,onCurrentViewNameChange:function(e){h(e)}}),(0,j.jsx)(l.hU,{startDayHour:10,endDayHour:19,displayName:"Semana",cell:!0}),(0,j.jsx)(l.hU,{name:"work-week",displayName:"Semana Laboral",excludedDays:[0,6],startDayHour:9,endDayHour:19}),(0,j.jsx)(l.wq,{displayName:"Mes"}),(0,j.jsx)(l.oR,{displayName:"Dia"}),(0,j.jsx)(l.o8,{}),(0,j.jsx)(l.ZS,{}),(0,j.jsx)(l.w0,{messages:{today:"Hoy"}}),(0,j.jsx)(l.PY,{}),(0,j.jsx)(i.C7,{onCommitChanges:function(e){var n=Object.assign({},e);console.log(n)}}),(0,j.jsx)(i.VU,{}),(0,j.jsx)(l.JW,{appointmentComponent:Z}),(0,j.jsx)(l.fi,{showOpenButton:!0,showDeleteButton:!0,headerComponent:I,contentComponent:S,commandButtonComponent:O,showCloseButton:!0}),(0,j.jsx)(l.rT,{messages:{commitCommand:"Guardar"},basicLayoutComponent:G,textEditorComponent:function(e){return(0,j.jsx)(l.rT.TextEditor,(0,a.Z)({},e))}})]})})})}}]);