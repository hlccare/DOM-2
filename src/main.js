// const api = jQuery('.test') //不返回元素们，返回api对象
// // 链式操作（核心）
// api.addClass('red') // this 就是api
//     .addClass('blue')
//     .addClass('green') //遍历所有刚才获取的元素，添加.red

//以上代码等价于
// jQuery('.test').addClass('red').addClass('blue').addClass('green')

const x1 = jQuery('.test').find('.child').addClass('red').end().addClass('yellow')
console.log(x1)
console.log('----')
let x = jQuery('.test').find('.child')
x.each((div) => console.log(div))
console.log('----')
x = jQuery('.test')
x.parent().print()