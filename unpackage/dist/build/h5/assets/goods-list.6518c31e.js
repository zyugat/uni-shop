import{o as e,c as s,w as t,a,h as i,t as o,f as l,j as d,i as r,e as c,d as n,b as p,r as u,F as m}from"./index.cfe26b5f.js";import{_ as f}from"./plugin-vue_export-helper.21dcd24c.js";import{r as _}from"./uni-app.es.e3ab09e6.js";var h=f({data:()=>({a:[1,2,3]}),props:["item"],methods:{show(){console.log("123",this.item.image)}}},[["render",function(c,n,p,u,m,f){const _=l,h=d,g=r;return e(),s(g,{class:"goods_item"},{default:t((()=>[a(_,{src:p.item.image},null,8,["src"]),a(g,{class:"price"},{default:t((()=>[a(h,null,{default:t((()=>[i(o(p.item.price),1)])),_:1})])),_:1}),a(g,{class:"name",onClick:f.show},{default:t((()=>[i(o(p.item.title),1)])),_:1},8,["onClick"])])),_:1})}],["__scopeId","data-v-e80db19e"]]);var g=f({data:()=>({}),props:{detailList:{type:Object,default:{},require:!0},showTitile:{type:Boolean,default:!0,require:!1}},components:{googs:h},onLoad(){},methods:{skipDetail(e){this.$emit("skip-detail",e)}}},[["render",function(o,l,d,f,g,k){const b=r,j=_(c("goods"),h);return e(),s(b,{class:"hot_goods"},{default:t((()=>[d.showTitile?(e(),s(b,{key:0,class:"tit"},{default:t((()=>[i("推荐商品")])),_:1})):n("",!0),a(b,{class:"goods_list"},{default:t((()=>[(e(!0),p(m,null,u(d.detailList,(t=>(e(),s(j,{item:t,key:t.id,onClick:e=>k.skipDetail(t.id)},null,8,["item","onClick"])))),128))])),_:1})])),_:1})}],["__scopeId","data-v-b39641c0"]]);export{g as _};
