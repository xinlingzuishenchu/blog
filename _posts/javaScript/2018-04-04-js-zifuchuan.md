---
layout: post
title: js-string-字符串方法
category: javaScript
tags: javaScript
---

## 1. charCodeAt()

<span class="code">charCodeAt()</span>:获取字符串中指定位置上字符的编码。
- 参数： 一个   指定要获取的字符位置。
- 数字 0 ~ 9 的编码： 48 ~ 57
- 小写字母 a ~ z :  97 ~ 122
- 大写字母 A ~ Z : 65 ~ 90
- 下划线  ：  95

## 2. fromCharCode()

<span class="code">fromCharCode()</span>:根据指定的字符编码，返回对应的字符。
- 参数： 任意多个   指定要返回字符的字符编码。
- 静态方法,写法是固定的：String.fromCharCode()
- 参数个数没有限制。

## 3. charAt()

<span class="code">charAt()</span>:获取字符串指定位置的字符。
- 参数： 一个   指定要获取的字符位置。

```javascript
var str = '123456';

alert(str.charAt(3)) //4
```

## 4. substr()

<span class="code">substr()</span>:从字符串中提取指定范围的一段子字符串。

- 参数：两个
- 第一个   指定开始提取的位置。可以为负数。
- 第二个  指定提取长度。

```javascript
var str = '123456';

alert(str.substr()) //123456
alert(str.substr(2)) //3456
alert(str.substr(1,3)) //234

console.log(str.substr(-2))    //56   从倒数第二位向右截取到字符串结束
console.log(str.substr(-4,3))  //345  从倒数第四位向右截取3个字符
```

## 5. substring()

<span class="code">substring()</span>:从字符串中提取指定范围的一段子字符串。

- 提取的范围包括开始位置，但是不包括结束位置。
- 省略第二个参数，表示从开始位置提取到字符串结束。
- 在提取之前，会先比较两个参数的大小，然后按从小到大的顺序调整位置，再提取。
- 参数只能是正整数(如果有小数部分会忽略小数)，其它任何类型的值都是非法参数，非法参数会被解析成 0 。
- 如果不设置任何参数，直接提取整个字符串。
- 只是从原字符串上复制内容，而不会修改字符串本身。

```javascript
var str = '123456';

alert(str.substring()) //123456
alert(str.substring(3)) //456
alert(str.substring(2,5)) //345
//提取字符串最后两个字符。
//alert( str.substring( str.length-2 ) );
```

## 6. slice() (也是数组方法，用法一样)

<span class="code">slice()</span>:从字符串中提取指定范围的一段子字符串。

- 参数： 两个
- 第一个   指定开始提取的位置。
- 第二个  指定提取结束的位置。
- 提取的范围包括开始位置，但是不包括结束位置。
- 省略第二个参数，表示从开始位置提取到字符串结束。
- 提取前不会比较两个参数大小，也不会调整参数的位置。
- 参数可以是正负整数(如果有小数部分会忽略小数)，其它任何类型的值都是非法参数，非法参数会被解析成 0 。
- 如果不设置任何参数，直接提取整个字符串。
- 负数参数表示从后往前数字符的位置，最后一个字符的位置是 -1。

```javascript
var str = '123456';

alert(str.slice()) //123456
alert(str.slice(2)) //3456
alert(str.slice(-2)) //56
alert(str.slice(2,5)) //345

// 技巧：利用slice()方法不会修改原数组和不给参数默认提取整个数组的特点可以实现复制数组的目的。
```

## 7. indexOf() (也是数组方法，用法一样)

<span class="code">indexOf()</span>:查找指定的子字符串在字符串中从开始位置往后查找第一次出现的位置。

- 参数： 两个
- 第一个  指定要查找的子字符串。
- 第二个  指定开始查找的位置。
- 从左往右查找，默认始终从第 0 位置上开始往后查找。
- 如果查找到了，就返回第一次被找到的位置。
- 如果没有找到，返回 -1。
- 第二个参数只能是正数(会忽略小数)，其它参数都为非法参数，会从默认开始位置查找。

