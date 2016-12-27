// function drag(){
// 	this.box=box;
// 	this.ox=0;
// 	this.oy=0;
// 	this.cw=document.documentElement.clientWidth;
// 	this.ch=document.documentElement.clientHeight;
// 	this.ow=this.box.offsetWidth;
// 	this.oh=this.box.offsetHeight;
// 	this.cx=0;
// 	this.cy=0;
// }
// drag.prototype={
// 	drags:function(){
// 		this.down();
// 	},
// 	down:function(){
// 		that=this;
// 		that.box.onmousedown=function(e){
// 			e=e||window.event;
// 			that.ox=e.offsetX;
// 			that.oy=e.offsetY;
// 			that.move();
// 			that.up();
// 			if (e.preventDefault) {
// 				e.preventDefault;
// 			}else{
// 				e.returnValue=false;
// 			}
// 		}
// 	},
// 	move:function(){
// 		that=this;
// 		document.onmousemove=function(e){
// 			e=e||window.event;
// 			that.cx=e.clientX;
// 			that.cy=e.clientY;
// 			var x=that.cx-that.ox;
// 			var y=that.cy-that.oy;
// 			if (x>=that.cw-that.ow) {
// 				x=that.cw-that.ow;
// 			};
// 			if (x<=0) {
// 				x=0;
// 			};
// 			if (y>=that.ch-that.oh) {
// 				y=that.ch-that.oh;
// 			};
// 			if (y<=0) {
// 				y=0;
// 			};
// 			that.box.style.left=x+"px";
// 			that.box.style.top=y+"px";
// 			if (e.preventDefault) {
// 				e.preventDefault;
// 			}else{
// 				e.returnValue=false;
// 			}
// 		}
// 	},
// 	up:function(){
// 		document.onmouseup=function(){
// 			document.onmouseup=null;
// 			document.onmousemove=null;
// 		}
// 	}


// }

