---
layout: post
title: js-方法封装
category: javaScript
tags: javaScript
---

## 1. 获取时间

```javascript

console.log( date_time() ) // 结果: 2018年4月4日星期三14点48分20秒

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

//获取今天日期，格式YYYY-MM-DD
function getNowFormatDate() {
  var date = new Date();
  var seperator1 = "-";
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  var strDate = date.getDate();
  if (month >= 1 && month <= 9) {
    month = "0" + month;
  }
  if (strDate >= 0 && strDate <= 9) {
    strDate = "0" + strDate;
  }
  var currentdate = year + seperator1 + month + seperator1 + strDate;
  return currentdate;
}

//一年后的今天的前一天,格式YYYY-MM-DD
function oneYearPast(){
    var time=new Date();
    var year=time.getFullYear()+1;
    var month=time.getMonth()+1;
    var day=time.getDate();
    console.log(month);
    if(month<10){
        month="0"+month;
    }
    if(day>1){
        day = day-1;
    }else{
        month = month-1;
        console.log(month);
        if(month<10){
            month="0"+month;
        }
        if(month==0){
            month = 12;
        }
        day=new Date(year,month,0).getDate();
    }
    var v2=year+'-'+month+'-'+day;
    return v2;      
}

```

## 2.获取前几周的时间段

```javascript

// 得到当前时间的前几周时间范围  
console.log("上周开始:" + SetWeekDate(1).start_time,"上周结束:" + SetWeekDate(1).end_time)
console.log("两周前开始:" + SetWeekDate(2).start_time,"两周前结束:" + SetWeekDate(2).end_time)
function SetWeekDate(a) {  
    var dataValue = new Date();  
    var year = dataValue.getFullYear();  
    var month = dataValue.getMonth() + 1;  
    var day = dataValue.getDate();  
    var thisWeekStart; //本周周一的时间  
    if (dataValue.getDay() == 0) {  //周天的情况；  
        thisWeekStart = (new Date(year + '-' + month + '-' + day)).getTime() - ((dataValue.getDay()) + 6) * 86400000;  
    } else {  
        thisWeekStart = (new Date(year + '-' + month + '-' + day)).getTime() - ((dataValue.getDay()) - 1) * 86400000;  
    }  
    //获得上周时间  
    var prevWeekStart = thisWeekStart - (a*7) * 86400000;//上周周一的时间  
    var prevWeekEnd = thisWeekStart - (1 + ((a - 1)*7)) * 86400000;//上周周日的时间  
    var stime = formatDate(new Date(prevWeekStart)); //开始时间  
    var etime = formatDate(new Date(prevWeekEnd));   //结束时间  
    var times = {
                "start_time":stime,
                "end_time":etime
                };
    return times
}  


// 得到当前时间的上月时间范围  
console.log("上月开始:" + SetMonthDate(1).start_time,"上月结束:" + SetMonthDate(1).end_time)
console.log("前两个月开始:" + SetMonthDate(2).start_time,"前两个月结束:" + SetMonthDate(2).end_time)
function SetMonthDate(a) {  
    var dataValue = new Date();  
    var currentYear = dataValue.getFullYear();  
    var currentMonth = dataValue.getMonth();  
    var prevCurrentYear = 0, prevCurrentMonth = 0;  
    if (currentMonth == 0) {  
        prevCurrentYear = currentYear - 1;  
        prevCurrentMonth = 12;  
    } else {  
        prevCurrentYear = currentYear;  
        prevCurrentMonth = currentMonth - a;  
    }  
    var prevmonthLastday = (new Date(currentYear, currentMonth - a + 1, 1)).getTime() - 86400000;  
    var stime = formatDate(new Date(prevCurrentYear, prevCurrentMonth, 1));  //开始时间  
    var etime = formatDate(new Date(prevmonthLastday));                      //结束时间  
    var times = {
                "start_time":stime,
                "end_time":etime
                };
    return times
} 




//格式化日期：yyyy/MM/dd  
function formatDate(date) {  
    var myyear = date.getFullYear();  
    var mymonth = date.getMonth() + 1;  
    var myweekday = date.getDate();  
    if (mymonth < 10) {  
        mymonth = "0" + mymonth;  
    }  
    if (myweekday < 10) {  
        myweekday = "0" + myweekday;  
    }  
    return (myyear + "-" + mymonth + "-" + myweekday);  
}

```

