(this.webpackJsonpLVL2checkpoint10=this.webpackJsonpLVL2checkpoint10||[]).push([[0],{23:function(e,t,a){e.exports=a(35)},28:function(e,t,a){},34:function(e,t,a){},35:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),c=a(19),l=a.n(c),r=(a(28),a(1)),s=a(2),i=a(4),u=a(3),m=a(5),d=a(9),p=a(11),h=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).handelEtat=function(e){e.target.style.textDecoration="line-through",e.target.style.backgroundColor="grey",e.target.style.textDecorationColor="red",e.target.style.textDecorationStyle="wavy"},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(e){var t=this;return o.a.createElement("div",null,this.props.todolist.map((function(e){return o.a.createElement("div",{style:{cursor:"pointer",userSelect:"none",border:"solid rgb(54, 54, 54) 2px",textAlign:"center",fontWeight:"bolder",color:"white",backgroundColor:"rgb(54, 54, 54)"},onClick:t.handelEtat},e.todo)})))}}]),t}(n.Component),f=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).componentDidMount=function(){var e=JSON.parse(localStorage.getItem("todo"));e&&a.setState({todoList:a.state.todoList.concat(e)})},a.handelChange=function(e){a.setState({todo:e.target.value})},a.addTodo=function(){a.state.todo?a.setState({todoList:a.state.todoList.concat({todo:a.state.todo}),todo:""}):window.confirm("please insert a todo")},a.save=function(){localStorage.setItem("todo",JSON.stringify(a.state.todoList)),alert("Tado saved")},a.erase=function(){localStorage.removeItem("todo"),alert("Tado erased")},a.state={todoList:[],todo:""},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(e){return o.a.createElement("div",{className:"container-fluid row"},o.a.createElement("div",{className:"col-12 col-md-6"},o.a.createElement("h1",null,"Add your Todo"),o.a.createElement("input",{className:"col-5",name:"todo",onChange:this.handelChange,value:this.state.todo}),o.a.createElement("button",{className:"col-3",onClick:this.addTodo},"ADD"),o.a.createElement("button",{className:"col-2",onClick:this.save},"Save"),o.a.createElement("button",{className:"col-2",onClick:this.erase},"Erase")),o.a.createElement("div",{className:"col-12 col-md-6"},o.a.createElement("h3",null,"Click for check"),o.a.createElement(h,{todolist:this.state.todoList})))}}]),t}(n.Component),v=function(e){function t(){return Object(r.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(f,null))}}]),t}(n.Component),b=function(e){function t(){return Object(r.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement("input",{type:"text",placeholder:"Search...",onChange:function(t){return e.props.setKeyWord(t.target.value)}}))}}]),t}(n.Component),E=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).search=function(e){a.setState({keyword:e})},a.state={movies:[{name:"Contagion",source:"https://hqq.tv/player/embed_player.php?vid=b0c1V1o4NUVsamdzTU40QkNsYlhlQT09&autoplay=no",description:"Contagion le film qui parle du coronavirus"},{name:"Sonic",source:"https://hqq.tv/player/embed_player.php?vid=VDBuNVVjaVAyem8rOWdPMVhEUHp3QT09&autoplay=no",description:"Sonic"},{name:"SPIDER-MAN HOMECOMING",source:"https://hqq.tv/player/embed_player.php?vid=a2VjMGFRR0lpZDY0Y2gvWmxoanMxdz09&autoplay=no",description:"SPIDER-MAN HOMECOMING"}],name:"",source:"",description:"",keyword:""},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(e){var t=this;return o.a.createElement("div",{className:"container-fluid row",style:{textAlign:"center"}},o.a.createElement("div",{className:"col-sm-2 col-0"}," ",o.a.createElement(b,{setKeyWord:function(e){return t.search(e)}})),o.a.createElement("div",{className:"col-sm-8 col-12"},o.a.createElement("div",{className:"col-lg-4 col-0"}),o.a.createElement("div",{className:"col-lg-4 col-12"},this.state.movies.filter((function(e){return e.name.toUpperCase().includes(t.state.keyword.toUpperCase())})).map((function(e){return o.a.createElement("button",{style:{marginTop:"20px"},onClick:function(){return t.setState({name:e.name,source:e.source,description:e.description})}},e.name)}))),o.a.createElement("div",{className:"col-lg-4 col-0"}),o.a.createElement("div",{className:"col-lg-4 col-0"}),o.a.createElement("div",{className:"col-lg-4 col-12",style:{textAlign:"center",marginTop:"20px"}},o.a.createElement("h1",null,this.state.name?this.state.name:"Choose One"),o.a.createElement("iframe",{src:this.state.source&&this.state.source,width:"400",height:"auto",webkitAllowFullScreen:!0,mozallowfullscreen:!0,allowfullscreen:!0,frameborder:"0",scrolling:"no"}),o.a.createElement("p",{className:"col-12"},this.state.description)),o.a.createElement("div",{className:"col-lg-4 col-0"})),o.a.createElement("div",{className:"col-sm-2 col-0"}))}}]),t}(n.Component),g=function(e){function t(){return Object(r.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){setTimeout((function(){alert("hello")}),500),window.addEventListener("beforeunload",(function(e){return e.preventDefault(),e.returnValue=alert("Goodbye")}))}},{key:"render",value:function(){return o.a.createElement("div",{style:{display:"flex",justifyContent:"center"}},o.a.createElement(d.b,{to:"/"},o.a.createElement("button",null," Home ")),o.a.createElement(d.b,{to:"/todoapp"},o.a.createElement("button",null," Todo ")),o.a.createElement(d.b,{to:"/profiles"},o.a.createElement("button",null," Profiles ")),o.a.createElement(d.b,{to:"/BestMovies"},o.a.createElement("button",null," Best Movies ")))}}]),t}(n.Component),y=a(22),O=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).handelChange=function(e){a.setState(Object(y.a)({},e.target.name,e.target.value))},a.state={name:"",source:"",description:""},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(e){var t=this;return o.a.createElement("div",null,o.a.createElement("h3",null,"Name"),o.a.createElement("input",{type:"text",name:"name",placeholder:"your name",onChange:this.handelChange,value:this.state.name}),o.a.createElement("h3",null,"Image"),o.a.createElement("input",{type:"text",name:"source",placeholder:"URL's Image",onChange:this.handelChange,value:this.state.source}),o.a.createElement("h3",null,"description"),o.a.createElement("input",{type:"text",name:"description",placeholder:"describe yourself...",onChange:this.handelChange,value:this.state.description}),o.a.createElement("div",null,o.a.createElement("button",{className:"col-12",onClick:function(){var e={name:t.state.name,source:t.state.source,description:t.state.description};t.props.newProfile(e),t.setState({name:"",source:"",description:""})}},"Add"),o.a.createElement("button",{className:"col-6",onClick:this.props.save},"Save"),o.a.createElement("button",{className:"col-6",onClick:this.props.erase},"Erase")))}}]),t}(n.Component),j=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).componentDidMount=function(){var e=JSON.parse(localStorage.getItem("profiles"));e&&a.setState({profiles:a.state.profiles.concat(e)})},a.save=function(){localStorage.setItem("profiles",JSON.stringify(a.state.profiles)),alert("Profiles saved")},a.erase=function(){localStorage.removeItem("profiles"),alert("profiles erased")},a.add=function(e){e.name,e.description,e.source?a.setState({profiles:a.state.profiles.concat(e)}):alert("veuillez remplir toutes les cases")},a.state={profiles:[],name:"",source:"",description:""},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(e){var t=this;return o.a.createElement("div",{className:"container-fluid row",style:{textAlign:"center"}},o.a.createElement("div",{className:"col-sm-4 col-12"},o.a.createElement(O,{newProfile:function(e){return t.add(e)},save:this.save,erase:this.erase})),o.a.createElement("div",{className:"col-sm-8 col-12"},o.a.createElement("div",{className:"col-lg-4 col-0"}),o.a.createElement("div",{className:"col-lg-4 col-12"},this.state.profiles.map((function(e){return o.a.createElement("button",{onClick:function(){return t.setState({name:e.name,source:e.source,description:e.description})}},e.name)}))),o.a.createElement("div",{className:"col-lg-4 col-0"}),o.a.createElement("div",{className:"col-lg-4 col-0"}),o.a.createElement("div",{className:"col-lg-4 col-12",style:{textAlign:"center"}},o.a.createElement("h1",null,this.state.name?this.state.name:"Choose One"),o.a.createElement("img",{style:{height:200},src:this.state.source?this.state.source:"https://www.docplanner.com/img/logo.png",alt:""}),o.a.createElement("p",{className:"col-12"},this.state.description)),o.a.createElement("div",{className:"col-lg-4 col-0"})))}}]),t}(n.Component),N=(a(34),function(e){function t(){return Object(r.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"container-fluid row"},o.a.createElement("div",{className:"col-12 col-sm-4"},o.a.createElement(d.b,{to:"/todoapp"},o.a.createElement("button",{className:"col-12 MyButton",style:{backgroundColor:"yellow"}}," ","Todo"," "))),o.a.createElement("div",{className:"col-12 col-sm-4"},o.a.createElement(d.b,{to:"/profiles"},o.a.createElement("button",{className:"col-12 MyButton",style:{backgroundColor:"purple"}}," ","Profiles"," "))),o.a.createElement("div",{className:"col-12 col-sm-4"},o.a.createElement(d.b,{to:"/BestMovies"},o.a.createElement("button",{className:"col-12 MyButton",style:{backgroundColor:"blue"}}," ","Best Movies"," "))))}}]),t}(n.Component)),C=function(e){function t(){return Object(r.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement(d.a,null,o.a.createElement(p.a,{path:"/",component:g}),o.a.createElement(p.a,{path:"/",exact:!0,component:N}),o.a.createElement(p.a,{path:"/todoapp",exact:!0,component:v}),o.a.createElement(p.a,{path:"/BestMovies",exact:!0,component:E}),o.a.createElement(p.a,{path:"/profiles",exact:!0,component:j}))}}]),t}(o.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[23,1,2]]]);
//# sourceMappingURL=main.52f6dd3a.chunk.js.map