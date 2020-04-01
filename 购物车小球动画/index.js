window.onload = function () {

    var shoppingCar = document.getElementsByClassName('shoppingCar')[0]
    var button = document.querySelector('button')
    //获得按钮的 坐标点
    var left = button.offsetLeft
    var top = button.offsetTop
    // 获得 购物车的 坐标点
    const ENDLEFT = shoppingCar.offsetLeft
    const ENDTOP = shoppingCar.offsetTop
    // 添加储存五个小球动画的函数
    function addelement() {
        var ball = null
        var ballContainer = document.createElement('div')
        for (let i = 0; i < 5; i++) {
            ball = document.createElement('div')
            ball.classList.add('ball')
            ball.classList.add('isshow')
            ballContainer.appendChild(ball)
            ball = null
        }
        document.body.appendChild(ballContainer)
    }
    addelement()
    //获得 隐藏的小球 dom元素
    var isshow = document.getElementsByClassName('isshow')
    button.onclick = function(){
        // 把 当前 准备动画的小球 赋值给 now
        var now = isshow[0]
        // 在点击 button 按钮时 生成一个 小球
        isshow[0].style.left = left +'px'
        isshow[0].style.top = top + 'px'
        //移除 小球的不可见属性
        isshow[0].classList.remove('isshow')
        // 设置一个延时函数  点击按钮后 小球生成后 才会 移到 购物车
        setTimeout(function(){
            now.style.left = ENDLEFT + 'px'
            now.style.top = ENDTOP + 'px'
            setTimeout(function(){
                //小球到达购物车后  移除小球的 可见属性
                now.classList.add('isshow')
            },500)
        },50)
    }





}