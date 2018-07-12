(function(){
	var menuBtn = document.querySelector(".menuBtn");
	var menuList = document.querySelector(".menuList");
	menuBtn.onclick = function () {
		if (hasClass(this, "isActive")) {
			removeClass(menuList, "show");
			removeClass(this, "isActive");
		} else {
			addClass(this, "isActive");
			addClass(menuList, "show");
		}

	};

	$(".navBar").hover(function(){
		$(this).children(".navDetail").addClass("show2");
	},function(){
		$(this).children(".navDetail").removeClass("show2");
	});

	$(".navName").hover(function(){
		$(this).addClass("navHover");
	},function(){
		$(this).removeClass("navHover");
	});

	function hasClass(elements, cName) {
		return !!elements.className.match(new RegExp("(\\s|^)" + cName + "(\\s|$)"));
	};
	function addClass(elements, cName) {
		if (!hasClass(elements, cName)) {
			elements.className += " " + cName;
		};
	};
	function removeClass(elements, cName) {
		if (hasClass(elements, cName)) {
			elements.className = elements.className.replace(new RegExp("(\\s|^)" + cName + "(\\s|$)"), " ");
		};
	};
})();