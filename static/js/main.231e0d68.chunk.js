(this["webpackJsonpgiphy-website"]=this["webpackJsonpgiphy-website"]||[]).push([[0],{102:function(t,e,i){},103:function(t,e,i){},104:function(t,e,i){"use strict";i.r(e);var n=i(29),a=i.n(n),s=i(3),c=i(20),r=i(54),o=i(23),l=Object(c.c)({trendingGifs:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"GET_TRENDING_LIST":return Object(o.a)(e.payload);default:return t}},artistGifs:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"GET_ARTIST_LIST":return Object(o.a)(e.payload);default:return t}},reactionsGifs:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"GET_REACTIONS_LIST":return Object(o.a)(e.payload);default:return t}},searchedGifs:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"GET_SEARCHED_GIFS":return Object(o.a)(e.payload);default:return t}},gifList:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"GET_GIF_LIST":return Object(o.a)(e.payload);default:return t}},trendingStickers:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"GET_TRENDING_STICKERS":return Object(o.a)(e.payload);default:return t}},stickersList:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"GET_STICKERS_LIST":return Object(o.a)(e.payload);default:return t}},searchTerm:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"GET_SEARCH_TERM":return e.payload;default:return t}},gifTitle:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"GET_TITLE":return e.payload;default:return t}},tagTitle:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"gifs",e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"UPDATE_TAG_TITLE":return e.payload;default:return t}}}),u=i(1),d=i.n(u),g=i(10),p=i(5),j=i(6),f=i(7),h=i(9),b=i(8),m=i(11),_=i.n(m),O=i(21),v=i(22),x=i.n(v),y=function(t){return function(){var e=Object(O.a)(_.a.mark((function e(i){var n;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.get("https://api.giphy.com/v1/gifs/search?q=".concat(t,"&api_key=ms344CewNH5NEbybHwQifMZImoQfEQ38"));case 2:n=e.sent,i({type:"GET_GIF_LIST",payload:n.data.data});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},k=function(t){return function(){var e=Object(O.a)(_.a.mark((function e(i){var n;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.get("https://api.giphy.com/v1/stickers/search?q=".concat(t,"&api_key=ms344CewNH5NEbybHwQifMZImoQfEQ38"));case 2:n=e.sent,i({type:"GET_STICKERS_LIST",payload:n.data.data});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},T=function(t){return{type:"GET_TITLE",payload:t}},L=i.p+"static/media/giphy-logo.070785b1.png",N=i.p+"static/media/user.b5716a38.svg",w=i.p+"static/media/menu.594de798.svg",I=i(4),G=i.n(I),E=i(0),S=function(t){Object(h.a)(i,t);var e=Object(b.a)(i);function i(t){var n;return Object(j.a)(this,i),(n=e.call(this,t)).onButtonClick=function(t){n.props.getTitle(t.target.innerHTML),n.props.getGifList(t.target.innerHTML)},n.onMenuButtonClick=function(){"none"===n.dropdown.current.style.display?(n.dropdown.current.style.display="flex",n.dropdown.current.style.opacity="1"):(n.dropdown.current.style.display="none",n.dropdown.current.style.opacity="0")},n.mobileMenu=d.a.createRef(),n.dropdown=d.a.createRef(),n}return Object(f.a)(i,[{key:"componentDidMount",value:function(){var t=this;window.addEventListener("resize",(function(){null!==t.dropdown.current&&(window.innerWidth>1050?(t.dropdown.current.style.display="flex",t.dropdown.current.style.opacity="1"):(t.dropdown.current.style.display="none",t.dropdown.current.style.opacity="0"))}))}},{key:"render",value:function(){return Object(E.jsxs)("nav",{className:G.a.navigation,children:[Object(E.jsxs)(g.b,{to:"/",className:G.a.logo,children:[Object(E.jsx)("img",{src:L,alt:"Giphy logo"}),Object(E.jsx)("h5",{children:"GIPHY"})]}),Object(E.jsxs)("div",{className:G.a.dropdown,ref:this.dropdown,children:[Object(E.jsx)("div",{className:G.a.dropdownAngle}),Object(E.jsxs)("div",{className:G.a.mobileNav,ref:this.mobileMenu,children:[Object(E.jsxs)("ul",{className:G.a.navigation__list,children:[Object(E.jsxs)("li",{className:G.a.navigation__listItem,children:[Object(E.jsx)(g.b,{to:"/giflist",onClick:this.onButtonClick,children:"Reactions"}),Object(E.jsx)("div",{className:G.a.background})]}),Object(E.jsxs)("li",{className:G.a.navigation__listItem,children:[Object(E.jsx)(g.b,{to:"/giflist",onClick:this.onButtonClick,children:"Entertainment"}),Object(E.jsx)("div",{className:G.a.background})]}),Object(E.jsxs)("li",{className:G.a.navigation__listItem,children:[Object(E.jsx)(g.b,{to:"/giflist",onClick:this.onButtonClick,children:"Sports"}),Object(E.jsx)("div",{className:G.a.background})]}),Object(E.jsxs)("li",{className:G.a.navigation__listItem,children:[Object(E.jsx)(g.b,{to:"/stickers",children:"Stickers"}),Object(E.jsx)("div",{className:G.a.background})]}),Object(E.jsxs)("li",{className:G.a.navigation__listItem,children:[Object(E.jsx)(g.b,{to:"/giflist",onClick:this.onButtonClick,children:"Artist"}),Object(E.jsx)("div",{className:G.a.background})]})]}),Object(E.jsxs)("div",{className:G.a.contentWrapper,children:[Object(E.jsx)("a",{href:"https://giphy.com/create/gifmaker",target:"_blank",rel:"noreferrer",className:G.a.uploadButton,children:"Upload"}),Object(E.jsx)("a",{href:"https://giphy.com/upload",target:"_blank",rel:"noreferrer",className:G.a.createButton,children:"Create"})]}),Object(E.jsxs)(g.b,{to:"/login",className:G.a.logInButton,children:[Object(E.jsx)("span",{children:Object(E.jsx)("img",{src:N,alt:"User icon"})}),Object(E.jsx)("h5",{children:"Log In"})]})]})]}),Object(E.jsx)("img",{src:w,alt:"Menu Icon",className:G.a.menuButton,onClick:this.onMenuButtonClick})]})}}]),i}(u.Component),C=Object(s.b)(null,{getTitle:T,getGifList:y})(S),B=i(55),P=i.n(B),R=i.p+"static/media/search.b8eac1e0.svg",H=function(t){Object(h.a)(i,t);var e=Object(b.a)(i);function i(t){var n;return Object(j.a)(this,i),(n=e.call(this,t)).onSearch=function(){n.props.updateSearchTerm(n.searchBar.current.value),n.props.getSearchedGifs(n.searchBar.current.value),n.props.getStickersList(n.searchBar.current.value),n.searchBar.current.value=""},n.searchBar=d.a.createRef(),n}return Object(f.a)(i,[{key:"render",value:function(){return Object(E.jsxs)("div",{className:P.a.searchBar,children:[Object(E.jsx)("input",{type:"text",placeholder:"Search all GIF's and Stickers",ref:this.searchBar}),Object(E.jsx)(g.b,{to:"/search",onClick:this.onSearch,children:Object(E.jsx)("img",{src:R,alt:"Search icon"})})]})}}]),i}(u.Component),A=Object(s.b)((function(t){return{searchTerm:t.searchTerm,gifList:t.searchedGifs}}),{getSearchedGifs:function(t){return function(){var e=Object(O.a)(_.a.mark((function e(i){var n;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.get("https://api.giphy.com/v1/gifs/search?q=".concat(t,"&api_key=ms344CewNH5NEbybHwQifMZImoQfEQ38"));case 2:n=e.sent,i({type:"GET_SEARCHED_GIFS",payload:n.data.data});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},updateSearchTerm:function(t){return{type:"GET_SEARCH_TERM",payload:t}},getStickersList:k})(H),Q=i(56),M=i.n(Q),D=function(t){Object(h.a)(i,t);var e=Object(b.a)(i);function i(){return Object(j.a)(this,i),e.apply(this,arguments)}return Object(f.a)(i,[{key:"render",value:function(){return Object(E.jsxs)("div",{className:M.a.header,id:"top",children:[Object(E.jsx)(C,{}),Object(E.jsx)(A,{})]})}}]),i}(u.Component),F=i(31),z=i.n(F),Z=(i(102),function(t){var e=t.gif;return Object(E.jsx)("img",{src:e,alt:"Gif Description"})}),K=i.p+"static/media/trend.c8e3e49c.svg",q=(i(52),i(27)),U=i.n(q),W=Object(s.b)((function(t){return{trendingGifs:t.trendingGifs}}))((function(t){var e=t.trendingGifs.map((function(t){return Object(E.jsx)(Z,{gif:t.images.downsized.url},t.id)}));return Object(E.jsxs)("div",{className:U.a.trending,children:[Object(E.jsxs)("span",{className:U.a.heading,children:[Object(E.jsx)("img",{src:K,alt:"trending icon"}),Object(E.jsx)("h3",{children:"Trending"})]}),Object(E.jsx)(z.a,{responsive:{desktop:{breakpoint:{max:3e3,min:500},items:5,slidesToSlide:3},tablet:{breakpoint:{max:900,min:750},items:4,slidesToSlide:2},mobile:{breakpoint:{max:749,min:0},items:2,slidesToSlide:1}},showDots:!1,containerClass:U.a.trendingList,itemClass:U.a.trendingListItem,infinite:!0,children:e})]})})),Y=i.p+"static/media/flash.723f7e13.svg",J=i(28),X=i.n(J),V=Object(s.b)((function(t){return{artistGifs:t.artistGifs}}))((function(t){var e=t.artistGifs.map((function(t){return Object(E.jsx)(Z,{gif:t.images.downsized.url},t.id)}));return Object(E.jsxs)("div",{className:X.a.artist,children:[Object(E.jsxs)("span",{className:X.a.heading,children:[Object(E.jsx)("img",{src:Y,alt:"trending icon"}),Object(E.jsx)("h3",{children:"Artist"})]}),Object(E.jsx)(z.a,{responsive:{desktop:{breakpoint:{max:3e3,min:500},items:3,slidesToSlide:1},tablet:{breakpoint:{max:825,min:0},items:2}},showDots:!1,containerClass:X.a.artistList,itemClass:X.a.artistListItem,infinite:!0,children:e})]})})),$=i.p+"static/media/video-player.e58a5c72.svg",tt=i(17),et=i.n(tt),it=Object(s.b)((function(t){return{reactionsGifs:t.reactionsGifs}}))((function(t){var e;return Object(E.jsxs)("div",{className:et.a.reactions,children:[Object(E.jsxs)("span",{className:et.a.heading,children:[Object(E.jsx)("img",{src:$,alt:"trending icon"}),Object(E.jsx)("h3",{children:"Reactions"})]}),t.reactionsGifs[0]?(e=t.reactionsGifs,Object(E.jsxs)("div",{className:et.a.container,children:[Object(E.jsx)("div",{className:et.a.mainGif,children:Object(E.jsx)("img",{src:e[0].images.downsized.url,alt:"Gif"})}),Object(E.jsxs)("ul",{className:et.a.gifList,children:[Object(E.jsx)("li",{className:et.a.gifListItem,children:Object(E.jsx)("img",{src:e[1].images.downsized.url,alt:"Gif"})}),Object(E.jsx)("li",{className:et.a.gifListItem,children:Object(E.jsx)("img",{src:e[2].images.downsized.url,alt:"Gif"})}),Object(E.jsx)("li",{className:et.a.gifListItem,children:Object(E.jsx)("img",{src:e[3].images.downsized.url,alt:"Gif"})}),Object(E.jsx)("li",{className:et.a.gifListItem,children:Object(E.jsx)("img",{src:e[4].images.downsized.url,alt:"Gif"})})]})]})):null]})})),nt=i(40),at=i.n(nt),st=i.p+"static/media/upload.3c41c9b8.svg",ct=function(){return Object(E.jsx)("div",{className:at.a.footer,children:Object(E.jsxs)("a",{href:"#top",className:at.a.container,children:[Object(E.jsx)("img",{src:st,alt:"Up Arrow"}),Object(E.jsx)("h5",{children:"Back to Top"})]})})},rt=i(57),ot=i.n(rt),lt=function(t){Object(h.a)(i,t);var e=Object(b.a)(i);function i(){return Object(j.a)(this,i),e.apply(this,arguments)}return Object(f.a)(i,[{key:"componentDidMount",value:function(){this.props.getTrendingGifs(),this.props.getReactionsGifs(),this.props.getArtistGifs()}},{key:"render",value:function(){return Object(E.jsxs)("div",{className:ot.a.homePage,children:[Object(E.jsx)(D,{}),Object(E.jsx)(W,{}),Object(E.jsx)(V,{}),Object(E.jsx)(it,{}),Object(E.jsx)(ct,{})]})}}]),i}(u.Component),ut=Object(s.b)((function(t){return{searchTerm:t.searchTerm}}),{getTrendingGifs:function(){return function(){var t=Object(O.a)(_.a.mark((function t(e){var i;return _.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x.a.get("http://api.giphy.com/v1/gifs/trending?api_key=ms344CewNH5NEbybHwQifMZImoQfEQ38&limit=21");case 2:i=t.sent,e({type:"GET_TRENDING_LIST",payload:i.data.data});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},getReactionsGifs:function(){return function(){var t=Object(O.a)(_.a.mark((function t(e){var i;return _.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x.a.get("https://api.giphy.com/v1/gifs/search?q=reactions&api_key=ms344CewNH5NEbybHwQifMZImoQfEQ38");case 2:i=t.sent,e({type:"GET_REACTIONS_LIST",payload:i.data.data});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},getArtistGifs:function(){return function(){var t=Object(O.a)(_.a.mark((function t(e){var i;return _.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x.a.get("https://api.giphy.com/v1/gifs/search?q=artist&api_key=ms344CewNH5NEbybHwQifMZImoQfEQ38");case 2:i=t.sent,e({type:"GET_ARTIST_LIST",payload:i.data.data});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}})(lt),dt=i.p+"static/media/facebook.6f04040e.svg",gt=i.p+"static/media/apple.d6eece6e.svg",pt=i.p+"static/media/reload.0e231626.svg",jt=i(19),ft=i.n(jt),ht=function(){return Object(E.jsxs)("div",{className:ft.a.loginPage,children:[Object(E.jsxs)(g.b,{exact:!0,to:"/",className:ft.a.heading,children:[Object(E.jsx)("img",{src:L,alt:"Giphy Logo"}),Object(E.jsxs)("span",{children:[Object(E.jsx)("h1",{children:"Giphy"}),Object(E.jsx)("h1",{children:"Login"})]})]}),Object(E.jsx)("video",{autoPlay:!0,muted:!0,loop:!0,children:Object(E.jsx)("source",{src:"https://media.giphy.com/login-join-backgrounds/science-lab.mp4",type:"video/mp4"})}),Object(E.jsxs)("form",{className:ft.a.form,children:[Object(E.jsxs)("a",{href:"#facebook",className:ft.a.facebookLogin,children:[Object(E.jsx)("img",{src:dt,alt:"Facebook Icon"}),Object(E.jsx)("span",{children:"Login with Facebook"})]}),Object(E.jsxs)("a",{href:"#apple",className:ft.a.appleLogin,children:[Object(E.jsx)("img",{src:gt,alt:"Apple Icon"}),Object(E.jsx)("span",{children:"Login with Apple"})]}),Object(E.jsx)("span",{className:ft.a.or,children:"Or"}),Object(E.jsx)("input",{type:"text",placeholder:"Email Address"}),Object(E.jsx)("input",{type:"password",placeholder:"Password"}),Object(E.jsx)("button",{className:ft.a.submitButton,onClick:function(t){t.preventDefault()},children:"Log In"})]}),Object(E.jsxs)(g.b,{exact:!0,to:"/",className:ft.a.returnButton,children:[Object(E.jsx)("img",{src:pt,alt:"Return Icon"}),Object(E.jsx)("span",{children:"Return to Homepage"})]})]})},bt=i(58),mt=i.n(bt),_t=function(t){Object(h.a)(i,t);var e=Object(b.a)(i);function i(){return Object(j.a)(this,i),e.apply(this,arguments)}return Object(f.a)(i,[{key:"render",value:function(){var t=this,e=this.props.gifList.map((function(t){return Object(E.jsx)(Z,{gif:t.images.downsized.url},t.id)}));return Object(E.jsx)("ul",{className:mt.a.gifList,onClick:function(){t.forceUpdate()},children:e})}}]),i}(u.Component),Ot=i(18),vt=i.n(Ot),xt=function(t){Object(h.a)(i,t);var e=Object(b.a)(i);function i(t){var n;return Object(j.a)(this,i),(n=e.call(this,t)).onFirstButtonClick=function(t){t.target.classList.add("".concat(vt.a.active)),t.target.nextElementSibling.classList.remove("".concat(vt.a.active)),n.props.getGifList(n.props.searchTerm),n.props.updateTagTitle("gifs")},n.onSecondButtonClick=function(t){t.target.classList.add("".concat(vt.a.active)),t.target.previousElementSibling.classList.remove("".concat(vt.a.active)),n.props.getStickersList(n.props.searchTerm),n.props.updateTagTitle("stickers")},n.stickersButton=d.a.createRef(),n.gifsButton=d.a.createRef(),n}return Object(f.a)(i,[{key:"render",value:function(){return Object(E.jsxs)("div",{className:vt.a.tagNavigation,children:[Object(E.jsx)("h2",{className:vt.a.searchTitle,children:this.props.searchTerm}),Object(E.jsx)("button",{className:"".concat(vt.a.gifsButton," ").concat(vt.a.active),onClick:this.onFirstButtonClick,ref:this.gifsButton,children:"GIFs"}),Object(E.jsx)("button",{className:vt.a.stickersButton,onClick:this.onSecondButtonClick,ref:this.stickersButton,children:"Stickers"})]})}}]),i}(u.Component),yt=Object(s.b)((function(t){return{searchTerm:t.searchTerm}}),{getStickersList:k,getGifList:y,updateTagTitle:function(t){return{type:"UPDATE_TAG_TITLE",payload:t}}})(xt),kt=i(59),Tt=i.n(kt),Lt=function(t){Object(h.a)(i,t);var e=Object(b.a)(i);function i(){return Object(j.a)(this,i),e.apply(this,arguments)}return Object(f.a)(i,[{key:"render",value:function(){var t="stickers"===this.props.tagTitle?this.props.stickersList:this.props.gifList;return Object(E.jsxs)("div",{className:Tt.a.searchPage,children:[Object(E.jsx)(D,{}),Object(E.jsx)(yt,{}),Object(E.jsx)(_t,{gifList:t}),Object(E.jsx)(ct,{})]})}}]),i}(u.Component),Nt=Object(s.b)((function(t){return{gifList:t.searchedGifs,stickersList:t.stickersList,tagTitle:t.tagTitle}}))(Lt),wt=i(32),It=i.n(wt),Gt=function(t){Object(h.a)(i,t);var e=Object(b.a)(i);function i(){return Object(j.a)(this,i),e.apply(this,arguments)}return Object(f.a)(i,[{key:"render",value:function(){var t=this.props.gifList.map((function(t){return Object(E.jsx)(Z,{gif:t.images.downsized.url},t.id)}));return Object(E.jsxs)("div",{className:It.a.giflist,children:[Object(E.jsx)(C,{}),Object(E.jsx)(A,{}),Object(E.jsxs)("h1",{className:It.a.title,children:[this.props.gifTitle," GIFs"]}),Object(E.jsx)("ul",{className:It.a.list,children:t}),Object(E.jsx)(ct,{})]})}}]),i}(u.Component),Et=Object(s.b)((function(t){return{gifList:t.gifList,gifTitle:t.gifTitle}}),{getGifList:y,getTitle:T})(Gt),St=i(33),Ct=i.n(St),Bt=function(t){Object(h.a)(i,t);var e=Object(b.a)(i);function i(){return Object(j.a)(this,i),e.apply(this,arguments)}return Object(f.a)(i,[{key:"componentDidMount",value:function(){this.props.getTrendingStickers()}},{key:"render",value:function(){var t=this.props.trendingStickers.map((function(t){return Object(E.jsx)(Z,{gif:t.images.downsized.url},t.id)}));return Object(E.jsxs)("div",{className:Ct.a.stickersPage,children:[Object(E.jsx)(C,{}),Object(E.jsx)(A,{}),Object(E.jsx)("h1",{className:Ct.a.title,children:"Stickers"}),Object(E.jsx)("ul",{className:Ct.a.list,children:t}),Object(E.jsx)(ct,{})]})}}]),i}(u.Component),Pt=Object(s.b)((function(t){return{trendingStickers:t.trendingStickers}}),{getTrendingStickers:function(){return function(){var t=Object(O.a)(_.a.mark((function t(e){var i;return _.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x.a.get("http://api.giphy.com/v1/stickers/trending?api_key=ms344CewNH5NEbybHwQifMZImoQfEQ38&limit=21");case 2:i=t.sent,e({type:"GET_TRENDING_STICKERS",payload:i.data.data});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}})(Bt),Rt=i(60),Ht=i.n(Rt),At=function(){return Object(E.jsx)(g.a,{children:Object(E.jsxs)(p.c,{className:Ht.a.app,children:[Object(E.jsx)(p.a,{exact:!0,path:"/",component:ut}),Object(E.jsx)(p.a,{exact:!0,path:"/login",component:ht}),Object(E.jsx)(p.a,{exact:!0,path:"/search",component:Nt}),Object(E.jsx)(p.a,{exact:!0,path:"/giflist",component:Et}),Object(E.jsx)(p.a,{exact:!0,path:"/stickers",component:Pt})]})})},Qt=(i(103),window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||c.d),Mt=Object(c.e)(l,Qt(Object(c.a)(r.a)));a.a.render(Object(E.jsx)(s.a,{store:Mt,children:Object(E.jsx)(At,{})}),document.querySelector("#root"))},17:function(t,e,i){t.exports={reactions:"reactionsList_reactions__2jd3Q",heading:"reactionsList_heading__Yw8tE",container:"reactionsList_container__1QDiE",mainGif:"reactionsList_mainGif__1CxgW",gifList:"reactionsList_gifList__Rmraq",gifListItem:"reactionsList_gifListItem__2N8eq"}},18:function(t,e,i){t.exports={tagNavigation:"tagNavigation_tagNavigation__2tRyf",searchTitle:"tagNavigation_searchTitle__2oPmb",gifsButton:"tagNavigation_gifsButton__3-lkW",stickersButton:"tagNavigation_stickersButton__2Dlcr",active:"tagNavigation_active__2td7o"}},19:function(t,e,i){t.exports={loginPage:"loginPage_loginPage__1esCJ",heading:"loginPage_heading__3A3gp",form:"loginPage_form__1vfXx",facebookLogin:"loginPage_facebookLogin__17-wH",appleLogin:"loginPage_appleLogin__3Ijfu",or:"loginPage_or__1agoy",submitButton:"loginPage_submitButton___M8SB",returnButton:"loginPage_returnButton__3KOfC"}},27:function(t,e,i){t.exports={trending:"trendingList_trending__2cZ73",heading:"trendingList_heading__2Hzsd",trendingList:"trendingList_trendingList__1I_KO",trendingListItem:"trendingList_trendingListItem__sQnr4"}},28:function(t,e,i){t.exports={artist:"artistList_artist__3b-cO",heading:"artistList_heading__3ZZC7",artistList:"artistList_artistList__3vatE",artistListItem:"artistList_artistListItem__2w3oD"}},32:function(t,e,i){t.exports={giflist:"gifListPage_giflist__1LS-g",title:"gifListPage_title__1tIPb",list:"gifListPage_list__1xErS"}},33:function(t,e,i){t.exports={stickersPage:"stickersPage_stickersPage__2nzdY",title:"stickersPage_title__3xkii",list:"stickersPage_list__2BqHK"}},4:function(t,e,i){t.exports={navigation:"navigation_navigation__unRcd",dropdown:"navigation_dropdown__3lIyS",mobileNav:"navigation_mobileNav__33JfR",menuButton:"navigation_menuButton__3FmYv",logo:"navigation_logo__R32-1",navigation__list:"navigation_navigation__list__1jgI5",navigation__listItem:"navigation_navigation__listItem__3BZsx",background:"navigation_background__1jf6Y",contentWrapper:"navigation_contentWrapper__4MFYI",createButton:"navigation_createButton__rF8sM",uploadButton:"navigation_uploadButton__1cixJ",logInButton:"navigation_logInButton__2rp3c",dropdownAngle:"navigation_dropdownAngle__2NRKg"}},40:function(t,e,i){t.exports={footer:"footer_footer__1lZIc",container:"footer_container__a7Ksf"}},55:function(t,e,i){t.exports={searchBar:"searchBar_searchBar__dv6Hr"}},56:function(t,e,i){t.exports={header:"header_header__v9FKw"}},57:function(t,e,i){t.exports={homePage:"homePage_homePage__7F97X"}},58:function(t,e,i){t.exports={gifList:"gifList_gifList__EFAL7"}},59:function(t,e,i){t.exports={searchPage:"searchPage_searchPage__1W-hv"}},60:function(t,e,i){}},[[104,1,2]]]);
//# sourceMappingURL=main.231e0d68.chunk.js.map