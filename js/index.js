(function(){
	$(".House").hover(function(){
		if($(window).width() > 640){
			var that = $(this);
			var mask = $(this).children(".mask");
			var HouseInfo = $(this).children(".HouseInfo");
			mask.height($(this).height());
			mask.show(100);HouseInfo.show(100);
		}

	},function(){
		if($(window).width() > 640){
			var that = $(this);
			var mask = $(this).children(".mask");
			var HouseInfo = $(this).children(".HouseInfo");
			mask.hide(100);HouseInfo.hide(100);
		}
	});
})();