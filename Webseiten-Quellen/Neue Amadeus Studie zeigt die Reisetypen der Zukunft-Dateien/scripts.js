$(document).ready(function() {

	$( "#topnav li" ).hover(
	  function() {
	    $(this).children( 'a' ).addClass( "current" );
	  }, function() {
	    $(this).children( 'a' ).removeClass( "current" );
	  }
	);

	setWidthAirlineSystemsTopNav();

	//Home Carousel
	//Stop home carousel on rollover
	$(".carousel-stage").mouseover(function() {
		$('.carousel-stage').jcarouselAutoscroll('stop');
	});
	$(".carousel-stage").mouseout(function() {
		$('.carousel-stage').jcarouselAutoscroll('start');
	});

	$(".carousel-navigation").mouseover(function() {
		$('.carousel-stage').jcarouselAutoscroll('stop');
	});
	$(".carousel-navigation").mouseout(function() {
		$('.carousel-stage').jcarouselAutoscroll('start');
	});

	//tooltips carousel home
	$(".carousel-navigation ul li").mouseover(function(){
	 eleOffset = $(this).offset();

	$('.connected-carousels').append('<div class="ttip"><img src="' + $(this).children("a").children("img").attr("src") + '"><h2>' + $(this).children("a").children("img").attr("title") + '</h2><p>' + $(this).children("a").children("img").attr("alt") + '</p><div class="tooltip_vertex"></div></div>');

	}).mouseout(function(){
		$(".ttip").remove();
	});

	//History increase history-container height
	ch = false;
	diff = 0;
	cont = 0;

	$('.history-footer a').click(function(event){

		if(diff == 0){
			if(!ch){
				diff = $('.history').outerHeight() - $('.history-container').height();
			};
			ch = true;
		};
		
		incr = $('.history-container').height() + (diff/2);
		$('.history-container').animate({		
			height: incr
			}, 500, function() {

			if( cont == 2 ){
				$('.history-footer').fadeOut();	
			}
		});
		
		cont ++;
		event.preventDefault();
	});

	//Solutions & services - show & hide subcategories in prduct categories box
	$('.sub-categories ul').hide();
	$('.sub-categories .hide').hide();

	$('.sub-categories .show').click(function(event){
		$(this).siblings('ul').show();
		$(this).siblings('.hide').show();
		$(this).hide();
		event.preventDefault();
	});

	$('.sub-categories .hide').click(function(event){
		$(this).siblings('ul').hide();
		$(this).hide();
		$(this).siblings('.show').show();
		event.preventDefault();
	});

	//CSS Switch

	// mobile
	$("#css-mobile").click(function() {
		$(".cssmobile").attr({href : "css/handheld.css"});
	});

	// desktop
	$("#css-desktop").click(function() {
		$(".cssmobile").attr({href : "css/style.css"});
		$('head').append('<link rel="stylesheet" media="all" href="css/switchcss.css">');
	});

	// Remove "no-js" class from <html> element, if it exists and Add the new classes to the <html> element.
    $('html').removeClass('no-js').addClass('js');

    // add class 'third' element
    $("ul.mark-third li:nth-child(3n+3)").addClass("omega");

    // add class 'fifth' element
    $("ul.mark-fifth li:nth-child(5n+5)").addClass("omega");

    // add class 'clear' sixth's elements
    $("ul.mark-sixth li:nth-child(5n+6)").addClass("clear");


	// add class 'last' at the last element
	$('ul.mark-last').each(function(){
		$('ul.mark-last > li:last-child').addClass('last');
	});
	var htmlTag = $('html').eq(0);


	// ie detection
	var ieVersion;
	if (htmlTag.hasClass('ie6')) ieVersion= 'ie6'
	else if (htmlTag.hasClass('ie7')) ieVersion= 'ie7'
	else if (htmlTag.hasClass('ie8')) ieVersion= 'ie8'



	//nav menu

	if(isMobileBrowser()){

		$(".nav>div.header-block>ul>li>div>*").click(function(e) {
		    e.stopPropagation();
		});

		$('.nav>div.header-block>ul>li').click(
			  function (event) {
			  	$('.nav>div.header-block>ul>li').not(this).each(function(){$('div.content:first',this).hide();})
			    $('div.content:first',this).toggle();
				$('html, body').animate({scrollTop:0}, 'slow');
				event.preventDefault();
			  }
			);
	}else{
		$('.nav>div.header-block>ul>li').hover(
			  function () {
			    $('div.content:first',this).show(); 
			    if($(this).hasClass('menu-solutions')){
			    	autoHeight('.solservHeight');
			    	autoHeight('.autoheight10');
			    	autoHeight('.autoheight11');
			    }
			    if($(this).hasClass('menu-airline-systems')){

		    		$.each(autoheightsTopNav, function( index, value ) {
					  autoHeight(value);
					});

			    }
			  },
			  function () {
			    $('div.content:first',this).hide();
			  }
			);
	}

	//subnav menu
	$('.subnav h2 a').bind('click',function(){
		if($(this.parentNode.parentNode).hasClass('on')){
			$('ul',this.parentNode.parentNode).slideUp(function(){
				$(this.parentNode).removeClass('on');
			});
		}else{
			$('ul',this.parentNode.parentNode).slideDown(function(){
				$(this.parentNode).addClass('on');
			});
		}
		return false;
	});

	//subnav2 menu
	$('.subnav2 a.opener-icon').bind('click',function(){
		if($(this.parentNode.parentNode).hasClass('on')){
			$('ul',this.parentNode.parentNode).slideUp(function(){
				$(this.parentNode).removeClass('on');
			});
		}else{
			$('ul',this.parentNode.parentNode).slideDown(function(){
				$(this.parentNode).addClass('on');
			});
		}
		return false;
	});

	//check menu
	$('.check h3 a').bind('click',function(){
		if($(this.parentNode.parentNode).hasClass('on')){
			$('ul',this.parentNode.parentNode).slideUp(function(){
				$(this.parentNode).removeClass('on');
			});
		}else{
			$('ul',this.parentNode.parentNode).slideDown(function(){
				$(this.parentNode).addClass('on');
			});
		}
		return false;
	});
	
	//dropdown communities
	$('a.more-community').bind('click',function(){
		if($(this).hasClass('on')){
			$('span.hide',this).hide();
			$('span.show',this).show();
			$('.footer-community-dropdown',this.parentNode).slideUp(function(){
				$('a.more-community', this.parentNode).removeClass('on');
			});
		}else{
			$('span.hide',this).show();
			$('span.show',this).hide();
			$('.footer-community-dropdown',this.parentNode).slideDown(function(){
				$('a.more-community', this.parentNode).addClass('on');
			});
		}
		return false;
	});

	// PRODUCT INDEX - disable form selects if first is empty 
	if($('#product-index-segment').val() ==  0) {
	   $('#product-index-category').attr('disabled', true);		
	};

	$('#product-index-segment').click(function(){
	    if($('#product-index-segment').val() !=  0) 
	         $('#product-index-category').attr('disabled', false);    
	    else
	         $('#product-index-category').attr('disabled', true);   
	});

	if($('#product-index-category').val() ==  0) {
	   $('#product-index-subcategory').attr('disabled', true);		
	};

	$('#product-index-category').click(function(){
	    if($('#product-index-category').val() !=  0) 
	         $('#product-index-subcategory').attr('disabled', false);    
	    else
	         $('#product-index-subcategory').attr('disabled', true);   
	});


	//rollover careers slider items
	$(".slideritems ul li").hover(
	    function(){
	        $(this).children("a").children(".item-data").stop().animate({top: "60px"}, 200)
	    },
	    function(){
	        $(this).children("a").children(".item-data").stop().animate({top: "110px"}, 200)
	    });

	//rollover careers map position points
	$(".offices-map .item").mouseover(function(){
        $(this).children(".tooltip").stop().show();
    });

    $(".offices-map .item").mouseout(function(){
        $(this).children(".tooltip").stop().hide();
    });


    // Multiple rows slider
    $(".multiplerows-slider").each(function(){
        $self = $(this);

        $self.find('.mask').jcarousel({
            wrap: 'circular'
        });
        $self.find('.prev-btn').click(function(e){
            $self.find('.mask').jcarousel('scroll', '-=1');
            e.preventDefault();
        });
        $self.find('.next-btn').click(function(e){
            $self.find('.mask').jcarousel('scroll', '+=1');
            e.preventDefault();
        });
        $self.find('li li').hover(function(){
            $(this).find(".hover-info").fadeIn("fast");
        }, function(){
            $(this).find(".hover-info").fadeOut("fast");
        });
    });

    // Simple slider
    $('.simple-slider').each(function(){
        $self = $(this);

        $self.find('.slideritems').jcarousel({
            wrap: 'circular'
        });
        $self.find(".simple-slider-prev").click(function(e){
            $self.find('.slideritems').jcarousel('scroll', '-=1');
            e.preventDefault();
        });
        $self.find(".simple-slider-next").click(function(e){
            $self.find('.slideritems').jcarousel('scroll', '+=1');
            e.preventDefault();
        });
    });

    // Simple slider
    $('.simple-slider.auto').each(function(){
        $self = $(this);

        $self.find('.slideritems').jcarousel({
            wrap: 'circular'
        })
        .jcarouselAutoscroll({
            interval: 5000,
            target: '+=1',
            autostart: true
        });
        $self.find(".simple-slider-prev").click(function(e){
            $self.find('.slideritems').jcarousel('scroll', '-=1');
            e.preventDefault();
        });
        $self.find(".simple-slider-next").click(function(e){
            $self.find('.slideritems').jcarousel('scroll', '+=1');
            e.preventDefault();
        });
    });


});

