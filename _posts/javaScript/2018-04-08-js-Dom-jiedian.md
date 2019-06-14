---
layout: post
title: js-Dom节点
category: javaScript
tags: javaScript
---

## 1. Dom节点

- dom节点是dom中最基本的组成单元。
  1. 层级方式划分 ： 父节点 、 子节点 、 兄弟节点
  2. 类型方式划分 ：1 元素节点、2 属性节点、3 文本节点、8 注释节点、9 document节点
   - 父子节点是上下两层节点之间的关系。
   - 当前节点上面的所有节点都统称为 祖先节点。
   - 当前节点下面的所有节点都统称为 子孙节点。

<span class="code">childNodes</span>: 子节点。     有兼容问题      标准属性
标准浏览器下：会把代码中的换行解析成空白文本节点。

<span class="code">children</span>: 子节点         非标准属性
不会把换行符解析成空白文本节点。

## 2. nodeType属性-查看节点类型

```javascript
//nodeType ： 1   2   3   8   9

  //1  元素节点
  //2  属性节点
  //3  文本节点
  //8  注释节点
  //9  document节点

```

## 3. nodeName属性-查看节点名称

```javascript
//查看节点名称 ： nodeName 属性   alert(oUl.nodeName)

 //元素节点的 nodeName : 元素的本身
 //属性节点的 nodeName : 属性名本身//不能直接查，要有// alert(oUl.attributes[0].nodeName)
 //文本节点的 nodeName : #text  
 //注释节点的 nodeName : #comment
 //document的 nodeName : #document

```

## 4. nodeValue属性-查看节点的值

```javascript
//查看节点的值：nodeValue 属性    alert(oUl.nodeValue)

 //元素节点的 nodeValue : null
 //属性节点的 nodeValue : 属性值       // alert(oUl.attributes[0].nodeValue)
 //文本节点的 nodeValue : 文本内容 
 //注释节点的 nodeValue : 注释的内容
 //document的 nodeValue : null

```

## 5. 判断元素有无子节点

```javascript
alert( wrap.hasChildNodes() )
  //alert的值为true 或 false;
  //true:父级有子节点
  //false:父级没有子节点
```

## 6. 获取节点

- <span class="code">firstChild</span>:第一个子节点 在标准和ie9下会获取到空白文本节点。
- <span class="code">firstElementChild</span>:标准下获取第一个子元素节点，ie6/7/8不支持。
- <span class="code">lastChild</span>:最后一个子节点 在标准和ie9下会获取到空白文本节点。
- <span class="code">lastElementChild</span>:标准下获取最后一个子元素节点，ie6/7/8不支持。
- <span class="code">nextSibling</span>:下一个兄弟节点 在标准和ie9下会获取到空白文本节点。
- <span class="code">nextElementSibling</span>:标准下获取下一个兄弟元素节点，ie6/7/8不支持。
- <span class="code">previousSibling</span>:上一个兄弟节点 在标准和ie9下会获取到空白文本节点。
- <span class="code">previousElementSibling</span>:标准下获取上一个兄弟元素节点，ie6/7/8不支持。

```javascript
function getNext(obj){
  if(!obj || !obj.nextSibling) return null;
  return obj.nextSibling.nodeType === 1 ? obj.nextSibling : getNext(obj.nextSibling);
};

function getPrev(obj){
  if(!obj || !obj.previousSibling)return null;
  return obj.previousSibling.nodeType === 1 ? obj.previousSibling : getPrev(obj.previousSibling);
};

function getFirst(obj){
  if(!obj || !obj.firstChild) return null;
  return obj.firstChild.nodeType === 1 ? obj.firstChild : getNext(obj.firstChild);
};

function getLast(obj){
  if(!obj || !obj.lastChild) return null;
  return obj.lastChild.nodeType === 1 ? obj.lastChild : getPrev(obj.lastChild);
};
```

## 7. parentNode-父节点

