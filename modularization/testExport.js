 //我可以使用 export 将这个对象导出：
 const util = {
    sum(a, b) {
        return a + b;
    }
}
export { util };//这样就将这个对象暴露出来，就可以被引用了

//当然，也可以简写为：
export const util2 = {
    sum(a, b) {
        return a + b;
    }
}

// `export`不仅可以导出对象，一切 JS 变量都可以导出。比如：基本类型变量、函数、数组、对象。
// 当要导出多个值时，还可以简写。比如我有一个文件：user.js：
var name = "jack"
var age = 21
export { name, age }
// 省略名称
// 上面的导出代码中，都明确指定了导出的变量名，这样其它人在导入使用时就必须准确写出
// 变量名，否则就会出错。
// 因此 js 提供了`default`关键字，可以对导出的变量名进行省略
// 例如：
// 无需声明对象的名字
export default {
    sum(a, b) {
        return a + b;
    }
}
// 这样，当使用者导入时，可以任意起名字