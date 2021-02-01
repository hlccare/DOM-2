window.$ = window.jQuery = function (selectorOrArray) {
    // 重载
    let elements
    if (typeof selectorOrArray === 'string') {
        elements = document.querySelectorAll(selectorOrArray)
    } else if (selectorOrArray instanceof Array) {
        elements = selectorOrArray
    }
    // 通过api操作elements
    return { // 此处return重要！！
        find(selector) {
            let array = []
            for (let i = 0; i < elements.length; i++) {
                array = array.concat(Array.from(elements[i].querySelectorAll(selector)))
            }
            array.oldApi = this //此处this 为 旧api
            return jQuery(array) // 重点，返回一个新的对象，操作的elements不同
        },
        each(fn) {
            for (let i = 0; i < elements.length; i++) {
                fn.call(null, elements[i], i)
            }
        },
        parent() {
            const array = []
            this.each((node) => {
                if (array.indexOf(node.parentNode) === -1) {
                    array.push(node.parentNode)
                }
            })
            return jQuery(array)
        },
        children() {
            const array = []
            this.each((node) => {
                array.push(...node.children) // 展开操作符
            })
        },
        print() {
            console.log(elements)
        },
        addClass(className) {
            //闭包：函数访问外部的变量（核心）
            for (let i = 0; i < elements.length; i++) {
                elements[i].classList.add(className)
            }
            return this // this 就是api
        },
        oldApi: selectorOrArray.oldApi,
        end() {
            return this.oldApi
        }
    }
    return api
}