import{l,r as d,e as x,o as m,c as p,b as t,g as h,u as v,i as g,t as n,a as f,F as b,y as $,z as B,A as k,f as I}from"./index-B3ltF1qr.js";const D={class:"inform"},F={alt:"",class:"inform__img"},w={class:"inform__intro"},S={class:"inform__intro-left"},z={class:"inform__intro-left-title"},A={class:"inform__intro-left-desc"},M={class:"inform__intro-left-text"},T={class:"inform__intro-left-genres"},Y={class:"inform__intro-left-time"},L={class:"inform__intro-right"},N={class:"inform__intro-right-item"},R={alt:"",class:"inform__intro-right-img"},V={class:"inform__intro-actors actors"},j=t("h2",{class:"inform__intro-actors-title"},"В главных ролях",-1),C={class:"inform__extra"},E={class:"inform__extra-cont"},G={class:"inform__extra-budget"},O=t("span",{class:"inform__extra-budget-title"},"Бюджет",-1),q={class:"inform__extra-budget-value"},H=t("div",{class:"inform__extra-budget"},[t("span",{class:"inform__extra-budget-title"},"Сборы"),t("span",{class:"inform__extra-budget-value"},"$185,000,000.00")],-1),J={class:"inform__extra-budget"},K=t("span",{class:"inform__extra-budget-title"},"Статус",-1),P={class:"inform__extra-budget-value"},Q={class:"inform__extra-budget"},U=t("span",{class:"inform__extra-budget-title"},"Исходное название",-1),W={class:"inform__extra-budget-value"},X={__name:"Info",props:{type:String,info:Object},setup(e){const s=e,i=l(()=>new Date(s.info.release_date).getFullYear()||new Date(s.info.last_air_date).getFullYear()),r=l(()=>s.info.genres.reduce((_,a)=>_+`, ${a.name}`,"")),c=l(()=>{let _=s.type=="movie"?s.info.runtime:s.type=="tv"&&s.info.episode_run_time[0]?s.info.episode_run_time[0]:0,a=Math.floor(_/60),o=_%60;return a==0?o>0?`${o}м`:"":o>0?`${a}ч ${o}м`:`${a}ч`});return console.log(s.info),(_,a)=>{const o=d("Trailer"),y=d("Actors"),u=x("lazy");return m(),p(b,null,[t("div",D,[h(t("img",F,null,512),[[u,v(g)+e.info.backdrop_path]]),t("div",w,[t("div",S,[t("h2",z,n(e.info.title||e.info.name),1),t("p",A,n(e.info.overview||"Нет описания"),1),t("div",M,[t("p",T,[t("span",null,n(i.value),1),t("span",null,n(r.value),1)]),t("span",Y,n(c.value),1)]),f(o)]),t("div",L,[t("div",N,[h(t("img",R,null,512),[[u,v(g)+e.info.poster_path]])])]),t("div",V,[j,f(y,{type:e.type,id:e.info.id,count:"6"},null,8,["type","id"])])])]),t("div",C,[t("div",E,[t("div",G,[O,t("span",q,n("$"+e.info.budget),1)]),H,t("div",J,[K,t("span",P,n(e.info.status=="Released"?"Выпущено":"Не выпущено"),1)]),t("div",Q,[U,t("span",W,n(e.info.original_title),1)])])])],64)}}},Z={key:0,class:"media"},et={__name:"Media",props:{type:String},setup(e){const s=$(),i=B(),r=e;i.getItemById({type:r.type,id:s.params.id});const c=l(()=>r.type=="movie"?i.movie:i.tv);return k(()=>{i.movie=i.tv=null}),(_,a)=>{const o=d("Loader");return c.value?(m(),p("div",Z,[f(X,{type:e.type,info:c.value},null,8,["type","info"])])):(m(),I(o,{key:1}))}}};export{et as _};
