CodeMirror.defineMode("javascript",function(e,t){function n(e,t,n){return t.tokenize=n,n(e,t)}function r(e,t){for(var n,r=!1;null!=(n=e.next());){if(n==t&&!r)return!1;r=!r&&"\\"==n}return r}function a(e,t,n){return T=e,$=n,t}function i(e,t){var i=e.next();if('"'==i||"'"==i)return n(e,t,o(i));if(/[\[\]{}\(\),;\:\.]/.test(i))return a(i);if("0"==i&&e.eat(/x/i))return e.eatWhile(/[\da-f]/i),a("number","number");if(/\d/.test(i)||"-"==i&&e.eat(/\d/))return e.match(/^\d*(?:\.\d*)?(?:[eE][+\-]?\d+)?/),a("number","number");if("/"==i)return e.eat("*")?n(e,t,l):e.eat("/")?(e.skipToEnd(),a("comment","comment")):t.reAllowed?(r(e,"/"),e.eatWhile(/[gimy]/),a("regexp","string-2")):(e.eatWhile(B),a("operator",null,e.current()));if("#"==i)return e.skipToEnd(),a("error","error");if(B.test(i))return e.eatWhile(B),a("operator",null,e.current());e.eatWhile(/[\w\$_]/);var c=e.current(),u=q.propertyIsEnumerable(c)&&q[c];return u&&t.kwAllowed?a(u.type,u.style,c):a("variable","variable",c)}function o(e){return function(t,n){return r(t,e)||(n.tokenize=i),a("string","string")}}function l(e,t){for(var n,r=!1;n=e.next();){if("/"==n&&r){t.tokenize=i;break}r="*"==n}return a("comment","comment")}function c(e,t,n,r,a,i){this.indented=e,this.column=t,this.type=n,this.prev=a,this.info=i,null!=r&&(this.align=r)}function u(e,t){for(var n=e.localVars;n;n=n.next)if(n.name==t)return!0}function f(e,t,n,r,a){var i=e.cc;for(F.state=e,F.stream=a,F.marked=null,F.cc=i,e.lexical.hasOwnProperty("align")||(e.lexical.align=!0);;){var o=i.length?i.pop():_?k:y;if(o(n,r)){for(;i.length&&i[i.length-1].lex;)i.pop()();return F.marked?F.marked:"variable"==n&&u(e,r)?"variable-2":t}}}function s(){for(var e=arguments.length-1;e>=0;e--)F.cc.push(arguments[e])}function d(){return s.apply(null,arguments),!0}function v(e){var t=F.state;if(t.context){F.marked="def";for(var n=t.localVars;n;n=n.next)if(n.name==e)return;t.localVars={name:e,next:t.localVars}}}function m(){F.state.context||(F.state.localVars=G),F.state.context={prev:F.state.context,vars:F.state.localVars}}function p(){F.state.localVars=F.state.context.vars,F.state.context=F.state.context.prev}function h(e,t){var n=function(){var n=F.state;n.lexical=new c(n.indented,F.stream.column(),e,null,n.lexical,t)};return n.lex=!0,n}function x(){var e=F.state;e.lexical.prev&&(")"==e.lexical.type&&(e.indented=e.lexical.indented),e.lexical=e.lexical.prev)}function w(e){return function(t){return t==e?d():";"==e?s():d(arguments.callee)}}function y(e){return"var"==e?d(h("vardef"),E,w(";"),x):"keyword a"==e?d(h("form"),k,y,x):"keyword b"==e?d(h("form"),y,x):"{"==e?d(h("}"),z,x):";"==e?d():"function"==e?d(N):"for"==e?d(h("form"),w("("),h(")"),C,w(")"),x,y,x):"variable"==e?d(h("stat"),V):"switch"==e?d(h("form"),k,h("}","switch"),w("{"),z,x,x):"case"==e?d(k,w(":")):"default"==e?d(w(":")):"catch"==e?d(h("form"),m,w("("),S,w(")"),y,x,p):s(h("stat"),k,w(";"),x)}function k(e){return D.hasOwnProperty(e)?d(g):"function"==e?d(N):"keyword c"==e?d(b):"("==e?d(h(")"),b,w(")"),x,g):"operator"==e?d(k):"["==e?d(h("]"),A(k,"]"),x,g):"{"==e?d(h("}"),A(j,"}"),x,g):d()}function b(e){return e.match(/[;\}\)\],]/)?s():s(k)}function g(e,t){if("operator"==e&&/\+\+|--/.test(t))return d(g);if("operator"==e||":"==e)return d(k);if(";"!=e)return"("==e?d(h(")"),A(k,")"),x,g):"."==e?d(M,g):"["==e?d(h("]"),k,w("]"),x,g):void 0}function V(e){return":"==e?d(x,y):s(g,w(";"),x)}function M(e){return"variable"==e?(F.marked="property",d()):void 0}function j(e){return"variable"==e&&(F.marked="property"),D.hasOwnProperty(e)?d(w(":"),k):void 0}function A(e,t){function n(r){return","==r?d(e,n):r==t?d():d(w(t))}return function(r){return r==t?d():s(e,n)}}function z(e){return"}"==e?d():s(y,z)}function E(e,t){return"variable"==e?(v(t),d(W)):d()}function W(e,t){return"="==t?d(k,W):","==e?d(E):void 0}function C(e){return"var"==e?d(E,O):";"==e?s(O):"variable"==e?d(I):s(O)}function I(e,t){return"in"==t?d(k):d(g,O)}function O(e,t){return";"==e?d(P):"in"==t?d(k):d(k,w(";"),P)}function P(e){")"!=e&&d(k)}function N(e,t){return"variable"==e?(v(t),d(N)):"("==e?d(h(")"),m,A(S,")"),x,y,p):void 0}function S(e,t){return"variable"==e?(v(t),d()):void 0}var T,$,U=e.indentUnit,_=t.json,q=function(){function e(e){return{type:e,style:"keyword"}}var t=e("keyword a"),n=e("keyword b"),r=e("keyword c"),a=e("operator"),i={type:"atom",style:"atom"};return{"if":t,"while":t,"with":t,"else":n,"do":n,"try":n,"finally":n,"return":r,"break":r,"continue":r,"new":r,"delete":r,"throw":r,"var":e("var"),"const":e("var"),let:e("var"),"function":e("function"),"catch":e("catch"),"for":e("for"),"switch":e("switch"),"case":e("case"),"default":e("default"),"in":a,"typeof":a,"instanceof":a,"true":i,"false":i,"null":i,undefined:i,NaN:i,Infinity:i}}(),B=/[+\-*&%=<>!?|]/,D={atom:!0,number:!0,variable:!0,string:!0,regexp:!0},F={state:null,column:null,marked:null,cc:null},G={name:"this",next:{name:"arguments"}};return x.lex=!0,{startState:function(e){return{tokenize:i,reAllowed:!0,kwAllowed:!0,cc:[],lexical:new c((e||0)-U,0,"block",!1),localVars:t.localVars,context:t.localVars&&{vars:t.localVars},indented:0}},token:function(e,t){if(e.sol()&&(t.lexical.hasOwnProperty("align")||(t.lexical.align=!1),t.indented=e.indentation()),e.eatSpace())return null;var n=t.tokenize(e,t);return"comment"==T?n:(t.reAllowed=!("operator"!=T&&"keyword c"!=T&&!T.match(/^[\[{}\(,;:]$/)),t.kwAllowed="."!=T,f(t,n,T,$,e))},indent:function(e,t){if(e.tokenize!=i)return 0;var n=t&&t.charAt(0),r=e.lexical;"stat"==r.type&&"}"==n&&(r=r.prev);var a=r.type,o=n==a;return"vardef"==a?r.indented+4:"form"==a&&"{"==n?r.indented:"stat"==a||"form"==a?r.indented+U:"switch"!=r.info||o?r.align?r.column+(o?0:1):r.indented+(o?0:U):r.indented+(/^(?:case|default)\b/.test(t)?U:2*U)},electricChars:":{}"}}),CodeMirror.defineMIME("text/javascript","javascript"),CodeMirror.defineMIME("application/json",{name:"javascript",json:!0});