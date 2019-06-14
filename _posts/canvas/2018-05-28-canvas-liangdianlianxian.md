---
layout: post
title: canvas-方法封装
category: canvas
tags: canvas
---

## 1.从一点到另一点的连线

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
	<link rel="stylesheet" href="css/reset.css">
	<style>
	*{
		margin: 0;
		padding: 0;
	}
	.box{
		position: relative;
		width: 400px;
		height: 500px;
		border: 1px solid black;
	}
	
	.canvas{

		display: block;
		background: #ccc;
	}
	.dian1{
		position: absolute;
		left: 80%;
		top: 20%;
		width: 5px;
		height: 5px;
		background: red;
	}
	.dian2{
		
		position: absolute;
		left: 20%;
		top: 70%;
		width: 5px;
		height: 5px;
		background: green;
	}
	
	</style>
</head>
<body>
	
		<div class="box">
			<div class="dian1"></div>
			<div class="dian2"></div>
			<canvas class="canvas" width="1000" height="1000"></canvas>
		</div>
		
</body>
</html>
<script src="http://libs.baidu.com/jquery/2.0.0/jquery.min.js"></script>
<script>
		
		
//		canvas画布宽高一定要相等,是正方形不然会有偏差
		zou('.dian1','.dian2',500)// 500表示速度
		
		
//		canvas画布宽高一定要相等,是正方形不然会有偏差
//		zou('.dian1','.dian2',500)// 500表示速度
function zou(obj1,obj2,sudu){
		var ctx = $('.canvas').get(0).getContext('2d');
		//获取首末两个点之间的坐标
		var x1 = $(obj1).offset().left + $(obj1).width()/2;
		var y1 = $(obj1).offset().top + $(obj1).height()/2;
		var x2 = $(obj2).offset().left + $(obj2).width()/2;
		var y2 = $(obj2).offset().top + $(obj2).height()/2;
		var s = sudu;
		xian(x1,y1,x2,y2,s)
	function xian(x1,y1,x2,y2,s){
		var timer = 0;
		//x,y圆心坐标
		var x = x1;
		var y = y1;
		var n = Math.abs(x2-x1)/s;
		var m = Math.abs(y2-y1)/s;
		console.log(n,m)
		//绘画圆的半径
		var num = 1;
		timer = setInterval(function(){
			if(x2<x1 && y2>y1){ //第一象限
				x = x - n;
				y = y + m;
				if(x<=x2){
					clearInterval(timer)
				}
			}
			if(x2>x1 && y2>y1){   //第二象限
				x = x + n;
				y = y + m;
				if(x>=x2){
					clearInterval(timer)
				}
			}
			if(x2>x1 && y2<y1){   //第三象限
				x = x + n;
				y = y - m;
				if(x>=x2){
					clearInterval(timer)
				}
			}
			if(x2<x1 && y2<y1){   //第四象限
				x = x - n;
				y = y - m;
				if(x<=x2){
					clearInterval(timer)
				}
			}
//		ctx.clearRect(0,0,600,600);
		ctx.beginPath();
		ctx.arc(x,y,num,0,2*Math.PI)
		ctx.fillStyle = 'white';
		ctx.fill();
		ctx.closePath();
		},10)
	}
		
	};
	

						

			
</script>
```














































































