//1、获取类名兼容函数
function getClass(classname,father){
	father=father||document;
	//判断浏览器是否有获取类名的属性
	if (father.getElementsByClassName) {
		return father.getElementsByClassName(classname);//现代浏览器
	}else{//IE浏览器
		var all=father.getElementsByTagName("*");//所有的标签名
		var newarr=[]; //数组存储
		for (var i = 0; i < all.length; i++) {
			if(checkRep(classname,all[i].className)){
				newarr.push(all[i]);
			}
		}
	}
	return newarr;
}
function checkRep(val,string){
	var arr=string.split(" ");//把字符串转换成数组
	for(var i in arr){
		if (val==arr[i]) {
			return true;
		}
	}
	return false;
}


/*****************************************/
//2、获取样式的值的兼容函数
function getStyle(obj,attr){
	if(obj.currentStyle){
		return parseInt(obj.currentStyle[attr]);
	}else{
		return parseInt(getComputedStyle(obj,null)[attr]);
	}
}


//3、获取元素的兼容函数(支持标签/、id、class)
//"div"    "#box"     ".box"
function $(selector,father){
	father=father||document;

	//判断传入的是字符串
	if(typeof selector=="string"){

		//去除字符串前后空格
		selector=selector.replace(/^\s*|\s*$/g,"");
		//获取到的字符串第一个字符为.  返回截取的类名
		if(selector.charAt(0)=="."){
			return getClass(selector.substring(1),father);
		}
		//获取到的字符串第一个字符为#  返回截取的id
		else if(selector.charAt(0)=="#"){
			return document.getElementById(selector.substring(1));
		}
		//如果以字母开头，后面数字和字母，返回标签名
		else if(/^[a-z][1-6a-z]*/g.test(selector)){
			return father.getElementsByTagName(selector);
		}
	}

	//传入函数
	else if(typeof selector=="function"){
		//等待文档加载完成之后
		// window.onload=function(){
		// 	selector();
		// }
		addEvent(window,"load",function(){
			selector();
		})
	}
}



//4、获取所有的子节点的兼容函数
/*****************************************************/
function getChild(father,type){
	type=type||"a";
	//father:指定父节点
	//type:"a"  只有元素节点
	//     "b"  元素节点+文本节点
	var all=father.childNodes;
	var newarr=[];
	for (var i = 0; i < all.length; i++) {
		if(type=="a"){
			if(all[i].nodeType==1){
			newarr.push(all[i]);
			}	
		}
		else if(type=="b"){
			if(all[i].nodeType==1||(all[i].nodeType==3&&all[i].nodeValue.replace(/^\s*|\s*$/g,""))!=""){
			newarr.push(all[i]);
			}
		}
	}
	return newarr;
}


//5、获取第一个子节点
function getFirst(father){
	return getChild(father)[0];
}
//6、获取最后一个子节点
function getLast(father){
	return getChild(father)[getChild(father).length-1];
}
//7、获取第num个节点
function getNum(father,xiabiao){
	return getChild(father)[xiabiao];
}
//8、获取下一个兄弟节点
function getNext(obj){
	var next=obj.nextSibling;
	if(!next){
		return false;
	}
	while(next.nodeType==3||next.nodeType==8){
		next=next.nextSibling;
		if(!next){
			return false;
		}
	}
	return next;
}
//9、获取上一个兄弟节点
function getPre(obj){
	var pre=obj.previousSibling;
	if(!pre){
		return false;
	}
	while(pre.nodeType==3||pre.nodeType==8){
		pre=pre.previousSibling;
		if(!pre){
			return false;
		}
	}
	return pre;
}

//10、事件绑定的兼容函数
function addEvent(obj,event,fun){
	obj[fun]=function(){
		fun.call(obj);
	}
	if(obj.attachEvent){
		obj.attachEvent("on"+event,obj[fun]);
	}else{
		obj.addEventListener(event,obj[fun],false);
	}
}



//11、移除事件的兼容函数
function removeEvent(obj,event,fun){
	if(obj.detachEvent){
		obj.detachEvent("on"+event,obj[fun]);
	}else{
		obj.removeEventListener(event,obj[fun],false);
	}
}

//12、鼠标的滚轮事件
function mouseWheel(obj,up,down){
	if (obj.attachEvent) {
		obj.attachEvent("onmousewheel",scrollFn);
		//IE、opera
	}else if(obj,addEventListener){
		obj.addEventListener("mousewheel",scrollFn,false);
		//chrome,safari,-webkit-
		obj.addEventListener("DOMMouseScroll",scrollFn,false);
		//firefox,-moz-
	}
	function scrollFn(e){
		e=e||window.event;
		var f=e.detail||e.wheelDelta;
		if (f==-3||f==120) {
			if (up) {
				up();
			};
		};
		if (f==3||f==-120) {
			if (down) {
				down();
			};
		};
	}
}

//hover
//判断某个元素是否包含有另外一个元素
 function contains (parent,child) {
  if(parent.contains){
     return parent.contains(child) && parent!=child;
  }else{
    return (parent.compareDocumentPosition(child)===20);
  }
 }

//判断鼠标是否真正的从外部移入，或者是真正的移出到外部；
  function checkHover (e,target) {
   if(getEvent(e).type=="mouseover"){
      return !contains(target,getEvent(e).relatedTarget || getEvent(e).fromElement)&&
    !((getEvent(e).relatedTarget || getEvent(e).fromElement)===target)
   }else{
    return !contains(target,getEvent(e).relatedTarget || getEvent(e).toElement)&&
    !((getEvent(e).relatedTarget || getEvent(e).toElement)===target)
    }
  }
//鼠标移入移出事件
/*
  obj   要操作的对象
  overfun   鼠标移入需要处理的函数
  outfun     鼠标移除需要处理的函数
*/
function hover (obj,overfun,outfun) {
    if(overfun){
      obj.onmouseover=function  (e) {
        if(checkHover(e,obj)){
           overfun.call(obj,[e]);
        }
      }
    }
    if(outfun){
      obj.onmouseout=function  (e) {
        if(checkHover(e,obj)){
           outfun.call(obj,[e]);
        }
      }
    }
}
 function getEvent (e) {
      return e||window.event;
 }
/********************************/



