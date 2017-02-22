$(document).ready(function(){
	/*轮播事件*/
	var num = $(".banner-box a").length,
	imum = 0,
	time = null;
	$(".banner-box a:gt(0)").hide();

	function bannergo(){
		if (imum == num-1) {
			imum = -1;
		}
		$(".banner-box a").eq(imum+1).fadeIn("slow").siblings("a").fadeOut("slow");
		imum++
	}

	function timebox(){
		timer = setInterval(function(){
			bannergo();
		},5000)
	}
	timebox();

	/*滚动条事件*/
	/*var biu = $(window).height();
	var s =$(document).scrollTop();
	$(window).scroll(function(){
		if (biu-s <= 683) {
			alert("BOOM!")
		}

	})
	console.log(biu);
	console.log(s);
	*/

})