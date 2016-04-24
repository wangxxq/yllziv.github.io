CodeMirror.defineMode("go",function(t,e){function n(t,e){var n=t.next();if('"'==n||"'"==n||"`"==n)return e.tokenize=r(n),e.tokenize(t,e);if(/[\d\.]/.test(n))return"."==n?t.match(/^[0-9]+([eE][\-+]?[0-9]+)?/):"0"==n?t.match(/^[xX][0-9a-fA-F]+/)||t.match(/^0[0-7]+/):t.match(/^[0-9]*\.?[0-9]*([eE][\-+]?[0-9]+)?/),"number";if(/[\[\]{}\(\),;\:\.]/.test(n))return u=n,null;if("/"==n){if(t.eat("*"))return e.tokenize=i,i(t,e);if(t.eat("/"))return t.skipToEnd(),"comment"}if(s.test(n))return t.eatWhile(s),"operator";t.eatWhile(/[\w\$_]/);var o=t.current();return f.propertyIsEnumerable(o)?("case"!=o&&"default"!=o||(u="case"),"keyword"):p.propertyIsEnumerable(o)?"atom":"word"}function r(t){return function(e,r){for(var i,o=!1,a=!1;null!=(i=e.next());){if(i==t&&!o){a=!0;break}o=!o&&"\\"==i}return(a||!o&&"`"!=t)&&(r.tokenize=n),"string"}}function i(t,e){for(var r,i=!1;r=t.next();){if("/"==r&&i){e.tokenize=n;break}i="*"==r}return"comment"}function o(t,e,n,r,i){this.indented=t,this.column=e,this.type=n,this.align=r,this.prev=i}function a(t,e,n){return t.context=new o(t.indented,e,n,null,t.context)}function c(t){var e=t.context.type;return")"!=e&&"]"!=e&&"}"!=e||(t.indented=t.context.indented),t.context=t.context.prev}var u,l=t.indentUnit,f={"break":!0,"case":!0,chan:!0,"const":!0,"continue":!0,"default":!0,defer:!0,"else":!0,fallthrough:!0,"for":!0,func:!0,go:!0,"goto":!0,"if":!0,"import":!0,"interface":!0,map:!0,"package":!0,range:!0,"return":!0,select:!0,struct:!0,"switch":!0,type:!0,"var":!0,bool:!0,"byte":!0,complex64:!0,complex128:!0,float32:!0,float64:!0,int8:!0,int16:!0,int32:!0,int64:!0,string:!0,uint8:!0,uint16:!0,uint32:!0,uint64:!0,"int":!0,uint:!0,uintptr:!0},p={"true":!0,"false":!0,iota:!0,nil:!0,append:!0,cap:!0,close:!0,complex:!0,copy:!0,imag:!0,len:!0,make:!0,"new":!0,panic:!0,print:!0,println:!0,real:!0,recover:!0},s=/[+\-*&^%:=<>!|\/]/;return{startState:function(t){return{tokenize:null,context:new o((t||0)-l,0,"top",!1),indented:0,startOfLine:!0}},token:function(t,e){var r=e.context;if(t.sol()&&(null==r.align&&(r.align=!1),e.indented=t.indentation(),e.startOfLine=!0,"case"==r.type&&(r.type="}")),t.eatSpace())return null;u=null;var i=(e.tokenize||n)(t,e);return"comment"==i?i:(null==r.align&&(r.align=!0),"{"==u?a(e,t.column(),"}"):"["==u?a(e,t.column(),"]"):"("==u?a(e,t.column(),")"):"case"==u?r.type="case":"}"==u&&"}"==r.type?r=c(e):u==r.type&&c(e),e.startOfLine=!1,i)},indent:function(t,e){if(t.tokenize!=n&&null!=t.tokenize)return 0;var r=t.context,i=e&&e.charAt(0);if("case"==r.type&&/^(?:case|default)\b/.test(e))return t.context.type="}",r.indented;var o=i==r.type;return r.align?r.column+(o?0:1):r.indented+(o?0:l)},electricChars:"{}:"}}),CodeMirror.defineMIME("text/x-go","go");