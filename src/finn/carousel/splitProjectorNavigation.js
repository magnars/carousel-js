(function (C, $) {
    "use strict";

    C.setupSplitProjectorNavigation = function(controller, view) {
        $(view).on('click', function (e) {
            var projectorLeft = $(this).offset().left;
            var clickLeft = e.pageX;
            var howFarFromLeft = clickLeft - projectorLeft;
            var leftPartOfProjector = $(this).width() / 2;

            if (howFarFromLeft <= leftPartOfProjector) {
                controller.prev();
            }
            else {
                controller.next();
            }
        });
    };
}(FINN.carousel, jQuery));