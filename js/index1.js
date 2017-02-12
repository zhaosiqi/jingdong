$(function(){

	//首页图片移入移出效果
	$(".pic").each(function(i,obj){
		$(obj).mouseover(function(){			
			$(".pic img").eq(i).css("top","-440px");
		})
		$(obj).mouseout(function(){
			$(".pic img").eq(i).css("top","0");
		})
	})

	//下拉菜单
	$(".yiji").each(function(i,obj){
		$(obj).mouseover(function(){
			$(".erji").eq(i).fadeIn();
			$(".erji").eq(i).css("display","block");
			$(".right_nav").eq(i).css("display","none");
		})
		$(obj).mouseout(function(){
			$(".erji").eq(i).fadeOut();
			$("erji").eq(i).css("display","none");
			$(".right_nav").eq(i).css("display","block");
		})
	})

	// $(".erji").each(function(i,obj){
	// 	$(obj).mouseover(function(){
	// 		$(".erji").eq(i).css("display","block");
	// 	})
	// 	$(obj).mouseout(function(){
	// 		$("erji").eq(i).css("display","none");
	// 	})
	// })








})