CodeMirror.defineMode("ruby",function(e,t){function n(e){for(var t={},n=0,r=e.length;r>n;++n)t[e[n]]=!0;return t}function r(e,t,n){return n.tokenize.push(e),e(t,n)}function i(e,t){if(d=null,e.sol()&&e.match("=begin")&&e.eol())return t.tokenize.push(u),"comment";if(e.eatSpace())return null;var n,i=e.next();if("`"==i||"'"==i||'"'==i||"/"==i&&!e.eol()&&" "!=e.peek())return r(a(i,"string",'"'==i||"`"==i),e,t);if("%"==i){var o,s=!1;e.eat("s")?o="atom":e.eat(/[WQ]/)?(o="string",s=!0):e.eat(/[wxqr]/)&&(o="string");var c=e.eat(/[^\w\s]/);return c?(p.propertyIsEnumerable(c)&&(c=p[c]),r(a(c,o,s,!0),e,t)):"operator"}if("#"==i)return e.skipToEnd(),"comment";if("<"==i&&(n=e.match(/^<-?[\`\"\']?([a-zA-Z_?]\w*)[\`\"\']?(?:;|$)/)))return r(l(n[1]),e,t);if("0"==i)return e.eat("x")?e.eatWhile(/[\da-fA-F]/):e.eat("b")?e.eatWhile(/[01]/):e.eatWhile(/[0-7]/),"number";if(/\d/.test(i))return e.match(/^[\d_]*(?:\.[\d_]+)?(?:[eE][+\-]?[\d_]+)?/),"number";if("?"==i){for(;e.match(/^\\[CM]-/););return e.eat("\\")?e.eatWhile(/\w/):e.next(),"string"}return":"==i?e.eat("'")?r(a("'","atom",!1),e,t):e.eat('"')?r(a('"',"atom",!0),e,t):(e.eatWhile(/[\w\?]/),"atom"):"@"==i?(e.eat("@"),e.eatWhile(/[\w\?]/),"variable-2"):"$"==i?(e.next(),e.eatWhile(/[\w\?]/),"variable-3"):/\w/.test(i)?(e.eatWhile(/[\w\?]/),e.eat(":")?"atom":"ident"):"|"!=i||!t.varList&&"{"!=t.lastTok&&"do"!=t.lastTok?/[\(\)\[\]{}\\;]/.test(i)?(d=i,null):"-"==i&&e.eat(">")?"arrow":/[=+\-\/*:\.^%<>~|]/.test(i)?(e.eatWhile(/[=+\-\/*:\.^%<>~|]/),"operator"):null:(d="|",null)}function o(){var e=1;return function(t,n){if("}"==t.peek()){if(e--,0==e)return n.tokenize.pop(),n.tokenize[n.tokenize.length-1](t,n)}else"{"==t.peek()&&e++;return i(t,n)}}function a(e,t,n,r){return function(i,a){for(var l,u=!1;null!=(l=i.next());){if(l==e&&(r||!u)){a.tokenize.pop();break}if(n&&"#"==l&&!u&&i.eat("{")){a.tokenize.push(o(arguments.callee));break}u=!u&&"\\"==l}return t}}function l(e){return function(t,n){return t.match(e)?n.tokenize.pop():t.skipToEnd(),"string"}}function u(e,t){return e.sol()&&e.match("=end")&&e.eol()&&t.tokenize.pop(),e.skipToEnd(),"comment"}var d,s=n(["alias","and","BEGIN","begin","break","case","class","def","defined?","do","else","elsif","END","end","ensure","false","for","if","in","module","next","not","or","redo","rescue","retry","return","self","super","then","true","undef","unless","until","when","while","yield","nil","raise","throw","catch","fail","loop","callcc","caller","lambda","proc","public","protected","private","require","load","require_relative","extend","autoload"]),c=n(["def","class","case","for","while","do","module","then","catch","loop","proc","begin"]),f=n(["end","until"]),p={"[":"]","{":"}","(":")"};return{startState:function(){return{tokenize:[i],indented:0,context:{type:"top",indented:-e.indentUnit},continuedLine:!1,lastTok:null,varList:!1}},token:function(e,t){e.sol()&&(t.indented=e.indentation());var n,r=t.tokenize[t.tokenize.length-1](e,t);if("ident"==r){var i=e.current();r=s.propertyIsEnumerable(e.current())?"keyword":/^[A-Z]/.test(i)?"tag":"def"==t.lastTok||"class"==t.lastTok||t.varList?"def":"variable",c.propertyIsEnumerable(i)?n="indent":f.propertyIsEnumerable(i)?n="dedent":"if"!=i&&"unless"!=i||e.column()!=e.indentation()||(n="indent")}return(d||r&&"comment"!=r)&&(t.lastTok=i||d||r),"|"==d&&(t.varList=!t.varList),"indent"==n||/[\(\[\{]/.test(d)?t.context={prev:t.context,type:d||r,indented:t.indented}:("dedent"==n||/[\)\]\}]/.test(d))&&t.context.prev&&(t.context=t.context.prev),e.eol()&&(t.continuedLine="\\"==d||"operator"==r),r},indent:function(t,n){if(t.tokenize[t.tokenize.length-1]!=i)return 0;var r=n&&n.charAt(0),o=t.context,a=o.type==p[r]||"keyword"==o.type&&/^(?:end|until|else|elsif|when|rescue)\b/.test(n);return o.indented+(a?0:e.indentUnit)+(t.continuedLine?e.indentUnit:0)},electricChars:"}de"}}),CodeMirror.defineMIME("text/x-ruby","ruby");