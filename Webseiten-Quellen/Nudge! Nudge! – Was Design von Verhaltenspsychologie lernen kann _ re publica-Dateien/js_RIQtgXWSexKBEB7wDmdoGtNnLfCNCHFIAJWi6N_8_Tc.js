(function($) {

Drupal.admin = Drupal.admin || {};
Drupal.admin.behaviors = Drupal.admin.behaviors || {};

/**
 * Core behavior for NCMS Event menu.
 *
 */
Drupal.behaviors.ncmsEvent = {
  attach: function (context, settings) {
    // Initialize settings.
    settings.ncms_event = $.extend({
      margin_top: false,
      position_fixed: false
    }, settings.ncms_event || {});
    var $ncmsEvent = $('#ncms-event-menu', context);
  }
};

/**
 * Apply margin to page.
 */
Drupal.behaviors.ncmsEventMarginTop = {
  attach: function (context, settings) {
    if (settings.ncms_event.margin_top) {
      $('body:not(.ncms-event)', context).addClass('ncms-event');
    }
  }
};

/**
 * TableHeader callback to determine top viewport offset.
 */
Drupal.admin.height = function() {
  var $ncmsEvent = $('#ncms-event-menu');
  var height = $ncmsEvent.outerHeight();
  // In IE, Shadow filter adds some extra height, so we need to remove it from
  // the returned height.
  if ($ncmsEvent.css('filter') && $ncmsEvent.css('filter').match(/DXImageTransform\.Microsoft\.Shadow/)) {
    height -= $ncmsEvent.get(0).filters.item("DXImageTransform.Microsoft.Shadow").strength;
  }
  return height;
};

})(jQuery);
;
/**
 * @file
 * JavaScript integrations between the Caption Filter module and particular
 * WYSIWYG editors. This file also implements Insert module hooks to respond
 * to the insertion of content into a WYSIWYG or textarea.
 */
(function ($) {

$(document).bind('insertIntoActiveEditor', function(event, options) {
  if (options['fields']['title'] && Drupal.settings.captionFilter.widgets[options['widgetType']]) {
    options['content'] = '[caption]' + options['content'] + options['fields']['title'] + '[/caption]';
  }
});

Drupal.captionFilter = Drupal.captionFilter || {};

Drupal.captionFilter.toHTML = function(co, editor) {
  return co.replace(/(?:<p>)?\[caption([^\]]*)\]([\s\S]+?)\[\/caption\](?:<\/p>)?[\s\u00a0]*/g, function(a,b,c){
    var id, cls, w, tempClass;

    b = b.replace(/\\'|\\&#39;|\\&#039;/g, '&#39;').replace(/\\"|\\&quot;/g, '&quot;');
    c = c.replace(/\\&#39;|\\&#039;/g, '&#39;').replace(/\\&quot;/g, '&quot;');
    id = b.match(/id=['"]([^'"]+)/i);
    cls = b.match(/align=['"]([^'"]+)/i);
    w = c.match(/width=['"]([0-9]+)/);

    id = ( id && id[1] ) ? id[1] : '';
    cls = ( cls && cls[1] ) ? 'caption-' + cls[1] : '';
    w = ( w && w[1] ) ? w[1] : '';

    if (editor == 'tinymce')
      tempClass = (cls == 'caption-center') ? 'mceTemp mceIEcenter' : 'mceTemp';
    else if (editor == 'ckeditor')
      tempClass = (cls == 'caption-center') ? 'mceTemp mceIEcenter' : 'mceTemp';
    else
      tempClass = '';

    return '<div class="caption ' + cls + ' ' + tempClass + ' draggable"><div class="caption-inner" style="width: '+(parseInt(w))+'px">' + c + '</div></div>';
  });
};

Drupal.captionFilter.toTag = function(co) {
  return co.replace(/(<div class="caption [^"]*">)\s*<div[^>]+>(.+?)<\/div>\s*<\/div>\s*/gi, function(match, captionWrapper, contents) {
    var align;
    align = captionWrapper.match(/class=.*?caption-(left|center|right)/i);
    align = (align && align[1]) ? align[1] : '';

    return '[caption' + (align ? (' align="' + align + '"') : '') + ']' + contents + '[/caption]';
  });
};

})(jQuery);
;
