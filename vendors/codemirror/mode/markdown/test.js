!function(){function e(e){test.mode(e,o,Array.prototype.slice.call(arguments,1))}var o=CodeMirror.getMode({tabSize:4},"markdown");e("plainText","foo"),e("trailingSpace1","foo "),e("trailingSpace2","foo[trailing-space-a  ][trailing-space-new-line  ]"),e("trailingSpace3","foo[trailing-space-a  ][trailing-space-b  ][trailing-space-new-line  ]"),e("trailingSpace4","foo[trailing-space-a  ][trailing-space-b  ][trailing-space-a  ][trailing-space-new-line  ]"),e("codeBlocksUsing4Spaces","    [comment foo]"),e("codeBlocksUsing4SpacesIndentation","    [comment bar]","        [comment hello]","            [comment world]","    [comment foo]","bar"),e("codeBlocksUsing4SpacesIndentation"," foo","    [comment bar]","        [comment hello]","    [comment world]"),e("codeBlocksUsing1Tab","	[comment foo]"),e("inlineCodeUsingBackticks","foo [comment `bar`]"),e("blockCodeSingleBacktick","[comment `]","foo","[comment `]"),e("unclosedBackticks","foo [comment `bar]"),e("doubleBackticks","[comment ``foo ` bar``]"),e("consecutiveBackticks","[comment `foo```bar`]"),e("consecutiveBackticks","[comment `foo```bar`] hello [comment `world`]"),e("unclosedBackticks","[comment ``foo ``` bar` hello]"),e("closedBackticks","[comment ``foo ``` bar` hello``] world"),e("atxH1","[header # foo]"),e("atxH2","[header ## foo]"),e("atxH3","[header ### foo]"),e("atxH4","[header #### foo]"),e("atxH5","[header ##### foo]"),e("atxH6","[header ###### foo]"),e("atxH6NotH7","[header ####### foo]"),e("setextH1","foo","[header =]"),e("setextH1","foo","[header ===]"),e("setextH2","foo","[header -]"),e("setextH2","foo","[header ---]"),e("blockquoteSpace","[atom > foo]"),e("blockquoteNoSpace","[atom >foo]"),e("blockquoteNoBlankLine","foo","[atom > bar]"),e("blockquoteSpace","[atom > foo]","[number > > foo]","[atom > > > foo]"),e("blockquoteThenParagraph","[atom >foo]","","bar"),e("multiBlockquoteLazy","[atom >foo]","[atom bar]"),e("multiBlockquoteLazyThenParagraph","[atom >foo]","[atom bar]","","hello"),e("multiBlockquote","[atom >foo]","[atom >bar]"),e("multiBlockquoteThenParagraph","[atom >foo]","[atom >bar]","","hello"),e("listAsterisk","foo","bar","","[variable-2 * foo]","[variable-2 * bar]"),e("listPlus","foo","bar","","[variable-2 + foo]","[variable-2 + bar]"),e("listDash","foo","bar","","[variable-2 - foo]","[variable-2 - bar]"),e("listNumber","foo","bar","","[variable-2 1. foo]","[variable-2 2. bar]"),e("listBogus","foo","1. bar","2. hello"),e("listAsteriskFormatting","[variable-2 * ][variable-2&em *foo*][variable-2  bar]","[variable-2 * ][variable-2&strong **foo**][variable-2  bar]","[variable-2 * ][variable-2&strong **][variable-2&em&strong *foo**][variable-2&em *][variable-2  bar]","[variable-2 * ][variable-2&comment `foo`][variable-2  bar]"),e("listPlusFormatting","[variable-2 + ][variable-2&em *foo*][variable-2  bar]","[variable-2 + ][variable-2&strong **foo**][variable-2  bar]","[variable-2 + ][variable-2&strong **][variable-2&em&strong *foo**][variable-2&em *][variable-2  bar]","[variable-2 + ][variable-2&comment `foo`][variable-2  bar]"),e("listDashFormatting","[variable-2 - ][variable-2&em *foo*][variable-2  bar]","[variable-2 - ][variable-2&strong **foo**][variable-2  bar]","[variable-2 - ][variable-2&strong **][variable-2&em&strong *foo**][variable-2&em *][variable-2  bar]","[variable-2 - ][variable-2&comment `foo`][variable-2  bar]"),e("listNumberFormatting","[variable-2 1. ][variable-2&em *foo*][variable-2  bar]","[variable-2 2. ][variable-2&strong **foo**][variable-2  bar]","[variable-2 3. ][variable-2&strong **][variable-2&em&strong *foo**][variable-2&em *][variable-2  bar]","[variable-2 4. ][variable-2&comment `foo`][variable-2  bar]"),e("listParagraph","[variable-2 * foo]","","[variable-2 * bar]"),e("listMultiParagraph","[variable-2 * foo]","","[variable-2 * bar]","","    [variable-2 hello]"),e("listMultiParagraphExtra","[variable-2 * foo]","","[variable-2 * bar]","","","    [variable-2 hello]"),e("listMultiParagraphExtraSpace","[variable-2 * foo]","","[variable-2 * bar]","","     [variable-2 hello]","","    [variable-2 world]"),e("listTab","[variable-2 * foo]","","[variable-2 * bar]","","	[variable-2 hello]"),e("listNoIndent","[variable-2 * foo]","","[variable-2 * bar]","","hello"),e("blockquote","[variable-2 * foo]","","[variable-2 * bar]","","    [variable-2&atom > hello]"),e("blockquoteCode","[variable-2 * foo]","","[variable-2 * bar]","","        [comment > hello]","","    [variable-2 world]"),e("blockquoteCodeText","[variable-2 * foo]","","    [variable-2 bar]","","        [comment hello]","","    [variable-2 world]"),e("listAsteriskNested","[variable-2 * foo]","","    [variable-3 * bar]"),e("listPlusNested","[variable-2 + foo]","","    [variable-3 + bar]"),e("listDashNested","[variable-2 - foo]","","    [variable-3 - bar]"),e("listNumberNested","[variable-2 1. foo]","","    [variable-3 2. bar]"),e("listMixed","[variable-2 * foo]","","    [variable-3 + bar]","","        [keyword - hello]","","            [variable-2 1. world]"),e("listBlockquote","[variable-2 * foo]","","    [variable-3 + bar]","","        [atom&variable-3 > hello]"),e("listCode","[variable-2 * foo]","","    [variable-3 + bar]","","            [comment hello]"),e("listCodeIndentation","[variable-2 * foo]","","        [comment bar]","            [comment hello]","                [comment world]","        [comment foo]","    [variable-2 bar]"),e("listNested","[variable-2 * foo]","","    [variable-3 * bar]","","       [variable-2 hello]"),e("listNested","[variable-2 * foo]","","    [variable-3 * bar]","","      [variable-3 * foo]"),e("listCodeText","[variable-2 * foo]","","        [comment bar]","","hello"),e("hrSpace","[hr * * *]"),e("hr","[hr ***]"),e("hrLong","[hr *****]"),e("hrSpaceDash","[hr - - -]"),e("hrDashLong","[hr ---------------------------------------]"),e("linkTitle",'[link [[foo]]][string (http://example.com/ "bar")] hello'),e("linkNoTitle","[link [[foo]]][string (http://example.com/)] bar"),e("linkImage","[link [[][tag ![[foo]]][string (http://example.com/)][link ]]][string (http://example.com/)] bar"),e("linkEm","[link [[][link&em *foo*][link ]]][string (http://example.com/)] bar"),e("linkStrong","[link [[][link&strong **foo**][link ]]][string (http://example.com/)] bar"),e("linkEmStrong","[link [[][link&strong **][link&em&strong *foo**][link&em *][link ]]][string (http://example.com/)] bar"),e("imageTitle",'[tag ![[foo]]][string (http://example.com/ "bar")] hello'),e("imageNoTitle","[tag ![[foo]]][string (http://example.com/)] bar"),e("imageAsterisks","[tag ![[*foo*]]][string (http://example.com/)] bar"),e("notALink","[[foo]] (bar)"),e("linkReference","[link [[foo]]][string [[bar]]] hello"),e("linkReferenceEm","[link [[][link&em *foo*][link ]]][string [[bar]]] hello"),e("linkReferenceStrong","[link [[][link&strong **foo**][link ]]][string [[bar]]] hello"),e("linkReferenceEmStrong","[link [[][link&strong **][link&em&strong *foo**][link&em *][link ]]][string [[bar]]] hello"),e("linkReferenceSpace","[link [[foo]]] [string [[bar]]] hello"),e("linkReferenceDoubleSpace","[[foo]]  [[bar]] hello"),e("linkImplicit","[link [[foo]]][string [[]]] hello"),e("labelNoTitle","[link [[foo]]:] [string http://example.com/]"),e("labelIndented","   [link [[foo]]:] [string http://example.com/]"),e("labelSpaceTitle",'[link [[foo bar]]:] [string http://example.com/ "hello"]'),e("labelDoubleTitle",'[link [[foo bar]]:] [string http://example.com/ "hello"] "world"'),e("labelTitleDoubleQuotes",'[link [[foo]]:] [string http://example.com/  "bar"]'),e("labelTitleSingleQuotes","[link [[foo]]:] [string http://example.com/  'bar']"),e("labelTitleParenthese","[link [[foo]]:] [string http://example.com/  (bar)]"),e("labelTitleInvalid","[link [[foo]]:] [string http://example.com/] bar"),e("labelLinkAngleBrackets",'[link [[foo]]:] [string <http://example.com/>  "bar"]'),e("labelTitleNextDoubleQuotes","[link [[foo]]:] [string http://example.com/]",'[string "bar"] hello'),e("labelTitleNextSingleQuotes","[link [[foo]]:] [string http://example.com/]","[string 'bar'] hello"),e("labelTitleNextParenthese","[link [[foo]]:] [string http://example.com/]","[string (bar)] hello"),e("labelTitleNextMixed","[link [[foo]]:] [string http://example.com/]",'(bar" hello'),e("linkWeb","[link <http://example.com/>] foo"),e("linkWebDouble","[link <http://example.com/>] foo [link <http://example.com/>]"),e("linkEmail","[link <user@example.com>] foo"),e("linkEmailDouble","[link <user@example.com>] foo [link <user@example.com>]"),e("emAsterisk","[em *foo*] bar"),e("emUnderscore","[em _foo_] bar"),e("emInWordAsterisk","foo[em *bar*]hello"),e("emInWordUnderscore","foo[em _bar_]hello"),e("emEscapedBySpaceIn","foo [em _bar _ hello_] world"),e("emEscapedBySpaceOut","foo _ bar[em _hello_]world"),e("emIncompleteAsterisk","foo [em *bar]"),e("emIncompleteUnderscore","foo [em _bar]"),e("strongAsterisk","[strong **foo**] bar"),e("strongUnderscore","[strong __foo__] bar"),e("emStrongAsterisk","[em *foo][em&strong **bar*][strong hello**] world"),e("emStrongUnderscore","[em _foo][em&strong __bar_][strong hello__] world"),e("emStrongMixed","[em _foo][em&strong **bar*hello__ world]"),e("emStrongMixed","[em *foo][em&strong __bar_hello** world]"),e("escapeBacktick","foo \\`bar\\`"),e("doubleEscapeBacktick","foo \\\\[comment `bar\\\\`]"),e("escapeAsterisk","foo \\*bar\\*"),e("doubleEscapeAsterisk","foo \\\\[em *bar\\\\*]"),e("escapeUnderscore","foo \\_bar\\_"),e("doubleEscapeUnderscore","foo \\\\[em _bar\\\\_]"),e("escapeHash","\\# foo"),e("doubleEscapeHash","\\\\# foo"),e("taskList","[variable-2 * [ ]] bar]"),e("fencedCodeBlocks","[comment ```]","foo","[comment ```]")}();