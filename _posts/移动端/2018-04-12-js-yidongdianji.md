---
layout: post
title: 移动端点击（click）事件延迟问题的产生与解决方法
category: 移动端
keywords: 移动端
---

## 问题的发现
  
&emsp;&emsp;上班做项目的时候碰到一个移动端项目，其中有个小游戏，相当于天上掉馅饼，用户需要点击馅饼获得。游戏做好之后在pc端测试是没问题的，安卓手机上测试也是没问题的，但是部分苹果手机就出现了问题，用户点击馅饼没有反应。 

&emsp;&emsp;后来调试的时候，我让这些馅饼静止在屏幕上，这些苹果手机用户就可以点击了。才发现是因为点击事件延迟的原因导致移动的对象不能被用户点击，经过一定时间的延迟，该对象已经移到到其他地方去了。  

&emsp;&emsp;移动端页面对于点击事件会有300毫秒的延迟，也就是js捕获click事件的回调函数处理，需要300ms后才生效，导致多数用户感觉移动设备上基于HTML的web应用界面响应速度慢，甚至有时候会影响一些业务逻辑的处理。


## 为什么会存在延迟
  
&emsp;&emsp;Google开发者文档中有提到：

mobile browsers will wait approximately 300ms from the time that you tap the button to fire the click event. The reason for this is that the browser is waiting to see if you are actually performing a double tap.

&emsp;&emsp;移动浏览器为什么会设置300毫秒的等待时间呢？这与双击缩放的方案有关。平时我们有可能已经注意到了，双击缩放，即用手指在屏幕上快速点击两次，可以看到内容或者图片放大，再次双击，浏览器会将网页缩放至原始比例。  

&emsp;&emsp;浏览器捕获第一次单击后，会先等待一段时间，如果在这段时间区间里用户未进行下一次点击，则浏览器会做单击事件的处理。如果这段时间里用户进行了第二次单击操作，则浏览器会做双击事件处理。这段时间就是上面提到的300毫秒延迟。

## 如何避免延迟

&emsp;&emsp;在特定场景如一些游戏页面，我们需要取消300毫毛的延迟。目前有以下方法：


### 方法一：静止缩放

```html
<meta name="viewport" content="width=device-width user-scalable= 'no'">  
```
&emsp;&emsp;使用这个方法必须完全禁用缩放来达到目的，虽然大部分移动端能解决这个延迟问题，但是部分苹果手机还是不行。

### 方法二：fastclick.js

&emsp;&emsp;FastClick 是 FT Labs 专门为解决移动端浏览器 300 毫秒点击延迟问题所开发的一个轻量级的库。简而言之，FastClick 在检测到touchend事件的时候，会通过 DOM 自定义事件立即触发一个模拟click事件，并把浏览器在 300 毫秒之后真正触发的click事件阻止掉。使用方法如下。

第一步：在页面中引入fastclick.js文件。  
第二步：在js文件中添加以下代码  
在 window load 事件之后，在body上调用FastClick.attach()即可。

```javascript
window.addEventListener(function(){   
    FastClick.attach( document.body );  
},false ); 
```

&emsp;&emsp;如果你项目使用了JQuery，就将上面的代码改写成：

```javascript
$(function() {    
    FastClick.attach(document.body);    
});  
```

### 方法三：指针事件

&emsp;&emsp;指针事件最初由微软提出，现已进入 W3C 规范的候选推荐标准阶段 (Candidate Recommendation)。指针事件是一个新的 web 事件系列，相应的规范旨在使用一个单独的事件模型，对所有输入类型，包括鼠标 (mouse)、触摸 (touch)、触控 (stylus) 等，进行统一的处理。  

&emsp;&emsp;指针事件 (Pointer Events) 目前兼容性不太好，不知道在以后会不会更加支持。


































