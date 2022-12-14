function convertHex(e, a) {
    return e = e.replace("#", ""), r = parseInt(e.substring(0, 2), 16), g = parseInt(e.substring(2, 4), 16), b = parseInt(e.substring(4, 6), 16), result = "rgba(" + r + ", " + g + ", " + b + ", " + a + ")", result
}

!function (o) {
    "use strict";
    o(document).on("ready", function () {
        var e, a, s, t, i, n;
        c(), o("*[data-pattern-overlay-darkness-opacity]").each(function () {
            var e = o(this).data("pattern-overlay-darkness-opacity");
            o(this).css("background-color", convertHex("#000000", e))
        }), o("*[data-pattern-overlay-background-image]").each(function () {
            "none" == o(this).data("pattern-overlay-background-image") ? o(this).css("background-image", "none") : "yes" == o(this).data("pattern-overlay-background-image") && o(this).css("background-image")
        }), o("*[data-remove-pattern-overlay]").each(function () {
            "yes" == o(this).data("remove-pattern-overlay") && o(this).css("background", "none")
        }), o("*[data-bg-color]").each(function () {
            var e = o(this).data("bg-color");
            o(this).css("background-color", e)
        }), o("*[data-bg-color-opacity]").each(function () {
            var e = o(this).data("bg-color-opacity"), a = o(this).css("background-color"),
                s = a.replace("rgb", "rgba").replace(")", ", " + e + ")");
            o(this).css("background-color", s)
        }), o("*[data-bg-img]").each(function () {
            var e = o(this).data("bg-img");
            o(this).css("background-image", "url('" + e + "')")
        }), o("*[data-parallax-bg-img]").each(function () {
            var e = o(this).data("parallax-bg-img");
            o(this).css("background-image", "url('./images/files/parallax-bg/" + e + "')")
        }), r(), o(".img-bg").each(function () {
            var e = o(this), a = e.find("img").attr("src");
            if (e.parent(".section-image").length) e.css("background-image", "url('" + a + "')"); else {
                e.prepend("<div class='bg-element'></div>");
                var s = e.find(".bg-element");
                s.css("background-image", "url('" + a + "')")
            }
            e.find("img").css({opacity: 0, visibility: "hidden"})
        }), o("#full-container").fitVids(), o(".video-background").each(function () {
            o(this).YTPlayer({
                mute: !1,
                autoPlay: !0,
                opacity: 1,
                containment: ".video-background",
                showControls: !1,
                startAt: 0,
                addRaster: !0,
                showYTLogo: !1,
                stopMovieOnBlur: !1
            })
        }), o(".lightbox-img").magnificPopup({
            type: "image",
            gallery: {enabled: !1},
            mainClass: "mfp-fade",
            removalDelay: 160,
            preloader: !1,
            fixedContentPos: !1
        }), o(".lightbox-gallery").magnificPopup({
            type: "image",
            gallery: {enabled: !0},
            mainClass: "mfp-fade",
            removalDelay: 160,
            preloader: !1,
            fixedContentPos: !1
        }), o(".lightbox-iframe").magnificPopup({
            type: "iframe",
            mainClass: "mfp-fade",
            removalDelay: 160,
            preloader: !1,
            fixedContentPos: !1
        }), e = o(".header-bar.sticky"), a = e.height(), s = e ? a : 0, o(".scroll-to").on("click", function (e) {
            e.preventDefault();
            var a = o(this);
            o("html, body").stop().animate({scrollTop: o(a.attr("href")).offset().top - s}, 1200, "easeInOutExpo")
        }), t = o(".banner-parallax"), i = t.children("img:first-child").attr("src"), t.prepend("<div class='bg-element'></div>"), t.find("> .bg-element").css("background-image", "url('" + i + "')").attr("data-stellar-background-ratio", .2), o(".parallax-section").each(function () {
            var e = o(this), a = e.children("img:first-child").attr("src");
            e.prepend("<div class='bg-element'></div>");
            var s = e.find("> .bg-element");
            s.css("background-image", "url('" + a + "')").attr("data-stellar-background-ratio", .2)
        }), function () {
            o(".tabs > li").addClass("tabs-item");
            var a = o(".tabs > .active"), s = o(".tabs-content"), t = s.find(".active"), i = t.outerHeight();
            t.show(), s.height(i), o(".tabs .tabs-item").on("click", function () {
                o(this).hasClass("active") || (o(".tabs .tabs-item").removeClass("active"), o(this).addClass("active"), a = o(".tabs .active"), t.animate({top: 15}, {
                    duration: 200,
                    queue: !1
                }).fadeOut(200, function () {
                    o(".tabs-content > li").removeClass("active");
                    var e = a.parent(".owl-item").index();
                    o(".tabs-content > li").eq(e).addClass("active"), t = o(".tabs-content > .active"), i = t.outerHeight(), s.stop().delay(0).animate({height: i}, 200, function () {
                        t.delay(0).css("top", 15).animate({top: 0}, {duration: 150, queue: !1}).fadeIn(100)
                    })
                }))
            })
        }(), o(".slider-projects > .owl-carousel").owlCarousel({
            rtl: d,
            autoplay: !1,
            autoplaySpeed: 500,
            autoplayTimeout: 5e3,
            dragEndSpeed: 400,
            autoplayHoverPause: !0,
            loop: !1,
            slideBy: 1,
            margin: 20,
            stagePadding: 0,
            nav: !1,
            dots: !0,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            responsive: {0: {items: 1}, 480: {items: 1}, 600: {items: 2}, 768: {items: 2}, 1024: {items: 2}},
            autoHeight: !0,
            autoWidth: !1,
            navRewind: !0,
            center: !1,
            dotsEach: 1,
            dotData: !1,
            lazyLoad: !1,
            smartSpeed: 600,
            fluidSpeed: 5e3,
            navSpeed: 400,
            dotsSpeed: 400
        }), o(".slider-boxes-features > .owl-carousel").owlCarousel({
            items: 6,
            rtl: d,
            autoplay: !1,
            autoplaySpeed: 500,
            autoplayTimeout: 3e3,
            dragEndSpeed: 400,
            autoplayHoverPause: !0,
            loop: !1,
            slideBy: 1,
            margin: 20,
            stagePadding: 0,
            nav: !1,
            dots: !1,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            responsive: {0: {items: 2}, 480: {items: 3}, 768: {items: 4}, 992: {items: 5}, 1200: {items: 6}},
            autoHeight: !1,
            autoWidth: !1,
            navRewind: !0,
            center: !1,
            dotsEach: 1,
            dotData: !1,
            lazyLoad: !1,
            smartSpeed: 600,
            fluidSpeed: 5e3,
            navSpeed: 400,
            dotsSpeed: 400
        }), (n = o(".slider-testimonials > .owl-carousel")).on("initialized.owl.carousel", function (e) {
            var a = e.item.index, s = o(".slider-testimonials > .owl-carousel .owl-item");
            l.hasClass("device-lg") || l.hasClass("device-md") ? s.eq(a + 1).addClass("highlighted") : (l.hasClass("device-sm") || l.hasClass("device-xs") || l.hasClass("device-xxs")) && s.eq(a).addClass("highlighted")
        }), n.on("resized.owl.carousel", function (e) {
            var a = e.item.index, s = o(".slider-testimonials > .owl-carousel .owl-item");
            l.hasClass("device-lg") || l.hasClass("device-md") ? (s.removeClass("highlighted"), s.eq(a + 1).addClass("highlighted")) : (l.hasClass("device-sm") || l.hasClass("device-xs") || l.hasClass("device-xxs")) && (s.removeClass("highlighted"), s.eq(a).addClass("highlighted"))
        }), o(".slider-testimonials > .owl-carousel").on("translate.owl.carousel", function (e) {
            var a = e.item.index, s = o(".slider-testimonials > .owl-carousel .owl-item");
            l.hasClass("device-lg") || l.hasClass("device-md") ? (s.removeClass("highlighted"), s.eq(a + 1).addClass("highlighted")) : (l.hasClass("device-sm") || l.hasClass("device-xs") || l.hasClass("device-xxs")) && (s.removeClass("highlighted"), s.eq(a).addClass("highlighted"))
        }), n.owlCarousel({
            rtl: d,
            autoplay: !1,
            autoplaySpeed: 500,
            autoplayTimeout: 5e3,
            dragEndSpeed: 400,
            autoplayHoverPause: !0,
            loop: !1,
            slideBy: 1,
            margin: 20,
            stagePadding: 0,
            nav: !1,
            dots: !0,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            responsive: {0: {items: 1}, 480: {items: 1}, 768: {items: 2}, 1024: {items: 3}},
            autoHeight: !0,
            autoWidth: !1,
            navRewind: !0,
            center: !1,
            dotsEach: 1,
            dotData: !1,
            lazyLoad: !1,
            smartSpeed: 600,
            fluidSpeed: 5e3,
            navSpeed: 400,
            dotsSpeed: 400
        }), function () {
            o("#form-cta-subscribe-2").validate({
                rules: {
                    cs2Name: {required: !0, minlength: 3},
                    cs2Email: {required: !0, email: !0}
                }
            });
            var e = u.data("error-msg"), i = e || "Please Follow Error Messages and Complete as Required";
            o("#form-cta-subscribe-2").on("submit", function (e) {
                if (e.isDefaultPrevented()) {
                    var a = '<i class="cs-error-icon fas fa-times"></i>' + i;
                    g(!1, a), m()
                } else e.preventDefault(), s = o("#cs2Name").val(), t = o("#cs2Email").val(), o.ajax({
                    type: "POST",
                    url: "./php/cs2-process.php",
                    data: "cs2Name=" + s + "&cs2Email=" + t,
                    success: function (e) {
                        var a, s;
                        "success" == e ? (a = u.data("success-msg"), s = a || "Thank you for your submission :)", o("#form-cta-subscribe-2")[0].reset(), g(!0, '<i class="cs-success-icon fas fa-check"></i>' + s), o(".cs-notifications-content").addClass("sent"), u.css("opacity", 0), u.slideDown(300).animate({opacity: 1}, 300).delay(5e3).slideUp(400), o("#form-cta-subscribe-2").hasClass("redirected") && setTimeout(function () {
                            window.location.href = "thank-you-page.html"
                        }, 3e3)) : (m(), g(!1, e))
                    }
                });
                var s, t
            })
        }(), h()
    }), o(window).on("resize", function () {
        c(), r(), a()
    }), o(window).on("scroll", function () {
        h(), s()
    }), o(window).on("load", function () {
        o(window).on("scroll", function () {
        })
    });
    (o = jQuery.noConflict())(window), o(this);
    var l = o("body");

    function c() {
        jRespond([{label: "smallest", enter: 0, exit: 479}, {
            label: "handheld",
            enter: 480,
            exit: 767
        }, {label: "tablet", enter: 768, exit: 991}, {label: "laptop", enter: 992, exit: 1199}, {
            label: "desktop",
            enter: 1200,
            exit: 1e4
        }]).addFunc([{
            breakpoint: "desktop", enter: function () {
                l.addClass("device-lg")
            }, exit: function () {
                l.removeClass("device-lg")
            }
        }, {
            breakpoint: "laptop", enter: function () {
                l.addClass("device-md")
            }, exit: function () {
                l.removeClass("device-md")
            }
        }, {
            breakpoint: "tablet", enter: function () {
                l.addClass("device-sm")
            }, exit: function () {
                l.removeClass("device-sm")
            }
        }, {
            breakpoint: "handheld", enter: function () {
                l.addClass("device-xs")
            }, exit: function () {
                l.removeClass("device-xs")
            }
        }, {
            breakpoint: "smallest", enter: function () {
                l.addClass("device-xxs")
            }, exit: function () {
                l.removeClass("device-xxs")
            }
        }])
    }

    function r() {
        o(".fullscreen, #home-header, #home-banner").css("height", o(window).height()), o("#banner.fullscreen").css("height", o(window).height())
    }

    o(".banner-parallax").each(function () {
        var e = o(this).data("banner-height"), a = o(this).find(".row > [class*='col-']");
        o(this).css("min-height", e), o(a).css("min-height", e)
    });
    var d, e = o("html").css("direction");

    function a() {
        o(function () {
            (l.hasClass("device-lg") || l.hasClass("device-md") || l.hasClass("device-sm")) && o.stellar({
                horizontalScrolling: !1,
                verticalOffset: 0,
                responsive: !0
            })
        })
    }

    function h() {
        o(window).scrollTop();
        800 < o(window).scrollTop() ? o(".scroll-top-icon").addClass("show") : o(".scroll-top-icon").removeClass("show")
    }

    function s() {
        var e = o(document).height() - o(window).height(), a = o(document).scrollTop() / (e / 100);
        o("#scroll-progress .scroll-progress").width(a + "%"), o(".scroll-percent").text(a.toFixed(0) + "%")
    }

    d = "rtl" == e, o(".scroll-top").on("click", function (e) {
        e.preventDefault(), o("html, body").animate({scrollTop: 0}, 1200, "easeInOutExpo")
    }), o(".scroll-to").on("click", function (e) {
        e.preventDefault();
        var a = o(this);
        o("html, body").stop().animate({scrollTop: o(a.attr("href")).offset().top}, 1200, "easeInOutExpo")
    });
    var u = o(".cs-notifications");

    function m() {
        u.css("opacity", 0), u.slideDown(300).animate({opacity: 1}, 300), o(".cs-notifications-content").removeClass("sent")
    }

    function g(e, a) {
        var s;
        s = "shake animated", u.delay(300).addClass(s).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function () {
            o(this).removeClass("shake bounce animated")
        }), u.children(".cs-notifications-content").html(a)
    }

    o("#form-cta-subscribe-1").ajaxChimp({
        callback: function (e) {
            var a = u;
            "success" === e.result ? (o("#form-cta-subscribe-1")[0].reset(), a.children(".cs-notifications-content").html('<i class="cs-success-icon fas fa-check"></i>' + e.msg).addClass("sent shake animated").one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function () {
                o(this).removeClass("shake bounce animated")
            }), a.css("opacity", 0), a.slideDown(300).animate({opacity: 1}, 300).delay(8e3).slideUp(400)) : "error" === e.result && (a.children(".cs-notifications-content").html('<i class="cs-error-icon fas fa-times"></i>' + e.msg).removeClass("sent").addClass("bounce animated").one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function () {
                o(this).removeClass("shake bounce animated")
            }), a.css("opacity", 0), a.slideDown(300).animate({opacity: 1}, 300))
        }, url: "https://themeforest.us12.list-manage.com/subscribe/post?u=271ee03ffa4f5e3888d79125e&amp;id=163f4114e2"
    }), jQuery("https://moradhamdy.com/morad/pixeliy-demo/img.svg").each(function () {
        var s = jQuery(this), t = s.attr("id"), i = s.attr("class"), e = s.attr("src");
        jQuery.get(e, function (e) {
            var a = jQuery(e).find("svg");
            void 0 !== t && (a = a.attr("id", t)), void 0 !== i && (a = a.attr("class", i + " replaced-svg")), a = a.removeAttr("xmlns:a"), s.replaceWith(a)
        }, "xml")
    })
}(jQuery);
