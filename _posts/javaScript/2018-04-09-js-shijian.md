---
layout: post
title: js-事件
category: javaScript
tags: javaScript
---

## 1.this指向

```javascript
/*

事件处理函数 ： 当事件触发时， 第一个被调用的函数。

this 指向： （在不特意改变this指向的前提下）

  1，事件处理函数中的this，一定是触发事件的对象。
  
  2，函数只要加小括号直接调用，this一定是window.

  3，被定时器调用的函数，里面的this 一定是window。
  
  4，对象方法中的this,一定是这个对象本身。 
  
( function (){} ) (); 匿名函数的自执行 同样可以实现传参

var i = 10;
(function(i){

    alert(i)
})(i)

理由：独立的作用域，外界无法干扰函数内部的变量

*/
```

## 2. 鼠标移入移出

1. onmouseover、onmouseout：鼠标经过时自身触发事件，经过其子元素时也触发该事件；（从父级到子集或者从子集到父级经过两者边界时先触发onmouseout，再触发onmouseover） 
2. onmouseenter、onmouseleave：鼠标经过时自身触发事件，经过其子元素时不触发该事件。（从父级到子集或者从子集到父级经过两者边界时什么都不触发） 

这四个事件两两配对使用，onmouseover、onmouseout一对，onmouseenter、onmouseleave一对，不能混合使用。
onmouseenter 事件类似于 onmouseover 事件。唯一的区别是 <span class="code">onmouseenter</span> 事件不支持冒泡 。

## 3. onmousemove-鼠标移动

<span class="code">onmousemove</span> 事件会在鼠标指针移动时发生。(移动1个像素就会发生)

```javascript
box.onmousemove = function(){
    console.log('我在移动')
}
//两次mousemove事件之间的间隔时长始终是一个相对固定的值
```

## 4. onclick-鼠标单击

<span class="code">onclick</span> 点击鼠标时发生。

```javascript
box.onclick = function(){
    console.log('我在单击')
}
```

## 5. ondblclick-鼠标双击

<span class="code">ondblclick</span> 鼠标双击时发生。

```javascript
box.ondblclick = function(){
    console.log('我在双击鼠标')
}
```

## 6. oncontextmenu-鼠标右键单击

<span class="code">oncontextmenu</span> 鼠标点击右键时发生。

```javascript
box.oncontextmenu = function(){
    console.log('我在单击鼠标右键')
}
```

## 7. onmousedown-鼠标按下

<span class="code">onmousedown</span> 鼠标按下时发生。(左右键都可以)

```javascript
box.onmousedown = function(){
    console.log('我在按下鼠标')
}
```

## 8. onmouseup-鼠标抬起

<span class="code">onmouseup</span> 鼠标按下抬起时发生。(左右键都可以)

```javascript
box.onmouseup = function(){
    console.log('我在抬起鼠标')
}
```

## 9. onkeydown-按下键盘按键

<span class="code">onkeydown</span>携带的一个参数是:keyCode,这个参数里的是每个按键的编码，我们可以通过编码来判断用户按的是哪个按键;

```javascript
document.onkeydown = function(ev){

  var e = ev || window.event;

     console.log(e.keyCode)
    
}
```
```html
<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>无标题文档</title>
</head>

<body>
</body>
</html>

<script>

var i = 0;

document.onkeydown = function( ev ){
    var ev = ev || event , key = ev.keyCode ; 

    document.body.innerHTML += key + ' ';
}



/*

onkeydown : 当按下键盘按键时触发的事件。
  
onkeyup :  当键盘按键抬起时触发的事件。

onkeypress : 当键盘按键按下的时候触发的事件,只有输入型的按键才会触发该事件，功能型按键不会触发。
 
ev.keyCode :  键盘按键对应的键值。

ev.shiftKey :   true  当前按下了shift键   false shift 键没有被按下。

ev.ctrlKey  :   true  当前按下了ctrl键   false ctrl 键没有被按下。

ev.altKey   :   true  当前按下了alt 键   false alt 键没有被按下。

oncontextmenu : 右键菜单     上下文菜单

*/


</script>
```

