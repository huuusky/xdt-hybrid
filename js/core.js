/**
 * Created by LiKun on 2016/3/11.
 */
/**
 * 请求
 */
var Request = {
    /**
     @method 获取地址栏中请求参数
     @param {string} parameter 参数名
     @return {string}
     */
    getParameter: function (parameter) {
        var reg = new RegExp("[\?\&]" + parameter + "=([^\&]*)(\&?)", "i");
        var str = location.search.match(reg);
        return str ? str[1] : str;
    }
};
/**
 * Ajax请求
 */
var Ajax = {
    /**
     @param {string} request.url 请求URL
     @param {json} request.data 请求数据
     @param {function} request.callback 回调函数
     */
    get: function (request) {
        $.ajax({
            type: "GET",
            url: request.url,
            data: request.data,
            dataType: "json",
            timeout: 3000,
            success: function (response) {
                if (response.success) {
                    if ($.isFunction(request.callback)) {
                        request.callback.call(this, response.data);
                    }
                } else {
                    Util.toast(response.msg || "网络错误");
                }
            },
            error: function (xhr, type) {
                Util.toast("网络错误");
            }
        });
    },
    /**
     @param {string} request.url 请求URL
     @param {json} request.data 请求数据
     @param {function} request.callback 回调函数
     */
    post: function (request) {
        $.ajax({
            type: "POST",
            url: request.url,
            data: request.data,
            dataType: "json",
            timeout: 3000,
            success: function (response) {
                if (response.success) {
                    if ($.isFunction(request.callback)) {
                        request.callback.call(this, response.data);
                    }
                } else {
                    Util.toast(response.msg || "网络错误");
                }
            },
            error: function (xhr, type) {
                Util.toast("网络错误");
            }
        });
    }
};
/**
 @method 正则校验
 @param {string} cellphoneNumber 国内手机号
 @param {string} code 验证码
 @param {string} userName 用户名
 @param {string} email 邮件
 @return {boolean}
 */
var RegEx = {
    cellphone: function (cellphoneNumber) {
        return new RegExp("[0-9]{11}").test(cellphoneNumber);
    },
    validateCode: function (code) {
        return new RegExp("[0-9]{4}").test(code);
    },
    userName: function (userName) {
        return new RegExp("[A-Za-z0-9_\-\u4e00-\u9fa5]+").test(userName);
    },
    email: function (email) {
        return new RegExp("\w[-\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+\.)+[A-Za-z]{2,14}").test(email);
    }
};

/**
 * 工具
 */
var Util = {
    unique: function (array) {
        array.filter(function (item, pos, self) {
            return self.indexOf(item) == pos;
        });
    },
    /**
     @method 获取随机数，只传一个值时返回0-under之间的随机数
     @param {number} under 下限
     @param {number} over 上限
     @return {number}
     */
    random: function (under, over) {
        switch (arguments.length) {
            case 1:
                return parseInt(Math.random() * under + 1);
            case 2:
                return parseInt(Math.random() * (over - under + 1) + under);
            default:
                return 0;
        }
    },
    /**
     @method 提示信息
     @param {string} toastText 提示文字
     */
    toast: function (toastText) {
        var $toast = window.$toast = window.$toast || $("#toast");
        if ($toast !== null) {
            $toast.children().text(toastText);
            $toast.show();
            setTimeout(function () {
                $toast.hide();
            }, 2000);
        }
    },
    /**
     @method 倒计时
     @param {object} options.target 调用对象
     @param {number} options.seconds 倒计时秒数
     @param {string} options.text 倒计时默认字符串
     @param {function} options.complete 倒计时完成回调函数
     */
    countdown: function (options) {
        options.target.off("tap");
        var seconds = options.seconds;
        var fn = function (seconds) {
            setTimeout(function () {
                if (seconds > 0) {
                    seconds--;
                    setText(seconds);
                    fn(seconds);
                } else {
                    if ($.isFunction(options.complete)) {
                        //倒计时完成后调用回调函数
                        options.complete.call(null);
                    }
                }
            }, 1000);
        };
        //设置文字
        function setText(seconds) {
            options.target.text(options.text.replace("time", seconds.toString()));
        }

        setText(seconds);
        fn(seconds);
    }
};
