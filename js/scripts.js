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
    });
})(jQuery);