function markLastModule(status) {
	$( ".mark-lastm > .module:last-child" ).addClass( "last" );
}

function markOddElements2(status) {
	$( ".mark-odd > .module:nth-child(even)" ).addClass( "omega" );
}

function markOddListElements(status) {
	$( ".mark-odd > li:nth-child(even)" ).addClass( "omega" );
}

function markOddElements(status) {
	$( ".mark-odd .module:odd" ).addClass( "omega" );
}

// select all checkboxes newsroom
function nrSelectAllChecks(status) {
	$(".checkbox input").each( function() {
		$(this).prop('checked', true);
	})
}

// deselect all checkboxes newsroom
function nrDeselectAllChecks(status) {
	$(".checkbox input").each( function() {
		$(this).prop('checked', false);
	})
}

// select all checkboxes
function selectAllChecks(status) {
	$(".checkbox input").each( function() {
		$(this).prop('checked', true);
	})
}

// deselect all checkboxes
function deselectAllChecks(status) {
	$(".checkbox input").each( function() {
		$(this).prop('checked', false);
	})
}


// inverstor relations select all checkboxes
function irSelectAllChecks(linkclick) {
	linkclick.parent().parent().parent().find("input").each( function() {
		$(this).prop('checked', true);
	})
}

// inverstor relations deselect all checkboxes
function irDeselectAllChecks(linkclick) {
	linkclick.parent().parent().parent().find("input").each( function() {
		$(this).prop('checked', false);
	})
}



