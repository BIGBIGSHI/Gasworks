(function () {
    var winW = $(window).width();

    var mySwiper = new Swiper('.banner', {
        direction: 'horizontal',
        speed: 800,
        loop: true,
        effect: 'fade',
        autoplay: {
            delay: 5000,
            stopOnLastSlide: false,
            disableOnInteraction: true,
        },
        pagination: {
            el: '.swiper-pagination',
            bulletClass : 'my-bullet',
            bulletActiveClass: 'my-bullet-active',
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

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
        $(this).children(".navDetail").show();
    },function(){
        $(this).children(".navDetail").hide();
    });

    $(".navName").hover(function(){
        $(this).addClass("navHover");
    },function(){
        $(this).removeClass("navHover");
    });

    $(window).scroll(function(){
        var top = $(this).scrollTop();
        if(winW <= 1200){
            if(top > 0){
                if(!$(".menu").hasClass("black")){
                    $(".menu").addClass("black");
                }
            }else{
                if($(".menu").hasClass("black")){
                    $(".menu").removeClass("black");
                }
            }
        }else{
            if(winW > 1700){
                if(top > 580){
                    if(!$(".navTop").hasClass("fixed")){
                        $(".navTop").addClass("fixed").addClass("black");
                    }
                }else{
                    if($(".navTop").hasClass("fixed")){
                        $(".navTop").removeClass("fixed").removeClass("black");
                    }
                }
            }else if(winW > 1600){
                if(top > 530){
                    if(!$(".navTop").hasClass("fixed")){
                        $(".navTop").addClass("fixed").addClass("black");
                    }
                }else{
                    if($(".navTop").hasClass("fixed")){
                        $(".navTop").removeClass("fixed").removeClass("black");
                    }
                }
            }else if(winW > 1500){
                if(top > 480){
                    if(!$(".navTop").hasClass("fixed")){
                        $(".navTop").addClass("fixed").addClass("black");
                    }
                }else{
                    if($(".navTop").hasClass("fixed")){
                        $(".navTop").removeClass("fixed").removeClass("black");
                    }
                }
            } else if(winW > 1200){
                if(top > 430){
                    if(!$(".navTop").hasClass("fixed")){
                        $(".navTop").addClass("fixed").addClass("black");
                    }
                }else{
                    if($(".navTop").hasClass("fixed")){
                        $(".navTop").removeClass("fixed").removeClass("black");
                    }
                }
            }
        }
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