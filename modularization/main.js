// 3）、import
// 使用`export`命令定义了模块的对外接口以后，其他 JS 文件就可以通过`import`命令加载这个模块。
// 例如我要使用上面导出的 util：
// 导入 util
import util from 'testExport.js'
// 调用 util 中的属性
util.sum(1, 2)
//要批量导入前面导出的 name 和 age：
import { name, age } from 'user.js'
console.log(name + " , 今年" + age + "岁了")
// 但是上面的代码暂时无法测试，因为浏览器目前还不支持 ES6 的导入和导出功能。除非借
// 助于工具，把 ES6 的语法进行编译降级到 ES5，比如`Babel-cli`工具
