(this["webpackJsonpreact-practice"]=this["webpackJsonpreact-practice"]||[]).push([[0],[,,,,,,,function(e,a,t){e.exports=t.p+"static/media/EmblemStarYellowShadow.0f24a549.png"},function(e,a,t){e.exports=t.p+"static/media/Kids.1b73728d.JPG"},function(e,a,t){e.exports=t(17)},,,,,,function(e,a,t){},function(e,a,t){e.exports=t.p+"static/media/Sun.df66cb2d.png"},function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),i=t(6),c=t.n(i),l=(t(14),t(15),t(1)),s=t(2),o=t(4),m=t(3),d=(t(16),t(7)),u=t.n(d);var p=function(){return r.a.createElement("div",{className:"header jumbotron"},r.a.createElement("h1",{className:"header"},r.a.createElement("span",{className:"header"},r.a.createElement("img",{className:"header",src:u.a,alt:"Emblem"}))),r.a.createElement("hr",null))};var g=function(){var e=(new Date).getFullYear();return r.a.createElement("footer",null,r.a.createElement("p",null,"Copyright \xa9 ",e))},h=t(8),f=t.n(h),P=[{id:"0",name:"Hot Dog Pandesal",img:"images/baking/Hot dog pandesal.JPG",description:"This is good",price:"$3.50 for 6, $7 for 12"}],k=[{id:"0",name:"Mocha Cake",img:"images/baking/Sliced Mocha Cake.JPG",description:"Coffee, flour, egg, butter, whipping cream and sugar",price:"$10 a roll"},{id:"1",name:"Ube Cake",img:"images/baking/Sliced Ube Cake.JPG",description:"Ube, flour, egg, butter, whipping cream and sugar",price:"$10 a roll"},{id:"2",name:"Braso de Mercedes",img:"images/baking/Brasso.JPG",description:"Egg, sugar, cream of tartar",price:"$20 a roll"}],E=[{id:"0",name:"Cookies",img:"images/baking/Cookies.jpg",description:"flour, brown sugar, butter",price:"$3 for 6, $6 for 12"},{id:"1",name:"Puto",img:"images/baking/Puto.JPG",description:"wheat flower, baking powder, salt, sugar, water, vegetable oil",price:"50pcs/$20 100pcs/$40"}],w=[{id:"0",name:"Pandesal",img:"images/baking/SquarePandesal.jpg",description:"flour, egg, sugar, butter, water, salt and milk",price:"$2 for 6, $4 for 12"}],b=function(e){return r.a.createElement("div",{className:"col-sm-12 col-md-6 col-lg-4 foods"},r.a.createElement("h4",null,e.name),r.a.createElement("img",{src:e.img,alt:e.name}),r.a.createElement("div",{className:"description"},r.a.createElement("p",null,e.description),r.a.createElement("p",null,"Price: ",e.price)))};var C=function(e){return r.a.createElement("div",{className:"col-lg-4 col-md-6 col-sm-12 text-center foods"},r.a.createElement("h2",null,e.name),r.a.createElement("img",{src:e.img,alt:e.name}),r.a.createElement("p",null,e.description),r.a.createElement("p",null,e.type,r.a.createElement("br",null),e.price,r.a.createElement("br",null),e.secondaryPrice,r.a.createElement("br",null),e.thirdPrice))},v=[{id:1,name:"Fried Rice",img:"images/dishes/FriedRice.JPG",description:"Stir fried rice with egg, peas, carrots. Your choice of chicken, garlic or shrimp",type:"Your choice of Chicken, Garlic or Shrimp",price:"Chicken: Half-Pan: $45 Full-Pan: $70",secondaryPrice:"Garlic: Half-Pan: $40 Full-Pan: $75 ",thirdPrice:"Shrimp: Half-Pan: $40 Full-Pan: $75 "},{id:2,name:"Pancit",img:"images/dishes/Pancit1.JPG",description:"Cabbage, carrots, string beans, sugar peas, vermicelli noodles",type:"Your choice of Chicken, Veggie or Shrimp",price:"Chicken: Half-Pan: $40 Full-Pan: $75 ",secondaryPrice:"Veggie: Half-Pan: $40 Full-Pan: $75 ",thirdPrice:"Shrimp: Half-Pan: $40 Full-Pan: $75 "},{id:3,name:"Palabok",img:"",description:"Choice of: Shrimp, Chicken or Beef, Cabbage, carrots, string beans, sugar peas, vermicelli noodles",type:"Your choice of Chicken, Beef or Shrimp",price:"Chicken: Half-Pan: $40 Full-Pan: $70 ",secondaryPrice:"Beef: Half-Pan: $40 Full-Pan: $75 ",thirdPrice:"Shrimp: Half-Pan: $40 Full-Pan: $75 "},{id:4,name:"Lumpia",img:"images/dishes/EggRolls1.JPG",description:"Fried with Cabbage, Carrots. Sugar Peas, String Beans, Beans Sprouts, Lumpia wrapper",type:"Your choice of Chicken, Beef or Pork",sauce:"Dip Choice: Sweet Chili Sause, Garlic Vinegar (Spicy)",price:"Chicken: 50pcs: $65 100pcs: $120",secondaryPrice:"Beef: 50pcs: $65 100pcs: $120",thirdPrice:"Pork: 50pcs: $65 100pcs: $120"},{id:5,name:"Okoy",img:"images/dishes/OkoyBatch.JPG",description:"Shrimp, Sweet Potato, Carrots, Bean Sprouts, Garlic, Onion, Fish Ball (optional)",price:"1pc: $2.50 50pcs: $150 "},{id:6,name:"BBQ Skewers",img:"images/dishes/Skewer.JPG",description:"Contains food",price:"20pcs: $30 40pcs: $50 "}],$=function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(){var e;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=a.call.apply(a,[this].concat(r))).state={showPandesal:!1,showPandesalInside:!1,showCake:!1,showOther:!1,showBakeShop:!1,showMenu:!1},e.togglePandesalHandler=function(){var a=e.state.showPandesal;e.setState({showPandesal:!a})},e.togglePandesalInsidesHandler=function(){var a=e.state.showPandesalInside;e.setState({showPandesalInside:!a})},e.toggleCakeHandler=function(){var a=e.state.showCake;e.setState({showCake:!a})},e.toggleOtherHandler=function(){var a=e.state.showOther;e.setState({showOther:!a})},e.toggleBakeShopHandler=function(){var a=e.state.showBakeShop;e.setState({showBakeShop:!a})},e.toggleMenuHandler=function(){var a=e.state.showMenu;e.setState({showMenu:!a})},e}return Object(s.a)(t,[{key:"render",value:function(){var e=null,a=null,t=null,n=null,i=null,c=null;return this.state.showPandesal&&(e=r.a.createElement("div",{className:"row"},w.map((function(e){return r.a.createElement(b,{key:e.id,name:e.name,img:e.img,description:e.description,price:e.price})})))),this.state.showPandesalInside&&(a=r.a.createElement("div",{className:"row"},P.map((function(e){return r.a.createElement(b,{key:e.id,name:e.name,img:e.img,description:e.description,price:e.price})})))),this.state.showCake&&(t=r.a.createElement("div",{className:"row"},k.map((function(e){return r.a.createElement(b,{key:e.id,name:e.name,img:e.img,description:e.description,price:e.price})})))),this.state.showOther&&(n=r.a.createElement("div",{className:"row"},E.map((function(e){return r.a.createElement(b,{key:e.id,name:e.name,img:e.img,description:e.description,price:e.price})})))),this.state.showBakeShop&&(i=r.a.createElement("div",null,r.a.createElement("div",{className:"container"},r.a.createElement("h3",{onClick:this.togglePandesalHandler},"Dulaycious Pandesal"),e),r.a.createElement("div",{className:"container"},r.a.createElement("h3",{onClick:this.togglePandesalInsidesHandler},"Dulaycious Palaman"),a),r.a.createElement("div",{className:"container"},r.a.createElement("h3",{onClick:this.toggleCakeHandler},"Dulaycious Cakes"),t),r.a.createElement("div",{className:"container"},r.a.createElement("h3",{onClick:this.toggleOtherHandler},"Dulaycious Others"),n))),this.state.showMenu&&(c=r.a.createElement("div",null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},v.map((function(e){return r.a.createElement(C,{key:e.id,name:e.name,img:e.img,description:e.description,type:e.type,price:e.price,secondaryPrice:e.secondaryPrice,thirdPrice:e.thirdPrice})})))))),r.a.createElement("div",null,r.a.createElement("h2",{onClick:this.toggleMenuHandler},"Dulaycious Menu"),c,r.a.createElement("h2",{onClick:this.toggleBakeShopHandler},"Dulaycious Bakery"),i,r.a.createElement("h2",null,"Catering"),r.a.createElement("h2",null,"Order"))}}]),t}(n.Component);var S=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(p,null),r.a.createElement("img",{src:f.a,alt:"Kids"}),r.a.createElement($,null),r.a.createElement("br",null),r.a.createElement(g,null))},y=function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(){return Object(l.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(S,null))}}]),t}(n.Component);c.a.render(r.a.createElement(y,null),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.5193e0c7.chunk.js.map