// disable form selects if previous is not set 
function enableNextSelect(item1, item2, item3){
	if($(item1).val() ==  0) {
	   $(item2).attr('disabled', true);		
	};

	$(item1).click(function(){
	    if($(item1).val() !=  0) 
	         $(item2).attr('disabled', false);    
	    else
	         $(item2).attr('disabled', true);   
	});

	if($(item2).val() ==  0) {
	   $(item3).attr('disabled', true);		
	};

	$(item2).click(function(){
	    if($(item2).val() !=  0) 
	         $(item3).attr('disabled', false);    
	    else
	         $(item3).attr('disabled', true);   
	});
}

// set height of element to child biggest height
function biggestContentHeight(item) {	
	$(item).each(function() {
		var biggestHeight = 0;
		$(this).children().each(function() {
		  if($(this).height() > biggestHeight){
		  	biggestHeight = $(this).height()
		  }
		});
		$(this).height(biggestHeight);
	});
}

//get parent height
function setParentHeight(item) {
	$(item).each(function(){
	      var parentHeight = $(this).parent().height();
	      $(this).height(parentHeight);    
	});
}

// set item height auto
function autoHeight(items) {
	
	var currentTallest = 0,
    	currentRowStart = 0,
    	rowDivs = new Array(),
    	$el,
    	topPosition = 0;

	 $(items).each(function() {

	   $el = $(this);
	   topPostion = $el.position().top;
	   
	   if (currentRowStart != topPostion) {

	     // we just came to a new row.  Set all the heights on the completed row
	     for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
	       rowDivs[currentDiv].height(currentTallest);
	     }

	     // set the variables for the new row
	     rowDivs.length = 0; // empty the array
	     currentRowStart = topPostion;
	     currentTallest = $el.height();
	     rowDivs.push($el);

	   } else {

	     // another div on the current row.  Add it to the list and check if it's taller
	     rowDivs.push($el);
	     currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);

	  }
	   
	  // do the last row
	   for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
	     rowDivs[currentDiv].height(currentTallest);
	   }
	   
	 });
}

// detect mobile browser
function isMobileBrowser() {
  var a = navigator.userAgent||navigator.vendor||window.opera;

  return (/android|avantgo|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a) ||
	  /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|e\-|e\/|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(di|rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|xda(\-|2|g)|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)));
}


function init_slider(){
	$(".slider .jCarouselLite").jCarouselLite({
	    btnNext: ".slider .next-btn",
	    btnPrev: ".slider .prev-btn",
	    visible: 1,
	    speed: 500
	});
}

