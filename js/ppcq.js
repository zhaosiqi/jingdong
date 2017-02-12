$(function(){
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

	function tiaozhuan1(){
		var floor=$(".floor");
		var ppcq_nav=$(".ppcq_nav")[0];
		var lis=$("li",ppcq_nav);
		var now=0;
		document.documentElement.scrollTop=1;
		var obj=document.documentElement.scrollTop?document.documentElement:document.body;
		window.onscroll=function(){
			for (var i = 0; i < lis.length; i++) {
				lis[i].aa=i;
				lis[i].onclick=function(){
					animate(obj,{scrollTop:floor[this.aa].offsetTop-200});
				}
			}
		}
	}
	tiaozhuan1();

	var j = jQuery.noConflict();
	j(".kscc_navbox li").each(function(i,obj){
		j(obj).click(function(){
			j(".kscc_picbox img").css("opacity","0").eq(i).css("opacity","1");
			j(".kscc_navbox li").removeClass("show").eq(i).addClass("show");
		})
	})

})


