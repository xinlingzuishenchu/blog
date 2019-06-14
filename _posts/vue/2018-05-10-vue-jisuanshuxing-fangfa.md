---
layout: post
title: vue计算属性computed和methods的区别
category: vue
keywords: vue
---

## computed和methods的区别

在new Vue的配置参数中的computed和methods都可以处理大量的逻辑代码，但是什么时候用哪个属性，要好好区分一下才能做到正确的运用vue。     
computed称为计算属性，顾名思义，计算就要返回一个计算的结果，所以，当我们要处理大量的逻辑，但是最后要取得最后的结果的时候可以用computed;    

简单示例：    
要求： 

```javascript      
<input type="text v-model="num1"><input type="text v-model="num2">
```

现在要返回num1和num2的和；

```javascript      
<script>
    new Vue({
        el:"#box",
        data:{
                num1:0,
                num2:0
                },
        computed:{    
                result:function(){
                        return this.num1 + this.num2    
                        // 计算属性必须有一个返回值
                }
        }
     })
</script>
```

methods：是方法的意思，在js中，我们把一些函数叫做方法，一般情况下，要触发这个方法就要执行，要执行就要有一个源来触发，所以就需要一个事件源。这是和computed的一点不同之处；      
methods的示例：    
要求：

```javascript
<button @click="do()">点击弹出</button>
```

```javascript
<script>
    new Vue({
        el:"#box",
        data:{
                num1:0,
                num2:0
                },
        methods:{    
                do:function(){
                      alert('ok')
                      //这里根据情况，可以返回有返回值也可以没有返回值。
                }
        }
     })
</script>
```

computed计算的结果如果不发生改变就不会触发result这个函数。而methods中一般都是定义的需要事件触发的一些函数。每次只要触发事件，就会执行对应的方法。如果把computed中的方法写到method中会浪费性能。
computed必须返回一个值页面绑定的才能取得值，而methods中可以只执行逻辑代码，可以有返回值，也可以没有。


需要注意的是，因为 Date.now() 不是响应式依赖，所以

```javascript
computed: {
    now: function () {
        return Date.now()
    }
}
```

不会更新。必须用methods：

```javascript
methods: {
    now: function () {
        return Date.now()
    }
}
```



