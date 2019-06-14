---
layout: post
title: js-获取元素
category: javaScript
tags: javaScript
---

## 1. 获取元素

    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Document</title>
    </head>
    <body>
        <div id="menu">
            <ul class="code">
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li>5</li>
            </ul>
        </div>
    </body>
    </html>
    <script>

        var oUl = document.getElementById('menu');
        var oCode = document.getElementsByClassName('code')[0];// ie6/7/8 不好使 不支持ByClassName的方法
        var oDiv = document.getElementsByTagName('li');
        var bol = oUl.getElementsByTagName("*");  //  获取oUl的所有子孙节点(通过标签名称获取的，没有文本节点)

            //ID获取元素的方式
            //document.getElementById('ID名字');
                //获取的是一个元素，不需要通过下标来控制
            //getElementsByClassName和getElementsByTagName的方法
            //getElementsByClassName   ie6/7/8 不支持ByClassName的方法
                //获取的是一堆元素(一个数组)，需要通过下标来进行选择
                //下标
                    [0]~[length-1]
                //length是指这个集合的元素长度
                    //例如：
                    aLi[0].style.width


            //获取第5个li 
            var li5=document.querySelector('#menu .code li:nth-child(5)');

            //querySelector仅仅获取匹配指定选择器里面第一个元素
            var li=document.querySelector('li');

            //querySelectorAll()获取匹配指定选择器里面所有的元素
            var li=document.querySelectorAll('li');

            getComputedStyle(元素):获取非行间样式的方法

            //currentStyle 获取非行间样式的方法

            //获取元素伪类的样式
            getComputedStyle（divs,'after'）.background;


            /*query选择符选出来的元素及元素数组是静态的，
            而getElement这种方法选出的元素是动态的。
            静态的就是说选出的所有元素的数组，不会随着文档操作而改变．*/ 


    </script>

## 2. 获取节点属性值

<span class="code">attributes</span>:获取指定元素的属性集合，可以使用 length 属性来确定属性的数量

操作属性的前两种方式：  <span class="code">.</span> 和 <span class="code">['']</span>

第三种方式：(获取通过前两种方式创建的自定义属性有兼容问题。)
- 获取属性：<span class="code">getAttribute("属性名")</span>;
- 设置属性：<span class="code">setAttribute("属性名","属性值")</span>;
- 删除属性：<span class="code">removeAttribute("属性名")</span>;

兼容问题：
  1. 获取以关键字或保留字作为名称的属性时，有兼容问题。
  2. 获取第二层以上属性时，只有ie浏览器支持。

好处：
  1. 可以获取行间的自定义属性。
  2. 可以获取到 url、src、href 等的属性值，而不是路径地址。
      (在ie6/7/8下需要设置第二个参数2,告诉浏览器获取的是属性值而不是路径)

```
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Document</title>
</head>
<body>
    <p name="我是标签" class="p1">我是段落p标签</p>
</body>
</html>
<script>
    var p = document.querySelector('p');
    //getAttribute(属性):获取节点上属性的值;
    alert(p.getAttribute('name')) // 我是标签  // 属性名必须加引号
    //setAttribute(属性，属性值)
    //添加属性到P标签，属性：id;值：p2;
    p.setAttribute('id','p2')
    //删除属性id
    p.removeAttribute('id')
</script>
```

## 3. 自定义属性-data-

html5 里对自定义属性进行了初步规范，但是要求所有自定义属性都必须以 <span class="code"> data- </span>作为属性名称的开头。

```html
<div id="div" data-mingzi="名字" data-youxi="游戏" ></div>
```

## 4. 获取元素所有的自定义元素集-dataset

```html
<div id="box" data-mingzi="名字" data-youxi="游戏" ></div>
```


```javascript

var box = document.getElementById("box");
console.log( box.dataset ) //{ {"mingzi","名字"},{"youxi","游戏"} }

```

## 5. 获取元素css样式style/getComputedStyle/currentStyle

```javascript

function getCss(obj,attr){
    return obj.currentStyle ? obj.currentStyle[attr] : getComputedStyle(obj)[attr];
}

/*

div.style.width 只能获取行间样式(可读可写)

currentStyle:该属性只兼容IE,不兼容火狐和谷歌,获取非行间样式的方法(写法和style一样)
写法:ele.currentStyle["attr"]或者ele.currentStyle.attr;
getComputedStyle:该属性是兼容火狐谷歌,不兼容IE
写法:window.getComputedStyle(ele,null)[attr]
或window.getComputedStyle(ele,null).attr
或getComputedStyle(divs).height
获取元素伪类的样式
getComputedStyle(divs,'after').background;

*/


```
































