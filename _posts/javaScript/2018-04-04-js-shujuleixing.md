---
layout: post
title: js-数据类型
category: javaScript
tags: javaScript
---

### 1. 数据类型

    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <title>Document</title>
      <script>
      //数据类型 
      var k='number';
      var a = 10;
      var b = '10';
      var c = true;
      var d = [1,'张三',true];
      var e = {};
      var f = null;
      var g = undefined;
      var h = function(){};
      var arr = [];
      var obj = {};

      // alert(arr instanceof Array);

      function isArray(obj){
        return obj instanceof Array;
      }

      alert(isArray(arr))

      // alert(typeof(typeof(10)));

      // alert('1'+'5');
      /*typeof typeof() 是一个运算符 ，用来查询数据类型
      alert(typeof(a)) number 数字类型

      alert(typeof(b))  string 字符串类型

      alert(typeof(c))  boolean 布尔值类型

      alert(typeof(d)) object 类型
      alert(typeof(e)) object 类型
      alert(typeof(f)) object 类型
        把一个变量设置成空对象，他的数据类型就是null
      alert(typeof(g)) undefined类型
      alert(typeof(h)) function 类型


      ECMAScript  :  

      1，组件、解释器。
      
      2，标准、规范。
      
      
      typeof  :  运算符   用来计算某个数据的类型。
      
        typeof 的结果是一个用来表达具体数据类型的字符串值。
      
      typeof 可以运算的数据类型 ： 

        number \ string  \ boolean  \ undefined \ function \ object 
      
        number :   普通数字   非数字 NaN
        
        string : 字符串。   ''    ""   'document'  'true'   被引号包含着的所有的字符。
          可以通过 “+” 对多个字符串进行合并。
          
          任何类型的值与字符串相加 ，都会变成字符串连接。
          
        boolean ： true  \ false     表示 真 和 假。
        
        undefined :   表示变量声明了，但是没有任何数据。
          undedined 本身不应该被赋值，但是在使用 ES3 版本的浏览器中，undefined可以被赋值，在ES5 版本的浏览器中已经修复了这个BUG。
        
        注意 ： nudefined 是一个数据类型，本身的值也是undefined，表示变量或者一个对象本身没有任何值。而浏览器的报错信息中的 not defined 表示一个变量没有声明而导致浏览器解析出错，两者之间是有本质区别。
      
        function : 函数   让我们可以控制代码执行的时间。
            注意： 函数内部声明的变量和外部声明的变量是不一样的。
          不调用 ，就一定不会执行。
        
        object  : 对象   
          内置对象 ：String对象  Date对象  Array对象   RegExp 对象   Math 对象
          对象中的一个特殊值 ： null 空值，什么都没有。
        
          null 与 undefined 的区别：
            null ： 表示一个变量是一个对象类型。
            undefined : 表示一个变量没有任何值。

      var str = '';
      var aLi = null;
      var num = 0;
      var iNow = null;

      var num = null ;

      alert(num)

      function fn1(){
        alert(1)
        alert(2)
        alert(3)
        alert(4)
        alert(5)
      }*/
      
      </script>
    </head>

    <body>
      
    </body>
    </html>

### 2. 数据类型转换

```javascript
/*
    强制类型转换
      Number()
        强行把纯数字的字符串类型的数字，变成数字类型，如果不是纯数字的字符串类型，会返回NaN
      parseInt()
        强行把字符串里面的第一个字符之前的截取出来，转换成数字类型，如果字符串的第一位就是字符的话，会返回NaN，小数点之后的所有都会被删除
      parseFloat()
        和parseInt基本一样，区别就是保留小数点之后的，字符之前的数字。
    隐式类型转换
      +  任何数字和一个字符串相加都会转化为字符串
      -  会变为数字类型
      *  数字类型
      /  数字类型
      %  数字类型
  */ 
```

