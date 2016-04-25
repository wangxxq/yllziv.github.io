var vimTaskArray = [];
vimTaskArray[0] = '移动光标\n' +
  '单位级\n' +
  'h 向左一字符\n' +
  'j 下一行\n' +
  'k 上一行\n' +
  'l 向右一字符\n' +
  '单词级\n' +
  'w or W 向右移动到下一单词开头\n' +
  'e or E 向右移动到单词结尾\n' +
  'b or B 向左移动到单词开头\n' +
  '注意：所有小写单词都是以分词符作为单词界限，大写字母以空格作为界限\n' +
  '在下面字符块中感受一下各种移动吧！\n' +
  'This project\'s GitHub url is https://github.com/dofy/learn-vim\n' +
  'Please clone it to your local folder and open the first file which is\n' +
  'named file-one.md via following command "vim file-one.md"\n' +
  'and welcome to http://geekpark.net :)\n' +
  '块级\n' +
  'gg 到文档第一行\n' +
  'G 到文档最后一行\n' +
  '0 到行首（第 1 列）\n' +
  '^ 到第一个非空白字符\n' +
  '$ 到行尾\n' +
  'Ctrl-d 向下移动半页\n' +
  'Ctrl-u 向上移动半页\n' +
  'Ctrl-f 向下移动一页\n' +
  'Ctrl-b 向上移动一页\n' +
  ':<N> or <N>gg 跳转到第 N 行\n' +
  ':+<N> or <N>j 向下跳 N 行\n' +
  ':-<N> or <N>k 向上跳 N 行\n' +
  '注意：所有命令前都可以加一个数字 N，表示对后面的命令执行 N 次，例如你想向下移动 3 行，除了 可以用 :+3 之外，还可以用 3j 来实现同样的效果。另外，上面实际上有两种命令：一种是键入后 立即执行的，比如 gg；还有一种是先输入 : 的（后面还会出现先按 / 的），这类命令需要在 输入完成后按回车执行，后面的教程中也是一样。\n' +
  '现在你可以在当前文件中畅游了，当你熟悉了各种移动操作后就可以通过 G 定位到当前文档到最后 一行，按照提示进入下一章了。'

vimTaskArray[1] = '打开文件\n' +
  '哈，现在你已经在无意间学会了一种在 vim 中打开文件的方式，虽然这种方式并不是最常用的，但却是最 直接的，尤其是当你的代码中 include 了某文件时，下面介绍另外两种常用的打开方式。\n' +
  '在 vim 中打开文件\n' +
  ':e <filename> 打开名为 filename 的文件，若文件不存在则创建之\n' +
  ':Ex 在 vim 中打开目录树，光标选中后回车打开对应文件（提示：- 进入上级目录）\n' +
  '查找\n' +
  '文档内查找\n' +
  '* 向后查找光标当前所在单词\n' +
  '# 向前查找光标当前所在单词\n' +
  '/<search> 向后查找指定字符串\n' +
  '?<search> 向前查找指定字符串\n' +
  'n 继续查找下一个\n' +
  'N 继续查找上一个\n' +
  '注意： n 和 N 是有方向性的，若你之前通过 * 查找，则 n 会继续向文档尾方向查找，N 向文档首方向；反之，若你通过 # 查找，则 n 指向文档首，N 指向文档尾\n' +
  '行内查找\n' +
  'f<X> 当前行内向行尾方向查找并定位到字符 X\n' +
  't<X> 当前行内向行尾方向查找并定位到字符 X 之前\n' +
  'F<X> 当前行内向行首方向查找并定位到字符 X\n' +
  'T<X> 当前行内向行首方向查找并定位到字符 X 之后\n' +
  '; 继续向当前方向查找下一个字符\n' +
  ', 向当前相反方向查找下一个字符\n' +
  '当前文档中有几个 “vim” 单词，你可以尝试用 * 和 # 进行查找并感受 n 和 N 的方向性。\n' +
  '上面的 “注意” 中有几个字符 "n"，你可以在那试试行内查找并感受下 ; 和 , 的方向性。\n' +
  '匹配查找\n' +
  'vim 中可以使用 % 对 ( 和 )，[ 和 ]，{ 和 } 进行匹配查找，当光标位于其中一个 符号上时，按下 %，光标会跳到与之匹配的另外一个符号上。\n' +
  '在下列文本中的 ()[]{} 字符上按 % 看看效果，连续多按几次。\n' +
  '(function(win, doc) {\n' +
  '    var n = ((1 + 2) * (3 + 4)) / 7;\n' +
  '    var a = [1, 2, 3, 4, 5, 6, 7];\n' +
  '    var f = function(b) {\n' +
  '        if(b) {\n' +
  '            return false;\n' +
  '        } else {\n' +
  '            return true;\n' +
  '        }\n' +
  '    };\n' +
  '})(window, document);\n' +
  '下一章将介绍文档的修改，在这之前先简单介绍一下 vim 的 buffer，简单理解 buffer 就是当前 vim session 的文件历史记录。\n' +
  '现在你的 buffer 中应该已经有两个文件了，你可以用 :buffers 或 :ls 命令查看，看到 buffer 列表了吧，大概是这个样子的：\n' +
  ':ls\n' +
  '  1 #h   "file-one.md"                  line 47\n' +
  '  2 %a   "file-two.md"                  line 1\n' +
  'Press ENTER or type command to continue\n' +
  '接下来你可以尝试通过以下命令在文件缓存中进行跳转了\n' +
  ':bn 打开缓存中下一个文件\n' +
  ':bp 打开缓存中上一个文件\n' +
  ':b<N> 打开缓存中第 N 个文件\n' +
  '你也可以使用 :bdelete<N> 来删除所要关闭的缓冲区，缩写 :bd<N>。'