## 3. 获取滚动条与窗口的距离

```javascript
//兼容的写法
    function sTop(){
        if(document.body.scrollTop){
            return document.body.scrollTop;
        }else{
            return document.documentElement.scrollTop;
        }
    }
```

## 4. 获取元素离窗口的距离

```javascript
function offsetFn(obj){
        var offTop = 0;
        while(obj){
            offTop += obj.offsetTop;
            obj = obj.offsetParent; // 一直往上找父级节点,给obj重新赋值
        }
        return offTop;
    }
```

## 5. 随机数范围

```javascript
fn(3,8)

//min-max的随机整数范围，不包含max
        function fn(min,max){
            return parseInt(Math.random()*(max-min)+min);
        }

//min-max的随机整数范围，包含max
        function fn(min,max){
            return parseInt(Math.random()*(max-min+1)+min);
        }

```
## 6. 去除字符串空格

### 方法一：使用replace正则匹配的方法

    去除所有空格: str = str.replace(/\s*/g,'');      
    去除两头空格: str = str.replace(/^\s*|\s*$/g,'');     
    去除左空格: str = str.replace( /^\s*/, '');       
    去除右空格: str = str.replace(/(\s*$)/g, '');      
    str为要去除空格的字符串，实例如下：


```javascript

var str = " 23 23 ";
var str2 = str.replace(/\s*/g,"");
console.log(str2); // 2323

```

### 方法二：使用str.trim()方法

str.trim()局限性：无法去除中间的空格，实例如下：

```javascript

var str = "   xiao  ming   ";
var str2 = str.trim();
console.log(str2);   //xiao  ming

```

同理，str.trimLeft()，str.trimRight()分别用于去除字符串左右空格。

### 方法三：使用jquery,$.trim(str)方法

$.trim(str)局限性：无法去除中间的空格，实例如下：

```javascript

var str = "   xiao  ming   ";
var str2 = $.trim(str)
console.log(str2);   //  xiao  ming

```

## 7.获取元素css样式

```javascript

//  currentStyle (IE)
//  getComputedStyle (标准)

function getCss(obj,attr){
    return obj.currentStyle ? obj.currentStyle[attr] : getComputedStyle(obj)[attr];
}

```

## 8.获取页面路径参数

```javascript
        //jq写法，写在$(function())里面就是在页面加载完毕以后执行
        $(function(){
            var str = location.href;
            var num = str.indexOf('?type=');
            if(num != -1) {
                var id = str.substr(num + 6);
                console.log(id,12987)
            }
        })

        //js写法
        window.onload = function(){
            var str = location.href;
            var num = str.indexOf('?type=');
            if(num != -1) {
                var id = str.substr(num + 6);
                console.log(id,12987)
            }
        }

```
## 9. 鼠标按下与释放位置是否相同（点击还是拖拽判断）

```javascript
  var x,y;
    $(document).mousedown(function(event){ //获取鼠标按下的位置
        x = event.pageX;
        y = event.pageY;
    });
    $(document).mouseup(function(event){//鼠标释放
        var newX = event.pageX;
        var newY = event.pageY;
        if(x==newX && y==newY){
            //位置相同的操作
        }else{
            //位置不同的操作
        }
    })
```
## 11. 输入框输入只保留两位小数

```
/*input里面只能输入数字、一个小数点、小数点后只能输入两位数字*/
<input type="text" name="je" onkeyup="clearNoNum(this)" /> 
function clearNoNum(obj){ 
    obj.value = obj.value.replace(/[^\d.]/g,"");  //清除“数字”和“.”以外的字符  
    obj.value = obj.value.replace(/\.{2,}/g,"."); //只保留第一个. 清除多余的  
    obj.value = obj.value.replace(".","$#$").replace(/\./g,"").replace("$#$","."); 
    obj.value = obj.value.replace(/^(\-)*(\d+)\.(\d\d).*$/,'$1$2.$3');//只能输入两个小数  
    if(obj.value.indexOf(".")< 0 && obj.value !=""){//以上已经过滤，此处控制的是如果没有小数点，首位不能为类似于 01、02的金额 
        obj.value= parseFloat(obj.value); 
    } 
}
```

## 12. iframe相关方法

```javascript
//子iframe里面获取父级元素
    parent.$('#dom')
//获取iframe里面的方法,dom是iframe的id,fun是iframe里面的方法
    $('#dom')[0].contentWindow.fun();
```

































