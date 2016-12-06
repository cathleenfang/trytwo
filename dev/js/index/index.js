'use strict'

var app = {
    init: function () {
        var self = this;

        self.cacheElements();
        self.jumpToFull();
    },

    cacheElements: function () {
        var self = this;

        self.$addMoment = $('#J_JumpToFull');
    },
    //点击leave a moment 跳转到full界面
    jumpToFull: function () {
        var self = this;

        var location = window.location.href;

        self.$addMoment.on('click', function () {
            var t = this;
            var newHref = location + 'full';
            t.href = newHref;
        });
    }
};

$(function () {
    app.init();
});