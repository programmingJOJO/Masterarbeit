function track_anchors(){var trk_anchors=document.getElementsByTagName('a');for(var i=0,l=trk_anchors.length;i<l;i++){try{var trk_ext=trk_anchors[i].getAttribute('href').substring(trk_anchors[i].getAttribute('href').lastIndexOf('.'),trk_anchors[i].getAttribute('href').length);if((/\.pdf/g).test(trk_ext)||(/\.doc/g).test(trk_ext)||(/\.docx/g).test(trk_ext)||(/\.xls/g).test(trk_ext)||(/\.xlsx/g).test(trk_ext)||(/\.ashx/g).test(trk_ext)||(/\.exe/g).test(trk_ext)){trk_anchors[i].setAttribute('onmousedown','track_load(this.getAttribute(\'href\'), \'Downloaded - \' + this.getAttribute(\'href\')); '+String(trk_anchors[i].getAttribute('onmousedown')));}}
catch(e){}}}
function track_load(docloc,doctit){var trktit=encodeURIComponent(doctit).substring(0,200);trktit=trktit.replace(/\%u00a0/g,'');trktit=trktit.replace(/\%u2122/g,'');trktit=trktit.replace(/\%u[0-9][0-9][0-9][0-9]/g,'');var trklng=window.navigator.userLanguage||window.navigator.language;var trkguid='xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g,function(c){var r=Math.random()*16|0,v=c=='x'?r:(r&0x3|0x8);return v.toString(16);});var link='https://secure.leadforensics.com/Track/Capture.aspx?trk_user=47866&trk_sw='+encodeURIComponent(screen.width).substring(0,6)+'&trk_sh='+encodeURIComponent(screen.height).substring(0,6)+'&trk_ref='+encodeURIComponent(document.referrer).substring(0,1100)+'&trk_tit='+trktit+'&trk_loc='+encodeURIComponent(docloc).substring(0,1000)+'&trk_agn='+encodeURIComponent(navigator.appName).substring(0,100)+'&trk_agv='+encodeURIComponent(navigator.userAgent+'.lfcd'+screen.colorDepth+'.lflng'+trklng).substring(0,1000)+'&trk_dom='+encodeURIComponent(document.domain).substring(0,200)+'&trk_guid='+trkguid+'&trk_cookie=NA';var preload=new Image();preload.src=link;}
track_load(document.location,document.title);var trk_script=document.createElement('script');trk_script.src='https://secure.leadforensics.com/js/trk_anchors.js';document.head.appendChild(trk_script);