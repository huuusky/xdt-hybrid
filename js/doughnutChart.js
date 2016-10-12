/**
 * Created by LiKun on 2016/2/21.
 */
;(function ($) {
    function DoughnutChart(ele, opts) {
        this.$element = ele;
        this.defaults = {
            width: 80,//svg宽度
            height: 110,//svg高度
            r: 35,//圆环半径
            percent: 50,//进度百分比1-100
            startAngle: 0,//起始角度
            stroke: "#ff7000",//进度边框颜色
            bgStroke: "#dbdbdb",//背景圆环边框颜色
            strokeWidth: 8,//边框宽度
            fill: "none",//填充色
            centralText: " ",//圆环中心文字
            centralTextSize: 14,//中心文字大小
            centralTextColor: "#ff7000",//中心文字颜色
            bottomHeight: 0,
            bottomText: " ",//圆环底部文字
            bottomTextSize: 14,//底部文字大小
            bottomTextColor: "#5f5f5f"//底部文字颜色
        };
        this.progressCircle = null;
        this.options = $.extend({}, this.defaults, opts);
    }

    DoughnutChart.prototype = {
        constructor: DoughnutChart,
        init: function () {
            this.draw();
            this.setProgress($(this.progressCircle), this.options.percent);
        },
        draw: function () {
            var self = this;
            //创建svg根节点，并设置宽高
            var root = self.createSvgNode("http://www.w3.org/2000/svg", "svg", {
                width: self.options.width,
                height: self.options.height
            });
            self.$element.append(root);
            //创建背景圆环
            var bgCircleNode = self.createSvgNode("http://www.w3.org/2000/svg", "circle", {
                cx: self.options.width / 2,
                cy: (self.options.height - self.options.bottomHeight) / 2,
                r: self.options.r,
                stroke: self.options.bgStroke,
                "stroke-width": self.options.strokeWidth,
                fill: self.options.fill
            });
            root.appendChild(bgCircleNode);
            //创建进度圆环
            //var perimeter = 2 * Math.PI * self.options.r;//圆环周长
            //var strokeDasharray = (perimeter * self.options.percent / 100).toFixed(2) + " " + (perimeter * (1 - self.options.percent / 100)).toFixed(2);
            var circleNode = self.progressCircle = self.createSvgNode("http://www.w3.org/2000/svg", "circle", {
                "class": "progressCircle",
                cx: self.options.width / 2,
                cy: (self.options.height - self.options.bottomHeight) / 2,
                r: self.options.r,
                stroke: self.options.stroke,
                "stroke-width": self.options.strokeWidth,
                //"stroke-dasharray": '0 100',
                fill: self.options.fill
            });
            root.appendChild(circleNode);
            //创建中心文字
            var centralTextNode = self.createSvgNode("http://www.w3.org/2000/svg", "text", {
                x: self.options.width / 2,
                y: (self.options.height - self.options.bottomHeight) / 2,
                "font-size": self.options.centralTextSize,
                fill: self.options.centralTextColor,
                "text-anchor": "middle",
                "alignment-baseline": "central"
            });
            centralTextNode.innerHTML = self.options.centralText;
            root.appendChild(centralTextNode);
            //创建底部文字
            var bottomTextNode = self.createSvgNode("http://www.w3.org/2000/svg", "text", {
                x: self.options.width / 2,
                y: self.options.height - self.options.bottomHeight / 2,
                "font-size": self.options.bottomTextSize,
                fill: self.options.bottomTextColor,
                "text-anchor": "middle",
                "alignment-baseline": "central"
            });
            bottomTextNode.innerHTML = self.options.bottomText;
            root.appendChild(bottomTextNode);
        },
        createSvgNode: function (NS, tagName, attrObj) {
            var svgNode = document.createElementNS(NS, tagName);
            if (attrObj) {
                for (var attr in attrObj) {
                    if (attrObj.hasOwnProperty(attr)) {
                        svgNode.setAttribute(attr, attrObj[attr]);
                    }
                }
            }
            return svgNode;
        },
        setProgress: function (target, progress) {
            var perimeter = 2 * Math.PI * this.options.r;//圆环周长
            var strokeDasharray = (perimeter * progress / 100).toFixed(2) + " " + (perimeter * (1 - progress / 100)).toFixed(2);
            target.attr("stroke-dasharray", strokeDasharray);
        }
    };

    $.fn.doughnut = function (opts) {
        var doughnut = new DoughnutChart(this, opts);
        doughnut.init();
    };

    $.fn.updateDoughnut = function (target, progress) {
        var doughnut = new DoughnutChart(this);
        doughnut.setProgress(target, progress);
    };
})(Zepto);
