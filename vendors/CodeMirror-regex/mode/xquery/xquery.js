CodeMirror.defineMode("xquery",function(e,t){function n(e,t,n){return v=e,w=n,t}function r(e,t,n){return t.tokenize=n,n(e,t)}function a(e,t){var a=e.next(),s=!1,g=y(e);if("<"==a){if(e.match("!--",!0))return r(e,t,f);if(e.match("![CDATA",!1))return t.tokenize=l,n("tag","tag");if(e.match("?",!1))return r(e,t,m);var h=e.eat("/");e.eatSpace();for(var x,v="";x=e.eat(/[^\s\u00a0=<>\"\'\/?]/);)v+=x;return r(e,t,u(v,h))}if("{"==a)return k(t,{type:"codeblock"}),n("","");if("}"==a)return b(t),n("","");if(d(t))return">"==a?n("tag","tag"):"/"==a&&e.eat(">")?(b(t),n("tag","tag")):n("word","word");if(/\d/.test(a))return e.match(/^\d*(?:\.\d*)?(?:E[+\-]?\d+)?/),n("number","atom");if("("===a&&e.eat(":"))return k(t,{type:"comment"}),r(e,t,i);if(g||'"'!==a&&"'"!==a){if("$"===a)return r(e,t,c);if(":"===a&&e.eat("="))return n("operator","keyword");if("("===a)return k(t,{type:"paren"}),n("","");if(")"===a)return b(t),n("","");if("["===a)return k(t,{type:"bracket"}),n("","");if("]"===a)return b(t),n("","");var w=z.propertyIsEnumerable(a)&&z[a];if(g&&'"'===a)for(;'"'!==e.next(););if(g&&"'"===a)for(;"'"!==e.next(););w||e.eatWhile(/[\w\$_-]/);var q=e.eat(":");!e.eat(":")&&q&&e.eatWhile(/[\w\$_-]/),e.match(/^[ \t]*\(/,!1)&&(s=!0);var _=e.current();return w=z.propertyIsEnumerable(_)&&z[_],s&&!w&&(w={type:"function_call",style:"variable def"}),p(t)?(b(t),n("word","word",_)):("element"!=_&&"attribute"!=_&&"axis_specifier"!=w.type||k(t,{type:"xmlconstructor"}),w?n(w.type,w.style,_):n("word","word",_))}return r(e,t,o(a))}function i(e,t){for(var r,a=!1,i=!1,o=0;r=e.next();){if(")"==r&&a){if(!(o>0)){b(t);break}o--}else":"==r&&i&&o++;a=":"==r,i="("==r}return n("comment","comment")}function o(e,t){return function(r,i){var c;if(h(i)&&r.current()==e)return b(i),t&&(i.tokenize=t),n("string","string");if(k(i,{type:"string",name:e,tokenize:o(e,t)}),r.match("{",!1)&&g(i))return i.tokenize=a,n("string","string");for(;c=r.next();){if(c==e){b(i),t&&(i.tokenize=t);break}if(r.match("{",!1)&&g(i))return i.tokenize=a,n("string","string")}return n("string","string")}}function c(e,t){var r=/[\w\$_-]/;if(e.eat('"')){for(;'"'!==e.next(););e.eat(":")}else e.eatWhile(r),e.match(":=",!1)||e.eat(":");return e.eatWhile(r),t.tokenize=a,n("variable","variable")}function u(e,t){return function(r,i){return r.eatSpace(),t&&r.eat(">")?(b(i),i.tokenize=a,n("tag","tag")):(r.eat("/")||k(i,{type:"tag",name:e,tokenize:a}),r.eat(">")?(i.tokenize=a,n("tag","tag")):(i.tokenize=s,n("tag","tag")))}}function s(e,t){var i=e.next();return"/"==i&&e.eat(">")?(g(t)&&b(t),d(t)&&b(t),n("tag","tag")):">"==i?(g(t)&&b(t),n("tag","tag")):"="==i?n("",""):'"'==i||"'"==i?r(e,t,o(i,s)):(g(t)||k(t,{type:"attribute",name:name,tokenize:s}),e.eat(/[a-zA-Z_:]/),e.eatWhile(/[-a-zA-Z0-9_:.]/),e.eatSpace(),(e.match(">",!1)||e.match("/",!1))&&(b(t),t.tokenize=a),n("attribute","attribute"))}function f(e,t){for(;ch=e.next();)if("-"==ch&&e.match("->",!0))return t.tokenize=a,n("comment","comment")}function l(e,t){for(;ch=e.next();)if("]"==ch&&e.match("]",!0))return t.tokenize=a,n("comment","comment")}function m(e,t){for(;ch=e.next();)if("?"==ch&&e.match(">",!0))return t.tokenize=a,n("comment","comment meta")}function d(e){return x(e,"tag")}function g(e){return x(e,"attribute")}function p(e){return x(e,"xmlconstructor")}function h(e){return x(e,"string")}function y(e){return'"'===e.current()?e.match(/^[^\"]+\"\:/,!1):"'"===e.current()?e.match(/^[^\"]+\'\:/,!1):!1}function x(e,t){return e.stack.length&&e.stack[e.stack.length-1].type==t}function k(e,t){e.stack.push(t)}function b(e){var t=(e.stack.pop(),e.stack.length&&e.stack[e.stack.length-1].tokenize);e.tokenize=t||a}var v,w,z=function(){function e(e){return{type:e,style:"keyword"}}for(var t=e("keyword a"),n=e("keyword b"),r=e("keyword c"),a=e("operator"),i={type:"atom",style:"atom"},o={type:"punctuation",style:""},c={type:"axis_specifier",style:"qualifier"},u={"if":t,"switch":t,"while":t,"for":t,"else":n,then:n,"try":n,"finally":n,"catch":n,element:r,attribute:r,let:r,"implements":r,"import":r,module:r,namespace:r,"return":r,"super":r,"this":r,"throws":r,where:r,"private":r,",":o,"null":i,"fn:false()":i,"fn:true()":i},s=["after","ancestor","ancestor-or-self","and","as","ascending","assert","attribute","before","by","case","cast","child","comment","declare","default","define","descendant","descendant-or-self","descending","document","document-node","element","else","eq","every","except","external","following","following-sibling","follows","for","function","if","import","in","instance","intersect","item","let","module","namespace","node","node","of","only","or","order","parent","precedes","preceding","preceding-sibling","processing-instruction","ref","return","returns","satisfies","schema","schema-element","self","some","sortby","stable","text","then","to","treat","typeswitch","union","variable","version","where","xquery","empty-sequence"],f=0,l=s.length;l>f;f++)u[s[f]]=e(s[f]);for(var m=["xs:string","xs:float","xs:decimal","xs:double","xs:integer","xs:boolean","xs:date","xs:dateTime","xs:time","xs:duration","xs:dayTimeDuration","xs:time","xs:yearMonthDuration","numeric","xs:hexBinary","xs:base64Binary","xs:anyURI","xs:QName","xs:byte","xs:boolean","xs:anyURI","xf:yearMonthDuration"],f=0,l=m.length;l>f;f++)u[m[f]]=i;for(var d=["eq","ne","lt","le","gt","ge",":=","=",">",">=","<","<=",".","|","?","and","or","div","idiv","mod","*","/","+","-"],f=0,l=d.length;l>f;f++)u[d[f]]=a;for(var g=["self::","attribute::","child::","descendant::","descendant-or-self::","parent::","ancestor::","ancestor-or-self::","following::","preceding::","following-sibling::","preceding-sibling::"],f=0,l=g.length;l>f;f++)u[g[f]]=c;return u}();return{startState:function(e){return{tokenize:a,cc:[],stack:[]}},token:function(e,t){if(e.eatSpace())return null;var n=t.tokenize(e,t);return n}}}),CodeMirror.defineMIME("application/xquery","xquery");