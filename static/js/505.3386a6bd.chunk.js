"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[505],{42251:function(n,e,r){r.d(e,{Qq:function(){return c},lq:function(){return f},yd:function(){return l}});var t=r(74165),o=r(15861),a=r(31881),i=r.n(a),u=(r(70816),r(50804)),c=function(){return function(n){i().get("https://dental-app-backend.herokuapp.com/api/branches").then((function(e){console.log(e),n(p(e.data))})).catch((function(n){console.log(n)}))}},l=function(n){return function(){var e=(0,o.Z)((0,t.Z)().mark((function e(r){return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i().post("https://dental-app-backend.herokuapp.com/api/branches",n).then((function(n){r(s(n.data))})).catch((function(n){console.log(n)}));case 2:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},f=function(n,e){return function(){var r=(0,o.Z)((0,t.Z)().mark((function r(o){return(0,t.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,i().put("https://dental-app-backend.herokuapp.com/api/branches/".concat(e),n).then((function(e){o(d(n))})).catch((function(n){console.log(n)}));case 2:case"end":return r.stop()}}),r)})));return function(n){return r.apply(this,arguments)}}()},s=function(n){return{type:u.V.createBranch,payload:n}},d=function(n){return{type:u.V.updateBranch,payload:n}},p=function(n){return{type:u.V.getBranches,payload:n}}},20611:function(n,e,r){r.d(e,{Dg:function(){return c},ZD:function(){return f},s2:function(){return l}});var t=r(74165),o=r(15861),a=r(31881),i=r.n(a),u=(r(70816),r(50804)),c=function(){return function(n){i().get("https://dental-app-backend.herokuapp.com/api/products").then((function(e){console.log(e),n(p(e.data))})).catch((function(n){console.log(n)}))}},l=function(n){return function(){var e=(0,o.Z)((0,t.Z)().mark((function e(r){return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i().post("https://dental-app-backend.herokuapp.com/api/products",n).then((function(n){r(s(n.data))})).catch((function(n){console.log(n)}));case 2:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},f=function(n,e){return function(){var r=(0,o.Z)((0,t.Z)().mark((function r(o){return(0,t.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,i().put("https://dental-app-backend.herokuapp.com/api/products/".concat(e),n).then((function(e){o(d(n))})).catch((function(n){console.log(n)}));case 2:case"end":return r.stop()}}),r)})));return function(n){return r.apply(this,arguments)}}()},s=function(n){return{type:u.V.createProduct,payload:n}},d=function(n){return{type:u.V.updateProduct,payload:n}},p=function(n){return{type:u.V.getProducts,payload:n}}},87913:function(n,e,r){r.d(e,{c:function(){return d},l:function(){return Z}});var t=r(45987),o=r(4942),a=r(1413),i=r(29439),u=r(97241),c=r(47313),l=r(72315),f=r(46417),s=["children"],d=function(n){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=arguments.length>2?arguments[2]:void 0,t=(0,c.useState)(n),u=(0,i.Z)(t,2),l=u[0],f=u[1],s=(0,c.useState)({}),d=(0,i.Z)(s,2),p=d[0],Z=d[1],h=function(n){var t=n.target,i=t.name,u=t.value;f((0,a.Z)((0,a.Z)({},l),{},(0,o.Z)({},i,u))),e&&r((0,o.Z)({},i,u))},g=function(){f(n),Z({})};return{values:l,setValues:f,handleInputChange:h,resetForm:g,errors:p,setErrors:Z}},p=(0,u.Z)((function(n){return{root:{"& .MuiFormControl-root":{width:"100%",marginTop:n.spacing(2),marginBottom:n.spacing(2)}}}}));function Z(n){var e=p(),r=n.children,o=(0,t.Z)(n,s);return(0,f.jsx)(l.WS,(0,a.Z)((0,a.Z)({className:e.root},o),{},{children:r}))}},77166:function(n,e,r){r.d(e,{T:function(){return a}});var t=r(61113),o=(r(47313),r(46417)),a=function(n){var e=n.title;return(0,o.jsx)(t.Z,{variant:"h4",style:{textAlign:"left",paddingLeft:15,color:"#fff",lineHeight:"1.4",backgroundColor:"#36A3EA",borderRadius:5,border:"5",fontWeight:"bold"},fontFamily:"Roboto",children:e})}},56155:function(n,e,r){r.d(e,{$:function(){return o}});r(47313);var t=r(46417),o=function(){return(0,t.jsx)("div",{className:"spinner-container",children:(0,t.jsx)("div",{className:"loading-spinner"})})}},7501:function(n,e,r){r.d(e,{Z:function(){return F}});var t=r(1413),o=r(45987),a=(r(47313),r(72315)),i=r(46417),u=["name","label","value","error","onChange"],c=r(6085),l=r(71807),f=r(37034),s=r(56446),d=r(91734),p=r(14636),Z=r(1550),h=r(23306),g=r(49100),v=r(15480),x=["name","label","value","onChange","items","required","size","error"],m=r(34960),b=r(23208),j=r(47421),w=r(93190),k=["name","label","value","onChange"],C=r(97241),y=r(20337),R=["text","size","color","variant","onClick"],P=(0,C.Z)((function(n){return{root:{margin:n.spacing(.5)},label:{textTransform:"none"}}})),F={FormInput:function(n){var e=n.name,r=n.label,c=n.value,l=n.error,f=void 0===l?null:l,s=n.onChange,d=(0,o.Z)(n,u);return(0,i.jsx)(a.bM,(0,t.Z)((0,t.Z)({},d),{},{variant:"outlined",label:r,name:e,value:c,onChange:s},f&&{error:!0,helperText:f}))},FormRadioGroup:function(n){var e=n.name,r=n.label,t=n.value,o=n.onChange,a=n.items;return(0,i.jsxs)(c.Z,{children:[(0,i.jsx)(l.Z,{children:r}),(0,i.jsx)(f.Z,{row:!0,name:e,value:t,onChange:o,children:a.map((function(n,e){return(0,i.jsx)(s.Z,{value:n.id,control:(0,i.jsx)(d.Z,{}),label:n.title},e)}))})]})},FormSelect:function(n){var e=n.name,r=n.label,a=n.value,u=n.onChange,c=n.items,l=n.required,f=n.size,s=n.error,d=void 0===s?null:s,m=(0,o.Z)(n,x);return(0,i.jsxs)(Z.Z,(0,t.Z)((0,t.Z)({variant:"outlined",required:l,size:f},d&&{error:!0}),{},{children:[(0,i.jsx)(h.Z,{children:r}),(0,i.jsxs)(g.Z,(0,t.Z)((0,t.Z)({label:r,name:e,value:a,onChange:u},m),{},{children:[(0,i.jsx)(p.Z,{value:"",children:"Ninguno"}),c.map((function(n,e){return(0,i.jsx)(p.Z,{value:n.id,children:n.name},n.id)}))]})),d&&(0,i.jsx)(v.Z,{children:d})]}))},FormCheckbox:function(n){var e=n.name,r=n.label,t=n.value,o=n.onChange;return(0,i.jsx)(c.Z,{children:(0,i.jsx)(s.Z,{control:(0,i.jsx)(m.Z,{name:e,color:"primary",checked:t,onChange:function(n){return o(function(n,e){return{target:{name:n,value:e}}}(e,n.target.checked))}}),label:r})})},FormDatePicker:function(n){var e=n.name,r=n.label,u=n.value,c=n.onChange,l=(0,o.Z)(n,k);return(0,i.jsx)(b._,{dateAdapter:w.Z,children:(0,i.jsx)(j.$,{label:r,name:e,value:u,onChange:function(n){return c(function(n,e){return{target:{name:n,value:e}}}(e,n))},renderInput:function(n){return(0,i.jsx)(a.bM,(0,t.Z)((0,t.Z)({},n),{},{variant:"outlined",value:n.inputProps.value},l))}})})},FormButton:function(n){var e=n.text,r=n.size,a=n.color,u=n.variant,c=n.onClick,l=(0,o.Z)(n,R),f=P();return(0,i.jsx)(y.Z,(0,t.Z)((0,t.Z)({variant:u||"contained",size:r||"large",color:a||"primary",onClick:c},l),{},{classes:{root:f.root,label:f.label},children:e}))}}},98456:function(n,e,r){r.d(e,{Y:function(){return d}});r(47313);var t=r(97241),o=r(61809),a=r(95939),i=r(57009),u=r(20337),c=r(78371),l=r(11198),f=r(46417),s=(0,t.Z)((function(n){return{dialogWrapper:{position:"absolute",top:n.spacing(5)},dialogTittle:{backgroundColor:"rgba(88,183,244,0.8)"}}})),d=function(n){var e=n.title,r=n.children,t=n.openPopup,d=n.setOpenPopup,p=n.setRecordForEdit,Z=s();return(0,f.jsxs)(o.Z,{open:t,onClose:function(n,e){(e&&"backdropClick"==e||"escapeKeyDown"==e)&&(p(null),d(!1))},maxWidth:"md",classes:{paper:Z.dialogWrapper},disableEnforceFocus:!0,fullWidth:!0,children:[(0,f.jsx)(a.Z,{style:{backgroundColor:"#36A3EA"},children:(0,f.jsxs)("div",{style:{display:"flex"},children:[(0,f.jsx)(i.Z,{variant:"h6",component:"div",style:{flexGrow:1,color:"white"},children:e}),(0,f.jsx)(u.Z,{style:{fontSize:"15px",color:"white"},onClick:function(){p(null),d(!1)},children:(0,f.jsx)(l.Z,{})})]})}),(0,f.jsx)(c.Z,{dividers:!0,children:r})]})}},11901:function(n,e,r){r.d(e,{J:function(){return i}});var t=r(24193),o=(r(47313),r(5211)),a=r(46417),i=function(n){n.title;var e=n.onClick;return(0,a.jsxs)(t.Z,{variant:"contained",onClick:e,style:{textTransform:"none",margin:1,backgroundColor:"#36A3EA",color:"white",padding:5,borderRadius:15,width:120,fontWeight:"bold"},size:"large",children:[(0,a.jsx)(o.Z,{style:{marginRight:5}}),"Agregar"]})}},98896:function(n,e,r){r.d(e,{i:function(){return t}});var t={whiteSpace:"nowrap",fontWeight:"bold",backgroundColor:"rgba(88, 183, 244, 0.2)",color:"#1380C7"}},64154:function(n,e,r){r.d(e,{P:function(){return j}});var t=r(1413),o=r(5969),a=r(4571),i=r(22870),u=r(39402),c=r(46408),l=r(18550),f=r(65525),s=r(37867),d=r(5357),p=r(34935),Z=r(49911),h=r(34018),g=r(69184),v=r(28190),x=r(47313),m=r(53838),b=r(46417),j={Add:(0,x.forwardRef)((function(n,e){return(0,b.jsx)(d.Z,(0,t.Z)((0,t.Z)({},n),{},{ref:e}))})),Check:(0,x.forwardRef)((function(n,e){return(0,b.jsx)(Z.Z,(0,t.Z)((0,t.Z)({},n),{},{ref:e}))})),Clear:(0,x.forwardRef)((function(n,e){return(0,b.jsx)(v.Z,(0,t.Z)((0,t.Z)({},n),{},{ref:e}))})),Delete:(0,x.forwardRef)((function(n,e){return(0,b.jsx)(p.Z,(0,t.Z)((0,t.Z)({},n),{},{ref:e}))})),DetailPanel:(0,x.forwardRef)((function(n,e){return(0,b.jsx)(g.Z,(0,t.Z)((0,t.Z)({},n),{},{ref:e}))})),Edit:(0,x.forwardRef)((function(n,e){return(0,b.jsx)(m.Z,(0,t.Z)((0,t.Z)({},n),{},{ref:e}))})),Export:(0,x.forwardRef)((function(n,e){return(0,b.jsx)(c.Z,(0,t.Z)((0,t.Z)({},n),{},{ref:e}))})),Filter:(0,x.forwardRef)((function(n,e){return(0,b.jsx)(o.Z,(0,t.Z)((0,t.Z)({},n),{},{ref:e}))})),FirstPage:(0,x.forwardRef)((function(n,e){return(0,b.jsx)(a.Z,(0,t.Z)((0,t.Z)({},n),{},{ref:e}))})),LastPage:(0,x.forwardRef)((function(n,e){return(0,b.jsx)(i.Z,(0,t.Z)((0,t.Z)({},n),{},{ref:e}))})),NextPage:(0,x.forwardRef)((function(n,e){return(0,b.jsx)(g.Z,(0,t.Z)((0,t.Z)({},n),{},{ref:e}))})),PreviousPage:(0,x.forwardRef)((function(n,e){return(0,b.jsx)(h.Z,(0,t.Z)((0,t.Z)({},n),{},{ref:e}))})),ResetSearch:(0,x.forwardRef)((function(n,e){return(0,b.jsx)(v.Z,(0,t.Z)((0,t.Z)({},n),{},{ref:e}))})),Search:(0,x.forwardRef)((function(n,e){return(0,b.jsx)(l.Z,(0,t.Z)((0,t.Z)({},n),{},{ref:e}))})),SortArrow:(0,x.forwardRef)((function(n,e){return(0,b.jsx)(s.Z,(0,t.Z)((0,t.Z)({},n),{},{ref:e}))})),ThirdStateCheck:(0,x.forwardRef)((function(n,e){return(0,b.jsx)(u.Z,(0,t.Z)((0,t.Z)({},n),{},{ref:e}))})),ViewColumn:(0,x.forwardRef)((function(n,e){return(0,b.jsx)(f.Z,(0,t.Z)((0,t.Z)({},n),{},{ref:e}))}))}},16541:function(n,e,r){r.d(e,{T:function(){return o}});r(47313);var t=r(46417),o=function(n){var e=n.Icon,r=n.title;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e,{style:{fontSize:18,margin:5}}),r]})}},39615:function(n,e,r){r.d(e,{_:function(){return t}});var t={toolbar:{searchPlaceholder:"Buscar"},pagination:{labelDisplayedRows:"{from}-{to} de {count}",labelRowsSelect:"filas",lastTooltip:"Ultima pagina",nextTooltip:"Siguiente pagina",firstTooltip:"Primera pagina",previousTooltip:"Pagina anterior"},header:{actions:""},body:{emptyDataSourceMessage:"No hay registros que mostrar",filterRow:{filterTooltip:"Filter"}}}}}]);