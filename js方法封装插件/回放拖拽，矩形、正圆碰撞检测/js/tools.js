/*让一个元素动起来*/ 
function go(obj,attr,target,dir,endFn){
	dir = parseInt(getCss(obj,attr)) > target ? -dir : dir;
	clearInterval(obj.iTimer);
	obj.iTimer = setInterval(function(){
		var raw = parseInt(getCss(obj,attr));
		var blen = raw + dir;
		if(blen > target && dir > 0 || blen < target && dir < 0){
			blen = target;
		}
		obj.style[attr] = blen + 'px';
		if(blen == target){
			clearInterval(obj.iTimer);
			endFn && endFn();
		}
	},30);
}
/*让一个元素抖起来*/ 
function duoSuo(obj,attr,rag,con,endFn){
	var num = 0;
	var blen = getCss(obj,attr);
	var arr = [];
	for(var i = rag;i>0;i-=con){
		arr.push(i,-i);
	}
	arr.push(0);
	clearInterval(obj.iTimer);
	obj.iTimer = setInterval(function(){
		num ++;
		if(num == arr.length){
			clearInterval(obj.iTimer);
			endFn && endFn();
		}
		obj.style[attr] = arr[num] + blen + 'px'
	},30);
};

/* 让一个元素透明度发生变化 */ 
function opacity(obj , target , num , endFn) {
  
  num = (getCss(obj, 'opacity')||1)*100 < target ? num : -num;
  
  clearInterval( obj.alpha );
  obj.alpha = setInterval(function() {
    
    var speed = (getCss(obj, 'opacity')||1)*100 + num;
    
    if ( speed < target && num < 0 || speed > target && num > 0 ) {
      speed = target;
    }

    obj.style.opacity = speed / 100;
    obj.style.filter = 'alpha(opacity: '+speed+')';
    
    if ( speed == target ) {
      clearInterval( obj.alpha );
      if(typeof endFn === 'function')endFn();
    }
    
  }, 20);
}
/*获取浏览器计算后的css的样式*/ 
function getCss(obj,attr){
	return parseFloat(obj.currentStyle ? obj.currentStyle[attr] : getComputedStyle(obj)[attr]);
}

/*获取元素*/
function getPrev( obj ){
  if( !obj || !obj.previousSibling ) return null;
  return obj.previousSibling.nodeType === 1 ? obj.previousSibling : getPrev( obj.previousSibling );
}

function getNext( obj ){
  if( !obj || !obj.nextSibling ) return null;
  return obj.nextSibling.nodeType === 1 ? obj.nextSibling : getNext( obj.nextSibling );
}

function getFirst( obj ){
  if( !obj || !obj.firstChild ) return null;
  return obj.firstChild.nodeType === 1 ? obj.firstChild : getNext( obj.firstChild );
}

function getLast( obj ){
  if( !obj || !obj.lastChild ) return null;
  return obj.lastChild.nodeType === 1 ? obj.lastChild : getPrev( obj.lastChild );
} 

/*通过获取Class方法获取元素*/ 
function getByClass( sClass , parent ){ 
  var aEles = (parent||document).getElementsByTagName('*');
  var arr = [];

  for(var i=0; i<aEles.length; i++){ //查看每一个元素是否满足要求
    var aClass = aEles[i].className.split(' ');
    
    for(var j=0; j<aClass.length; j++){ //查看元素的每一个className
      if( aClass[j] == sClass ){
        arr.push( aEles[i] );  
        break;
      }
    }
    
  }
  
  return arr;
  
}

/*添加 || 删除class*/ 
// 添加
function addClass( obj , sClass ){
  
    var aClass = obj.className.split(' ');
    
    if( !obj.className ){
      obj.className = sClass;
      return;  
    }
    
    for(var i=0; i<aClass.length; i++){
      if( aClass[i] == sClass ) return;
    }
    
    obj.className += ' ' + sClass;  
  
}

// 删除
function removeClass( obj , sClass ){
    var aClass = obj.className.split(' ');
    
    if( !obj.className ) return;
    
    for(var i=0; i<aClass.length; i++){
    
      if( aClass[i] == sClass ){
        
        aClass.splice( i , 1 );
        obj.className = aClass.join(' ');
        return;
        
      }  
      
    }
  
}

/* 事件监听的兼容处理 */
function bindFn( obj , ev , fnN ){
  if( obj.addEventListener ){
    obj.addEventListener( ev , fnN , false );
  }else{
    obj.attachEvent( 'on' + ev , function(){
      fnN.call( obj );
    } );
  }
} 

/* 获取窗口可视区域 */
function view(){
  return {
    w: window.innerWidth || document.documentElement.clientWidth,
    h: window.innerHeight || document.documentElement.clientHeight
  }
} 

/* 获取元素的滚动距离 */ 
function scrollY(){
  return window.pageYOffset || document.documentElement.scrollTop;
}

function scrollX(){
  return window.pageXOffset || document.documentElement.scrollLeft;
}


/*限制范围的拓展拖拽*/
function drag( obj ){
  obj.onmousedown = function( ev ){
    
    var ev = ev || event ;
    var disX = ev.clientX - obj.offsetLeft;
    var disY = ev.clientY - obj.offsetTop;

    if(obj.setCapture) obj.setCapture();

    document.onmousemove = function( ev ){

      var ev = ev || event ;
      var l = ev.clientX - disX;
      var t = ev.clientY - disY;

      /*吸附的拖拽需要自己根据实际情况去修改值的范围*/ 
      if( l < 0 ) l = 0;
      if( t < 0 ) t = 0;

      if( l > ( view().w - obj.offsetWidth ) ){

        l = view().w - obj.offsetWidth;

      } 

      if( t > (view().h - obj.offsetHeight)){

        t = view().h - obj.offsetHeight;

      } 

      obj.style.left = l + 'px';
      obj.style.top = t + 'px';

      obj.style.cursor = 'move';

    };  

    obj.onmouseup = function(){
      if(obj.releaseCapture) obj.releaseCapture();
      document.onmouseup = document.onmousemove = null;
    };

    return false;
  };
};


