# trytwo
rebuild a project for web study
1、git clone https://github.com/cathleenfang/trytwo.git github申请仓库 在本地使用仓库
2、npm init 初始化npm 创建package.json 填写项目相关信息
3、创建.gitignore文件 设置忽略文件  使上传到github上面的代码有所保留
4、npm install koa 采用koa设置路由
5、require（‘path’） nodejs的path对象 设置静态文件路径
6、npm install koa-router /koa-static 配置路由 
7、npm nodemon -g 用于自动刷新代码 package.json的script里面配置start
8、app.js设置pug为渲染引擎 设置pug相应参数 noCache参数需要设置才能成功让页面自动更新
9、创建cssInterceptor.js用于转pcss为css 
10、安装常用的postcss插件：postcss-cssnext，postcss-short，postcss-each，precss 确定在app.js添加pcss处理代码
11、下载添加normal.css  依据项目需求  设置layout存放共同的部分
12、modules存放经常使用的属性 通过采用@mixin进行调用
13、pug-lint用于检查pug代码的格式 stylelint用于检查css的格式 eslint用于检查js代码格式  不需要配置路径问题  直接按照文档设置文件格式和名称即可
14、设置.pug-lint.json 里面定义pug规则
15、创建.stylelinttrc 定义css规则  




**总结知识点
1、dev里面内容的改变  并不需要通过nodemon监听变化 
2、package.json里面的dependencies和devDependencies的区别：devDependencies是开发过程中需要的依赖包，dependencies是生产环境需要的依赖包
3、项目采用pcss进行编译是因为用的viscode软件对pcss格式的文件有显示高亮作用  因此项目中需要将pcss格式转换为css
4、路径填写准确很重要