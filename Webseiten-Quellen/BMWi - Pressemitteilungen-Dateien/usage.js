function bmwiHomepage(jsonUrlCms, searchtermLengthCMS, allResultsUrlCms) {
  // set path to json url
  jsonUrl = jsonUrlCms;
  searchtermLength = searchtermLengthCMS;
  allResultsUrl = allResultsUrlCms;
}


$(document).ready(function() {

  var stylesExist = false;

  var dummyElement = $('<p>').hide().css({
    height : 0,
    width : 0
  }).addClass("my-css-loaded-marker").appendTo("body");
  //Works without this on firefox for some reason
  if (dummyElement.css("fontWeight") == "bold" || dummyElement.css("fontWeight") == "700") {
    stylesExist = true;
  }
  dummyElement.remove();

  /* JS Wird nur ausgef�hrt wenn styles geladen sind**/
  if (stylesExist) {

    /** Search **/
    bmwiHomepage('/BMWi2012/Navigation/DE/Service/Suche/json.html', 3, '/BMWi2012/Navigation/DE/Service/suche.html');

    /****Slider Topteaser****/
    $("#slides .prev").remove();
    $("#slides .next").remove();

    if ($('.slidesContainer').css("overflow") == "visible") {

      $('.slidesContainer').anythingSlider({
        autoPlay : true,
        easing : "swing",
        delay : 8000
      });

      $(".slidesContainer").horizontaltouchwipe({
        wipeLeft : function() {
          $('.slidesContainer').data('AnythingSlider').goForward();
        },
        wipeRight : function() {
          $('.slidesContainer').data('AnythingSlider').goBack();
        }
      });
    }

    /**Slider Homepage 2014**/
    $('.mediaTablistContent .mediaList').each(function() {

      var slideWidthparam = 220;
      var slideNumparam = 4;

      if ($(this).find("li").hasClass("bgVideo")) {
        slideMarginparam = 20;
		slideWidthparam = 220;
        slideNumparam = 4;
      } else if ($(this).find("li").hasClass("bigfoto")) {
		slideMarginparam = 30;
        slideWidthparam = 86;
        slideNumparam = 6;
      } else if ($(this).find("li").hasClass("bgFotoreihe")) {
		slideMarginparam = 30;
        slideWidthparam = 162;
        slideNumparam = 5;
      } else {
		slideMarginparam = 25;
        slideWidthparam = 216;
        slideNumparam = 4;
      }

      if ($(this).find('li').length <= slideNumparam) {
        $(this).bxSlider({
          minSlides : slideNumparam,
          maxSlides : slideNumparam,
          slideWidth : slideWidthparam,
          slideMargin : slideMarginparam,
          infiniteLoop : false,
          controls : false,
          pager : false
        });
      } else {
        $(this).bxSlider({
          minSlides : slideNumparam,
          maxSlides : slideNumparam,
          slideWidth : slideWidthparam,
          slideMargin : slideMarginparam,
          nextText : "",
          prevText : "",
          pager : false
        });
      }
    });

    if ($(".sliderDefault").length > 0) {
      var varcontroll = false;

      if ($(".sliderDefault").find("li").length > 3) {
        varcontroll = true;
      }

      $(".sliderDefault").bxSlider({
        minSlides : 3,
        maxSlides : 3,
        slideWidth : 300,
        slideMargin : 20,
        nextText : "",
        prevText : "",
        infiniteLoop : true,
        pager : false,
        controls : varcontroll
      });
    }

    if ($(".event").length > 0) {
      var varcontroll = false;

      if ($(".sliderEvent").find("li").length > 5) {
        varcontroll = true;
      }

      var monthNames = ["Januar", "Februar", "M%E4rz", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"];

      $(".sliderEvent li").each(function() {
        var dateString = $(this).find(".listDate").text();
        var parts = dateString.split(".");
        var datefull = new Date(parts[1] + "/" + parts[0] + "/" + parts[2]);
        var day = datefull.getDate();
        var month = datefull.getMonth();
        var shortmonthStr = unescape(monthNames[month]);
        shortmonthStr = shortmonthStr.substr(0, 3);
        $(this).find(".listDate").html("<span class='shortDay'>" + day + "</span><span class='shortmonth'>" + shortmonthStr + "</span>");
      });

      $(".sliderEvent").bxSlider({
        minSlides : 5,
        maxSlides : 5,
        slideWidth : 190,
        slideMargin : 7,
        nextText : "",
        prevText : "",
        infiniteLoop : true,
        pager : false,
        controls : varcontroll
      });
    }

    /*Tabreiter Modul Startseite 2014*/
    if ($(".mediaTablist").length != 0) {
      var activeTabIndex = 0;
      var tabNames = [];
      $(".mediaTablist > li").each(function() {
        tabString = $(this).find("a").attr("href");
        tabString = tabString.substring(1, tabString.length);
        tabNames.push(tabString);
      });
      $("div#mediaVideos").addClass("active");

      $(".mediaTablist > li").click(function(e) {

        $(".mediaTablist > li").each(function() {
          $(this).removeClass();
        });
        $(this).addClass("first");

        for (var i = 0; i < tabNames.length; i++) {

          if ($(this).find("a").attr("href") == "#" + tabNames[i]) {
            activeTabIndex = i;
          } else {
            $("#" + tabNames[i]).removeClass("active");

          }
        }

        //$("#"+tabNames[activeTabIndex]).fadeIn();
        $("#" + tabNames[activeTabIndex]).addClass("active");
        return false;
      });

    }

    $('#section .photoList').each(function() {
      if ($(this).find('li').length <= 2) {
        $(this).parent().addClass("noJS");
      } else {
        $(this).bxSlider({
          minSlides : 3,
          maxSlides : 3,
          slideWidth : 172,
          slideMargin : 5,
          nextText : "",
          prevText : "",
          pager : false,
          moveSlides : 1
        });
      }
    });

    /*Fotoreihen in der Marginalspalte*/
    $('#aside .fotoreihe .photoList').each(function(i) {
      if ($(this).parent().parent().hasClass("portletCoverflowHorizontal")) {
        $(this).bxSlider({
          displaySlideQty : 1,
          moveSlideQty : 1,
          nextText : "",
          prevText : "",
          pager : true,
          onSliderLoad : function() {
            var $curSlider = $('#aside .fotoreihe .photoList').eq(i).parents(".bx-wrapper");
            var $temp;
            $temp = $curSlider.find(".bx-controls-direction").clone(true);
            $temp.find("a.bx-next").hide();
            $curSlider.find(".bx-controls-direction").find("a.bx-prev").hide();
            $curSlider.find(".bx-pager").before($temp);
          }
        });
        $('.pager-link').html("<span>&nbsp;</span>");
      } else if ($(this).parent().parent().hasClass("portletCoverflowHorizontalBreit")) {

        var varpager = true;
        var varpagerType = 'full';

        if ($(this).find("li").length > 20) {
          varpager = true;
          varpagerType = 'short';
        }

        $(this).bxSlider({
          displaySlideQty : 1,
          moveSlideQty : 1,
          nextText : "",
          prevText : "",
          pager : varpager,
          pagerType : varpagerType,
        });
        $('.pager-link').html("<span>&nbsp;</span>");
      } else if ($(this).parent().parent().hasClass("portletCoverflow")) {
        $(this).bxSlider({
          displaySlideQty : 1,
          moveSlideQty : 1,
          slideWidth : 162,
          nextText : "",
          prevText : "",
          pager : false
        });
      } else {
        /*dreiteiliger Sliderin in der Marginalspalte*/
        if ($(this).find('li').length <= 2) {
          $(this).find('li').css("float", "left");
        } else {
          $(this).bxSlider({
            displaySlideQty : 3,
            moveSlideQty : 1,
            slideWidth : 165,
            slideHeight : 70,
            nextText : "",
            prevText : "",
            pager : false,
            minSlides : 3,
            maxSlides : 3,
            slideMargin : 1
          });
        }
      }
    });

    /****Slider Marginalspalte mit Thumbnails****/

    // If there are gallery thumbs on the page
    if ($('.mediaPager').length > 0) {
      $playerStage = "";
      $('.mediaPager a').wrapAll("<ul id='gallery-thumbs' class='gallery-thumbs-list'></ul>");
      $('.mediaPager a').each(function() {

        $(this).wrap("<li class='thumb-item'><div class='thumb'></div></li>");

      });
      $(".thumb-item .thumb:first").addClass("pager-active");

      // If there are gallery thumbs on the page
      if ($('#gallery-thumbs').length > 0) {

        // Cache the thumb selector for speed
        var thumb = $('#gallery-thumbs').find('.thumb');

        // How many thumbs do you want to show & scroll by
        var visibleThumbs = 3;

        var gallerySlider = $('#aside .mediareihe .mediaList').bxSlider({
          controls : false,
          pager : false,
          infiniteLoop : true,
          onSlideAfter : function(currentSlideNumber) {
          },
          onSlideNext : function(currentSlideNumber) {
            slideThumbs(currentSlideNumber, visibleThumbs);
          },
          onSlidePrev : function(currentSlideNumber) {
            slideThumbs(currentSlideNumber, visibleThumbs);
          }
        });

        thumb.click(function(e) {
          e.preventDefault();
          gallerySlider.goToSlide($(this).closest('.thumb-item').index());
          $('#gallery-thumbs').find('.thumb').removeClass('pager-active');
          $(this).addClass('pager-active');
          if ($curPlayer) {
            $curPlayer.setStop();
          }
          if ($videoid) {
            $("#" + $videoid + " img").show();
            $("#" + $videoid + " span").show();
          }
          $(".mediaList").find(".videoContainer").remove();
        });

        // Function to calculate which slide to move the thumbs to
        function slideThumbs(currentSlideNumber, visibleThumbs) {
          var m = Math.floor(currentSlideNumber / visibleThumbs);
          var slideTo = m * visibleThumbs;
          thumbsSlider.goToSlide(slideTo);
        }

        /*Anzeige des Slider erst ab 3 Eintr�gen*/
        if ($('.thumb-item').length > 3) {
          // Thumbnail slider
          var thumbsSlider = $('#gallery-thumbs').bxSlider({
            controls : true,
            pager : false,
            minSlides : visibleThumbs,
            maxSlides : visibleThumbs,
            slideWidth : 88,
            slideHeight : 300,
            slideMargin : 0,
            nextText : "",
            prevText : "",
            hideControlOnEnd : true,
            infiniteLoop : false,
            moveSlides : 1
          });
        }

      }

      $(".mediaList a").click(function() {
        if ($curPlayer) {
          $curPlayer.setStop();
        }
        if ($videoid) {
          $("#" + $videoid + " img").show();
          $("#" + $videoid + " span").show();
        }
        $(".mediaList").find(".videoContainer").remove();
        $videoid = $(this).attr('id');
        $videoContainer = $("<div class='videoContainer'><div class='projekktor'" + "' height= '167' width= '297'></div></div>");
        playlistid = eval($videoid);
        $(this).parent().prepend($videoContainer);
        $(this).children("img").hide();
        $(this).children("span").hide();
        playerInit($(this).parent().parent().find(".videoContainer"), $videoid, playlistid);
        return false;
      });
      
      function playerInit($item, videoid, playlistid) {
        if ($item.find('.projekktor').length > 0) {
          var $currentItem = $item.find('.projekktor');
          projekktor($currentItem, {
            controls : true,
            playerFlashMP4 : '/bmwa/styles/initplayer/lib/jarisplayer.swf',
            autoplay : true,
            continuous : false,
            minHeight : 167,
            minWidth : 297,
            plugins : ['display', 'controlbar', 'accessibility', 'shareplus', 'srt'],
            plugin_accessibility : {
              apc : true,
              accSignLanguage : false,
              accAudioDescription : false,
              accSubtitles : true
            },
            playlist : playlistid
          }, function(player) {
            $curPlayer = player;
          });
        } else {
          playerInit(item);
        }
        return true;
      }

    }// END if($('.mediaPager').length


    $clone = $(".portletCoverflowHorizontalBreit .bx-prev").clone(true);
    $(".portletCoverflowHorizontalBreit .bx-prev").remove();
    $(".portletCoverflowHorizontalBreit .bx-pager").before($clone);

    $('#aside . portletCoverflow .photoList').each(function() {
      $(this).bxSlider({
        displaySlideQty : 1,
        moveSlideQty : 1,
        nextText : "",
        prevText : ""
      });
    });

    /**Karussell in der Mediathek -> UPDATE**/
    $('.mediathek .coverflow .photoList').each(function() {
      if ($(this).find('li').length <= 2) {
        $(this).bxSlider({
          infiniteLoop : false,
          controls : false
        });
      } else {
        $(this).bxSlider({
          minSlides : 3,
          maxSlides : 3,
          slideWidth : 146,
          slideMargin : 0,
          nextText : "",
          prevText : "",
          pager : false
        });
      }
    });

    /****Hauptnavigation****/
    $('#nav>ul').superfish({
      autoArrows : false
    }).find('ul').bgIframe({
      opacity : false
    });

    /*** Suche/ Filterfunktionen**/

    if ($(".searchdetail").is("div")) {
      /* Alle Checkboxen in searchdetail aus/abwaehlen: */
      $(".searchdetail #searchAllTopics").bind("click", function(e) {
        jqCheckAll2("searchAllTopics", "searchTopic");
      });
      $(".searchdetail #searchAllDocumentTypes").bind("click", function(e) {
        jqCheckAll2("searchAllDocumentTypes", "searchDocumentType");
      });
    }

    function jqCheckAll2(id, name) {
      $("INPUT[name=" + name + "][type='checkbox']").attr('checked', $('#' + id).is(':checked'));
    }

    /****Success Search****/
    $(".inputsearch").attr({
      autocomplete : "off"
    });

    var rsltsExpose = $(".inputsearch").bind("click keydown keyup", function() {
      getResult();
      $("#searchResults").expose({
        lazy : true,
        onBeforeClose : function(event) {
          $("#searchResults").fadeOut(250);
          clearSearchInput();
        }
      });
      $(this).addClass("over");
      $(".search .sb").addClass("oversb");
    });

    var jsonUrl = "/BMWi2012/Navigation/DE/Service/Suche/json.html";
    var searchtermLength = 3;
    var allResultsUrl = "/BMWi2012/Navigation/DE/Service/suche.html";

    function getResult() {
      var searchterm = $(".inputsearch").attr("value");
      if (searchterm.length >= searchtermLength) {
        $.getJSON(jsonUrl + "?searchText=" + escape(searchterm) + "&jsoncallback=?", {
          searchterm : escape(searchterm)
        }, handleResult);
      } else {
        $("#searchResults").fadeOut(250);
      }
      window.clearTimeout(true);
    }

    function handleResult(result) {
      var rslts = $("#searchResults");
      var searchterm = escape($(".inputsearch").attr("value"));
      var rsltString = "";
      var maxItems = 6;

      rsltString = ("");

      //check result length
      if (result.items.length > 0) {

        //rsltString  = '<h3>BMWi Hauptangebot: '+ result.items.length +' <a href="#" id="searchResultClose"><\/a><\/h3>';
        rsltString = '<h3>BMWi Hauptangebot <a href="#" id="searchResultClose"><\/a><\/h3>';
        rsltString += '<div class="listContainer clearfix"><ul class="resultList cf">';

        //parse results
        $.each(result.items, function(i, item) {
          if (item.media.m != "") {
            rsltString += '<li class="clearfix">';
            rsltString += '<a class="imgLink" href="' + item.link + '"><img src="' + item.media.m + '" alt="" width="54" \/><\/a>';
          } else {
            rsltString += '<li class="indent clearfix">';
          }
          rsltString += '<h4><a href="' + item.link + '">' + item.title + '<\/a><\/h4>';
          rsltString += '<p>' + item.description + '<\/p>';
          rsltString += '<\/li>';
          if (i == maxItems)
            return false;

        });

        rsltString += '<\/ul>';
        rsltString += '<a href="' + allResultsUrl + '?searchText=' + searchterm + '" class="linkIntern">Alle Ergebnisse<\/a><\/div>';
        rslts.html(rsltString);
      } else {
        rsltString = ('<h3>BMWi Hauptangebot <a href="#" id="searchResultClose"><\/a><\/h3>');
        rsltString += ('<div class="listContainer clearfix">');
        rsltString += ('<p class="emptyResult">');
        rsltString += ('<a href="' + allResultsUrl + '?searchText=' + searchterm + '">Keine Ergebnisvorschl&auml;ge f&uuml;r diesen Suchbegriff, versuchen Sie es mit der Volltextsuche<\/a>');
        rsltString += ('<\/p>');
        rsltString += ('<\/div>');
        rslts.html(rsltString);
      }

      $("#searchResultClose").click(function() {
        $("#searchResults").fadeOut(250);
        clearSearchInput();
        $.mask.close();
        return false;
      });

      if (result.items.length > 0) {
        //show results
        if (rslts.css("display") != "block") {
          rslts.fadeIn(250);
          rsltsExpose.load();
        }
      } else {
        rslts.fadeOut(250);
      }
    }


    $("#nav ul li a:first-child, .caption a.linkIntern").focus(function() {
      $("#searchResults").fadeOut(250);
      clearSearchInput();
      $.mask.close();
      return false;
    });

    function exists(selector) {
      return ($(selector).length > 0);
    }

    function clearSearchInput() {
      $(".inputsearch").val("");
      $(".inputsearch").removeClass("over");
      $(".search .sb").removeClass("oversb");
    }

    /****Zoom Funktion**********/
    $(".imgright").addClass("toZoom");
    $(".float--right").addClass("toZoom");

    if ($(".zoomLink").is('a')) {

      $(".zoomLink").click(function() {

        var daImg = $(this).parent().parent().children("img");
        var origWidth = daImg.attr('width');
        var origHeight = daImg.attr('height');
        var relFak = ((620) / (origWidth));
        var origSrc = daImg.attr('src');
        var daLink = $(this).find("img");
        var relFakBack = ((origWidth) / (280));
        var activElem = $(this).parent().parent();

        if (!daImg.hasClass("isZoomed")) {
          var newHeight = ((origHeight) * (relFak));
          $("#main").css("zoom", "none");
          activElem.animate({
            width : "620"
          }, {
            duration : 1500,
            complete : function() {
              $("#content").css("border", "1px solid white");
            }
          });
          activElem.attr("style", "float: none");
          activElem.attr("display", "block");
          daImg.attr('src', $(this).attr('href'));

          daImg.animate({
            width : "620",
            height : newHeight
          }, 1490);
          daImg.addClass("isZoomed");
          daLink.attr('src', '/bmwa/images/bmwi2012/de/zoomOut.png');
          $("#content").css("zoom", "1");

        } else {
          daImg.removeClass("isZoomed");
          $("#main").css("zoom", "none");
          activElem.animate({
            width : "280"
          }, {
            duration : 1150,
            complete : function() {
              $("#content").css("border", "1px solid white");
            }
          });
          var newHeight = ((origHeight) / (relFakBack));
          daLink.attr('src', '/bmwa/images/bmwi2012/de/zoomIn.png');
          daImg.attr('src', $(this).attr(origSrc));
          daImg.animate({
            width : "280",
            height : newHeight
          }, 1000);
          activElem.attr("style", "float: left");

        };
        return false;
      });
    }

    // Grundlegende Defaults fuer alle Lightboxen auf dieser Seite: Deutsche Sprache
    $.colorbox.settings.close = 'Schlie�en';
    $.colorbox.settings.next = "Weiter";
    $.colorbox.settings.previous = "Zur�ck";
    $.colorbox.settings.current = "Bild {current} von {total}";
    $.colorbox.a11yDefaults.imageLabel = " ";
    //$.colorbox.a11yDefaults.suffixLongDescURI = "DE";

    // Beispiel fuer ein Lightbox nach WAI WCAG 2.0 http://www.w3.org/TR/WCAG20-TECHS/SCR37.html
    $(".lightboxLink a").colorbox({
      onComplete : function() {
        $.colorbox.a11ySetup();
      }
    });

    // accordion functionality for everything
    $('.accordionTrigger').not('.accordionActive').next('.accordionToggle').hide();
    $('.accordionTrigger').click(function() {
      var trig = $(this);
      if (trig.hasClass('accordionActive')) {
        trig.next('.accordionToggle').slideUp('slow');
        trig.removeClass('accordionActive');
      } else {
        $('.accordionActive').next('.accordionToggle').slideUp('slow');
        $('.accordionActive').removeClass('accordionActive');
        trig.next('.accordionToggle').slideDown('slow');
        trig.addClass('accordionActive');
      };
      return false;
    });

    //*Aufruf Accordion Gesetzeskarte**/

    if ($(".accordionContent").is("div")) {

      $("html").addClass("js");
      $("body").addClass("js");

      $(".accordionContent input:radio").addClass("accessibility");
      $(".accordionContent #searchActionSearch").addClass("accessibility");

      var allRadios = $('.accordionContent input:radio');
      var radioChecked;

      $.each(allRadios, function(i, val) {
        if ($(this).attr("checked")) {
          $(this).parent().addClass("enableRadio");

        }
      });

      var setCurrent = function(e) {
        var obj = e.target;
        radioChecked = $(obj).attr('checked');
      };
      
      var setCheck = function(e) {
        if (e.type == 'keypress' && e.charCode != 32) {
          return false;
        }
        var obj = e.target;

        $.each(allRadios, function(i, val) {
          if ($(this).attr("name") == $(obj).attr("name")) {
            $(this).attr('checked', false);
            $(this).parent().removeClass("enableRadio");

            if ($('label[for=' + $(this).attr("id") + ']').find("img").length > 0) {
              $('label[for=' + $(this).attr("id") + ']').find("img").attr("src", $('label[for=' + $(this).attr("id") + ']').find("img").attr("src").replace("_1", "_0"));
            }
          }
        });
        if (radioChecked) {
          $(obj).attr('checked', false);
          $(obj).parent().removeClass("enableRadio");
          $("form").submit();
        } else {
          $(obj).attr('checked', true);
          $(obj).parent().addClass("enableRadio");
          $("form").submit();
        }
      };

      $.each(allRadios, function(i, val) {
        var label = $('label[for=' + $(this).attr("id") + ']');
        $(this).bind('mousedown keydown', function(e) {
          setCurrent(e);
        });

        label.bind('mousedown keydown', function(e) {
          e.target = $('#' + $(this).attr("for"));
          setCurrent(e);
        });
        $(this).bind('click', function(e) {
          setCheck(e);
        });
      });

      $("#section h3").next().addClass("showIt");

      $("#section").accordion({
        objID : "#acc1",
        obj : "div",
        wrapper : "div",
        el : ".h",
        head : "h3, h4, h5",
        next : "div",
        showMethod : "slideFadeDown",
        hideMethod : "slideFadeUp",
        scrollSpeed : 100,
        initShow : "div.showIt"
      });

    }

  }
  
  /*if($(".campaignLinkModul").is("div")) {
	$(".campaignLinkModul ul > li > a").click(function(){
		
		 $(this).addClass("activeLink");
		 $thisLink = $(this);
		 if ($( $(this).parent().find("ul")).is( ":hidden" ) ) {
			 $thisLink.addClass("activeLink");		 
			$(this).parent().find("ul").slideDown( "slow" );
			
		} else {
			$thisLink.removeClass("activeLink");	
			$(this).parent().find("ul").hide();
		}

		return false;
	})
  
  }*/
  

});

$(document).on("ppLoadReady", function(e) {
  if (DetectIpad()) {
    $(".inithtmlplayer").each(function() {
      $(".inithtmlplayer .ppcontrols").attr("style", "display:block!important");
      $(".inithtmlplayer .ppvslider").attr("style", "display:none!important");
    });
  }
}); 