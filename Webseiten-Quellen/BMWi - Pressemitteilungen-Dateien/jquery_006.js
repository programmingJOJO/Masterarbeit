//
//
// Accessibility-Plugin for ColorBox-V1.3.15 -- Version 1.0.0 beta
//
// Copyright (c) 2011 Oliver Siemoneit - oliver.siemoneit@web.de
// Licensed under the MIT license: http://www.opensource.org/licenses/mit-license.php
//
//


( function ($) {

	// 
	//
	// Abstraction for easy rebranding
	//
	//
	
	var
	colorbox	= 'colorbox',
	prefix		= 'cbox',

	$colorbox	= $.fn[colorbox],
	



	//
	//
	// Private variables
	//
	//
	
	// Defaults
	defaults = {
		focusFirstElement	:	false,
		trapFocus			:	true,
		forceInput			:	false,
		dialogLabel			:	'',
		imageLabel			:	'lightbox content',
		imageOriginal		:	'original version',
		imageC2g			:	false,
		imagePro			:	false,
		imageDeu			:	false,
		imageTri			:	false,
		suffixLongDescURI	:	'',
		printCss			:	''
	},

	// User settings
	settings = {},

	// Colorbox settings
	cboxSettings,

	// State of the lightbox
	open = false,

	// Focused element 
	$activeTabElement,

	// Alternative image versions
	alternativeImages = ['C2g', 'Pro', 'Deu', 'Tri'],

	// 'Cached' jQuery-objects so as to improve performance
	$document,
	$lightbox,
	$start,
	$previous,
	$next,
	$current,
	$longdesc,
	$imagecontrols,
	$slideshow,
	$close;

	

	//
	//
	// Event handlers
	//
	//

	//
	//  Keyboard-handler: trap focus inside the lightbox (http://www.w3.org/TR/wai-aria-practices/#modal_dialog)
	//
	function onKeyDown (e) {  

		// Tab-key: navigate to the next/previous focusable element 
		if (e.keyCode === 9) {
			var next;
			e.preventDefault();

			if (e.shiftKey === true) {
				// Step backwards in the tab-order
				if ($activeTabElement) {
					// Get next element. If we reach the top, get last element.
					next = $lightbox.getPreviousFocusableElement($activeTabElement);
					if (next.length === 0) {
						next = $lightbox.getLastFocusableElement();
					}
				}
				else {
					// No active element (since user has removed focus e.g. by clicking on the background): start from the back
					next = $lightbox.getLastFocusableElement();
				}

			}
			else {
				// Step forward in the tab-order
				if ($activeTabElement) {
					next = $lightbox.getNextFocusableElement($activeTabElement);
					if (next.length === 0) {           
						next = $lightbox.getFirstFocusableElement();
					}
				} 
				else {
					next = $lightbox.getFirstFocusableElement();
				}
		
			}
			next.focus();
			$activeTabElement = next;
		} 
	
		// Esc: close the lightbox
		else if (e.keyCode === 27) {
			if (cboxSettings.escKey) {
				e.preventDefault();
				$colorbox.close();
			}
		}
	
		// Arrow-key left: navigate to the previous page/image in a set
		else if (e.keyCode === 37) {
			if (cboxSettings.arrowKey) {
				e.preventDefault();
				$colorbox.prev();
			}
		}

		// Arrow-key right: navigate to the next page/image in a set
		else if (e.keyCode === 39) {
			if (cboxSettings.arrowKey) {
				e.preventDefault();
				$colorbox.next();
			}
		}

		// Enter-key: only needed since IE uses "enter" to invoke an accesskey 
		else if (e.keyCode === 13) {
			if ($activeTabElement === $lightbox)
				$activeTabElement = undefined;
		}

		// All other keys
		else {
			if($activeTabElement === $lightbox) {
			// IE user has focused an element outside the lightbox but hasn't hit enter: set focus back to the box
				e.preventDefault();
				var $last = $lightbox.getLastFocusableElement(); // Should be the 'close'-button
				$last.focus();
				$activeTabElement = $last;
			}
		}
		
	}


	//
	// Keyboard-handler focusable elements: trigger click if a focusable div ('tabindex=0') is focused and user hits 'enter' (http://www.w3.org/WAI/GL/2010/WD-WCAG20-TECHS-20100708/SCR29.html)
	//
	function onFocusableKeyDown (e) {

		if (e.keyCode === 13) {
			$(this).click(); 
		}

	}

	
	//
	// Click-handler focusable elements: allow for changing the focus by clicking on an element e.g. in forms
	//
	function onFocusableClick () {

		$activeTabElement = $(this);

	}
	

	//
	// Focusleave-handler: check if lightbox has lost focus and react accordingly
	//
	function onFocusLeave (e) {

		if (e.focusedBody) {
			// Lost focus to the body-element (e.g. user has clicked on the background, a non-focusable-element, the browser's location bar): clear $activeTabElement
			$activeTabElement = undefined;
		}
		else {
			// Lost focus to another element on the page: either set focus back or close the box
			if(settings.trapFocus) {
				if ($.browser.msie) {
					$activeTabElement = $lightbox; // allow IE to focus an element outside. Otherwise accesskeys won't work anymore.
				}
				else {
					if ($activeTabElement) {
						$activeTabElement.focus();
					}
					else {
						var $last = $lightbox.getLastFocusableElement(); // Should be the 'close'-button
						$last.focus();
						$activeTabElement = $last;
					}
				}
			}
			else {
				$colorbox.close();
			}
		}

	}	

		

	//
	//
	// Public functions
	//
	//

	//
	// Init accessibility-support: do some basic initialisations which need to be done only once (called when DOM is ready)
	//
	$.fn[colorbox].a11yInit = function (options) {
		
		// Cache our main objects so as to avoid frequent calls to jQuery
		$document = $(document);
		$lightbox = $('#'+colorbox);
		$next = $('#'+prefix+'Next');
		$previous = $('#'+prefix+'Previous');
		$current = $('#'+prefix+'Current');
		$slideshow = $('#'+prefix+'Slideshow');
		$close = $('#'+prefix+'Close');

		// Set lightbox state to 'aria-hidden:true'
		$lightbox.attr('aria-hidden', 'true');
		
	}
	
	$($.fn[colorbox].a11yInit);


	//
	// Add accessibility-support: must be called in Colorbox's onComplete-handler
	//
	$.fn[colorbox].a11ySetup = function (options) {
		// If the lightbox is opened for the first time, do some basic initialisations
		if (!open) {
			
			// Get the user's settings
			$.extend(settings, defaults, options);

			// Get colorbox's settings on the current element
			cboxSettings = $colorbox.element().data(colorbox);

			// Turn off accesskeys in case of modal-dialog-mode
			if (settings.forceInput) {
				$document.removeAccessKeys();
			}

			// Set up focusleave-event-handler which checks whether lightbox has lost overall focus and which reacts accordingly (closes the box / sets focus back to the box)
			$lightbox.focusleave(onFocusLeave); 

			// Set up event-handlers for "cbox_loaded" (prepare the box for the next item in a set of items) and "cbox_cleanup" (remove accessibiliy-support when closing the box)
			$document.bind(prefix+'_loaded', $.fn[colorbox].a11yPrepare); 
			$document.bind(prefix+'_cleanup', $.fn[colorbox].a11yTeardown);

			// Set up keyboard-event-handler which traps focus inside the box
			if (settings.trapFocus) {
				$document.removeEventHandlers('keypress keydown keyup'); // temporarily suspend existing keyboard-handlers
				$document.bind('keydown', onKeyDown); // 'keypress' would be better (since if the user holds down a key, keypresses are continuily triggerd) but does not work all browsers
			}

			// Make divs focusable by keyboard. Provide title-attribute. Empty hidden divs (in case someone turns off stylesheets in his browser).
			$slideshow.empty();
			if ($current.css('display') === 'none') {
				$current.empty();
			}
			$.each([$next, $previous, $close], function (index, object) {
				object.attr('title', object.html());
				if (object.css('display') !== 'none') {
					object.attr('tabindex', '0');
				}
				else {
					object.removeAttr('tabindex');
					object.empty();
				}
			});
		
			// Add WAI-ARIA properties 1: make the lightbox a dialog
			$lightbox.attr({ 
				'role'				:	'dialog',
				'aria-hidden'		:	'false',
				'aria-labelledby'	:	prefix + 'TopCenter'
			});
			$('#'+prefix+'TopCenter').html('<a id="'+prefix+'DialogLabel'+'">'+settings.dialogLabel+'</a>');
			$start = $('#'+prefix+'DialogLabel');
					
			// Add WAI-ARIA properties 2: associate content-div with title-div and current-div
			$('#'+prefix+'LoadedContent').attr('aria-describedby', prefix + 'Title' + ' ' + prefix + 'Current');
		
			// Add WAI-ARIA properties 3: indicate cause-effect-relationships	
			$next.attr('aria-controls', prefix + 'LoadedContent');							
			$previous.attr('aria-controls', prefix + 'LoadedContent');	
								
			// Add WAI-ARIA properties 4: set 'aria-hidden' attribute on elements styled 'display:none'
			$.each([$next, $previous, $current, $slideshow], function(index, object) {
				if (object.css('display') === 'none') { 
					object.attr('aria-hidden', 'true');
				}
				else {
					object.attr('aria-hidden', 'false');
				}
			});

			// Inject print stylesheet which allows for the printing of the box content only
			if (settings.printCss.length) {
				$('<link>', {	
					media	:	'print',
					rel		:	'stylesheet',
					href	:	settings.printCss
				}).appendTo('head');
			}

		}

		// Prevent usage of accessibility-plugin with iframes and slideshows (ugly hack)
		if (cboxSettings.slideshow) {
			setTimeout(function(){ $colorbox.close();}, 200); // eliminate remaining timing-issues
		}
		var frames = $lightbox.find('iframe');
		if (frames.length) {
			setTimeout(function(){ $colorbox.close();}, 200);
			for (var i=0; i < frames.length; i++) {
				frames.eq(i).bind('load', function(){ setTimeout(function(){ $colorbox.close();}, 200);}); // unable to close a loading frame, see http://groups.google.com/group/colorbox/browse_thread/thread/77e89cc514d43abf 
			}
		}

		// Inject lightbox in the DOM right after trigger element only (http://www.w3.org/TR/WCAG20-TECHS/SCR37.html)
		if (!settings.printCss.length) {
			$colorbox.element().after($lightbox);
		}
		
		// Improve image accessibility 1: add missing alt-attribute
		var $image = $('#'+prefix+'Photo');
		$image.attr('alt', settings.imageLabel);
		
		// Improve image accessibility 2: provide hidden long description for the image
		var imageURI = $image.attr('src');
		if (imageURI) {
			var longDescURI = imageURI.substring(0, imageURI.lastIndexOf('.')) + settings.suffixLongDescURI + ".html";
			
			$.ajax({url:longDescURI, type:'HEAD', success:function() {
				$('#'+prefix+'Title').append('<div class="hideme" id="' + prefix + 'LongDesc' + '"></div>');
				$longdesc = $('#'+prefix+'LongDesc');
				$longdesc.load(longDescURI, function (response, status, xhr) {
					if (status === "error") {
						$longdesc.text("[Error retrieving image description: " + xhr.status + " " + xhr.statusText + "]");
					}
				});
			}});
		}


		// Set up keyboard-event-handler for focusable div-elements: take action when user has focused a focusable div and hits enter
		$lightbox.getFocusableElements().filter('div').bind('keydown', onFocusableKeyDown);

		// Set up click-event-handler for all focusable elements: allow for changing the focus by clicking on an element
		if (settings.trapFocus) {
			$lightbox.getFocusableElements().bind('click', onFocusableClick);
		}
		
		// Finally: set focus to the box (defaults to 'close the box') and its state to 'open'
		var $focusedElement; 
		if (settings.focusFirstElement) {
			$focusedElement = $lightbox.getFirstFocusableElement(); 
		}
		else {
			$focusedElement = $lightbox.getLastFocusableElement(); // should be the 'close'-button
		}
		
		setTimeout(function() {
			$focusedElement.focus();
			$activeTabElement = $focusedElement;
		}, 200); // eliminate remaining timing-issues

		open = true;

	}


	//
	// Remove accessibility-support: automatically called when colorbox closes (bound to 'cbox_cleanup' in a11ySetup)
	//
	$.fn[colorbox].a11yTeardown = function () {

		// Do the normal cleanup we do for every item in a set of items (AKA slideshow)
		$.fn[colorbox].a11yPrepare();
		
		// Remove print stylesheets
		if (settings.printCss.length) {
			$("link[href='"+settings.printCss+"']").remove();
		}
		
		// Undbind main handlers
		$lightbox.unbind('focusleave', onFocusLeave);
		$document.unbind('keydown', onKeyDown);
		$document.unbind(prefix+'_loaded', $.fn[colorbox].a11yPrepare); 
		$document.unbind(prefix+'_cleanup', $.fn[colorbox].a11yTeardown);
		
		// Restore accesskeys and handlers
		$document.restoreEventHandlers('keypress keydown keyup');
		$document.restoreAccessKeys();

		// Set lightbox state to 'closed'
		open = false;		
		$lightbox.attr('aria-hidden', 'true');
		
	}


	//
	// Reset accessibility-support for each item in a set of items (AKA slideshow): automatically called if user has clicked next/previous button (bound to 'cbox_loaded' in a11yTeardown)
	//
	$.fn[colorbox].a11yPrepare = function () {
		
		// Unbind handlers for all focusable elements
		if ($lightbox) {			
			$lightbox.getFocusableElements().unbind('keydown', onFocusableKeyDown);
			$lightbox.getFocusableElements().unbind('click', onFocusableClick);
		}
		
		// Remove image controls
		if ($imagecontrols) {
			$imagecontrols.remove();
		}

		// Remove hidden long description
		if ($longdesc) {
			$longdesc.remove();
		}

		// Empty cache and reset static variables
		$([]).getFocusableElements(); 
		$activeTabElement = $longdesc = $imagecontrols = undefined;

	}

	
	//
	// Update list of focusable elements: must be called if content of the lightbox gets dynamically changed
	//
	$.fn[colorbox].a11yUpdateFocusableElements = function () {

		if (open) {

			if (settings.trapFocus) {
				$lightbox.getFocusableElements('clearCache').unbind('click', onFocusableClick).bind('click', onFocusableClick);
			}
		
			$lightbox.getFocusableElements('clearCache').filter('div').unbind('keydown', onFocusableKeyDown).bind('keydown', onFocusableKeyDown);
		}
		
	}


	//
	// Small helper function: turns off colorbox's returnFocus so that inner page anchors with accesskeys still work as expected when called from colorbox
	//
	$.fn[colorbox].a11yReturnFocus = function (option) {

		var $element = $colorbox.element(), group = $element.attr('rel') || false;
	
		if (option === false) {
			group ? $("a[rel="+group+"]").unbind(prefix+'_closed') : $element.unbind(prefix+'_closed'); 
		}
		else if (option === true ) {
			$element.one(prefix+'_closed', function() {
				try {
					this.focus();
				} 
				catch(e) {
					;
				}
			 
			});
		}

	}


	//
	// Provide public access to default plugin settings so that the developer can redefine them on a per page basis
	//
	$.fn[colorbox].a11yDefaults = $[colorbox].a11yDefaults = defaults;


 })(jQuery);




