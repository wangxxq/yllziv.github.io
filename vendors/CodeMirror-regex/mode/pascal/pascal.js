CodeMirror.defineMode("pascal",function(e){function r(e){for(var r={},t=e.split(" "),n=0;n<t.length;++n)r[t[n]]=!0;return r}function t(e,r){var t=e.next();if("#"==t&&r.startOfLine)return e.skipToEnd(),"meta";if('"'==t||"'"==t)return r.tokenize=n(t),r.tokenize(e,r);if("("==t&&e.eat("*"))return r.tokenize=o,o(e,r);if(/[\[\]{}\(\),;\:\.]/.test(t))return null;if(/\d/.test(t))return e.eatWhile(/[\w\.]/),"number";if("/"==t&&e.eat("/"))return e.skipToEnd(),"comment";if(u.test(t))return e.eatWhile(u),"operator";e.eatWhile(/[\w\$_]/);var l=e.current();return i.propertyIsEnumerable(l)?"keyword":a.propertyIsEnumerable(l)?"atom":"word"}function n(e){return function(r,t){for(var n,o=!1,i=!1;null!=(n=r.next());){if(n==e&&!o){i=!0;break}o=!o&&"\\"==n}return!i&&o||(t.tokenize=null),"string"}}function o(e,r){for(var t,n=!1;t=e.next();){if(")"==t&&n){r.tokenize=null;break}n="*"==t}return"comment"}var i=r("and array begin case const div do downto else end file for forward integer boolean char function goto if in label mod nil not of or packed procedure program record repeat set string then to type until var while with"),a={"null":!0},u=/[+\-*&%=<>!?|\/]/;return{startState:function(e){return{tokenize:null}},token:function(e,r){if(e.eatSpace())return null;var n=(r.tokenize||t)(e,r);return"comment"==n||"meta"==n?n:n},electricChars:"{}"}}),CodeMirror.defineMIME("text/x-pascal","pascal");