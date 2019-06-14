---
layout: post
title: vueApp-app
category: vue
keywords: vue
---

## 1.cli创建项目的两种方式

-- vue init webpack vue-demo
-- vue init webpack-simple vue-demo   //省去了语法检查,目录结构更精简，适合中小项目



## 2.img属性src

```html
当我们在Vue.js项目中引用图片时，关于图片路径有以下几种情形：

### 使用一

我们在data里面定义好图片路径

imgUrl:'../assets/logo.png'

然后，在template模板里面

/*错误写法*/

<img src="{{imgUrl}}">

这样是错误的写法，我们应该用v-bind绑定图片的srcs属性

<img :src="imgUrl">

或者

<img src="../assets/logo.png">

这种方式是按照正常HTML语法引用路径，放在模板里可以被webpack打包出来。

### 使用二

当我们需要在js代码里面写图片路径的时候，如果我们在data里面写

/*错误写法*/

imgUrl:'../assets/logo.png'

此时webpack只会把它当做字符串处理从而找不到图片地址，此时我们可以使用import引入图片路径：

<img :src="avatar" />

import avatar from '@/assets/logo.png'

在data里面定义

avatar: avatar

情形三

我们也可以把图片放在外层的static文件夹里面，然后在data里面定义：

imgUrl ： '../../static/logo.png'

<img :src="imgUrl" />

```




