//
//
// jQuery Plugins
//
//

// jQuery plugin which allows to detect focusenter / focusleave of a dialog widget
// Usage:	$('#mydiv').focusleave(function(e) { alert( if (e.focusedBody) alert("Lost focus to body") else alert ("Lost focus to another element"); });
//			$('#mydiv').focusenter(function(e) { alert("Gained focus"); });
//
( function ($) {

	// The core of our plugin: checks whether a certain element is contained in another element
	function sameOrChild(n1, n2) {
		return n1 === n2 || (typeof(n1.contains) !== 'undefined' ? n1.contains(n2) : !!(n1.compareDocumentPosition(n2) & 16)); // see http://www.quirksmode.org/blog/archives/2006/01/contains_for_mo.html
	}

	// Handler for the 'focusenter'-event
	function focusHandler(event) {
		var $this = $(this), isFocused = $this.data('focus.isFocused');
		event = $.event.fix(event || window.event);

		if (!isFocused) {
			$this.data('focus.isFocused', true);
			event.type = 'focusenter';
			return $.event.handle.apply(this, [event]);
		}	
	}

	// Handler1 for the 'focusleave'-event: needed since focusing the body-element should not be seen as a real focus loss
	function focusHandlerBody(event) {
		var $watchedObject = $(document).data('focus.watchedObject');
		event = $.event.fix(event || window.event);
		var isBody = event.target.nodeType === 9 || event.target.tagName.toLowerCase() == 'body';
         
		if (!isBody && !sameOrChild($watchedObject.get(0), event.target) ) {
			$watchedObject.data('focus.isFocused', false);
			event.type = 'focusleave';
			return $.event.handle.apply($watchedObject.get(0), [event]);
		}
	}

	// Handler2 for the 'focusleave'-event
	function blurHandler(event) {
		var $this = $(this);
		event = $.event.fix(event || window.event);

		window.setTimeout(function() {
			if (document.activeElement.tagName.toLowerCase() === 'body') {
				event.type = 'focusleave';
				event.focusedBody = true;
				return $.event.handle.apply($this.get(0), [event]);;
			}
			if (!sameOrChild($this.get(0), document.activeElement)) {
				$this.data('focus.isFocused', false);
				event.type = 'focusleave';
				return $.event.handle.apply($this.get(0), [event]);
			}
		}, 0);
    
	}

	// Setup event special event
	function setupEvents(elem) {
		var $elem = $(elem), $document = $(document);
		var ref = $elem.data('focus.handlerReferences') || 0;

		if (ref === 0) {
			if (elem.addEventListener) {
				elem.addEventListener('focus', focusHandler, true);
				document.addEventListener('focus', focusHandlerBody, true);
				elem.addEventListener('blur', blurHandler, true);
			}
			else {
				elem.onfocusin  = focusHandler;
				document.onfocusin = focusHandlerBody;
				elem.onfocusout = blurHandler;
			}
			$document.data('focus.watchedObject', $elem);
		}

		$elem.data('focus.handlerReferences', ref + 1);
		$elem.data('focus.isFocused', sameOrChild(elem, document.activeElement));
	}

	// Tear down event special event
	function teardownEvents(elem) {
		var $elem = $(elem), $document = $(document);
		var ref = $elem.data('focus.handlerReferences') || 0;

		if (ref === 1) {
			if (elem.removeEventListener) {
				elem.removeEventListener('focus', focusHandler, true);
				document.removeEventListener('focus', focusHandlerBody, true);
				elem.removeEventListener('blur', blurHandler, true);
			}
			else {
				elem.onfocusin  = null;
				document.onfocusin = null;
				elem.onfocusout = null;
			}
			$elem.removeData('focus.handlerReferences');
			$elem.removeData('focus.isFocused');
			$document.removeData('focus.watchedObject');
		}
		else {
			$elem.data('focus.handlerReferences', ref - 1);
		}
	}

	$.each(['focusenter', 'focusleave'], function(i, x) {
		$.event.special[x] = {
			setup: function() { setupEvents(this); },
			teardown: function() { teardownEvents(this); }
		};
	});

	$.fn.extend({
		focusenter: function(fn) {
			return fn ? this.bind('focusenter', fn) : this.trigger('focusenter');
		},
		focusleave: function(fn) {
			return fn ? this.bind('focusleave', fn) : this.trigger('focusleave');
		}
	});

})(jQuery);



