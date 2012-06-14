/*! jQuery imgReady - v0.1.0 - 2012-06-14
* https://github.com/pthrasher/jquery.imgready
* Copyright (c) 2012 Philip Thrasher; Licensed MIT */

(function ($) {
    "use strict";

    var ImgReady = function (element, options) {
        this.init(element, options);
    };

    ImgReady.prototype = {
        init: function (element, options) {
            options = $.extend({}, $.fn.imgReady.defaults, options);
            this.callback = options.callback;
            this.maxRuns = options.maxRuns;
            this.runs = 0;
            this.$element = $(element);
            this.isReady = $.proxy(this._isReady, this);
            this.isReady();
        },

        _isReady: function() {
            if (this.runs > this.maxRuns) {
                return;
            }

            if (this.$element[0].complete === true) {
                this.callback();
            } else {
                this.runs++;
                setTimeout(this.isReady, 10);
            }
        }

    };

    $.fn.imgReady = function ( option ) {
        return this.each(function() {
            var $this = $(this),
                data = $this.data('imgReady'),
                options = typeof option === 'object' && option;
            if (!data) {
                $this.data('imgReady', (data = new ImgReady(this, options)));
            }
            if (typeof option === 'string') {
                data[option]();
            }
                
        });
    };

    $.fn.imgReady.Constructor = ImgReady;

    $.fn.imgReady.defaults = {
        callback: function(){ return; },
        maxTries: 2000 // 2000 works out to be about 20 seconds.
    };

}(jQuery));


