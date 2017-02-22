$(document).ready(function(){
	var $li = $(".choose-option li"),
		$choose = $(".choose-option li a .choose-bg"),
		$cha = $(".choose-option li a"),
		$div = $(".choose-right .mode");

		$(".choose-option li:first a").addClass("cha");
		$(".choose-option li:first a .choose-bg").addClass("choose-box");
	// 左边的点击事件
	$li.click(function(){
		var index = $li.index(this);

		
		$choose.eq(index).addClass("choose-box").parents($li).siblings().find(".choose-bg").removeClass("choose-box");

		$cha.eq(index).addClass("cha").parent().siblings().find(".cha").removeClass("cha");

		$div.eq(index).removeClass("mode-box").siblings("div").addClass("mode-box");
		/*$choose.eq(index).addClass("choose-box").parent().siblings().find(".choose-bg").removeClass("choose-box");
		
		$cha.eq(index).addClass("cha").parent().siblings().find(".cha").removeClass("cha");
		
		$div.eq(index).removeClass("mode-box").siblings("div").addClass("mode-box");
*/
	})

	//页码点击事件
	var $pageli = $(".page li"),
		$pagela = $(".page li a");

		$pageli.click(function(){
			var pin = $pageli.index(this);

			$pageli.eq(pin).addClass("page-box").siblings().removeClass("page-box");

			$pagela.eq(pin).addClass("abox").parent().siblings().find(".abox").removeClass("abox");
		})


})