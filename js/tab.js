/**
 * Created by LiKun on 2016/2/27.
 */
;(function ($) {
    function Tab(ele, opts) {
        this.$element = ele;
        this.defaults = {
            data: null,
            switchSpeed: 500,
            complete: null
        };
        this.counter = 0;
        this.options = $.extend({}, this.defaults, opts);
    }

    Tab.prototype = {
        constructor: Tab,
        init: function () {
            var $tab = this.$element;
            var $tabHeaderList = $tab.find(".tab-header-item");
            var $tabContentWrap = $tab.find(".tab-content-wrap");
            var $tabContentList = $tabContentWrap.children(".tab-content-item");
            var tabContentLength = $tabContentList.length;
            this.initWidth($tabContentWrap, $tabContentList, tabContentLength);
            this.bindAction($tab, $tabHeaderList, $tabContentWrap, tabContentLength);
            //this.complete(this.options.complete);
        },
        initWidth: function ($tabContentWrap, $tabContentList, tabContentLength) {
            var self = this;
            $tabContentWrap.width(tabContentLength * 100 + "%");
            $tabContentWrap.css({
                width: tabContentLength * 100 + "%",
                transform: "translateX(0px)",
                transition: "transform " + self.options.switchSpeed + "ms"
            });
            $tabContentList.width((100 / tabContentLength).toFixed(4) + "%");
        },
        bindAction: function ($tab, $tabHeaderList, $tabContentWrap, tabContentLength) {
            var self = this;
            $tabHeaderList.on("tap", function () {
                var $this = $(this);
                self.counter = $this.index();
                $this.addClass("active").siblings().removeClass("active");
                $tabContentWrap.css("transform", "translateX(-" + (self.counter * 100 / tabContentLength).toFixed(4) + "%)");
            });
            $tab.on({
                swipeLeft: function () {
                    if (self.counter < (tabContentLength - 1)) {
                        self.counter++;
                        $tabHeaderList.eq(self.counter).addClass("active").siblings().removeClass("active");
                        $tabContentWrap.css("transform", "translateX(-" + (self.counter * 100 / tabContentLength).toFixed(4) + "%)");
                    }
                },
                swipeRight: function () {
                    if (self.counter > 0) {
                        self.counter--;
                        $tabHeaderList.eq(self.counter).addClass("active").siblings().removeClass("active");
                        $tabContentWrap.css("transform", "translateX(-" + (self.counter * 100 / tabContentLength).toFixed(4) + "%)");
                    }
                }
            });
        },
        complete: function (fn) {
            if ($.isFunction(fn)) {
                fn.call(this);
            } else {
                console.log("completeFn callback is not a function!");
            }
        }
    };

    $.fn.tab = function (opts) {
        var tab = new Tab(this, opts);
        tab.init();
    };
})(Zepto);
