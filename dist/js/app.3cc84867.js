(function(e){function t(t){for(var c,o,i=t[0],u=t[1],l=t[2],s=0,d=[];s<i.length;s++)o=i[s],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&d.push(a[o][0]),a[o]=0;for(c in u)Object.prototype.hasOwnProperty.call(u,c)&&(e[c]=u[c]);b&&b(t);while(d.length)d.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],c=!0,o=1;o<n.length;o++){var u=n[o];0!==a[u]&&(c=!1)}c&&(r.splice(t--,1),e=i(i.s=n[0]))}return e}var c={},a={app:0},r=[];function o(e){return i.p+"js/"+({about:"about"}[e]||e)+"."+{about:"c616d432"}[e]+".js"}function i(t){if(c[t])return c[t].exports;var n=c[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n=a[e];if(0!==n)if(n)t.push(n[2]);else{var c=new Promise((function(t,c){n=a[e]=[t,c]}));t.push(n[2]=c);var r,u=document.createElement("script");u.charset="utf-8",u.timeout=120,i.nc&&u.setAttribute("nonce",i.nc),u.src=o(e);var l=new Error;r=function(t){u.onerror=u.onload=null,clearTimeout(s);var n=a[e];if(0!==n){if(n){var c=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+c+": "+r+")",l.name="ChunkLoadError",l.type=c,l.request=r,n[1](l)}a[e]=void 0}};var s=setTimeout((function(){r({type:"timeout",target:u})}),12e4);u.onerror=u.onload=r,document.head.appendChild(u)}return Promise.all(t)},i.m=e,i.c=c,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)i.d(n,c,function(t){return e[t]}.bind(null,c));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var s=0;s<u.length;s++)t(u[s]);var b=l;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0c73":function(e,t,n){"use strict";n("f334")},"1ddf":function(e,t,n){"use strict";n("23ed")},"23ed":function(e,t,n){},"2e0f":function(e,t,n){"use strict";n("a741")},"33c2":function(e,t,n){"use strict";n("3708")},"36be":function(e,t,n){e.exports=n.p+"img/menu.e659d975.svg"},3708:function(e,t,n){},"42de":function(e,t,n){},"4c8d":function(e,t,n){"use strict";n("fac8")},"56d7":function(e,t,n){"use strict";n.r(t);n("d3b7"),n("e260"),n("e6cf"),n("cca6"),n("a79d");var c=n("7a23");function a(e,t,n,a,r,o){var i=Object(c["N"])("eshop-header"),u=Object(c["N"])("router-view"),l=Object(c["N"])("eshop-footer");return Object(c["E"])(),Object(c["i"])(c["b"],null,[Object(c["n"])(i,{user:e.user},null,8,["user"]),Object(c["n"])("div",{class:"down",style:{minHeight:e.Height+"px"}},[Object(c["n"])(u)],4),Object(c["n"])(l)],64)}n("b0c0");var r=n("36be"),o=n.n(r),i=Object(c["hb"])("data-v-9e19570c");Object(c["H"])("data-v-9e19570c");var u={class:"globalheader"},l={class:"header-left"},s={class:"logo"},b=Object(c["m"])("TOMSESHOP"),d={class:"header-right"},j=Object(c["n"])("i",{class:"el-icon-shopping-cart-1"},null,-1),O=Object(c["n"])("a",null,"關於我們",-1),p=Object(c["m"])("我的訂單"),f=Object(c["m"])("註冊");Object(c["F"])();var m=i((function(e,t,n,a,r,m){var v=Object(c["N"])("router-link"),g=Object(c["N"])("el-badge"),h=Object(c["N"])("login-dailog"),y=Object(c["N"])("diaogModel");return Object(c["E"])(),Object(c["i"])("header",u,[Object(c["n"])("div",l,[Object(c["n"])("div",s,[Object(c["n"])(v,{to:"/"},{default:i((function(){return[b]})),_:1})])]),Object(c["n"])("div",d,[Object(c["n"])(g,{value:e.buyCartAmount,type:"danger"},{default:i((function(){return[Object(c["n"])(v,{to:"/BuyCart"},{default:i((function(){return[j]})),_:1})]})),_:1},8,["value"]),Object(c["n"])("div",{class:["rwd-toggle",{hide:e.isHide}],ref:"rwd"},[O,e.user.name?(Object(c["E"])(),Object(c["i"])(v,{key:0,to:"/MyOrder/".concat(e.user.uid)},{default:i((function(){return[p]})),_:1},8,["to"])):Object(c["j"])("",!0),e.user.name?Object(c["j"])("",!0):(Object(c["E"])(),Object(c["i"])(v,{key:1,to:"/signUp"},{default:i((function(){return[f]})),_:1})),e.user.name?Object(c["j"])("",!0):(Object(c["E"])(),Object(c["i"])("a",{key:2,onClick:t[1]||(t[1]=function(){return e.handleDialog&&e.handleDialog.apply(e,arguments)})},"登入")),e.user.name?(Object(c["E"])(),Object(c["i"])("a",{key:3,onClick:t[2]||(t[2]=function(){return e.handleLogout&&e.handleLogout.apply(e,arguments)})},"登出")):Object(c["j"])("",!0)],2),Object(c["n"])("img",{ref:"toggle",class:"toggle",onClick:t[3]||(t[3]=function(){return e.toggleMenu&&e.toggleMenu.apply(e,arguments)}),src:o.a,alt:""},null,512)]),Object(c["n"])(y,{"destroy-on-close":!0,"append-to-body":!0,title:"Login",ref:"dialog"},{default:i((function(){return[Object(c["n"])(h,{close:e.close},{default:i((function(){return[Object(c["n"])("button",{onClick:t[4]||(t[4]=function(){return e.close&&e.close.apply(e,arguments)}),type:"submit",class:"btn btn-primary"},"送出")]})),_:1},8,["close"])]})),_:1},512)])})),v=(n("4160"),n("159b"),n("5502")),g=n("6c02"),h=Object(c["hb"])("data-v-33a0ca20");Object(c["H"])("data-v-33a0ca20");var y={class:"dialog"};Object(c["F"])();var w=h((function(e,t,n,a,r,o){var i=Object(c["N"])("el-dialog");return Object(c["E"])(),Object(c["i"])("div",y,[Object(c["n"])(i,{"destroy-on-close":!0,title:e.title,width:e.dialogWidth,center:!0,modelValue:e.dialogTableVisible,"onUpdate:modelValue":t[1]||(t[1]=function(t){return e.dialogTableVisible=t})},{default:h((function(){return[Object(c["M"])(e.$slots,"default")]})),_:3},8,["title","width","modelValue"])])})),C=Object(c["o"])({props:{title:String,width:String},setup:function(e,t){var n=Object(c["J"])("500px"),a=Object(c["J"])(!1),r=function(){a.value=!1},o=function(){a.value=!0},i=function(){var e=500,t=document.body.clientWidth;n.value=t<e?"100%":"500px"};return Object(c["B"])((function(){i()})),window.onresize=function(){i()},{dialogTableVisible:a,dialogWidth:n,open:o,close:r}}});n("f9c6");C.render=w,C.__scopeId="data-v-33a0ca20";var k=C,E=Object(c["n"])("label",{for:"email"},"email",-1),P={class:"form-group"},S={class:"errorColor"},L={class:"form-group"},N=Object(c["n"])("label",{for:"password"},"密碼",-1),J={class:"errorColor"};function _(e,t,n,a,r,o){var i=Object(c["N"])("Field"),u=Object(c["N"])("Form");return Object(c["E"])(),Object(c["i"])(u,{onSubmit:e.onSubmit},{default:Object(c["db"])((function(n){var a=n.errors;return[E,Object(c["n"])("div",P,[Object(c["n"])(i,{name:"email",modelValue:e.email,"onUpdate:modelValue":t[1]||(t[1]=function(t){return e.email=t}),type:"email",class:"form-control",rules:e.isEmailRules},null,8,["modelValue","rules"]),Object(c["n"])("span",S,Object(c["R"])(a.email),1)]),Object(c["n"])("div",L,[N,Object(c["n"])(i,{name:"password",modelValue:e.password,"onUpdate:modelValue":t[2]||(t[2]=function(t){return e.password=t}),class:"form-control",autocomplete:"on",type:"password",rules:e.isPasswordLength},null,8,["modelValue","rules"]),Object(c["n"])("span",J,Object(c["R"])(a.password),1)]),Object(c["M"])(e.$slots,"default")]})),_:3},8,["onSubmit"])}var x=n("7bb1"),R=/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,A=Object(c["o"])({components:{Field:x["a"],Form:x["b"]},setup:function(e,t){var n=Object(c["p"])(),a=n.proxy,r=Object(v["b"])(),o=Object(c["J"])(),i=Object(c["J"])(),u=Object(g["d"])(),l=Object(x["c"])(),s=l.handleSubmit,b=function(e){return!!R.test(e)||"請輸入正確的email"},d=function(e){return!(!e||e.length<6)||"密碼至少要六個字!"},j=s((function(){r.dispatch("getUserLogin",{email:o.value,password:i.value}).then((function(e){a.$message({message:"登入成功",type:"success",showClose:!0,duration:1e3}),setTimeout((function(){u.push("/")}),1e3)}))}));return{isEmailRules:b,onSubmit:j,isPasswordLength:d,email:o,password:i}}});A.render=_;var V=A,I=Object(c["o"])({props:{user:Object},components:{diaogModel:k,loginDailog:V},setup:function(e){var t=Object(c["J"])(!0),n=Object(g["d"])(),a=Object(v["b"])(),r=Object(c["J"])(null),o=Object(c["J"])(null),i=Object(c["J"])(null),u=Object(c["g"])((function(){return a.state.buyCartAmount})),l=JSON.parse(localStorage.getItem("cart"))||[],s=Object(c["J"])(0);l.forEach((function(e){s.value+=e.amount})),a.commit("handleBuyCartAmount",s.value);var b=function(){a.commit("logout"),n.push("/")},d=function(){r.value.open()},j=function(){r.value.close()},O=function(){t.value=!t.value};return document.body.addEventListener("click",(function(e){o.value&&(o.value.contains(e.target)||!1!==t.value||i.value.contains(e.target)?o.value.contains(e.target)&&(t.value=!0):t.value=!0)})),{dialog:r,handleDialog:d,handleLogout:b,buyCartAmount:u,close:j,isHide:t,toggleMenu:O,rwd:o,toggle:i}}});n("33c2"),n("db8b");I.render=m,I.__scopeId="data-v-9e19570c";var T=I,U=Object(c["hb"])("data-v-024705ca");Object(c["H"])("data-v-024705ca");var z={class:"foot"};Object(c["F"])();var D=U((function(e,t){return Object(c["E"])(),Object(c["i"])("footer",z,"所有圖片均用來學習 無其他營利用途")}));n("61be");const M={};M.render=D,M.__scopeId="data-v-024705ca";var B=M,H=Object(c["o"])({components:{EshopHeader:T,EshopFooter:B},setup:function(){var e=Object(c["p"])(),t=e.proxy,n=Object(c["g"])((function(){return a.state.error})),a=Object(v["b"])(),r=Object(c["J"])(0),o=Object(c["g"])((function(){return a.state.user}));return Object(c["B"])((function(){r.value=document.body.clientHeight-50,window.onresize=function(){r.value=document.documentElement.clientHeight-50}})),Object(c["bb"])((function(){return n.value.status}),(function(){var e=n.value,c=e.status,a=e.message;c&&a&&t.$message({message:a,type:"error",showClose:!0,duration:1e3})})),{user:o,Height:r}}});n("4c8d");H.render=a;var $=H,F=n("3fd4"),q=(n("0fae"),n("bc3a")),Z=n.n(q),W=(n("ac1f"),n("841c"),Object(c["hb"])("data-v-9c8cc182"));Object(c["H"])("data-v-9c8cc182");var Y={class:"home"},G={class:"container search"},K={class:"main-product"},Q={class:"container"},X={class:"page"},ee={class:"pagination"};Object(c["F"])();var te=W((function(e,t,n,a,r,o){var i=Object(c["N"])("top-carousel"),u=Object(c["N"])("category-bar"),l=Object(c["N"])("main-product");return Object(c["E"])(),Object(c["i"])("div",Y,[Object(c["n"])(i),Object(c["n"])(u,{ref:"categorybar"},null,512),Object(c["n"])("div",G,[Object(c["eb"])(Object(c["n"])("input",{type:"text",placeholder:"搜索","onUpdate:modelValue":t[1]||(t[1]=function(t){return e.search=t})},null,512),[[c["Y"],e.search]]),Object(c["n"])("i",{onClick:t[2]||(t[2]=function(){return e.handleSearch&&e.handleSearch.apply(e,arguments)}),class:"el-icon-search"})]),Object(c["n"])("div",K,[Object(c["n"])(l,{list:e.product.rows},null,8,["list"])]),Object(c["n"])("div",Q,[Object(c["n"])("nav",X,[Object(c["n"])("ul",ee,[(Object(c["E"])(!0),Object(c["i"])(c["b"],null,Object(c["L"])(e.product.pages,(function(t,n){return Object(c["E"])(),Object(c["i"])("li",{class:"page-item",key:n},[Object(c["n"])("span",{class:["page-link",t===e.pageActive?"active":""],onClick:function(n){return e.hangdlePages(t)}},Object(c["R"])(t),11,["onClick"])])})),128))])])])])}));function ne(e,t,n,a,r,o){var i=Object(c["N"])("swiper-slide"),u=Object(c["N"])("swiper");return Object(c["E"])(),Object(c["i"])(u,{autoplay:e.swiperoptions.autoplay,pagination:e.swiperoptions.pagination,loop:e.swiperoptions.loop},{default:Object(c["db"])((function(){return[(Object(c["E"])(!0),Object(c["i"])(c["b"],null,Object(c["L"])(e.Product,(function(e,t){return Object(c["E"])(),Object(c["i"])(i,{key:t},{default:Object(c["db"])((function(){return[Object(c["n"])("img",{src:e},null,8,["src"])]})),_:2},1024)})),128))]})),_:1},8,["autoplay","pagination","loop"])}var ce=n("6d3b"),ae=n("d17a"),re=n("5dc8"),oe=n("90ea"),ie=n("a16a");n("41fa");ce["a"].use([ae["a"],re["a"]]);var ue=Object(c["o"])({name:"TopCarousel",components:{Swiper:oe["a"],SwiperSlide:ie["a"]},setup:function(){var e=Object(c["J"])(["http://localhost:3000/p360.jpg","http://localhost:3000/p320.jpg","http://localhost:3000/p34.jpg"]),t=Object(c["I"])({autoplay:{delay:3e3,disableOnInteraction:!1},loop:!0,speed:1e3,pagination:{clickable:!0}});return{Product:e,swiperoptions:t}}});ue.render=ne;var le=ue,se={class:"container"},be={class:"row"},de={class:"card"},je={class:"image-container"},Oe={class:"card-body price"},pe={class:"title"},fe=Object(c["n"])("i",{class:"el-icon-shopping-cart-1"},null,-1),me=Object(c["m"])(" 詳細介紹 ");function ve(e,t,n,a,r,o){var i=Object(c["N"])("router-link");return Object(c["E"])(),Object(c["i"])("div",se,[Object(c["n"])("div",be,[(Object(c["E"])(!0),Object(c["i"])(c["b"],null,Object(c["L"])(e.list,(function(e,t){return Object(c["E"])(),Object(c["i"])("div",{class:"col-lg-4 product col-md-6 col-12",key:t},[Object(c["n"])("div",de,[Object(c["n"])("div",je,[Object(c["n"])("img",{src:e.image,class:"card-img-top"},null,8,["src"])]),Object(c["n"])("div",Oe,[Object(c["n"])("h4",pe,Object(c["R"])(e.title),1),Object(c["n"])("span",null,Object(c["R"])(e.price),1)]),Object(c["n"])(i,{to:"/detail/".concat(e.id),class:"btn link-style"},{default:Object(c["db"])((function(){return[fe,me]})),_:2},1032,["to"])])])})),128))])])}var ge=Object(c["o"])({props:{list:Object}});ge.render=ve;var he=ge,ye={class:"container category"};function we(e,t,n,a,r,o){return Object(c["E"])(),Object(c["i"])("div",ye,[Object(c["n"])("nav",null,[Object(c["n"])("li",{onClick:t[1]||(t[1]=function(t){return e.handleCategory(0)})},"全部商品"),Object(c["n"])("li",{onClick:t[2]||(t[2]=function(t){return e.handleCategory(1)})},"潮流外套"),Object(c["n"])("li",{onClick:t[3]||(t[3]=function(t){return e.handleCategory(2)})},"個性上衣"),Object(c["n"])("li",{onClick:t[4]||(t[4]=function(t){return e.handleCategory(3)})},"經典褲款")])])}var Ce=Object(c["o"])({setup:function(){var e=Object(v["b"])(),t=Object(c["J"])(0),n=function(n){t.value=n,e.dispatch("getProductList",{category:n})};return{handleCategory:n,category:t}}});Ce.render=we;var ke=Ce,Ee=Object(c["o"])({name:"Home",components:{TopCarousel:le,MainProduct:he,categoryBar:ke},setup:function(){var e=Object(c["J"])(null),t=Object(v["b"])(),n=Object(c["J"])(),a=Object(c["J"])(1);t.dispatch("getProductList",{page:1,category:0});var r=Object(c["g"])((function(){return t.state.ProductList})),o=function(){Z.a.get("/search/".concat(n.value)).then((function(e){t.commit("getSearch",e.data)}))},i=function(n){a.value=n,window.scrollTo(0,0),t.dispatch("getProductList",{page:n,category:e.value.category})};return{product:r,hangdlePages:i,categorybar:e,pageActive:a,search:n,handleSearch:o}}});n("2e0f"),n("0c73");Ee.render=te,Ee.__scopeId="data-v-9c8cc182";var Pe=Ee,Se={class:"container main"},Le={class:"row detail-container"},Ne={class:"col-md-12 col-lg-5 image-container"},Je={class:"col-md-12 col-lg-7 right-detail"},_e={class:"product-title"},xe={class:"descript"},Re={class:"price"},Ae=Object(c["n"])("span",{class:"twd"},"TWD$",-1),Ve={class:"count"},Ie={class:"chose"},Te={class:"buy-count"},Ue=Object(c["n"])("i",{class:"el-icon-arrow-down"},null,-1),ze={class:"buy-number"},De=Object(c["n"])("i",{class:"el-icon-arrow-up"},null,-1),Me={class:"buy-now"};function Be(e,t,n,a,r,o){var i=Object(c["N"])("el-option"),u=Object(c["N"])("el-select");return Object(c["E"])(),Object(c["i"])("div",Se,[Object(c["n"])("div",Le,[Object(c["n"])("div",Ne,[Object(c["n"])("img",{src:e.list&&e.list.image,alt:""},null,8,["src"])]),Object(c["n"])("div",Je,[Object(c["n"])("h2",_e,Object(c["R"])(e.list.title),1),Object(c["n"])("div",xe,Object(c["R"])(e.list.descript),1),Object(c["n"])("div",Re,[Ae,Object(c["n"])("span",Ve,Object(c["R"])(e.list.price),1)]),Object(c["n"])("div",Ie,[Object(c["n"])("div",Te,[Object(c["n"])("div",{class:"buy-i",onClick:t[1]||(t[1]=function(){return e.handleMin&&e.handleMin.apply(e,arguments)})},[Ue]),Object(c["n"])("span",ze,Object(c["R"])(e.count),1),Object(c["n"])("div",{class:"buy-i",onClick:t[2]||(t[2]=function(){return e.handlePlus&&e.handlePlus.apply(e,arguments)})},[De])]),Object(c["n"])(u,{class:"col-6",modelValue:e.size,"onUpdate:modelValue":t[3]||(t[3]=function(t){return e.size=t}),onChange:e.handleDisable,placeholder:"請選擇尺寸"},{default:Object(c["db"])((function(){return[(Object(c["E"])(!0),Object(c["i"])(c["b"],null,Object(c["L"])(e.options,(function(e){return Object(c["E"])(),Object(c["i"])(i,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])})),128))]})),_:1},8,["modelValue","onChange"])]),Object(c["n"])("div",Me,[Object(c["n"])("button",{disabled:e.isDisable,type:"button",class:"btn",onClick:t[4]||(t[4]=function(){return e.setItemToBuycart&&e.setItemToBuycart.apply(e,arguments)})},Object(c["R"])(void 0===e.size?"請選擇尺寸":"加入購物車"),9,["disabled"])])])])])}n("99af");var He=n("2909"),$e=n("5530"),Fe=Object(c["o"])({setup:function(){var e=Object(c["p"])(),t=e.proxy,n=Object(c["J"])(1),a=Object(c["J"])(),r=Object(c["J"])(!0),o=JSON.parse(localStorage.getItem("cart")),i={},u=Object(c["J"])([]),l=[],s=Object(g["c"])(),b=Object(g["d"])(),d=Object(v["b"])(),j=Object(c["J"])([{value:"S",label:"S"},{value:"M",label:"M"},{value:"L",label:"L"}]),O=function(){n.value+=1},p=function(){n.value>1&&(n.value-=1)},f=function(){t.$message({message:"成功加入購物車!!",type:"success",showClose:!0})},m=function(){if(i.item=C.value.title,i.price=C.value.price,i.image=C.value.image,i.amount=n.value,i.id=C.value.id,i.size=a.value,o&&o.length>0){var e=Object($e["a"])({},i);l.push(e),u.value=[].concat(Object(He["a"])(o),l)}else{var t=Object($e["a"])({},i);u.value.push(t)}localStorage.setItem("cart",JSON.stringify(u.value)),d.commit("getProductCart"),f()};Object(c["B"])((function(){window.scrollTo(0,0)}));var h=function(){b.push("/BuyCart")},y=function(){r.value=!1},w=s.params.id;d.dispatch("getDetailList",w);var C=Object(c["g"])((function(){return d.state.DetailList}));return{list:C,count:n,handlePlus:O,handleMin:p,buyList:i,setItemToBuycart:m,handleRouter:h,open:f,size:a,options:j,isDisable:r,handleDisable:y}}});n("fa0e");Fe.render=Be;var qe=Fe,Ze={class:"container"},We={class:"container"},Ye={class:"paymentButton"};function Ge(e,t,n,a,r,o){var i=Object(c["N"])("payment-step"),u=Object(c["N"])("cart-header"),l=Object(c["N"])("cart-body"),s=Object(c["N"])("signup-from"),b=Object(c["N"])("order-detail");return Object(c["E"])(),Object(c["i"])(c["b"],null,[Object(c["n"])("div",Ze,[Object(c["n"])(i,{class:"mt-5",active:e.active},null,8,["active"]),0===e.active||2===e.active?(Object(c["E"])(),Object(c["i"])(u,{key:0})):Object(c["j"])("",!0)]),Object(c["n"])("div",We,[0===e.active?(Object(c["E"])(),Object(c["i"])(l,{key:0,ref:"cartRef",onNext:e.next,active:e.active},null,8,["onNext","active"])):Object(c["j"])("",!0)]),1===e.active?(Object(c["E"])(),Object(c["i"])(s,{key:0,ref:"order",user:e.user},null,8,["user"])):Object(c["j"])("",!0),2===e.active?(Object(c["E"])(),Object(c["i"])(b,{key:1})):Object(c["j"])("",!0),Object(c["n"])("div",Ye,[0!==e.active&&e.active<3?(Object(c["E"])(),Object(c["i"])("button",{key:0,onClick:t[1]||(t[1]=function(){return e.pre&&e.pre.apply(e,arguments)})},"上一步")):Object(c["j"])("",!0),1===e.active?(Object(c["E"])(),Object(c["i"])("button",{key:1,onClick:t[2]||(t[2]=function(){return e.checkOrder&&e.checkOrder.apply(e,arguments)})},"確認個人資料")):Object(c["j"])("",!0),2===e.active?(Object(c["E"])(),Object(c["i"])("button",{key:2,onClick:t[3]||(t[3]=function(){return e.sendOrder&&e.sendOrder.apply(e,arguments)})},"送出訂單")):Object(c["j"])("",!0)])],64)}var Ke={class:"container"},Qe={class:"from-container"},Xe={class:"form-group"},et=Object(c["n"])("label",{for:"name"},"姓名",-1),tt={class:"form-group"},nt=Object(c["n"])("label",{for:"email"},"email",-1),ct={key:0,class:"form-group"},at=Object(c["n"])("label",{for:"password"},"password",-1),rt={key:1,class:"form-group"},ot=Object(c["n"])("label",{for:"passwordAgain"},"再次輸入密碼",-1),it={class:"form-group"},ut=Object(c["n"])("label",{for:"address"},"地址",-1),lt={class:"form-group"},st=Object(c["n"])("label",{for:"phone"},"手機",-1),bt={key:2,type:"submit",class:"btn btn-primary"};function dt(e,t,n,a,r,o){var i=Object(c["N"])("Field"),u=Object(c["N"])("Form");return Object(c["E"])(),Object(c["i"])(c["b"],null,[Object(c["n"])("div",Ke,[Object(c["n"])("div",Qe,[Object(c["n"])(u,{onSubmit:e.onSubmit},{default:Object(c["db"])((function(n){var a=n.errors;return[Object(c["n"])("div",Xe,[et,Object(c["n"])(i,{type:"text",name:"name",rules:e.isRequires,modelValue:e.name,"onUpdate:modelValue":t[1]||(t[1]=function(t){return e.name=t}),class:"form-control"},null,8,["rules","modelValue"]),Object(c["n"])("span",null,Object(c["R"])(a.name),1)]),Object(c["n"])("div",tt,[nt,Object(c["n"])(i,{type:"email",name:"email",rules:e.isEmailRules,modelValue:e.email,"onUpdate:modelValue":t[2]||(t[2]=function(t){return e.email=t}),class:"form-control"},null,8,["rules","modelValue"]),Object(c["n"])("span",null,Object(c["R"])(a.email),1)]),e.user?Object(c["j"])("",!0):(Object(c["E"])(),Object(c["i"])("div",ct,[at,Object(c["n"])(i,{type:"password",name:"password",autocomplete:"on",rules:e.isPasswordLength,modelValue:e.password,"onUpdate:modelValue":t[3]||(t[3]=function(t){return e.password=t}),class:"form-control"},null,8,["rules","modelValue"]),Object(c["n"])("span",null,Object(c["R"])(a.password),1)])),e.user?Object(c["j"])("",!0):(Object(c["E"])(),Object(c["i"])("div",rt,[ot,Object(c["n"])(i,{type:"password",autocomplete:"on",name:"passwordAgain",rules:e.isPasswordAgain,modelValue:e.passwordAgain,"onUpdate:modelValue":t[4]||(t[4]=function(t){return e.passwordAgain=t}),class:"form-control"},null,8,["rules","modelValue"]),Object(c["n"])("span",null,Object(c["R"])(a.passwordAgain),1)])),Object(c["n"])("div",it,[ut,Object(c["n"])(i,{type:"text",name:"address",rules:e.isRequires,modelValue:e.address,"onUpdate:modelValue":t[5]||(t[5]=function(t){return e.address=t}),class:"form-control"},null,8,["rules","modelValue"]),Object(c["n"])("span",null,Object(c["R"])(a.address),1)]),Object(c["n"])("div",lt,[st,Object(c["n"])(i,{type:"tel",name:"phone",rules:e.isPhone,modelValue:e.phone,"onUpdate:modelValue":t[6]||(t[6]=function(t){return e.phone=t}),class:"form-control"},null,8,["rules","modelValue"]),Object(c["n"])("span",null,Object(c["R"])(a.phone),1)]),e.user?Object(c["j"])("",!0):(Object(c["E"])(),Object(c["i"])("button",bt,"送出"))]})),_:1},8,["onSubmit"])])]),e.user?Object(c["M"])(e.$slots,"default",{key:0}):Object(c["j"])("",!0)],64)}var jt=/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,Ot=/^09[0-9]{8}$/,pt=Object(c["o"])({props:["user"],components:{Field:x["a"],Form:x["b"]},setup:function(e){var t=Object(c["p"])(),n=t.proxy,a=Object(x["c"])(),r=a.handleSubmit,o=Object(g["d"])(),i=Object(c["J"])(),u=Object(c["J"])(e.user?e.user.email:""),l=Object(c["J"])(e.user?e.user.name:""),s=Object(c["J"])(e.user?"0"+e.user.phone:""),b=Object(c["J"])(),d=Object(c["J"])(e.user?e.user.address:""),j=Object(c["J"])(),O=r((function(){var e={name:l.value,email:u.value,password:b.value,phone:s.value,address:d.value};Z.a.post("/user",e).then((function(){n.$message({message:"註冊成功",type:"success",showClose:!0,duration:1e3}),setTimeout((function(){o.push("/")}),1e3)}))})),p=function(e){return!!jt.test(e)||"請輸入正確的email"},f=function(e){return!!Ot.test(e)||"請輸入正確的手機號碼"},m=function(e){return!(!e||e.length<6)||"密碼至少要六個字!"},v=function(e){return e===b.value||"請重複同樣的密碼"},h=function(e){return!!e||"這是必填選項!"};return{isEmailRules:p,isPasswordLength:m,isRequires:h,email:u,password:b,address:d,passwordAgain:j,isPasswordAgain:v,phone:s,isPhone:f,onSubmit:O,name:l,num:i}}});pt.render=dt;var ft=pt,mt={class:"row item-header"},vt=Object(c["l"])('<div class="header-item">商品名稱</div><div class="size">尺寸</div><div class="price">單價</div><div class="amount">數量</div><div class="operate"></div>',5);function gt(e,t){return Object(c["E"])(),Object(c["i"])("div",mt,[vt])}const ht={};ht.render=gt;var yt=ht,wt={class:"container"};function Ct(e,t,n,a,r,o){var i=Object(c["N"])("cart-body");return Object(c["E"])(),Object(c["i"])("div",wt,[Object(c["n"])(i,{order:!0})])}var kt=Object(c["hb"])("data-v-23cb131c");Object(c["H"])("data-v-23cb131c");var Et={key:0,class:"container"},Pt={class:"product-detail"},St={class:"size"},Lt={class:"price"},Nt={class:"amount"},Jt={class:"count-number"},_t=Object(c["n"])("i",{class:"el-icon-close"},null,-1),xt={key:1,class:"container total"};Object(c["F"])();var Rt=kt((function(e,t,n,a,r,o){return Object(c["E"])(),Object(c["i"])(c["b"],null,[0===e.myCart.length&&0===e.active?(Object(c["E"])(),Object(c["i"])("div",Et,"沒有商品喔")):Object(c["j"])("",!0),(Object(c["E"])(!0),Object(c["i"])(c["b"],null,Object(c["L"])(e.myCart,(function(t,n){return Object(c["E"])(),Object(c["i"])("div",{class:"row item-body",key:t.id},[Object(c["n"])("div",Pt,[Object(c["n"])("img",{src:t.image},null,8,["src"]),Object(c["m"])(" "+Object(c["R"])(t.item),1)]),Object(c["n"])("div",St,Object(c["R"])(t.size),1),Object(c["n"])("div",Lt,Object(c["R"])(t.price),1),Object(c["n"])("div",Nt,[Object(c["n"])("div",{class:["countinput",0===e.active?"borders":""]},[e.order?Object(c["j"])("",!0):(Object(c["E"])(),Object(c["i"])("div",{key:0,class:"min",onClick:function(c){return e.handleAmount(t,n,-1)}},"-",8,["onClick"])),Object(c["n"])("span",Jt,Object(c["R"])(t.amount),1),e.order?Object(c["j"])("",!0):(Object(c["E"])(),Object(c["i"])("div",{key:1,class:"plus",onClick:function(c){return e.handleAmount(t,n,1)}},"+",8,["onClick"]))],2)]),e.order?Object(c["j"])("",!0):(Object(c["E"])(),Object(c["i"])("div",{key:0,class:"operate",onClick:function(t){return e.delProduct(n)}},[_t],8,["onClick"]))])})),128)),e.myCart.length>0?(Object(c["E"])(),Object(c["i"])("div",xt,[1!==e.active?(Object(c["E"])(),Object(c["i"])("div",{key:0,class:[{"counts-step":e.order},"counts"]},"總計$"+Object(c["R"])(e.total),3)):Object(c["j"])("",!0),0===e.active?(Object(c["E"])(),Object(c["i"])("button",{key:1,onClick:t[1]||(t[1]=function(){return e.handleNext&&e.handleNext.apply(e,arguments)})},"結帳去")):Object(c["j"])("",!0)])):Object(c["j"])("",!0)],64)})),At=(n("a434"),Object(c["o"])({emits:["next"],props:["active","order"],setup:function(e,t){var n=Object(c["p"])(),a=n.proxy,r=Object(c["g"])((function(){return o.state.ProductCart})),o=Object(v["b"])(),i=JSON.parse(localStorage.getItem("cart")),u=function(e,t,n){e.amount+=n,i[t].amount=e.amount,e.amount<1&&(i.splice(t,1),o.commit("DelCart",i)),localStorage.setItem("cart",JSON.stringify(i)),o.commit("handleBuyCartAmount",n)},l=function(){var e=o.state.user;!0===e.isLogin?t.emit("next"):a.$message({message:"請先登入在結帳喔",type:"error",showClose:!0,duration:1e3})},s=Object(c["g"])((function(){return o.getters.getTotal})),b=function(e){r.value.splice(e,1),localStorage.setItem("cart",JSON.stringify(r.value)),o.state.buyCartAmount=r.value.length};return{handleAmount:u,delProduct:b,myCart:r,total:s,handleNext:l}}}));n("1ddf"),n("ebe2");At.render=Rt,At.__scopeId="data-v-23cb131c";var Vt=At,It=Object(c["o"])({components:{CartBody:Vt}});It.render=Ct;var Tt=It;function Ut(e,t,n,a,r,o){var i=Object(c["N"])("el-step"),u=Object(c["N"])("el-steps");return Object(c["E"])(),Object(c["i"])(u,{active:n.active,"finish-status":"success"},{default:Object(c["db"])((function(){return[Object(c["n"])(i,{title:"購物車"}),Object(c["n"])(i,{title:"個人資訊"}),Object(c["n"])(i,{title:"完成"})]})),_:1},8,["active"])}var zt={props:["active"]};zt.render=Ut;var Dt=zt,Mt=Object(c["o"])({components:{CartHeader:yt,OrderDetail:Tt,PaymentStep:Dt,CartBody:Vt,SignupFrom:ft},setup:function(){var e=Object(c["p"])(),t=e.proxy,n=Object(g["d"])(),a=Object(c["J"])(),r=Object(v["b"])(),o=Object(c["J"])(null),i=Object(c["J"])(0),u=Object(c["I"])({}),l=Object(c["g"])((function(){return r.state.user})),s=Object(c["g"])((function(){return r.state.ProductCart})),b=function(){i.value++,console.log(i.value)},d=function(){var e=[JSON.stringify({cart:s.value,total:r.getters.getTotal}),{orderPayload:u}];console.log(r.getters.getTotal),Z.a.post("order",e).then((function(e){t.$message({message:e.data.msg,type:"success",showClose:!0,duration:1e3}),localStorage.removeItem("cart"),r.commit("DelCart",[]),r.state.buyCartAmount="",n.push("/")})),console.log([{cart:s.value,total:r.getters.getTotal},{orderPayload:u}])},j=function(){console.log(o),i.value++,u.email=a.value.email,u.name=a.value.name,u.address=a.value.address,u.phone="0"+a.value.phone,u.uid=l.value.uid,console.log(u)},O=function(){i.value--,i.value<0&&(i.value=0)};return r.commit("getProductCart"),{active:i,next:b,pre:O,order:a,checkOrder:j,user:l,sendOrder:d,cartRef:o}}});Mt.render=Ge;var Bt=Mt,Ht={class:"mt-5"};function $t(e,t,n,a,r,o){var i=Object(c["N"])("signup-from");return Object(c["E"])(),Object(c["i"])("div",Ht,[Object(c["n"])(i)])}var Ft=Object(c["o"])({components:{signupFrom:ft}});Ft.render=$t;var qt=Ft,Zt={class:"container"},Wt={class:"row order col-12"},Yt=Object(c["m"])("詳細資料");function Gt(e,t,n,a,r,o){var i=Object(c["N"])("el-table-column"),u=Object(c["N"])("el-button"),l=Object(c["N"])("el-table"),s=Object(c["N"])("diago-detail");return Object(c["E"])(),Object(c["i"])(c["b"],null,[Object(c["n"])("div",Zt,[Object(c["n"])("div",Wt,[Object(c["n"])(l,{border:!0,class:"col-12",data:e.order,style:{width:"100%"},"highlight-current-row":!0},{default:Object(c["db"])((function(){return[Object(c["n"])(i,{prop:"createtime",label:"日期",width:"180"}),Object(c["n"])(i,{prop:"name",label:"姓名",width:"180"}),Object(c["n"])(i,{prop:"address",label:"地址"}),Object(c["n"])(i,{prop:"product.total",label:"總計"}),Object(c["n"])(i,{prop:"id",label:"訂單編號"}),Object(c["n"])(i,{label:"操作"},{default:Object(c["db"])((function(t){return[Object(c["n"])(u,{size:"mini",onClick:function(n){return e.handleId(t.$index,t.row)}},{default:Object(c["db"])((function(){return[Yt]})),_:2},1032,["onClick"])]})),_:1})]})),_:1},8,["data"])])]),Object(c["n"])(s,{title:"訂單資訊",ref:"dialog"},{default:Object(c["db"])((function(){return[Object(c["n"])(l,{"empty-text":"你沒有訂單喔 開始採購吧",border:!0,class:"col-12",data:e.orderDetail,"max-height":"500",style:{width:"100%"}},{default:Object(c["db"])((function(){return[Object(c["n"])(i,{label:"商品圖片",width:"180"},{default:Object(c["db"])((function(e){return[Object(c["n"])("img",{src:e.row.image,style:{width:"100%",height:"100%"}},null,8,["src"])]})),_:1}),Object(c["n"])(i,{prop:"price",label:"價格"}),Object(c["n"])(i,{prop:"amount",label:"數量"}),Object(c["n"])(i,{prop:"size",label:"尺寸"})]})),_:1},8,["data"])]})),_:1},512)],64)}var Kt=Object(c["o"])({components:{diagoDetail:k},setup:function(){var e=Object(c["J"])(null),t=Object(g["c"])(),n=Object(c["J"])([]),a=t.params.id,r=Object(c["J"])(),o=Object(c["J"])(),i=function(t,n){e.value.open(),o.value=r.value[t].product.cart};return Z.a.get("/order/".concat(a)).then((function(e){r.value=e.data})),{order:r,handleId:i,dialog:e,detail:n,orderDetail:o}}});Kt.render=Gt;var Qt=Kt,Xt=(n("c740"),n("96cf"),n("1da1")),en=function(){var e=Object(Xt["a"])(regeneratorRuntime.mark((function e(t){var n,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Z.a.get(t);case 2:return n=e.sent,c=n.data,e.abrupt("return",c);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),tn=function(){var e=Object(Xt["a"])(regeneratorRuntime.mark((function e(t,n){var c,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Z.a.post(t,n);case 2:return c=e.sent,a=c.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),nn=Object(v["a"])({state:{ProductList:[],DetailList:[],dialogTableVisible:!1,ProductCart:localStorage.getItem("cart")||[],categoryProduct:[],user:{isLogin:!1},error:{status:!1},token:localStorage.getItem("token")||"",buyCartAmount:0},mutations:{setError:function(e,t){e.error=t},getSearch:function(e,t){e.ProductList=t},getProductList:function(e,t){e.ProductList=t},getUserLogin:function(e,t){var n=t.token;e.token=t.token,localStorage.setItem("token",n),Z.a.defaults.headers.common.authorization=n},DelCart:function(e,t){e.ProductCart=t},getDetailList:function(e,t){e.DetailList=t[0]},handleBuyCartAmount:function(e,t){e.buyCartAmount+=t,0===t&&(e.buyCartAmount="")},getProductCart:function(e){for(var t=JSON.parse(localStorage.getItem("cart"))||[],n=[],c=function(e){var c=n.findIndex((function(n){return n.id===t[e].id&&n.size===t[e].size}));if(-1!==c)n[c].amount+=t[e].amount;else{var a=Object($e["a"])({},t[e]);n=[].concat(Object(He["a"])(n),[a])}},a=0;a<t.length;a++)c(a);e.ProductCart=n,localStorage.setItem("cart",JSON.stringify(e.ProductCart));var r=0;e.ProductCart.forEach((function(t){r+=t.amount,e.buyCartAmount=r}))},fetchCurrentUser:function(e,t){e.user=Object($e["a"])({isLogin:!0},t)},logout:function(e){e.user={isLogin:!1},e.token="",localStorage.removeItem("token"),delete Z.a.defaults.headers.common.authorization}},getters:{getTotal:function(e){var t=0;return e.ProductCart.forEach((function(e){t+=e.price*e.amount})),t}},actions:{getProductList:function(e,t){var n=e.commit,c=t.page,a=t.category;en("/product/".concat(a,"/?page=").concat(c)).then((function(e){n("getProductList",e)}))},getDetailList:function(e,t){var n=e.commit;en("/detail/".concat(t)).then((function(e){n("getDetailList",e)}))},fetchCurrentUser:function(e){var t=e.commit;en("/current").then((function(e){t("fetchCurrentUser",e)}))},getUserLogin:function(e,t){var n=e.commit,c=e.dispatch;return tn("/login",t).then((function(e){return n("getUserLogin",e),c("fetchCurrentUser")}))}}}),cn=nn,an=[{path:"/",name:"Home",component:Pe},{path:"/detail/:id",name:"detail",component:qe},{path:"/MyOrder/:id",name:"MyOrder",component:Qt,meta:{requiredLogin:!0}},{path:"/signUp",name:"signUp",component:qt,meta:{redirectAlreadyLogin:!0}},{path:"/BuyCart",name:"BuyCart",component:Bt},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],rn=Object(g["a"])({history:Object(g["b"])("/"),routes:an}),on=rn;rn.beforeEach((function(e,t,n){var c=cn.state.user,a=cn.state.token,r=e.meta,o=r.redirectAlreadyLogin,i=r.requiredLogin;!1===c.isLogin?a?(Z.a.defaults.headers.common.authorization=a,cn.dispatch("fetchCurrentUser").then((function(){o?n("/"):n()})).catch((function(e){cn.state.error.status=!0,cn.commit("logout"),n()}))):i?n("/"):n():o?n("/"):n()})),Z.a.defaults.baseURL="http://localhost:3000/",Z.a.interceptors.request.use((function(e){return cn.commit("setError",{status:!1,message:""}),e})),Z.a.interceptors.response.use((function(e){return e}),(function(e){var t=e.response.data.error;return cn.commit("setError",{status:!0,message:t}),Promise.reject(t)})),Object(c["h"])($).use(cn).use(F["a"]).use(on).mount("#app")},"61be":function(e,t,n){"use strict";n("8ba4")},"7f62":function(e,t,n){},8691:function(e,t,n){},"8ba4":function(e,t,n){},a741:function(e,t,n){},b2e1:function(e,t,n){},db8b:function(e,t,n){"use strict";n("7f62")},ebe2:function(e,t,n){"use strict";n("8691")},f334:function(e,t,n){},f9c6:function(e,t,n){"use strict";n("b2e1")},fa0e:function(e,t,n){"use strict";n("42de")},fac8:function(e,t,n){}});
//# sourceMappingURL=app.3cc84867.js.map