vimTaskArray[2] = '修改文档\n' +
  '你现在已经学会了控制光标、打开文件、切换文件、并在文件中查找内容，这些操作都是在 vim 的 normal 模式下进行的。现在，是时候进入 vim 的另外一种模式 —— insert 模式，学习一下如何修改文件了。\n' +
  '插入\n' +
  'i 当前字符前插入\n' +
  'a 当前字符后插入\n' +
  'I 行首插入\n' +
  'A 行尾插入\n' +
  'o 在下一行插入\n' +
  'O 在上一行插入\n' +
  '注意：以上任何一个命令都会使 vim 进入 insert 模式，进入该模式后光标会发生变化，这时输入的 文字会直接出现在文档中，按 Esc 键退出 insert 模式。\n' +
  '删除、复制、粘贴、合并\n' +
  'x 删除当前字符，相当于 insert 模式下的 Delete\n' +
  'X 删除前一个字符，相当于 insert 模式下的 Backspace\n' +
  'dd 删除当前行，并将删除的内容保存的 vim 剪贴板\n' +
  'yy 复制当前行到 vim 剪贴板\n' +
  'd<X> 删除指定内容并保存到 vim 剪贴板\n' +
  'y<X> 复制指定内容并保存到 vim 剪贴板\n' +
  'c<X> 删除指定内容并保存到 vim 剪贴板，同时进入 insert 模式\n' +
  'p 在当前位置后粘贴\n' +
  'P 在当前位置前粘贴\n' +
  'J 将当前行与下一行合并\n' +
  '说明： <X> 部分是对操作内容的描述，如果要删除一个单词，就输入 dw 或者 de，要复制当前 位置到行尾的内容，就输入 y$，要删除后面 3 个字符并插入，就输入 c3l 诸如此类。\n' +
  '尝试在下面的文本中进行复制粘贴练习\n' +
  '删除这一行\n' +
  '粘贴到这一行下面\n' +
  '剪切 ABC 并把它粘贴到 XYZ 前面，使这部分内容看起来像\n' +
  '剪切 并把它粘贴到 ABC XYZ 前面。\n' +
  '替换\n' +
  'r<X> 将当前字符替换为 X\n' +
  'gu<X> 将指定的文本转换为小写\n' +
  'gU<X> 将指定的文本转换为大写\n' +
  ':%s/<search>/<replace>/ 查找 search 内容并替换为 replace 内容\n' +
  '尝试修改下列文本的大小写\n' +
  'Change this line to UPPERCASE, THEN TO lowercase.\n' +
  '还有个更好玩的命令 g~<X>，先将光标定位到上面那行文本，执行 0g~$ 看看发生了什么。\n' +
  '撤销、重做\n' +
  'u 撤销\n' +
  'Ctrl-r 重做\n' +
  '保存文件\n' +
  ':w 保存当前文件\n' +
  ':wa 保存全部文件\n' +
  ':wq or ZZ 保存并退出\n' +
  ':q! 强制退出，不保存\n' +
  ':saveas <new filename> 文件另存为'


