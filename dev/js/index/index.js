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
        self.$jumpToNew = $('#J_JumpToNew');
    },

    jumpToFull: function () {
        var self = this;

        var location = window.location.origin,
            newHref = location + '/full';

        self.$addMoment.on('click', function () {
            var $this = $(this);
            $this.href = newHref;
        });

    }
};

$(function () {
    app.init();
});