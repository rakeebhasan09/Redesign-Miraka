(function ($) {
    $(document).ready(function () {
        // Scroll to Top
        jQuery(".back-to-top").click(function () {
            jQuery("html").animate({ scrollTop: "0px" }, 400);
            return false;
        });

        jQuery(window).scroll(function () {
            var upto = jQuery(window).scrollTop();
            if (upto > 500) {
                jQuery(".scrolltotop").fadeIn();
            } else {
                jQuery(".scrolltotop").fadeOut();
            }
        });

        // Mobile Menu Active
        jQuery("#humbarger-icon").click(function () {
            jQuery(".mobile-menu-wrpper").toggleClass("menu-active");
        });
        jQuery(window).on("resize", function () {
            if (jQuery(window).width() > 992) {
                jQuery(".mobile-menu-wrpper").removeClass("menu-active");
            }
        });

        // Accordion Activation
        jQuery(function ($) {
            $(".accordion-content").css("display", "none");
            // Open the first accordion content by default
            $(".accordion-title").first().addClass("open");
            $(".accordion-content").first().slideDown(300);
            $(".accordion-title").click(function () {
                $(".accordion-title").not(this).removeClass("open");
                $(".accordion-title").not(this).next().slideUp(300);
                $(this).toggleClass("open");
                $(this).next().slideToggle(300);
            });
        });

        //ANIMATION ACTIVATION
        // new WOW().init();
    });
})(jQuery);
