---
layout: post
title: 渐变兼容IE
category: CSS
tags: CSS 
---

### 渐变兼容

```css
#menu-wrap{
  background: #0443a0; /* Old browsers */
  background: -moz-linear-gradient(left, #0443a0 0%, #072a59 100%); /* FF3.6-15 */
  background: -webkit-linear-gradient(left, #0443a0 0%,#072a59 100%); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(to right, #0443a0 0%,#072a59 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#0443a0', endColorstr='#072a59',GradientType=1 ); /* IE6-9 */
}

```
