// home carousel vertical - news & events
function init_slider_news(time){
		$(".text .jCarouselLite").jCarouselLite({
			vertical: true,
			auto: time,
			speed: 1000
		});
}

//Two columns list ordered
function splitList() {
    var i, k;
    var colHeight = Math.ceil($('.ordered').children().length / 2)
    var colWidth = Math.floor(100 / 2) + "%"

    for (i = 0; i < 2; i++) {
        $('.ordered').append("<ul class='liCol'></ul>")
        for (k = 0; k < colHeight; k++) {
            $('.ordered').children("li").eq(0).appendTo(".liCol:last");          
        }   
    }

    $(".liCol").css("width", colWidth)
    $('.ordered').show() // list originally hidden to avoid displaying before ready
}

// lightboxes system
function init_fancybox(){
	jQuery_1_6_2('a.fancybox').bind('click',function() {
		jQuery_1_6_2.fancybox({
			'href' : this.href,
			'margin' : 0,
			'padding' :0,
			'overlayColor' : '#000',
			//'autoScale': false,
			'titleShow'		: false,
			'showCloseButton' : false
		});
		return false;
	});
	jQuery_1_6_2('.fancybox-close').live('click',function(){
    	jQuery_1_6_2.fancybox.close();
    	return false;
	});
}

function init_fancybox_cookies(){
	jQuery_1_6_2('a.fancybox-cookies').bind('click',function() {
		jQuery_1_6_2.fancybox({
			'href' : this.href,
			'margin' : 0,
			'padding' :0,
			'overlayColor' : '#000',
			//'autoScale': false,
			'titleShow'		: false,
			'showCloseButton' : false,
			'hideOnOverlayClick' : false
		});
		return false;
	});
	jQuery_1_6_2('.fancybox-close-cookies').live('click',function(){
    	jQuery_1_6_2.fancybox.close();
		setCookie("cookies_acepted","true",365);
    	return false;
	});
}

function init_tabs(){
	var tabs = $('.tabs a');
	var tabContent = $('div.tab-content');
	tabContent.addClass('hide');
	tabs.eq(0).parent().addClass('on');
	tabContent.eq(0).removeClass('hide');
	tabs.bind('click',function(){

		var tab= this.id.split('-');
		var numTab = tab[1];
		var content = $('#content-'+numTab);
		content.parents('div:first').find('div.tab-content').addClass('hide');
		content.removeClass('hide');
		$('a',this.parentNode.parentNode).parent().removeClass('on');
		$(this).parent().addClass('on');
		if($('div.tab-content',content).size()>0){
			$('.tabs a:first',content).parent().addClass('on');
			$('div.tab-content:first',content).removeClass('hide');
		}
		return false;
	});

}

// fluid width youtube videos
function fluid_youtube() {

        // Find all YouTube videos
        var $allVideos = $("iframe[src^='http://www.youtube.com']"),

            // The element that is fluid width
            $fluidEl = $(".yt-video");

        // Figure out and save aspect ratio for each video
        $allVideos.each(function() {

                $(this)
                        .data('aspectRatio', this.height / this.width)

                        // and remove the hard coded width/height
                        .removeAttr('height')
                        .removeAttr('width');

        });

        // When the window is resized
        // (You'll probably want to debounce this)
        $(window).resize(function() {

                var newWidth = $fluidEl.width();

                // Resize all videos according to their own aspect ratio
                $allVideos.each(function() {

                        var $el = $(this);
                        $el
                                .width(newWidth)
                                .height(newWidth * $el.data('aspectRatio'));

                });

        // Kick off one resize to fix all videos on page load
        }).resize();

}

function setCookie(c_name,value,exdays)
{
	var exdate=new Date();
	exdate.setDate(exdate.getDate() + exdays);
	var c_value=escape(value) + ((exdays==null) ? "" : "; expires="+exdate.toUTCString())+"; path=" + escape ( "/" );
	document.cookie=c_name + "=" + c_value;
}

function getCookie(c_name)
{
var i,x,y,ARRcookies=document.cookie.split(";");
for (i=0;i<ARRcookies.length;i++)
{
  x=ARRcookies[i].substr(0,ARRcookies[i].indexOf("="));
  y=ARRcookies[i].substr(ARRcookies[i].indexOf("=")+1);
  x=x.replace(/^\s+|\s+$/g,"");
  if (x==c_name)
    {
    return unescape(y);
    }
  }
}

// Careers sliders functions
function create() {
    $('.slideritems').jcarousel({
        wrap: 'circular'
    });
}

