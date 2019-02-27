# nodejs学习
1、nodejs是什么。完整的看两遍文档
2、使用node源码安装node环境 // 建议买一台服务器玩，便宜的一年也就百来块。
3、尝试执行nodejs的几种方式：
    1 输入node之后执行代码
    2 将代码写入“x.js”，随后用“node x.js”方式执行
    3 借助npm
4、搭建Express的web服务器，支持访问静态文件，也支持访问接口。
    支持接口“/api/ping”，返回一个字符串“pang”即可。
    支持接口“/api/getAuthorInfo”，返回对象形如“{code:0, msg: "", data: {author: "author"}}”。
5、使用nodejs做一个爬虫，爬取内涵段子首页的所有笑话。// 笑话要完整，首页展示可能会有省略号，试着解决。
6、使用nodejs将这些笑话存到一个文件中。
