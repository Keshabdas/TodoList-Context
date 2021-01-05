(this["webpackJsonpto-do-app"]=this["webpackJsonpto-do-app"]||[]).push([[0],{100:function(e,t,a){},101:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(10),l=a.n(r),i=(a(93),a(167)),c=a(16),s=a(11),d=a(24),u=function(e,t){switch(t.type){case"ADD_TODO":return Object(d.a)({},e,{todos:[t.payload].concat(Object(c.a)(e.todos))});case"REMOVE_TODO":return Object(d.a)({},e,{todos:e.todos.filter((function(e){return e.id!==t.payload}))});case"CHECK_HANDLER":case"EDIT_TODO":case"TEXT_EDIT_TODO":return Object(d.a)({},e,{todos:t.payload});case"OPEN_SNACKBAR":return Object(d.a)({},e,{isSnackBarOpen:!0,alertSeverity:t.payload.alertType,alertMessage:t.payload.message});case"CLOSE_SNACKBAR":return Object(d.a)({},e,{isSnackBarOpen:!1,alertSeverity:"",alertMessage:""});case"SHOW_DIALOG":return Object(d.a)({},e,{isDialogOpen:!0,todoSelected:t.payload.id,dialogTitle:t.payload.title,dialogContent:t.payload.content});case"HIDE_DIALOG":return Object(d.a)({},e,{isDialogOpen:!1,todoSelected:null,dialogTitle:"",dialogContent:""});case"CHANGE_THEME":return Object(d.a)({},e,{isDarkModeOn:t.payload});default:return e}},m={todos:JSON.parse(window.localStorage.getItem("todos"))||[],isSnackBarOpen:!1,alertSeverity:"",alertMessage:"",isDialogOpen:!1,dialogTitle:"",dialogContent:"",todoSelected:null,isDarkModeOn:Boolean(parseInt(window.localStorage.getItem("darkMode"),10))||!1},p=Object(n.createContext)(m);var E=function(e){var t=e.children,a=Object(n.useReducer)(u,m),r=Object(s.a)(a,2),l=r[0],i=r[1];Object(n.useEffect)((function(){v(l.todos)}),[l]);var d=l.todos.filter((function(e){return!0===e.isComplete})),E=l.todos.filter((function(e){return!1===e.isComplete})),g=l.isSnackBarOpen,f=l.alertSeverity,b=l.alertMessage,y=l.todoSelected,h=l.isDarkModeOn,O=function(e,t){i({type:"OPEN_SNACKBAR",payload:{alertType:e,message:t}})},v=function(e){var t=Object(c.a)(e);window.localStorage.setItem("todos",JSON.stringify(t))};return o.a.createElement(p.Provider,{value:{todos:l.todos,completedList:d,inCompleteList:E,todoSelected:y,isDarkModeOn:h,addTodo:function(e){var t=e.trim(),a={id:Date.now(),createdAt:Date.now(),taskText:t,isComplete:!1,isEdit:!1};t.length>0&&(i({type:"ADD_TODO",payload:a}),O("success","New Task Added"))},deleteTodo:function(e){i({type:"REMOVE_TODO",payload:e}),O("error","Task Deleted.")},onCheckHandler:function(e){var t=Object(c.a)(l.todos),a=t.findIndex((function(t){return t.id===e}));t[a].isComplete=!t[a].isComplete,t[a].isEdit=!1,i({type:"CHECK_HANDLER",payload:t}),t[a].isComplete&&O("success","Task Completed.")},editHandler:function(e){var t=Object(c.a)(l.todos),a=t.findIndex((function(t){return t.id===e}));t[a].isEdit=!t[a].isEdit,i({type:"EDIT_TODO",payload:t})},editDone:function(e,t,a){var n=Object(c.a)(l.todos),o=n.findIndex((function(t){return t.id===e}));n[o].isEdit=!n[o].isEdit,n[o].taskText=""===t?a.trim():t.trim(),i({type:"TEXT_EDIT_TODO",payload:n}),O("success","Task Edited.")},showSnackbar:g,alertSeverity:f,alertMessage:b,openSnackbar:O,closeSnackbar:function(e,t){i({type:"CLOSE_SNACKBAR"})},showDialog:function(e,t,a){i({type:"SHOW_DIALOG",payload:{id:e,title:t,content:a}})},hideDialog:function(){i({type:"HIDE_DIALOG"})},changeTheme:function(){i({type:"CHANGE_THEME",payload:!h});var e=h?0:1;window.localStorage.setItem("darkMode",e)},isDialogOpen:l.isDialogOpen,dialogTitle:l.dialogTitle,dialogContent:l.dialogContent}},t)},g=a(140),f=a(102),b=a(168),y=a(67),h=a.n(y);var O=function(){var e=Object(n.useState)(""),t=Object(s.a)(e,2),a=t[0],r=t[1],l=Object(n.useContext)(p).addTodo;return o.a.createElement(f.a,{elevation:10,style:{marginTop:71}},o.a.createElement("form",{onSubmit:function(e){e.preventDefault(),l(a),r("")}},o.a.createElement(b.a,{variant:"outlined",placeholder:"type here to add and hit enter.....",value:a,onChange:function(e){return r(e.target.value)},fullWidth:!0,autoFocus:!0,InputProps:{endAdornment:0===a.length?null:o.a.createElement((function(){return o.a.createElement(g.a,{onClick:function(){return r("")}},o.a.createElement(h.a,{color:"action"}))}),null)}})))},v=a(149),k=a(150),C=a(34),x=a(172),T=a(148),D=a(147);var j=function(e){var t=e.children,a=e.window,n=Object(D.a)({target:a?a():void 0});return o.a.createElement(T.a,{appear:!1,direction:"down",in:!n},t)},S=a(71),w=a.n(S),M=a(70),I=a.n(M),A=Object(v.a)((function(e){return{root:{display:"flex",flexDirection:"row",background:"dark"===e.palette.type?"#333":null},themeIcon:{flex:1},title:{fontWeight:"bold",margin:"15px 0px",flex:40}}}));var N=function(e){var t=A(),a=Object(n.useContext)(p),r=a.changeTheme,l=a.isDarkModeOn,i=function(){e.handleThemeChange(),r()};return Object(n.useEffect)((function(){var e=(new Date).getHours();null===localStorage.getItem("darkMode")&&(e>=21||e<=6)&&i()}),[]),o.a.createElement(j,e,o.a.createElement(k.a,{className:t.root},o.a.createElement(C.a,{variant:"h4",align:"center",className:t.title},e.text),o.a.createElement(x.a,{title:"Toggle dark/light theme","aria-label":"Toggle dark/light theme"},o.a.createElement(g.a,{className:t.themeIcon,onClick:function(){return i()}},l?o.a.createElement(I.a,{style:{color:"#fff"}}):o.a.createElement(w.a,{style:{color:"#fff"}})))))},L=a(155),_=a(146),B=a(103),H=a(153),R=a(154),W=a(79),F=a(151),P=a(53),V=a.n(P),z=a(73),G=a.n(z),K=a(51),J=a.n(K),X=a(72),q=a.n(X),Y=function(e){var t=e.todo,a=e.inputValue,r=e.setInputValue,l=Object(n.useContext)(p),i=l.deleteTodo,c=l.editHandler,d=l.editDone,u=l.showDialog,m=o.a.useState(null),E=Object(s.a)(m,2),f=E[0],b=E[1],y=function(){b(null)};return o.a.createElement(o.a.Fragment,null,t.isEdit?o.a.createElement(g.a,{"aria-label":"delete",onClick:function(){return d(t.id,a,t.taskText),void r(a.trim())},color:"primary"},o.a.createElement(J.a,null)):o.a.createElement(x.a,{title:"options"},o.a.createElement(g.a,{"aria-label":"more","aria-controls":"long-menu","aria-haspopup":"true",onClick:function(e){b(e.currentTarget)}},o.a.createElement(q.a,null))),o.a.createElement(W.a,{anchorEl:f,keepMounted:!0,open:Boolean(f),onClose:y},t.isComplete?o.a.createElement(F.a,{onClick:y},o.a.createElement(g.a,{"aria-label":"delete",onClick:function(){return i(t.id)},color:"secondary"},o.a.createElement(V.a,null))):o.a.createElement("div",null,o.a.createElement(F.a,{onClick:y},o.a.createElement(g.a,{"aria-label":"delete",onClick:function(){return c(t.id)},color:"primary",size:"small"},o.a.createElement(G.a,null))),o.a.createElement(F.a,{onClick:y},o.a.createElement(g.a,{"aria-label":"delete",onClick:function(){return u(t.id,"Delete Task","Are you sure you want to delete this ?")},color:"secondary",size:"small"},o.a.createElement(V.a,null))))))},$=a(52),Q=a(152),U=a(74),Z=a.n(U),ee=Object(v.a)((function(e){return{container:{marginBottom:"15px",marginLeft:5,marginRight:5,"&:hover":{boxShadow:"0px 5px 5px -3px rgba(0,0,0,0.2), 0px 8px 10px 1px rgba(0,0,0,0.14), 0px 3px 14px 2px rgba(0,0,0,0.12)",cursor:"pointer"},"& .MuiListItem-container":{width:"100%"},"& .listItem":{backgroundColor:"dark"===e.palette.type?"#424242":null}},complete:{color:"dark"===e.palette.type?null:"green","& > span":{textDecoration:"line-through"}},incomplete:{color:"dark"===e.palette.type?null:"red",textDecoration:"none"},secondaryTxt:{fontSize:12,marginTop:8},primaryTxt:{fontSize:"1.2rem",wordBreak:"break-word"},secondaryAction:{right:4},secondaryActionMobile:{right:2}}}));var te=function(e){var t=e.todo,a=e.isMobile,r=e.completedList,l=Object(n.useContext)(p),i=l.onCheckHandler,c=l.showDialog,d=l.deleteTodo,u=ee(),m=Object(n.useState)(t.taskText),E=Object(s.a)(m,2),g=E[0],y=E[1],h=t.createdAt&&new Date(t.createdAt).toDateString(),O=o.a.createElement(B.a,{style:{background:"green",height:"100%",color:"#fff"}},o.a.createElement(Q.a,{style:{minWidth:20,marginRight:8}},o.a.createElement(J.a,{style:{color:"#fff"}})),o.a.createElement(H.a,{primary:r?"Mark incomplete":"Mark complete"})),v=o.a.createElement(B.a,{style:{background:"red",height:"100%",color:"#fff"}},o.a.createElement(H.a,{primary:"Delete",style:{textAlign:"right"}}),o.a.createElement(Q.a,{style:{justifyContent:"flex-end",minWidth:20,marginLeft:8}},o.a.createElement(Z.a,{style:{color:"#fff"}})));return o.a.createElement(f.a,{className:u.container,elevation:3},o.a.createElement($.SwipeableListItem,{swipeLeft:{content:v,action:function(){return r?d(t.id):c(t.id,"Delete Task","Are you sure you want to delete this ?")}},swipeRight:{content:O,action:function(){return i(t.id)}}},o.a.createElement(B.a,{onDoubleClick:function(){return i(t.id)},className:"listItem"},t.isEdit?o.a.createElement(b.a,{id:"inputText",color:"primary",value:g,onChange:function(e){return function(e){y(e.target.value)}(e)},fullWidth:!0,multiline:!0}):o.a.createElement(H.a,{multiline:"true",primary:t.taskText,secondary:h||"",className:t.isComplete?u.complete:u.incomplete,classes:{primary:u.primaryTxt,secondary:u.secondaryTxt}}),o.a.createElement(R.a,{classes:{root:a?u.secondaryActionMobile:u.secondaryAction}},o.a.createElement(Y,{todo:t,inputValue:g,setInputValue:y})))))},ae=Object(v.a)({main:{display:"grid",placeItems:"center",height:"50vh"},text:{color:"#777"}});var ne=function(e){var t=e.primaryText,a=e.secondaryText,n=ae();return o.a.createElement("div",{className:n.main},o.a.createElement(C.a,{variant:"h5",className:n.text,align:"center"},t,o.a.createElement("br",null),a))};var oe=function(e){var t=Object(n.useContext)(p).completedList;return o.a.createElement(o.a.Fragment,null,0===t.length||void 0===typeof t?o.a.createElement(o.a.Fragment,null,e.isMobile?o.a.createElement(ne,{primaryText:"No Completed",secondaryText:"Task Available"}):null):o.a.createElement(o.a.Fragment,null,o.a.createElement(C.a,{variant:"h5",align:"center",style:{color:"green"}},"Completed ",e.isMobile?null:"(".concat(t.length,")")),o.a.createElement(_.a,null,t.map((function(a,n){return o.a.createElement(te,Object.assign({key:a.id,todo:a},e,{completedList:t}))})))))};a(99);var re=function(e){var t=Object(n.useContext)(p).inCompleteList;return o.a.createElement(o.a.Fragment,null,0===t.length||void 0===typeof t?o.a.createElement(o.a.Fragment,null,e.isMobile?o.a.createElement(ne,{primaryText:"No Incompleted",secondaryText:"Task Available"}):null):o.a.createElement(o.a.Fragment,null,o.a.createElement(C.a,{variant:"h5",align:"center",color:"error"},"Incomplete ",e.isMobile?null:"(".concat(t.length,")")),o.a.createElement($.SwipeableList,null,o.a.createElement(_.a,null,t.map((function(t){return o.a.createElement(te,Object.assign({key:t.id,todo:t},e))}))))))};var le=function(){return o.a.createElement(L.a,{container:!0,spacing:3,style:{marginTop:30}},o.a.createElement(L.a,{item:!0,md:6,xs:12},o.a.createElement(re,null)),o.a.createElement(L.a,{item:!0,md:6,xs:12},o.a.createElement(oe,null)))},ie=a(4),ce=a(156),se=a(157),de=a(158),ue=a(76),me=a.n(ue),pe=a(75),Ee=a.n(pe),ge=Object(v.a)((function(e){return{root:{width:"100%",position:"absolute",bottom:0,background:"dark"===e.palette.type?null:"#f3f3f3",padding:"10px 0px","& .MuiBottomNavigationAction-root":{maxWidth:"inherit"},"& .MuiBottomNavigationAction-root.Mui-selected":{color:"dark"===e.palette.type?"#90caf9":null,fontWeight:600}},appBar:{top:"auto",bottom:0}}})),fe=Object(ie.a)((function(e){return{badge:{background:"green",color:"white"}}}))(ce.a);var be=function(e){var t=ge(),a=o.a.useState("Incomplete"),r=Object(s.a)(a,2),l=r[0],i=r[1],c=Object(n.useContext)(p),d=c.inCompleteList,u=c.completedList;return o.a.createElement(o.a.Fragment,null,o.a.createElement(k.a,{position:"fixed",className:t.appBar},o.a.createElement(se.a,{value:l,showLabels:!0,onChange:function(e,t){i(t)},className:t.root},o.a.createElement(de.a,{label:"Incomplete",value:"Incomplete",icon:o.a.createElement(ce.a,{color:"error",badgeContent:d.length||0},o.a.createElement(Ee.a,null))}),o.a.createElement(de.a,{label:"Complete",value:"Complete",icon:o.a.createElement(fe,{badgeContent:u.length||0},o.a.createElement(me.a,null))}))),o.a.createElement(L.a,{container:!0,spacing:3,style:{marginTop:10,marginBottom:60}},o.a.createElement(L.a,{item:!0,xs:12},"Incomplete"===l?o.a.createElement(re,e):o.a.createElement(oe,e))))},ye=a(159),he=Object(v.a)((function(e){return{desktop:{position:"fixed",bottom:e.spacing(2),right:e.spacing(2)},mob:{position:"fixed",top:90,left:"45%"}}}));var Oe=function(e){var t=e.children,a=e.window,n=e.isMobile,r=he(),l=Object(D.a)({target:a?a():void 0,disableHysteresis:!0,threshold:n?300:500});return o.a.createElement(ye.a,{in:l},o.a.createElement("div",{onClick:function(e){var t=(e.target.ownerDocument||document).querySelector("#back-to-top-anchor");t&&t.scrollIntoView({behavior:"smooth",block:"center"})},role:"presentation",className:n?r.mob:r.desktop},t))},ve=a(166),ke=a(77),Ce=a.n(ke),xe=a(169),Te=a(171);var De=function(){var e=Object(n.useContext)(p),t=e.showSnackbar,a=e.alertSeverity,r=e.alertMessage,l=e.closeSnackbar,i=e.isDarkModeOn;return o.a.createElement("div",null,o.a.createElement(Te.a,{open:t,autoHideDuration:4e3,onClose:l,anchorOrigin:{vertical:"top",horizontal:"center"}},o.a.createElement((function(e){return o.a.createElement(xe.a,Object.assign({elevation:6,variant:i?"standard":"filled"},e))}),{onClose:l,severity:a||"info"},r)))},je=a(173),Se=a(160),we=a(161),Me=a(162),Ie=a(163),Ae=a(164),Ne=function(){var e=Object(n.useContext)(p),t=e.isDialogOpen,a=e.dialogTitle,r=e.dialogContent,l=e.hideDialog,i=e.todoSelected,c=e.deleteTodo;return o.a.createElement(je.a,{open:t,onClose:function(){return l()},"aria-labelledby":"confirm-dialog"},o.a.createElement(Se.a,null,a),o.a.createElement(we.a,{dividers:!0},o.a.createElement(Me.a,null,r)),o.a.createElement(Ie.a,null,o.a.createElement(Ae.a,{variant:"contained",color:"primary",onClick:function(){return c(i),void l()}},"Yes"),o.a.createElement(Ae.a,{variant:"contained",color:"secondary",onClick:function(){return l()}},"No")))},Le=a(78),_e=a(165);var Be=function(e){var t=Object(n.useContext)(p).isDarkModeOn,a=Object(n.useState)(t),r=Object(s.a)(a,2),l=r[0],i=r[1],c=Object(Le.a)({palette:{type:l?"dark":"light"}});return Object(n.useEffect)((function(){document.body.classList.toggle("darkMode",l)}),[l]),o.a.createElement(_e.a,{theme:c},o.a.createElement("div",{id:"back-to-top-anchor"}),o.a.createElement(N,Object.assign({text:"Task Tracker"},e,{handleThemeChange:function(){i(!l)}})),o.a.createElement("br",null),o.a.createElement(O,null),e.isMobile?o.a.createElement(be,{isMobile:e.isMobile}):o.a.createElement(le,{isMobile:e.isMobile}),o.a.createElement(Oe,e,o.a.createElement(ve.a,{color:"primary",size:"small","aria-label":"scroll back to top"},o.a.createElement(Ce.a,null))),o.a.createElement(De,null),o.a.createElement(Ne,null))};a(100);var He=function(){var e=/iPhone|iPad|iPod|Android/i.test(navigator.userAgent);return o.a.createElement(E,null,o.a.createElement("div",null,o.a.createElement(i.a,{maxWidth:"lg"},o.a.createElement(Be,{isMobile:e}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(He,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},88:function(e,t,a){e.exports=a(101)},93:function(e,t,a){}},[[88,1,2]]]);
//# sourceMappingURL=main.a255c5e0.chunk.js.map