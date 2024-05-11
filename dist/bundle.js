(()=>{"use strict";var t={100:(t,e,n)=>{n.d(e,{A:()=>s});var o=n(601),i=n.n(o),r=n(314),a=n.n(r)()(i());a.push([t.id,"*{margin:0;padding:0;box-sizing:border-box}body{font-family:Arial,Helvetica,sans-serif;min-height:100vh;background:#a6a6a6}a{text-decoration:none}ul,ol{list-style:none}.container{padding-top:50px;margin:auto;width:404px;height:404px}.container .container-box{width:100%;position:relative;display:flex;flex-wrap:wrap;border:2px solid #838383}.container .box{width:100px;height:100px;border:2px solid #838383;background:#d3d3d3}.container .content-box{position:absolute;width:100px;height:100px;border:2px solid #af5801;background:#fbe760;text-align:center;line-height:96px;font-size:calc(100px/4);color:#454545;font-weight:700;transition:all .2s ease-in-out}",""]);const s=a},314:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",o=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),o&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),o&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,o,i,r){"string"==typeof t&&(t=[[null,t,void 0]]);var a={};if(o)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(a[c]=!0)}for(var u=0;u<t.length;u++){var l=[].concat(t[u]);o&&a[l[0]]||(void 0!==r&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=r),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),i&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=i):l[4]="".concat(i)),e.push(l))}},e}},601:t=>{t.exports=function(t){return t[1]}},72:t=>{var e=[];function n(t){for(var n=-1,o=0;o<e.length;o++)if(e[o].identifier===t){n=o;break}return n}function o(t,o){for(var r={},a=[],s=0;s<t.length;s++){var c=t[s],u=o.base?c[0]+o.base:c[0],l=r[u]||0,d="".concat(u," ").concat(l);r[u]=l+1;var h=n(d),p={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==h)e[h].references++,e[h].updater(p);else{var f=i(p,o);o.byIndex=s,e.splice(s,0,{identifier:d,updater:f,references:1})}a.push(d)}return a}function i(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,i){var r=o(t=t||[],i=i||{});return function(t){t=t||[];for(var a=0;a<r.length;a++){var s=n(r[a]);e[s].references--}for(var c=o(t,i),u=0;u<r.length;u++){var l=n(r[u]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}r=c}}},659:t=>{var e={};t.exports=function(t,n){var o=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},540:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},56:(t,e,n)=>{t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},825:t=>{t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var i=void 0!==n.layer;i&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,i&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var r=n.sourceMap;r&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleTagTransform(o,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},113:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},e={};function n(o){var i=e[o];if(void 0!==i)return i.exports;var r=e[o]={id:o,exports:{}};return t[o](r,r.exports,n),r.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.nc=void 0,(()=>{var t=n(72),e=n.n(t),o=n(825),i=n.n(o),r=n(659),a=n.n(r),s=n(56),c=n.n(s),u=n(540),l=n.n(u),d=n(113),h=n.n(d),p=n(100),f={};f.styleTagTransform=h(),f.setAttributes=c(),f.insert=a().bind(null,"head"),f.domAPI=i(),f.insertStyleElement=l(),e()(p.A,f),p.A&&p.A.locals&&p.A.locals;const x=Array.from({length:4},(()=>Array.from({length:4},(()=>0))));function m(t){const{id:e}=t,{x:n,y:o}=t.getBoxPosition();let i=null;x.forEach(((t,n)=>{t.forEach(((t,o)=>{t&&t.id===e&&(i={x:o,y:n})}))})),(i&&i.x!==n||i.y!==o)&&(x[o][n]=t,x[i.y][i.x]=0)}function v(){return x}function g(t=0,e=100){let n=e-t,o=Math.random();return o=Math.floor(o*n),o+=t,o}function y({matrix:t,startCondition:e,x:n,y:o,changeMethod:i,endCondition:r,box:a}){if(e(o))return;const s=t.map((t=>t[n]));let c=o,u=o;do{c=i(c);const t=s[c];t?t.getValue()===a.getValue()&&(u=c,a.mergeBoxValue(),t.kill()):u=c}while(r(c));a.setBoxPosition({x:n,y:u})}function b({matrix:t,startCondition:e,x:n,y:o,changeMethod:i,endCondition:r,box:a}){if(e(n))return;const s=t[o];let c=n,u=n;do{c=i(c);const t=s[c];t?t.getValue()===a.getValue()&&(u=c,a.mergeBoxValue(),t.kill()):u=c}while(r(c));a.setBoxPosition({x:u,y:o})}class w{constructor(){this.id=g(1,999999999999),this.value=Math.random()>.75?4:2,this.position=function(){const t=x.reduce(((t,e,n)=>(e.forEach(((e,o)=>{e||t.push({x:o,y:n})})),t)),[]);return t[g(0,t.length-1)]}(),this.box=function(){const t=document.createElement("div");return t.classList.add("content-box"),t}()}getBoxPosition(){return this.position}getValue(){return this.value}setBoxPosition(t){this.position=t}setBoxValue(){this.box.innerHTML=this.value.toString()}mergeBoxValue(){this.value=2*this.value,setTimeout((()=>{this.setBoxValue()}),200)}kill(){setTimeout((()=>{this.box.remove()}),200)}move(t){const e=v(),{x:n,y:o}=this.position;switch(t){case"left":b({matrix:e,x:n,y:o,box:this,startCondition:t=>!t,endCondition:t=>t>0,changeMethod:t=>t-1});break;case"right":b({matrix:e,x:n,y:o,box:this,startCondition:t=>3===t,endCondition:t=>t<3,changeMethod:t=>t+1});break;case"up":y({matrix:e,x:n,y:o,box:this,startCondition:t=>!t,endCondition:t=>t>0,changeMethod:t=>t-1});break;case"down":y({matrix:e,x:n,y:o,box:this,startCondition:t=>3===t,endCondition:t=>t<3,changeMethod:t=>t+1})}this.changeBoxPosition(),m(this)}changeBoxPosition(){this.box.style.left=25*this.position.x+"%",this.box.style.top=25*this.position.y+"%"}setBoxToScreen(){const t=document.getElementById("app");this.box.style.left=25*this.position.x+"%",this.box.style.top=25*this.position.y+"%",this.box.innerHTML=this.value.toString(),function(t){const{x:e,y:n}=t.getBoxPosition();x[n][e]=t}(this),t.appendChild(this.box)}}function C(){const t=new w;return t.setBoxToScreen(),t}const M={37:"left",38:"up",39:"right",40:"down"};document.addEventListener("keydown",(t=>{!function(t){const e=v();switch(t){case"left":case"up":e.forEach((e=>{e.forEach((e=>{e&&e.move(t)}))}));break;case"right":e.forEach((e=>{for(let n=e.length-1;n>=0;n--){const o=e[n];o&&o.move(t)}}));break;case"down":for(let n=e.length-1;n>=0;n--)e[n].forEach((e=>{e&&e.move(t)}))}setTimeout((()=>{C()}),200)}(M[t.keyCode])})),C(),C()})()})();