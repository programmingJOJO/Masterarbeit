/**
 * jQuery Plugin to obtain horizontal touch gestures from iPhone, iPod Touch and iPad, 
 * should also work with Android mobile phones (not tested yet!)
 * Common usage: wipe images (left and right to show the previous or next image)
 * 
 * based on jquery.touchwipe form Andreas Waltl, netCU Internetagentur (http://www.netcu.de)
 * @author Bastian Lonser, initAG (http://www.init.de)
 * @version remove vertical touch wipe and truncate source code
 */
(function ($) {
    $.fn.horizontaltouchwipe = function (settings) {
        var config = {
            min_move_x: 20,
            wipeLeft: function () {},
            wipeRight: function () {}
        };
        if (settings) $.extend(config, settings);
        this.each(function () {
            var startX = null;
            var isMoving = false;

            function cancelTouch() {
                this.removeEventListener('touchmove', onTouchMove);
                startX = null;
                isMoving = false;
            }
            function onTouchMove(e) {
                if (isMoving) {
                    var dx = startX - e.touches[0].pageX;
                    if (Math.abs(dx) >= config.min_move_x) {
                    	e.preventDefault();
                    	cancelTouch();
                        if (dx > 0) {
                            config.wipeLeft();
                        } else {
                            config.wipeRight();
                        }
                    } 
                }
            }
            function onTouchStart(e) {
                if (e.touches.length == 1) {
                    startX = e.touches[0].pageX;
                    isMoving = true;
                    this.addEventListener('touchmove', onTouchMove, false);
                }
            }
            if ('ontouchstart' in document.documentElement) {
                this.addEventListener('touchstart', onTouchStart, false);
            }
        });
        return this;
    };
})(jQuery);