```javascript
var str = '324ulfjap32865thgdf;adfd';
var s = 'f';

alert( str.indexOf(s) );// 5
alert( str.indexOf(s,6) );// 18
alert( str.indexOf('abc') );// -1
```

## 8. lastIndexOf() (也是数组方法，用法一样)

<span class="code">lastIndexOf()</span>:查找指定的子字符串在字符串中从开始位置往前查找第一次出现的位置。 （最后一个指定的字符串的位置。）

- 参数： 两个
- 第一个  指定要查找的子字符串。
- 第二个  指定开始查找的位置。
- 从右往左查找，默认始终从第 length - 1 位置上开始往前查找。
- 如果查找到了，就返回第一次被找到的位置。
- 如果没有找到，返回 -1。
- 第二个参数只能是正数(会忽略小数)，其它参数都为非法参数，会从默认开始位置查找。
- 新增方法，低版本ie浏览器不支持。

```javascript
var str = '11f324ulfjap32865thgdf;adfdq';
var s = 'f';

alert( str.lastIndexOf( s ) ); // 25
alert( str.lastIndexOf( s,20 ) ); // 8
alert( str.lastIndexOf( s,-10 ) ); // -1 第二个参数只能是正数
```

## 9. split()

<span class="code">split()</span>:把字符串分割数组。

- 参数 ： 一个   指定一个分割符。
- 以分割符作为依据，把分割符左右两边的值分别存入数组中。
- 如果不指定分割符，默认不分割，直接存数组。
- 分割符本身不会存入数组。
- 分割符必须是字符串中有的子字符串，否则为非法分割符，无效。
- 当以空字符串作为分割符来分割空字符串时，会得到一个空数组（只有这种情况才会返回空数组）。
        //alert( ''.split('').length );  //[]  空数组

```javascript
var str = '1234';

console.log( str.split() )// ["1234"]
console.log( str.split('a') ); // ['1234']
console.log( str.split('') ); // ['1','2','3','4']
console.log( str.split('1') ); // ['','234']
console.log( ''.split('')); //[]  空数组
```

## 10. join()

<span class="code">join()</span>:把数组拼接成字符串。

- 参数： 一个    指定一个连接符。
- 以连接符作为媒介，把数组中所有的值都转换成字符串拼接成一个字符串。
- 如果不指定连接符，默认以逗号作为连接符。
- 连接符可以是任意合法字符串。

```javascript
var arr = [1,2,3,4];

console.log( arr.join('') ); // '1234'
console.log( arr.join() ); // '1,2,3,4'
console.log( arr.join('.') ); // '1.2.3.4'
console.log( arr.join('*^_^*') ); //  '1*^_^*2*^_^*3*^_^*4'
```

## 10. trim()

<span class="code">trim()</span>:去掉字符串首尾的空格。

- html5 的新方法  ie8及以下版本不支持。

```javascript
var str = '   asf af9 ads9f   ';

console.log( str.trim() ); // 'asf af9 ads9f'
```

## 11. toUpperCase() 和 toLowerCase()

<span class="code">toUpperCase()</span>:把整个字符串全部转成大写。
<span class="code">toLowerCase()</span>:把整个字符串全部转成小写。

- 只能转换字母大小写。
- 两个方法都不能只转换指定的字符。

## 12. 字符串比较大小

- 不是比较字符串本身，而是比较字符串的编码。
- 不是整体进行比较，而是一个字符一个字符逐个进行比较，而且前面的字符一旦比较出大小关系，直接决定整个字符串的大小关系。

```javascript
alert('321' > '2015') //true

alert(  '你'.charCodeAt() ); //20320
alert(  '我'.charCodeAt() ); //25105
alert('你' > '我') //false

alert(  '21'.charCodeAt() ); // 50
alert(  '112'.charCodeAt() ); // 49
alert(  21 > 112 ); //false
alert(  '21' > '112' ); //true
alert(  '21' > 112 );  //false  隐式类型转换   转换成了数字

alert(  typeof '我'.charCodeAt() ); //25105   number
alert(  'a' == 'A' );  //false   97  ==  65  ==> false
```

