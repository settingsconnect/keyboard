var _;(_=window).kb_conn=function(t){document.getElementById(t.ID_button).addEventListener("click",function(e){(e.preventDefault(),document.getElementById("keyboard"))?document.getElementById("keyboard").style.display="":(function e(){let n=!1,a=!1;var l=[14,14,13,14,3],i=[["'",!0],["1",!0],["2",!0],["3",!0],["4",!0],["5",!0],["6",!0],["7",!0],["8",!0],["9",!0],["0",!0],["-",!0],["=",!0],["",!0],["Tab",!0],["q",!0],["w",!0],["e",!0],["r",!0],["t",!0],["y",!0],["u",!0],["i",!0],["o",!0],["p",!0],["\xb4",!0],["[",!0],["]",!0],["Caps",!0],["a",!0],["s",!0],["d",!0],["f",!0],["g",!0],["h",!0],["j",!0],["k",!0],["l",!0],["\xe7",!0],["~",!0],["",!0],["",!0],["\\",!0],["z",!0],["x",!0],["c",!0],["v",!0],["b",!0],["n",!0],["m",!0],[",",!0],[".",!0],[";",!0],["/",!0],["",!0],["Ctrl + Alt",!0],[" ",!0],["Ctrl + Alt",!0]];let s={"~":{a:"\xe3",A:"\xc3",o:"\xf5",O:"\xd5",n:"\xf1",N:"\xd1"},"^":{a:"\xe2",A:"\xc2",e:"\xea",E:"\xca",i:"\xee",I:"\xce",o:"\xf4",O:"\xd4",u:"\xfb",U:"\xdb"},"`":{a:"\xe0",A:"\xc0",e:"\xe8",E:"\xc8",i:"\xec",I:"\xcc",o:"\xf2",O:"\xd2",u:"\xf9",U:"\xd9"},"\xb4":{a:"\xe1",A:"\xc1",e:"\xe9",E:"\xc9",i:"\xed",I:"\xcd",o:"\xf3",O:"\xd3",u:"\xfa",U:"\xda"},"\xa8":{a:"\xe4",A:"\xc4",e:"\xeb",E:"\xcb",i:"\xef",I:"\xcf",o:"\xf6",O:"\xd6",u:"\xfc",U:"\xdc"}};var $=1,o=0;let r={css:"._EVt3P8060s{position:fixed;z-index:9999;height:auto;user-select:none;font-family:arial,sans-serif;font-size:14px;display:flex}._FsD33af7G1,._hJV3WuF8e5{display:inline-block;position:relative;width:100%}._hJV3WuF8e5{height:100%;background-color:#fff;-webkit-box-shadow:0 4px 16px rgba(0,0,0,.2);-moz-box-shadow:0 4px 16px rgba(0,0,0,.2);box-shadow:0 4px 16px rgba(0,0,0,.2);border:1px solid rgba(0,0,0,.3);padding:10px;flex-direction:column}._FsD33af7G1{height:24px;cursor:move;padding:0 5px;color:#444}._eQE551lPBS{position:absolute;right:0;top:-10px;padding:10px 10px 10px;cursor:pointer}._eQE551lPBS svg{fill:#444}._eQE551lPBS:hover svg{fill:#000}.bt-kb{border:1px solid rgba(0,0,0,.1);width:29px;height:29px;text-align:center;vertical-align:middle;position:relative;padding:1px;min-width:0;max-width:500px;min-height:0;max-height:50px;color:#444;background-color:#f5f5f5;border-radius:2px;-webkit-border-radius:2px;-moz-border-radius:2px;background-image:-webkit-gradient(linear,left top,left bottom,from(#f5f5f5),to(#f1f1f1));background-image:-webkit-linear-gradient(to bottom,#f5f5f5,#f1f1f1);background-image:-moz-linear-gradient(to bottom,#f5f5f5,#f1f1f1);background-image:-ms-linear-gradient(to bottom,#f5f5f5,#f1f1f1);background-image:-o-linear-gradient(to bottom,#f5f5f5,#f1f1f1);background-image:linear-gradient(to bottom,#f5f5f5,#f1f1f1)}.bt-act,.bt-clk{border-color:#c6c6c6;color:#222}.bt-act{background-color:#f8f8f8;background-image:-webkit-gradient(linear,left top,left bottom,from(#f8f8f8),to(#f1f1f1));background-image:-webkit-linear-gradient(to bottom,#f8f8f8,#f1f1f1);background-image:-moz-linear-gradient(to bottom,#f8f8f8,#f1f1f1);background-image:-ms-linear-gradient(to bottom,#f8f8f8,#f1f1f1);background-image:-o-linear-gradient(to bottom,#f8f8f8,#f1f1f1);background-image:linear-gradient(to bottom,#f8f8f8,#f1f1f1);-webkit-box-shadow:0 1px 1px rgba(0,0,0,.1);-moz-box-shadow:0 1px 1px rgba(0,0,0,.1);box-shadow:0 1px 1px rgba(0,0,0,.1)}.bt-clk{background-color:#f6f6f6;background-image:-webkit-gradient(linear,left top,left bottom,from(#f6f6f6),to(#f1f1f1));background-image:-webkit-linear-gradient(to bottom,#f6f6f6,#f1f1f1);background-image:-moz-linear-gradient(to bottom,#f6f6f6,#f1f1f1);background-image:-ms-linear-gradient(to bottom,#f6f6f6,#f1f1f1);background-image:-o-linear-gradient(to bottom,#f6f6f6,#f1f1f1);background-image:linear-gradient(to bottom,#f6f6f6,#f1f1f1);-webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,.1);-moz-box-shadow:inset 0 1px 1px rgba(0,0,0,.1);box-shadow:inset 0 1px 1px rgba(0,0,0,.1)}.bt-act-s{border-color:#ccc;color:#333;background-color:#eee;background-image:-webkit-gradient(linear,left top,left bottom,from(#eee),to(#e0e0e0));background-image:-webkit-linear-gradient(to bottom,#eee,#e0e0e0);background-image:-moz-linear-gradient(to bottom,#eee,#e0e0e0);background-image:-ms-linear-gradient(to bottom,#eee,#e0e0e0);background-image:-o-linear-gradient(to bottom,#eee,#e0e0e0);background-image:linear-gradient(to bottom,#eee,#e0e0e0);-webkit-box-shadow:inset 0 1px 2px rgba(0,0,0,.1);-moz-box-shadow:inset 0 1px 2px rgba(0,0,0,.1);box-shadow:inset 0 1px 2px rgba(0,0,0,.1)}",backspace:'<svg xmlns="http://www.w3.org/2000/svg" width="11px" viewBox="0 0 2.17 1.08"><polygon class="fil0" points="0,0.54 0.54,0 0.54,0.43 2.17,0.43 2.17,0.65 0.54,0.65 0.54,1.08 "/></svg>',tab:'<svg xmlns="http://www.w3.org/2000/svg" width="11px" viewBox="0 0 2.06 2.06"><path class="fil0" d="M2.06 2.06l-0.2 0 0 -1.03 0.2 0 0 1.03zm-0.34 -0.51l-0.52 0.51 0 -0.41 -1.2 0 0 -0.21 1.2 0 0 -0.41 0.52 0.52zm-1.72 -0.52l0 -1.03 0.21 0 0 1.03 -0.21 0zm0.34 -0.51l0.52 -0.52 0 0.41 1.2 0 0 0.21 -1.2 0 0 0.41 -0.52 -0.51z"/></svg>',enter:'<svg xmlns="http://www.w3.org/2000/svg" width="11px" viewBox="0 0 15.86 11.89"> <polygon points="0,7.93 3.96,3.96 3.96,7.14 14.27,7.14 14.27,0 15.86,0 15.86,8.72 3.96,8.72 3.96,11.89 "/></svg>',shift:'<svg xmlns="http://www.w3.org/2000/svg" width="11px" viewBox="0 0 1.4 1.66"><path class="fil0 str0" d="M0.88 1.51l-0.36 0 0 -0.94 -0.18 0 0.36 -0.36 0.36 0.36 -0.18 0 0 0.94zm-0.5 -0.79l0 0.93 0.65 0 0 -0.93 0.37 0 -0.7 -0.72 -0.7 0.72 0.38 0z"></path></svg>',btClose:'<svg xmlns="http://www.w3.org/2000/svg" width="9px" viewBox="0 0 373.36 373.36"><polygon points="373.11,52.34 321.02,0.25 186.68,134.59 52.34,0.25 0.25,52.34 134.59,186.68 0.25,321.02 52.34,373.11 186.68,238.77 321.02,373.11 373.11,321.02 238.77,186.68 "/></svg>'};function c(e){let l=e.target.id,i="",s=document.activeElement;if(s.id===t.ID_textField&&("TEXTAREA"===s.tagName||"INPUT"===s.tagName&&"text"===s.type)){if(l)i=document.getElementById(l);else{let $=e.target,o=$.parentElement,r=o.id;i=document.getElementById(r),l=r}switch(i.classList.toggle("bt-clk"),e.preventDefault(),l){case"bt14":("TEXTAREA"===s.tagName||"INPUT"===s.tagName&&"text"===s.type)&&function t(e){if("TEXTAREA"===e.tagName||"INPUT"===e.tagName&&"text"===e.type){let n=e.selectionStart,a=e.selectionEnd;if(n!==a){let l=e.value,i=l.substring(0,n)+l.substring(a);e.value=i,e.selectionStart=e.selectionEnd=n}else if(n>0){let s=e.value,$=s.substring(0,n-1)+s.substring(n);e.value=$,e.selectionStart=e.selectionEnd=n-1}}}(s);break;case"bt15":B("	");break;case"bt29":(function t(){let e=document.getElementById("bt29");e.classList.toggle("bt-act-s"),v()})();break;case"bt41":(function e(){let n=document.activeElement;if(n&&("INPUT"===n.tagName&&"text"===n.type||"TEXTAREA"===n.tagName&&"1"===n.getAttribute("rows"))&&n.id===t.ID_textField&&n.form)n.form.submit();else if(n&&"TEXTAREA"===n.tagName){let a=n.selectionStart,l=n.selectionEnd,i=n.value,s=i.substring(0,a),$=i.substring(l,i.length);n.value=s+"\n"+$,n.selectionStart=n.selectionEnd=a+1,n.focus()}})();break;case"bt42":case"bt55":n=!1,u();break;case"bt56":case"bt58":a=!1,y();break;case"bt57":B(" ");break;default:let c=document.activeElement;c.selectionStart,c.selectionEnd;let d=e.target.textContent;B(d)}!1==n&&function t(e){let n=e.target.id,a=document.getElementById("bt42");if(!n){let l=e.target,i=l.parentElement,s=i.id;n=s}switch(n){case"bt29":break;case"bt42":case"bt55":case"bt56":case"bt58":e.preventDefault();break;default:a.classList.contains("bt-act-s")&&u()}}(e),!1==a&&function t(e){let n=e.target.id,a=document.getElementById("bt56");if(!n){let l=e.target,i=l.parentElement,s=i.id;n=s}switch(n){case"bt29":break;case"bt42":case"bt55":case"bt56":case"bt58":e.preventDefault();break;default:a.classList.contains("bt-act-s")&&y()}}(e)}}function d(t,e){return s[e]&&s[e][t]?s[e][t]:e+t}function g(t){let e=t.target.id,n="";if(e)(n=document.getElementById(e)).classList.add("bt-act");else{let a=t.target,l=a.parentElement,i=l.id;e=i,(n=document.getElementById(e)).classList.add("bt-act")}}function f(t){let e=t.target.id,n="";if(e)(n=document.getElementById(e)).classList.remove("bt-act");else{let a=t.target,l=a.parentElement,i=l.id;e=i,(n=document.getElementById(e)).classList.remove("bt-act")}}function b(t){let e=t.target.id,n="";if(t.preventDefault(),e)(n=document.getElementById(e)).classList.add("bt-clk");else{let a=t.target,l=a.parentElement,i=l.id;e=i,(n=document.getElementById(e)).classList.add("bt-clk")}}function m(t){let e=t.target.id,n="";if(e)(n=document.getElementById(e)).classList.remove("bt-clk");else{let a=t.target,l=a.parentElement,i=l.id;e=i,(n=document.getElementById(e)).classList.remove("bt-clk")}}function u(){let t=document.getElementById("bt02"),e=document.getElementById("bt01"),n=document.getElementById("bt56"),a=document.getElementById("bt29"),l=t.querySelector("span"),i=e.querySelector("span");""!==i.textContent&&(n.classList.contains("bt-act-s")?a.classList.contains("bt-act-s")?"1"==l.textContent?Y():G():j():"1"==l.textContent?Y():G()),p()}function p(){let t=document.getElementById("bt42"),e=document.getElementById("bt55");t.classList.toggle("bt-act-s"),e.classList.toggle("bt-act-s")}function y(){let t=document.getElementById("bt29"),e=document.getElementById("bt42"),n=document.getElementById("bt55"),a=document.getElementById("bt56");if(t.classList.contains("bt-act-s")||e.classList.contains("bt-act-s")||n.classList.contains("bt-act-s")){if(a.classList.contains("bt-act-s")){let l=document.getElementById("bt02");"\xb9"==l.textContent?E():x()}else x()}else E()}function E(){let t=document.getElementById("bt02");if(x(),"\xb9"!==t.textContent)j();else{let e=document.getElementById("bt29"),n=document.getElementById("bt42");Z(),e.classList.contains("bt-act-s")&&J(),n.classList.contains("bt-act-s")&&(u(),p())}}function x(){let t=document.getElementById("bt56"),e=document.getElementById("bt58");t.classList.toggle("bt-act-s"),e.classList.toggle("bt-act-s")}function v(){let t=document.getElementById("bt30"),e=document.getElementById("bt01"),n=document.getElementById("bt56"),a=document.getElementById("bt42"),l=document.getElementById("bt29");""!==e.textContent&&(n.classList.contains("bt-act-s")?a.classList.contains("bt-act-s")?"a"==t.textContent?J():M():l.classList.contains("bt-act-s")?"a"==t.textContent?J():M():j():"a"==t.textContent?J():M())}function h(t){switch(t){case"14":return"60px";case"15":return"48px";case"28":return"41px";case"29":return"53.75px";case"41":return"69.25px";case"42":return"37.25px";case"55":return"51.75px";case"56":case"58":return"95px";case"57":return"302px";default:return""}}function k(t){t.preventDefault()}function B(e){let n=document.activeElement,a=n.selectionStart,l=n.selectionEnd;if(n.id===t.ID_textField&&("TEXTAREA"===n.tagName||"INPUT"===n.tagName&&"text"===n.type)){let i=n.value,s=i.substring(0,a)+e+i.substring(l);n.value=s,n.selectionStart=n.selectionEnd=a+1}}function I(t){return new DOMParser().parseFromString(t,"image/svg+xml").documentElement}!function t(e){let n=document.createElement("style");n.type="text/css",n.styleSheet?n.styleSheet.cssText=e:n.appendChild(document.createTextNode(e)),document.head.appendChild(n)}(r.css);var w=document.createElement("div");w.className="_EVt3P8060s",w.id="keyboard",w.addEventListener("click",k),w.addEventListener("mousedown",k),document.body.appendChild(w);var L=document.createElement("div");L.className="_hJV3WuF8e5",w.appendChild(L);var C=document.createElement("div");C.className="_FsD33af7G1",C.id="tkb",L.appendChild(C);var S=document.createElement("span");S.className="_Gz2Dc004yX",S.textContent="Connect - Teclado Virtual",C.appendChild(S);var A=document.createElement("span");A.className="_eQE551lPBS",A.addEventListener("click",function t(){document.getElementById("keyboard").style.display="none"}),A.appendChild(I(r.btClose)),C.appendChild(A);var N=document.createElement("div");N.className="_oWAS56Q8Ih",L.appendChild(N);for(var D=0;D<5;D++){var T=document.createElement("div");T.className="outer-div",N.appendChild(T);for(var z=0;z<l[D];z++){var K=document.createElement("button");K.type="button",K.className="bt-kb",K.id="bt"+("0"+$).slice(-2),K.addEventListener("click",c),K.addEventListener("mouseover",g),K.addEventListener("mouseout",f),K.addEventListener("mousedown",b),K.addEventListener("mouseup",b),K.addEventListener("mouseleave",m),K.style.width=h(("0"+$).slice(-2)),T.appendChild(K);let R=document.createElement("span");if(R.className="_MswJ930N",R.textContent=i[o][0],K.appendChild(R),14==$){var X=I(r.backspace);R.appendChild(X)}else if(15==$){var X=I(r.tab);R.appendChild(X)}else if(41==$){var X=I(r.enter);R.appendChild(X)}else if(42==$||55==$){var X=I(r.shift);R.appendChild(X)}$++,o++}}let F=document.getElementById("keyboard"),P=F.offsetWidth,W=F.offsetHeight,q=window.scrollX,U=window.scrollY,H=window.innerWidth,V=window.innerHeight,O=window.innerWidth-document.documentElement.clientWidth,Q=window.innerHeight-document.documentElement.clientHeight;function Y(){let t=[['"',"1"],["!","2"],["@","3"],["#","4"],["$","5"],["%","6"],["\xa8","7"],["&","8"],["*","9"],["(","10"],[")","11"],["_","12"],["+","13"],["`","26"],["{","27"],["}","28"],["^","40"],["|","43"],["<","51"],[">","52"],[":","53"],["?","54"]];for(var e=0;e<t.length;e++){let n="bt"+t[e][1].toString().padStart(2,"0"),a=document.getElementById(n);if(a){let l=a.querySelector("span"),i=t[e][0];l.textContent=i}}v()}function G(){let t=[["'","1"],["1","2"],["2","3"],["3","4"],["4","5"],["5","6"],["6","7"],["7","8"],["8","9"],["9","10"],["0","11"],["-","12"],["=","13"],["\xb4","26"],["[","27"],["]","28"],["~","40"],["\\","43"],[",","51"],[".","52"],[";","53"],["/","54"]];for(var e=0;e<t.length;e++){let n="bt"+t[e][1].toString().padStart(2,"0"),a=document.getElementById(n);if(a){let l=a.querySelector("span"),i=t[e][0];l.textContent=i}}v()}function J(){for(var t=[["Q",16],["W",17],["E",18],["R",19],["T",20],["Y",21],["U",22],["I",23],["O",24],["P",25],["A",30],["S",31],["D",32],["F",33],["G",34],["H",35],["J",36],["K",37],["L",38],["\xc7",39],["Z",44],["X",45],["C",46],["V",47],["B",48],["N",49],["M",50]],e=0;e<t.length;e++){let n="bt"+t[e][1].toString().padStart(2,"0"),a=document.getElementById(n);if(a){let l=a.querySelector("span"),i=t[e][0];l.textContent=i}}}function M(){for(var t=[["q",16],["w",17],["e",18],["r",19],["t",20],["y",21],["u",22],["i",23],["o",24],["p",25],["a",30],["s",31],["d",32],["f",33],["g",34],["h",35],["j",36],["k",37],["l",38],["\xe7",39],["z",44],["x",45],["c",46],["v",47],["b",48],["n",49],["m",50]],e=0;e<t.length;e++){let n="bt"+t[e][1].toString().padStart(2,"0"),a=document.getElementById(n);if(a){let l=a.querySelector("span"),i=t[e][0];l.textContent=i}}}function j(){for(var t=[["",!0],["\xb9",!0],["\xb2",!0],["\xb3",!0],["\xa3",!0],["\xa2",!0],["\xac",!0],["",!0],["",!0],["",!0],["",!0],["",!0],["\xa7",!0],["",!0],["",!0],["",!0],["",!0],["",!0],["",!0],["",!0],["",!0],["",!0],["",!0],["",!0],["",!0],["",!0],["\xaa",!0],["\xba",!0],["Caps",!0],["",!0],["",!0],["",!0],["",!0],["",!0],["",!0],["",!0],["",!0],["",!0],["",!0],["",!0],["",!0],["",!0],["",!0],["",!0],["",!0],["",!0],["",!0],["",!0],["",!0],["",!0],["",!0],["",!0],["",!0],["",!0],["",!0],["Ctrl + Alt",!0],["⁠",!0],["Ctrl + Alt",!0]],e=0;e<t.length;e++){var n="bt"+(e+1).toString().padStart(2,"0"),a=document.getElementById(n);let l=[14,15,41,42,55];if(!l.includes(e+1)&&a){let i=a.querySelector("span");var s=t[e][0],$=t[e][1];i.textContent=s,a.disabled=!$}}}function Z(){for(var t=0;t<i.length;t++){var e="bt"+(t+1).toString().padStart(2,"0"),n=document.getElementById(e);let a=[14,15,41,42,55];if(!a.includes(t+1)&&n){let l=n.querySelector("span");var s=i[t][0],$=i[t][1];l.textContent=s,n.disabled=!$}}}F.style.left=H-P-O-2+q+"px",F.style.top=V-W-Q-2+U+"px";let tt={192:1,49:2,50:3,51:4,52:5,53:6,54:7,55:8,56:9,57:10,48:11,189:12,187:13,8:14,9:15,81:16,87:17,69:18,82:19,84:20,89:21,85:22,73:23,79:24,80:25,219:26,221:27,220:28,65:30,83:31,68:32,70:33,71:34,72:35,74:36,75:37,76:38,186:39,222:40,13:41,226:43,90:44,88:45,67:46,86:47,66:48,78:49,77:50,188:51,190:52,191:53,193:54,32:57};function te(t){let e=t.ctrlKey&&t.altKey&&!t.shiftKey,n=t.ctrlKey&&t.altKey&&t.shiftKey,a="Shift"===t.key&&!t.ctrlKey&&!t.altKey;return!e&&!n&&!a&&"CapsLock"!==t.key&&!!(t.ctrlKey||t.altKey||t.shiftKey||["F5","CapsLock","Shift"].includes(t.key))}document.addEventListener("keydown",function(t){if(te(t))return;let e=t.keyCode,l=document.getElementById("keyboard");if("none"!==l.style.display){if(e in tt){t.preventDefault();let i=tt[e],s="bt"+("0"+i).slice(-2),$=document.getElementById(s);$&&$.click()}else(function t(e){let n=document.getElementById("bt29");"CapsLock"===e.key&&(n.classList.toggle("bt-act-s"),v())})(t),function t(e){let a=document.getElementById("bt42"),l=document.getElementById("bt55"),i=document.getElementById("bt56");!e.shiftKey||n||a.classList.contains("bt-act-s")||(i.classList.contains("bt-act-s")||Y(),a.classList.add("bt-act-s"),l.classList.add("bt-act-s"),n=!0)}(t),function t(e){let n=document.getElementById("bt29"),l=document.getElementById("bt42"),i=document.getElementById("bt56"),s=document.getElementById("bt58");!e.ctrlKey||!e.altKey||a||(i.classList.add("bt-act-s"),s.classList.add("bt-act-s"),a=!0,n.classList.contains("bt-act-s")||l.classList.contains("bt-act-s")||j())}(t)}}),document.addEventListener("keypress",function(t){if(te(t))return;let e=document.getElementById("keyboard");"none"!==e.style.display&&t.preventDefault()}),document.addEventListener("keyup",function(t){let e=document.getElementById("bt42"),l=document.getElementById("bt55"),i=document.getElementById("bt56"),s=document.getElementById("bt58"),$=document.getElementById("bt29"),o=t.keyCode,r=document.getElementById("keyboard");if("none"!==r.style.display){if(o in tt){t.preventDefault();let c=tt[o],d="bt"+("0"+c).slice(-2),g=document.getElementById(d);g.classList.remove("bt-clk")}else"Shift"===t.key&&(e.classList.remove("bt-act-s"),l.classList.remove("bt-act-s"),G(),n=!1),("Control"===t.key||"Alt"===t.key)&&(i.classList.remove("bt-act-s"),s.classList.remove("bt-act-s"),a=!1,Z(),$.classList.contains("bt-act-s")&&J(),l.classList.contains("bt-act-s")&&Y())}})}(),function t(){let e=document.getElementById("keyboard"),n=document.getElementById("tkb"),a=!1,l,i;function s(t,n){let a=t-l,s=n-i,$=e.getBoundingClientRect(),o=document.documentElement.clientWidth,r=document.documentElement.clientHeight,c=o-$.width-2,d=r-$.height-2;e.style.left=Math.min(Math.max(a,2),c)+"px",e.style.top=Math.min(Math.max(s,2),d)+"px"}n.addEventListener("mousedown",t=>{a=!0,l=t.clientX-e.getBoundingClientRect().left,i=t.clientY-e.getBoundingClientRect().top}),document.addEventListener("mouseup",()=>{a=!1}),document.addEventListener("mousemove",t=>{a&&s(t.clientX,t.clientY)}),n.addEventListener("touchstart",t=>{a=!0;let n=t.touches[0];l=n.clientX-e.getBoundingClientRect().left,i=n.clientY-e.getBoundingClientRect().top,t.preventDefault()},{passive:!1}),document.addEventListener("touchend",()=>{a=!1}),document.addEventListener("touchmove",t=>{if(a){let e=t.touches[0];s(e.clientX,e.clientY),t.preventDefault()}},{passive:!1});let $=()=>{let t=document.documentElement.clientWidth,n=document.documentElement.clientHeight,a=e.getBoundingClientRect(),l=t-a.width-2,i=n-a.height-2,s=parseInt(e.style.left,10),$=parseInt(e.style.top,10);s>l&&(e.style.left=l+"px"),s<2&&(e.style.left="2px"),$>i&&(e.style.top=i+"px"),$<2&&(e.style.top="2px")};window.addEventListener("resize",$),window.addEventListener("scroll",$)}())}),document.getElementById(t.ID_button).addEventListener("mousedown",t=>{t.preventDefault()})};
