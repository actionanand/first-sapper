import{S as t,i as s,s as e,e as l,t as o,b as r,f as n,g as a,d as h,h as c,k as f,l as i,m as u,a as p,q as g,c as d,n as m,o as v}from"./client.e59196e7.js";function E(t,s,e){const l=t.slice();return l[1]=s[e],l}function b(t){let s,e,p,g,d=t[1].title+"";return{c(){s=l("li"),e=l("a"),p=o(d),this.h()},l(t){s=r(t,"LI",{});var l=n(s);e=r(l,"A",{rel:!0,href:!0});var o=n(e);p=a(o,d),o.forEach(h),l.forEach(h),this.h()},h(){c(e,"rel","prefetch"),c(e,"href",g="blog/"+t[1].slug)},m(t,l){f(t,s,l),i(s,e),i(e,p)},p(t,s){1&s&&d!==(d=t[1].title+"")&&u(p,d),1&s&&g!==(g="blog/"+t[1].slug)&&c(e,"href",g)},d(t){t&&h(s)}}}function j(t){let s,e,u,j,x,q=t[0],L=[];for(let s=0;s<q.length;s+=1)L[s]=b(E(t,q,s));return{c(){s=p(),e=l("h1"),u=o("Recent posts"),j=p(),x=l("ul");for(let t=0;t<L.length;t+=1)L[t].c();this.h()},l(t){g('[data-svelte="svelte-hfp9t8"]',document.head).forEach(h),s=d(t),e=r(t,"H1",{});var l=n(e);u=a(l,"Recent posts"),l.forEach(h),j=d(t),x=r(t,"UL",{class:!0});var o=n(x);for(let t=0;t<L.length;t+=1)L[t].l(o);o.forEach(h),this.h()},h(){document.title="Blog",c(x,"class","svelte-1frg2tf")},m(t,l){f(t,s,l),f(t,e,l),i(e,u),f(t,j,l),f(t,x,l);for(let t=0;t<L.length;t+=1)L[t].m(x,null)},p(t,[s]){if(1&s){let e;for(q=t[0],e=0;e<q.length;e+=1){const l=E(t,q,e);L[e]?L[e].p(l,s):(L[e]=b(l),L[e].c(),L[e].m(x,null))}for(;e<L.length;e+=1)L[e].d(1);L.length=q.length}},i:m,o:m,d(t){t&&h(s),t&&h(e),t&&h(j),t&&h(x),v(L,t)}}}function x({params:t,query:s}){return this.fetch("blog.json").then(t=>t.json()).then(t=>({posts:t}))}function q(t,s,e){let{posts:l}=s;return t.$$set=(t=>{"posts"in t&&e(0,l=t.posts)}),[l]}export default class extends t{constructor(t){super(),s(this,t,q,j,e,{posts:0})}}export{x as preload};
