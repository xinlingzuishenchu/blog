---
layout: post
title: js-web 本地存储 （localStorage、sessionStorage、cookie）
category: javaScript
tags: javaScript 
---

## 说明

对浏览器来说，使用 Web Storage 存储键值对比存储 Cookie 方式更直观，而且容量更大，它包含两种：localStorage 和 sessionStorage

- sessionStorage（临时存储） ：为每一个数据源维持一个存储区域，在浏览器打开期间存在，包括页面重新加载

## localStorage

<span class="code">localStorage(长期存储)</span>：与 sessionStorage 一样，但是浏览器关闭后，数据依然会一直存在

```javascript

//localStorage:它是H5的新特性，不支持ie8以下。它能存储5M内容

    //设置localStorage

    if(window.localStorage){
        console.log('该浏览器支持');
        //存值
            localStorage.userName = '小明';//第一种
            localStorage['userName'] = '小红';//第二种
            localStorage.setItem('userName','小花');//第三种
        //取值
            alert(localStorage.userName);//第一种
            alert(localStorage['userName']);//第二种
            alert(localStorage.getItem('userName'));//第三种

         //删除数据
            localStorage.removeItem('userName');

         //清空localStorage所有内容
            localStorage.clear();
         
    }else{
        console.log('该浏览器不支持');
    };

```

 

## API

sessionStorage 和 localStorage 的用法基本一致，引用类型的值要转换成JSON

## 1. 保存数据到本地

```javascript
    const info = {
        name: 'Lee',
        age: 20,
        id: '001'
    };
    sessionStorage.setItem('key', JSON.stringify(info));
    localStorage.setItem('key', JSON.stringify(info));
```

## 2. 从本地存储获取数据

```javascript
    var data1 = JSON.parse(sessionStorage.getItem('key'));
    var data2 = JSON.parse(localStorage.getItem('key'));
```

## 3. 本地存储中删除某个保存的数据

```javascript
    sessionStorage.removeItem('key');
    localStorage.removeItem('key');
```

## 4. 删除所有保存的数据

```javascript
    sessionStorage.clear();
    localStorage.clear();
```

## 5. 监听本地存储的变化

Storage 发生变化（增加、更新、删除）时的 触发，同一个页面发生的改变不会触发，只会监听同一域名下其他页面改变 Storage

```javascript
    window.addEventListener('storage', function (e) {
        console.log('key', e.key);
        console.log('oldValue', e.oldValue);
        console.log('newValue', e.newValue);
        console.log('url', e.url);
    })
```

## cookie

```javascript

//1.cookie的容量为5kb;
//2.cookie的存储的数据类型:数字,字符串
//3.cookie是以名-值的方式存储:userName = xiaoming
//4.cookie能存储的条目数为:50条
//5.cookie必须运行在服务器的环境下
//设置cookie(它是以名-值对的方式存储,expires是cookie的过期时间单位(天))
var time = new Date();
time.setDate(time.getDate() + 10);

//直接设置cookie
document.cookie = 'name = 小明;expires =' + time;



setCookie('age','18',time);
setCookie('name','小红',time);

//在cookie中设置值封装
function setCookie(name,value,time){
    document.cookie = name + '=' + value + ';expires =' + time;
};

//从cookie中取值封装

getCookie('age');(参数为字符串)

function getCookie(name){
    var arr = document.cookie.split('; ');//不是用字符('')分割，而是要加上一个空格(' ')来分割
    for(var i=0;i<arr.length;i++){
        var nameArr = arr[i].split('=');
        if(nameArr[0] == name){
            return  nameArr[1];
        }
    }
};

```











