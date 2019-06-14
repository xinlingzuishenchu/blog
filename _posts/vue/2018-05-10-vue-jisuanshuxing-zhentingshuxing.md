---
layout: post
title: vue计算属性computed和侦听属性watch的区别
category: vue
keywords: vue
---

## 侦听属性

```javascript
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Vue</title>
    <link rel="stylesheet" href="css/style.css">\
</head>\
<body>\
    <div id="app">\
      <div>{{ fullName }}</div>\
      <button v-on:click = "btn">点击改变数据</button>\
    </div>\
\
</body>\
<script src="https://cdn.jsdelivr.net/npm/vue"></script>
<script>
var vm = new Vue({
  el: '#app',
  data: {
    firstName: 'Foo',
    lastName: 'Bar',
    fullName: 'Foo Bar'
  },
  watch: {

    firstName: function (val) {
      this.fullName = val + ' ' + this.lastName
    },
    lastName: function (val) {
      this.fullName = this.firstName + ' ' + val
    }
  },
  methods: {
    btn: function() {
     this.firstName = '山东矿机共和国';
    }
  }
})



</script>
</html>
```

## 计算属性

```javascript
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Vue</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <div id="app">
      <div>{{ fullName }}</div>
      <button v-on:click = "btn">点击改变数据</button>
    </div>

</body>
<script src="https://cdn.jsdelivr.net/npm/vue"></script>
<script>
var vm = new Vue({
  el: '#app',
  data: {
    firstName: 'Foo',
    lastName: 'Bar'
  },
  computed: {
    fullName: function () {
      return this.firstName + ' ' + this.lastName
    }
  },
  methods: {
    btn: function() {
     this.firstName = '山东矿机共和国';
    }
  }
})



</script>
</html>
```

1、从属性名上，computed是计算属性，也就是依赖其它的属性计算所得出最后的值。watch是去监听一个值的变化，然后执行相对应的函数。      
2、从实现上，computed的值在getter执行后是会缓存的，只有在它依赖的属性值改变之后，下一次获取computed的值时才会重新调用对应的getter来计算。watch在每次监听的值变化时，都会执行回调。其实从这一点来看，都是在依赖的值变化之后，去执行回调。很多功能本来就很多属性都可以用，只不过有更适合的。如果一个值依赖多个属性（多对一），用computed肯定是更加方便的。如果一个值变化后会引起一系列操作，或者一个值变化会引起一系列值的变化（一对多），用watch更加方便一些。   
3、watch的回调里面会传入监听属性的新旧值，通过这两个值可以做一些特定的操作。computed通常就是简单的计算。       
4、watch和computed并没有哪个更底层，watch内部调用的是vm.$watch，它们的共同之处就是每个定义的属性都单独建立了一个Watcher对象。

如果你需要在某个数据变化时做一些事情，使用watch来观察这个数据变化，这个是computed做不到也不应该做的。


