CodeMirror.defineMode("jinja2",function(e,t){function n(e,t){var n=e.next();return"{"==n&&(n=e.eat(/\{|%|#/))?(e.eat("-"),t.tokenize=o(n),"tag"):void 0}function o(e){return"{"==e&&(e="}"),function(t,o){var i=t.next();return(i==e||"-"==i&&t.eat(e))&&t.eat("}")?(o.tokenize=n,"tag"):t.match(r)?"keyword":"#"==e?"comment":"string"}}var r=["block","endblock","for","endfor","in","true","false","loop","none","self","super","if","as","not","and","else","import","with","without","context"];return r=new RegExp("^(("+r.join(")|(")+"))\\b"),{startState:function(){return{tokenize:n}},token:function(e,t){return t.tokenize(e,t)}}});