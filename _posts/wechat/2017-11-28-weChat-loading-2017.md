---
layout: post
title: 用page页面自带的功能实现加载、刷新
category: 微信小程序
tags: 微信小程序
keywords: 加载、刷新
---

Page() 函数用来注册一个页面。接受一个 object 参数，其指定页面的初始数据、生命周期函数、事件处理函数等。

## 1. 在app.json页设置窗口允许下拉

在"window"中设置"enablePullDownRefresh": true(所有页面都可以下拉)

```
"window":{
    "backgroundTextStyle":"dark",
    "navigationBarBackgroundColor": "#000",
    "navigationBarTitleText": "wechat",
    "navigationBarTextStyle":"white",
    "enablePullDownRefresh": true
  }
```

## 2. 在list.json页(加载、刷新所在页面)设置允许下拉

```
{
    "enablePullDownRefresh": true
}
```

## 3. 利用onPullDownRefresh监听用户下拉动作

> 注：在滚动 scroll-view 时会阻止页面回弹，所以在 scroll-view 中滚动无法触发onPullDownRefresh，因此在使用 scroll-view 组件时无法利用page的该特性。

```
  onPullDownRefresh: function () {
      wx.showNavigationBarLoading() //在标题栏中显示加载


      //请求数据
      //......


      //渲染页面
      setTimeout(() => {
        this.setData({
          
        })
        wx.hideNavigationBarLoading() //完成停止加载
        wx.stopPullDownRefresh() //停止下拉刷新
      }, 2000)
  }
```

4、利用onReachBottom页面上拉触底事件

> 注：首次进入页面，如果页面不满一屏时会触发 onReachBottom ，应为只有用户主动上拉才触发；手指上拉，会触发多次 onReachBottom，应为一次上拉，只触发一次；所以在编程时需要将这两点考虑在内。

```
 onReachBottom: function () {
      //this.data.loading先设置为true,是因为第一次加载先显示gif图标,不然的话第一次加载图标会显示在屏幕下方
    var objArray = this.data.objArray;
    var objBrray = this.data.objBrray;
    var loadOff = this.data.loadOff;
    if (loadOff == true){
      this.setData({ loadOff: false });
      this.setData({ loading: true });
      if (this.data.loading) {
        console.log("正在加载")
        //调取加载接口
        var objArray = objArray.concat(objBrray)


        //调取成功以后改变状态,不用setTimeout
        setTimeout(() => {
          this.setData({
            objArray: objBrray,
            loading: false,
            loadOff:true
          })
        }, 2000)
      }
    }
  }
```




### 最后附上load代码

load.js

```
Page({
  data: {
    loading:true,//上滑gif图标显示
    loadOff:true,
    objArray: [
      {
        id:1,
        img:"../../img/1.jpg",
        title:"这是第一张图片",
        text:"这是第一张图片的介绍",
      },
      {
        id: 2,
        img: "../../img/2.jpeg",
        title: "这是第二张图片",
        text: "这是第二张图片的介绍",
      },
      {
        id: 3,
        img: "../../img/3.png",
        title: "这是第三张图片",
        text: "这是第三张图片的介绍",
      },
      {
        id: 4,
        img: "../../img/4.jpg",
        title: "这是第四张图片",
        text: "这是第四张图片的介绍",
      },
      {
        id: 5,
        img: "../../img/5.jpg",
        title: "这是第五张图片",
        text: "这是第五张图片的介绍",
      },
    ], 
    objBrray: [
      {
        id: 1,
        img: "../../img/1.jpg",
        title: "这是第一张图片",
        text: "这是第一张图片的介绍",
      },
      {
        id: 2,
        img: "../../img/2.jpeg",
        title: "这是第二张图片",
        text: "这是第二张图片的介绍",
      },
      {
        id: 3,
        img: "../../img/3.png",
        title: "这是第三张图片",
        text: "这是第三张图片的介绍",
      },
      {
        id: 4,
        img: "../../img/4.jpg",
        title: "这是第四张图片",
        text: "这是第四张图片的介绍",
      },
      {
        id: 5,
        img: "../../img/5.jpg",
        title: "这是第五张图片",
        text: "这是第五张图片的介绍",
      },
      {
        id: 6,
        img: "../../img/6.jpg",
        title: "这是第六张图片",
        text: "这是第六张图片的介绍",
      },
      {
        id: 7,
        img: "../../img/7.jpg",
        title: "这是第七张图片",
        text: "这是第七张图片的介绍",
      },
      {
        id: 8,
        img: "../../img/8.jpg",
        title: "这是第八张图片",
        text: "这是第八张图片的介绍",
      },
      {
        id: 9,
        img: "../../img/9.jpg",
        title: "这是第九张图片",
        text: "这是第九张图片的介绍",
      },
      {
        id: 10,
        img: "../../img/10.jpg",
        title: "这是第十张图片",
        text: "这是第十张图片的介绍",
      },
    ],    
  },
  onLoad: function () {

  },
  onShow: function () {
      
  },
  //下拉刷新
  onPullDownRefresh: function () {
      wx.showNavigationBarLoading() //在标题栏中显示加载


      //请求数据
      //......


      //渲染页面
      setTimeout(() => {
        this.setData({
          
        })
        wx.hideNavigationBarLoading() //完成停止加载
        wx.stopPullDownRefresh() //停止下拉刷新
      }, 2000)
  },
  //上拉加载
  onReachBottom: function () {
      //this.data.loading先设置为true,是因为第一次加载先显示gif图标,不然的话第一次加载图标会显示在屏幕下方
    var objArray = this.data.objArray;
    var objBrray = this.data.objBrray;
    var loadOff = this.data.loadOff;
    if (loadOff == true){
      this.setData({ loadOff: false });
      this.setData({ loading: true });
      if (this.data.loading) {
        console.log("正在加载")
        //调取加载接口
        var objArray = objArray.concat(objBrray)


        //调取成功以后改变状态,不用setTimeout
        setTimeout(() => {
          this.setData({
            objArray: objBrray,
            loading: false,
            loadOff:true
          })
        }, 2000)
      }
    }
  }
})

```
load.json

```
{
  "backgroundTextStyle": "light",
  "navigationBarBackgroundColor": "#08c9e2",
  "navigationBarTitleText": "加载",
  "navigationBarTextStyle": "#fff",
  "enablePullDownRefresh": true
}
```
load.wxml

由于{ {} }在插件里面不显示，所以{ {} }中间加了空格

```
<view class='warp'>
  <view class='list'>
    <view class='content' wx:for="{ {objArray} }" wx:for-index="idx" wx:for-item="item" wx:key="idx">
      <view><text>{ {item.title} }</text></view>
      <view><image class='image' src='{ {item.img} }'></image></view>
      <view><text>{ {item.text} }</text></view>
    </view>
    <!-- 上滑加载动画 -->
    <view class="load-block" wx:if='{ {loading} }'>
    <image class='load_img' src="../../img/loading.gif"></image>
    </view>
  </view>
</view>
```
load.wxss

```
.warp{
  width:100%;
}
.image{
  width:100%;
}
.load-block{
  text-align:center;
}
.load_img{
  width:200rpx;
  height:100rpx;
}
```



