(function($) {
    $.fn.ajaxContentLoad = function(options) {
        var options = $.extend({
                attach: "a",
                startUrl: 0
            }, options),
            contentContainer = $(this),
            startUrl = options.startUrl;

        var loadContent = function(url) {
            contentContainer.animate({
                    opacity: 0
                },
                200, //Turn the opacity to 0
                function() { // the callback, loads the content with ajax
                    contentContainer.load(url, //only loads the selected portion
                        function() {
                            contentContainer.animate({
                                opacity: 1
                            }, 200); //and finally bring back the opacity back to 1
                        }
                    );
                });
        };

        var loadStartContent = function() {
            contentContainer.load(startUrl);
        }

        $(loadStartContent());
        $(options.attach).click(function() {
            $('.navbar-toggle:visible').click(); // Toogle twitter bootstrap navbar-toogle in mobile view
            loadContent(this.href);
            return false; //prevents the link from being followed
        });
    };
})(jQuery);
