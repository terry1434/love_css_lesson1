//全局的深度克隆函数
var objClone = function clone(Orgin, Target) {
    var target = Target || {};//获取或创建被克隆对象
    var strArray = Object.prototype.toString.call([]);//获取数组在原型链toString中的返回结果："[object Array]"
    for (const key in Orgin) {
        if (Orgin.hasOwnProperty(key)) {//便利克隆对象的非继承属性
            const element = Orgin[key];
            if (element !== "null" && typeof element == "object") {
                if (Object.prototype.toString.call(element) == strArray) {
                    target[key] = Array.prototype.slice.call(element);//将数组赋予被克隆数组对象
                } else {
                    target[key] = {};//创建新对象
                    clone(Orgin[key], target[key]);//递归设定对象内容
                }
            } else {
                target[key] = element;//设定原始值
            }
        }
    }
    return target;
}
//将深度克隆函数赋予window全局变量
window.objClone = objClone;

var arr_nosame = function (arr) {
    var result = [];

    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if (i == 0) {
            result.push(arr[0]);
            continue;
        } else {
            if (!result.includes(arr[i])) {
                result.push(arr[i]);
            }
        }
    }
    return result;
}