function createPagination1() {
    $('.sliderbullets').jcarouselPagination({
        perPage: 1
    });
}

function createCareersSlider() {
    $('.sliderbullets')
        .on('active.jcarouselpagination', 'a', function() {
            $(this).addClass('active');
        })
        .on('inactive.jcarouselpagination', 'a', function() {
            $(this).removeClass('active');
        });

    create();
	createPagination1();
}

function setFiltersWidth(){
	
	$( ".nr-filter-btn" ).each(function(){
		$(this).css({
		     "min-width": $( this ).width()
		 });
	});
}

//validation in newsroom filters dropdowns
function checkFilterChecks(){

	msgbase_type= "Refine by type";
	msgbase_segment= "Refine by segment";
	msgbase_region= "Refine by region";

	msgerror="Select your option";

	if (!$('.dropdown_type .chbx:checked').length > 0) {
		$('.nr-apply-btn').prop("disabled", true);
		$('.type .nr-filter-btn').addClass('err');
		$('.type .nr-filter-btn .txt').hide();
		$('.type .nr-filter-btn .errorTxt').show();

	}else{
		$('.nr-apply-btn').prop("disabled", false);

		$('.type .nr-filter-btn').removeClass('err');
		$('.type .nr-filter-btn .txt').show();
		$('.type .nr-filter-btn .errorTxt').hide();
	}

	if (!$('.dropdown_segment .chbx:checked').length > 0 ){
		$('.nr-apply-btn').prop("disabled", true);
		$('.segment .nr-filter-btn').addClass('err');
		$('.segment .nr-filter-btn .txt').hide();
		$('.segment .nr-filter-btn .errorTxt').show();

	}else{
		$('.nr-apply-btn').prop("disabled", false);

		$('.segment .nr-filter-btn').removeClass('err');
		$('.segment .nr-filter-btn .txt').show();
		$('.segment .nr-filter-btn .errorTxt').hide();
	}

	if (!$('.dropdown_region .chbx:checked').length > 0){
		$('.nr-apply-btn').prop("disabled", true);
		$('.region .nr-filter-btn').addClass('err');
		$('.region .nr-filter-btn .txt').hide();
		$('.region .nr-filter-btn .errorTxt').show();

	}else{
		$('.nr-apply-btn').prop("disabled", false);

		$('.region .nr-filter-btn').removeClass('err');
		$('.region .nr-filter-btn .txt').show();
		$('.region .nr-filter-btn .errorTxt').hide();
	}

	if (!$('.dropdown_year .chbx:checked').length > 0){
		$('.nr-apply-btn').prop("disabled", true);
		$('.year .nr-filter-btn').addClass('err');
		$('.year .nr-filter-btn .txt').hide();
		$('.year .nr-filter-btn .errorTxt').show();

	}else{
		$('.nr-apply-btn').prop("disabled", false);

		$('.year .nr-filter-btn').removeClass('err');
		$('.year .nr-filter-btn .txt').show();
		$('.year .nr-filter-btn .errorTxt').hide();
	}

	if ($('.dropdown_type .chbx:checked').length > 0 && $('.dropdown_segment .chbx:checked').length > 0 && $('.dropdown_region .chbx:checked').length > 0 && $('.dropdown_year .chbx:checked').length > 0) {
		$('.nr-apply-btn').prop("disabled", false);

	}else{
		$('.nr-apply-btn').prop("disabled", true);
	}

}

//validation in investor relations filters dropdowns
function checkIrFilterChecks(){

	msgbase_type= "Refine by type";
	msgbase_year= "Refine by year";
	msgbase_quarter= "Refine by quarter";

	msgerror="Select your option";

	if (!$('.dropdown_year .chbx:checked').length > 0) {
		$('.ir-apply-btn').attr('disabled', 'disabled');
		$('.year .ir-filter-btn').addClass('err');
		$('.year .ir-filter-btn .txt').hide();
		$('.year .ir-filter-btn .errorTxt').show();

	}else{
		$('.ir-apply-btn').attr('disabled', '');

		$('.year .ir-filter-btn').removeClass('err');
		$('.year .ir-filter-btn .txt').show();
		$('.year .ir-filter-btn .errorTxt').hide();
	}

	if (!$('.dropdown_quarter .chbx:checked').length > 0 ){
		$('.ir-apply-btn').prop("disabled", true);

		$('.quarter .ir-filter-btn').addClass('err');
		$('.quarter .ir-filter-btn .txt').hide();
		$('.quarter .ir-filter-btn .errorTxt').show();

	}else{
		$('.ir-apply-btn').prop("disabled", false);

		$('.quarter .ir-filter-btn').removeClass('err');
		$('.quarter .ir-filter-btn .txt').show();
		$('.quarter .ir-filter-btn .errorTxt').hide();
	}

	if (!$('.dropdown_type .chbx:checked').length > 0){
		$('.ir-apply-btn').prop("disabled", true);
		$('.type .ir-filter-btn').addClass('err');
		$('.type .ir-filter-btn .txt').hide();
		$('.type .ir-filter-btn .errorTxt').show();

	}else{
		$('.ir-apply-btn').prop("disabled", false);

		$('.type .ir-filter-btn').removeClass('err');
		$('.type .ir-filter-btn .txt').show();
		$('.type .ir-filter-btn .errorTxt').hide();
	}

	if ($('.dropdown_type .chbx:checked').length > 0 && $('.dropdown_year .chbx:checked').length > 0 && $('.dropdown_quarter .chbx:checked').length > 0) {
		$('.ir-apply-btn').prop("disabled", false);

	}else{
		$('.ir-apply-btn').prop("disabled", true);
	}

}

