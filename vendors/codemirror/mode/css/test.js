!function(){function r(r){test.mode(r,o,Array.prototype.slice.call(arguments,1))}var o=CodeMirror.getMode({tabSize:4},"css");r("atMediaEmpty","[def @media] [error {] }"),r("atMediaMultiple","[def @media] [keyword not] [attribute screen] [operator and] ([property color]), [keyword not] [attribute print] [operator and] ([property color]) { }"),r("atMediaCheckStack","[def @media] [attribute screen] { } [tag foo] { }"),r("atMediaCheckStack","[def @media] [attribute screen] ([property color]) { } [tag foo] { }"),r("atMediaPropertyOnly","[def @media] ([property color]) { } [tag foo] { }"),r("atMediaCheckStackInvalidAttribute","[def @media] [attribute&error foobarhello] { [tag foo] { } }"),r("atMediaCheckStackInvalidAttribute","[def @media] [attribute&error foobarhello] { } [tag foo] { }"),r("atMediaInvalidAttribute","[def @media] [attribute&error foobarhello] { }"),r("atMediaInvalidAnd","[def @media] [error and] [attribute screen] { }"),r("atMediaInvalidNot","[def @media] [attribute screen] [error not] ([error not]) { }"),r("atMediaInvalidOnly","[def @media] [attribute screen] [error only] ([error only]) { }"),r("atMediaUnknownType","[def @media] [attribute screen] [operator and] [error foobarhello] { }"),r("atMediaInvalidType","[def @media] [attribute screen] [operator and] [error color] { }"),r("atMediaInvalidProperty","[def @media] [attribute screen] [operator and] ([error print]) { }"),r("atMediaUnknownProperty","[def @media] [attribute screen] [operator and] ([property&error foobarhello]) { }"),r("atMediaMaxWidthNested","[def @media] [attribute screen] [operator and] ([property max-width][operator :] [number 25px]) { [tag foo] { } }"),r("tagSelector","[tag foo] { }"),r("classSelector","[qualifier .foo-bar_hello] { }"),r("idSelector","[builtin #foo] { [error #foo] }"),r("tagSelectorUnclosed","[tag foo] { [property margin][operator :] [number 0] } [tag bar] { }"),r("tagStringNoQuotes","[tag foo] { [property font-family][operator :] [variable-2 hello] [variable-2 world]; }"),r("tagStringDouble",'[tag foo] { [property font-family][operator :] [string "hello world"]; }'),r("tagStringSingle","[tag foo] { [property font-family][operator :] [string 'hello world']; }"),r("tagColorKeyword","[tag foo] {[property color][operator :] [keyword black];[property color][operator :] [keyword navy];[property color][operator :] [keyword yellow];}"),r("tagColorHex3","[tag foo] { [property background][operator :] [atom #fff]; }"),r("tagColorHex6","[tag foo] { [property background][operator :] [atom #ffffff]; }"),r("tagColorHex4","[tag foo] { [property background][operator :] [atom&error #ffff]; }"),r("tagColorHexInvalid","[tag foo] { [property background][operator :] [atom&error #ffg]; }"),r("tagNegativeNumber","[tag foo] { [property margin][operator :] [number -5px]; }"),r("tagPositiveNumber","[tag foo] { [property padding][operator :] [number 5px]; }"),r("tagVendor","[tag foo] { [meta -foo-][property box-sizing][operator :] [meta -foo-][string-2 border-box]; }"),r("tagBogusProperty","[tag foo] { [property&error barhelloworld][operator :] [number 0]; }"),r("tagTwoProperties","[tag foo] { [property margin][operator :] [number 0]; [property padding][operator :] [number 0]; }"),r("tagTwoPropertiesURL","[tag foo] { [property background][operator :] [string-2 url]([string //example.com/foo.png]); [property padding][operator :] [number 0]; }"),r("commentSGML","[comment <!--comment-->]")}();