## 10. onscroll-鼠标滚轮事件

<span class="code">onscroll</span>:对带有滚动条的元素(滚动条必须滚动才能触发)，添加滚动事件。


## 11. onmousewheel-针对鼠标滚轮（硬件）

<span class="code">onmousewheel</span>:鼠标停在该元素上滚动滑轮触发，不管有没有滚动条都触发。



## 12. 输入框事件

- <span class="code">onfocus</span>当输入框聚焦的时候触发
- <span class="code">onblur</span>当输入框失焦的时候触发
- <span class="code">oninput</span>当输入的时候实时触发
- <span class="code">onchange</span>当输入框内容修改以后失去焦点时触发      
- <span class="code">focus()</span>把焦点设置到指定元素上。     
- <span class="code">blur()</span>把焦点从指定元素上移除。      
让元素获得焦点 一般而言,只有表单元素与链接才能使用focus与blur事件   
- <span class="code">select()</span>选中文本（全选）。低版本浏览器有onfocus 和 select()方法并发的bug，处理方法：可以用延时定时器执行，但是需要自己调节时间差 参考时间150 - 200



温馨提示 h5的新属性 placeholder="值" 和设置默认内容是一样的,h5的新属性 autofocus='autofocus'也可以设置默认焦点 ，但是只能是input的元素

可以获得焦点的标签有很多参考 www.w3cschool.com.cn


## 13. 表单事件

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
    <form id="form1" action="http://www.baidu.com" method="post">
        用户名:<input type="text" name="usrName" id="usrName" value="">
        密码:<input type="text" name="passWord" id="passWord" value="">
        <input id="btn" type="submit" value="提交">
    </form>
</body>
</html>
<script>
    var form1 = document.querySelector('#form1');
    var usrName = document.querySelector('#usrName');
    var pw = document.querySelector('#passWord');
    var btn = document.querySelector('#btn');
    //onsubmit 提交表单事件
    form1.onsubmit = function(ev){
        //获取事件对象
        var e = ev || window.event;
        if(usrName.value == '' || pw.value == ''){
            alert('不能提交表单');
            //1.阻止默认事件 preventDefault()
            // e.preventDefault();
            //2.return false   只针对on开头的事件
            return false;
        }
    }

</script>
```

## 14. 阻止默认事件

1. <span class="code">e.preventDefault()</span> 对ie6--ie8不兼容
2. <span class="code">return false</span> 只针对on开头的事件

```javascript

var e = ev || window.event;

if(e.preventDefault){
    e.preventDefault();//标准
}else{
    e.returnValue = false; //IE   
    //注意：这个地方是无法用return false代替的     
    //return false只能取消元素
}


/*

事件的默认行为：当事件触发时，默认会执行的一些行为。


阻止事件默认行为 ： return false;

  注意： return false 只能阻止  通过 on 的方式和 attachEvent() 方法  绑定的事件处理函数的默认行为，不能阻止通过  addEventListener() 方法绑定的事件中的默认行为。


  在 window.onscroll 中 return false 并不能阻止页面滚动，因为页面滚动是由鼠标事件触发的默认行为。



*/

```


## 15. 阻止事件传递

1. **e.cancelBubble = true**;(非标准属性，不建议使用)
2. **e.stopPropagation()**;(推荐使用)

## 16. addEventListener-绑定事件

<span class="code">addEventListener</span>('事件的名称',回调函数,冒泡/下沉)

可以添加多个事件

- 第一个参数：事件的名称
- 第二个参数：回调函数
- 第三个参数：true 下沉  或  false 冒泡 (通常不写，默认为false)
- IE 8及更早 IE 版本不支持 addEventListener() 方法。

```javascript
document.addEventListener('click',function(){  //on开头的事件可以不用写on
        console.log(1)
    })
    document.addEventListener('click',function(){
        console.log(2)
    })
    //console.log(1)和console.log(2)都执行，使用on的方式只能绑定一个事件。
