!function(t){var e={};function n(i){if(e[i])return e[i].exports;var r=e[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(i,r,function(e){return t[e]}.bind(null,r));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/",n(n.s=0)}([function(t,e,n){n(1),t.exports=n(2)},function(t,e){document.getElementById("trigger").onclick=function(){document.getElementById("menu").classList.toggle("show"),document.getElementById("trigger").classList.toggle("active")},$("[data-youtube]").on("click",(function(){var t=$(this).data("youtube"),e=$(window).innerWidth()>768?120:30,n=$(window).innerWidth()>768?$(window).innerWidth()-e-200:$(window).innerWidth()-e,i='<iframe style="width: '+n+"px; height: "+n*(9/16)+'px;" src="'+t+'" frameborder="0" gesture="media" allowfullscreen></iframe>';$("body").append('<div class="outer">'+i+"</div>")})),$(document).mouseup((function(t){var e=$(".outer iframe");e.is(t.target)||0!==e.has(t.target).length||$(".outer").remove()})),$(document).on("keyup",(function(t){27===t.keyCode&&$(".outer").remove()}));!function(t,e){var n=document.querySelector(t),i=n.querySelector(".slider__wrapper"),r=n.querySelectorAll(".slider__item"),o=(n.querySelectorAll(".slider__control"),n.querySelector(".slider__control_left"),n.querySelector(".slider__control_right"),parseFloat(getComputedStyle(i).width)),c=parseFloat(getComputedStyle(r[0]).width),l=0,a=0,u=c/o*100,s=[],d=0,f=n.innerHTML,m=[{active:!1,minWidth:0,count:1},{active:!1,minWidth:980,count:2}],g={isCycling:!1,direction:"right",interval:5e3,pause:!0};for(var p in e)p in g&&(g[p]=e[p]);r.forEach((function(t,e){s.push({item:t,position:e,transform:0})}));var v=function(){var t=0,e=parseFloat(document.body.clientWidth);m.forEach((function(n,i,r){m[i].active=!1,e>=m[i].minWidth&&(t=i)})),m[t].active=!0},h={getItemMin:function(){var t=0;return s.forEach((function(e,n){e.position<s[t].position&&(t=n)})),t},getItemMax:function(){var t=0;return s.forEach((function(e,n){e.position>s[t].position&&(t=n)})),t},getMin:function(){return s[h.getItemMin()].position},getMax:function(){return s[h.getItemMax()].position}},y=function(t){var e,r,d,f,m,g;d=(r=n).getBoundingClientRect(),f=window.innerWidth||doc.documentElement.clientWidth,m=window.innerHeight||doc.documentElement.clientHeight,g=function(t,e){return document.elementFromPoint(t,e)},d.right<0||d.bottom<0||d.left>f||d.top>m||!(r.contains(g(d.left,d.top))||r.contains(g(d.right,d.top))||r.contains(g(d.right,d.bottom))||r.contains(g(d.left,d.bottom)))||("right"===t&&(++l+o/c-1>h.getMax()&&(e=h.getItemMin(),s[e].position=h.getMax()+1,s[e].transform+=100*s.length,s[e].item.style.transform="translateX("+s[e].transform+"%)"),a-=u),"left"===t&&(--l<h.getMin()&&(e=h.getItemMax(),s[e].position=h.getMin()-1,s[e].transform-=100*s.length,s[e].item.style.transform="translateX("+s[e].transform+"%)"),a+=u),i.style.transform="translateX("+a+"%)")},_=function(t){g.isCycling&&(d=setInterval((function(){y(t)}),g.interval))},b=function(t){if(t.target.classList.contains("slider__control")){t.preventDefault();var e=t.target.classList.contains("slider__control_right")?"right":"left";y(e),clearInterval(d),_(g.direction)}},w=function(){"hidden"===document.visibilityState?clearInterval(d):(clearInterval(d),_(g.direction))};n.addEventListener("click",b),g.pause&&g.isCycling&&(n.addEventListener("mouseenter",(function(){clearInterval(d)})),n.addEventListener("mouseleave",(function(){clearInterval(d),_(g.direction)}))),document.addEventListener("visibilitychange",w,!1),window.addEventListener("resize",(function(){var t=0,e=parseFloat(document.body.clientWidth);m.forEach((function(n,i,r){e>=m[i].minWidth&&(t=i)})),t!==function(){var t;return m.forEach((function(e,n,i){m[n].active&&(t=n)})),t}()&&(v(),clearInterval(d),n.innerHTML=f,i=n.querySelector(".slider__wrapper"),r=n.querySelectorAll(".slider__item"),n.querySelectorAll(".slider__control"),n.querySelector(".slider__control_left"),n.querySelector(".slider__control_right"),o=parseFloat(getComputedStyle(i).width),c=parseFloat(getComputedStyle(r[0]).width),l=0,a=0,u=c/o*100,s=[],r.forEach((function(t,e){s.push({item:t,position:e,transform:0})})))})),"visible"===document.visibilityState&&_(g.direction),v()}(".slider",{isCycling:!0})},function(t,e){}]);