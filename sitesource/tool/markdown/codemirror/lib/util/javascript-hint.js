!function(){function t(t,e){for(var n=0,r=t.length;r>n;++n)e(t[n])}function e(t,e){if(!Array.prototype.indexOf){for(var n=t.length;n--;)if(t[n]===e)return!0;return!1}return-1!=t.indexOf(e)}function n(t,e,n){var r=t.getCursor(),s=n(t,r),a=s;for(/^[\w$_]*$/.test(s.string)||(s=a={start:r.ch,end:r.ch,string:"",state:s.state,className:"."==s.string?"property":null});"property"==a.className;){if(a=n(t,{line:r.line,ch:a.start}),"."!=a.string)return;if(a=n(t,{line:r.line,ch:a.start}),")"==a.string){var o=1;do switch(a=n(t,{line:r.line,ch:a.start}),a.string){case")":o++;break;case"(":o--}while(o>0);if(a=n(t,{line:r.line,ch:a.start}),"variable"!=a.className)return;a.className="function"}if(!l)var l=[];l.push(a)}return{list:i(s,l,e),from:{line:r.line,ch:s.start},to:{line:r.line,ch:s.end}}}function r(t,e){var n=t.getTokenAt(e);return e.ch==n.start+1&&"."==n.string.charAt(0)?(n.end=n.start,n.string=".",n.className="property"):/^\.[\w$_]*$/.test(n.string)&&(n.className="property",n.start++,n.string=n.string.replace(/\./,"")),n}function i(n,r,i){function l(t){0!=t.indexOf(u)||e(f,t)||f.push(t)}function c(e){"string"==typeof e?t(s,l):e instanceof Array?t(a,l):e instanceof Function&&t(o,l);for(var n in e)l(n)}var f=[],u=n.string;if(r){var p,h=r.pop();for("variable"==h.className?p=window[h.string]:"string"==h.className?p="":"atom"==h.className?p=1:"function"==h.className&&(null==window.jQuery||"$"!=h.string&&"jQuery"!=h.string||"function"!=typeof window.jQuery?null!=window._&&"_"==h.string&&"function"==typeof window._&&(p=window._()):p=window.jQuery());null!=p&&r.length;)p=p[r.pop().string];null!=p&&c(p)}else{for(var d=n.state.localVars;d;d=d.next)l(d.name);c(window),t(i,l)}return f}CodeMirror.javascriptHint=function(t){return n(t,l,function(t,e){return t.getTokenAt(e)})},CodeMirror.coffeescriptHint=function(t){return n(t,c,r)};var s="charAt charCodeAt indexOf lastIndexOf substring substr slice trim trimLeft trimRight toUpperCase toLowerCase split concat match replace search".split(" "),a="length concat join splice push pop shift unshift slice reverse sort indexOf lastIndexOf every some filter forEach map reduce reduceRight ".split(" "),o="prototype apply call bind".split(" "),l="break case catch continue debugger default delete do else false finally for function if in instanceof new null return switch throw true try typeof var void while with".split(" "),c="and break catch class continue delete do else extends false finally for if in instanceof isnt new no not null of off on or return switch then throw true try typeof until void while with yes".split(" ")}();