// jQuery plugin for temporarily removing / quickly restoring accesskeys of a certain block-level element 
// Usage:	$(document).removeAccessKeys();
//			$(document).restoreAccessKeys();
//
( function ($) {

	$.fn.extend({

		removeAccessKeys: function () {
			$('[accesskey]', this).each( function() {
				var $this = $(this);
				if (!$this.data('accesskeyStore')) {
					$this.data('accesskeyStore', $this.attr('accesskey'));
					$this.attr('accesskey', '');
				}
			});
			return this;
		},

		restoreAccessKeys: function () {
			$('[accesskey]', this).each( function() {
				var $this = $(this);
				if ($this.data('accesskeyStore')) {
					$this.attr('accesskey', $this.data('accesskeyStore'));
					$this.removeData('accesskeyStore');
				}
			});
			return this;
		}
	});

})(jQuery);



// jQuery plugin which allows for the temporary removal / restorage of event-handlers of a certain element
// Usage:	$(document).removeEventHandlers()							--> remove all handlers
//			$(document).removeEventHandlers('keypress keydown keyup');	--> remove only specified handlers
//			$(document).restoreEventHandlers('keydown');				--> restore only keydown-handler
//
// Note:	You can only remove / restore event-handlers once per element. Non restored handlers are lost.
//
( function ($) {

	$.fn.extend({

		removeEventHandlers: function (which) {
			if (this.data('events') && !this.data('eventStore')) {
				this.data('eventStore', $.extend(true, [], this.data('events'))); // perform a deep-copy of 'events'-object

				if (which) {
					which = which.split(' ');
						for ( var i=0; i<which.length; i++ ) {             
							this.unbind(which[i]);				
						}
				} 
				else {
					this.unbind();
				}
			}

			return this;
		},

		restoreEventHandlers: function (which) {
			var events = this.data('eventStore');
			if (events) {

				if (which) {
					which = which.split(' ');
				}

				for (var type in events) {
					if (which) {
						for (var i=0; i<which.length; i++) {
							if (type === which[i]) {
								for (var num in events[type]) {
									this.bind(type, events[type][num].handler);
    							}
							}
						}

					} 
					else {
						for (var type in events) {
							for (var num in events[type]) {
								this.bind(type, events[type][num].handler);
							}
						}
					}
				}
	        
				this.removeData('eventStore');	
			}
			return this;
		}
	});

})(jQuery);



