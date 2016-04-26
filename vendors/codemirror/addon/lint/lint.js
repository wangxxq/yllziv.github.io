!function(){"use strict";function t(t,e){function n(t){return o.parentNode?(o.style.top=Math.max(0,t.clientY-o.offsetHeight-5)+"px",void(o.style.left=t.clientX+5+"px")):CodeMirror.off(document,"mousemove",n)}var o=document.createElement("div");return o.className="CodeMirror-lint-tooltip",o.appendChild(e.cloneNode(!0)),document.body.appendChild(o),CodeMirror.on(document,"mousemove",n),n(t),null!=o.style.opacity&&(o.style.opacity=1),o}function e(t){t.parentNode&&t.parentNode.removeChild(t)}function n(t){t.parentNode&&(null==t.style.opacity&&e(t),t.style.opacity=0,setTimeout(function(){e(t)},600))}function o(e,o,r){function i(){CodeMirror.off(r,"mouseout",i),a&&(n(a),a=null)}var a=t(e,o),s=setInterval(function(){if(a)for(var t=r;;t=t.parentNode){if(t==document.body)return;if(!t){i();break}}return a?void 0:clearInterval(s)},400);CodeMirror.on(r,"mouseout",i)}function r(t,e,n){this.marked=[],this.options=e,this.timeout=null,this.hasGutter=n,this.onMouseOver=function(e){v(t,e)}}function i(t,e){if(e instanceof Function)return{getAnnotations:e};if(e&&e!==!0||(e={}),e.getAnnotations||(e.getAnnotations=t.getHelper(CodeMirror.Pos(0,0),"lint")),!e.getAnnotations)throw new Error("Required option 'getAnnotations' missing (lint addon)");return e}function a(t){var e=t.state.lint;e.hasGutter&&t.clearGutter(h);for(var n=0;n<e.marked.length;++n)e.marked[n].clear();e.marked.length=0}function s(t,e,n,r){var i=document.createElement("div"),a=i;return i.className="CodeMirror-lint-marker-"+e,n&&(a=i.appendChild(document.createElement("div")),a.className="CodeMirror-lint-marker-multiple"),0!=r&&CodeMirror.on(a,"mouseover",function(e){o(e,t,a)}),i}function l(t,e){return"error"==t?t:e}function u(t){for(var e=[],n=0;n<t.length;++n){var o=t[n],r=o.from.line;(e[r]||(e[r]=[])).push(o)}return e}function c(t){var e=t.severity;C.test(e)||(e="error");var n=document.createElement("div");return n.className="CodeMirror-lint-message-"+e,n.appendChild(document.createTextNode(t.message)),n}function d(t){var e=t.state.lint,n=e.options;n.async?n.getAnnotations(t,f,n):f(t,n.getAnnotations(t.getValue()))}function f(t,e){a(t);for(var n=t.state.lint,o=n.options,r=u(e),i=0;i<r.length;++i){var d=r[i];if(d){for(var f=null,m=n.hasGutter&&document.createDocumentFragment(),p=0;p<d.length;++p){var v=d[p],g=v.severity;C.test(g)||(g="error"),f=l(f,g),o.formatAnnotation&&(v=o.formatAnnotation(v)),n.hasGutter&&m.appendChild(c(v)),v.to&&n.marked.push(t.markText(v.from,v.to,{className:"CodeMirror-lint-mark-"+g,__annotation:v}))}n.hasGutter&&t.setGutterMarker(i,h,s(m,f,d.length>1,n.options.tooltips))}}o.onUpdateLinting&&o.onUpdateLinting(e,r,t)}function m(t){var e=t.state.lint;clearTimeout(e.timeout),e.timeout=setTimeout(function(){d(t)},e.options.delay||500)}function p(t,e){var n=e.target||e.srcElement;o(e,c(t),n)}function v(t,e){if(/\bCodeMirror-lint-mark-/.test((e.target||e.srcElement).className))for(var n=0;n<M.length;n+=2)for(var o=t.findMarksAt(t.coordsChar({left:e.clientX+M[n],top:e.clientY+M[n+1]})),r=0;r<o.length;++r){var i=o[r],a=i.__annotation;if(a)return p(a,e)}}function g(t,e,n){if(n&&n!=CodeMirror.Init&&(a(t),t.off("change",m),CodeMirror.off(t.getWrapperElement(),"mouseover",t.state.lint.onMouseOver),delete t.state.lint),e){for(var o=t.getOption("gutters"),s=!1,l=0;l<o.length;++l)o[l]==h&&(s=!0);var u=t.state.lint=new r(t,i(t,e),s);t.on("change",m),0!=u.options.tooltips&&CodeMirror.on(t.getWrapperElement(),"mouseover",u.onMouseOver),d(t)}}var h="CodeMirror-lint-markers",C=/^(?:error|warning)$/,M=[0,0,0,5,0,-5,5,0,-5,0];CodeMirror.defineOption("lintWith",!1,g),CodeMirror.defineOption("lint",!1,g)}();