vimTaskArray[3] = '一些小技巧\n' +
  '简单设置 vim\n' +
  '“工欲善其事，必先利其器”。尽管 vim 非常强大，但默认配置的 vim 看起来还是比较朴素的，为了适合 我们的开发需求，要对 vim 进行一些简单的配置。\n' +
  ':set number 显示行号\n' +
  ':set relativenumber 显示相对行号（这个非常重要，慢慢体会）\n' +
  ':set hlsearch 搜索结果高亮\n' +
  ':set autoindent 自动缩进\n' +
  ':set smartindent 智能缩进\n' +
  ':set tabstop=4 设置 tab 制表符所占宽度为 4\n' +
  ':set softtabstop=4 设置按 tab 时缩进的宽度为 4\n' +
  ':set shiftwidth=4 设置自动缩进宽度为 4\n' +
  ':set expandtab 缩进时将 tab 制表符转换为空格\n' +
  ':filetype on 开启文件类型检测\n' +
  ':syntax on 开启语法高亮\n' +
  '这里列出的是命令，你可以通过在 vim 中输入进行设置，但这种方式设置的参数只在本次关闭 vim 前生效， 如果你退出 vim 再打开，之前的设置就失效了。\n' +
  '若要永久生效，需要修改 vim 的一个自动配置文件，一般文件路径是 /home/<user>/.vimrc（Linux 系统）或 /Users/<user>/.vimrc（Mac OS 系统）\n' +
  '如果没有就新建一个，以 Mac OS 系统为例：\n' +
  '在控制台执行如下命令，每行结尾记得回车\n' +
  'cd ~\n' +
  'vim .vimrc\n' +
  '现在你已经在 vim 中打开了你的 vim 专属配置文件，将上面提到的配置复制到你的文件中，记得要删除 每行开头的 :\n' +
  '修改完成执行 :wq 或者 ZZ 保存退出，再次进入 vim 时，你的这些配置就已经生效了\n' +
  '当然，机智如我也为你准备好了一份 vimrc-demo 文件，你可以在控制台执行 cp vimrc-demo ~/.vimrc 直接使用，再次启动 vim 你的配置就应该生效了。\n' +
  '清除搜索高亮\n' +
  '前面提到的配置中，有一项是高亮全部搜索结果 :set hlsearch，其作用是当你执行 / 、?、* 或 # 搜索后高亮所有匹配结果。\n' +
  '如果你已经设置了这个选项，尝试执行 /set\n' +
  '看到效果了吧，搜索结果一目了然，但这有时候也是一种困扰，因为知道搜索结果后高亮就没用了，但高亮 本人并不这样认为，它会一直高亮下去，直到你用 :set nohlsearch 将其关闭。\n' +
  '但这样需要就打开，不需要就关闭也不是个办法，有没有更好的解决方案呢？当然！请看下面的终极答案：\n' +
  '再搜一个不存在的字符串\n' +
  '通常我用来清除搜索高亮的命令是 /lfw，一是因为 lfw 这个组合一般不会出现（不适用于 本文档...），二是这三个字母的组合按起来比较舒服，手指基本不需要怎么移动（你感受一下）。\n' +
  '重复上一次命令\n' +
  'vim 有一个特殊的命令 .，你可以用它重复执行上一个命令。\n' +
  '按下面的说明进行操作\n' +
  '按 dd 删除本行\n' +
  '按 . 重复删除操作\n' +
  '2. 再删除两行\n' +
  '这行也没了\n' +
  'p 把刚才删掉的粘回来\n' +
  '3. 又多出 6 行\n' +
  '缩进\n' +
  '>> 向右缩进当前行\n' +
  '<< 向左缩进当前行\n' +
  '在这一行上依次按 3>>，<< 和 <G 看看效果\n' +
  '打酱油行\n' +
  '自动排版\n' +
  '== 自动排版当前行\n' +
  'gg=G 当前文档全文自动排版\n' +
  '<N>== 对从当前行开始的 N 行进行自动排版\n' +
  '=<N>j 对当前行以及向下 N 行进行自动排版\n' +
  '=<N>k 对当前行以及向上 N 行进行自动排版\n' +
  '另外，还可以利用第二章中提到的匹配搜索对代码块进行批量排版，尝试用 gf 命令打开 file-four-demo.js 按照里面的说明进行操作\n' +
  '如果智能缩进设置生效了，执行后会看到如第二章中一样的排版效果。'



