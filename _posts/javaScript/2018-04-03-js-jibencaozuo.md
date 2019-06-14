---
layout: post
title: js-基本操作
category: javaScript
tags: javaScript
---

### 1. 获取元素方式
    
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Document</title>
    </head>
    <body>
        <div id="menu"></div>
        <div class="code"></div>
        <ul>
            <li></li>
            <li></li>
            <li></li>
        </ul>
    </body>
    </html>
    <script>

        var oUl = document.getElementById('menu');
        var oCode = document.getElementsByClassName('code')[0];
        var oDiv = document.getElementsByTagName('li');

    /*
        1.元素的获取
            ID获取元素的方式
            document.getElementById('ID名字');
                获取的是一个元素，不需要通过下标来控制
            getElementsByClassName和getElementsByTagName的方法
                获取的是一堆元素(一个数组)，需要通过下标来进行选择
                下标
                    [0]~[length-1]
                length是指这个集合的元素长度
                    例如：
                    aLi[0].style.width
        2.变量的声明
            var 变量名
        3.=
            一个等号代表赋值
            = 的右边赋值给左边

        4.onmouseover 鼠标移入 onmouseout 鼠标离开 onclick 鼠标点击

        5.function(){}
            函数 函数就是干活的，执行{}中的命令 函数不会主动执行，只有在调用的时候才会执行。
            第一种调用方式 
                事件的调用
                    如：元素.onclick = function(){...}
        6.alert
            alert()
                alert方法就是把（）中的东西弹出来
        7. “.”这个东西就是“的”的意思
            比如 
                改变一个元素的高
                    元素名.style.height
                    元素名.id
        
        8.注释 
        单行注释可以为 “//”
        多行注释可以为 “/**/”



    */
            
        // document.write("哈哈哈哈")
        // 您只能在 HTML 输出中使用document.write。
        // 如果您在文档加载后使用该方法，会覆盖整个文档。比如在函数中使用！

    </script>
