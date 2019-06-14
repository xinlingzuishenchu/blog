---
layout: post
title: js-手势事件
category: 移动端
tags: 移动端 
---

## html5 移动端的手指触屏事件


用户在移动端浏览H5的时候，会使用手指进行一连串的操作，单击、双击、上拉、下拉等等一系列操作，这里主要针对touch事件进行一些简单的介绍； 
用户从手指触碰到屏幕到手指离开屏幕这中间，会触发一系列的touch事件： 

①touchstart：当手指触碰到屏幕的时候触发 
②touchmove：当手指在屏幕上滑动的时候触发 
③touchend：当手指离开屏幕的时候时候触发 
④touchcancel事件：当系统停止跟踪触摸的时候触发(这个事件很少会用，一般不做深入研究)。 


一般来讲，从手指触碰到屏幕，到手指离开屏幕，至少会触发touchstart、touchmove、touchend三个事件，因为手指按下与抬起时候的位置，不可能完全相同（当然也会有例外）； 

使用： 
监听这3个事件： 
1. window.touchstart= function(event){} 
2. window.touchmove= function(event){} 
3. window.touchend= function(event){} 

```javascript

        //1.手指触摸屏幕
        var a = 0;
        div1.ontouchstart = function(ev){
            a++;
            div1.style.background = 'green';
            div1.innerHTML = '哈哈' + a;
            //取消默认事件
            e = ev || window.event;
            e.preventDefault();
        }
        //2.手指离开屏幕
        div1.ontouchend = function(){
            div1.style.background = 'red';
            div1.innerHTML = '哎呀';
        }
        // //3.手指移动屏幕
        div1.ontouchmove = function(){  
            div1.style.background = 'yellow';
            div1.innerHTML = '呦呵';
        }
        // //4.ontouchcancel 事件被系统终止时触发
        div1.ontouchcancel = function(){
            div1.innerHTML = '这究竟是为何';
            div1.style.background = 'blue';

        }






        //1.手指触摸屏幕
        
        div1.ontouchstart = function(ev){
            var e = ev || window.event;
            //div1.innerHTML = e.touches.length;//显示几个手指触摸
            var finger = e.touches[0];
            // div1.innerHTML = finger.clientX; //显示距离

            div1.ontouchmove = function(){
                div1.style.top = finger.clientY -(div1.offsetTop + 250) + 'px';
                div1.style.left = finger.clientX - (div1.offsetLeft + 250)+ 'px';
            }
        };

```

event： 
1. touches：表示当前跟踪的触摸操作的touch对象的数组。 
2. targetTouches：特定于事件目标的Touch对象的数组。 
3. changeTouches：表示自上次触摸以来发生了什么改变的Touch对象的数组。 


每个touch对象包含的属性 
1. clientX：触摸目标在视口中的x坐标。 
2. clientY：触摸目标在视口中的y坐标。 
3. identifier：标识触摸的唯一ID。 
4. pageX：触摸目标在页面中的x坐标。 
5. pageY：触摸目标在页面中的y坐标。 
6. screenX：触摸目标在屏幕中的x坐标。 
7. screenY：触摸目标在屏幕中的y坐标。 
8. target：触目的DOM节点目标。 

```javascript

//简易版移动端的下拉刷新
var touchstartY = "";
window.ontouchstart = function(event) {
    touchstartY = event.changedTouches[0].screenY;//得到手指按下点的Y轴值
}

var touchmoveY = "";
window.ontouchmove = function(event) {
    touchmoveY = event.changedTouches[0].screenY;//不断监听下拉过程中手指的位置
    if(touchmoveY * 1 <= touchstartY) {//证明手指不是在下拉  而是上拉   上拉不做处理
            return;
    }
    //这里设置下拉显示区域为300   根据不同的下拉高度  在内容区显示不同的文字
    if((touchmoveY - touchstartY) * 1 < 300) {

    }
    if((touchmoveY - touchstartY) * 1 >= 300) {

    }
}

var touchendY = "";
window.ontouchend = function(event) {
    touchendY = event.changedTouches[0].screenY;//监听释放点的位置
    if(touchendY <= touchstartY) {//释放点的坐标小于下拉点  证明不是下拉   不做处理
            return;
    }
    //这里可以写刷新的逻辑  一般来讲   只有当下拉距离大于一定高度之后 才会执行刷新操作  这里不做处理
}

```

































