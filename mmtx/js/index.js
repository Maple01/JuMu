$(document).ready(function(){

	
	$(".tar .yun").addClass("tar-text-boom");
	$(".tar .tar-text2").addClass("tar-text2-left");
	$(".tar .shan").addClass("shan-left");
	$(".tar .yu").addClass("yu-top");

	setTimeout(function(){
		$(".tar .tar-text").addClass("tar-text-boom");
		$(".tar .yun").addClass("tar-text-boom");
	},1500);

	var $navb = $(".navbar-right .nav-box2");

	$navb.click(function(){
		$(this).addClass("nav-boom").siblings().removeClass("nav-boom");
	})

	$(".tar .yun2").addClass("yun2-box");
	$(".tar .yun3").addClass("yun3-box");
	
	setTimeout(function(){
		$(".tar .ctext").addClass("ctext-box");
			setTimeout(function(){
				$(".tar .ctext2").addClass("ctext2-box");
			},800);
	},1000);

	$(".com-right button").mousedown(function(){
		$(this).css("backgroundColor","#68a468");
	})
	$(".com-right button").mouseup(function(){
		$(this).css("backgroundColor","#8bc18b");
	})


})