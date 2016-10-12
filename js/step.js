/**
 * Created by LiKun on 2016/1/26.
 */
;(function ($) {
    function Step(ele, opts) {
        this.$element = ele;
        this.default = {
            currentStep: 2,
            updateFn: null
        };
        this.options = $.extend({}, this.default, opts);
    }

    Step.prototype = {
        constructor: Step,
        init: function () {
            var currentStep = this.options.currentStep - 1;//从0开始算
            this.setStep(currentStep);
        },
        setStep: function (currentStep) {
            var stepList = this.$element.find(".step-item");
            stepList.removeClass("current-step").removeClass("step-over");//清除样式
            stepList.slice(0, currentStep).addClass("step-over");//在当前步骤之前的步骤添加step-over样式
            stepList.eq(currentStep).addClass("current-step");//当前步骤添加current-step样式
            this.updateStepContent(this.options.updateFn, stepList);//回调修改步骤中的内容
        },
        updateStepContent: function (fn, stepList) {
            if ($.isFunction(fn)) {
                fn.call(this, stepList);
            } else {
                console.log("updateFn callback is not a function!");
            }
        }
    };

    $.fn.step = function (opts) {
        var step = new Step(this, opts);
        step.init();
    };
})(Zepto);
