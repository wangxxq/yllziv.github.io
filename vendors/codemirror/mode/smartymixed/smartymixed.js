CodeMirror.defineMode("smartymixed",function(e){var t,l,i,r,a=CodeMirror.getMode(e,"htmlmixed"),n=CodeMirror.getMode(e,"smarty"),t={rightDelimiter:"}",leftDelimiter:"{"};return e.hasOwnProperty("leftDelimiter")&&(t.leftDelimiter=e.leftDelimiter),e.hasOwnProperty("rightDelimiter")&&(t.rightDelimiter=e.rightDelimiter),l={smartyComment:new RegExp("^"+t.leftDelimiter+"\\*"),literalOpen:new RegExp(t.leftDelimiter+"literal"+t.rightDelimiter),literalClose:new RegExp(t.leftDelimiter+"/literal"+t.rightDelimiter),hasLeftDelimeter:new RegExp(".*"+t.leftDelimiter),htmlHasLeftDelimeter:new RegExp("[^<>]*"+t.leftDelimiter)},i={chain:function(e,t,l){return t.tokenize=l,l(e,t)},cleanChain:function(e,t,l){return t.tokenize=null,t.localState=null,t.localMode=null,"string"==typeof l?l?l:null:l(e,t)},maybeBackup:function(e,t,l){var i,r=e.current(),a=r.search(t);return a>-1?e.backUp(r.length-a):(i=r.match(/<\/?$/))&&(e.backUp(r.length),e.match(t,!1)||e.match(r[0])),l}},r={html:function(e,o){return!o.inLiteral&&e.match(l.htmlHasLeftDelimeter,!1)?(o.tokenize=r.smarty,o.localMode=n,o.localState=n.startState(a.indent(o.htmlMixedState,"")),i.maybeBackup(e,t.leftDelimiter,n.token(e,o.localState))):a.token(e,o.htmlMixedState)},smarty:function(e,o){if(e.match(t.leftDelimiter,!1)){if(e.match(l.smartyComment,!1))return i.chain(e,o,r.inBlock("comment","*"+t.rightDelimiter))}else if(e.match(t.rightDelimiter,!1))return e.eat(t.rightDelimiter),o.tokenize=r.html,o.localMode=a,o.localState=o.htmlMixedState,"tag";return i.maybeBackup(e,t.rightDelimiter,n.token(e,o.localState))},inBlock:function(e,t){return function(l,r){for(;!l.eol();){if(l.match(t)){i.cleanChain(l,r,"");break}l.next()}return e}}},{startState:function(){var e=a.startState();return{token:r.html,localMode:null,localState:null,htmlMixedState:e,tokenize:null,inLiteral:!1}},copyState:function(e){var t=null,l=e.tokenize||e.token;return e.localState&&(t=CodeMirror.copyState(l!=r.html?n:a,e.localState)),{token:e.token,tokenize:e.tokenize,localMode:e.localMode,localState:t,htmlMixedState:CodeMirror.copyState(a,e.htmlMixedState),inLiteral:e.inLiteral}},token:function(e,i){if(e.match(t.leftDelimiter,!1)){if(!i.inLiteral&&e.match(l.literalOpen,!0))return i.inLiteral=!0,"keyword";if(i.inLiteral&&e.match(l.literalClose,!0))return i.inLiteral=!1,"keyword"}i.inLiteral&&i.localState!=i.htmlMixedState&&(i.tokenize=r.html,i.localMode=a,i.localState=i.htmlMixedState);var n=(i.tokenize||i.token)(e,i);return n},indent:function(e,t){return e.localMode==n||e.inLiteral&&!e.localMode||l.hasLeftDelimeter.test(t)?CodeMirror.Pass:a.indent(e.htmlMixedState,t)},electricChars:"/{}:",innerMode:function(e){return{state:e.localState||e.htmlMixedState,mode:e.localMode||a}}}},"htmlmixed"),CodeMirror.defineMIME("text/x-smarty","smartymixed");