---
layout: post
title: js-时间对象-Date()
category: javaScript
tags: javaScript
---

## 1. 获取时间


```javascript
new Date() //返回打开当前页面的客户端的本地时间。
getFullYear() //返回当前时间中的年份。
getYear() //返回的是从1900年到指定日期所经历的年份数。
getMonth() //返回当前时间中的月份 （从0开始计算月份）
getDate() //返回当前时间中的日期。
getDay() //返回当前时间中的星期。
```

```javascript

function date_time (){
	var oDate = new Date(); //Wed Apr 04 2018 12:13:11 GMT+0800 (中国标准时间)
	var iYear = oDate.getFullYear(); //2016
	var iMonth = oDate.getMonth() + 1; // 5月
	var iDate = oDate.getDate();// 5日
	var iDay = oDate.getDay();//4星期    0是星期日
	var iHour = oDate.getHours();//10点
	var iMin = oDate.getMinutes();//21分钟
	var iSec = oDate.getSeconds();//35秒
	var iMillSec = oDate.getMilliseconds();//222毫秒
	var arr = ['星期日','星期一','星期二','星期三','星期四','星期五','星期六'];
	var time = iYear + '年' + iMonth + '月' + iDate + '日' + arr[iDay]  + iHour + '点' + iMin + '分' + iSec + '秒';

	return time
}

console.log( date_time() ) // 结果: 2018年4月4日星期三14点48分20秒

```

## 2. 时间戳getTime

```javascript

var oDate = new Date();
alert( oDate.getTime() ); // 1427859190118   时间戳

/*
getTime() :　从1970年1月1日到指定日期所经历的毫秒数。

参数形式：

1，按 （年,月,日,时,分,秒）顺序传六个时间参数。

  注意： 
    a, 可以省略时间参数，但是不能省略日期参数。
    b,表示月份的参数是从0开始计算月份的。
    c,如果时间超过正常的时间周期，会自动向前一个时间进。
        （比如月份超出范围，会自动往年份进）
    d,具体年份应该是四位数字，如果设置的是四位以下的参数（不包括四位），系统会自动再加上 1900 。
    
2，一个特定格式的字符串参数 :
     new Date( '月 日,年 时:分:秒' );
    
    注意： 
      a，月份只能是英文单词的形式。
      b，时间之间的间隔只能是冒号，日期之间的可以是空格也可以是逗号，还可以是空格和逗号的混合。
      c，可以省略时间，但不能省略日期。
  
3，以一个时间戳作为参数。



*/
```














































## 2. 使用关联模型

这里`myPostInfo()`用的是Camel命名规则，但是我们在读取某一个PostInfo的时候可以用Snake规则。如下面代码都是可行的：

```php
$post = MyPost::find(1);
$post_info = $post->myPostInfo; // example 1
$post_info = $post->my_post_info; // example 2
```

Laravel允许上述两种方法，但是没有合理的处理使用两种命名造成的冲突。

## 3. 缓存失效

如果我们同时使用了上述两个例子，就会使其中一个缓存失效。在Model的relations变量中，缓存了已经读取过的关联Model，但是当我们用不同规则的名字去读取的时候，却会使得前一个缓存失效。例如

```php
$post_info = $post->myPostInfo; 
// $post->relations = [‘myPostInfo’ => ..];

$post_info = $post->my_post_info;
// $post->relations = [‘myPostInfo’ => …, ‘my_post_info’ => …];
```

所以如果不希望缓存失效，得在项目中只使用一种命名方法去读取关系模型。Laravel推荐的是Camel Case.

## 4. toArray() 方法失效

如果同时使用了两者，另外一个问题就是导致`Model::toArray()`失效。因为`toArray()`方法首先去`relations`中查找Snake Case命名的关联模型，没有的话才去看Camel Case的。

所以如果用到了`toArray()`方法来转换Model，切忌同时使用两者。

## 5. 容易犯错的位置

最容易犯错的代码是这样的：

```php
MyPost::with(‘myPostInfo’)->get();
```

在使用With去eagerLoad关联模型时，必须使用和定义方法同名的key去读取，那么这样读取出来的方法只能是Camel Case的key。其他地方就只能用

```php
$my_post->myPostInfo;
```

来保证不出问题。