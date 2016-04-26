function splitLines(t){return t.split(/\r?\n|\r/)}function StringStream(t){this.pos=this.start=0,this.string=t}window.CodeMirror={},StringStream.prototype={eol:function(){return this.pos>=this.string.length},sol:function(){return 0==this.pos},peek:function(){return this.string.charAt(this.pos)||null},next:function(){return this.pos<this.string.length?this.string.charAt(this.pos++):void 0},eat:function(t){var r=this.string.charAt(this.pos);if("string"==typeof t)var e=r==t;else var e=r&&(t.test?t.test(r):t(r));return e?(++this.pos,r):void 0},eatWhile:function(t){for(var r=this.pos;this.eat(t););return this.pos>r},eatSpace:function(){for(var t=this.pos;/[\s\u00a0]/.test(this.string.charAt(this.pos));)++this.pos;return this.pos>t},skipToEnd:function(){this.pos=this.string.length},skipTo:function(t){var r=this.string.indexOf(t,this.pos);return r>-1?(this.pos=r,!0):void 0},backUp:function(t){this.pos-=t},column:function(){return this.start},indentation:function(){return 0},match:function(t,r,e){if("string"!=typeof t){var i=this.string.slice(this.pos).match(t);return i&&i.index>0?null:(i&&r!==!1&&(this.pos+=i[0].length),i)}var n=function(t){return e?t.toLowerCase():t},o=this.string.substr(this.pos,t.length);return n(o)==n(t)?(r!==!1&&(this.pos+=t.length),!0):void 0},current:function(){return this.string.slice(this.start,this.pos)}},CodeMirror.StringStream=StringStream,CodeMirror.startState=function(t,r,e){return t.startState?t.startState(r,e):!0};var modes=CodeMirror.modes={},mimeModes=CodeMirror.mimeModes={};CodeMirror.defineMode=function(t,r){modes[t]=r},CodeMirror.defineMIME=function(t,r){mimeModes[t]=r},CodeMirror.getMode=function(t,r){if("string"==typeof r&&mimeModes.hasOwnProperty(r)&&(r=mimeModes[r]),"string"==typeof r)var e=r,i={};else if(null!=r)var e=r.name,i=r;var n=modes[e];if(!n)throw new Error("Unknown mode: "+r);return n(t,i||{})},CodeMirror.runMode=function(t,r,e,i){var n=CodeMirror.getMode({indentUnit:2},r);if(1==e.nodeType){var o=i&&i.tabSize||4,s=e,a=0;s.innerHTML="",e=function(t,r){if("\n"==t)return s.appendChild(document.createElement("br")),void(a=0);for(var e="",i=0;;){var n=t.indexOf("	",i);if(-1==n){e+=t.slice(i),a+=t.length-i;break}a+=n-i,e+=t.slice(i,n);var h=o-a%o;a+=h;for(var d=0;h>d;++d)e+=" ";i=n+1}if(r){var u=s.appendChild(document.createElement("span"));u.className="cm-"+r.replace(/ +/g," cm-"),u.appendChild(document.createTextNode(e))}else s.appendChild(document.createTextNode(e))}}for(var h=splitLines(t),d=CodeMirror.startState(n),u=0,c=h.length;c>u;++u){u&&e("\n");for(var p=new CodeMirror.StringStream(h[u]);!p.eol();){var f=n.token(p,d);e(p.current(),f,u,p.start),p.start=p.pos}}};