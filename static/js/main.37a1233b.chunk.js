(this["webpackJsonpinventory-control"]=this["webpackJsonpinventory-control"]||[]).push([[0],{78:function(e,t,n){e.exports=n(91)},88:function(e,t,n){},89:function(e,t,n){},91:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(7),i=n.n(o),s=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function l(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var c=n(18),u=n(19),d=n(21),m=n(20),f=n(22),h=n(124),p=n(127),b=n(64),E=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(d.a)(this,Object(m.a)(t).call(this,e))).state={title:e.title},n}return Object(f.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(h.a,{position:"static",color:"secondary"},r.a.createElement(p.a,null,r.a.createElement(b.a,{variant:"h6",style:{fontWeight:"bold"}},this.state.title)))}}]),t}(a.Component),v=n(137),k=n(128),g=n(23),C=n(26),y="ADD_SKUS",I="SCAN_FIXTURE",S="SET_USER_ID";function x(e){return{type:y,payload:e}}function O(e){return{type:I,payload:e}}var j=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(d.a)(this,Object(m.a)(t).call(this,e))).handleFixtureIdChange=function(e){return n.setState({fixtureId:e.target.value})},n.handleUserIdChange=function(e){return n.setState({userId:e.target.value})},n.handleSubmit=function(e){var t=n.state,a=t.fixtureId,r=t.userId;n.props.scanFixture({fixtureId:a}),n.props.setUserId({userId:r}),n.setState({fixtureId:""})},n.isButtonDisabled=function(){return!n.state.fixtureId||!n.state.userId},n.state={fixtureId:null,userId:null},n}return Object(f.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(E,{title:"Inventory Control"}),r.a.createElement("div",{className:"flex flex-column ma3"},r.a.createElement(v.a,{id:"outlined-name",label:"User ID",margin:"normal",variant:"outlined",onChange:this.handleUserIdChange}),r.a.createElement(v.a,{autoFocus:!0,id:"outlined-name",label:"Fixture ID",margin:"normal",variant:"outlined",onChange:this.handleFixtureIdChange}),r.a.createElement(g.b,{to:"/start",className:"noLink"},r.a.createElement(k.a,{disabled:this.isButtonDisabled(),className:"w-100",fullWidth:!0,variant:"contained",color:"secondary",onClick:this.handleSubmit},"Proceed"))))}}]),t}(a.Component),L=Object(C.b)(null,(function(e){return{scanFixture:function(t){return e(O(t))},setUserId:function(t){return e({type:S,payload:t})}}}))(j),w=n(15),N=function(e){function t(){return Object(c.a)(this,t),Object(d.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return this.props.fixtureId?r.a.createElement("div",null,r.a.createElement(E,{title:"Inventory Control"}),r.a.createElement("div",{className:"ma2"},r.a.createElement("span",{className:"f4 mr2"},"FIXTURE ID:"),r.a.createElement("span",{className:"underline f4"},this.props.fixtureId)),r.a.createElement("div",{className:"flex flex-column ma3"},r.a.createElement(g.b,{to:"/scan",className:"noLink"},r.a.createElement(k.a,{style:{width:"100%",marginBottom:10},variant:"contained",color:"secondary"},"Start Scanning")),r.a.createElement(g.b,{to:"/",className:"noLink"},r.a.createElement(k.a,{className:"w-100",variant:"contained",color:"secondary"},"Back to Home")))):r.a.createElement(w.a,{push:!0,to:"/"})}}]),t}(a.Component),F=Object(C.b)((function(e){return{fixtureId:e.fixtureId}}))(N),D=n(129),U=n(133),B=n(132),R=n(130),T=n(131),W=n(139),A=n(134);var M=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(d.a)(this,Object(m.a)(t).call(this,e))).handleSkuIdChange=function(e){n.setState({currentSku:e.target.value}),n.state.scannerMode&&n.handleSkuSaveWithId(e.target.value)},n.resetState=function(){n.setState({currentSku:"",skuCountList:{}}),n.returnFocus()},n.returnFocus=function(){null!=n.textField.current&&(n.textField.current.focus(),n.state.scannerMode&&(n.textField.current.setAttribute("readonly",!0),setTimeout((function(){n.textField.current.removeAttribute("readonly")}),100)))},n.handleSwitchToggle=function(){n.setState({scannerMode:!n.state.scannerMode},n.returnFocus)},n.handleSkuSaveWithId=function(e){var t=n.state.skuCountList;n.state.skuCountList[e]?t[e]=n.state.skuCountList[e]+1:e&&(t[e]=1),n.setState({skuCountList:t,currentSku:""}),n.returnFocus()},n.handleSkuSave=function(){n.handleSkuSaveWithId(n.state.currentSku)},n.isScanDisabled=function(){return!!n.state.scannerMode||!n.state.currentSku},n.getSkuTable=function(){if(n.state.skuCountList&&Object.entries(n.state.skuCountList).length>0)return r.a.createElement(D.a,{stickyHeader:!0},r.a.createElement(R.a,null,r.a.createElement(T.a,null,r.a.createElement(B.a,null,r.a.createElement("span",{className:"f5"},"SKU ID")),r.a.createElement(B.a,null,r.a.createElement("span",{className:"f5"},"Count")))),r.a.createElement(U.a,null,Object.entries(n.state.skuCountList).map((function(e){return r.a.createElement(T.a,{key:e[0]},r.a.createElement(B.a,null,e[0]),r.a.createElement(B.a,null,e[1]))}))))},n.submitCount=function(e){var t=n.state.skuCountList;n.props.sendSkuCountList({skuCountList:t})},n.disableButton=function(){return!n.state.skuCountList||0===Object.entries(n.state.skuCountList).length},n.textField=r.a.createRef(),n.state={currentSku:"",scannerMode:!0,skuCountList:{}},n}return Object(f.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.returnFocus()}},{key:"render",value:function(){return this.props.fixtureId?r.a.createElement("div",null,r.a.createElement(E,{title:"Inventory Control"}),r.a.createElement("div",{className:"flex flex-column ma3"},r.a.createElement("div",{className:"flex justify-between"},r.a.createElement("div",{className:"ma2"},r.a.createElement("span",{className:"f4 mr2"},"FIXTURE ID:"),r.a.createElement("span",{className:"underline f4"},this.props.fixtureId)),r.a.createElement(A.a,{control:r.a.createElement(W.a,{onChange:this.handleSwitchToggle,checked:this.state.scannerMode}),label:"Scanner Mode"})),r.a.createElement(v.a,{id:"outlined-name",label:"CSKU ID",margin:"normal",variant:"outlined",autoFocus:!0,inputRef:this.textField,value:this.state.currentSku,onChange:this.handleSkuIdChange,onClick:this.returnFocus}),r.a.createElement("div",{className:"flex flex-column"},r.a.createElement(k.a,{style:{width:"100%",marginBottom:20},variant:"contained",color:"secondary",disabled:this.isScanDisabled(),onClick:this.handleSkuSave},"Scan"),r.a.createElement(k.a,{style:{width:"100%",marginBottom:10},variant:"contained",color:"secondary",onClick:this.resetState},"Clear"),r.a.createElement(g.b,{to:"/review",className:"noLink"},r.a.createElement(k.a,{style:{width:"100%",marginBottom:10},disabled:this.disableButton(),variant:"contained",onClick:this.submitCount,color:"primary"},"Review")),r.a.createElement(g.b,{to:"/start",className:"noLink"},r.a.createElement(k.a,{style:{width:"100%"},variant:"contained",color:"secondary"},"Return"))),r.a.createElement("div",null,this.getSkuTable()))):r.a.createElement(w.a,{push:!0,to:"/"})}}]),t}(a.Component),K=Object(C.b)((function(e){return{fixtureId:e.fixtureId,skuCountList:e.skuCountList}}),(function(e){return{sendSkuCountList:function(t){return e(x(t))}}}))(M),X=n(140),_=n(136),H=n(135),J=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(d.a)(this,Object(m.a)(t).call(this,e))).onCountChange=function(e,t){var a=Object.assign({},n.props.skuCountList);a[e[0]]=e[1]+t,n.props.setSkuCountList({skuCountList:a})},n.tableRow=function(e){return e[0]===n.state.selectedKey?r.a.createElement(T.a,{key:e[0],selected:!0},r.a.createElement(B.a,{align:"center"},e[0]),r.a.createElement(B.a,{align:"center"},r.a.createElement("button",{className:"b--none bg-transparent f3 mr2",onClick:function(){return n.onCountChange(e,1)}},"+"),e[1],e[1]>1?r.a.createElement("button",{className:"b--none bg-transparent f3 ml2",onClick:function(){return n.onCountChange(e,-1)}},"-"):r.a.createElement("button",{className:"b--none bg-transparent f3 ml2",disabled:!0},"-"))):r.a.createElement(T.a,{key:e[0],onClick:function(){n.setState({selectedKey:e[0]})}},r.a.createElement(B.a,{align:"center"},e[0]),r.a.createElement(B.a,{align:"center"},e[1]))},n.state={selectedKey:null},n}return Object(f.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return console.log(this.props.skuCountList),r.a.createElement(D.a,{stickyHeader:!0},r.a.createElement(R.a,null,r.a.createElement(T.a,null,r.a.createElement(B.a,{align:"center"},r.a.createElement("span",{className:"f5"},"SKU ID")),r.a.createElement(B.a,{align:"center"},r.a.createElement("span",{className:"f5"},"Count")))),r.a.createElement(U.a,null,Object.entries(this.props.skuCountList).map((function(t){return e.tableRow(t)}))))}}]),t}(a.Component),P=function(e,t,n){for(var a=[],r=0,o=Object.entries(n);r<o.length;r++){var i=o[r];a.push({cskuId:i[0],count:i[1]})}fetch("http://localhost:3001/submission",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({fixtureId:t,userId:e,stocks:a})}).then((function(e){return e.text()})).then((function(e){console.log(e)})).catch((function(e){console.log(e)}))},Y=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(d.a)(this,Object(m.a)(t).call(this,e))).submitCount=function(){console.log(n.props.skuCountList);var e=n.props,t=e.userId,a=e.fixtureId,r=e.skuCountList;P(t,a,r),n.props.setSkuCountList({}),n.props.setFixtureId({})},n.disableButton=function(){return!n.props.skuCountList||0===Object.entries(n.props.skuCountList).length},n.state={dialogOpen:!1},n}return Object(f.a)(t,e),Object(u.a)(t,[{key:"getDialogBox",value:function(){var e=this;return r.a.createElement(X.a,{open:this.state.dialogOpen,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"},r.a.createElement(H.a,{id:"alert-dialog-title"},"Finished scanning?"),r.a.createElement(_.a,null,r.a.createElement(k.a,{onClick:this.submitCount,color:"primary"},"Yes"),r.a.createElement(k.a,{onClick:function(){e.setState({dialogOpen:!1})},color:"primary",autoFocus:!0},"No")))}},{key:"render",value:function(){var e=this;return this.props.fixtureId?r.a.createElement("div",null,r.a.createElement(E,{title:"Inventory Control"}),r.a.createElement("div",{className:"flex flex-column ma3"},r.a.createElement("div",{className:"flex ma2"},r.a.createElement("span",{className:"f4 mr2"},"FIXTURE ID:"),r.a.createElement("span",{className:"underline f4"},this.props.fixtureId)),r.a.createElement("div",null,r.a.createElement(J,{skuCountList:this.props.skuCountList,setSkuCountList:this.props.setSkuCountList})),r.a.createElement("div",{className:"flex flex-column"},r.a.createElement(k.a,{style:{width:"100%",marginBottom:10},disabled:this.disableButton(),variant:"contained",onClick:function(){e.setState({dialogOpen:!0})},color:"primary"},"Submit"),r.a.createElement("div",null,this.getDialogBox()),r.a.createElement(g.b,{to:"/start",className:"noLink"},r.a.createElement(k.a,{style:{width:"100%"},variant:"contained",color:"secondary"},"Return"))))):r.a.createElement(w.a,{push:!0,to:"/"})}}]),t}(a.Component),$=Object(C.b)((function(e){return{fixtureId:e.fixtureId,skuCountList:e.skuCountList,userId:e.userId}}),(function(e){return{setSkuCountList:function(t){return e(x(t))},setFixtureId:function(t){return e(O(t))}}}))(Y);n(88);var q=function(){return r.a.createElement(g.a,{basename:"/inventory-control"},r.a.createElement("div",null,r.a.createElement(w.b,{exact:!0,path:"/"},r.a.createElement(L,null)),r.a.createElement(w.b,{exact:!0,path:"/start"},r.a.createElement(F,null)),r.a.createElement(w.b,{exact:!0,path:"/scan"},r.a.createElement(K,null)),r.a.createElement(w.b,{exact:!0,path:"/review"},r.a.createElement($,null))))},z=(n(89),n(46)),G={fixtureId:null,userId:null,skuList:[],startTime:null};var Q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,t=arguments.length>1?arguments[1]:void 0;return t.type===y?Object.assign({},e,{skuCountList:t.payload.skuCountList}):t.type===I?Object.assign({},e,{fixtureId:t.payload.fixtureId}):t.type===S?Object.assign({},e,{userId:t.payload.userId}):e},V=Object(z.b)(Q);n(90);i.a.render(r.a.createElement(C.a,{store:V},r.a.createElement(q,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/inventory-control",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/inventory-control","/service-worker.js");s?(!function(e,t){fetch(e).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):l(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):l(t,e)}))}}()}},[[78,1,2]]]);
//# sourceMappingURL=main.37a1233b.chunk.js.map