vimTaskArray[4] = '窗口分屏\n' +
  '工作中经常会遇到这种情况，就是需要参照其他文档编辑当前文档（场景：翻译），或者从另外一个文档 copy 代码到当前文档（场景：复制 html 元素类名到 css 文档），这时候就是你最需要分屏的时候。\n' +
  '分屏方式\n' +
  ':split 缩写 :sp or Ctrl-w s 上下分屏\n' +
  ':vsplit 缩写 :vs or Ctrl-w v 左右分屏\n' +
  ':diffsplit 缩写 :diffs diff 模式打开一个分屏，后面可以加上\n' +
  '窗口跳转\n' +
  'Ctrl-w w 激活下一个窗口\n' +
  'Ctrl-w j 激活下方窗口\n' +
  'Ctrl-w k 激活上方窗口\n' +
  'Ctrl-w h 激活左侧窗口\n' +
  'Ctrl-w l 激活右侧窗口\n' +
  '屏幕缩放\n' +
  'Ctrl-w = 平均窗口尺寸\n' +
  'Ctrl-w + 增加高度\n' +
  'Ctrl-w - 缩减高度\n' +
  'Ctrl-w _ 最大高度\n' +
  'Ctrl-w > 增加宽度\n' +
  'Ctrl-w < 缩减宽度\n' +
  'Ctrl-w | 最大宽度\n' +
  '实践！实践！实践！\n' +
  '标签页\n' +
  '第二章中提到过的 buffer 和刚刚讲到的分屏操作都很适合在少量文件之间进行切换， 文件超过 3 个我觉得就不方便了，而标签页则更适合多文件之间的切换。\n' +
  '创建标签页\n' +
  ':tabnew or :tabedit 缩写 :tabe 打开新标签页\n' +
  'Ctrl-w gf 在新标签页中打开当前光标所在位置的文件名\n' +
  '注意：:tabnew 和 :tabedit 后面都可以跟一个 <空格><文件名> 用以在新标签页中 打开指定文件，还可以在 : 后面加一个数字，指出新标签页在列表中的位置（从 0 开始）。\n' +
  '切换标签页\n' +
  'gt or :tabnext 缩写 :tabn 下一个标签页（最后一个会循环到第一个）\n' +
  'gT or :tabprevious 缩写 :tabp 上一个标签页（第一个会循环到最后一个）\n' +
  ':tabrewind 缩写 :tabr or :tabfirst 缩写 :tabfir 到第一个\n' +
  ':tablast 缩写 :tabl 到最后一个标签页\n' +
  '关闭标签页\n' +
  ':tabclose 缩写 :tabc 关闭当前标签页\n' +
  ':-tabc 关闭上一个标签页\n' +
  ':+tabc 关闭下一个标签页\n' +
  ':tabonly 缩写 :tabo 关闭其他标签页'



vimTaskArray[5] = '块操作\n' +
  '我们经常会遇到这种情况：某处有一个多行文本，我们要把他复制到代码中用来初始化一个数组。 大部分 时候我们会这么做：\n' +
  '写好数组声明；\n' +
  '把内容复制到中括号内（大概长成下面那段文本的样子）\n' +
  '然后行首加 \' 行尾加 \',，重复直到最后一行（想象一下这段文本有50行）\n' +
  '有了 vim 块操作就不用这么麻烦了，按 014gg，然后跟着选中那一行的指示操作。\n' +
  'var myArray = [\n' +
  'Ctrl-v 进入块操作，$ 到行尾，j 到下一行（做！）。输入 <单引号><逗号><Esc> 完成第一步，继续。\n' +
  '按 j 到下一行\n' +
  '下面还好多行，干脆来个 4j 多跳几行\n' +
  'http://www.geekpark.net\n' +
  'http://www.geekpark.net\n' +
  '以后看好行号再跳！现在按 A 插入\n' +
  '// Oops... 跳多了，没事，按 k 回到上一行\n' +
  '];\n' +
  '现在已经完成了第一步，还需要补前面的 \'，按 14gg 回到那一行，再操作一次，但是这次有三个 地方要变化一下：\n' +
  '第一行按 $ 时改按 0，因为这次要在行首插入；\n' +
  '末行按 A 时改按 I，块操作中 A 是字符后插入， I 是字符前插入；\n' +
  '最后按 <单引号><Esc>。\n' +
  '最后再做些收尾工作，19gg$x 删掉最后一行结尾处的 ,，然后 14gg7== 把代码缩进一下。\n' +
  'Done!\n' +
  '注意：选择行首行尾的操作也可以在选择完要处理的内容之后执行，即 Ctrl-v jjj$\',<Esc>'



vimTaskArray[6] = 'vim 中的宏\n' +
  '宏操作在 vim 中（甚至任何编辑器中）属于比较复杂的操作了，如果前面的内容都已经掌握了，那么你 已经可以算是一个 vim 高手了，所以，这位高手，我们不妨再来进阶一下吧。\n' +
  '还记得上一章中把文本转成数组的例子吧，我们还做同样的事，不过这次是用宏来操作。\n' +
  '12gg 跳转到准备开始处理的起始行，按指示进行操作，先看效果后解释。\n' +
  'var myArray = [\n' +
  '按 qa 开启宏录制，前方高能，连续按 I<单引号><Esc>A<单引号><逗号><Esc>jq7@a\n' +
  '我也要\n' +
  '我也要\n' +
  '我也要\n' +
  '我也要\n' +
  '我也要\n' +
  '我也要\n' +
  '我也要\n' +
  '];\n' +
  'OMG! 发生了什么，有没有惊出一身冷汗，之前两次块操作的结果瞬间就完成了，最后再简单做些收尾工作， 去掉最后一行的逗号，集体缩进一下，搞定！\n' +
  '下面来解释一下刚才的操作：\n' +
  'q 是开启录制宏，a 是给这次宏的录制过程一个存储位置，可以是 0-9 或 a-z；\n' +
  '然后 I<单引号><Esc>A<单引号><逗号><Esc>j 是你这次录制的整个宏的操作过程，意思就是行首 插入单引号，行尾插入单引号和逗号，跳到下一行；\n' +
  '接下来的 q 是结束本次宏的录制；\n' +
  '@ 是唤起宏，a 是要唤起的宏的名字（存储位置），前面的 7 你应该明白吧，就是执行 7 次。\n' +
  'Tips：@@ 再次唤起最后一次执行的宏。'