```

## 17. removeEventListener-移除绑定事件

<span class="code">removeEventListener</span>('事件的名称',回调函数,冒泡/下沉)

可以添加多个事件

- 第一个参数：事件的名称
- 第二个参数：回调函数
- 第三个参数：true 下沉  或  false 冒泡 (通常不写，默认为false)

```javascript
document.removeEventListener('click',fn1);

注意： 如果要移除事件，addEventListener() 的执行函数必须使用外部函数(封装起来的函数，只提供函数名)，如:document.addEventListener('click',fn1);。匿名函数，类似 "document.removeEventListener("event", function(){ myScript });" 该事件是无法移除的。

    
```

## 18.event事件对象

```javascript
document.onclick = function( ev ){

    var e = ev || event ;
    console.log(e)

};
/*

事件对象：记录事件触发时的详细信息。
   ( 只有在触发事件的时候才会有信息，没有事件触发，就不会有信息 )

  标准浏览器 ： 事件对象是事件处理函数的第一个参数。
  
  ie6/7/8 :  一个全局对象  event 。
  事件发生后的属性
    clientX 鼠标点击对象可视区的横向坐标    ev.clientX
    clientY 鼠标点击对象可视区的纵向坐标    ev.clientY

*/
```

## 19.阻止冒泡

```javascript
function(ev)
 {
 　 var ev = ev || window.event;

    if( ev.stopPropagation ){

        ev.stopPropagation();

    }else{
        ev.cancelBubble = true;
    }
  
 }

 //取消事件冒泡：
  ev.cancelBubble = true;  取消冒泡    false  不取消冒泡
```

cancelBubble是IE8及以下的浏览器阻止冒泡的一个布尔值类型的属性（非方法）， stopPropagation（）是其他标准浏览器和IE9及以上版本IE浏览器的阻止冒泡的一个方法   cancelBubble非标准，逐渐会被淘汰，所以提倡使用stopPropagation()方法，而把cancelBubble只是作为处理兼容性的手段来使用。


## 20.事件委托

```html
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>无标题文档</title>
<style>

</style>
</head>

<body>

<input type="text">
<input type="button" value="发布"> 
<ul id="ul1">
    

    <li>aajdfjioajdfio <a href="javascript:;">删除</a></li>
    <li>aajdfjioajdfio <a href="javascript:;">删除</a></li>
    <li>aajdfjioajdfio <a href="javascript:;">删除</a></li>
    <li>aajdfjioajdfio <a href="javascript:;">删除</a></li>
    <li>aajdfjioajdfio <a href="javascript:;">删除</a></li>
    <li>aajdfjioajdfio <a href="javascript:;">删除</a></li>
    <li>aajdfjioajdfio <a href="javascript:;">删除</a></li>
    <li>aajdfjioajdfio <a href="javascript:;">删除</a></li>
    <li>aajdfjioajdfio <a href="javascript:;">删除</a></li>
</ul>

</body>
</html>

<script>
var aInp = document.getElementsByTagName('input');
var oUl = document.getElementById('ul1');

oUl.onclick = function( ev ){
    var ev = ev || event;

    var target = ev.target || ev.srcElement ;
    console.log(target)
    if( target.nodeName.toLowerCase() == 'a'){
        oUl.removeChild( target.parentNode )
    }

};

aInp[1].onclick = function(){

    var s = aInp[0].value;
    if( !s ) return;
    var oLi = document.createElement('li');
    oLi.innerHTML = s + '<a href="javascript:;">删除</a>';
    oUl.insertBefore( oLi,oUl.firstChild );

};




/*

事件委托，利用事件冒泡机制，反向寻找目标的技巧

事件源 ： 触发事件的对象。

  标准 ： ev.target 
  ie6/7/8 ： ev.srcElement

  温馨提示：事件委托要注意if的判断，确保找到正确的事件来源对象

    做好事件委托的兼容处理之后，在这个基础上再做其他的兼容，因为在IE6/7/8下直接写 ev.target等属性的时候，会直接报错，原因 IE6/7/8下，ev是undefined undefined是没有属性的，直接使用会报错

*/

