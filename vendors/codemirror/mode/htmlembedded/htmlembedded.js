CodeMirror.defineMode("htmlembedded",function(t,e){function r(t,e){return t.match(d,!1)?(e.token=n,i.token(t,e.scriptState)):o.token(t,e.htmlState)}function n(t,e){return t.match(a,!1)?(e.token=r,o.token(t,e.htmlState)):i.token(t,e.scriptState)}var i,o,d=e.scriptStartRegex||/^<%/i,a=e.scriptEndRegex||/^%>/i;return{startState:function(){return i=i||CodeMirror.getMode(t,e.scriptingModeSpec),o=o||CodeMirror.getMode(t,"htmlmixed"),{token:e.startOpen?n:r,htmlState:CodeMirror.startState(o),scriptState:CodeMirror.startState(i)}},token:function(t,e){return e.token(t,e)},indent:function(t,e){return t.token==r?o.indent(t.htmlState,e):i.indent?i.indent(t.scriptState,e):void 0},copyState:function(t){return{token:t.token,htmlState:CodeMirror.copyState(o,t.htmlState),scriptState:CodeMirror.copyState(i,t.scriptState)}},electricChars:"/{}:",innerMode:function(t){return t.token==n?{state:t.scriptState,mode:i}:{state:t.htmlState,mode:o}}}},"htmlmixed"),CodeMirror.defineMIME("application/x-ejs",{name:"htmlembedded",scriptingModeSpec:"javascript"}),CodeMirror.defineMIME("application/x-aspx",{name:"htmlembedded",scriptingModeSpec:"text/x-csharp"}),CodeMirror.defineMIME("application/x-jsp",{name:"htmlembedded",scriptingModeSpec:"text/x-java"}),CodeMirror.defineMIME("application/x-erb",{name:"htmlembedded",scriptingModeSpec:"ruby"});