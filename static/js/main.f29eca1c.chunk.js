(this["webpackJsonpclass-28"]=this["webpackJsonpclass-28"]||[]).push([[0],{27:function(e,t,n){e.exports=n(58)},57:function(e,t,n){},58:function(e,t,n){"use strict";n.r(t);var a=n(6),r=n(7),l=n(9),c=n(8),o=n(10),u=n(0),s=n.n(u),i=n(21),m=n.n(i),h=n(12),d=n(11),E=function(){return s.a.createElement("header",null,s.a.createElement("h1",null,"RESTy . . ."),s.a.createElement("nav",null,s.a.createElement("ul",null,s.a.createElement("li",null,s.a.createElement(h.b,{to:"/"},"Home")),s.a.createElement("li",null,s.a.createElement(h.c,{to:"/history"}," History ")))))},p=function(){return s.a.createElement("footer",null,"@codefellows2020")},b=n(24),f=n(17),y=n.n(f),g=n(25),j=n(18),v=n.n(j),O=n(26),k=n.n(O),S=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return e?t:null},C=function(e){return s.a.Children.map(e.children,(function(t){return s.a.cloneElement(t,{condition:e.condition})}))},w=function(e){return S(e.condition,e.children)},T=function(e){return S(!e.condition,e.children)},x=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(l.a)(this,Object(c.a)(t).call(this,e))).handleHistory=function(e){var t=n.state.url,a=n.state.history;a[Object.keys(n.state.history).length]=t,n.setState({history:a}),console.log("rrrrrrr",n.state.history)},n.handleUrl=function(){var e=Object(g.a)(y.a.mark((function e(t){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.setState({open:!1}),t.preventDefault(),e.next=4,fetch("".concat(n.state.url));case 4:return e.t0=function(e){var t={"Content-Type":"application/json"},a=e;n.setState({body:a,header:t}),n.setState({loader:!1}),n.setState({data:{header:t,body:a}})},e.t1=function(e){n.setState({header:{},body:{error:"wrong Api"}})},e.next=8,e.sent.json().then(e.t0).catch(e.t1);case 8:console.log("kkkkkkk",n.state);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.handleChange=function(e){var t=e.target.name,a=e.target.value;n.setState(Object(b.a)({},t,a))},n.toggleOpen=function(){n.setState({open:!n.state.open})},n.state={url:"",method:"get",header:{},body:{},loader:!0,open:!0,history:{}},n}return Object(o.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement("main",null,s.a.createElement("form",{onSubmit:this.handleUrl},s.a.createElement("section",null,s.a.createElement("input",{onChange:this.handleChange,type:"text",name:"url",value:this.state.url}),s.a.createElement("div",{id:"div"},s.a.createElement("button",{className:"method"}," GET"),s.a.createElement("button",{className:"method"}," POST"),s.a.createElement("button",{className:"method"}," PUT"),s.a.createElement("button",{className:"method"}," PATCH"),s.a.createElement("button",{className:"method"}," DELETE")),s.a.createElement("button",{type:"submit",id:"go"},"Gooo"))),s.a.createElement("div",{id:"secdiv"},s.a.createElement(C,{condition:this.state.open},s.a.createElement(w,null),s.a.createElement(T,null,s.a.createElement(C,{condition:this.state.loader},s.a.createElement(w,null,s.a.createElement(k.a,{type:"Circles",color:"#00BFFF",height:100,width:100})),s.a.createElement(T,null,s.a.createElement(v.a,{name:"Headers",src:this.state.header,id:"header"}),s.a.createElement(v.a,{name:"Response",src:this.state.body}))))))))}}]),t}(s.a.Component),F=function(e){function t(){return Object(a.a)(this,t),Object(l.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement(x,null))}}]),t}(s.a.Component),H=(n(57),function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(l.a)(this,Object(c.a)(t).call(this,e))).handleUpdate=function(e,t){var a=n.state.response;console.log("api",t),console.log("response",a),a[t]=e,n.setState({response:a}),n.setState({current:t})},n.hereWeGoAgain=function(e){var t=e;console.log("new:",t),n.setState({current:t})},n.state={results:[],loading:!1,current:""},n}return Object(o.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement(E,null),s.a.createElement(d.a,{exact:!0,path:"/"},s.a.createElement(F,null)),s.a.createElement(p,null))}}]),t}(s.a.Component)),N=function(e){function t(){return Object(a.a)(this,t),Object(l.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return s.a.createElement(h.a,null,s.a.createElement(H,null))}}]),t}(s.a.Component);m.a.render(s.a.createElement(N,null),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.f29eca1c.chunk.js.map