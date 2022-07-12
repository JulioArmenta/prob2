"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[631],{21144:function(e,n,t){var r=t(45987),a=t(87462),i=t(47313),o=t(83061),c=t(52376),s=[0,1,2,3,4,5,6,7,8,9,10],l=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12];function d(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,t=parseFloat(e);return"".concat(t/n).concat(String(e).replace(String(t),"")||"px")}var f=i.forwardRef((function(e,n){var t=e.alignContent,c=void 0===t?"stretch":t,s=e.alignItems,l=void 0===s?"stretch":s,d=e.classes,f=e.className,u=e.component,p=void 0===u?"div":u,x=e.container,m=void 0!==x&&x,v=e.direction,g=void 0===v?"row":v,h=e.item,w=void 0!==h&&h,Z=e.justify,y=void 0===Z?"flex-start":Z,b=e.lg,C=void 0!==b&&b,S=e.md,j=void 0!==S&&S,N=e.sm,_=void 0!==N&&N,W=e.spacing,k=void 0===W?0:W,E=e.wrap,M=void 0===E?"wrap":E,z=e.xl,I=void 0!==z&&z,P=e.xs,R=void 0!==P&&P,G=e.zeroMinWidth,T=void 0!==G&&G,B=(0,r.Z)(e,["alignContent","alignItems","classes","className","component","container","direction","item","justify","lg","md","sm","spacing","wrap","xl","xs","zeroMinWidth"]),D=(0,o.Z)(d.root,f,m&&[d.container,0!==k&&d["spacing-xs-".concat(String(k))]],w&&d.item,T&&d.zeroMinWidth,"row"!==g&&d["direction-xs-".concat(String(g))],"wrap"!==M&&d["wrap-xs-".concat(String(M))],"stretch"!==l&&d["align-items-xs-".concat(String(l))],"stretch"!==c&&d["align-content-xs-".concat(String(c))],"flex-start"!==y&&d["justify-xs-".concat(String(y))],!1!==R&&d["grid-xs-".concat(String(R))],!1!==_&&d["grid-sm-".concat(String(_))],!1!==j&&d["grid-md-".concat(String(j))],!1!==C&&d["grid-lg-".concat(String(C))],!1!==I&&d["grid-xl-".concat(String(I))]);return i.createElement(p,(0,a.Z)({className:D,ref:n},B))})),u=(0,c.Z)((function(e){return(0,a.Z)({root:{},container:{boxSizing:"border-box",display:"flex",flexWrap:"wrap",width:"100%"},item:{boxSizing:"border-box",margin:"0"},zeroMinWidth:{minWidth:0},"direction-xs-column":{flexDirection:"column"},"direction-xs-column-reverse":{flexDirection:"column-reverse"},"direction-xs-row-reverse":{flexDirection:"row-reverse"},"wrap-xs-nowrap":{flexWrap:"nowrap"},"wrap-xs-wrap-reverse":{flexWrap:"wrap-reverse"},"align-items-xs-center":{alignItems:"center"},"align-items-xs-flex-start":{alignItems:"flex-start"},"align-items-xs-flex-end":{alignItems:"flex-end"},"align-items-xs-baseline":{alignItems:"baseline"},"align-content-xs-center":{alignContent:"center"},"align-content-xs-flex-start":{alignContent:"flex-start"},"align-content-xs-flex-end":{alignContent:"flex-end"},"align-content-xs-space-between":{alignContent:"space-between"},"align-content-xs-space-around":{alignContent:"space-around"},"justify-xs-center":{justifyContent:"center"},"justify-xs-flex-end":{justifyContent:"flex-end"},"justify-xs-space-between":{justifyContent:"space-between"},"justify-xs-space-around":{justifyContent:"space-around"},"justify-xs-space-evenly":{justifyContent:"space-evenly"}},function(e,n){var t={};return s.forEach((function(r){var a=e.spacing(r);0!==a&&(t["spacing-".concat(n,"-").concat(r)]={margin:"-".concat(d(a,2)),width:"calc(100% + ".concat(d(a),")"),"& > $item":{padding:d(a,2)}})})),t}(e,"xs"),e.breakpoints.keys.reduce((function(n,t){return function(e,n,t){var r={};l.forEach((function(e){var n="grid-".concat(t,"-").concat(e);if(!0!==e)if("auto"!==e){var a="".concat(Math.round(e/12*1e8)/1e6,"%");r[n]={flexBasis:a,flexGrow:0,maxWidth:a}}else r[n]={flexBasis:"auto",flexGrow:0,maxWidth:"none"};else r[n]={flexBasis:0,flexGrow:1,maxWidth:"100%"}})),"xs"===t?(0,a.Z)(e,r):e[n.breakpoints.up(t)]=r}(n,e,t),n}),{}))}),{name:"MuiGrid"})(f);n.Z=u},82277:function(e,n,t){var r=t(45987),a=t(87462),i=t(47313),o=t(83061),c=t(52376),s=i.forwardRef((function(e,n){var t=e.classes,c=e.className,s=e.component,l=void 0===s?"div":s,d=e.square,f=void 0!==d&&d,u=e.elevation,p=void 0===u?1:u,x=e.variant,m=void 0===x?"elevation":x,v=(0,r.Z)(e,["classes","className","component","square","elevation","variant"]);return i.createElement(l,(0,a.Z)({className:(0,o.Z)(t.root,c,"outlined"===m?t.outlined:t["elevation".concat(p)],!f&&t.rounded),ref:n},v))}));n.Z=(0,c.Z)((function(e){var n={};return e.shadows.forEach((function(e,t){n["elevation".concat(t)]={boxShadow:e}})),(0,a.Z)({root:{backgroundColor:e.palette.background.paper,color:e.palette.text.primary,transition:e.transitions.create("box-shadow")},rounded:{borderRadius:e.shape.borderRadius},outlined:{border:"1px solid ".concat(e.palette.divider)}},n)}),{name:"MuiPaper"})(s)},16577:function(e,n,t){var r=t(87462),a=t(9250),i=t(31187);n.Z=function(e){var n=(0,a.Z)(e);return function(e,t){return n(e,(0,r.Z)({defaultTheme:i.Z},t))}}},9250:function(e,n,t){t.d(n,{Z:function(){return f}});var r=t(87462),a=t(45987),i=t(47313),o=t(83061),c=t(67861),s=t.n(c),l=t(10091);function d(e,n){var t={};return Object.keys(e).forEach((function(r){-1===n.indexOf(r)&&(t[r]=e[r])})),t}function f(e){return function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},c=t.name,f=(0,a.Z)(t,["name"]);var u,p=c,x="function"===typeof n?function(e){return{root:function(t){return n((0,r.Z)({theme:e},t))}}}:{root:n},m=(0,l.Z)(x,(0,r.Z)({Component:e,name:c||e.displayName,classNamePrefix:p},f));n.filterProps&&(u=n.filterProps,delete n.filterProps),n.propTypes&&(n.propTypes,delete n.propTypes);var v=i.forwardRef((function(n,t){var c=n.children,s=n.className,l=n.clone,f=n.component,p=(0,a.Z)(n,["children","className","clone","component"]),x=m(n),v=(0,o.Z)(x.root,s),g=p;if(u&&(g=d(g,u)),l)return i.cloneElement(c,(0,r.Z)({className:(0,o.Z)(c.props.className,v)},g));if("function"===typeof c)return c((0,r.Z)({className:v},g));var h=f||e;return i.createElement(h,(0,r.Z)({ref:t,className:v},g),c)}));return s()(v,e),v}}},5211:function(e,n,t){var r=t(95318);n.Z=void 0;var a=r(t(45045)),i=t(46417),o=(0,a.default)((0,i.jsx)("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),"Add");n.Z=o}}]);