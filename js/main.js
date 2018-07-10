(function () {
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