(this["webpackJsonpto-do-app"]=this["webpackJsonpto-do-app"]||[]).push([[0],{75:function(e,t,a){e.exports=a(87)},80:function(e,t,a){},86:function(e,t,a){},87:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(10),l=a.n(o),c=(a(80),a(147)),i=a(13),s=a(11),m=a(26),u=function(e,t){switch(t.type){case"ADD_TODO":return Object(m.a)({},e,{todos:[t.payload].concat(Object(i.a)(e.todos))});case"REMOVE_TODO":return Object(m.a)({},e,{todos:e.todos.filter((function(e){return e.id!==t.payload}))});case"CHECK_HANDLER":case"EDIT_TODO":case"TEXT_EDIT_TODO":return Object(m.a)({},e,{todos:t.payload});case"OPEN_SNACKBAR":return Object(m.a)({},e,{isSnackBarOpen:!0,alertSeverity:t.payload.alertType,alertMessage:t.payload.message});case"CLOSE_SNACKBAR":return Object(m.a)({},e,{isSnackBarOpen:!1,alertSeverity:"",alertMessage:""});default:return e}},d={todos:JSON.parse(window.localStorage.getItem("todos"))||[],isSnackBarOpen:!1,alertSeverity:"",alertMessage:""},p=Object(n.createContext)(d);var E=function(e){var t=e.children,a=Object(n.useReducer)(u,d),o=Object(s.a)(a,2),l=o[0],c=o[1],m=l.todos.filter((function(e){return!0===e.isComplete})),E=l.todos.filter((function(e){return!1===e.isComplete})),b=l.isSnackBarOpen,f=l.alertSeverity,g=l.alertMessage,v=function(e,t){c({type:"OPEN_SNACKBAR",payload:{alertType:e,message:t}})};return Object(n.useEffect)((function(){!function(e){var t=Object(i.a)(e);window.localStorage.setItem("todos",JSON.stringify(t))}(l.todos)}),[l]),r.a.createElement(p.Provider,{value:{todos:l.todos,completedList:m,inCompleteList:E,addTodo:function(e){var t=e.trim(),a={id:Date.now(),createdAt:Date.now(),taskText:t,isComplete:!1,isEdit:!1};t.length>0&&(c({type:"ADD_TODO",payload:a}),v("success","New Task Added"))},deleteTodo:function(e){c({type:"REMOVE_TODO",payload:e}),v("error","Task Deleted.")},onCheckHandler:function(e){var t=Object(i.a)(l.todos),a=t.findIndex((function(t){return t.id===e}));t[a].isComplete=!t[a].isComplete,t[a].isEdit=!1,c({type:"CHECK_HANDLER",payload:t}),t[a].isComplete&&v("success","Task Completed.")},editHandler:function(e){var t=Object(i.a)(l.todos),a=t.findIndex((function(t){return t.id===e}));t[a].isEdit=!t[a].isEdit,c({type:"EDIT_TODO",payload:t})},editDone:function(e,t,a){var n=Object(i.a)(l.todos),r=n.findIndex((function(t){return t.id==e}));n[r].isEdit=!n[r].isEdit,n[r].taskText=""===t?a:t,c({type:"TEXT_EDIT_TODO",payload:n}),v("success","Task Edited.")},showSnackbar:b,alertSeverity:f,alertMessage:g,openSnackbar:v,closeSnackbar:function(e,t){c({type:"CLOSE_SNACKBAR"})}}},t)},b=a(127),f=a(88),g=a(148),v=a(58),y=a.n(v);var O=function(){var e=Object(n.useState)(""),t=Object(s.a)(e,2),a=t[0],o=t[1],l=Object(n.useContext)(p).addTodo;return r.a.createElement(f.a,{elevation:10,style:{marginTop:"98px"}},r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),l(a),o("")}},r.a.createElement(g.a,{variant:"outlined",placeholder:"type here to add and hit enter.....",value:a,onChange:function(e){return o(e.target.value)},fullWidth:!0,autoFocus:!0,InputProps:{endAdornment:r.a.createElement((function(){return r.a.createElement(b.a,{onClick:function(){return o("")}},r.a.createElement(y.a,{color:"action"}))}),null)}})))},h=a(136),x=a(137),C=a(42),T=a(135),k=a(134);var j=function(e){var t=e.children,a=e.window,n=Object(k.a)({target:a?a():void 0});return r.a.createElement(T.a,{appear:!1,direction:"down",in:!n},t)},S=Object(h.a)({root:{},title:{fontWeight:"bold",margin:"15px 0px"}});var D=function(e){var t=S();return r.a.createElement(j,e,r.a.createElement(x.a,{className:t.root},r.a.createElement(C.a,{variant:"h4",align:"center",className:t.title},e.text)))},w=a(141),A=a(133),N=a(89),M=a(139),I=a(140),_=a(151),B=a(67),L=a(138),F=a(47),H=a.n(F),R=a(63),P=a.n(R),K=a(60),W=a.n(K),z=a(62),V=a.n(z),J=function(e){var t=e.todo,a=e.inputValue,o=Object(n.useContext)(p),l=o.deleteTodo,c=o.editHandler,i=o.editDone,m=r.a.useState(null),u=Object(s.a)(m,2),d=u[0],E=u[1],f=function(){E(null)};return r.a.createElement(r.a.Fragment,null,t.isEdit?r.a.createElement(b.a,{"aria-label":"delete",onClick:function(){return i(t.id,a,t.taskText)},color:"primary"},r.a.createElement(W.a,null)):r.a.createElement(_.a,{title:"options"},r.a.createElement(b.a,{"aria-label":"more","aria-controls":"long-menu","aria-haspopup":"true",onClick:function(e){E(e.currentTarget)}},r.a.createElement(V.a,null))),r.a.createElement(B.a,{anchorEl:d,keepMounted:!0,open:Boolean(d),onClose:f},t.isComplete?r.a.createElement(L.a,{onClick:f},r.a.createElement(b.a,{"aria-label":"delete",onClick:function(){return l(t.id)},color:"secondary"},r.a.createElement(H.a,null))):r.a.createElement("div",null,r.a.createElement(L.a,{onClick:f},r.a.createElement(b.a,{"aria-label":"delete",onClick:function(){return c(t.id)},color:"primary",size:"small"},r.a.createElement(P.a,null))),r.a.createElement(L.a,{onClick:f},r.a.createElement(b.a,{"aria-label":"delete",onClick:function(){return l(t.id)},color:"secondary",size:"small"},r.a.createElement(H.a,null))))))},X=Object(h.a)({container:{marginBottom:"15px","&:hover":{boxShadow:"0px 5px 5px -3px rgba(0,0,0,0.2), 0px 8px 10px 1px rgba(0,0,0,0.14), 0px 3px 14px 2px rgba(0,0,0,0.12)",cursor:"pointer"}},complete:{color:"green","& > span":{textDecoration:"line-through"}},incomplete:{color:"red",textDecoration:"none"},secondaryTxt:{fontSize:12,marginTop:8},primaryTxt:{fontSize:"1.2rem"},secondaryAction:{right:4},secondaryActionMobile:{right:2}});var q=function(e){var t=e.todo,a=e.isMobile,o=Object(n.useContext)(p).onCheckHandler,l=X(),c=Object(n.useState)(t.taskText),i=Object(s.a)(c,2),m=i[0],u=i[1],d=t.createdAt&&new Date(t.createdAt).toDateString();return r.a.createElement(f.a,{className:l.container,elevation:3},r.a.createElement(N.a,{onDoubleClick:function(){return o(t.id)}},t.isEdit?r.a.createElement(g.a,{id:"inputText",color:"primary",value:m,onChange:function(e){return function(e){u(e.target.value)}(e)},fullWidth:!0,multiline:!0}):r.a.createElement(M.a,{multiline:"true",primary:t.taskText,secondary:d||"",className:t.isComplete?l.complete:l.incomplete,classes:{primary:l.primaryTxt,secondary:l.secondaryTxt}}),r.a.createElement(I.a,{classes:{root:a?l.secondaryActionMobile:l.secondaryAction}},r.a.createElement(J,{todo:t,inputValue:m}))))},$=Object(h.a)({main:{display:"grid",placeItems:"center",height:"50vh"},text:{color:"#777"}});var G=function(e){var t=e.primaryText,a=e.secondaryText,n=$();return r.a.createElement("div",{className:n.main},r.a.createElement(C.a,{variant:"h5",className:n.text,align:"center"},t,r.a.createElement("br",null),a))};var Q=function(e){var t=Object(n.useContext)(p).completedList;return r.a.createElement(r.a.Fragment,null,0===t.length||void 0===typeof t?r.a.createElement(r.a.Fragment,null,e.isMobile?r.a.createElement(G,{primaryText:"No Completed",secondaryText:"Task Available"}):null):r.a.createElement(r.a.Fragment,null,r.a.createElement(C.a,{variant:"h5",align:"center",style:{color:"green"}},"Completed ",e.isMobile?null:"(".concat(t.length,")")),r.a.createElement(A.a,null,t.map((function(t,a){return r.a.createElement(q,Object.assign({key:t.id,todo:t},e))})))))};var U=function(e){var t=Object(n.useContext)(p).inCompleteList;return r.a.createElement(r.a.Fragment,null,0===t.length||void 0===typeof t?r.a.createElement(r.a.Fragment,null,e.isMobile?r.a.createElement(G,{primaryText:"No Incompleted",secondaryText:"Task Available"}):null):r.a.createElement(r.a.Fragment,null,r.a.createElement(C.a,{variant:"h5",align:"center",color:"error"},"Incomplete ",e.isMobile?null:"(".concat(t.length,")")),r.a.createElement(A.a,null,t.map((function(t){return r.a.createElement(q,Object.assign({key:t.id,todo:t},e))})))))};var Y=function(){return r.a.createElement(w.a,{container:!0,spacing:3,style:{marginTop:30}},r.a.createElement(w.a,{item:!0,md:6,xs:12},r.a.createElement(U,null)),r.a.createElement(w.a,{item:!0,md:6,xs:12},r.a.createElement(Q,null)))},Z=a(144),ee=a(142),te=a(143),ae=a(65),ne=a.n(ae),re=a(64),oe=a.n(re),le=Object(h.a)({root:{width:"100%",position:"absolute",bottom:0,background:"#f3f3f3"},appBar:{top:"auto",bottom:0}});var ce=function(e){var t=le(),a=r.a.useState("Incomplete"),o=Object(s.a)(a,2),l=o[0],c=o[1],i=Object(n.useContext)(p),m=i.inCompleteList,u=i.completedList;return r.a.createElement(r.a.Fragment,null,r.a.createElement(x.a,{position:"fixed",className:t.appBar},r.a.createElement(ee.a,{value:l,showLabels:!0,onChange:function(e,t){c(t)},className:t.root},r.a.createElement(te.a,{label:"Incomplete",value:"Incomplete",icon:r.a.createElement(Z.a,{color:"secondary",badgeContent:m.length||0},r.a.createElement(oe.a,null))}),r.a.createElement(te.a,{label:"Complete",value:"Complete",icon:r.a.createElement(Z.a,{color:"secondary",badgeContent:u.length||0},r.a.createElement(ne.a,null))}))),r.a.createElement(w.a,{container:!0,spacing:3,style:{marginTop:10,marginBottom:40}},r.a.createElement(w.a,{item:!0,xs:12},"Incomplete"===l?r.a.createElement(U,e):r.a.createElement(Q,e))))},ie=a(145),se=Object(h.a)((function(e){return{desktop:{position:"fixed",bottom:e.spacing(2),right:e.spacing(2)},mob:{position:"fixed",top:90,left:"45%"}}}));var me=function(e){var t=e.children,a=e.window,n=e.isMobile,o=se(),l=Object(k.a)({target:a?a():void 0,disableHysteresis:!0,threshold:n?300:500});return r.a.createElement(ie.a,{in:l},r.a.createElement("div",{onClick:function(e){var t=(e.target.ownerDocument||document).querySelector("#back-to-top-anchor");t&&t.scrollIntoView({behavior:"smooth",block:"center"})},role:"presentation",className:n?o.mob:o.desktop},t))},ue=a(146),de=a(66),pe=a.n(de),Ee=a(149),be=a(150);var fe=function(){var e=Object(n.useContext)(p),t=e.showSnackbar,a=e.alertSeverity,o=e.alertMessage,l=e.closeSnackbar;return r.a.createElement("div",null,r.a.createElement(be.a,{open:t,autoHideDuration:2e3,onClose:l},r.a.createElement((function(e){return r.a.createElement(Ee.a,Object.assign({elevation:6,variant:"filled"},e))}),{onClose:l,severity:a},o)))};var ge=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{id:"back-to-top-anchor"}),r.a.createElement(D,Object.assign({text:"Task Tracker"},e)),r.a.createElement(O,null),e.isMobile?r.a.createElement(ce,{isMobile:e.isMobile}):r.a.createElement(Y,null),r.a.createElement(me,e,r.a.createElement(ue.a,{color:"primary",size:"small","aria-label":"scroll back to top"},r.a.createElement(pe.a,null))),r.a.createElement(fe,null))};a(86);var ve=function(){var e=/iPhone|iPad|iPod|Android/i.test(navigator.userAgent);return r.a.createElement(E,null,r.a.createElement(c.a,{maxWidth:"lg"},r.a.createElement(ge,{isMobile:e})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(ve,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[75,1,2]]]);
//# sourceMappingURL=main.9016ef9e.chunk.js.map