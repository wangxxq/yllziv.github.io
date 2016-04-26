function splitLines(t){return t.split(/\r?\n|\r/)}function StringStream(t){this.pos=this.start=0,this.string=t}StringStream.prototype={eol:function(){return this.pos>=this.string.length},sol:function(){return 0==this.pos},peek:function(){return this.string.charAt(this.pos)||null},next:function(){return this.pos<this.string.length?this.string.charAt(this.pos++):void 0},eat:function(t){var n=this.string.charAt(this.pos);if("string"==typeof t)var s=n==t;else var s=n&&(t.test?t.test(n):t(n));return s?(++this.pos,n):void 0},eatWhile:function(t){for(var n=this.pos;this.eat(t););return this.pos>n},eatSpace:function(){for(var t=this.pos;/[\s\u00a0]/.test(this.string.charAt(this.pos));)++this.pos;return this.pos>t},skipToEnd:function(){this.pos=this.string.length},skipTo:function(t){var n=this.string.indexOf(t,this.pos);return n>-1?(this.pos=n,!0):void 0},backUp:function(t){this.pos-=t},column:function(){return this.start},indentation:function(){return 0},match:function(t,n,s){if("string"!=typeof t){var e=this.string.slice(this.pos).match(t);return e&&e.index>0?null:(e&&n!==!1&&(this.pos+=e[0].length),e)}var r=function(t){return s?t.toLowerCase():t},i=this.string.substr(this.pos,t.length);return r(i)==r(t)?(n!==!1&&(this.pos+=t.length),!0):void 0},current:function(){return this.string.slice(this.start,this.pos)}},exports.StringStream=StringStream,exports.startState=function(t,n,s){return t.startState?t.startState(n,s):!0};var modes=exports.modes={},mimeModes=exports.mimeModes={};exports.defineMode=function(t,n){if(arguments.length>2){n.dependencies=[];for(var s=2;s<arguments.length;++s)n.dependencies.push(arguments[s])}modes[t]=n},exports.defineMIME=function(t,n){mimeModes[t]=n},exports.defineMode("null",function(){return{token:function(t){t.skipToEnd()}}}),exports.defineMIME("text/plain","null"),exports.getMode=function(t,n){if("string"==typeof n&&mimeModes.hasOwnProperty(n)&&(n=mimeModes[n]),"string"==typeof n)var s=n,e={};else if(null!=n)var s=n.name,e=n;var r=modes[s];if(!r)throw new Error("Unknown mode: "+n);return r(t,e||{})},exports.runMode=function(t,n,s){for(var e=exports.getMode({indentUnit:2},n),r=splitLines(t),i=exports.startState(e),o=0,h=r.length;h>o;++o){o&&s("\n");for(var p=new exports.StringStream(r[o]);!p.eol();){var u=e.token(p,i);s(p.current(),u,o,p.start),p.start=p.pos}}};