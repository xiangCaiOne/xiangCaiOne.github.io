import{C as z,m as a,j as E,h as T,f as N,o as l,c as I,a as u,l as g,n as t,k as p,w as m,b as y,L as C,s as h,R as b,K as M}from"./entry.5c52f939.js";import{b as P,y as v,E as _,_ as V,w as $}from"./el-row.16ccd3d8.js";import{q as K}from"./dataApi.be8e6134.js";import{u as j}from"./use-form-common-props.2e498fd2.js";const O=({from:o,replacement:c,scope:f,version:d,ref:e,type:r="API"},n)=>{z(()=>a(n),i=>{},{immediate:!0})},q=P({type:{type:String,values:["success","info","warning","danger",""],default:""},closable:Boolean,disableTransitions:Boolean,hit:Boolean,color:{type:String,default:""},size:{type:String,values:K,default:""},effect:{type:String,values:["dark","light","plain"],default:"light"},round:Boolean}),A={close:o=>o instanceof MouseEvent,click:o=>o instanceof MouseEvent},D=E({name:"ElTag"}),F=E({...D,props:q,emits:A,setup(o,{emit:c}){const f=o,d=j(),e=T("tag"),r=N(()=>{const{type:s,hit:k,effect:S,closable:w,round:B}=f;return[e.b(),e.is("closable",w),e.m(s),e.m(d.value),e.m(S),e.is("hit",k),e.is("round",B)]}),n=s=>{c("close",s)},i=s=>{c("click",s)};return(s,k)=>s.disableTransitions?(l(),I("span",{key:0,class:t(a(r)),style:b({backgroundColor:s.color}),onClick:i},[u("span",{class:t(a(e).e("content"))},[g(s.$slots,"default")],2),s.closable?(l(),p(a(_),{key:0,class:t(a(e).e("close")),onClick:C(n,["stop"])},{default:m(()=>[y(a(v))]),_:1},8,["class","onClick"])):h("v-if",!0)],6)):(l(),p(M,{key:1,name:`${a(e).namespace.value}-zoom-in-center`,appear:""},{default:m(()=>[u("span",{class:t(a(r)),style:b({backgroundColor:s.color}),onClick:i},[u("span",{class:t(a(e).e("content"))},[g(s.$slots,"default")],2),s.closable?(l(),p(a(_),{key:0,class:t(a(e).e("close")),onClick:C(n,["stop"])},{default:m(()=>[y(a(v))]),_:1},8,["class","onClick"])):h("v-if",!0)],6)]),_:3},8,["name"]))}});var L=V(F,[["__file","/home/runner/work/element-plus/element-plus/packages/components/tag/src/tag.vue"]]);const Q=$(L);export{Q as E,q as t,O as u};