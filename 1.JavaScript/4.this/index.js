/*
 * @Description: 
 * @Version: 1.0
 * @Author: ZMT
 * @Date: 2021-02-23 11:37:47
 * @LastEditors: ZMT
 * @LastEditTime: 2021-05-11 09:30:31
 */
/**
 * ? 什么是this
 * * this 关键字执行为当前执行环境的 ThisBinding
 * * this的指向是调用时决定的
 * 
 * !在全局执行上下文中this都指代全局对象。
 * 
 * !函数上下文
 * * 1. 直接调用 
 *            *this指向全局变量, 严格模式为undefined
 * * 2. call()、apply()
 *            * this指向绑定的对象上
 * * 3. bind()
 *            * this将永久地被绑定到了bind的第一个参数
 * * 4. 箭头函数(箭头函数没有this， super， arguments, new.target)
 *            *所有的箭头函数都没有自己的this，绑定到最近的外层function，否则绑定为全局对象。
 * * 5. 作为对象的一个方法
 *            * this指向调用函数的对象。
 * * 6. 作为一个构造函数
 *            * this被绑定到正在构造的新对象
 * * 7. 作为一个DOM事件处理函数
 *            * this指向触发事件的元素，也就是始事件处理程序所绑定到的DOM节点。currentTarget
 * * 8. HTML标签内联事件处理函数
 *            * this指向所在的DOM元素
 * 
 *  由new调用：绑定到新创建的对象
    由call或apply、bind调用：绑定到指定的对象
    由上下文对象调用：绑定到上下文对象
    默认：全局对象
    ,，
 */