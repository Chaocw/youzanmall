webpackJsonp([4],{"035s":function(t,a){},Hwmd:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=e("ehhp"),s=(e.n(n),e("NVmV")),r=e.n(s),i=e("035s"),c=(e.n(i),e("igmb")),o=(e.n(c),e("nq5D")),d=e("7+uW"),u=e("mtWM"),l=e.n(u),h=e("TFhR"),f=e("U/rD");d.default.component(r.a.name,r.a),new d.default({el:".app",data:{topList:null,curindex:-1,rankData:null,subData:null},created:function(){this.getTopList(),this.getSubList(0)},methods:{getTopList:function(){var t=this;l.a.post(h.a.topList).then(function(a){t.topList=a.data.lists})},getRank:function(){var t=this;l.a.post(h.a.rank).then(function(a){t.rankData=a.data.data})},getSubList:function(t,a){var e=this;this.curindex=t,0===t?this.getRank():l.a.post(h.a.subList,{id:a}).then(function(t){console.log(h.a.subList),e.subData=t.data.data})},toSearch:function(t){location.href="search.html?keyword="+t.name+"&id="+t.id}},components:{Foot:o.a},mixins:[f.a]})},TFhR:function(t,a,e){"use strict";var n={hotLists:["index/hotLists"],banner:["index/banner"],topList:["category/topList"],subList:["category/subList"],rank:["category/rank"],searchList:["search/list"],details:["goods/details"],deal:["goods/deal"],cartAdd:["cart/add"],cartLists:["cart/list"],cartReduce:["cart/reduce"],cartUpdate:["cart/update"],cartRemove:["cart/remove"],cartMrRemove:["cart/mrremove"],addressLists:["address/list"],addressAdd:["address/add"],addressRemove:["address/remove"],addressUpdate:["address/update"],addressSetDefault:["address/setDefault"]};for(var s in n)n.hasOwnProperty(s)&&(n[s]="http://rap2api.taobao.org/app/mock/7058/"+n[s][0]);a.a=n},"U/rD":function(t,a,e){"use strict";a.a={filters:{number:function(t){return(t+="").indexOf(".")>0?t+="00":t+=".00",t.slice(0,t.indexOf(".")+3)}}}},ehhp:function(t,a){},igmb:function(t,a){},nq5D:function(t,a,e){"use strict";var n=e("mw3O"),s=e.n(n).a.parse(location.search.substr(1)).index,r=[{href:"index.html",class:"icon-home",name:"有赞"},{href:"category.html",class:"icon-category",name:"分类"},{href:"cart.html",class:"icon-cart",name:"购物车"},{href:"member.html",class:"icon-user",name:"我"}],i={data:function(){return{renderData:r,curIndex:parseInt(s)||0}},methods:{changeName:function(t,a){location.href=t.href+"?index="+a}}},c={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"bottom-nav"},[e("ul",t._l(t.renderData,function(a,n){return e("li",{class:{active:t.curIndex==n},on:{click:function(e){t.changeName(a,n)}}},[e("a",[e("i",{class:a.class}),e("div",[t._v(t._s(a.name))])])])}))])},staticRenderFns:[]};var o=e("VU/8")(i,c,!1,function(t){e("pD7p")},null,null);a.a=o.exports},pD7p:function(t,a){}},["Hwmd"]);
//# sourceMappingURL=category.99c156a62adb29d49b23.js.map