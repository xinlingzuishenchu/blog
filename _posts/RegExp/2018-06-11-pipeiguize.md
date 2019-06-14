---
layout: post
title: 匹配规则
category: RegExp
tags: RegExp 
---

除字面量字符以外，还有一部分字符有特殊含义，不代表字面意思，叫“元字符”

## 1. ^ 表示字符串的开始位置

```javascript

var str = '123456';
//匹配开始位置为1的字符串
var reg = /^1/;
var bol = reg.test(str);
console.log(bol) //true

```

## 2. $ 表示字符串的结束位置

```javascript

var str = '123456.com';
//匹配结束位置为com的字符串
var reg = /com$/;
var bol = reg.test(str);
console.log(bol) //true

```

## 3. {} 表示匹配次数，用大括号{}表示，{n}表示恰好n次，{n,} 表示至少n次,{n,m} 表示不少于n次,不多于m次(可以等于m)

```javascript

var str = '123';
var reg = /^\d{3,5}$/; // 开头必须是数字，连续3~5位数字(可以是3位也可以是5位)，结尾必须是数字！
var bol = reg.test(str);
console.log(bol) //true

```

## 4. ? 表示某个模式出现0次或1次，等同于{0,1}

```javascript

var str = '7';
var reg = /^\d?$/; 
var bol = reg.test(str);
console.log(bol) //true 

```

## 5. * 表示某个模式出现0次或多次，等同于{0,}

```javascript

var str = '21654521';
var reg = /^\d*$/; //首尾必须是数字，中间不管有多少位也必须是数字
var bol = reg.test(str);
console.log(bol) // true

```

## 6. + 表示某个模式出现1次或多次，等同于{1,}

```javascript

var str = '45156';
var reg = /^\d+$/; //首尾必须是数字，中间必须是一位或者多位的数字
var bol = reg.test(str);
console.log(bol) // true

```

## 7. [] 表示有一系列字符可供选择，只要匹配其中一个就可以，所有可供选择的字符都放在方括号内，如：[abc] 表示a,b,c之中任选一个匹配

```javascript

var str = 'dsah';
var reg = /[a,b,c]; //只要有[]里面的一位就可以
var bol = reg.test(str);
console.log(bol) // true

```

## 8. 中括号里面的 ^ 如果方括号内第一个字符是[^],则表示除了字符类中的字符，其他字符都可以匹配，如：[^abc] 表示除了a,b,c之外都可以匹配

```javascript

var str = '12a';
var reg = /[^12345]/; // 除了12345和'',只要存在任何一个其他字符都正确哪怕是空字符' '
var bol = reg.test(str);
console.log(bol) // true

```

## 9. - 表示字符的连续范围，如：[abc]可写成[a-c],[0123456789]可写成[0-9],[A-Z]表示26个大写字母

```javascript

//var reg = /[0-9]/; //等同于 \d
//var reg = /[a-z]/; //所有小写字母
//var reg = /[A-Z]/; //所有大写字母

var reg = /[a-z0-9A-Z]/; // 不区分字母大小写包含数字

```

## 10. 预定义模式：指某些常见模式的简写方式

1.<span class="code">\d</span> 匹配0-9之间的任一数字,相当于[0-9]      
2.<span class="code">\D</span> 匹配所有0-9以外的字符,相当于[^0-9]       
3.<span class="code">\w</span> 匹配任意的字母、数字和下划线,相当于[A-Za-z0-9_]       
4.<span class="code">\W</span> 除所有字母,数字和下划线以外的字符,相当于[^A-Za-z0-9_]        
5.<span class="code">\s</span> 匹配空格,包括制表符(TAB键)、空格符、断行符等      var reg = /[\s]/;      
6.<span class="code">\S</span> 匹配非空格的字符      
7.<span class="code">\b</span> 匹配单词的边界 (譬如：he\b 意思是 he 的右边为空)  

```javascript

var str = 'hello he world he';
		var reg = /he/g;      // ["he", "he", "he"]
		var reg = /\bhe\b/g;  // ["he", "he"]
		var reg = /\bhe/g;    // ["he", "he", "he"]
		var reg = /he\b/g;    // ["he", "he"]
		
		var arr = str.match(reg);
		console.log(arr)

```

8.<span class="code">\B</span> 匹配非单词边界    
9.<span class="code">g</span>  修饰符表示全局匹配，匹配1个或多个       
10.<span class="code">i</span> 不区分字母大小写    var reg = /[a-z]/gi;
11. 汉字在正则表示为[\u4e00-\u9fa5]
















