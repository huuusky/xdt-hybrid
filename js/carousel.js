/**
 * Created by LiKun on 2016/2/4.
 */
;(function ($) {
    function Carousel(element, opts) {
        this.$element = element;
        this.default = {
            speed: 500,//滑动动画速度
            delay: 3000,//滑动延时
            banner: [],//轮播图数组
            dots: false//下标
        };
        this.interval = null;//定时器
        this.step = 0;//轮播初始步值
        this.options = $.extend({}, this.default, opts);
    }

    Carousel.prototype = {
        constructor: Carousel,
        init: function () {
            var $ul = this.$element.find("ul");
            var $lis = $ul.find("li");
            var lisNumber = $lis.length;
            this.initWidth($ul, $lis, lisNumber);
            this.scroll($ul, lisNumber);
            this.bindAction($ul, lisNumber);
        },
        initWidth: function ($ul, $lis, lisNumber) {
            $ul.css({
                width: 100 * lisNumber + "%",
                transform: "translateX(0)",
                transition: "transform " +  this.options.speed + "ms"
            });
            $lis.width((100 / lisNumber).toFixed(4) + "%");
        },
        scroll: function ($ul, lisNumber) {
            var self = this;
            if (lisNumber > 1) {
                self.interval = setInterval(function () {
                    self.step--;
                    var step = self.step % lisNumber;
                    $ul.css("transform", "translateX(" + (step * 100 / lisNumber).toFixed(4) +"%)");
                }, self.options.delay);
            } 
        },
        bindAction: function ($ul, lisNumber) {
            var self = this;
            if (lisNumber > 1) {
                $ul.on({
                    tap: function () {
                        window.clearInterval(self.interval);
                        //console.log(self.step % lisNumber);
                        self.scroll($ul, lisNumber);
                    },
                    swipeLeft: function () {
                        window.clearInterval(self.interval);
                        if (self.step % lisNumber != -2) {//最后一张图时不能向左滑动
                            self.step -= 1;
                            var step = self.step % lisNumber;
                            $ul.css("transform", "translateX(" + (step * 100 / lisNumber).toFixed(4) + "%)");
                        }
                        self.scroll($ul, lisNumber);
                    },
                    swipeRight: function () {
                        window.clearInterval(self.interval);
                        if (self.step % lisNumber !== 0) {//第一张图时不能向右滑动
                            self.step += 1;
                            var step = self.step % lisNumber;
                            $ul.css("transform", "translateX(" + (step * 100 / lisNumber).toFixed(4) + "%)");
                        }
                        self.scroll($ul, lisNumber);
                    }
                });
            }
        }
    };

    $.fn.carousel = function (opts) {
        var carousel = new Carousel(this, opts);
        carousel.init();
    };
})(Zepto);