// jQuery plugin which allows to mimic the user's sequential keyboard-navigation with the TAB-key
// Usage:	$('#myDialogDiv').getFocusableElements();						--> returns tab-order of 'myDialogDiv'
//			$('#myDialogDiv').getFirstFocusableElement();					--> returns first element in the tab-order
//			$('#myDialogDiv').getLastFocusableElement();					--> returns last element in the tab-order
//			$('#myDialogDiv').getNextFocusableElement($('#mylink'));		--> returns next element in tab-order after 'mylink'
//			$('#myDialogDiv').getPreviousFocusableElement($('#mylink'));	--> returns previous element in the tab-order
//			$('#myDialogDiv').getFocusableElements('clearCache');			--> Clear cache, rebuild tab-order and return it
//
// Note:	All the above functions use a cache to speed up processing time. You could force to update the cache with the 'clearCache' parameter.
//			"$([]).getFocusableElements();" empties the cache.
//
(function($) {

	function buildTabOrder ($blockLevelElement) {

		// Get focusable elements (http://dev.w3.org/html5/spec/editing.html#sequential-focus-navigation-and-the-tabindex-attribute)
		var $focusable = $blockLevelElement.find('a, button, input, textarea, select, iframe, area, command, [tabindex]').not('[disabled], :hidden');
            
		// Remove elements styled "visibility:hidden" and "visibility:collapsed"
		$focusable = $focusable.map(function() {
			var $this = $(this);
			return $this.css('visibility') === 'hidden' || $this.css('visibility') === 'collapsed'  ? null : this;
		});
		
		// Remove anchors
		$focusable = $focusable.map(function() {
			var $this = $(this);
			return $this.attr('href') === undefined && $this.is('a') ? null : this;
		});
      
		// Remove elements with a negative tabindex
		$focusable = $focusable.map(function() {
			return parseInt($(this).attr('tabindex')) < 0 ? null : this;
		});

		// Build tab-order
		// - Disregard tabindex=""
		// - Treat tabindex="0" as if no tabindex has been specified
		// - Maximum value for tabindex allowed (according to w3c): 32767
		// - Tabindex > 32767 is 'no tabindex'
		$focusable = $focusable.sort(function(a, b) {
			var $a = $(a), $b = $(b), indexA = 32768, indexB = indexA;
        
			if (parseInt($a.attr('tabindex')) > 0) {
				indexA = parseInt($a.attr('tabindex'));
				if ( indexA > 32767 ) {
					indexA = 32768; 
				}
			}
        
			if (parseInt($b.attr('tabindex')) > 0) {
				indexB = parseInt($b.attr('tabindex'));
				if ( indexB > 32767 ) {
					indexB = 32768;
				}
			}
        
			return ((indexA < indexB) ? -1 : ((indexA > indexB) ? 1 : 0));
		});

		// Cache tab-order
		$(document).data('tabOrderCache', {
			$element   :  $blockLevelElement,
			$tabOrder  :  $focusable
		});

	}

	
	$.fn.extend ({
    
		getFocusableElements: function (options) {
			var $document = $(document), cache = $document.data('tabOrderCache') || { $element: $([]), $tabOrder: [] };
      
			if (options === 'clearCache' || this.get(0) !== cache.$element.get(0)) {
				buildTabOrder(this);
				cache = $document.data('tabOrderCache');
			}
      
			return cache.$tabOrder;
		},
    
		getFirstFocusableElement: function (options) {
			var $document = $(document), cache = $document.data('tabOrderCache') || { $element: $([]), $tabOrder: [] };
      
			if (options === 'clearCache' || this.get(0) !== cache.$element.get(0)) {
				buildTabOrder(this);
				cache = $document.data('tabOrderCache');
			}
      
			if (cache.$tabOrder.length === 0) {
				return $([]);
			}

			return cache.$tabOrder.eq(0);
		},

		getLastFocusableElement: function (options) {
			var $document = $(document), cache = $document.data('tabOrderCache') || { $element: $([]), $tabOrder: [] };
      
			if (options === 'clearCache' || this.get(0) !== cache.$element.get(0)) {
				buildTabOrder(this);
				cache = $document.data('tabOrderCache');
			}
      
			if (cache.$tabOrder.length === 0) {
				return $([]);
			}

			return cache.$tabOrder.eq(cache.$tabOrder.length-1);
		},

		getNextFocusableElement: function (options) {
			var $document = $(document), cache = $document.data('tabOrderCache') || { $element: $([]), $tabOrder: [] };
      
			if (arguments[1] === 'clearCache' || this.get(0) !== cache.$element.get(0)) {
				buildTabOrder(this);
				cache = $document.data('tabOrderCache');
			}
      
			var me = cache.$tabOrder.index(arguments[0]);
			if (me < 0) {
				return $([]); 
			}
       
			return (me+1) < cache.$tabOrder.length ? cache.$tabOrder.eq(me+1) : $([]);
		},

		getPreviousFocusableElement: function (options) {
			var $document = $(document), cache = $document.data('tabOrderCache') || { $element: $([]), $tabOrder: [] };
      
			if (arguments[1] === 'clearCache' || this.get(0) !== cache.$element.get(0)) {
				buildTabOrder(this);
				cache = $document.data('tabOrderCache');
			}
      
			var me = cache.$tabOrder.index(arguments[0]);
			if (me < 0) {
				return $([]); 
			}
       
			return (me-1) > -1 ? cache.$tabOrder.eq(me-1) : $([]);
		}
	});
})(jQuery);