</script>




```

## 21.添加事件处理函数addEventListener/attachEvent

```html
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>无标题文档</title>
</head>

<body>

<div id="div1">这个一个DIV</div>

</body>
</html>

<script>

var oDiv = document.getElementById('div1');


bindFn( oDiv,'click',fn1 )
bindFn( oDiv,'click',fn2 )

function bindFn( obj , ev , fnN ){
    if( obj.addEventListener ){
        obj.addEventListener( ev , fnN , false );
    }else{
        obj.attachEvent( 'on' + ev , fnN );
    }
}

// if( oDiv.addEventListener ){
//  oDiv.addEventListener( 'click' , fn1 , false );
//  oDiv.addEventListener( 'click' , fn2 , false );
// }else{
//  oDiv.attachEvent( 'onclick' , fn1 );
//  oDiv.attachEvent( 'onclick' , fn2 );
// }

function fn1(){
    alert( oDiv.id );
};

function fn2( ){
    alert( oDiv.innerHTML );
}



/*

标准浏览器中的第二种绑定方式：

  obj.addEventListener(事件名称，事件处理函数，是否在捕获阶段绑定);
    注意：
      1,事件名称不需要加 on 
      2,事件处理函数按绑定顺序执行
    

ie6、7、8(以及更早IE版本) 下的第二种绑定方式：
  
  obj.attachEvent(事件名称,事件处理函数);
    注意：
      1，事件名称需要加 on
      2，事件处理函数按绑定的相反顺序执行
*/


</script>




```

## 22.call()与apply()

```html
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>无标题文档</title>
</head>

<body>

<div id="div1">这个一个DIV</div>

</body>
</html>

<script>
var oDiv = document.getElementById('div1');


oDiv.onclick = function(){
  fn3.apply( oDiv , 1 , 2 , 3 , 4 , 5 , 6 );
  fn3.apply( oDiv , [1 , 2 , 3 , 4 , 5 , 6 ]);
};

// oDiv.onclick = function(){
//  fn3.apply( oDiv , 23 , 31, 1,231,23,1,23,12,3,123 );
// };
//apply() 方法允许调用该方法的函数接收一个参数，并且这个参数必须为数组。传递额外的参数会被直接忽略掉。

function fn3(a,b){
    console.log(this);
    console.log(arguments.length);
    console.log(a)
    console.log(b)
}

/*

call() : 函数的专属方法，用来改变函数内部的 this 指向。 

  call() 的第一个参数用来改变this的指向，从第二个参数开始都是调用call() 方法的函数的实参。

apply() : 函数的专属方法，用来改变函数内部的 this 指向。 

  1，apply() 的第一个参数用来改变this的指向，第二个参数为调用apply()的函数的实参。

  2，apply() 方法允许调用该方法的函数接收一个参数，并且这个参数必须为数组。传递额外的参数会被直接忽略掉。

  3，apply() 方法会把数组参数里面的值分别作为实参传入调用apply()方法的函数中，而不是直接把数组传入函数中。

  call ()和apply()作用一样，但是call()可以接收任何类型的参数，而apply()只能接收数组参数。

*/


</script>




```

## 23.注销事件处理函数

```javascript
function bindFn( obj , ev , fnN ){
    if( obj.removeEventListener ){
        obj.removeEventListener( ev , fnN , false );
    }else{
        obj.detachEvent( 'on' + ev , fnN );
    }
}

/*

第一种方式绑定事件处理函数的注销：
  obj.onclick = null;
  
第二种方式绑定事件处理函数的注销：

  标准： obj.removeEventListener(事件名称,事件处理函数名称,哪个阶段绑定的)
    注意： 只注销同一阶段绑定的事件处理函数。
    
  ie6/7/8 :  obj.detachEvent(事件名称，事件处理函数名称);
  
  
温馨提示： 给元素绑定一个匿名函数作为事件处理函数，这个事件处理函数将无法被注销。

*/

```












