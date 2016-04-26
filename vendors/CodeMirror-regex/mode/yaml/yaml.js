CodeMirror.defineMode("yaml",function(){var i=["true","false","on","off","yes","no"],e=new RegExp("\\b(("+i.join(")|(")+"))$","i");return{token:function(i,r){var t=i.peek(),n=r.escaped;if(r.escaped=!1,"#"==t)return i.skipToEnd(),"comment";if(r.literal&&i.indentation()>r.keyCol)return i.skipToEnd(),"string";if(r.literal&&(r.literal=!1),i.sol()){if(r.keyCol=0,r.pair=!1,r.pairStart=!1,i.match(/---/))return"def";if(i.match(/\.\.\./))return"def";if(i.match(/\s*-\s+/))return"meta"}if(!r.pair&&i.match(/^\s*([a-z0-9\._-])+(?=\s*:)/i))return r.pair=!0,r.keyCol=i.indentation(),"atom";if(r.pair&&i.match(/^:\s*/))return r.pairStart=!0,"meta";if(i.match(/^(\{|\}|\[|\])/))return"{"==t?r.inlinePairs++:"}"==t?r.inlinePairs--:"["==t?r.inlineList++:r.inlineList--,"meta";if(r.inlineList>0&&!n&&","==t)return i.next(),"meta";if(r.inlinePairs>0&&!n&&","==t)return r.keyCol=0,r.pair=!1,r.pairStart=!1,i.next(),"meta";if(r.pairStart){if(i.match(/^\s*(\||\>)\s*/))return r.literal=!0,"meta";if(i.match(/^\s*(\&|\*)[a-z0-9\._-]+\b/i))return"variable-2";if(0==r.inlinePairs&&i.match(/^\s*-?[0-9\.\,]+\s?$/))return"number";if(r.inlinePairs>0&&i.match(/^\s*-?[0-9\.\,]+\s?(?=(,|}))/))return"number";if(i.match(e))return"keyword"}return r.pairStart=!1,r.escaped="\\"==t,i.next(),null},startState:function(){return{pair:!1,pairStart:!1,keyCol:0,inlinePairs:0,inlineList:0,literal:!1,escaped:!1}}}}),CodeMirror.defineMIME("text/x-yaml","yaml");