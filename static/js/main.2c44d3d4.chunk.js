(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{62:function(e,t,a){},63:function(e,t,a){},89:function(e,t,a){"use strict";a.r(t);var s=a(2),n=a(0),i=a.n(n),c=a(27),l=a.n(c),r=(a(62),a(8)),o=a(12),d=a(10),b=a(9),j=(a(63),a(23)),h=a(6),u=a(17),m=a(29),x=a(56),O=a(21),g=a(19);var p=function(){return Object(s.jsx)("footer",{className:"mt-5",children:Object(s.jsx)(u.a,{fluid:!0,children:Object(s.jsxs)(O.a,{className:"border-top justify-content-between p-3 shadow-lg",children:[Object(s.jsx)(g.a,{className:"p-0",md:3,sm:12,children:"Michael Blum"}),Object(s.jsx)(g.a,{className:"p-0 d-flex justify-content-end",md:3,children:"This site was made by Michael Blum."})]})})})},f=a(52);var v=function(e){return Object(s.jsx)(f.a,{className:"bg-transparent jumbotron-fluid",children:Object(s.jsx)(u.a,{fluid:!0,children:Object(s.jsx)(O.a,{className:"justify-content-center py-5",children:Object(s.jsxs)(g.a,{className:"text-center",sm:12,md:8,children:[e.title&&Object(s.jsx)("h1",{className:"display-1 font-weight-bolder",children:e.title}),e.subTitle&&Object(s.jsx)("h3",{className:"display-4 font-weight-light",children:e.subTitle}),e.text&&Object(s.jsx)("h3",{className:"lead font-weight-light",children:e.text})]})})})})},y=a(26),k=a(42);var S=function(e){var t=Object(k.b)({opacity:1,from:{opacity:0}});return Object(s.jsxs)(k.a.div,{className:"g-card-info",style:t,children:[Object(s.jsx)("p",{className:"g-card-title",children:e.title}),Object(s.jsx)("p",{className:"g-card-subTitle",children:e.subtitle}),Object(s.jsxs)("a",{href:e.link,target:"_blank",children:[" ","View Project"," "]})]})};var N=function(e){return Object(s.jsxs)("div",{className:"d-inline-block g-card",onClick:function(t){return e.click(e.item)},children:[Object(s.jsx)("img",{className:"g-card-image",src:e.item.imgSrc,alt:e.item.imgSrc}),e.item.selected&&Object(s.jsx)(S,{title:e.item.title,subtitle:e.item.subtitle,link:e.item.link})]})},w=a.p+"static/media/1design.16e44b79.png",C=a.p+"static/media/2design.8f9d66f9.png",T=a.p+"static/media/3design.91216f02.png",M=function(e){Object(d.a)(a,e);var t=Object(b.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).handleCardClick=function(e){var t=Object(y.a)(n.state.items);t[e].selected=!t[e].selected,t.forEach((function(t){t.id!==e&&(t.selected=!1)})),n.setState({items:t})},n.makeItems=function(e){return e.map((function(e){return Object(s.jsx)(N,{item:e,click:function(t){return n.handleCardClick(e.id,t)}},e.id)}))},n.state={items:[{id:0,title:"Tennis Magnet",subtitle:"An e-shop website for tennis equipment - PHP Laravel bootstrap css mySQL",imgSrc:w,link:"//tennis.michael-blum-playground.com",selected:!1},{id:1,title:"Paris Perfect",subtitle:"A blog about the city of lights - PHP css3 mySQL",imgSrc:C,link:"http://paris.michael-blum-playground.com/about.php",selected:!1},{id:2,title:"Mardi Gras",subtitle:"css and scss project",imgSrc:T,link:"#",selected:!1}]},n}return Object(o.a)(a,[{key:"render",value:function(){return Object(s.jsx)("div",{children:Object(s.jsx)(u.a,{fluid:!0,children:Object(s.jsx)(O.a,{className:"justify-content-around",children:this.makeItems(this.state.items)})})})}}]),a}(i.a.Component);var L=function(e){return Object(s.jsxs)("div",{children:[Object(s.jsx)(v,{title:e.title,subTitle:e.subTitle,text:e.text}),Object(s.jsx)(M,{})]})};var I=function(e){return Object(s.jsx)(u.a,{fluid:!0,children:Object(s.jsx)(O.a,{className:"justify-content-center",children:Object(s.jsx)(g.a,{md:8,children:e.children})})})};var P=function(e){return Object(s.jsxs)("div",{children:[Object(s.jsx)(v,{title:e.title}),Object(s.jsxs)(I,{children:[Object(s.jsx)("p",{children:"Hello, my name is Michael. I'm a full stack engineer with experience in React, NodeJS, Express JS, PHP, Laravel, MongoDB, and mySQL."}),Object(s.jsx)("p",{children:"My goal is to work at a place where I can learn and develop myself as a developer. I really look forward to work with a great team of people with a lot of experience and collaborate."}),Object(s.jsx)("p",{children:"I'm constantly learning new things. currently those things include gaining more experience with MongoDB, React, Express JS, and Node JS."}),Object(s.jsxs)("p",{children:["check out my project on my ",Object(s.jsx)(j.b,{to:"/",children:"Home Page!"})]})]})]})},B=a(25),F=a(15),E=a(54),H=a.n(E),A=a(16),J=a(55),D=function(e){Object(d.a)(a,e);var t=Object(b.a)(a);function a(){var e;return Object(r.a)(this,a),(e=t.call(this)).state={name:"",email:"",message:"",disabled:!1,emailSent:null},e.handleChange=e.handleChange.bind(Object(F.a)(e)),e.handleSubmit=e.handleSubmit.bind(Object(F.a)(e)),e}return Object(o.a)(a,[{key:"handleChange",value:function(e){var t=e.target,a=t.name,s=t.value;this.setState(Object(B.a)({},a,s))}},{key:"handleSubmit",value:function(e){var t=this;e.preventDefault(),this.setState({disabled:!0}),H.a.post("http://localhost:3900/api/message",this.state).then((function(e){e.data.success?t.setState({disabled:!0,emailSent:!0}):t.setState({disabled:!1,emailSent:!1})})).catch((function(e){console.log("here"),console.log(e),t.setState({disabled:!1,emailSent:!1})}))}},{key:"render",value:function(){return Object(s.jsxs)("div",{children:[Object(s.jsx)(v,{title:this.props.title}),Object(s.jsx)(I,{children:Object(s.jsxs)(A.a,{onSubmit:this.handleSubmit,children:[Object(s.jsxs)(A.a.Group,{children:[Object(s.jsx)(A.a.Label,{htmlFor:"full-name",children:"Full Name"}),Object(s.jsx)(A.a.Control,{id:"full-name",name:"name",type:"text",value:this.state.name,onChange:this.handleChange})]}),Object(s.jsxs)(A.a.Group,{children:[Object(s.jsx)(A.a.Label,{htmlFor:"email",children:"Email"}),Object(s.jsx)(A.a.Control,{id:"email",name:"email",type:"email",value:this.state.email,onChange:this.handleChange})]}),Object(s.jsxs)(A.a.Group,{children:[Object(s.jsx)(A.a.Label,{htmlFor:"message",children:"Message"}),Object(s.jsx)(A.a.Control,{id:"message",name:"message",as:"textarea",rows:"3",value:this.state.message,onChange:this.handleChange})]}),Object(s.jsx)(J.a,{className:"display-inline-block",type:"submit",disabled:this.state.disabled,children:"Send"}),!0===this.state.emailSent&&Object(s.jsx)("p",{className:"d-inline success-message",children:"Message sent!"}),!1===this.state.emailSent&&Object(s.jsx)("p",{className:"d-inline error-message",children:"Message NOT sent"})]})})]})}}]),a}(i.a.Component),G=function(e){Object(d.a)(a,e);var t=Object(b.a)(a);function a(e){var s;return Object(r.a)(this,a),(s=t.call(this,e)).state={title:"Michael Blum",headerLinks:[{title:"Home",path:"/"},{title:"About",path:"/about"},{title:"Contact",path:"/contact"}],home:{title:"YOU ASK - I DELIVER",subTitle:"If you are looking for a web developer who is responsible, hard working and always willing to learn and grow - I am your guy!",text:"Check out my projects below"},about:{title:"About me"},contact:{title:"Let's talk..."}},s}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return Object(s.jsx)(j.a,{basename:"/",children:Object(s.jsxs)(u.a,{className:"p-0",fluid:!0,children:[Object(s.jsxs)(m.a,{className:"border-bottom shadow-lg",bg:"transparent",expand:"lg",children:[Object(s.jsx)(j.b,{className:"nav-link",to:"/",children:Object(s.jsx)(m.a.Brand,{className:"brand",children:"Michael Blum"})}),Object(s.jsx)(m.a.Toggle,{"aria-controls":"navbar-hamburger"}),Object(s.jsx)(m.a.Collapse,{"aria-controls":"navbar-hamburger",children:Object(s.jsxs)(x.a,{className:"ml-auto",children:[Object(s.jsx)(j.b,{className:"nav-link",to:"/",children:"Home"}),Object(s.jsx)(j.b,{className:"nav-link",to:"/about",children:"About"}),Object(s.jsx)(j.b,{className:"nav-link",to:"/contact",children:"Contact"})]})})]}),Object(s.jsx)(h.a,{path:"/",exact:!0,render:function(){return Object(s.jsx)(L,{title:e.state.home.title,subTitle:e.state.home.subtitle,text:e.state.home.text})}}),Object(s.jsx)(h.a,{path:"/about",exact:!0,render:function(){return Object(s.jsx)(P,{title:e.state.about.title,subTitle:e.state.about.subtitle,text:e.state.about.text})}}),Object(s.jsx)(h.a,{path:"/contact",exact:!0,render:function(){return Object(s.jsx)(D,{title:e.state.contact.title,subTitle:e.state.contact.subtitle,text:e.state.contact.text})}}),Object(s.jsx)(p,{})]})})}}]),a}(i.a.Component),Q=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,91)).then((function(t){var a=t.getCLS,s=t.getFID,n=t.getFCP,i=t.getLCP,c=t.getTTFB;a(e),s(e),n(e),i(e),c(e)}))};a(88);l.a.render(Object(s.jsx)(i.a.StrictMode,{children:Object(s.jsx)(G,{})}),document.getElementById("root")),Q()}},[[89,1,2]]]);
//# sourceMappingURL=main.2c44d3d4.chunk.js.map