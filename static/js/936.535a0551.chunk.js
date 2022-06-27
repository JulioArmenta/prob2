"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[936],{29077:function(t,n,e){e.d(n,{JL:function(){return s},Mz:function(){return u},gj:function(){return l}});var r=e(74165),i=e(15861),o=e(31881),c=e.n(o),a=(e(70816),e(50804)),s=function(){return function(t){c().get("https://dental-app-backend.herokuapp.com/api/customers").then((function(n){console.log(n),t(p(n.data))})).catch((function(t){console.log(t)}))}},l=function(t){return function(){var n=(0,i.Z)((0,r.Z)().mark((function n(e){return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c().post("https://dental-app-backend.herokuapp.com/api/customers",t).then((function(t){e(d(t.data))})).catch((function(t){console.log(t)}));case 2:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},u=function(t,n){return function(){var e=(0,i.Z)((0,r.Z)().mark((function e(i){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c().put("https://dental-app-backend.herokuapp.com/api/customers/".concat(n),t).then((function(n){i(h(t))})).catch((function(t){console.log(t)}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},d=function(t){return{type:a.V.createCustomer,payload:t}},h=function(t){return{type:a.V.updateCustomer,payload:t}},p=function(t){return{type:a.V.getCustomers,payload:t}}},4936:function(t,n,e){e.r(n),e.d(n,{default:function(){return mt}});var r=e(29439),i=e(97241),o=e(82277),c=e(51204),a=e(99881),s=e(47313),l=e(1084),u=e(74165),d=e(15861),h=e(31881),p=e.n(h),f=e(50804),x=function(t){return{type:f.V.createSale,payload:t}},m=function(t){return{type:f.V.updateSale,payload:t}},g=function(t){return{type:f.V.getSales,payload:t}},j=e(98456),Z=e(1413),y=e(9019),b=e(19536),v=e(87913),S=e(7501),C=e(42695),I=e(8047),k=e(93433),F=e(5211),w=e(21144),_=e(47131),A=e(66835),q=e(57861),E=e(67478),P=e(51629),D=e(23477),V=e(24076),T=e(82295),z=e(52376),O=e(46417);function W(t){return"$".concat(t.toFixed(2))}function L(t){var n=t.values,e=(0,l.v9)((function(t){return t.products})),r=(0,z.Z)((function(t){return{root:{fontWeight:"bold"}}}))(E.Z),i=(0,z.Z)((function(t){return{root:{fontWeight:"bold",fontSize:"17px"}}}))(E.Z);return 0!==n.sale_details.length?(0,O.jsx)(T.Z,{sx:{width:"100%",overflow:"hidden"},children:(0,O.jsx)(P.Z,{children:(0,O.jsxs)(A.Z,{children:[(0,O.jsxs)(D.Z,{children:[(0,O.jsxs)(V.Z,{style:{backgroundColor:"rgba(88,183,244,0.5)"},children:[(0,O.jsx)(i,{align:"center",colSpan:4,children:"Detalle"}),(0,O.jsx)(i,{align:"right",children:"Precio"})]}),(0,O.jsxs)(V.Z,{children:[(0,O.jsx)(r,{children:"Descripci\xf3n"}),(0,O.jsx)(r,{align:"right",children:"Cantidad"}),(0,O.jsx)(r,{align:"right",children:"Precio Unitario"}),(0,O.jsx)(r,{align:"right",children:"Descuento"}),(0,O.jsx)(r,{align:"right",children:"Suma"})]})]}),(0,O.jsxs)(q.Z,{children:[n.sale_details.map((function(t,n){return(0,O.jsxs)(V.Z,{tabIndex:-1,children:[(0,O.jsx)(E.Z,{children:e.find((function(n){return n.id==t.productId})).name}),(0,O.jsx)(E.Z,{align:"right",children:t.quantity}),(0,O.jsx)(E.Z,{align:"right",children:W(t.price)}),(0,O.jsx)(E.Z,{align:"right",children:t.discount?"".concat(t.discount,"%"):"-"}),(0,O.jsx)(E.Z,{align:"right",children:W((r=t.quantity,i=t.price,o=t.discount,o?r*i-r*i*(o/100):r*i))})]},n);var r,i,o})),(0,O.jsxs)(V.Z,{children:[(0,O.jsx)(E.Z,{rowSpan:3}),(0,O.jsx)(r,{colSpan:2,align:"right",children:"Subtotal"}),(0,O.jsx)(E.Z,{colSpan:1}),(0,O.jsx)(E.Z,{align:"right",children:W(n.subtotal)})]}),(0,O.jsxs)(V.Z,{children:[(0,O.jsx)(r,{colSpan:2,align:"right",children:"Total"}),(0,O.jsx)(E.Z,{colSpan:1}),(0,O.jsx)(E.Z,{align:"right",children:W(n.total)})]})]})]})})}):null}var R={quantity:1,price:"",discount:"",employeeId:"",productId:""};var M=function(t){var n=t.setFormValues,e=t.formValues,r=e.sale_details.map((function(t){return t.discount?t.quantity*t.price-t.quantity*t.price*(t.discount/100):t.quantity*t.price})).reduce((function(t,n){return t+n}),0),i=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,n=(0,Z.Z)({},d);if("productId"in t&&(n.productId=t.productId?"":"Este campo es requerido"),"quantity"in t&&(n.quantity=t.quantity?"":"Este campo es requerido"),h((0,Z.Z)({},n)),t==c)return Object.values(n).every((function(t){return""==t}))},o=(0,v.c)(R,!0,i),c=o.values,a=o.setValues,u=o.handleInputChange,d=(o.resetForm,o.errors),h=o.setErrors,p=(0,l.v9)((function(t){return t.products}));return(0,s.useEffect)((function(){c.productId&&a((0,Z.Z)((0,Z.Z)({},c),{},{price:p.find((function(t){return t.id==c.productId})).sale_price}))}),[c.productId]),(0,s.useEffect)((function(){e.sale_details&&n((0,Z.Z)((0,Z.Z)({},e),{},{total:r,subtotal:r}))}),[e.sale_details]),(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(w.Z,{item:!0,xs:12,sm:5,children:(0,O.jsx)(S.Z.FormSelect,{size:"small",name:"productId",label:"Producto",value:c.productId,onChange:function(t){u(t)},items:p,error:d.productId})}),(0,O.jsx)(w.Z,{item:!0,xs:4,sm:2,children:(0,O.jsx)(S.Z.FormInput,{size:"small",label:"Cantidad",name:"quantity",value:c.quantity,type:"number",onChange:u,error:d.quantity})}),(0,O.jsx)(w.Z,{item:!0,xs:4,sm:2,children:(0,O.jsx)(S.Z.FormInput,{size:"small",label:"Descuento",name:"discount",value:c.discount,type:"number",onChange:u})}),(0,O.jsx)(w.Z,{item:!0,xs:4,sm:2,children:(0,O.jsx)(S.Z.FormInput,{size:"small",label:"Precio",name:"price",value:c.price,type:"number",onChange:u,disabled:!0})}),(0,O.jsx)(w.Z,{item:!0,xs:12,sm:1,style:{alignSelf:"center"},children:(0,O.jsx)(_.Z,{onClick:function(){i()&&(n((0,Z.Z)((0,Z.Z)({},e),{},{sale_details:[].concat((0,k.Z)(e.sale_details),[c])})),a(R))},style:{width:"100%",height:"35px",borderRadius:20,backgroundColor:"rgb(54, 163, 234)",marginBottom:5},children:(0,O.jsx)(F.Z,{style:{color:"white"}})})})]})},Y=function(t){var n=(0,l.v9)((function(t){return t.branches})),e=(0,l.v9)((function(t){return t.customers})),r=(0,l.v9)((function(t){return t.sales})),i=(0,l.v9)((function(t){return t.auth})).profile,o={id:0,folio:"SV-".concat(r.length+1),subtotal:"",createdAt:new Date,total:"",userId:i.id,branchId:i.branchId,customerId:"",customer:null,sale_details:[]},c=t.recordForEdit,a=t.addOrEdit,u=(t.cancelForm,t.setOpenAlert),d=(0,v.c)(o),h=d.values,p=d.setValues,f=d.handleInputChange,x=d.resetForm;(0,s.useEffect)((function(){null!=c&&c.id&&p((0,Z.Z)({},c))}),[c]);return(0,O.jsx)(v.l,{onSubmit:function(t){t.preventDefault(),0===h.sale_details.length?u(!0):a(h,x)},children:(0,O.jsxs)(y.ZP,{container:!0,rowSpacing:0,columnSpacing:3,style:{width:"calc(100% + 24px)"},children:[(0,O.jsx)(y.ZP,{item:!0,xs:12,sm:4,children:(0,O.jsxs)("h5",{style:{fontWeight:"bold",textAlign:"center"},children:["Folio: ",(0,O.jsx)("span",{style:{fontSize:"15px",fontWeight:"normal"},children:h.folio})]})}),(0,O.jsx)(y.ZP,{item:!0,xs:12,sm:4,children:(0,O.jsxs)("h5",{style:{fontWeight:"bold",textAlign:"center"},children:["Usuario: ",(0,O.jsx)("span",{style:{fontSize:"15px",fontWeight:"normal"},children:i.name})]})}),(0,O.jsx)(y.ZP,{item:!0,xs:12,sm:4,children:(0,O.jsxs)("h5",{style:{fontWeight:"bold",textAlign:"center"},children:["Fecha:"," ",(0,O.jsx)("span",{style:{fontSize:"15px",fontWeight:"normal"},children:new Date(h.createdAt).toLocaleDateString()})]})}),(0,O.jsx)(y.ZP,{item:!0,xs:12,children:(0,O.jsx)(b.Z,{light:!1,orientation:"horizontal",flexItem:!0,style:{margin:5,height:"4px",color:"#36A3EA",opacity:1}})}),(0,O.jsx)(y.ZP,{item:!0,xs:12,sm:6,children:(0,O.jsx)(C.Z,{name:"customer",value:h.customer,isOptionEqualToValue:function(t,n){return t.id===n.id},id:"combo-box-demo",options:e,onChange:function(t,n){return f({target:{value:n,name:"customer"}})},getOptionLabel:function(t){return"".concat(t.name," ").concat(t.lastname," - ").concat(t.phone)},renderInput:function(t){return(0,O.jsx)(I.Z,(0,Z.Z)((0,Z.Z)({required:!0},t),{},{label:"Cliente"}))}})}),(0,O.jsx)(y.ZP,{item:!0,xs:12,sm:6,children:(0,O.jsx)(S.Z.FormSelect,{name:"branchId",label:"Sucursal",value:h.branchId||"",onChange:f,items:n,required:!0})}),(0,O.jsx)(M,{setFormValues:p,formValues:h}),(0,O.jsx)(y.ZP,{item:!0,xs:12,children:(0,O.jsx)(L,{values:h})}),(0,O.jsxs)(y.ZP,{item:!0,xs:12,style:{textAlign:"right",paddingTop:5},children:[(0,O.jsx)(S.Z.FormButton,{variant:"contained",color:"default",size:"large",text:"Limpiar",onClick:function(){x()}}),(0,O.jsx)(S.Z.FormButton,{variant:"contained",color:"primary",type:"submit",size:"large",text:"Guardar"})]})]})})},B=e(40490),U=e.n(B),J=e(53838),$=e(56863),G=e(11163),H=e(56155),Q=e(77166),K=e(16541),N=e(11901),X=e(39615),tt=e(70816),nt=e.n(tt),et=e(64154),rt=e(98896),it=e(20611),ot=e(42251),ct=e(29077),at=e(51178),st=e(27010);function lt(t){return"$".concat(t.toFixed(2))}function ut(t){var n=t.values,e=(0,l.v9)((function(t){return t.products})),r=(0,z.Z)((function(t){return{root:{fontWeight:"bold"}}}))(E.Z);return 0!==n.sale_details.length?(0,O.jsx)(O.Fragment,{children:(0,O.jsx)(P.Z,{style:{paddingRight:30,paddingLeft:30},children:(0,O.jsxs)(A.Z,{"aria-label":"spanning table",children:[(0,O.jsx)(D.Z,{children:(0,O.jsxs)(V.Z,{style:{backgroundColor:"rgba(88,183,244,0.5)"},children:[(0,O.jsx)(r,{children:"Descripci\xf3n"}),(0,O.jsx)(r,{align:"right",children:"Cantidad"}),(0,O.jsx)(r,{align:"right",children:"Precio Unitario"}),(0,O.jsx)(r,{align:"right",children:"Descuento"}),(0,O.jsx)(r,{align:"right",children:"Suma"})]})}),(0,O.jsx)(q.Z,{children:n.sale_details.map((function(t,n){return(0,O.jsxs)(V.Z,{children:[(0,O.jsx)(E.Z,{children:e.find((function(n){return n.id==t.productId})).name}),(0,O.jsx)(E.Z,{align:"right",children:t.quantity}),(0,O.jsx)(E.Z,{align:"right",children:lt(t.price)}),(0,O.jsx)(E.Z,{align:"right",children:t.discount?"".concat(t.discount,"%"):"-"}),(0,O.jsx)(E.Z,{align:"right",children:lt((r=t.quantity,i=t.price,o=t.discount,o?r*i-r*i*(o/100):r*i))})]},n);var r,i,o}))})]})})}):null}var dt=e(8130),ht=e(53321),pt=(0,at.Z)({overrides:{MuiTableSortLabel:{root:{"&:hover":{color:"#0047AD"}},active:{color:"#0047AD !important"},icon:{color:"#0047AD !important"}}}}),ft=function(t){var n=[{title:(0,O.jsx)(K.T,{Icon:dt.Z,title:"Folio"}),field:"folio"},{title:(0,O.jsx)(K.T,{Icon:G.Z,title:"Cliente"}),field:"customer.name",customFilterAndSearch:function(t,n){return"".concat(n.customer.name," ").concat(n.customer.lastname).toLowerCase().includes(t.toLowerCase())},render:function(t){return"".concat(t.customer.name," ").concat(t.customer.lastname)}},{title:(0,O.jsx)(K.T,{Icon:ht.Z,title:"Subtotal"}),field:"subtotal",type:"currency"},{title:(0,O.jsx)(K.T,{Icon:ht.Z,title:"Total"}),field:"total",type:"currency"},{title:(0,O.jsx)(K.T,{Icon:$.Z,title:"Fecha de venta"}),field:"createdAt",type:"date",defaultSort:"desc",render:function(t){return nt()(t.createdAt).format("DD/MM/YYYY").toString()}}],e=t.setOpenPopup,r=t.setRecordForEdit,i=(0,l.I0)(),o=(0,l.v9)((function(t){return t.sales})),c=(0,l.v9)((function(t){return t.branches})),a=(0,l.v9)((function(t){return t.customers})),u=(0,l.v9)((function(t){return t.products}));return(0,s.useEffect)((function(){0===u.length&&i((0,it.Dg)()),0===c.length&&i((0,ot.Qq)()),0===a.length&&i((0,ct.JL)()),0===o.length&&i((function(t){p().get("https://dental-app-backend.herokuapp.com/api/sales").then((function(n){console.log(n),t(g(n.data))})).catch((function(t){console.log(t)}))}))}),[]),(0,O.jsx)(O.Fragment,{children:null!=o?(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(Q.T,{title:"Ventas"}),(0,O.jsx)(st.Z,{theme:pt,children:(0,O.jsx)(U(),{localization:X._,icons:et.P,columns:n,data:o,detailPanel:function(t){return(0,O.jsx)(ut,{values:t})},actions:[{icon:"save",tooltip:"Save User",onClick:function(t,n){return e(!0)},isFreeAction:!0},{icon:function(){return(0,O.jsx)(J.Z,{style:{color:"#1380C7"}})},tooltip:"Editar venta",onClick:function(t,n){e(!0),r(n)}}],components:{Action:function(t){return(0,O.jsx)(O.Fragment,{children:"save"===t.action.icon?(0,O.jsx)(N.J,{onClick:function(n){return t.action.onClick(n,t.data)}}):(0,O.jsx)(B.MTableAction,(0,Z.Z)({},t))})},Row:function(t){return(0,O.jsx)(B.MTableBodyRow,(0,Z.Z)((0,Z.Z)({},t),{},{onDoubleClick:function(n){e(!0),r(t.data)}}))}},options:{search:!0,draggable:!1,showTitle:!1,thirdSortClick:!1,searchFieldAlignment:"left",actionsColumnIndex:-1,searchFieldVariant:"outlined",searchFieldStyle:{margin:15},headerStyle:rt.i,rowStyle:function(t,n){return{cursor:"pointer"}}}})})]}):(0,O.jsx)(H.$,{})})},xt=(0,i.Z)((function(t){return{pageContent:{padding:t.spacing(3)},searchInput:{width:"75%"}}})),mt=function(){var t=(0,l.I0)(),n=(0,s.useState)(!1),e=(0,r.Z)(n,2),i=e[0],h=e[1],f=(0,s.useState)(!1),g=(0,r.Z)(f,2),Z=g[0],y=g[1],b=(0,s.useState)(null),v=(0,r.Z)(b,2),S=v[0],C=v[1],I=(xt(),function(t,n){"clickaway"!==n&&y(!1)});return(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(o.Z,{children:(0,O.jsx)(ft,{setOpenPopup:h,setRecordForEdit:C})}),(0,O.jsx)(j.Y,{openPopup:i,setOpenPopup:h,setRecordForEdit:C,title:"Venta",children:(0,O.jsx)(Y,{recordForEdit:S,addOrEdit:function(n,e){n.customerId=n.customer.id,Object.keys(n).forEach((function(t){""===n[t]&&(n[t]=null)})),Object.keys(n.sale_details).forEach((function(t){Object.keys(n.sale_details[t]).forEach((function(e){""===n.sale_details[t][e]&&(n.sale_details[t][e]="discount"===e?0:null)}))})),0===n.id?(delete n.id,t(function(t){return function(){var n=(0,d.Z)((0,u.Z)().mark((function n(e){return(0,u.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,p().post("https://dental-app-backend.herokuapp.com/api/sales",t).then((function(t){e(x(t.data))})).catch((function(t){console.log(t)}));case 2:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()}(n))):(delete n.tableData,t(function(t,n){return function(){var e=(0,d.Z)((0,u.Z)().mark((function e(r){return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p().put("https://dental-app-backend.herokuapp.com/api/sales/".concat(n),t).then((function(n){r(m(t))})).catch((function(t){console.log(t)}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}(n,n.id))),e(),C(null),h(!1)},setOpenAlert:y})}),(0,O.jsx)(c.Z,{open:Z,autoHideDuration:2e3,onClose:I,children:(0,O.jsx)(a.Z,{onClose:I,severity:"warning",sx:{width:"100%"},style:{backgroundColor:"rgb(211, 47, 47)",color:"white",fontWeight:"bold"},children:"Agregar al menos un producto !"})})]})}}}]);