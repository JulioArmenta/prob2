(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[365],{11916:function(e,n,r){"use strict";r.d(n,{LY:function(){return u},QX:function(){return l},xJ:function(){return s}});var t=r(74165),o=r(15861),i=r(31881),a=r.n(i),c=r(50804),s=function(){return function(){var e=(0,o.Z)((0,t.Z)().mark((function e(n){return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a().get("https://dental-app-backend.herokuapp.com/api/roles").then((function(e){n(f(e.data))})).catch((function(e){console.log(e)}));case 2:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},u=function(e){return function(){var n=(0,o.Z)((0,t.Z)().mark((function n(r){return(0,t.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a().post("https://dental-app-backend.herokuapp.com/api/roles",e).then((function(e){console.log(e),r(d(e.data))})).catch((function(e){console.log(e)}));case 2:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},l=function(e,n){return function(){var r=(0,o.Z)((0,t.Z)().mark((function r(o){return(0,t.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,a().put("https://dental-app-backend.herokuapp.com/api/roles/".concat(n),e).then((function(e){o(s()),console.log(e)})).catch((function(e){console.log(e)}));case 2:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()},d=function(e){return{type:c.V.createRole,payload:e}},f=function(e){return{type:c.V.getRoles,payload:e}}},87913:function(e,n,r){"use strict";r.d(n,{c:function(){return f},l:function(){return Z}});var t=r(45987),o=r(4942),i=r(1413),a=r(29439),c=r(97241),s=r(47313),u=r(72315),l=r(46417),d=["children"],f=function(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=arguments.length>2?arguments[2]:void 0,t=(0,s.useState)(e),c=(0,a.Z)(t,2),u=c[0],l=c[1],d=(0,s.useState)({}),f=(0,a.Z)(d,2),p=f[0],Z=f[1],m=function(e){var t=e.target,a=t.name,c=t.value;l((0,i.Z)((0,i.Z)({},u),{},(0,o.Z)({},a,c))),n&&r((0,o.Z)({},a,c))},h=function(){l(e),Z({})};return{values:u,setValues:l,handleInputChange:m,resetForm:h,errors:p,setErrors:Z}},p=(0,c.Z)((function(e){return{root:{"& .MuiFormControl-root":{width:"100%",marginTop:e.spacing(2),marginBottom:e.spacing(2)}}}}));function Z(e){var n=p(),r=e.children,o=(0,t.Z)(e,d);return(0,l.jsx)(u.WS,(0,i.Z)((0,i.Z)({className:n.root},o),{},{children:r}))}},51393:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return M}});var t=r(29439),o=r(97241),i=r(82277),a=r(47313),c=r(1084),s=r(11916),u=r(98456),l=r(93433),d=r(1413),f=r(87913),p=r(7501),Z=r(9019),m=[{id:1,values:{name:"/dashboard",description:"Dashboard"},name:"Dashboard"},{id:2,values:{name:"/catalogs/customers",description:"Pacientes"},name:"Pacientes"},{id:3,values:{name:"/catalogs/branches",description:"Sucursales"},name:"Sucursales"},{id:4,values:{name:"/catalogs/products",description:"Productos"},name:"Productos"},{id:5,values:{name:"/catalogs/products-categories",description:"Categorias de productos"},name:"Categorias de productos"},{id:6,values:{name:"/catalogs/providers",description:"Proveedores"},name:"Proveedores"},{id:7,values:{name:"/catalogs/sales",description:"Ventas"},name:"Ventas"},{id:8,values:{name:"/catalogs/calendar",description:"Calendario"},name:"Calendario"},{id:9,values:{name:"/catalogs/users",description:"Usuarios"},name:"Usuarios"},{id:10,values:{name:"/catalogs/roles",description:"Roles"},name:"Roles"}],h=r(46417),x={id:0,name:"",description:"",permissions:[]},v=function(e){var n=e.recordForEdit,r=e.addOrEdit,o=e.cancelForm,i=(0,a.useState)(""),c=(0,t.Z)(i,2),s=(c[0],c[1],(0,f.c)(x)),u=s.values,v=s.setValues,g=s.handleInputChange,j=s.resetForm;(0,a.useEffect)((function(){null!=n&&(console.log(n),n.id&&v((0,d.Z)({},n)))}),[n]);return(0,h.jsx)(f.l,{onSubmit:function(e){e.preventDefault(),r(u,j)},children:(0,h.jsxs)(Z.ZP,{container:!0,rowSpacing:0,columnSpacing:2,children:[(0,h.jsx)(Z.ZP,{item:!0,xs:12,children:(0,h.jsx)(p.Z.FormInput,{label:"Nombre",name:"name",value:u.name,onChange:g,required:!0})}),(0,h.jsx)(Z.ZP,{item:!0,xs:12,children:(0,h.jsx)(p.Z.FormInput,{label:"Descripci\xf3n",name:"description",multiline:!0,value:u.description,onChange:g,required:!0})}),(0,h.jsx)(Z.ZP,{item:!0,xs:12,children:(0,h.jsx)("h4",{children:"Permisos"})}),m.map((function(e,n){return(0,h.jsx)(Z.ZP,{item:!0,xs:6,sm:4,md:3,children:(0,h.jsx)(p.Z.FormCheckbox,{name:e.values.name,label:e.name,value:null!=u.permissions.find((function(n){return n.name===e.values.name})),onChange:function(n){return function(e,n){if(e.target.value)v((0,d.Z)((0,d.Z)({},u),{},{permissions:[].concat((0,l.Z)(u.permissions),[{name:e.target.name,description:n}])}));else{var r=u.permissions.filter((function(n){return n.name!=e.target.name}));v((0,d.Z)((0,d.Z)({},u),{},{permissions:r}))}}(n,e.name)}},e.id)},e.id)})),(0,h.jsxs)(Z.ZP,{item:!0,xs:12,style:{textAlign:"right",paddingTop:5},children:[(0,h.jsx)(p.Z.FormButton,{variant:"text",color:"default",size:"large",text:"Cancelar",onClick:function(){o(j)}}),(0,h.jsx)(p.Z.FormButton,{variant:"contained",color:"primary",type:"submit",size:"large",text:"Guardar"})]})]})})},g=r(40490),j=r.n(g),b=r(56863),C=r(8130),w=r(63185),k=r(56155),R=r(77166),F=r(16541),y=(r(11901),r(39615)),P=r(70816),S=r.n(P),T=r(64154),z=r(98896),A=r(58228),E=r(43619),D=r(40671),_=function(e){var n=[{title:(0,h.jsx)(F.T,{Icon:w.Z,title:"Nombre"}),field:"name"},{title:(0,h.jsx)(F.T,{Icon:C.Z,title:"Descripci\xf3n"}),field:"description"},{title:(0,h.jsx)(F.T,{Icon:b.Z,title:"Fecha de registro"}),field:"createdAt",type:"date",defaultSort:"desc",render:function(e){return S()(e.createdAt).format("DD/MM/YYYY")}}],r=e.setOpenPopup,t=e.setRecordForEdit,o=(0,c.I0)(),i=(0,c.v9)((function(e){return e.roles}));return(0,a.useEffect)((function(){0===i.length&&o((0,s.xJ)())}),[]),(0,h.jsx)(h.Fragment,{children:null!=i?(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(R.T,{title:"Roles"}),(0,h.jsx)(j(),{localization:y._,icons:T.P,columns:n,data:i,actions:(0,A.Z)("Editar Rol",s.QX,r,t,o),components:(0,E.Z)(r,t),options:{search:!0,draggable:!1,showTitle:!1,thirdSortClick:!1,searchFieldAlignment:"left",actionsColumnIndex:-1,searchFieldVariant:"outlined",searchFieldStyle:{margin:15},headerStyle:z.i,rowStyle:D.Z}})]}):(0,h.jsx)(k.$,{})})},I=(0,o.Z)((function(e){return{pageContent:{margin:e.spacing(3),padding:e.spacing(3)},searchInput:{width:"75%"}}})),M=function(){var e=(0,c.I0)(),n=(0,a.useState)(!1),r=(0,t.Z)(n,2),o=r[0],l=r[1],d=(0,a.useState)(null),f=(0,t.Z)(d,2),p=f[0],Z=f[1];I();return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(i.Z,{children:(0,h.jsx)(_,{setOpenPopup:l,setRecordForEdit:Z})}),(0,h.jsx)(u.Y,{openPopup:o,setOpenPopup:l,setRecordForEdit:Z,title:"Rol",children:(0,h.jsx)(v,{recordForEdit:p,addOrEdit:function(n,r){0===n.id?(delete n.id,e((0,s.LY)(n))):(delete n.tableData,e((0,s.QX)(n,n.id))),r(),Z(null),l(!1)},cancelForm:function(e){e(),Z(null),l(!1)}})})]})}},77166:function(e,n,r){"use strict";r.d(n,{T:function(){return i}});var t=r(61113),o=(r(47313),r(46417)),i=function(e){var n=e.title;return(0,o.jsx)(t.Z,{variant:"h4",style:{textAlign:"left",paddingLeft:15,color:"#fff",lineHeight:"1.4",backgroundColor:"#36A3EA",borderRadius:5,border:"5",fontWeight:"bold"},fontFamily:"Roboto",children:n})}},56155:function(e,n,r){"use strict";r.d(n,{$:function(){return o}});r(47313);var t=r(46417),o=function(){return(0,t.jsx)("div",{className:"spinner-container",children:(0,t.jsx)("div",{className:"loading-spinner"})})}},7501:function(e,n,r){"use strict";r.d(n,{Z:function(){return P}});var t=r(1413),o=r(45987),i=(r(47313),r(72315)),a=r(46417),c=["name","label","value","error","onChange"],s=r(6085),u=r(71807),l=r(37034),d=r(56446),f=r(91734),p=r(14636),Z=r(1550),m=r(23306),h=r(88797),x=r(15480),v=["name","label","value","onChange","items","required","size","error"],g=r(34960),j=r(23208),b=r(47421),C=r(93190),w=["name","label","value","onChange"],k=r(97241),R=r(20337),F=["text","size","color","variant","onClick"],y=(0,k.Z)((function(e){return{root:{margin:e.spacing(.5)},label:{textTransform:"none"}}})),P={FormInput:function(e){var n=e.name,r=e.label,s=e.value,u=e.error,l=void 0===u?null:u,d=e.onChange,f=(0,o.Z)(e,c);return(0,a.jsx)(i.bM,(0,t.Z)((0,t.Z)({},f),{},{variant:"outlined",label:r,name:n,value:s,onChange:d},l&&{error:!0,helperText:l}))},FormRadioGroup:function(e){var n=e.name,r=e.label,t=e.value,o=e.onChange,i=e.items;return(0,a.jsxs)(s.Z,{children:[(0,a.jsx)(u.Z,{children:r}),(0,a.jsx)(l.Z,{row:!0,name:n,value:t,onChange:o,children:i.map((function(e,n){return(0,a.jsx)(d.Z,{value:e.id,control:(0,a.jsx)(f.Z,{}),label:e.title},n)}))})]})},FormSelect:function(e){var n=e.name,r=e.label,i=e.value,c=e.onChange,s=e.items,u=e.required,l=e.size,d=e.error,f=void 0===d?null:d,g=(0,o.Z)(e,v);return(0,a.jsxs)(Z.Z,(0,t.Z)((0,t.Z)({variant:"outlined",required:u,size:l},f&&{error:!0}),{},{children:[(0,a.jsx)(m.Z,{children:r}),(0,a.jsxs)(h.Z,(0,t.Z)((0,t.Z)({label:r,name:n,value:i,onChange:c},g),{},{children:[(0,a.jsx)(p.Z,{value:"",children:"Ninguno"}),s.map((function(e,n){return(0,a.jsx)(p.Z,{value:e.id,children:e.name},e.id)}))]})),f&&(0,a.jsx)(x.Z,{children:f})]}))},FormCheckbox:function(e){var n=e.name,r=e.label,t=e.value,o=e.onChange;return(0,a.jsx)(s.Z,{children:(0,a.jsx)(d.Z,{control:(0,a.jsx)(g.Z,{name:n,color:"primary",checked:t,onChange:function(e){return o(function(e,n){return{target:{name:e,value:n}}}(n,e.target.checked))}}),label:r})})},FormDatePicker:function(e){var n=e.name,r=e.label,c=e.value,s=e.onChange,u=(0,o.Z)(e,w);return(0,a.jsx)(j._,{dateAdapter:C.Z,children:(0,a.jsx)(b.$,{label:r,name:n,value:c,onChange:function(e){return s(function(e,n){return{target:{name:e,value:n}}}(n,e))},renderInput:function(e){return(0,a.jsx)(i.bM,(0,t.Z)((0,t.Z)({},e),{},{variant:"outlined",value:e.inputProps.value},u))}})})},FormButton:function(e){var n=e.text,r=e.size,i=e.color,c=e.variant,s=e.onClick,u=(0,o.Z)(e,F),l=y();return(0,a.jsx)(R.Z,(0,t.Z)((0,t.Z)({variant:c||"contained",size:r||"large",color:i||"primary",onClick:s},u),{},{classes:{root:l.root,label:l.label},children:n}))}}},98456:function(e,n,r){"use strict";r.d(n,{Y:function(){return f}});r(47313);var t=r(97241),o=r(61809),i=r(95939),a=r(57009),c=r(20337),s=r(78371),u=r(11198),l=r(46417),d=(0,t.Z)((function(e){return{dialogWrapper:{position:"absolute",top:e.spacing(5),maxHeight:"85vh"},dialogTittle:{backgroundColor:"rgba(88,183,244,0.8)"}}})),f=function(e){var n=e.title,r=e.children,t=e.openPopup,f=e.setOpenPopup,p=e.setRecordForEdit,Z=d();return(0,l.jsxs)(o.Z,{open:t,onClose:function(e,n){(n&&"backdropClick"==n||"escapeKeyDown"==n)&&(p(null),f(!1))},maxWidth:"md",classes:{paper:Z.dialogWrapper},disableEnforceFocus:!0,fullWidth:!0,children:[(0,l.jsx)(i.Z,{style:{backgroundColor:"#36A3EA"},children:(0,l.jsxs)("div",{style:{display:"flex"},children:[(0,l.jsx)(a.Z,{variant:"h6",component:"div",style:{flexGrow:1,color:"white"},children:n}),(0,l.jsx)(c.Z,{style:{fontSize:"15px",color:"white"},onClick:function(){p(null),f(!1)},children:(0,l.jsx)(u.Z,{})})]})}),(0,l.jsx)(s.Z,{dividers:!0,children:r})]})}},58228:function(e,n,r){"use strict";r(47313);var t=r(53838),o=r(84221),i=r(29137),a=r(46417);n.Z=function(e,n,r,c,s){return[{icon:"save",tooltip:"Save User",onClick:function(e,n){return r(!0)},isFreeAction:!0},{icon:function(){return(0,a.jsx)(t.Z,{style:{color:"#1380C7"}})},tooltip:e,onClick:function(e,n){r(!0),c(n)}},function(e){return{icon:function(){return e.status?(0,a.jsx)(i.Z,{style:{color:"#1380C7"}}):(0,a.jsx)(o.Z,{style:{color:"#1380C7"}})},tooltip:e.status?"Inactivar":"Activar",onClick:function(e,r){r.status=!r.status,s(n(r,r.id))}}}]}},11901:function(e,n,r){"use strict";r.d(n,{J:function(){return a}});var t=r(24193),o=(r(47313),r(5211)),i=r(46417),a=function(e){e.title;var n=e.onClick;return(0,i.jsxs)(t.Z,{variant:"contained",onClick:n,style:{textTransform:"none",margin:1,backgroundColor:"#36A3EA",color:"white",padding:5,borderRadius:15,width:120,fontWeight:"bold"},size:"large",children:[(0,i.jsx)(o.Z,{style:{marginRight:5}}),"Agregar"]})}},43619:function(e,n,r){"use strict";var t=r(1413),o=r(40490),i=(r(47313),r(11901)),a=r(46417);n.Z=function(e,n){return{Action:function(e){return(0,a.jsx)(a.Fragment,{children:"save"===e.action.icon?(0,a.jsx)(i.J,{onClick:function(n){return e.action.onClick(n,e.data)}}):(0,a.jsx)(o.MTableAction,(0,t.Z)({},e))})},Row:function(r){return(0,a.jsx)(o.MTableBodyRow,(0,t.Z)((0,t.Z)({},r),{},{onDoubleClick:function(t){e(!0),n(r.data)}}))}}}},98896:function(e,n,r){"use strict";r.d(n,{i:function(){return t}});var t={whiteSpace:"nowrap",fontWeight:"bold",backgroundColor:"rgba(88, 183, 244, 0.2)",color:"#1380C7"}},64154:function(e,n,r){"use strict";r.d(n,{P:function(){return b}});var t=r(1413),o=r(5969),i=r(4571),a=r(22870),c=r(39402),s=r(46408),u=r(18550),l=r(65525),d=r(37867),f=r(5357),p=r(34935),Z=r(49911),m=r(34018),h=r(69184),x=r(28190),v=r(47313),g=r(53838),j=r(46417),b={Add:(0,v.forwardRef)((function(e,n){return(0,j.jsx)(f.Z,(0,t.Z)((0,t.Z)({},e),{},{ref:n}))})),Check:(0,v.forwardRef)((function(e,n){return(0,j.jsx)(Z.Z,(0,t.Z)((0,t.Z)({},e),{},{ref:n}))})),Clear:(0,v.forwardRef)((function(e,n){return(0,j.jsx)(x.Z,(0,t.Z)((0,t.Z)({},e),{},{ref:n}))})),Delete:(0,v.forwardRef)((function(e,n){return(0,j.jsx)(p.Z,(0,t.Z)((0,t.Z)({},e),{},{ref:n}))})),DetailPanel:(0,v.forwardRef)((function(e,n){return(0,j.jsx)(h.Z,(0,t.Z)((0,t.Z)({},e),{},{ref:n}))})),Edit:(0,v.forwardRef)((function(e,n){return(0,j.jsx)(g.Z,(0,t.Z)((0,t.Z)({},e),{},{ref:n}))})),Export:(0,v.forwardRef)((function(e,n){return(0,j.jsx)(s.Z,(0,t.Z)((0,t.Z)({},e),{},{ref:n}))})),Filter:(0,v.forwardRef)((function(e,n){return(0,j.jsx)(o.Z,(0,t.Z)((0,t.Z)({},e),{},{ref:n}))})),FirstPage:(0,v.forwardRef)((function(e,n){return(0,j.jsx)(i.Z,(0,t.Z)((0,t.Z)({},e),{},{ref:n}))})),LastPage:(0,v.forwardRef)((function(e,n){return(0,j.jsx)(a.Z,(0,t.Z)((0,t.Z)({},e),{},{ref:n}))})),NextPage:(0,v.forwardRef)((function(e,n){return(0,j.jsx)(h.Z,(0,t.Z)((0,t.Z)({},e),{},{ref:n}))})),PreviousPage:(0,v.forwardRef)((function(e,n){return(0,j.jsx)(m.Z,(0,t.Z)((0,t.Z)({},e),{},{ref:n}))})),ResetSearch:(0,v.forwardRef)((function(e,n){return(0,j.jsx)(x.Z,(0,t.Z)((0,t.Z)({},e),{},{ref:n}))})),Search:(0,v.forwardRef)((function(e,n){return(0,j.jsx)(u.Z,(0,t.Z)((0,t.Z)({},e),{},{ref:n}))})),SortArrow:(0,v.forwardRef)((function(e,n){return(0,j.jsx)(d.Z,(0,t.Z)((0,t.Z)({},e),{},{ref:n}))})),ThirdStateCheck:(0,v.forwardRef)((function(e,n){return(0,j.jsx)(c.Z,(0,t.Z)((0,t.Z)({},e),{},{ref:n}))})),ViewColumn:(0,v.forwardRef)((function(e,n){return(0,j.jsx)(l.Z,(0,t.Z)((0,t.Z)({},e),{},{ref:n}))}))}},40671:function(e,n){"use strict";n.Z=function(e,n){return e.status?{cursor:"pointer"}:{cursor:"pointer",backgroundColor:"rgba(252,0,0,0.1)"}}},16541:function(e,n,r){"use strict";r.d(n,{T:function(){return o}});r(47313);var t=r(46417),o=function(e){var n=e.Icon,r=e.title;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n,{style:{fontSize:18,margin:5}}),r]})}},39615:function(e,n,r){"use strict";r.d(n,{_:function(){return t}});var t={toolbar:{searchPlaceholder:"Buscar"},pagination:{labelDisplayedRows:"{from}-{to} de {count}",labelRowsSelect:"filas",lastTooltip:"Ultima pagina",nextTooltip:"Siguiente pagina",firstTooltip:"Primera pagina",previousTooltip:"Pagina anterior"},header:{actions:""},body:{emptyDataSourceMessage:"No hay registros que mostrar",filterRow:{filterTooltip:"Filter"}}}},63185:function(e,n,r){"use strict";var t=r(95318);n.Z=void 0;var o=t(r(45045)),i=r(46417),a=(0,o.default)([(0,i.jsx)("path",{d:"M17 11c.34 0 .67.04 1 .09V6.27L10.5 3 3 6.27v4.91c0 4.54 3.2 8.79 7.5 9.82.55-.13 1.08-.32 1.6-.55-.69-.98-1.1-2.17-1.1-3.45 0-3.31 2.69-6 6-6z"},"0"),(0,i.jsx)("path",{d:"M17 13c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 1.38c.62 0 1.12.51 1.12 1.12s-.51 1.12-1.12 1.12-1.12-.51-1.12-1.12.5-1.12 1.12-1.12zm0 5.37c-.93 0-1.74-.46-2.24-1.17.05-.72 1.51-1.08 2.24-1.08s2.19.36 2.24 1.08c-.5.71-1.31 1.17-2.24 1.17z"},"1")],"AdminPanelSettings");n.Z=a},8130:function(e,n,r){"use strict";var t=r(95318);n.Z=void 0;var o=t(r(45045)),i=r(46417),a=(0,o.default)((0,i.jsx)("path",{d:"M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"}),"Description");n.Z=a},51695:function(e){function n(e){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}n.keys=function(){return[]},n.resolve=n,n.id=51695,e.exports=n}}]);