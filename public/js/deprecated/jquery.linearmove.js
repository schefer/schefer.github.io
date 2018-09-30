(function($) {
    $.fn.linearmove = function(options) {
    	
        var options = $.extend({
                speedX: 3,
                speedY: 0,
                duration: 50
            }, options),
            layer = $(this),
            x0 = layer.offset().left,
            y0 = layer.offset().top,
            x = x0,
            y = y0;

        var eqX = function() {
            x += options.speedX;
            return x;
        }

        var eqY = function() {
            y += options.speedY;
            return y;
        }

        $(function() {
            setInterval(function() {
                x = eqX();
                y = eqY();

                $(layer).css({
                    top: y,
                    left: x
                });

            }, options.duration);
        });
    };
})(jQuery);
