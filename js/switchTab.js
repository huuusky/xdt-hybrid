/**
 * Created by LiKun on 2016/2/23.
 */
;(function ($) {
    function SwitchTab(ele, opts) {
        this.$element = ele;
        this.defaults = {
            data: null,
            switchover: null,
            complete: null
        };
        this.options = $.extend({}, this.defaults, opts);
        this.counter = 0;
    }

    SwitchTab.prototype = {
        constructor: SwitchTab,
        init: function () {
            this.bindAction();
            this.switchover(this.options.switchover, this.options.data[0]);
            this.complete(this.options.complete, this.options.data[0]);
        },
        bindAction: function () {
            var self = this;
            var switchLeftBtn = self.$element.find(".switch-left-btn");
            var switchRightBtn = self.$element.find(".switch-right-btn");
            switchLeftBtn.tap(function () {
                if (self.counter > 0) {
                    self.counter--;
                    self.switchover(self.options.switchover, self.options.data[self.counter]);
                }
            });
            switchRightBtn.tap(function () {
                if (self.counter < self.options.data.length - 1) {
                    self.counter++;
                    self.switchover(self.options.switchover, self.options.data[self.counter]);
                }
            });
        },
        switchover: function (fn, item) {
            if ($.isFunction(fn)) {
                fn.call(this, item);
            } else {
                console.log("callback is not a function!");
            }
        },
        complete: function (fn, item) {
            if ($.isFunction(fn)) {
                fn.call(this, item);
            } else {
                console.log("callback is not a function!");
            }
        }
    };

    $.fn.switchTab = function (opts) {
        var switchTab = new SwitchTab(this, opts);
        switchTab.init();
    };
})(Zepto);