vimTaskArray[7] = '<!DOCTYPE html>\n' +
  '<html>\n' +
  '    <meta charset="utf-8">\n' +
  '    <head>\n' +
  '      <link href="assets/css/bootstrap.min.css" rel="stylesheet" />\n' +
  '      <link rel="stylesheet" type="text/css" href="assets/css/styles.css" />\n' +
  '      <link href="//cdn-images.mailchimp.com/embedcode/slim-081711.css" rel="stylesheet" type="text/css">\n' +
  '      <title>Code Is Beautiful!</title>\n' +
  '    </head>\n' +
  '    <body>\n' +
  '        <nav class="navbar navbar-inverse navbar-fixed-top">\n' +
  '          <div class="container">\n' +
  '            <div class="navbar-header">\n' +
  '              <a class="navbar-brand" href="#">Code is beautiful!</a>\n' +
  '            </div>\n' +
  '            <div id="navbar" class="navbar-collapse collapse">\n' +
  '                <form action="//quantifiedcode.us8.list-manage.com/subscribe/post?u=effb5c0618b377e47329ca7ba&amp;id=0eb810e227" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate navbar-form navbar-right" target="_blank" novalidate>\n' +
  '                    <div id="mc_embed_signup_scroll">\n' +
  '                      <input type="email" value="" name="EMAIL" class="email form-control" id="mce-EMAIL" placeholder="Email address" required>\n' +
  '                      <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->\n' +
  '                      <div style="position: absolute; left: -5000px;">\n' +
  '                        <input type="text" name="b_effb5c0618b377e47329ca7ba_0eb810e227" tabindex="-1" value="">\n' +
  '                      </div>\n' +
  '                      <input type="submit" value="Subscribe to our newsletter" name="subscribe" id="mc-embedded-subscribe" class="btn btn-success">\n' +
  '                    </div>\n' +
  '                </form>\n' +
  '            </div><!--/.navbar-collapse -->\n' +
  '          </div>\n' +
  '        </nav>\n' +
  '        <!-- Main jumbotron for a primary marketing message or call to action -->\n' +
  '        <div class="jumbotron">\n' +
  '          <div class="container">\n' +
  '            <div class="row">\n' +
  '              <div class="col-md-6">\n' +
  '                <h1>Code is beautiful!</h1>\n' +
  '                <p>At <a href="https://www.quantifiedcode.com">QuantifiedCode</a>, we help development teams write better code—through data. On our <a href="https://www.quantifiedcode.com"> free code analysis platform</a>, we use visualizations, to make code better understandable for developers and business people. Creating great visualizations can be challenging though. With this project, we want to change that by providing an <strong>open-source collection</strong> of useful and engaging source code visualizations. They are all realized with either <strong>D3</strong> or <strong>Three.js</strong> and are provided under an <strong>Affero GPL</strong> license. You can freely reuse them in your own projects. If you like to see a visualization of your own project, check out our <a href="https://www.quantifiedcode.com">free service</a>.\n' +
  '                <p>\n' +
  '                    Please feel free to <strong><a href="https://github.com/quantifiedcode/code-is-beautiful">contribute</a></strong> your own visualizations.\n' +
  '                </p>\n' +
  '                <p><a class="btn btn-primary btn-lg" href="https://www.quantifiedcode.com/app/code-is-beautiful" role="button">Live demo</a> <a class="btn btn-default btn-lg" href="https://github.com/quantifiedcode/code-is-beautiful" role="button">Github</a></p>\n' +
  '              </div>\n' +
  '              <div class="col-md-6">\n' +
  '                <div class="text-right">\n' +
  '                  <a href="https://twitter.com/share" class="twitter-share-button" data-text="#CodeIsBeautiful!" data-via="quantifiedcode" data-size="small" data-hashtags="codeisbeautiful">Tweet</a>\n' +
  '                  <script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?\'http\':\'https\';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+\'://platform.twitter.com/widgets.js\';fjs.parentNode.insertBefore(js,fjs);}}(document, \'script\', \'twitter-wjs\');</script>\n' +
  '                  <a href="https://twitter.com/quantifiedcode" class="twitter-follow-button" data-show-count="false" data-size="small" data-show-screen-name="false">Follow @quantifiedcode</a>\n' +
  '                  <script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?\'http\':\'https\';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+\'://platform.twitter.com/widgets.js\';fjs.parentNode.insertBefore(js,fjs);}}(document, \'script\', \'twitter-wjs\');</script>\n' +
  '                  <iframe src="https://ghbtns.com/github-btn.html?user=quantifiedcode&repo=code-is-beautiful&type=star&count=true&size=small" frameborder="0" scrolling="0" width="160px" height="20px"></iframe>\n' +
  '                </div>\n' +
  '                <img src="assets/images/code_city_large.png" class="bg hidden-sm hidden-xs">\n' +
  '              </div>\n' +
  '            </div>\n' +
  '          </div>\n' +
  '        </div>\n' +
  '        <div class="container">\n' +
  '          <!-- Example row of columns -->\n' +
  '          <hr />\n' +
  '          <h3>Visualizations</h3>\n' +
  '          <p class="lead">To add your own visualization, <a href="http://github.com/quantifiedcode/code-is-beautiful">fork</a> the repository and create a pull request.</p>\n' +
  '          <div class="row">\n' +
  '            <div class="col-md-4 text-center">\n' +
  '              <h2>Code City</h2>\n' +
  '              <p><a href="code-city"><img class="thumb" src="assets/images/code_city.png" width="100%"/></a></p>\n' +
  '              <br/>\n' +
  '              <p>\n' +
  '                <a class="btn btn-primary btn-lg" href="https://www.quantifiedcode.com/app/code-is-beautiful" role="button">Live demo</a>\n' +
  '                <a class="btn btn-default btn-lg  margin-left-10" href="code-city/index.html" role="button">Details</a>\n' +
  '              </p>\n' +
  '            </div>\n' +
  '            <div class="col-md-4 text-center">\n' +
  '              <h2>Sunburst</h2>\n' +
  '              <p><a href="sunburst"><img class="thumb" src="assets/images/sunburst.png" width="100%"/></a></p>\n' +
  '              <br/>\n' +
  '              <p>\n' +
  '                  <a class="btn btn-primary btn-lg" href="https://www.quantifiedcode.com/app/code-is-beautiful" role="button">Live demo</a>\n' +
  '                  <a class="btn btn-default btn-lg margin-left-10" href="sunburst/index.html" role="button">Details</a>\n' +
  '              </p>\n' +
  '           </div>\n' +
  '            <div class="col-md-4 text-center">\n' +
  '              <h2>Stack</h2>\n' +
  '              <p><a href="stack"><img class="thumb" src="assets/images/stack.png" width="100%"/></a></p>\n' +
  '              <br/>\n' +
  '              <p>\n' +
  '                  <a class="btn btn-primary btn-lg" href="https://www.quantifiedcode.com/app/code-is-beautiful" role="button">Live demo</a>\n' +
  '                  <a class="btn btn-default btn-lg margin-left-10" href="stack/index.html" role="button">Details</a>\n' +
  '              </p>\n' +
  '            </div>\n' +
  '          </div>\n' +
  '          <hr>\n' +
  '          <div class="container">\n' +
  '            <div class="row">\n' +
  '              <div class="col-md-12">\n' +
  '                <div class="text-center">\n' +
  '                  <form action="//quantifiedcode.us8.list-manage.com/subscribe/post?u=effb5c0618b377e47329ca7ba&amp;id=0eb810e227" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate navbar-form" target="_blank" novalidate>\n' +
  '                      <div id="mc_embed_signup_scroll">\n' +
  '                        <input type="email" value="" name="EMAIL" class="email form-control" id="mce-EMAIL" placeholder="Email address" required>\n' +
  '                        <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->\n' +
  '                        <div style="position: absolute; left: -5000px;">\n' +
  '                          <input type="text" name="b_effb5c0618b377e47329ca7ba_0eb810e227" tabindex="-1" value="">\n' +
  '                        </div>\n' +
  '                        <input type="submit" value="Subscribe to our newsletter" name="subscribe" id="mc-embedded-subscribe" class="btn btn-success">\n' +
  '                      </div>\n' +
  '                  </form>\n' +
  '                </div>\n' +
  '              </div>\n' +
  '            </div>\n' +
  '          </div>\n' +
  '          <hr>\n' +
  '          <footer>\n' +
  '            <p><a href="https://www.quantifiedcode.com/">&copy; QuantifiedCode UG (haftungsbeschränkt) 2015</a></p>\n' +
  '          </footer>\n' +
  '        </div>\n' +
  '    </body>\n' +
  '</html>'



