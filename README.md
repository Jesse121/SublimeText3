### SublimeText3定制版说明
Sublime可谓是前端工程师的代码编辑神器，自从用上它以后一直爱不释手，用久了也会发现它的各种不足，特别是在新入职搭建自己的开发环境时，我们首先要安装sublime,然后还有各种插件，而且还时不时弹出你需要License,当时想着要是能一键安装就好了，一直在寻找一键安装的方法，于是有了SublimeText3定制版。

#### 一键安装
在你想要安装的位置直接
```
git clone https://github.com/Jesse121/SublimeText3.git
```
就是这么简单，哈哈哈。

#### 定制版中包含的插件
##### Alignment
使用说明：Alignment是一个代码格式化插件，它可以使多行代码中的等号对齐，也可以调整多行代码为一个缩进级别。  
快捷键：<kbd>ctrl</kbd>+<kbd>shift</kbd>+<kbd>alt</kbd>+<kbd>a</kbd>

##### AutoFileName
使用说明：文件名自动补全，根据路径自动提示该路径下的文件

##### BracketHighlighter
使用说明：BracketHighlighter插件是用来匹配相对的符号，然后高亮显示，比如{ }、[ ]、" "等符号的对应高亮显

##### ConvertToUTF8
使用说明：自动转为UTF-8编码类型

##### DeleteBlankLines
使用说明：选中需要批量删除空行的部分，Ctrl + Alt + Backspace，选中部分的所有空行就都被删除了  
快捷键：<kbd>ctrl</kbd>+<kbd>alt</kbd>+<kbd>backspace</kbd>

#####  DocBlockr
使用说明：生成js ,php 等语言函数注释,只需要在函数上面输入`/**` ,然后按<kbd>tab</kbd> 就会自动生成注释模板

##### EditorConfig 
代码空格缩进统一插件

#####  Emmet
使用说明：它让编写 HTML 代码变得简单。  
Emmet用法参见[Emmet插件使用方法总结](http://www.cnblogs.com/jesse131/p/4978966.html)

##### HTML-CSS-JS Prettify
使用说明：快速格式化html css js代码 
快捷键：<kbd>ctrl</kbd>+<kbd>shift</kbd>+<kbd>h</kbd>

##### jQuery
使用说明：会出现jquery提示

##### LESS
使用说明：支持less语法高亮

##### SideBarEnhancements
使用说明：SideBarEnhancements 是一款很实用的右键菜单增强插件，有以 diff 形式显示未保存的修改、在文件管理器中显示该文件、复制文件路径、在侧边栏中定位该文件等功能，也有基础的诸如新建文件/目录，编辑，打开/运行，显示，在选择中/上级目录/项目中查找，剪切，复制，粘贴，重命名，删除，刷新等常见功能。

##### SublimeTmpl
使用说明：按指定快捷键生成模板。  
快捷键：  
<kbd>ctrl</kbd>+<kbd>alt</kbd>+<kbd>h</kbd> 新建html模板文件  
<kbd>ctrl</kbd>+<kbd>alt</kbd>+<kbd>j</kbd> 新建javascript模板文件  
<kbd>ctrl</kbd>+<kbd>alt</kbd>+<kbd>c</kbd> 新建css模板文件  
<kbd>ctrl</kbd>+<kbd>alt</kbd>+<kbd>p</kbd> 新建php模板文件  
<kbd>ctrl</kbd>+<kbd>alt</kbd>+<kbd>r</kbd> 新建ruby模板文件  
<kbd>ctrl</kbd>+<kbd>alt</kbd>+<kbd>shift</kbd>+<kbd>p</kbd> 新建python模板文件  

##### SublimeCodeInte
使用说明：Sublime​Code​Intel 是一个代码提示、补全插件，支持 JavaScript、Mason、XBL、XUL、RHTML、SCSS、Python、HTML、Ruby、Python3、XML、Sass、XSLT、Django、HTML5、Perl、CSS、Twig、Less、Smarty、Node.js、Tcl、TemplateToolkit 和 PHP 等语言，是 Sublime Text 自带代码提示功能的很好扩展。

##### SublimeLinter
使用说明：它可以帮你找出错误或编写不规范的代码  需要安装nodejs,jshint,csslint

##### SublimeLinter-eslint
使用说明：对不符合规则js代码进行提示，

##### View In Browser
使用说明：sublime以本地服务器方式打开网页
为了使用插件，你需要建立一个sublime-project文件，点击Project->Edit Project
粘贴以下代码(这是我的相关配置),并保存到user目录下
```
{
    "folders":
    [
        {
            "path": "D:\\wamp\\www"    
        }
    ],
    "settings":
    {
        "sublime-view-in-browser":
        {
            "baseUrl": "http://localhost"  
            "basePath": "D:\\wamp\\www",   //本地虚拟主机根目录
        }
    }
}

```
快捷键：<kbd>ctrl</kbd>+<kbd>alt</kbd>+<kbd>v</kbd>

#####  MarkdownEditing
使用说明：它支持Markdown语法高亮显示。

#####  OmniMarkupPreviewer
使用说明：用来在浏览器中预览markdown 编辑的效果
快捷键：<kbd>ctrl</kbd>+<kbd>alt</kbd>+<kbd>o</kbd>

#####  Compact​Expand​Css
使用说明：css横竖向排列切换  
快捷键：  
<kbd>ctrl</kbd>+<kbd>alt</kbd><kbd>[</kbd>横向排列  
<kbd>ctrl</kbd>+<kbd>alt</kbd><kbd>]</kbd>竖向排列

##### Terminal
调用命令行工具，这里我设置的是git bash,可在该插件的setting-user 文件中修改
```
"terminal": "D:\\Program Files\\Git\\git-bash.exe",
```
##### Vue Syntax Highlight
支持Vue语法高亮显示插

##### Codelf
下载地址：[Codelf for Sublime Text](https://github.com/unbug/codelf/archive/st-0.0.3.zip)  
使用说明：变量命名神器Codelf通过搜索在线开源平台的项目源码帮开发者给变量命名 ，有了它再也不用为了命名而绞尽脑汁了  
快捷键：鼠标右键，选择Codelf


##### 设置右键SublimeText打开
修改sublime_addright.reg文件，将其中的路径部分改为自己的安装路径即可
```
Windows Registry Editor Version 5.00
[HKEY_CLASSES_ROOT\*\shell\SublimeText3]
@="用 SublimeText3 打开"
"Icon"="D:\\Program Files\\SublimeText3\\sublime_text.exe,0" //改为自己的安装路径

[HKEY_CLASSES_ROOT\*\shell\SublimeText3\command]
@="D:\\Program Files\\SublimeText3\\sublime_text.exe %1" //改为自己的安装路径


[HKEY_CLASSES_ROOT\Directory\shell\SublimeText3]
@="用 SublimeText3 打开"
"Icon"="D:\\Program Files\\SublimeText3\\sublime_text.exe,0" //改为自己的安装路径

[HKEY_CLASSES_ROOT\Directory\shell\SublimeText3\command]
@="D:\\Program Files\\SublimeText3\\sublime_text.exe %1" //改为自己的安装路径
```

**如果你觉得还不错，欢迎给个star哦**