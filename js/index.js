window.onload=function(){
	//banner
	function banner(){
		var banner_image=$(".banner_image")[0];
		var banner_img=$(".banner_img")[0];
		var imgs=$("a",banner_img);
		var list=$("li",$(".list")[0]);
		var zjt=$(".zjt",banner_image)[0];
		var yjt=$(".yjt",banner_image)[0];
		var nums=0//操作自动轮播的下标
		function change(type){
			type=type||"yjt";
			if(type=="yjt"){
				nums++;
				if(nums>=imgs.length){
					nums=0;
				}
			}else if(type=="zjt"){
				nums--;
				if(nums<=-1){
					nums=imgs.length-1;
				}
			}
			for (var i = 0; i < imgs.length; i++) {
				imgs[i].style.opacity=0;
				list[i].className="";
			}
			// imgs[nums].style.opacity=1;
			animate(imgs[nums],{opacity:1});
			list[nums].className="active";
		}
		var t=setInterval(change,3000);
		banner_image.onmouseover=function(){
			clearInterval(t);
			zjt.style.display="block";
			yjt.style.display="block";
		}
		banner_image.onmouseout=function(){
			t=setInterval(change,3000);
			zjt.style.display="none";
			yjt.style.display="none";
		}
		zjt.onclick=function(){
			change("zjt");
		}
		yjt.onclick=function(){
			change("yjt");
		}

		for(var i=0;i<list.length;i++){
		list[i].aa=i;
		list[i].onmouseover=function(){
			for(var j=0;j<imgs.length;j++){
				imgs[j].style.opacity=0;
				list[j].className="";
				}
			animate(imgs[this.aa],{opacity:1});
			this.className="active";
			nums=this.aa;
			}
		}
	}
	banner();


	//广告无缝轮播
	var banner_bottom_r=$(".banner_bottom_r")[0];
	var img_box=$(".img_box",banner_bottom_r);
	var banner_b_ljt=$(".banner_b_ljt")[0];
	var banner_b_rjt=$(".banner_b_rjt")[0];
	for (var i = 1; i < img_box.length; i++) {
		img_box[i].style.left="1000px";
	}
	var now=0;//可视窗中的下标
	var next=0;//在右侧图片的下标
	function move1(type){
		type=type||"rjt";
		if(type=="rjt"){
			next++;
			if(next>=img_box.length){
				next=0;
			}
			img_box[next].style.left="1000px";
			img_box[now].style.left="0px";
			animate(img_box[now],{left:-1000},1000);
			animate(img_box[next],{left:0},1000);
		}
		else if(type=="ljt"){
			next--;
			if(next<=-1){
				next=img_box.length-1;
			}
			img_box[next].style.left="-1000px";
			img_box[now].style.left="0px";
			animate(img_box[now],{left:1000},1000);
			animate(img_box[next],{left:0},1000);
		}
		now=next;
	}
	banner_bottom_r.onmouseover=function(){
		banner_b_ljt.style.display="block";
		banner_b_rjt.style.display="block";
	}
	banner_bottom_r.onmouseout=function(){
		banner_b_ljt.style.display="none";
		banner_b_rjt.style.display="none";
	}
	banner_b_ljt.onclick=function(){
		move1("ljt");
	}
	banner_b_rjt.onclick=function(){
		move1("rjt");
	}


//floor1
	function floor1lunbo(num){
		var floor1=$(".floor1")[num];
		var floor1_main_lc=$(".floor1_main_lc",floor1)[0];
		var imgs1=$(".floor1_main_lcp",floor1);
		var lunbodian=$(".lunbodian",floor1)[0];
		var lis1=$("li",lunbodian);
		var floor1_ljt=$(".floor1_ljt",floor1)[0];
		var floor1_rjt=$(".floor1_rjt",floor1)[0];
		for (var i = 1; i < imgs1.length; i++) {
			imgs1[i].style.left="439px";
		}
		var now=0;//可视窗中的下标
		var next=0;//在右侧图片的下标
		function move(type){
			type=type||"rjt";
			if(type=="rjt"){
				next++;
				if(next>=imgs1.length){
					next=0;
				}
				imgs1[next].style.left="439px";
				imgs1[now].style.left="0";
				animate(imgs1[now],{left:-439});
				animate(imgs1[next],{left:0});
			}
			else if(type=="ljt"){
				next--;
				if(next<=-1){
					next=imgs1.length-1;
				}
				imgs1[next].style.left="-439px";
				imgs1[now].style.left="0";
				animate(imgs1[now],{left:439});
				animate(imgs1[next],{left:0});
			}
			lis1[now].className="";
			lis1[next].className="floor1_active";
			now=next;
		}
		var t=setInterval(move,2000);
		floor1_main_lc.onmouseover=function(){
			clearInterval(t);
			floor1_ljt.style.display="block";
			floor1_rjt.style.display="block";
		}
		floor1_main_lc.onmouseout=function(){
			t=setInterval(move,2000);
			floor1_ljt.style.display="none";
			floor1_rjt.style.display="none";
		}

		for (var i = 0; i < lis1.length; i++) {
			lis1[i].aa=i;
			lis1[i].onclick=function(){
				next=this.aa;
				if (next>=now) {
					imgs1[next].style.left="439px";
					imgs1[now].style.left="0px";
					animate(imgs1[now],{left:-439});
					animate(imgs1[next],{left:0});
				}else if(next<now) {
					imgs1[next].style.left="-439px";
					imgs1[now].style.left="0px";
					animate(imgs1[now],{left:439});
					animate(imgs1[next],{left:0});
				};
				lis1[now].className="";
				lis1[next].className="floor1_active";
				now=next;
			}
		}

		floor1_ljt.onclick=function(){
			move("ljt");
		}
		floor1_rjt.onclick=function(){
			move("rjt");
		}
	}
	for (var num = 0; num < 5; num++) {
		floor1lunbo(num);
	}



//floor2
	function floor2lunbo(num){
		var floor2=$(".floor2")[num];
		var floor2_mainl=$(".floor2_mainl",floor2)[0];
		var movebox=$(".floor2_main_lcp",floor2);
		var lunbodian2=$(".lunbodian2",floor2)[0];
		var lis2=$("li",lunbodian2);
		var floor2_ljt=$(".floor2_ljt",floor2)[0];
		var floor2_rjt=$(".floor2_rjt",floor2)[0];
		for (var i = 1; i < movebox.length; i++) {
			movebox[i].style.left="339px";
		}
		var now1=0;//可视窗中的下标
		var next1=0;//在右侧图片的下标
		function move2(type){
			type=type||"rjt";
			if(type=="rjt"){
				next1++;
				if(next1>=movebox.length){
					next1=0;
				}
				movebox[next1].style.left="339px";
				movebox[now1].style.left="0";
				animate(movebox[now1],{left:-339});
				animate(movebox[next1],{left:0});
			}
			else if(type=="ljt"){
				next1--;
				if(next1<=-1){
					next1=movebox.length-1;
				}
				movebox[next1].style.left="-339px";
				movebox[now1].style.left="0";
				animate(movebox[now1],{left:339});
				animate(movebox[next1],{left:0});
			}
			lis2[now1].className="";
			lis2[next1].className="floor2_active";
			now1=next1;
		}
		var t1=setInterval(move2,3000);
		floor2_mainl.onmouseover=function(){
			clearInterval(t1);
			floor2_ljt.style.display="block";
			floor2_rjt.style.display="block";
		}
		floor2_mainl.onmouseout=function(){
			t1=setInterval(move2,3000);
			floor2_ljt.style.display="none";
			floor2_rjt.style.display="none";
		}

		for (var i = 0; i < lis2.length; i++) {
			lis2[i].aa=i;
			lis2[i].onclick=function(){
				next1=this.aa;
				if (next1>=now1) {
					movebox[next1].style.left="339px";
					movebox[now1].style.left="0px";
					animate(movebox[now1],{left:-339});
					animate(movebox[next1],{left:0});
				}else if(next1<now1) {
					movebox[next1].style.left="-339px";
					movebox[now1].style.left="0px";
					animate(movebox[now1],{left:339});
					animate(movebox[next1],{left:0});
				};
				lis2[now1].className="";
				lis2[next1].className="floor2_active";
				now1=next1;
			}
		}

		floor2_ljt.onclick=function(){
			move2("ljt");
		}
		floor2_rjt.onclick=function(){
			move2("rjt");
		}
	}
for (var num = 0; num < 6; num++) {
	floor2lunbo(num);
};

//floor12
	function floor12lunbo(num){
		var floor12=$(".floor12")[0];
		var floor12_center=$(".floor12_center",floor12)[num];
		var imgs1=$(".floor12_main_lcp",floor12_center);
		var lunbodian=$(".lunbodian",floor12_center)[0];
		var lis1=$("li",lunbodian);
		var floor1_ljt=$(".floor1_ljt",floor12_center)[0];
		var floor1_rjt=$(".floor1_rjt",floor12_center)[0];
		for (var i = 1; i < imgs1.length; i++) {
			imgs1[i].style.left="395px";
		}
		var now=0;//可视窗中的下标
		var next=0;//在右侧图片的下标
		function move(type){
			type=type||"rjt";
			if(type=="rjt"){
				next++;
				if(next>=imgs1.length){
					next=0;
				}
				imgs1[next].style.left="395px";
				imgs1[now].style.left="0";
				animate(imgs1[now],{left:-395});
				animate(imgs1[next],{left:0});
			}
			else if(type=="ljt"){
				next--;
				if(next<=-1){
					next=imgs1.length-1;
				}
				imgs1[next].style.left="-395px";
				imgs1[now].style.left="0";
				animate(imgs1[now],{left:395});
				animate(imgs1[next],{left:0});
			}
			lis1[now].className="";
			lis1[next].className="floor1_active";
			now=next;
		}
		var t=setInterval(move,2000);
		floor12_center.onmouseover=function(){
			clearInterval(t);
			floor1_ljt.style.display="block";
			floor1_rjt.style.display="block";
		}
		floor12_center.onmouseout=function(){
			t=setInterval(move,2000);
			floor1_ljt.style.display="none";
			floor1_rjt.style.display="none";
		}

		for (var i = 0; i < lis1.length; i++) {
			lis1[i].aa=i;
			lis1[i].onclick=function(){
				next=this.aa;
				if (next>=now) {
					imgs1[next].style.left="395px";
					imgs1[now].style.left="0px";
					animate(imgs1[now],{left:-395});
					animate(imgs1[next],{left:0});
				}else if(next<now) {
					imgs1[next].style.left="-395px";
					imgs1[now].style.left="0px";
					animate(imgs1[now],{left:395});
					animate(imgs1[next],{left:0});
				};
				lis1[now].className="";
				lis1[next].className="floor1_active";
				now=next;
			}
		}

		floor1_ljt.onclick=function(){
			move("ljt");
		}
		floor1_rjt.onclick=function(){
			move("rjt");
		}
	}
	for (var num = 0; num < 2; num++) {
		floor12lunbo(num);
	}


//左移效果
	var mc_lp=$(".mc_lp")[0];
	var imgs2=$("img",mc_lp)[0];
		imgs2.onmouseover=function(){
			animate(imgs2,{left:10});
		}
		imgs2.onmouseout=function(){
			animate(imgs2,{left:20});
		}
	
	function aa(num){
		var p_img=$(".p_img")[num];
		var imgs3=$("img",p_img)[0];
		imgs3.onmouseover=function(){
			animate(imgs3,{left:-8});
		}
		imgs3.onmouseout=function(){
			animate(imgs3,{left:0});
		}
	}
	for (var i = 0; i < 6; i++) {
		aa(i);
	};

	// 楼层选项卡
	function xuanxiangka(num){
		var title=$("li",$(".floor1_nav")[num]);
		var floor1_mainbox=$(".floor1_mainbox")[num];
		var con=$(".main",floor1_mainbox);
		for(var i=0;i<title.length;i++){
			title[i].name=i;
			title[i].onmouseover=function(){
				for(var j=0;j<title.length;j++){
					title[j].className="";
					con[j].style.display="none";
				}
				con[this.name].style.display="block";
				title[this.name].className="active";
			}
		}
	}
	for (var num = 0; num < 11; num++) {
		xuanxiangka(num);
	};




	//上下轮播
	var box=$(".sharemc_c")[0];
	var imgbox=$(".share_p")[0];
	// var div=$("div",imgbox);
	// var len=div.length;
	// var w=getStyle(getFirst(imgbox),"top");
	// var s=len*(w+10);
	// imgbox.style.width=s+"px";
	function moveleft(){
		var first=getFirst(imgbox);
		animate(imgbox,{top:100},50,function(){
		imgbox.appendChild(first);
		imgbox.style.top="0px";
		})			
	}
	var t=setInterval(moveleft,1000);
	// box.onmouseover=function(){
	// 	clearInterval(t);
	// }
	// box.onmouseout=function(){
	// 	t=setInterval(moveleft,1000);
	// }


	// 搜索框
	var search_l=$(".search_l")[0];
	search_l.onfocus=function(){
		this.style.color="#666";
		if(this.value=="蓝月亮"){
			this.value="";
		}
	}
	search_l.onblur=function(){
		this.style.color="#999";
		if (this.value=="") {
			this.value="蓝月亮";
		};
	}


	// 楼层跳转
	function louceng(){
		var titles=$(".titles");
		var floor1s=$(".floor1s")[0]; 
		var sidenav_box=$(".sidenav_box")[0];
		var lis2=$("li",sidenav_box);
		var floor=$(".f",sidenav_box);
		var words=$(".words",sidenav_box);
		var now=0;
		document.documentElement.scrollTop=1;
		var obj=document.documentElement.scrollTop?document.documentElement:document.body;
		window.onscroll=function(){
			if(obj.scrollTop+160>=floor1s.offsetTop){
				sidenav_box.style.display="block";
			}
			else{
				sidenav_box.style.display="none";
			}
			for (var i = 0; i < titles.length; i++) {
				if(obj.scrollTop+160>=titles[i].offsetTop){
					now=i;
					for (var j = 0; j < words.length; j++) {
						words[j].style.display="none";
						floor[j].style.display="block";
					}
					floor[i].style.display="none";
					words[i].style.display="block";
				}
				if(obj.scrollTop+160<=titles[0].offsetTop){
					now=i;
					for (var j = 0; j < words.length; j++) {
						words[j].style.display="none";
					}
				}
			}
		}
		for (var i = 0; i < lis2.length; i++) {
			lis2[i].aa=i;
			lis2[i].onclick=function(){
				animate(obj,{scrollTop:titles[this.aa].offsetTop});
			}		
			lis2[i].onmouseover=function(){
				lis2[this.aa].style.background="#C81623";
				words[this.aa].style.color="#fff";
				floor[this.aa].style.display="none";
				words[this.aa].style.display="block";
			}
			lis2[i].onmouseout=function(){
				if(now!=[this.aa]){
					lis2[this.aa].style.background="";
					floor[this.aa].style.color="#625351";
					floor[this.aa].style.display="block";
					words[this.aa].style.display="none";
				}
				else{
					lis2[this.aa].style.background="";
					words[this.aa].style.color="#C81623";
					floor[this.aa].style.display="none";
					words[this.aa].style.display="block";
				}
			}
		}
	}
	louceng();


//下拉菜单
	var yiji=$(".yiji");
	var erji=$(".erji");
	for (var i = 0; i < yiji.length; i++) {
		yiji[i].aa=i;
		hover(yiji[i],function(){
			erji[this.aa].style.display="block";
		},
		function(){
			erji[this.aa].style.display="none";
		})
	}

// 猜你喜欢换一批效果
function change(){
	var nums=1;
	var like_t=$(".like_t")[0];
	var like_c=$(".like_c")[0];
	var likebox=$("ul",like_c);
	like_t.onclick=function(){
		for (var i = 0; i < likebox.length; i++) {
			likebox[i].style.opacity=0;
		}
		likebox[nums].style.opacity=1;
		nums++;
		if(nums>=likebox.length){
			nums=0;
		}		
	}
}
change();


// 右功能菜单左移
function rightnav(){
	var right_jd=$(".right_jd")[0];
	var right_nav=$("li",right_jd);
	var right_word=$("span",right_jd);
	for (var i = 0; i < right_nav.length; i++) {
		right_nav[i].aa=i;
		right_nav[i].onmouseover=function(){
			animate(right_word[this.aa],{right:34});
		}
		right_nav[i].onmouseout=function(){
			animate(right_word[this.aa],{right:-62});
		}
	}
}
rightnav();


//顶部下拉菜单
function address(){
	var header_l=$(".header_l")[0];
	var header_lx=$(".header_lx")[0];
	var address=$("li",header_lx);
	var word=$("a",header_lx);
	header_l.onmouseover=function(){
		header_lx.style.display="block";
	}
	header_l.onmouseout=function(){
		header_lx.style.display="none";
	}
	for (var i = 0; i < word.length; i++) {
		word[i].aa=i;
		word[i].onclick=function(){
			word[this.aa].style.background="#CA171D";
			word[this.aa].style.color="#fff";
		}
	};

}
address();

function myjd(num){
	var myjd=$(".myjd")[num];
	var myjd_x=$(".myjd_x")[num];
	myjd.onmouseover=function(){
		myjd_x.style.display="block";
	}
	myjd.onmouseout=function(){
		myjd_x.style.display="none";
	}
}
for (var i = 0; i < 5; i++) {
 	myjd(i);
 }; 







 //线
 var like_box=$(".like_box")[0];
 var topline=$(".topline")[0];
 var xian=$("i",topline)[0];
like_box.onmouseover=function(){
	var right=getStyle(xian,"right");
	xian.style.right="845px";
	animate(xian,{right:-1})
}



}