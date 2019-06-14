---
layout: post
title: 垂直居中布局
category: CSS
tags: CSS 
---

### 以下实例都用统一模板

```html
<div class="box">
    <span>垂直居中</span>
</div>

```

### 1.table-cell

```css

.box{
    display: table-cell;
    vertical-align: middle;
    text-align: center; 
}

```

### 2.display:flex

```css

.box{
    display: flex;
    justify-content: center;
    align-items: center; 
}

```

### 3.绝对定位和负边距

```css

.box{position: relative;}
.box span{
            position: absolute;
            width: 100px;
            height: 50px;
            top: 50%;
            left: 50%;
            margin-left: -50px;
            margin-top: -25px;
            text-align: center;
        }

```

### 4.绝对定位和0 (适合移动端)

```css

.box span{
  width: 50%; 
  height: 50%; 
  background: #000;
  overflow: auto; 
  margin: auto; 
  position: absolute; 
  top: 0; left: 0; bottom: 0; right: 0; 
}

```

### 5.translate

```css

.box span{
            position: absolute;
            top: 50%;
            left: 50%;
            width: 100%;
            transform: translate(-50%,-50%);
            text-align: center;
        }

```

### 6.display:inline-block

```css

.box{
  text-align: center;
  font-size: 0;
}
.box span{
  vertical-align: middle;
  display: inline-block;
  font-size: 16px;
}
.box:after{
  content: '';
  width: 0;
  height: 100%;
  display: inline-block;
  vertical-align: middle;
}

```

### 7.display:flex和margin:auto

```css

.box{
    display: flex;
    text-align: center;
}
.box span{margin: auto;}

```

### 8.display:-webkit-box

```css

.box{
    display: -webkit-box;
    -webkit-box-pack: center;
    -webkit-box-align: center;
    -webkit-box-orient: vertical;
    text-align: center
}

```

