//results show more button
function nrResultsShowMoreBtn(){
	$('.nr-results-show-more .btn').click(function(){

		mask = $('.nr-results-mask').height();
		rowHeight = $('.nr-results-list .module').outerHeight(true);
		container = $('.nr-results-container').height();

		moreTxt = "Show more"
		lessTxt = "Show less"

		if(mask < container){
			
			rest= container - mask;

			if(rest > rowHeight){
				$( ".nr-results-mask" ).animate({
				    height: "+=" + rowHeight*2
				  }, 1000, function() {
				  });

			}else if(rest <= rowHeight ){
				$( ".nr-results-mask" ).animate({
				    height: "+=" + rowHeight
				  }, 1000, function() {

				    //$('.nr-results-show-more .btn .moreTxt').hide();
					//$('.nr-results-show-more .btn .lessTxt').show();
					//$('.nr-results-show-more .btn').removeClass("more").addClass("less");
				  });
			}

		}else{
			$( ".nr-results-mask" ).animate({
			    height: rowHeight*2
			  }, 1000, function() {
			  	$('.nr-results-show-more .btn .moreTxt').show();
				$('.nr-results-show-more .btn .lessTxt').hide();
				$('.nr-results-show-more .btn').removeClass("less").addClass("more");
			  });
			$('html, body').animate({
		        scrollTop: $(".ns-results").offset().top
		    }, 1000);
		}

		if( Math.floor( $('.nr-results-list .module:last-child').offset().top ) <= Math.floor( $('.nr-results-mask').offset().top + $('.nr-results-mask').height() + rowHeight ) ) {
			$('.nr-results-show-more .btn .moreTxt').hide();
			$('.nr-results-show-more .btn .lessTxt').show();
			$('.nr-results-show-more .btn').removeClass("more").addClass("less");
		}

		return false;
	});
}

//results show more button v2
function showMoreLess(item){
	$(item).find('.showMoreLess-mask').height($(item).find('.showMoreLess-list .module').outerHeight(true));

	$(item).find('.btn.more').click(function(){
		mask = $(item).find('.showMoreLess-mask').height();
		rowHeight = $(item).find('.showMoreLess-list .module').outerHeight(true);
		container = $(item).find('.showMoreLess-container').height();

		moreTxt = "Show more"
		lessTxt = "Show less"

		if(mask < container){
			
			rest= container - mask;
			if(rest > rowHeight){
				$(item).find('.showMoreLess-mask').animate({
				    height: "+=" + rowHeight
				  }, 1000, function() {
				  });

			}else if(rest <= rowHeight){
				$(item).find('.showMoreLess-mask').animate({
				    height: "+=" + rowHeight
				  }, 1000, function() {

				    $(item).find('.showMoreLess-btn .btn .moreTxt').hide();
					$(item).find('.showMoreLess-btn .btn .lessTxt').show();
					$(item).find('.showMoreLess-btn .btn').removeClass("more").addClass("less");
				  });
			}
		}else{
			$(item).find('.showMoreLess-mask').animate({
			    height: rowHeight
			  }, 1000, function() {
			  	$(item).find('.showMoreLess-btn .btn .moreTxt').show();
				$(item).find('.showMoreLess-btn .btn .lessTxt').hide();
				$(item).find('.showMoreLess-btn .btn').removeClass("less").addClass("more");
			  });
		}	
		return false;
	});
}

