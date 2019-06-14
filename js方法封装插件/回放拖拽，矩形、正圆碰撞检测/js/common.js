// JavaScript Document
function $( v , p ){
	
	var t = typeof v, s = '', doc = document;
	
	if( t === 'string' ){
	
		s = v.charAt();
		
		if( s == '#' )
			return doc.getElementById(v.substring(1));
			
		if( s == '.' )
			return getByClass(v.substring(1),p);
		
		if( s == '<' )
			return doc.createElement(v.slice(1,-1));
			
		return (p||doc).getElementsByTagName(v);
		
	}
	
	if( t == 'function')
		window.onload = v;
		
	return v;

}

function getByClass(s,p){
	
	var aEles,arr,doc = document;
	
	if(doc.getElementsByClassName)
		return (p||doc).getElementsByClassName(s);
	
	aEles = (p||doc).getElementsByTagName('*');
	arr = [];
	
	for(var i=0; i<aEles.length; i++){
		var aClass = aEles[i].className.split(' ');
		for(var j=0; j<aClass.length; j++){
			if(aClass[j]===s)arr.push(aEles[i]);	
		}	
	}
	
	return arr;
}


//append( "ul", oDiv );
//append( oDiv, oBox );
function append(o,p){ //'ul'  oUl
	var obj = typeof o === 'string' ? $('<' + o + '>') : o;
	p.appendChild(obj);
}

function insert(o,o2,p){ //'ul'  oUl
	var obj = typeof o === 'string' ? $('<' + o + '>') : o;
	p.insertBefore(o,o2);
}