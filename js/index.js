window.onload=function(){


//首页图片移入移出效果
	function picture(num){
		var pic=$(".pic")[num];
		var img=$("img",pic)[0];
		pic.onmouseover=function(){
			img.style.top="-440px";
		}
		pic.onmouseout=function(){
			img.style.top="0px";
		}
	}
	for (var i = 0; i < 8; i++) {
		picture(i);
	};

// 右侧图片跳转
	function tiaozhuan(){
		var pic=$(".pic");
		var right_nav=$(".right_nav")[0];
		var lis2=$("li",right_nav);
		var now=0;
		document.documentElement.scrollTop=1;
		var obj=document.documentElement.scrollTop?document.documentElement:document.body;
		window.onscroll=function(){
			for (var i = 0; i < pic.length; i++) {
				if(obj.scrollTop+139>=pic[i].offsetTop){
					now=i;
					for (var j = 0; j < lis2.length; j++) {
						lis2[j].style.background="none";
					}
					lis2[i].style.background="url(img/f.png) no-repeat";
				}
				if(obj.scrollTop+139<=pic[0].offsetTop){
					now=i;
					for (var j = 0; j < lis2.length; j++) {
						lis2[0].style.background="url(img/f.png) no-repeat";
						lis2[0].style.color="#666";
						lis2[j].style.background="none";
					}
				}
			}
		}
		for (var i = 0; i < lis2.length; i++) {
			lis2[i].aa=i;
			lis2[i].onclick=function(){
				lis2[this.aa].style.color="#666";
				animate(obj,{scrollTop:pic[this.aa].offsetTop-139});
			}
			lis2[0].onclick=function(){
				lis2[this.aa].style.color="#666";
				animate(obj,{scrollTop:pic[this.aa].offsetTop});
			}	

			lis2[i].onmouseover=function(){
				if(now!=[this.aa]){
					lis2[this.aa].style.background="url(img/g.png) no-repeat";
					lis2[this.aa].style.color="#fff";
				}
				else{
					lis2[this.aa].style.color="#666";
					lis2[this.aa].style.background="url(img/f.png) no-repeat";
				}
			}
			lis2[i].onmouseout=function(){
				if(now!=[this.aa]){
					lis2[this.aa].style.color="#666";
					lis2[this.aa].style.background="none";
				}
				else{
					lis2[this.aa].style.color="#666";
					lis2[this.aa].style.background="url(img/f.png) no-repeat";
				}
			}
		}
	}
	tiaozhuan();


	//下拉菜单
	function xiaLa(num){
		var yiji=$(".yiji")[num];
		var erji=$(".erji")[num];
		var right_nav=$(".right_nav")[0];
		yiji.onmouseover=function(){
			erji.style.display="block";
			animate(erji,{opacity:1},200);
			right_nav.style.display="none";
		}
		yiji.onmouseout=function(){
			erji.style.display="none";
			animate(erji,{opacity:0},200);
			right_nav.style.display="block";
		}
	}
	for (var i = 0; i < 5; i++) {
		xiaLa(i);
	};









}