<span class="code">parentNode</span>:当前节点的上一层节点（父节点）。

## 8. offsetParent-返回最近的祖先定位元素(获取到的内容包含父级和子级)

<span class="code">offsetParent</span>:离当前节点最近的具有定位属性的祖先节点。

如果所有祖先节点都没有定位属性：
- 对于一个有定位属性的元素：
  1. ie6、7 ： offsetParent 是 html 节点
  2. 其它浏览器： offsetParent 是 body 节点  
- 对于一个没有定位的元素：
  1. ie6/7 : 最近的一个触发了 haslayout 属性的祖先节点，如果所有祖先节点都没有触发 haslayout ，默认为 body 节点。
  2. 其它浏览器： body。
      
- 如果当前节点有 display:none; 属性 在 ie11 以上及标准浏览器，offsetParent为null，ie10以下浏览器不受影响。

<span class="code">offsetLeft</span>:当前节点左边到 offsetParent 左边的距离。

<span class="code">offsetTop</span>:当前节点上边到 offsetParent 上边的距离。

注意：
  1. 如果body和html有边框和外边距, offsetLeft 和 offsetTop 在所有浏览器下的取值都会不一样。
  2. 在ie6、7浏览器下 ，offsetLeft和offsetTop会计算 offsetParent 的边框值，其它浏览器不会计算边框值。
  3. 如果当前节点设置了 display: none; 属性，offsetTop 和 offsetLeft 的值都为0.(ie6/7下为 -1);

温馨提醒：没有 offsetRight 和  offsetBottom 属性！ 


```javascript
offsetWidth : width + padding + border
clientWidth : width + padding

offsetHeight : height + padding + border
clientHeight : height + padding

// 以上四个属性指的是元素在页面中所占空间大小，如果元素没有占页面空间，四个属性的值都为 0 。
```

## 9. 创建、插入、删除、替换、克隆元素

<span class="code">createElement('')</span>: 创建一个dom元素

```javascript
var oLi = document.createElement('li');
```

<span class="code">appendChild()</span>: 往一个节点的现有子节点后面追加一个新的子节点。
- 父级.appendChild( 子节点 );

<span class="code">insertBefore()</span>： 往一个节点的指定现有子节点前面插入一个新的子节点。
- 父级.insertBefore( 准备插入的子节点，插入到哪个子节点的前面 );

<span class="code">removeChild()</span>: 从一个节点里面删除指定的子节点。
- 父级.removeChild( 准备要删除的子节点 );

<span class="code">replaceChild()</span>: 用一个节点替换掉另一个节点里面的指定子节点。
- 被替换元素的父级.replaceChild( 用来替换的节点，被替换掉的子节点 );
- 被替换的元素必须是真实存在的节点元素。

<span class="code">cloneNode()</span>:  复制一个节点。
- 被复制的节点.cloneNode( boolean );
    - boolean : 指定是否复制所有子孙节点。
    - true : 复制所有子孙节点。
    - false : 只复制节点本身。

```
<!Doctype html>
<html>
<head>
<meta charset="utf-8">
<title>无标题文档</title>
</head>
<body>
<div id="div1">
  <span>北京</span>
  海淀区
  <span>清河</span>
</div>
</body>
</html>
<script>
	var oDiv = document.getElementById('div1');

	var cpDiv = oDiv.cloneNode( true );
	//克隆结果：
		/*<div id="div1">
	  		<span>北京</span>
	  		海淀区
	  		<span>清河</span>
		</div>*/

	var cpDiv = oDiv.cloneNode( false );
	//克隆结果：
		/*<div id="div1">
	  		
		</div>*/

</script>
```

温馨提醒：
- cloneNode() 只会复制dom结构，而不会复制事件或者通过js添加的属性等。
- 可以复制行间属性或者行间自定义属性。

appendChild() / insertBefore() / replaceChild() ：
如果操作的对象是一个已经存在在页面中的元素，则是直接移动元素，而并非复制元素。












