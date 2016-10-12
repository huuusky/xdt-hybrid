/**
 * Created by Likun on 2016/1/20.
 */
;(function($, window){
    function Timeline(element, opts) {
        this.$element = element;
        this.defaults = {
            paddingWidth: 20,
            today: [],
            dayOfWeekLabel: ["周日", "周一", "周二", "周三", "周四", "周五", "周六"],
            speed: 500,
            updateFn: null
        };
        this.step = 0;
        this.options = $.extend({}, this.defaults, opts);
    }

    Timeline.prototype = {
        constructor: Timeline,
        init: function () {
            var $timeline = this.$element;
            var $timelineBox = $timeline.find("#timelineBox");
            var $timelineList = $timeline.find(".timeline-item");
            var timelineLength = $timelineList.length;

            this.initWidth($timelineBox, $timelineList, timelineLength);
            this.initTimelineContent($timelineList);
            this.bindAction($timeline, $timelineBox, $timelineList, timelineLength);

        },
        initWidth: function ($timelineBox, $timelineList, timelineLength) {
            $timelineBox.css({
                width: (timelineLength / 3 * 100).toFixed(4) + "%",
                "-webkit-transform": "translateX(0)",
                "-webkit-transition": "transform " +  this.options.speed + "ms",
                transform: "translateX(0)",
                transition: "transform " +  this.options.speed + "ms"
            });
            $timelineList.width((100 / timelineLength).toFixed(4) + "%");
        },
        initTimelineContent: function (timelineList) {
            var self = this;
            var date = new Date(self.options.today[0], self.options.today[1], self.options.today[2]);
            var oneDayMilliseconds = 24 * 60 * 60 * 1000;//一天的毫秒数86400000,
            var currentMilliseconds = date.getTime();
            this.updateContent(self.options.updateFn, date.getDay());
            $.each(timelineList, function (index, element) {
                var $this = $(element);
                //计算每一天的毫秒数，减去昨天的占位li
                var dayMilliseconds = currentMilliseconds + oneDayMilliseconds * (index - 1);
                var monthDay = $this.find(".month-day");
                var dayOfWeek = $this.find(".day-of-week");
                date.setTime(dayMilliseconds);//根据毫秒数设置日期
                monthDay.text((date.getMonth() + 1) + "." + date.getDate());
                $this.attr("dayOfWeek", date.getDay());//每一项添加周几属性
                if (index === 0) {
                    dayOfWeek.text("昨天");
                } else if (index === 1) {
                    $this.addClass("active");
                    dayOfWeek.text("今天");
                } else {
                    dayOfWeek.text(self.options.dayOfWeekLabel[date.getDay()]);
                }
            });
        },
        bindAction: function ($timeline, $timelineBox, $timelineList, timelineLength) {
            var self = this;
            var $scrollLeftBtn = $timeline.find("#scrollLeftBtn");
            var $scrollRightBtn = $timeline.find("#scrollRightBtn");
            //点击向左按钮向右滑动
            $scrollLeftBtn.on("tap", function (e) {
                e.stopPropagation();
                if (self.step !== 0) {
                    self.step--;
                    var $activeItem = $timelineList.eq(self.step + 1);//页面列表中多了一条昨天的数据，故加1
                    var dayOfWeek = $activeItem.attr("dayOfWeek");
                    $activeItem.addClass("active").siblings().removeClass("active");
                    $timelineBox.css({
                        "-webkit-transform": "translateX(-" + (self.step * 100 / timelineLength).toFixed(4) + "%)",
                        transform: "translateX(-" + (self.step * 100 / timelineLength).toFixed(4) + "%)"
                    });
                    self.updateContent(self.options.updateFn, dayOfWeek);
                    $scrollRightBtn.show();
                    if (self.step === 0) {//最后一个时不显示向左滚动按钮
                        $scrollLeftBtn.hide();
                    }
                }
            });
            //点击向右按钮向左滑动
            $scrollRightBtn.on("tap", function (e) {
                e.stopPropagation();
                if (self.step < (timelineLength - 2)) {
                    self.step++;
                    var $activeItem = $timelineList.eq(self.step + 1);//页面列表中多了一条昨天的数据，故加1
                    var dayOfWeek = $activeItem.attr("dayOfWeek");
                    $activeItem.addClass("active").siblings().removeClass("active");
                    $timelineBox.css({
                        "-webkit-transform": "translateX(-" + (self.step * 100 / timelineLength).toFixed(4) + "%)",
                        transform: "translateX(-" + (self.step * 100 / timelineLength).toFixed(4) + "%)"
                    });
                    self.updateContent(self.options.updateFn, dayOfWeek);
                    $scrollLeftBtn.show();
                    if (self.step === (timelineLength - 2)) {//最后一个时不显示向左滚动按钮
                        $scrollRightBtn.hide();
                    }
                }
            });
            //左右滑动
            $timeline.on({
                "swipeLeft": function () {
                    $scrollRightBtn.trigger("tap");
                },
                "swipeRight": function () {
                    $scrollLeftBtn.trigger("tap");
                }
            });
        },
        updateContent: function (fn, dayOfWeek) {
            if ($.isFunction(fn)) {
                fn.call(this, dayOfWeek);//回调函数
            } else {
                console.log("updateFn callback is not a function!");
            }
        }
    };
    $.fn.timeline = function (opts) {
        var tl = new Timeline(this, opts);
        tl.init();
    };
})(Zepto || $, window);
