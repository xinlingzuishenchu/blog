---
layout: post
title: 正则-RegExp
category: RegExp
tags: RegExp 
---

## 1.正则的创建

```javascript

//数组对象创建(构造对象)
var arr = new Array();
//字面量创建
var arr = [];


//正则对象创建
var reg = new RegExp();
//字面量创建
var reg = //;

```

## 2.正则的方法

```javascript

var str = 'Hello beijing';
//正则的用法
var reg = /j/;
//test(要匹配的字符串)：返回一个布尔值，方法用于匹配字符串，匹配成功返回true,失败返回false
	var bol = reg.test(str);
	console.log(bol)



//1.match() 字符串方法 接受一个参数，正则去匹配字符串，如果匹配成功就返回匹配成功的数组，如果匹配不成功，就返回null
	 var str = 'df6d2dg16d65dsd85ew';
		// \d 元字符 代表数字 0~9

		// var reg = /\d/; //匹配一次

		// // g 修饰符 代表全局，匹配一次或多次
		var reg = /\d/;

		var arr = str.match(reg);
		console.log(arr) // ["6", "2", "1", "6", "6", "5", "8", "5"]


//2.search() 字符串方法 字符位置下标
	//参数与match相同，返回字符串中第一个匹配项的索引，没有匹配项返回-1
		var str = 'er54ef8d54dd483c15c63';
		var reg = /\d/;
		var a = str.search(reg);
		console.log(a) // 2



//3.replace()字符串方法 用于替换，接受两个参数，第一个是匹配项，第二个可以是字符串或是一个函数
		var str = 'ds5sf8dsf215dsf48df';
			var reg = /\d/g;
			var str1 =str.replace(reg,'*');
			console.log(str1) // ds*sf*dsf***dsf**df




		var str = 'ds5sf8dsf215dsf48df';
			var reg = /\d/g;
			var str2 =str.replace(reg,function(a){
				console.log(a) //遍历
				return '*'
				// return (parseInt(a) + 1);
			});

			console.log(str2)

			//return '*';    ds*sf*dsf***dsf**df
			//return (parseInt(a) + 1);    ds6sf9dsf326dsf59df





			var str = '文艺青年，文艺青年，文艺青年';
				//需求：把文艺改成213
					var reg = /文艺/g;
					var str3 = str.replace(reg,'213')
					// var str3 = str.replace(reg,"'213'")

						console.log(str3) //  213青年，213青年，213青年




			var str = '文艺青年，文艺青年，文艺青年';
					var reg = /文艺/g;
					var str3 = str.replace(reg,function(){
						return '"213"' //显示双引号213   ，  "'213'" 显示 单引号213
					})

					console.log(str3) //  "213"青年，"213"青年，"213"青年

```



























