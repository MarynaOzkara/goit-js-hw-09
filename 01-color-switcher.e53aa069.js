const t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]"),r=document.querySelector("body");let a=null;t.addEventListener("click",(()=>{a=setInterval((()=>{let t=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`;r.style.backgroundColor=t}),1e3),t.setAttribute("disabled",!0)})),e.addEventListener("click",(()=>{clearInterval(a),t.removeAttribute("disabled")}));
//# sourceMappingURL=01-color-switcher.e53aa069.js.map
