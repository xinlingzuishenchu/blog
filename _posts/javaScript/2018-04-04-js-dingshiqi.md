---
layout: post
title: js-定时器-setInterval()-setTimeout()
category: javaScript
tags: javaScript
---

## 1. 定时器

    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Document</title>
        <link rel="stylesheet" href="css/reset.css">
        <style>
            #box1 {
                width:500px;
                height:400px;
                margin:10px auto;
                position: relative;
                border-radius: 5px;
            }
            #box1 img {
                width:100%;
                height:100%;
                border-radius: 5px;
            }
            #box1 a {
                width:50px;
                height:50px;
                text-align: center;
                line-height: 50px;
                border:1px solid #ccc;
                position: absolute;
                top:50%;
                background: #ccc;
                opacity: 0.5;
                color:#fff;
                margin-top: -25px;
                border-radius: 5px;
            }
            #box1 a:hover {
                opacity: 1;
            }
            #box1 a:nth-of-type(1) {
                left:10px;
            }
            
            #box1 a:nth-of-type(2) {
                right:10px;
            }
        </style>
        <script>
        window.onload = function(){
            var oDiv = document.getElementById('box1');
            var oImg = oDiv.getElementsByTagName('img');
            var aInp = oDiv.getElementsByTagName('input');

            var arrPic = ['img/1.jpg','img/2.jpg','img/3.jpg','img/4.jpg','img/5.jpg'];
            var num = 0;
            var iTimer = 0;

            iTimer = setInterval(function(){
                num ++;
                num %= arrPic.length;
                oImg[0].src = arrPic[num];
            },1000);

            oImg[0].onmouseover = function(){
                clearInterval(iTimer);
            };

            oImg[0].onmouseout = function(){
                clearInterval(iTimer);
                iTimer = setInterval(function(){
                    num ++;
                    num %= arrPic.length;
                    oImg[0].src = arrPic[num];
                },1000);
                
            };

            // setTimeout(function(){
            //  num ++;
            //  num %= arrPic.length;
            //  oImg[0].src = arrPic[num];
            // },1000);
            
            /*
                定时器
                    定时器是方法，setInterval setTimeout
                    setInterval();
                        setInterval方法
                            重复执行的定时器
                            （）中接受两个参数，第一个参数是函数，第二个参数是时间 1000代表1000毫秒 = 1秒

                        clearInterval方法
                            关掉定时器，清除定时器

                            我们每开一个定时器，就会生成一个编号，而这个编号就是定时器的编码，可以通过clearInterval清除这个编号，来关掉定时器

                            

                    setTimeout();
                        setTimeout方法
                            只执行一次
                            （）中接受两个参数，第一个参数是函数，第二个参数是时间 1000代表1000毫秒 = 1秒



            */ 

        };
        </script>
    </head>
    <body>
        <div id="box1">
            <img src="img/1.jpg" alt="lol">
            <a href="#"> < </a>
            <a href="#"> > </a>
        </div>
    </body>
    </html>
