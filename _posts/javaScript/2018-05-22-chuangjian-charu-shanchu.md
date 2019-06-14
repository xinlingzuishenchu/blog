---
layout: post
title: js-创建、插入、删除
category: javaScript
tags: javaScript
---

## 1. createElement创建元素         
      createElement('') : 创建一个dom元素

## 2.appendChild

appendChild() : 往一个节点的现有子节点后面追加一个新的子节点。      
父级.appendChild( 子节点 );


```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <link rel="stylesheet" href="css/reset.css">
    <style>
    	#box{
    		width:100px;
    		height:100px;
    		background:red;
    	}
    	#box img{
    		width:100%;
    		height:100%;
    	}
    	#warp{
    		width:50px;
    		height:50px;
    		background:green;
    	}
    	
    </style>
</head>
<body>
<div class="warp">
	<button id="slider">生成10个li</button>
   <ul id="box">
   	<li>123</li>
   </ul>

   <div id="warp"></div>

</div>
</body>
</html>

<!-- <script type="text/javascript" src="js/jquery.min.js"></script> -->
<script type="text/javascript">

var slider = document.getElementById("slider");
var box = document.getElementById("box");
var warp = document.getElementById("warp");
var oUl = document.createElement('ul');

var oLi = '';
slider.onclick = function(){
	for(var i = 0; i < 10; i++){
		oLi += "<li>789</li>";
	}

	oUl.innerHTML = oLi;
	box.appendChild(oUl);
	// box.appendChild(warp);
}

//appendChild(node)  node必须是创建出来的节点list,或者是页面现有的节点warp,当warp是页面上已经存在的节点时,appendChild(warp),warp会从页面原来的地方移动到新的地方！

</script>
```

## 3. insertBefore

insertBefore() ： 往一个节点的指定现有子节点前面插入一个新的子节点。       
父级.insertBefore( 准备插入的子节点，插入到哪个子节点的前面 );


## 4. removeChild

removeChild() : 从一个节点里面删除指定的子节点。       
父级.removeChild( 准备要删除的子节点 );

```javascript

//wrap的第一个节点是文本节点
<div id="wrap">  

</div>

//wrap没有子节点
<div id="wrap"></div>


//wrap的第一个节点是文本节点
<div id="wrap">  
<p>123456</p>
</div>

//wrap的第一个节点是p节点
<div id="wrap"><p>123456</p></div>



```



## 5.replaceChild

replaceChild() : 用一个节点替换掉另一个节点里面的指定子节点。       
被替换元素的父级.replaceChild( 用来替换的节点，被替换掉的子节点 );        
被替换的元素必须是真实存在的节点元素。


## 6.cloneNode

cloneNode() :  复制一个节点。      

被复制的节点.cloneNode( boolean );    
      boolean : 指定是否复制所有子孙节点。         
         true : 复制所有子孙节点。(包含本身)      
        false : 只复制节点本身。
      
温馨提醒：cloneNode() 只会复制dom结构，而不会复制事件或者通过js添加的属性等,       
譬如oDiv.lanou = '北京，北京';          
alert( cpDiv.lanou );undefined     

可以复制行间属性或者行间自定义属性。


<span class="code">温馨提示</span>appendChild() / insertBefore() / replaceChild() ： 如果操作的对象是一个已经存在在页面中的元素，则是直接移动元素，而并非复制元素。













