(function($) {
    $.fn.plaxmove = function(options) {

        var options = $.extend({
                ratioX: 0.2,
                ratioY: 0,
                invertX: true,
                invertY: false,
                imageWidth: 960
            }, options),
            layer = $(this),
            center = {
                x: layer.parent().width() / 2,
                y: layer.parent().height() / 2 - layer.height() / 2
            },
            x0 = center.x - options.imageWidth / 2,
            y0 = parseFloat(layer.css("backgroundPositionY"));

        if (options.invertX) {
            var eqX = function(e) {
                return x0 - (e.pageX - center.x) * options.ratioX
            }
        } else {
            var eqX = function(e) {
                return x0 + (e.pageX - center.x) * options.ratioX
            }
        }

        if (options.invertY) {
            var eqY = function(e) {
                return y0 - (e.pageY - center.y) * options.ratioY
            }
        } else {
            var eqY = function(e) {
                return y0 + (e.pageY - center.y) * options.ratioY
            }
        }

        $('html').on('mousemove', function(e) {
            x = eqX(e)
            y = eqY(e)
            
            $(layer).css({
                backgroundPositionX: x,
                backgroundPositionY: y
            })
        })
    };
})(jQuery);
