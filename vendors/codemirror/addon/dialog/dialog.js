!function(){function o(o,e,r){var n,i=o.getWrapperElement();return n=i.appendChild(document.createElement("div")),r?n.className="CodeMirror-dialog CodeMirror-dialog-bottom":n.className="CodeMirror-dialog CodeMirror-dialog-top",n.innerHTML=e,n}CodeMirror.defineExtension("openDialog",function(e,r,n){function i(){d||(d=!0,u.parentNode.removeChild(u))}var t,u=o(this,e,n&&n.bottom),d=!1,a=this,c=u.getElementsByTagName("input")[0];return c?(CodeMirror.on(c,"keydown",function(o){n&&n.onKeyDown&&n.onKeyDown(o,c.value,i)||13!=o.keyCode&&27!=o.keyCode||(CodeMirror.e_stop(o),i(),a.focus(),13==o.keyCode&&r(c.value))}),n&&n.onKeyUp&&CodeMirror.on(c,"keyup",function(o){n.onKeyUp(o,c.value,i)}),n&&n.value&&(c.value=n.value),c.focus(),CodeMirror.on(c,"blur",i)):(t=u.getElementsByTagName("button")[0])&&(CodeMirror.on(t,"click",function(){i(),a.focus()}),t.focus(),CodeMirror.on(t,"blur",i)),i}),CodeMirror.defineExtension("openConfirm",function(e,r,n){function i(){d||(d=!0,t.parentNode.removeChild(t),a.focus())}var t=o(this,e,n&&n.bottom),u=t.getElementsByTagName("button"),d=!1,a=this,c=1;u[0].focus();for(var l=0;l<u.length;++l){var f=u[l];!function(o){CodeMirror.on(f,"click",function(e){CodeMirror.e_preventDefault(e),i(),o&&o(a)})}(r[l]),CodeMirror.on(f,"blur",function(){--c,setTimeout(function(){0>=c&&i()},200)}),CodeMirror.on(f,"focus",function(){++c})}})}();