vimTaskArray[8] = 'body {\n' +
  '  font-family: Century Gothic, Arial, Helvetica;\n' +
  '  font-size: 1em;\n' +
  '  padding: 10px;\n' +
  '  padding-top:100px;\n' +
  '}\n' +
  'h1 {\n' +
  '  margin: 20px 0px\n' +
  '}\n' +
  'h6 {\n' +
  '  margin-bottom: 26px;\n' +
  '}\n' +
  '.jumbotron p {\n' +
  '  font-size: 18px;\n' +
  '}\n' +
  '.code-city-canvas {\n' +
  '  position: relative;\n' +
  '}\n' +
  '.jumbotron{\n' +
  '    background:none;\n' +
  '}\n' +
  '.jumbotron .container{\n' +
  '    position:relative;\n' +
  '    background:none;\n' +
  '}\n' +
  '.jumbotron img.bg{\n' +
  '    position:absolute;\n' +
  '    float: right;\n' +
  '    width:100%;\n' +
  '    top:50px;\n' +
  '}\n' +
  '@media (max-width: 1199px) {\n' +
  '  .jumbotron img.bg{\n' +
  '      position:absolute;\n' +
  '      float: right;\n' +
  '      width:100%;\n' +
  '      top:100px;\n' +
  '  }\n' +
  '}\n' +
  '.code-city-legend {\n' +
  '  position: absolute;\n' +
  '  top: 0;\n' +
  '  left: 0; }\n' +
  '  .code-city-legend p {\n' +
  '    margin: 0; }\n' +
  '.node {\n' +
  '  position: absolute; }\n' +
  'img.thumb{\n' +
  '    opacity:0.7;\n' +
  '}\n' +
  '.email {\n' +
  '  color: #333 !important;\n' +
  '}\n' +
  '.btn-success {\n' +
  '  background: #ffffff;\n' +
  '  border-color: #2196f3;\n' +
  '  border: 1px solid;\n' +
  '  color: #2196f3;\n' +
  '  box-shadow: none;\n' +
  '  font-weight: bold;\n' +
  '}\n' +
  '.btn-success:hover {\n' +
  '  background: #2196f3;\n' +
  '  border-color: #ffffff;\n' +
  '  border: 1px solid;\n' +
  '  color: #ffffff;\n' +
  '  box-shadow: none;\n' +
  '  font-weight: bold;\n' +
  '}\n' +
  '.margin-left-10 {\n' +
  '  margin-left: 10px;\n' +
  '}\n' +
  '/*# sourceMappingURL=style.css.map */'