//Search clean button
function nrSearchboxClean(textsearch, clearText) {

    // init plugin (with callback)
    $('.nr-searchfield').clearSearch({
    	linkText: clearText
    } );

    // update value
    $('.nr-searchfield').val(textsearch).change();

    //if value equal to "Search" clear textbox
    $('.nr-searchfield').focus(function(){
    	if($('.nr-searchfield').val() == textsearch){
    		$('.nr-searchfield').val('').change();
    	}
    });
}

function sourceSwitch(item){
	$(item).click(function(){
		$(this).parents('.media-item').find('.tab-content').each(function(){
			$(this).hide();
		});
		var get = $.grep(this.className.split(" "), function(v, i){
		   return v.indexOf('tab') === 0;
		}).join();
		var tab= get.split('-');
		var numTab = tab[1];
		var content = $('.content-'+numTab);
		$(this).parents('.media-item').find(content).show();
		if(numTab){
			return false;
		}
	});
}

function htmlFormatSwitch(){
	$(".format-html").click(function(){
		if(!$(this).hasClass("current")){
			allhtml = $(this).parents(".main").children(".wrap-xmp").html();
			$(this).parents(".main").children(".wrap-xmp").empty();
			$(this).parents(".main").children(".wrap-xmp").html("<xmp>" + allhtml + "</xmp>");
			$(".format-txt").removeClass("current");
			$(this).addClass("current");							
		}
	});

	$(".format-txt").click(function(){
		if(!$(this).hasClass("current")){
			allhtml = $(this).parents(".main").children(".wrap-xmp").children("xmp").html();
			$(this).parents(".main").children(".wrap-xmp").empty();
			$(this).parents(".main").children(".wrap-xmp").html(allhtml);
			$(".format-html").removeClass("current");
			$(this).addClass("current");
		}
	});
}

function removeEdgeMargin(list){
	var wrapper = $(list),
    boxes = wrapper.children(),
    boxSize = boxes.first().outerWidth(true);

    var w = wrapper.width(),
        breakat = Math.floor( w / boxSize);
    
    boxes
        .removeClass('edge')
        .filter(':nth-child('+breakat+'n)')
        .addClass('edge');
}

//Set width in Top Nav Airline Systems
function setWidthAirlineSystemsTopNav(){
	count = $('.airline-system').length;
	size = '';
	switch (count){
		case (2):
			size = 'half';
			break;
		case (3):
			size = 'third';
			break;
		case (4):
			size = 'quarter';
			break;
	}
	$('.airline-system').each(function() {
	  $(this).addClass(size);
	});
}

//Set width in Top Nav Airline Systems
function setWidthAirlineSystemsTopNav(){
	count = $('.airline-system').length;
	size = '';
	switch (count){
		case (2):
			size = 'half';
			break;
		case (3):
			size = 'third';
			break;
		case (4):
			size = 'quarter';
			break;
	}
	$('.airline-system').each(function() {
	  $(this).addClass(size);
	});
}

//Set width in Top Nav Airline Systems
function setWidthAirlineSystemFull(){
	count = $('.airline-systems-main .list-st-00').length;
	size = '';
	switch (count){
		case (1):
			size = 'full';
			break;
		case (2):
			size = 'half';
			break;
	}
	$('.airline-systems-main .list-st-00').each(function() {
	  $(this).addClass(size);
	});
}

