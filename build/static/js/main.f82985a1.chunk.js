(this.webpackJsonpapitest=this.webpackJsonpapitest||[]).push([[0],{38:function(e,t,c){},39:function(e,t,c){},40:function(e,t,c){},41:function(e,t,c){},42:function(e,t,c){},43:function(e,t,c){},44:function(e,t,c){"use strict";c.r(t);var a=c(0),n=c(1),s=c(14),i=c.n(s),r=c(2),l=c(4),j=c.n(l);c(38);var o=function(){var e=Object(n.useState)(""),t=Object(r.a)(e,2),c=t[0],s=t[1],i=Object(n.useState)(""),l=Object(r.a)(i,2),o=l[0],d=l[1],h=Object(n.useState)(!1),b=Object(r.a)(h,2),u=b[0],O=b[1],p={method:"GET",url:"https://love-calculator.p.rapidapi.com/getPercentage",params:{fname:"".concat(c),sname:"".concat(o)},headers:{"x-rapidapi-key":"9e8ddf2821msh4c4f74e49206ee9p1302d4jsn143cd2ada6f1","x-rapidapi-host":"love-calculator.p.rapidapi.com"}};return Object(a.jsx)("div",{children:Object(a.jsxs)("div",{id:"love",children:[Object(a.jsxs)("div",{className:"name-inputs-con",children:[Object(a.jsxs)("div",{className:"my-name",children:[Object(a.jsx)("label",{children:"My Name: "}),Object(a.jsx)("input",{type:"text",onChange:function(e){s(e.target.value)}})]}),Object(a.jsxs)("div",{className:"lover-name",children:[Object(a.jsx)("label",{children:"My Match: "}),Object(a.jsx)("input",{type:"text",onChange:function(e){d(e.target.value)}})]})]}),Object(a.jsx)("h1",{className:"love-names",children:c+" <3 "+o}),Object(a.jsxs)("div",{className:"love-result-con",children:[Object(a.jsxs)("div",{onClick:function(){j.a.request(p).then((function(e){O(e.data)}))},id:"try-my-luck",children:[Object(a.jsx)("button",{className:"my-luck-btn",children:"Try My Luck!"}),Object(a.jsx)("i",{className:"fas fa-hand-holding-heart"})]}),Object(a.jsx)("div",{className:"love-result",children:u.percentage?u.percentage+"% matching":" "}),Object(a.jsx)("div",{className:"love-result",children:u.result})]})]})})};c(39);var d=function(){var e=Object(n.useState)("5"),t=Object(r.a)(e,2),c=t[0],s=t[1],i=Object(n.useState)(""),l=Object(r.a)(i,2),o=l[0],d=l[1],h={method:"GET",url:"https://numbersapi.p.rapidapi.com/".concat(c,"/trivia"),params:{max:"20",fragment:"true",min:"10",json:"true"},headers:{"x-rapidapi-key":"9e8ddf2821msh4c4f74e49206ee9p1302d4jsn143cd2ada6f1","x-rapidapi-host":"numbersapi.p.rapidapi.com"}};return Object(n.useEffect)((function(){j.a.request(h).then((function(e){d(e.data.text)})).catch((function(e){console.error(e)}))}),[h]),Object(a.jsxs)("div",{className:"numbergen-container",children:[Object(a.jsx)("p",{children:o}),Object(a.jsx)("div",{className:"random-num-display",children:c}),Object(a.jsx)("i",{id:"dice-link",class:"fas fa-dice",onClick:function(){s(Math.floor(299*Math.random())+1),console.log(c)},children:" "})]})};function h(e){var t=e.className,c=e.href,n=e.children;return Object(a.jsx)("a",{onClick:function(e){if(!e.metaKey&&!e.ctrlKey){e.preventDefault(),window.history.pushState({},"",c);var t=new PopStateEvent("popstate");window.dispatchEvent(t)}},className:t,href:c,children:n})}c(40);var b=function(e){var t=e.title;return Object(a.jsx)("div",{className:"header",children:Object(a.jsx)("h2",{children:t})})},u=(c(41),function(){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(b,{title:"Gutenberg's API Central"}),Object(a.jsxs)("div",{className:"links-con",children:[Object(a.jsxs)("div",{className:"love-tab-con",children:[Object(a.jsx)("h1",{children:"The Matchmaker"}),Object(a.jsx)(h,{href:"love",children:Object(a.jsx)("div",{className:"love-btn-con",children:Object(a.jsx)("i",{class:"far fa-grin-hearts"})})})]}),Object(a.jsxs)("div",{className:"dice-tab-con",children:[Object(a.jsx)("h1",{children:"Roll The Dice"}),Object(a.jsx)(h,{href:"generate-fun-fact",children:Object(a.jsx)("div",{className:"love-btn-con",children:Object(a.jsx)("i",{class:"fas fa-dice"})})})]}),Object(a.jsxs)("div",{className:"laugh-tab-con",children:[Object(a.jsx)("h1",{children:"Have A Laugh"}),Object(a.jsx)(h,{href:"have-a-laugh",children:Object(a.jsx)("div",{className:"love-btn-con",children:Object(a.jsx)("i",{class:"far fa-grin-squint"})})})]})]})]})}),O=(c(42),c(43),function(){var e=Object(n.useState)(""),t=Object(r.a)(e,2),c=t[0],s=t[1],i=Object(n.useState)(""),l=Object(r.a)(i,2),o=l[0],d=l[1],h=Object(n.useState)(""),b=Object(r.a)(h,2),u=b[0],O=b[1],p=Object(n.useState)("Programming"),m=Object(r.a)(p,2),f=m[0],x=m[1],v=Object(n.useState)(!1),g=Object(r.a)(v,2),y=g[0],N=g[1];Object(n.useEffect)((function(){j()({method:"GET",url:"https://v2.jokeapi.dev/joke/".concat(f,"/Any?format=xml&lacklistFlags=political,lang=en,type=single,contains=C%23,idRange=0-55]"),headers:{"content-type":"application/octet-stream","x-rapidapi-host":"jokeapi.p.rapidapi.com","x-rapidapi-key":"2d47072c52msh10f80a8852d7f6dp15aa0djsn8df70b654886",useQueryString:!0},params:{format:"json"}}).then((function(e){y&&N(!1),O(""),d(""),s(""),"single"===e.data.type?O(e.data.joke):(s(e.data.setup),d(e.data.delivery))})).catch((function(e){console.log(e)})),console.log(f)}),[f,y]);return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("div",{className:"joke-container",children:[Object(a.jsx)("h1",{id:"have-a-laugh",children:"Have A Laugh"}),Object(a.jsx)("div",{children:c}),Object(a.jsx)("div",{children:o}),Object(a.jsx)("div",{children:u}),Object(a.jsx)("button",{disabled:y,onClick:function(){return N(!0)},children:"RANDOM JOKE"}),Object(a.jsxs)("form",{children:[Object(a.jsx)("label",{htmlFor:"category",children:"Choose a category"}),Object(a.jsxs)("select",{onChange:function(e){x(e.target.value)},id:"category",name:"category",children:[Object(a.jsx)("option",{value:"Programming",children:"Programming"}),Object(a.jsx)("option",{value:"Dark",children:"Dark"}),Object(a.jsx)("option",{value:"Pun",children:"Pun"})]})]})]})})}),p=function(e){var t=e.path,c=e.children,a=Object(n.useState)(window.location.pathname),s=Object(r.a)(a,2),i=s[0],l=s[1];return Object(n.useEffect)((function(){var e=function(){l(window.location.pathname)};return window.addEventListener("popstate",e),function(){window.removeEventListener("popstate",e)}}),[]),i===t?c:null},m=function(){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(u,{}),Object(a.jsx)(p,{path:"/love",children:Object(a.jsx)(o,{})}),Object(a.jsx)(p,{path:"/generate-fun-fact",children:Object(a.jsx)(d,{})}),Object(a.jsx)(p,{path:"/have-a-laugh",children:Object(a.jsx)(O,{})})]})};i.a.render(Object(a.jsx)(m,{}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.f82985a1.chunk.js.map