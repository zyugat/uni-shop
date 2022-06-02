import{s as t,e,o as a,c as s,w as c,m as i,v as r,a as l,h as d,t as o,i as n,p as u,f as m,q as h,n as p,b as f,r as _,F as C,d as k,u as g}from"./index.cfe26b5f.js";import{_ as y}from"./uni-icons.e166c0cb.js";import{r as I}from"./uni-app.es.e3ab09e6.js";/* empty css                                                              */import{_ as L}from"./plugin-vue_export-helper.21dcd24c.js";import{s as b,u as j,d as D}from"./cart.d9ceeb3a.js";import{c as q}from"./checkLogin.6fe48e50.js";import"./request.ada75ed3.js";var v=L({name:"cart-item",data:()=>({}),props:{item:{type:Object,default:{},require:!0},cartItemTOP:{type:Boolean,default:!0,require:!1},cartItemSUB:{type:Boolean,default:!0,require:!1},cartItemADD:{type:Boolean,default:!0,require:!1},cartItemDEL:{type:Boolean,default:!0,require:!1},cartItemCHECK:{type:Boolean,default:!0,require:!1}},emits:["updateCart","delCart","updateCheck"],methods:{updateCart(e){0===e?t({title:"数量必须要大于0！"}):this.$emit("updateCart",this.item.cid,e)},delCart(t){this.$emit("delCart",t)},updateCheck(){this.$emit("updateCheck",this.item.cid)}}},[["render",function(t,h,p,f,_,C){const k=n,g=I(e("uni-icons"),y),L=u,b=m;return a(),s(k,{class:"cart-item"},{default:c((()=>[i(l(k,{class:"cart-item-top"},{default:c((()=>[l(k,{class:"cart-item-top-number"},{default:c((()=>[d(" 编号："+o(p.item.cid),1)])),_:1}),l(k,{class:"cart-item-top-del"},{default:c((()=>[l(g,{type:"closeempty",size:"30",onClick:h[0]||(h[0]=t=>C.delCart(p.item.cid))})])),_:1})])),_:1},512),[[r,p.cartItemTOP]]),l(k,{class:"cart-item-content"},{default:c((()=>[i(l(k,{class:"cart-item-content-check"},{default:c((()=>[l(L,{checked:p.item.check,onClick:C.updateCheck},null,8,["checked","onClick"])])),_:1},512),[[r,p.cartItemCHECK]]),l(k,{class:"cart-item-content-image"},{default:c((()=>[l(b,{src:p.item.image},null,8,["src"])])),_:1}),l(k,{class:"cart-item-content-right"},{default:c((()=>[l(k,{class:"cart-item-content-right-title"},{default:c((()=>[d(o(p.item.title),1)])),_:1}),l(k,{class:"cart-item-content-right-bottom"},{default:c((()=>[l(k,{class:"cart-item-content-right-bottom-price"},{default:c((()=>[d("￥"+o(p.item.price),1)])),_:1}),l(k,{class:"cart-item-content-right-bottom-count"},{default:c((()=>[i(l(k,{class:"item"},{default:c((()=>[l(g,{type:"minus",size:"30",onClick:h[1]||(h[1]=t=>C.updateCart(p.item.count-1))})])),_:1},512),[[r,p.cartItemSUB]]),l(k,{class:"count item"},{default:c((()=>[d(o(p.item.count),1)])),_:1}),i(l(k,{class:"item"},{default:c((()=>[l(g,{type:"plus",size:"30",onClick:h[2]||(h[2]=t=>C.updateCart(p.item.count+1))})])),_:1},512),[[r,p.cartItemADD]])])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})}],["__scopeId","data-v-551ea43a"]]);var O=L({data:()=>({checkAll:[],cartList:[],status:!1,msg:"购物车还没有商品！！",total:0}),onShow(){this.DateInit()},methods:{DateInit(){q().then((t=>{if(!0===t.status){this.cartList=[],this.checkAll=[],this.status=!1,this.msg="购物车还没有商品！！",this.total=0,this.status=!0;let t=h("token");b(t).then((t=>{!0===t.status&&t.data.length>0&&(this.cartList=t.data.map((t=>(t.check=!1,t))))}))}}))},_updateCart(t,e){q().then((a=>{if(!0===a.status){let a=h("token");j(a,t,e).then((a=>{!0===a.status&&this.cartList.map((a=>(a.cid===t&&(a.count=e),a)))}))}}))},_delCart(t){q().then((e=>{if(!0===e.status){let e=h("token");D(e,t).then((e=>{!0===e.status&&(this.cartList=this.cartList.filter((e=>e.cid!==t)))}))}}))},_updateCheck(t){this.total=0,this.checkAll=[],this.cartList=this.cartList.map((e=>(e.cid===t&&(e.check=!e.check),e))),this.cartList.forEach((t=>{!0===t.check&&(this.total=(100*this.total+100*t.price)/100,this.checkAll.push(t.cid))}))},_addOrder(){let t="/pages/addOrder/addOrder?cid="+this.checkAll;t.indexOf("%")>-1&&(t=t.replace(/%/g,"%25")),p({url:t})}},components:["cart-item"]},[["render",function(t,u,m,h,p,y){const L=I(e("cart-item"),v),b=n,j=g;return a(),s(b,{class:"cart"},{default:c((()=>[(a(!0),f(C,null,_(p.cartList,(t=>(a(),s(b,{class:"cart-content"},{default:c((()=>[l(L,{class:"cart-content-item",item:t,onUpdateCart:y._updateCart,onUpdateCheck:y._updateCheck,onDelCart:y._delCart},null,8,["item","onUpdateCart","onUpdateCheck","onDelCart"])])),_:2},1024)))),256)),p.status?k("",!0):(a(),s(b,{key:0,class:"cart-msg"},{default:c((()=>[d(o(p.msg),1)])),_:1})),i(l(b,{class:"cart-total"},{default:c((()=>[l(b,null,{default:c((()=>[d("￥"+o(this.total),1)])),_:1}),l(j,{onClick:y._addOrder},{default:c((()=>[d("立即下单")])),_:1},8,["onClick"])])),_:1},512),[[r,0!==this.total]])])),_:1})}],["__scopeId","data-v-dc77b32e"]]);export{O as default};