function setIrForm(topic){

	financial_information_and_cnmv_filings = '<ul class="financial_information_and_cnmv_filings"> \
												<li> \
													<input type="checkbox" name="quarterly_results_presentation" id="quarterly_results_presentation" class="chbx" checked="checked"/> \
													<label for="quarterly_results_presentation">Quarterly Results Presentation</label> \
												</li> \
												<li> \
													<input type="checkbox" name="quarterly_results_press_release" id="quarterly_results_press_release" class="chbx" checked="checked"/> \
													<label for="quarterly_results_press_release">Quarterly Results Press release</label> \
												</li> \
												<li> \
													<input type="checkbox" name="quarterly_results_management_review" id="quarterly_results_management_review" class="chbx" checked="checked"/> \
													<label for="quarterly_results_management_review">Quarterly Results Management review</label> \
												</li> \
												<li> \
													<input type="checkbox" name="ipo_rospectus" id="ipo_rospectus" class="chbx" checked="checked"/> \
													<label for="ipo_rospectus">IPO Prospectus</label> \
												</li> \
												<li> \
													<input type="checkbox" name="consolidated_annual_accounts" id="consolidated_annual_accounts" class="chbx" checked="checked"/> \
													<label for="consolidated_annual_accounts">Consolidated Annual Accounts</label> \
												</li> \
												<li> \
													<input type="checkbox" name="interim_financial_statements" id="interim_financial_statements" class="chbx" checked="checked"/> \
													<label for="north-america">Interim Financial Statements</label> \
												</li> \
												<li> \
													<input type="checkbox" name="individual_annual_accounts" id="individual_annual_accounts" class="chbx" checked="checked"/> \
													<label for="individual_annual_accounts">Individual Annual Accounts</label> \
												</li> \
												<li> \
													<input type="checkbox" name="relevant_facts_cnmv" id="relevant_facts_cnmv" class="chbx" checked="checked"/> \
													<label for="relevant_facts_cnmv">Relevant Facts - CNMV</label> \
												</li> \
												<li> \
													<input type="checkbox" name="bond_issuance_prospectus" id="bond_issuance_prospectus" class="chbx" checked="checked"/> \
													<label for="bond_issuance_prospectus">Bond Issuance Prospectus</label> \
												</li> \
												<li> \
													<input type="checkbox" name="rating_reports" id="rating_reports" class="chbx" checked="checked"/> \
													<label for="rating_reports">Rating reports</label> \
												</li> \
											</ul>';

	news = 									'<ul class="news"> \
												<li> \
													<input type="checkbox" name="press_releases" id="press_releases" class="chbx" checked="checked"/> \
													<label for="press_releases">Press releases</label> \
												</li> \
												<li> \
													<input type="checkbox" name="infographics" id="infographics" class="chbx" checked="checked"/> \
													<label for="infographics">Infographics</label> \
												</li> \
												<li> \
													<input type="checkbox" name="thought_leadership_reports" id="thought_leadership_reports" class="chbx" checked="checked"/> \
													<label for="thought_leadership_reports">Thought leadership reports</label> \
												</li> \
											</ul>';

	anual_reports = 						'<ul class="annual_reports"> \
												<li> \
													<input type="checkbox" name="global_reports" id="global_reports" class="chbx" checked="checked"/> \
													<label for="global_reports">Global reports</label> \
												</li> \
												<li> \
													<input type="checkbox" name="sustainability_reports" id="sustainability_reports" class="chbx" checked="checked"/> \
													<label for="sustainability_reports">Sustainability Report</label> \
												</li> \
											</ul>';

	company_presentations = 				'<ul class="company_presentations"> \
												<li> \
													<input type="checkbox" name="intro" id="intro" class="chbx" checked="checked"/> \
													<label for="intro">Intro</label> \
												</li> \
												<li> \
													<input type="checkbox" name="m&amp;a" id="m&amp;a" class="chbx" checked="checked"/> \
													<label for="m&amp;a">m&amp;A</label> \
												</li> \
												<li> \
													<input type="checkbox" name="capital_markets_day" id="capital_markets_day" class="chbx" checked="checked"/> \
													<label for="capital_markets_day">Capital markets day</label> \
												</li> \
											</ul>';

	corporate_governance = 					'<ul class="corporate_governance"> \
												<li> \
													<input type="checkbox" name="corporate_governance_report" id="corporate_governance_report" class="chbx" checked="checked"/> \
													<label for="corporate_governance_report">Corporate Governance Report</label> \
												</li> \
												<li> \
													<input type="checkbox" name="annual_report_on_remunerationof_directors" id="annual_report_on_remunerationof_directors" class="chbx" checked="checked"/> \
													<label for="annual_report_on_remunerationof_directors">Annual report on remunerationof directors</label> \
												</li> \
											</ul>';

	$( ".ir-filter-type-lists" ).empty();

	switch (topic){
		case ('financial_information_and_cnmv_filings'):
			$( ".ir-filter-type-lists" ).html(financial_information_and_cnmv_filings);
			$( ".ir-search-row2" ).show();
			break;
		case ('news'):
			$( ".ir-filter-type-lists" ).html(news);
			$( ".ir-search-row2" ).show();
			break;
		case ('anual_reports'):
			$( ".ir-filter-type-lists" ).html(anual_reports);
			$( ".ir-search-row2" ).show();
			break;
		case ('company_presentations'):
			$( ".ir-filter-type-lists" ).html(company_presentations);
			$( ".ir-search-row2" ).show();
			break;
		case ('corporate_governance'):
			$( ".ir-filter-type-lists" ).html(corporate_governance);
			$( ".ir-search-row2" ).show();
			break;
		case ('select_topic'):
			$( ".ir-search-row2" ).hide();
			break;
		case ('shareholders_meeting_information'):
			$( ".ir-search-row2" ).hide();
			break;
	}

	checkIrFilterChecks();

}


