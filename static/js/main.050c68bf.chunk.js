(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,t,n){},17:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(7),i=n.n(r),c=(n(15),n(16),n(1)),s=n(2),l=n(4),m=n(3),u=n(5),h=n(8),p=(n(17),function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(l.a)(this,Object(m.a)(t).call(this,e))).state={id:e.id,pokemon:e.pokemon},n.id=e.id,n.pokemon=e.pokemon,n}return Object(u.a)(t,e),Object(s.a)(t,[{key:"pad",value:function(e){var t="000"+e;return t.substr(t.length-3)}},{key:"getImageUrl",value:function(){var e=this.pokemon.name.english,t="";for(var n in e){var a=e[n];(a>="A"&&a<="Z"||a>="a"&&a<="z"||a>="0"&&a<="9")&&(t+=a)}return"https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/images/"+this.pad(this.id)+t+".png"}},{key:"render",value:function(){var e=this.pokemon.type.map(function(e){return e+" "}),t=Object.entries(this.pokemon.base).map(function(e){var t=Object(h.a)(e,2),n=t[0],a=t[1];return o.a.createElement("p",{key:n},n,": ",a)});return o.a.createElement("div",{className:"tc bg-light-green dib br3 pa2 ma2 grow bw2 shadow-5 card"},o.a.createElement("img",{alt:"Pokemon",src:this.getImageUrl(),width:"200",height:"200"}),o.a.createElement("div",null,o.a.createElement("h2",null,this.pokemon.name.english),o.a.createElement("div",{className:"tl"},"Type: ",e),o.a.createElement("hr",null),o.a.createElement("div",{className:"tl"},t)))}}]),t}(o.a.Component)),d=function(e){var t=e.pokemons,n=t.map(function(e,n){return o.a.createElement(p,{key:t[n].id,id:t[n].id,pokemon:t[n]})});return o.a.createElement("div",null,n)},g=function(e){e.searchField;var t=e.searchChange;return o.a.createElement("div",{className:"pa2"},o.a.createElement("input",{type:"search",className:"pa3 ba b--green bg-lightest-blue",placeholder:"Search Pokemons...",onChange:t}))},v=function(e){return o.a.createElement("div",null,e.children)},k=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(l.a)(this,Object(m.a)(t).call(this))).onSearchChange=function(t){e.setState({search:t.target.value})},e.state={pokemons:[],search:""},e}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/pokedex.json").then(function(e){return e.json()}).then(function(t){e.setState({pokemons:t.slice(1,200)})})}},{key:"render",value:function(){var e=this,t=this.state.pokemons.filter(function(t){return t.name.english.toLocaleLowerCase().includes(e.state.search.toLowerCase())});return o.a.createElement("div",{className:"tc"},o.a.createElement("div",{style:{position:"fixed",top:"0",left:"0",zIndex:"999",width:"100%",height:"155px",backgroundColor:"white"}},o.a.createElement("h1",null,"Pokemon Friends"),o.a.createElement(g,{searchChange:this.onSearchChange})),o.a.createElement("div",{style:{marginTop:"155px"}},o.a.createElement(v,null,o.a.createElement(d,{pokemons:t}))))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,n){e.exports=n(18)}},[[9,1,2]]]);
//# sourceMappingURL=main.050c68bf.chunk.js.map