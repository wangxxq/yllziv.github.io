CodeMirror.defineMode("http",function(){function r(r,t){return r.skipToEnd(),t.cur=o,"error"}function t(t,e){return t.match(/^HTTP\/\d\.\d/)?(e.cur=n,"keyword"):t.match(/^[A-Z]+/)&&/[ \t]/.test(t.peek())?(e.cur=u,"keyword"):r(t,e)}function n(t,n){var u=t.match(/^\d+/);if(!u)return r(t,n);n.cur=e;var i=Number(u[0]);return i>=100&&200>i?"positive informational":i>=200&&300>i?"positive success":i>=300&&400>i?"positive redirect":i>=400&&500>i?"negative client-error":i>=500&&600>i?"negative server-error":"error"}function e(r,t){return r.skipToEnd(),t.cur=o,null}function u(r,t){return r.eatWhile(/\S/),t.cur=i,"string-2"}function i(t,n){return t.match(/^HTTP\/\d\.\d$/)?(n.cur=o,"keyword"):r(t,n)}function o(r){return r.sol()&&!r.eat(/[ \t]/)?r.match(/^.*?:/)?"atom":(r.skipToEnd(),"error"):(r.skipToEnd(),"string")}function c(r){return r.skipToEnd(),null}return{token:function(r,t){var n=t.cur;return n!=o&&n!=c&&r.eatSpace()?null:n(r,t)},blankLine:function(r){r.cur=c},startState:function(){return{cur:t}}}}),CodeMirror.defineMIME("message/http","http");