vimTaskArray[9] = 'define([\n' +
  '  \'code-city/code-city\',\n' +
  '  \'jquery\',\n' +
  '  \'common/legend\',\n' +
  '  \'data/loaders\',\n' +
  '  \'data/helpers\'\n' +
  '],function(\n' +
  '  codeCity,\n' +
  '  $,\n' +
  '  legend,\n' +
  '  dataLoaders,\n' +
  '  dataHelpers\n' +
  ') {\n' +
  '    var data = dataLoaders.complexityExample(\'django\');\n' +
  '    var metric = \'functions\';\n' +
  '    var legendDiv = $(\'#code-city-legend\')[0];\n' +
  '    var canvasDiv = $(\'#code-city-canvas\')[0];\n' +
  '    var rotateLeftSpan = $(\'#rotate-left\');\n' +
  '    var rotateRightSpan = $(\'#rotate-right\');\n' +
  '    var nodeColorScale = [\'#a50026\',\n' +
  '                          \'#d73027\',\n' +
  '                          \'#f46d43\',\n' +
  '                          \'#fdae61\',\n' +
  '                          \'#fee08b\',\n' +
  '                          \'#d9ef8b\',\n' +
  '                          \'#a6d96a\',\n' +
  '                          \'#66bd63\',\n' +
  '                          \'#1a9850\',\n' +
  '                          \'#006837\'].reverse()\n' +
  '    function legendTitle(d,e){\n' +
  '        return d.path;\n' +
  '    }\n' +
  '    function legendContent(d,e){\n' +
  '        return "<div> \/\/\n' +
  '            <table class=\/\/"table table-striped\/\/"> \/\/\n' +
  '                <tbody> \/\/\n' +
  '                    <tr> \/\/\n' +
  '                        <td>lines of code</td> \/\/\n' +
  '                        <td>"+d.data.metrics.total_number_of_lines+"</td> \/\/\n' +
  '                    </tr> \/\/\n' +
  '                    <tr> \/\/\n' +
  '                        <td>total complexity</td> \/\/\n' +
  '                        <td>"+d.data.code_patterns[metric].total_cyclomatic_complexity+"</td> \/\/\n' +
  '                    </tr> \/\/\n' +
  '                    <tr> \/\/\n' +
  '                        <td>complexity / 100 lines of code</td> \/\/\n' +
  '                        <td>"+Math.ceil(d.data.code_patterns[metric].total_cyclomatic_complexity/d.data.metrics.total_number_of_lines*100)+"</td> \/\/\n' +
  '                    </tr> \/\/\n' +
  '                </tbody> \/\/\n' +
  '            </table> \/\/\n' +
  '        </div>";\n' +
  '    }\n' +
  '    function nodeHeight(d) {\n' +
  '        function snapToGrid(grid, value) {\n' +
  '          return grid * Math.ceil(value / grid);\n' +
  '        }\n' +
  '        if (d.children && d.children.length)\n' +
  '            return 0;\n' +
  '        return snapToGrid(5, d.data.code_patterns[metric].total_cyclomatic_complexity);\n' +
  '    }\n' +
  '    function nodeColor(d) {\n' +
  '      return d.data.code_patterns[metric].total_cyclomatic_complexity/d.data.metrics.total_number_of_lines;\n' +
  '    }\n' +
  '    function nodeArea(d) {\n' +
  '      return d.data.metrics.total_number_of_lines;\n' +
  '    }\n' +
  '    var graphParams = {\n' +
  '        legend: legend(legendDiv,legendTitle,legendContent)\n' +
  '    };\n' +
  '    var mapperParams = {\n' +
  '        mappers: {\n' +
  '            height: nodeHeight,\n' +
  '            area: nodeArea,\n' +
  '            colorValue: nodeColor,\n' +
  '            title: function(d){return d.key.split(\'/\').slice(-1)[0];},\n' +
  '            path: function(d){return d.key || \'(all files)\';}\n' +
  '        },\n' +
  '        split: function(key){return key.split(\'/\')\n' +
  '    }};\n' +
  '    data.then(function(d){\n' +
  '        var mergedData = {};\n' +
  '        for(var key in d.python.code_patterns){\n' +
  '            mergedData[key] = {metrics : d.python.metrics[key],code_patterns : d.python.code_patterns[key]};\n' +
  '        }\n' +
  '        var treeData = dataHelpers.convertToTree(mergedData,mapperParams);\n' +
  '        //we add color to the elements (using the min/max information)\n' +
  '        dataHelpers.colorize(treeData,\'colorValue\',nodeColorScale,{min: 0,max : 0.4});\n' +
  '        var codeCityChart;\n' +
  '        try{\n' +
  '            codeCityChart = codeCity.codeCity($(\'#code-city-chart\')[0], treeData, graphParams);\n' +
  '        }catch(e){\n' +
  '            if (e instanceof TypeError)\n' +
  '                $(\'#code-city-chart\').html("\/\/\n' +
  '                \/\/\n' +
  '                <div> \/\/\n' +
  '                <img src=\/\/"../assets/images/code_city_large.png\/\/" width=\/\/"100%\/\/"> \/\/\n' +
  '                <p style=\/\/"background:rgba(255,0,0,0.7); top:300px; position:absolute; font-size:18px;\/\/" class=\/\/"alert alert-danger\/\/"> \/\/\n' +
  '                    It seems that your browser does not support (or has deactivated) WebGL, which is required for this graph. Please upgrade your browser or make sure that WebGL is activated. Below is a teaser of what the visualization of your project might look like. \/\/\n' +
  '                </p> \/\/\n' +
  '                </div> \/\/\n' +
  '                ");\n' +
  '        }\n' +
  '        var isRotating = false;\n' +
  '        var startRotate = function(left){\n' +
  '            if (isRotating)\n' +
  '                return;\n' +
  '            isRotating = false;\n' +
  '            var rotate = function(){\n' +
  '                if (!isRotating)\n' +
  '                    return;\n' +
  '                codeCityChart.setCameraRotation(codeCityChart.getCameraRotation()+(left ? 0.01 : -0.01));\n' +
  '                setTimeout(rotate,10);\n' +
  '            }\n' +
  '            var startRotation = function(){\n' +
  '                isRotating = true;\n' +
  '                rotate();\n' +
  '            }\n' +
  '            setTimeout(startRotation,40);\n' +
  '        };\n' +
  '        var stopRotate = function(){\n' +
  '            isRotating = false;\n' +
  '        }\n' +
  '        rotateLeftSpan.mouseover(startRotate.bind(null,false));\n' +
  '        rotateRightSpan.mouseover(startRotate.bind(null,true));\n' +
  '        rotateLeftSpan.mouseout(stopRotate);\n' +
  '        rotateRightSpan.mouseout(stopRotate);\n' +
  '    });\n' +
  '});'
