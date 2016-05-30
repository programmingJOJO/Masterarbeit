$(document).ready(function(){

    /* =========== Analytics =========== */

    $('.exitShop').on('click touchstart', function() {
	var appId   = $(this).attr('data-appid'),
	    shopId  = $(this).attr('data-shop');

	ga('send', 'event', 'Shop-Buttons', 'click', {'page': '/Shop/' + shopId + '/' + appId});
	console.log("User leaves to /Shop/" + shopId + "/" + appId);
    });


    /* =========== Image Slider =========== */
    $(".qqcarousel").slidesjs({
        width: 400,
        height: 400,
        navigation: {
	    active: false,
            effect: "slide"
            // [string] Can be either "slide" or "fade".
	},
	pagination: {
	    active: false,
	    effect: "slide"
	},
	play: {
	    active: false,
            // [boolean] Generate the play and stop buttons.
            // You cannot use your own buttons. Sorry.
	    effect: "slide",
            // [string] Can be either "slide" or "fade".
	    interval: 10000,
            // [number] Time spent on each slide in milliseconds.
	    auto: true,
            // [boolean] Start playing the slideshow on load.
	    swap: true,
            // [boolean] show/hide stop and play buttons
	    pauseOnHover: true,
            // [boolean] pause a playing slideshow on hover
	    restartDelay: 2500
            // [number] restart delay on inactive slideshow
	}
    });

});



var qq = (function() {

    return {
	toggleFbBox: function() {
	    $('#fbBox').html("<iframe id='fbBoxIFrame' src='//www.facebook.com/plugins/likebox.php?href=https%3A%2F%2Fwww.facebook.com%2Fpages%2FQuarterquest%2F379650528784525&amp;width&amp;height=650&amp;colorscheme=light&amp;show_faces=true&amp;header=true&amp;stream=true&amp;show_border=false&amp;appId=387786951298921' scrolling='no' frameborder='0'    allowtransparency='true'></iframe>");

	    $('#fbBox').slideToggle();
	}

    };

})();