//tealium universal tag - utag.7 ut4.0.201602180830, Copyright 2016 Tealium.com Inc. All Rights Reserved.
var s_account="default-not-set";var s=s_gi(s_account);s.dynamicAccountSelection=true;s.dynamicAccountList="amadeusaco-esnewdev=wcm.origin.amadeus.com,test.origin.amadeus.com,test.www.amadeus.com;amadeus-network-of-websites=www.amadeus.com,www.learn.amadeus.com";s.trackDownloadLinks=true;s.trackExternalLinks=true;s.trackInlineStats=true;s.linkDownloadFileTypes="zip,exe,wav,mp3,mov,mpg,avi,wmv,doc,docx,xls,xlsx,ppt,pptx";s.linkInternalFilters="javascript:,mailto:,qa.wcm.origin.amadeus.com,wcm.origin.amadeus.com,www.amadeus.com,test.origin.amadeus.com,www.learn.amadeus.com";s.linkLeaveQueryString=false;s.linkTrackVars="None";s.linkTrackEvents="None";s.usePlugins=false;s.currencyCode="EUR";s.visitorNamespace="amadeus";s.trackingServer="amadeus.d2.sc.omtrdc.net";s.trackingServerSecure="amadeus.d2.sc.omtrdc.net";s.dc=122;var s_code='',s_objectID;function s_gi(un,pg,ss){var c="s.version='H.26';s.an=s_an;s.logDebug=function(m){var s=this,tcf=new Function('var e;try{console.log(\"'+s.rep(s.rep(s.rep(m,\"\\\\\",\"\\\\\\"
+"\\\"),\"\\n\",\"\\\\n\"),\"\\\"\",\"\\\\\\\"\")+'\");}catch(e){}');tcf()};s.cls=function(x,c){var i,y='';if(!c)c=this.an;for(i=0;i<x.length;i++){n=x.substring(i,i+1);if(c.indexOf(n)>=0)y+=n}return "
+"y};s.fl=function(x,l){return x?(''+x).substring(0,l):x};s.co=function(o){return o};s.num=function(x){x=''+x;for(var p=0;p<x.length;p++)if(('0123456789').indexOf(x.substring(p,p+1))<0)return 0;retur"
+"n 1};s.rep=s_rep;s.sp=s_sp;s.jn=s_jn;s.ape=function(x){var s=this,h='0123456789ABCDEF',f=\"+~!*()'\",i,c=s.charSet,n,l,e,y='';c=c?c.toUpperCase():'';if(x){x=''+x;if(s.em==3){x=encodeURIComponent(x)"
+";for(i=0;i<f.length;i++) {n=f.substring(i,i+1);if(x.indexOf(n)>=0)x=s.rep(x,n,\"%\"+n.charCodeAt(0).toString(16).toUpperCase())}}else if(c=='AUTO'&&('').charCodeAt){for(i=0;i<x.length;i++){c=x.subs"
+"tring(i,i+1);n=x.charCodeAt(i);if(n>127){l=0;e='';while(n||l<4){e=h.substring(n%16,n%16+1)+e;n=(n-n%16)/16;l++}y+='%u'+e}else if(c=='+')y+='%2B';else y+=escape(c)}x=y}else x=s.rep(escape(''+x),'+',"
+"'%2B');if(c&&c!='AUTO'&&s.em==1&&x.indexOf('%u')<0&&x.indexOf('%U')<0){i=x.indexOf('%');while(i>=0){i++;if(h.substring(8).indexOf(x.substring(i,i+1).toUpperCase())>=0)return x.substring(0,i)+'u00'+"
+"x.substring(i);i=x.indexOf('%',i)}}}return x};s.epa=function(x){var s=this,y,tcf;if(x){x=s.rep(''+x,'+',' ');if(s.em==3){tcf=new Function('x','var y,e;try{y=decodeURIComponent(x)}catch(e){y=unescap"
+"e(x)}return y');return tcf(x)}else return unescape(x)}return y};s.pt=function(x,d,f,a){var s=this,t=x,z=0,y,r;while(t){y=t.indexOf(d);y=y<0?t.length:y;t=t.substring(0,y);r=s[f](t,a);if(r)return r;z"
+"+=y+d.length;t=x.substring(z,x.length);t=z<x.length?t:''}return ''};s.isf=function(t,a){var c=a.indexOf(':');if(c>=0)a=a.substring(0,c);c=a.indexOf('=');if(c>=0)a=a.substring(0,c);if(t.substring(0,"
+"2)=='s_')t=t.substring(2);return (t!=''&&t==a)};s.fsf=function(t,a){var s=this;if(s.pt(a,',','isf',t))s.fsg+=(s.fsg!=''?',':'')+t;return 0};s.fs=function(x,f){var s=this;s.fsg='';s.pt(x,',','fsf',f"
+");return s.fsg};s.mpc=function(m,a){var s=this,c,l,n,v;v=s.d.visibilityState;if(!v)v=s.d.webkitVisibilityState;if(v&&v=='prerender'){if(!s.mpq){s.mpq=new Array;l=s.sp('webkitvisibilitychange,visibi"
+"litychange',',');for(n=0;n<l.length;n++){s.d.addEventListener(l[n],new Function('var s=s_c_il['+s._in+'],c,v;v=s.d.visibilityState;if(!v)v=s.d.webkitVisibilityState;if(s.mpq&&v==\"visible\"){while("
+"s.mpq.length>0){c=s.mpq.shift();s[c.m].apply(s,c.a)}s.mpq=0}'),false)}}c=new Object;c.m=m;c.a=a;s.mpq.push(c);return 1}return 0};s.si=function(){var s=this,i,k,v,c=s_gi+'var s=s_gi(\"'+s.oun+'\");s"
+".sa(\"'+s.un+'\");';for(i=0;i<s.va_g.length;i++){k=s.va_g[i];v=s[k];if(v!=undefined){if(typeof(v)!='number')c+='s.'+k+'=\"'+s_fe(v)+'\";';else c+='s.'+k+'='+v+';'}}c+=\"s.lnk=s.eo=s.linkName=s.link"
+"Type=s.wd.s_objectID=s.ppu=s.pe=s.pev1=s.pev2=s.pev3='';\";return c};s.c_d='';s.c_gdf=function(t,a){var s=this;if(!s.num(t))return 1;return 0};s.c_gd=function(){var s=this,d=s.wd.location.hostname,"
+"n=s.fpCookieDomainPeriods,p;if(!n)n=s.cookieDomainPeriods;if(d&&!s.c_d){n=n?parseInt(n):2;n=n>2?n:2;p=d.lastIndexOf('.');if(p>=0){while(p>=0&&n>1){p=d.lastIndexOf('.',p-1);n--}s.c_d=p>0&&s.pt(d,'.'"
+",'c_gdf',0)?d.substring(p):d}}return s.c_d};s.c_r=function(k){var s=this;k=s.ape(k);var c=' '+s.d.cookie,i=c.indexOf(' '+k+'='),e=i<0?i:c.indexOf(';',i),v=i<0?'':s.epa(c.substring(i+2+k.length,e<0?"
+"c.length:e));return v!='[[B]]'?v:''};s.c_w=function(k,v,e){var s=this,d=s.c_gd(),l=s.cookieLifetime,t;v=''+v;l=l?(''+l).toUpperCase():'';if(e&&l!='SESSION'&&l!='NONE'){t=(v!=''?parseInt(l?l:0):-60)"
+";if(t){e=new Date;e.setTime(e.getTime()+(t*1000))}}if(k&&l!='NONE'){s.d.cookie=k+'='+s.ape(v!=''?v:'[[B]]')+'; path=/;'+(e&&l!='SESSION'?' expires='+e.toGMTString()+';':'')+(d?' domain='+d+';':'');"
+"return s.c_r(k)==v}return 0};s.eh=function(o,e,r,f){var s=this,b='s_'+e+'_'+s._in,n=-1,l,i,x;if(!s.ehl)s.ehl=new Array;l=s.ehl;for(i=0;i<l.length&&n<0;i++){if(l[i].o==o&&l[i].e==e)n=i}if(n<0){n=i;l"
+"[n]=new Object}x=l[n];x.o=o;x.e=e;f=r?x.b:f;if(r||f){x.b=r?0:o[e];x.o[e]=f}if(x.b){x.o[b]=x.b;return b}return 0};s.cet=function(f,a,t,o,b){var s=this,r,tcf;if(s.apv>=5&&(!s.isopera||s.apv>=7)){tcf="
+"new Function('s','f','a','t','var e,r;try{r=s[f](a)}catch(e){r=s[t](e)}return r');r=tcf(s,f,a,t)}else{if(s.ismac&&s.u.indexOf('MSIE 4')>=0)r=s[b](a);else{s.eh(s.wd,'onerror',0,o);r=s[f](a);s.eh(s.w"
+"d,'onerror',1)}}return r};s.gtfset=function(e){var s=this;return s.tfs};s.gtfsoe=new Function('e','var s=s_c_il['+s._in+'],c;s.eh(window,\"onerror\",1);s.etfs=1;c=s.t();if(c)s.d.write(c);s.etfs=0;r"
+"eturn true');s.gtfsfb=function(a){return window};s.gtfsf=function(w){var s=this,p=w.parent,l=w.location;s.tfs=w;if(p&&p.location!=l&&p.location.host==l.host){s.tfs=p;return s.gtfsf(s.tfs)}return s."
+"tfs};s.gtfs=function(){var s=this;if(!s.tfs){s.tfs=s.wd;if(!s.etfs)s.tfs=s.cet('gtfsf',s.tfs,'gtfset',s.gtfsoe,'gtfsfb')}return s.tfs};s.mrq=function(u){var s=this,l=s.rl[u],n,r;s.rl[u]=0;if(l)for("
+"n=0;n<l.length;n++){r=l[n];s.mr(0,0,r.r,r.t,r.u)}};s.flushBufferedRequests=function(){};s.mr=function(sess,q,rs,ta,u){var s=this,dc=s.dc,t1=s.trackingServer,t2=s.trackingServerSecure,tb=s.trackingS"
+"erverBase,p='.sc',ns=s.visitorNamespace,un=s.cls(u?u:(ns?ns:s.fun)),r=new Object,l,imn='s_i_'+s._in+'_'+un,im,b,e;if(!rs){if(t1){if(t2&&s.ssl)t1=t2}else{if(!tb)tb='2o7.net';if(dc)dc=(''+dc).toLower"
+"Case();else dc='d1';if(tb=='2o7.net'){if(dc=='d1')dc='112';else if(dc=='d2')dc='122';p=''}t1=un+'.'+dc+'.'+p+tb}rs='http'+(s.ssl?'s':'')+'://'+t1+'/b/ss/'+s.un+'/'+(s.mobile?'5.1':'1')+'/'+s.versio"
+"n+(s.tcn?'T':'')+'/'+sess+'?AQB=1&ndh=1'+(q?q:'')+'&AQE=1';if(s.isie&&!s.ismac)rs=s.fl(rs,2047)}if(s.d.images&&s.apv>=3&&(!s.isopera||s.apv>=7)&&(s.ns6<0||s.apv>=6.1)){if(!s.rc)s.rc=new Object;if(!"
+"s.rc[un]){s.rc[un]=1;if(!s.rl)s.rl=new Object;s.rl[un]=new Array;setTimeout('if(window.s_c_il)window.s_c_il['+s._in+'].mrq(\"'+un+'\")',750)}else{l=s.rl[un];if(l){r.t=ta;r.u=un;r.r=rs;l[l.length]=r"
+";return ''}imn+='_'+s.rc[un];s.rc[un]++}if(s.debugTracking){var d='AppMeasurement Debug: '+rs,dl=s.sp(rs,'&'),dln;for(dln=0;dln<dl.length;dln++)d+=\"\\n\\t\"+s.epa(dl[dln]);s.logDebug(d)}im=s.wd[im"
+"n];if(!im)im=s.wd[imn]=new Image;im.s_l=0;im.onload=new Function('e','this.s_l=1;var wd=window,s;if(wd.s_c_il){s=wd.s_c_il['+s._in+'];s.bcr();s.mrq(\"'+un+'\");s.nrs--;if(!s.nrs)s.m_m(\"rr\")}');if"
+"(!s.nrs){s.nrs=1;s.m_m('rs')}else s.nrs++;im.src=rs;if(s.useForcedLinkTracking||s.bcf){if(!s.forcedLinkTrackingTimeout)s.forcedLinkTrackingTimeout=250;setTimeout('if(window.s_c_il)window.s_c_il['+s"
+"._in+'].bcr()',s.forcedLinkTrackingTimeout);}else if((s.lnk||s.eo)&&(!ta||ta=='_self'||ta=='_top'||ta=='_parent'||(s.wd.name&&ta==s.wd.name))){b=e=new Date;while(!im.s_l&&e.getTime()-b.getTime()<50"
+"0)e=new Date}return ''}return '<im'+'g sr'+'c=\"'+rs+'\" width=1 height=1 border=0 alt=\"\">'};s.gg=function(v){var s=this;if(!s.wd['s_'+v])s.wd['s_'+v]='';return s.wd['s_'+v]};s.glf=function(t,a){"
+"if(t.substring(0,2)=='s_')t=t.substring(2);var s=this,v=s.gg(t);if(v)s[t]=v};s.gl=function(v){var s=this;if(s.pg)s.pt(v,',','glf',0)};s.rf=function(x){var s=this,y,i,j,h,p,l=0,q,a,b='',c='',t;if(x&"
+"&x.length>255){y=''+x;i=y.indexOf('?');if(i>0){q=y.substring(i+1);y=y.substring(0,i);h=y.toLowerCase();j=0;if(h.substring(0,7)=='http://')j+=7;else if(h.substring(0,8)=='https://')j+=8;i=h.indexOf("
+"\"/\",j);if(i>0){h=h.substring(j,i);p=y.substring(i);y=y.substring(0,i);if(h.indexOf('google')>=0)l=',q,ie,start,search_key,word,kw,cd,';else if(h.indexOf('yahoo.co')>=0)l=',p,ei,';if(l&&q){a=s.sp("
+"q,'&');if(a&&a.length>1){for(j=0;j<a.length;j++){t=a[j];i=t.indexOf('=');if(i>0&&l.indexOf(','+t.substring(0,i)+',')>=0)b+=(b?'&':'')+t;else c+=(c?'&':'')+t}if(b&&c)q=b+'&'+c;else c=''}i=253-(q.len"
+"gth-c.length)-y.length;x=y+(i>0?p.substring(0,i):'')+'?'+q}}}}return x};s.s2q=function(k,v,vf,vfp,f){var s=this,qs='',sk,sv,sp,ss,nke,nk,nf,nfl=0,nfn,nfm;if(k==\"contextData\")k=\"c\";if(v){for(sk "
+"in v)if((!f||sk.substring(0,f.length)==f)&&v[sk]&&(!vf||vf.indexOf(','+(vfp?vfp+'.':'')+sk+',')>=0)&&(!Object||!Object.prototype||!Object.prototype[sk])){nfm=0;if(nfl)for(nfn=0;nfn<nfl.length;nfn++"
+")if(sk.substring(0,nfl[nfn].length)==nfl[nfn])nfm=1;if(!nfm){if(qs=='')qs+='&'+k+'.';sv=v[sk];if(f)sk=sk.substring(f.length);if(sk.length>0){nke=sk.indexOf('.');if(nke>0){nk=sk.substring(0,nke);nf="
+"(f?f:'')+nk+'.';if(!nfl)nfl=new Array;nfl[nfl.length]=nf;qs+=s.s2q(nk,v,vf,vfp,nf)}else{if(typeof(sv)=='boolean'){if(sv)sv='true';else sv='false'}if(sv){if(vfp=='retrieveLightData'&&f.indexOf('.con"
+"textData.')<0){sp=sk.substring(0,4);ss=sk.substring(4);if(sk=='transactionID')sk='xact';else if(sk=='channel')sk='ch';else if(sk=='campaign')sk='v0';else if(s.num(ss)){if(sp=='prop')sk='c'+ss;else "
+"if(sp=='eVar')sk='v'+ss;else if(sp=='list')sk='l'+ss;else if(sp=='hier'){sk='h'+ss;sv=sv.substring(0,255)}}}qs+='&'+s.ape(sk)+'='+s.ape(sv)}}}}}if(qs!='')qs+='&.'+k}return qs};s.hav=function(){var "
+"s=this,qs='',l,fv='',fe='',mn,i,e;if(s.lightProfileID){l=s.va_m;fv=s.lightTrackVars;if(fv)fv=','+fv+','+s.vl_mr+','}else{l=s.va_t;if(s.pe||s.linkType){fv=s.linkTrackVars;fe=s.linkTrackEvents;if(s.p"
+"e){mn=s.pe.substring(0,1).toUpperCase()+s.pe.substring(1);if(s[mn]){fv=s[mn].trackVars;fe=s[mn].trackEvents}}}if(fv)fv=','+fv+','+s.vl_l+','+s.vl_l2;if(fe){fe=','+fe+',';if(fv)fv+=',events,'}if (s."
+"events2)e=(e?',':'')+s.events2}for(i=0;i<l.length;i++){var k=l[i],v=s[k],b=k.substring(0,4),x=k.substring(4),n=parseInt(x),q=k;if(!v)if(k=='events'&&e){v=e;e=''}if(v&&(!fv||fv.indexOf(','+k+',')>=0"
+")&&k!='linkName'&&k!='linkType'){if(k=='timestamp')q='ts';else if(k=='dynamicVariablePrefix')q='D';else if(k=='visitorID')q='vid';else if(k=='pageURL'){q='g';if(v.length>255){s.pageURLRest=v.substr"
+"ing(255);v=v.substring(0,255);}}else if(k=='pageURLRest')q='-g';else if(k=='referrer'){q='r';v=s.fl(s.rf(v),255)}else if(k=='vmk'||k=='visitorMigrationKey')q='vmt';else if(k=='visitorMigrationServe"
+"r'){q='vmf';if(s.ssl&&s.visitorMigrationServerSecure)v=''}else if(k=='visitorMigrationServerSecure'){q='vmf';if(!s.ssl&&s.visitorMigrationServer)v=''}else if(k=='charSet'){q='ce';if(v.toUpperCase()"
+"=='AUTO')v='ISO8859-1';else if(s.em==2||s.em==3)v='UTF-8'}else if(k=='visitorNamespace')q='ns';else if(k=='cookieDomainPeriods')q='cdp';else if(k=='cookieLifetime')q='cl';else if(k=='variableProvid"
+"er')q='vvp';else if(k=='currencyCode')q='cc';else if(k=='channel')q='ch';else if(k=='transactionID')q='xact';else if(k=='campaign')q='v0';else if(k=='resolution')q='s';else if(k=='colorDepth')q='c'"
+";else if(k=='javascriptVersion')q='j';else if(k=='javaEnabled')q='v';else if(k=='cookiesEnabled')q='k';else if(k=='browserWidth')q='bw';else if(k=='browserHeight')q='bh';else if(k=='connectionType'"
+")q='ct';else if(k=='homepage')q='hp';else if(k=='plugins')q='p';else if(k=='events'){if(e)v+=(v?',':'')+e;if(fe)v=s.fs(v,fe)}else if(k=='events2')v='';else if(k=='contextData'){qs+=s.s2q('c',s[k],f"
+"v,k,0);v=''}else if(k=='lightProfileID')q='mtp';else if(k=='lightStoreForSeconds'){q='mtss';if(!s.lightProfileID)v=''}else if(k=='lightIncrementBy'){q='mti';if(!s.lightProfileID)v=''}else if(k=='re"
+"trieveLightProfiles')q='mtsr';else if(k=='deleteLightProfiles')q='mtsd';else if(k=='retrieveLightData'){if(s.retrieveLightProfiles)qs+=s.s2q('mts',s[k],fv,k,0);v=''}else if(s.num(x)){if(b=='prop')q"
+"='c'+n;else if(b=='eVar')q='v'+n;else if(b=='list')q='l'+n;else if(b=='hier'){q='h'+n;v=s.fl(v,255)}}if(v)qs+='&'+s.ape(q)+'='+(k.substring(0,3)!='pev'?s.ape(v):v)}}return qs};s.ltdf=function(t,h){"
+"t=t?t.toLowerCase():'';h=h?h.toLowerCase():'';var qi=h.indexOf('?');h=qi>=0?h.substring(0,qi):h;if(t&&h.substring(h.length-(t.length+1))=='.'+t)return 1;return 0};s.ltef=function(t,h){t=t?t.toLower"
+"Case():'';h=h?h.toLowerCase():'';if(t&&h.indexOf(t)>=0)return 1;return 0};s.lt=function(h){var s=this,lft=s.linkDownloadFileTypes,lef=s.linkExternalFilters,lif=s.linkInternalFilters;lif=lif?lif:s.w"
+"d.location.hostname;h=h.toLowerCase();if(s.trackDownloadLinks&&lft&&s.pt(lft,',','ltdf',h))return 'd';if(s.trackExternalLinks&&h.indexOf('#')!=0&&h.indexOf('about:')!=0&&h.indexOf('javascript:')!=0"
+"&&(lef||lif)&&(!lef||s.pt(lef,',','ltef',h))&&(!lif||!s.pt(lif,',','ltef',h)))return 'e';return ''};s.lc=new Function('e','var s=s_c_il['+s._in+'],b=s.eh(this,\"onclick\");s.lnk=this;s.t();s.lnk=0;"
+"if(b)return this[b](e);return true');s.bcr=function(){var s=this;if(s.bct&&s.bce)s.bct.dispatchEvent(s.bce);if(s.bcf){if(typeof(s.bcf)=='function')s.bcf();else if(s.bct&&s.bct.href)s.d.location=s.b"
+"ct.href}s.bct=s.bce=s.bcf=0};s.bc=new Function('e','if(e&&e.s_fe)return;var s=s_c_il['+s._in+'],f,tcf,t,n,nrs,a,h;if(s.d&&s.d.all&&s.d.all.cppXYctnr)return;if(!s.bbc)s.useForcedLinkTracking=0;else "
+"if(!s.useForcedLinkTracking){s.b.removeEventListener(\"click\",s.bc,true);s.bbc=s.useForcedLinkTracking=0;return}else s.b.removeEventListener(\"click\",s.bc,false);s.eo=e.srcElement?e.srcElement:e."
+"target;nrs=s.nrs;s.t();s.eo=0;if(s.nrs>nrs&&s.useForcedLinkTracking&&e.target){a=e.target;while(a&&a!=s.b&&a.tagName.toUpperCase()!=\"A\"&&a.tagName.toUpperCase()!=\"AREA\")a=a.parentNode;if(a){h=a"
+".href;if(h.indexOf(\"#\")==0||h.indexOf(\"about:\")==0||h.indexOf(\"javascript:\")==0)h=0;t=a.target;if(e.target.dispatchEvent&&h&&(!t||t==\"_self\"||t==\"_top\"||t==\"_parent\"||(s.wd.name&&t==s.w"
+"d.name))){tcf=new Function(\"s\",\"var x;try{n=s.d.createEvent(\\\\\"MouseEvents\\\\\")}catch(x){n=new MouseEvent}return n\");n=tcf(s);if(n){tcf=new Function(\"n\",\"e\",\"var x;try{n.initMouseEven"
+"t(\\\\\"click\\\\\",e.bubbles,e.cancelable,e.view,e.detail,e.screenX,e.screenY,e.clientX,e.clientY,e.ctrlKey,e.altKey,e.shiftKey,e.metaKey,e.button,e.relatedTarget)}catch(x){n=0}return n\");n=tcf(n"
+",e);if(n){n.s_fe=1;e.stopPropagation();if (e.stopImmediatePropagation) {e.stopImmediatePropagation();}e.preventDefault();s.bct=e.target;s.bce=n}}}}}');s.oh=function(o){var s=this,l=s.wd.location,h="
+"o.href?o.href:'',i,j,k,p;i=h.indexOf(':');j=h.indexOf('?');k=h.indexOf('/');if(h&&(i<0||(j>=0&&i>j)||(k>=0&&i>k))){p=o.protocol&&o.protocol.length>1?o.protocol:(l.protocol?l.protocol:'');i=l.pathna"
+"me.lastIndexOf('/');h=(p?p+'//':'')+(o.host?o.host:(l.host?l.host:''))+(h.substring(0,1)!='/'?l.pathname.substring(0,i<0?0:i)+'/':'')+h}return h};s.ot=function(o){var t=o.tagName;if(o.tagUrn||(o.sc"
+"opeName&&o.scopeName.toUpperCase()!='HTML'))return '';t=t&&t.toUpperCase?t.toUpperCase():'';if(t=='SHAPE')t='';if(t){if((t=='INPUT'||t=='BUTTON')&&o.type&&o.type.toUpperCase)t=o.type.toUpperCase();"
+"else if(!t&&o.href)t='A';}return t};s.oid=function(o){var s=this,t=s.ot(o),p,c,n='',x=0;if(t&&!o.s_oid){p=o.protocol;c=o.onclick;if(o.href&&(t=='A'||t=='AREA')&&(!c||!p||p.toLowerCase().indexOf('ja"
+"vascript')<0))n=s.oh(o);else if(c){n=s.rep(s.rep(s.rep(s.rep(''+c,\"\\r\",''),\"\\n\",''),\"\\t\",''),' ','');x=2}else if(t=='INPUT'||t=='SUBMIT'){if(o.value)n=o.value;else if(o.innerText)n=o.inner"
+"Text;else if(o.textContent)n=o.textContent;x=3}else if(o.src&&t=='IMAGE')n=o.src;if(n){o.s_oid=s.fl(n,100);o.s_oidt=x}}return o.s_oid};s.rqf=function(t,un){var s=this,e=t.indexOf('='),u=e>=0?t.subs"
+"tring(0,e):'',q=e>=0?s.epa(t.substring(e+1)):'';if(u&&q&&(','+u+',').indexOf(','+un+',')>=0){if(u!=s.un&&s.un.indexOf(',')>=0)q='&u='+u+q+'&u=0';return q}return ''};s.rq=function(un){if(!un)un=this"
+".un;var s=this,c=un.indexOf(','),v=s.c_r('s_sq'),q='';if(c<0)return s.pt(v,'&','rqf',un);return s.pt(un,',','rq',0)};s.sqp=function(t,a){var s=this,e=t.indexOf('='),q=e<0?'':s.epa(t.substring(e+1))"
+";s.sqq[q]='';if(e>=0)s.pt(t.substring(0,e),',','sqs',q);return 0};s.sqs=function(un,q){var s=this;s.squ[un]=q;return 0};s.sq=function(q){var s=this,k='s_sq',v=s.c_r(k),x,c=0;s.sqq=new Object;s.squ="
+"new Object;s.sqq[q]='';s.pt(v,'&','sqp',0);s.pt(s.un,',','sqs',q);v='';for(x in s.squ)if(x&&(!Object||!Object.prototype||!Object.prototype[x]))s.sqq[s.squ[x]]+=(s.sqq[s.squ[x]]?',':'')+x;for(x in s"
+".sqq)if(x&&(!Object||!Object.prototype||!Object.prototype[x])&&s.sqq[x]&&(x==q||c<2)){v+=(v?'&':'')+s.sqq[x]+'='+s.ape(x);c++}return s.c_w(k,v,0)};s.wdl=new Function('e','var s=s_c_il['+s._in+'],r="
+"true,b=s.eh(s.wd,\"onload\"),i,o,oc;if(b)r=this[b](e);for(i=0;i<s.d.links.length;i++){o=s.d.links[i];oc=o.onclick?\"\"+o.onclick:\"\";if((oc.indexOf(\"s_gs(\")<0||oc.indexOf(\".s_oc(\")>=0)&&oc.ind"
+"exOf(\".tl(\")<0)s.eh(o,\"onclick\",0,s.lc);}return r');s.wds=function(){var s=this;if(s.apv>3&&(!s.isie||!s.ismac||s.apv>=5)){if(s.b&&s.b.attachEvent)s.b.attachEvent('onclick',s.bc);else if(s.b&&s"
+".b.addEventListener){if(s.n&&((s.n.userAgent.indexOf('WebKit')>=0&&s.d.createEvent)||(s.n.userAgent.indexOf('Firefox/2')>=0&&s.wd.MouseEvent))){s.bbc=1;s.useForcedLinkTracking=1;s.b.addEventListene"
+"r('click',s.bc,true)}s.b.addEventListener('click',s.bc,false)}else s.eh(s.wd,'onload',0,s.wdl)}};s.vs=function(x){var s=this,v=s.visitorSampling,g=s.visitorSamplingGroup,k='s_vsn_'+s.un+(g?'_'+g:''"
+"),n=s.c_r(k),e=new Date,y=e.getYear();e.setYear(y+10+(y<1900?1900:0));if(v){v*=100;if(!n){if(!s.c_w(k,x,e))return 0;n=x}if(n%10000>v)return 0}return 1};s.dyasmf=function(t,m){if(t&&m&&m.indexOf(t)>"
+"=0)return 1;return 0};s.dyasf=function(t,m){var s=this,i=t?t.indexOf('='):-1,n,x;if(i>=0&&m){var n=t.substring(0,i),x=t.substring(i+1);if(s.pt(x,',','dyasmf',m))return n}return 0};s.uns=function(){"
+"var s=this,x=s.dynamicAccountSelection,l=s.dynamicAccountList,m=s.dynamicAccountMatch,n,i;s.un=s.un.toLowerCase();if(x&&l){if(!m)m=s.wd.location.host;if(!m.toLowerCase)m=''+m;l=l.toLowerCase();m=m."
+"toLowerCase();n=s.pt(l,';','dyasf',m);if(n)s.un=n}i=s.un.indexOf(',');s.fun=i<0?s.un:s.un.substring(0,i)};s.sa=function(un){var s=this;if(s.un&&s.mpc('sa',arguments))return;s.un=un;if(!s.oun)s.oun="
+"un;else if((','+s.oun+',').indexOf(','+un+',')<0)s.oun+=','+un;s.uns()};s.m_i=function(n,a){var s=this,m,f=n.substring(0,1),r,l,i;if(!s.m_l)s.m_l=new Object;if(!s.m_nl)s.m_nl=new Array;m=s.m_l[n];i"
+"f(!a&&m&&m._e&&!m._i)s.m_a(n);if(!m){m=new Object,m._c='s_m';m._in=s.wd.s_c_in;m._il=s._il;m._il[m._in]=m;s.wd.s_c_in++;m.s=s;m._n=n;m._l=new Array('_c','_in','_il','_i','_e','_d','_dl','s','n','_r"
+"','_g','_g1','_t','_t1','_x','_x1','_rs','_rr','_l');s.m_l[n]=m;s.m_nl[s.m_nl.length]=n}else if(m._r&&!m._m){r=m._r;r._m=m;l=m._l;for(i=0;i<l.length;i++)if(m[l[i]])r[l[i]]=m[l[i]];r._il[r._in]=r;m="
+"s.m_l[n]=r}if(f==f.toUpperCase())s[n]=m;return m};s.m_a=new Function('n','g','e','if(!g)g=\"m_\"+n;var s=s_c_il['+s._in+'],c=s[g+\"_c\"],m,x,f=0;if(s.mpc(\"m_a\",arguments))return;if(!c)c=s.wd[\"s_"
+"\"+g+\"_c\"];if(c&&s_d)s[g]=new Function(\"s\",s_ft(s_d(c)));x=s[g];if(!x)x=s.wd[\\'s_\\'+g];if(!x)x=s.wd[g];m=s.m_i(n,1);if(x&&(!m._i||g!=\"m_\"+n)){m._i=f=1;if((\"\"+x).indexOf(\"function\")>=0)x"
+"(s);else s.m_m(\"x\",n,x,e)}m=s.m_i(n,1);if(m._dl)m._dl=m._d=0;s.dlt();return f');s.m_m=function(t,n,d,e){t='_'+t;var s=this,i,x,m,f='_'+t,r=0,u;if(s.m_l&&s.m_nl)for(i=0;i<s.m_nl.length;i++){x=s.m_"
+"nl[i];if(!n||x==n){m=s.m_i(x);u=m[t];if(u){if((''+u).indexOf('function')>=0){if(d&&e)u=m[t](d,e);else if(d)u=m[t](d);else u=m[t]()}}if(u)r=1;u=m[t+1];if(u&&!m[f]){if((''+u).indexOf('function')>=0){"
+"if(d&&e)u=m[t+1](d,e);else if(d)u=m[t+1](d);else u=m[t+1]()}}m[f]=1;if(u)r=1}}return r};s.m_ll=function(){var s=this,g=s.m_dl,i,o;if(g)for(i=0;i<g.length;i++){o=g[i];if(o)s.loadModule(o.n,o.u,o.d,o"
+".l,o.e,1);g[i]=0}};s.loadModule=function(n,u,d,l,e,ln){var s=this,m=0,i,g,o=0,f1,f2,c=s.h?s.h:s.b,b,tcf;if(n){i=n.indexOf(':');if(i>=0){g=n.substring(i+1);n=n.substring(0,i)}else g=\"m_\"+n;m=s.m_i"
+"(n)}if((l||(n&&!s.m_a(n,g)))&&u&&s.d&&c&&s.d.createElement){if(d){m._d=1;m._dl=1}if(ln){if(s.ssl)u=s.rep(u,'http:','https:');i='s_s:'+s._in+':'+n+':'+g;b='var s=s_c_il['+s._in+'],o=s.d.getElementBy"
+"Id(\"'+i+'\");if(s&&o){if(!o.l&&s.wd.'+g+'){o.l=1;if(o.i)clearTimeout(o.i);o.i=0;s.m_a(\"'+n+'\",\"'+g+'\"'+(e?',\"'+e+'\"':'')+')}';f2=b+'o.c++;if(!s.maxDelay)s.maxDelay=250;if(!o.l&&o.c<(s.maxDel"
+"ay*2)/100)o.i=setTimeout(o.f2,100)}';f1=new Function('e',b+'}');tcf=new Function('s','c','i','u','f1','f2','var e,o=0;try{o=s.d.createElement(\"script\");if(o){o.type=\"text/javascript\";'+(n?'o.id"
+"=i;o.defer=true;o.onload=o.onreadystatechange=f1;o.f2=f2;o.l=0;':'')+'o.src=u;c.appendChild(o);'+(n?'o.c=0;o.i=setTimeout(f2,100)':'')+'}}catch(e){o=0}return o');o=tcf(s,c,i,u,f1,f2)}else{o=new Obj"
+"ect;o.n=n+':'+g;o.u=u;o.d=d;o.l=l;o.e=e;g=s.m_dl;if(!g)g=s.m_dl=new Array;i=0;while(i<g.length&&g[i])i++;g[i]=o}}else if(n){m=s.m_i(n);m._e=1}return m};s.voa=function(vo,r){var s=this,l=s.va_g,i,k,"
+"v,x;for(i=0;i<l.length;i++){k=l[i];v=vo[k];if(v||vo['!'+k]){if(!r&&(k==\"contextData\"||k==\"retrieveLightData\")&&s[k])for(x in s[k])if(!v[x])v[x]=s[k][x];s[k]=v}}};s.vob=function(vo){var s=this,l"
+"=s.va_g,i,k;for(i=0;i<l.length;i++){k=l[i];vo[k]=s[k];if(!vo[k])vo['!'+k]=1}};s.dlt=new Function('var s=s_c_il['+s._in+'],d=new Date,i,vo,f=0;if(s.dll)for(i=0;i<s.dll.length;i++){vo=s.dll[i];if(vo)"
+"{if(!s.m_m(\"d\")||d.getTime()-vo._t>=s.maxDelay){s.dll[i]=0;s.t(vo)}else f=1}}if(s.dli)clearTimeout(s.dli);s.dli=0;if(f){if(!s.dli)s.dli=setTimeout(s.dlt,s.maxDelay)}else s.dll=0');s.dl=function(v"
+"o){var s=this,d=new Date;if(!vo)vo=new Object;s.vob(vo);vo._t=d.getTime();if(!s.dll)s.dll=new Array;s.dll[s.dll.length]=vo;if(!s.maxDelay)s.maxDelay=250;s.dlt()};s.gfid=function(){var s=this,d='012"
+"3456789ABCDEF',k='s_fid',fid=s.c_r(k),h='',l='',i,j,m=8,n=4,e=new Date,y;if(!fid||fid.indexOf('-')<0){for(i=0;i<16;i++){j=Math.floor(Math.random()*m);h+=d.substring(j,j+1);j=Math.floor(Math.random("
+")*n);l+=d.substring(j,j+1);m=n=16}fid=h+'-'+l;}y=e.getYear();e.setYear(y+2+(y<1900?1900:0));if(!s.c_w(k,fid,e))fid=0;return fid};s.applyADMS=function(){var s=this,vb=new Object;if(s.wd.ADMS&&!s.vis"
+"itorID&&!s.admsc){if(!s.adms)s.adms=ADMS.getDefault();if(!s.admsq){s.visitorID=s.adms.getVisitorID(new Function('v','var s=s_c_il['+s._in+'],l=s.admsq,i;if(v==-1)v=0;if(v)s.visitorID=v;s.admsq=0;if"
+"(l){s.admsc=1;for(i=0;i<l.length;i++)s.t(l[i]);s.admsc=0;}'));if(!s.visitorID)s.admsq=new Array}if(s.admsq){s.vob(vb);vb['!visitorID']=0;s.admsq.push(vb);return 1}else{if(s.visitorID==-1)s.visitorI"
+"D=0}}return 0};s.track=s.t=function(vo){var s=this,trk=1,tm=new Date,sed=Math&&Math.random?Math.floor(Math.random()*10000000000000):tm.getTime(),sess='s'+Math.floor(tm.getTime()/10800000)%10+sed,y="
+"tm.getYear(),vt=tm.getDate()+'/'+tm.getMonth()+'/'+(y<1900?y+1900:y)+' '+tm.getHours()+':'+tm.getMinutes()+':'+tm.getSeconds()+' '+tm.getDay()+' '+tm.getTimezoneOffset(),tcf,tfs=s.gtfs(),ta=-1,q=''"
+",qs='',code='',vb=new Object;if(s.mpc('t',arguments))return;s.gl(s.vl_g);s.uns();s.m_ll();if(!s.td){var tl=tfs.location,a,o,i,x='',c='',v='',p='',bw='',bh='',j='1.0',k=s.c_w('s_cc','true',0)?'Y':'N"
+"',hp='',ct='',pn=0,ps;if(String&&String.prototype){j='1.1';if(j.match){j='1.2';if(tm.setUTCDate){j='1.3';if(s.isie&&s.ismac&&s.apv>=5)j='1.4';if(pn.toPrecision){j='1.5';a=new Array;if(a.forEach){j="
+"'1.6';i=0;o=new Object;tcf=new Function('o','var e,i=0;try{i=new Iterator(o)}catch(e){}return i');i=tcf(o);if(i&&i.next){j='1.7';if(a.reduce){j='1.8';if(j.trim){j='1.8.1';if(Date.parse){j='1.8.2';i"
+"f(Object.create)j='1.8.5'}}}}}}}}}if(s.apv>=4)x=screen.width+'x'+screen.height;if(s.isns||s.isopera){if(s.apv>=3){v=s.n.javaEnabled()?'Y':'N';if(s.apv>=4){c=screen.pixelDepth;bw=s.wd.innerWidth;bh="
+"s.wd.innerHeight}}s.pl=s.n.plugins}else if(s.isie){if(s.apv>=4){v=s.n.javaEnabled()?'Y':'N';c=screen.colorDepth;if(s.apv>=5){bw=s.d.documentElement.offsetWidth;bh=s.d.documentElement.offsetHeight;i"
+"f(!s.ismac&&s.b){tcf=new Function('s','tl','var e,hp=0;try{s.b.addBehavior(\"#default#homePage\");hp=s.b.isHomePage(tl)?\"Y\":\"N\"}catch(e){}return hp');hp=tcf(s,tl);tcf=new Function('s','var e,ct"
+"=0;try{s.b.addBehavior(\"#default#clientCaps\");ct=s.b.connectionType}catch(e){}return ct');ct=tcf(s)}}}else r=''}if(s.pl)while(pn<s.pl.length&&pn<30){ps=s.fl(s.pl[pn].name,100)+';';if(p.indexOf(ps"
+")<0)p+=ps;pn++}s.resolution=x;s.colorDepth=c;s.javascriptVersion=j;s.javaEnabled=v;s.cookiesEnabled=k;s.browserWidth=bw;s.browserHeight=bh;s.connectionType=ct;s.homepage=hp;s.plugins=p;s.td=1}if(vo"
+"){s.vob(vb);s.voa(vo)}s.fid=s.gfid();if(s.applyADMS())return '';if((vo&&vo._t)||!s.m_m('d')){if(s.usePlugins)s.doPlugins(s);if(!s.abort){var l=s.wd.location,r=tfs.document.referrer;if(!s.pageURL)s."
+"pageURL=l.href?l.href:l;if(!s.referrer&&!s._1_referrer){s.referrer=r;s._1_referrer=1}s.m_m('g');if(s.lnk||s.eo){var o=s.eo?s.eo:s.lnk,p=s.pageName,w=1,t=s.ot(o),n=s.oid(o),x=o.s_oidt,h,l,i,oc;if(s."
+"eo&&o==s.eo){while(o&&!n&&t!='BODY'){o=o.parentElement?o.parentElement:o.parentNode;if(o){t=s.ot(o);n=s.oid(o);x=o.s_oidt}}if(!n||t=='BODY')o='';if(o){oc=o.onclick?''+o.onclick:'';if((oc.indexOf('s"
+"_gs(')>=0&&oc.indexOf('.s_oc(')<0)||oc.indexOf('.tl(')>=0)o=0}}if(o){if(n)ta=o.target;h=s.oh(o);i=h.indexOf('?');h=s.linkLeaveQueryString||i<0?h:h.substring(0,i);l=s.linkName;t=s.linkType?s.linkTyp"
+"e.toLowerCase():s.lt(h);if(t&&(h||l)){s.pe='lnk_'+(t=='d'||t=='e'?t:'o');s.pev1=(h?s.ape(h):'');s.pev2=(l?s.ape(l):'')}else trk=0;if(s.trackInlineStats){if(!p){p=s.pageURL;w=0}t=s.ot(o);i=o.sourceI"
+"ndex;if(o.dataset&&o.dataset.sObjectId){s.wd.s_objectID=o.dataset.sObjectId;}else if(o.getAttribute&&o.getAttribute('data-s-object-id')){s.wd.s_objectID=o.getAttribute('data-s-object-id');}else if("
+"s.useForcedLinkTracking){s.wd.s_objectID='';oc=o.onclick?''+o.onclick:'';if(oc){var ocb=oc.indexOf('s_objectID'),oce,ocq,ocx;if(ocb>=0){ocb+=10;while(ocb<oc.length&&(\"= \\t\\r\\n\").indexOf(oc.cha"
+"rAt(ocb))>=0)ocb++;if(ocb<oc.length){oce=ocb;ocq=ocx=0;while(oce<oc.length&&(oc.charAt(oce)!=';'||ocq)){if(ocq){if(oc.charAt(oce)==ocq&&!ocx)ocq=0;else if(oc.charAt(oce)==\"\\\\\")ocx=!ocx;else ocx"
+"=0;}else{ocq=oc.charAt(oce);if(ocq!='\"'&&ocq!=\"'\")ocq=0}oce++;}oc=oc.substring(ocb,oce);if(oc){o.s_soid=new Function('s','var e;try{s.wd.s_objectID='+oc+'}catch(e){}');o.s_soid(s)}}}}}if(s.gg('o"
+"bjectID')){n=s.gg('objectID');x=1;i=1}if(p&&n&&t)qs='&pid='+s.ape(s.fl(p,255))+(w?'&pidt='+w:'')+'&oid='+s.ape(s.fl(n,100))+(x?'&oidt='+x:'')+'&ot='+s.ape(t)+(i?'&oi='+i:'')}}else trk=0}if(trk||qs)"
+"{s.sampled=s.vs(sed);if(trk){if(s.sampled)code=s.mr(sess,(vt?'&t='+s.ape(vt):'')+s.hav()+q+(qs?qs:s.rq()),0,ta);qs='';s.m_m('t');if(s.p_r)s.p_r();s.referrer=s.lightProfileID=s.retrieveLightProfiles"
+"=s.deleteLightProfiles=''}s.sq(qs)}}}else s.dl(vo);if(vo)s.voa(vb,1);s.abort=0;s.pageURLRest=s.lnk=s.eo=s.linkName=s.linkType=s.wd.s_objectID=s.ppu=s.pe=s.pev1=s.pev2=s.pev3='';if(s.pg)s.wd.s_lnk=s"
+".wd.s_eo=s.wd.s_linkName=s.wd.s_linkType='';return code};s.trackLink=s.tl=function(o,t,n,vo,f){var s=this;s.lnk=o;s.linkType=t;s.linkName=n;if(f){s.bct=o;s.bcf=f}s.t(vo)};s.trackLight=function(p,ss"
+",i,vo){var s=this;s.lightProfileID=p;s.lightStoreForSeconds=ss;s.lightIncrementBy=i;s.t(vo)};s.setTagContainer=function(n){var s=this,l=s.wd.s_c_il,i,t,x,y;s.tcn=n;if(l)for(i=0;i<l.length;i++){t=l["
+"i];if(t&&t._c=='s_l'&&t.tagContainerName==n){s.voa(t);if(t.lmq)for(i=0;i<t.lmq.length;i++){x=t.lmq[i];y='m_'+x.n;if(!s[y]&&!s[y+'_c']){s[y]=t[y];s[y+'_c']=t[y+'_c']}s.loadModule(x.n,x.u,x.d)}if(t.m"
+"l)for(x in t.ml)if(s[x]){y=s[x];x=t.ml[x];for(i in x)if(!Object.prototype[i]){if(typeof(x[i])!='function'||(''+x[i]).indexOf('s_c_il')<0)y[i]=x[i]}}if(t.mmq)for(i=0;i<t.mmq.length;i++){x=t.mmq[i];i"
+"f(s[x.m]){y=s[x.m];if(y[x.f]&&typeof(y[x.f])=='function'){if(x.a)y[x.f].apply(y,x.a);else y[x.f].apply(y)}}}if(t.tq)for(i=0;i<t.tq.length;i++)s.t(t.tq[i]);t.s=s;return}}};s.wd=window;s.ssl=(s.wd.lo"
+"cation.protocol.toLowerCase().indexOf('https')>=0);s.d=document;s.b=s.d.body;if(s.d.getElementsByTagName){s.h=s.d.getElementsByTagName('HEAD');if(s.h)s.h=s.h[0]}s.n=navigator;s.u=s.n.userAgent;s.ns"
+"6=s.u.indexOf('Netscape6/');var apn=s.n.appName,v=s.n.appVersion,ie=v.indexOf('MSIE '),o=s.u.indexOf('Opera '),i;if(v.indexOf('Opera')>=0||o>0)apn='Opera';s.isie=(apn=='Microsoft Internet Explorer'"
+");s.isns=(apn=='Netscape');s.isopera=(apn=='Opera');s.ismac=(s.u.indexOf('Mac')>=0);if(o>0)s.apv=parseFloat(s.u.substring(o+6));else if(ie>0){s.apv=parseInt(i=v.substring(ie+5));if(s.apv>3)s.apv=pa"
+"rseFloat(i)}else if(s.ns6>0)s.apv=parseFloat(s.u.substring(s.ns6+10));else s.apv=parseFloat(v);s.em=0;if(s.em.toPrecision)s.em=3;else if(String.fromCharCode){i=escape(String.fromCharCode(256)).toUp"
+"perCase();s.em=(i=='%C4%80'?2:(i=='%U0100'?1:0))}if(s.oun)s.sa(s.oun);s.sa(un);s.vl_l='timestamp,dynamicVariablePrefix,visitorID,fid,vmk,visitorMigrationKey,visitorMigrationServer,visitorMigrationS"
+"erverSecure,ppu,charSet,visitorNamespace,cookieDomainPeriods,cookieLifetime,pageName,pageURL,referrer,contextData,currencyCode,lightProfileID,lightStoreForSeconds,lightIncrementBy,retrieveLightProf"
+"iles,deleteLightProfiles,retrieveLightData';s.va_l=s.sp(s.vl_l,',');s.vl_mr=s.vl_m='timestamp,charSet,visitorNamespace,cookieDomainPeriods,cookieLifetime,contextData,lightProfileID,lightStoreForSec"
+"onds,lightIncrementBy';s.vl_t=s.vl_l+',variableProvider,channel,server,pageType,transactionID,purchaseID,campaign,state,zip,events,events2,products,linkName,linkType';var n;for(n=1;n<=75;n++){s.vl_"
+"t+=',prop'+n+',eVar'+n;s.vl_m+=',prop'+n+',eVar'+n}for(n=1;n<=5;n++)s.vl_t+=',hier'+n;for(n=1;n<=3;n++)s.vl_t+=',list'+n;s.va_m=s.sp(s.vl_m,',');s.vl_l2=',tnt,pe,pev1,pev2,pev3,resolution,colorDept"
+"h,javascriptVersion,javaEnabled,cookiesEnabled,browserWidth,browserHeight,connectionType,homepage,pageURLRest,plugins';s.vl_t+=s.vl_l2;s.va_t=s.sp(s.vl_t,',');s.vl_g=s.vl_t+',trackingServer,trackin"
+"gServerSecure,trackingServerBase,fpCookieDomainPeriods,disableBufferedRequests,mobile,visitorSampling,visitorSamplingGroup,dynamicAccountSelection,dynamicAccountList,dynamicAccountMatch,trackDownlo"
+"adLinks,trackExternalLinks,trackInlineStats,linkLeaveQueryString,linkDownloadFileTypes,linkExternalFilters,linkInternalFilters,linkTrackVars,linkTrackEvents,linkNames,lnk,eo,lightTrackVars,_1_refer"
+"rer,un';s.va_g=s.sp(s.vl_g,',');s.pg=pg;s.gl(s.vl_g);s.contextData=new Object;s.retrieveLightData=new Object;if(!ss)s.wds();if(pg){s.wd.s_co=function(o){return o};s.wd.s_gs=function(un){s_gi(un,1,1"
+").t()};s.wd.s_dc=function(un){s_gi(un,1).t()}}",w=window,l=w.s_c_il,n=navigator,u=n.userAgent,v=n.appVersion,e=v.indexOf('MSIE '),m=u.indexOf('Netscape6/'),a,i,j,x,s;if(un){un=un.toLowerCase();if(l)for(j=0;j<2;j++)for(i=0;i<l.length;i++){s=l[i];x=s._c;if((!x||x=='s_c'||(j>0&&x=='s_l'))&&(s.oun==un||(s.fs&&s.sa&&s.fs(s.oun,un)))){if(s.sa)s.sa(un);if(x=='s_c')return s}else s=0}}w.s_an='0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';w.s_sp=new Function("x","d","var a=new Array,i=0,j;if(x){if(x.split)a=x.split(d);else if(!d)for(i=0;i<x.length;i++)a[a.length]=x.substring(i,i+1);else while(i>=0){j=x.indexOf(d,i);a[a.length]=x.subst"
+"ring(i,j<0?x.length:j);i=j;if(i>=0)i+=d.length}}return a");w.s_jn=new Function("a","d","var x='',i,j=a.length;if(a&&j>0){x=a[0];if(j>1){if(a.join)x=a.join(d);else for(i=1;i<j;i++)x+=d+a[i]}}return x");w.s_rep=new Function("x","o","n","return s_jn(s_sp(x,o),n)");w.s_d=new Function("x","var t='`^@$#',l=s_an,l2=new Object,x2,d,b=0,k,i=x.lastIndexOf('~~'),j,v,w;if(i>0){d=x.substring(0,i);x=x.substring(i+2);l=s_sp(l,'');for(i=0;i<62;i++)l2[l[i]]=i;t=s_sp(t,'');d"
+"=s_sp(d,'~');i=0;while(i<5){v=0;if(x.indexOf(t[i])>=0) {x2=s_sp(x,t[i]);for(j=1;j<x2.length;j++){k=x2[j].substring(0,1);w=t[i]+k;if(k!=' '){v=1;w=d[b+l2[k]]}x2[j]=w+x2[j].substring(1)}}if(v)x=s_jn("
+"x2,'');else{w=t[i]+' ';if(x.indexOf(w)>=0)x=s_rep(x,w,t[i]);i++;b+=62}}}return x");w.s_fe=new Function("c","return s_rep(s_rep(s_rep(c,'\\\\','\\\\\\\\'),'\"','\\\\\"'),\"\\n\",\"\\\\n\")");w.s_fa=new Function("f","var s=f.indexOf('(')+1,e=f.indexOf(')'),a='',c;while(s>=0&&s<e){c=f.substring(s,s+1);if(c==',')a+='\",\"';else if((\"\\n\\r\\t \").indexOf(c)<0)a+=c;s++}return a?'\"'+a+'\"':"
+"a");w.s_ft=new Function("c","c+='';var s,e,o,a,d,q,f,h,x;s=c.indexOf('=function(');while(s>=0){s++;d=1;q='';x=0;f=c.substring(s);a=s_fa(f);e=o=c.indexOf('{',s);e++;while(d>0){h=c.substring(e,e+1);if(q){i"
+"f(h==q&&!x)q='';if(h=='\\\\')x=x?0:1;else x=0}else{if(h=='\"'||h==\"'\")q=h;if(h=='{')d++;if(h=='}')d--}if(d>0)e++}c=c.substring(0,s)+'new Function('+(a?a+',':'')+'\"'+s_fe(c.substring(o+1,e))+'\")"
+"'+c.substring(e+1);s=c.indexOf('=function(')}return c;");c=s_d(c);if(e>0){a=parseInt(i=v.substring(e+5));if(a>3)a=parseFloat(i)}else if(m>0)a=parseFloat(u.substring(m+10));else a=parseFloat(v);if(a<5||v.indexOf('Opera')>=0||u.indexOf('Opera')>=0)c=s_ft(c);if(!s){s=new Object;if(!w.s_c_in){w.s_c_il=new Array;w.s_c_in=0}s._il=w.s_c_il;s._in=w.s_c_in;s._il[s._in]=s;w.s_c_in++;}s._c='s_c';(new Function("s","un","pg","ss",c))(s,un,pg,ss);return s}
function s_giqf(){var w=window,q=w.s_giq,i,t,s;if(q)for(i=0;i<q.length;i++){t=q[i];s=s_gi(t.oun);s.sa(t.un);s.setTagContainer(t.tagContainerName)}w.s_giq=0}s_giqf()
try{(function(id,loader,u){try{u=utag.o[loader].sender[id]={}}catch(e){u=utag.sender[id]};u.ev={'view':1,'link':1,'video':1};u.o=s;u.varlist={pageName:'pageName',channel:'ch',campaign:'v0',hier1:'h1',hier2:'h2',hier3:'h3',hier4:'h4'};for(var i=1;i<76;i++){u.varlist['prop'+i]='c'+i;u.varlist['eVar'+i]='v'+i};u.pushlt=function(l,v){if(typeof l!="undefined")l.push(v)};u.map={"js_page.s.events:event1":"event1","js_page.s.events:event2":"event2","js_page.s.events:event3":"event3","js_page.s.events:event4":"event4","js_page.s.events:event5":"event5","js_page.s.events:event6":"event6","js_page.s.events:event7":"event7","js_page.s.events:event8":"event8","js_page.s.events:event9":"event9","js_page.s.events:event10":"event10","js_page.s.events:event11":"event11","js_page.s.events:event12":"event12","js_page.s.events:event13":"event13","js_page.s.events:event14":"event14","js_page.s.events:event15":"event15","js_page.s.events:event16":"event16","js_page.s.events:event17":"event17","js_page.s.events:event18":"event18","js_page.s.events:event19":"event19","js_page.s.events:event20":"event20","js_page.s.events:event21":"event21","js_page.s.events:event22":"event22","js_page.s.events:event23":"event23","js_page.s.events:event24":"event24","js_page.s.events:event25":"event25","js_page.s.events:event26":"event26","js_page.s.events:event27":"event27","js_page.s.events:event28":"event28","js_page.s.events:event29":"event29","js_page.s.events:event30":"event30","js_page.s.events:event31":"event31","js_page.s.events:event32":"event32","js_page.s.events:event33":"event33","js_page.s.events:event34":"event34","js_page.s.events:event35":"event35","js_page.s.events:event36":"event36","js_page.s.events:event37":"event37","js_page.s.events:event38":"event38","js_page.s.events:event39":"event39","js_page.s.events:event40":"event40","js_page.s.events:event41":"event41","js_page.s.events:event42":"event42","js_page.s.events:event43":"event43","js_page.s.events:scOpen":"scOpen","js_page.s.events:scView":"scView","js_page.s.events:scRemove":"scRemove","js_page.s.events:scAdd":"scAdd","js_page.s.events:scCheckout":"scCheckout","js_page.channel":"channel","pageName":"pageName,hier1","js_page.hier1":"hier1","js_page.campaign":"campaign","js_page.eVar1":"eVar1,pageName","js_page.eVar2":"eVar2","js_page.eVar3":"eVar3","js_page.eVar5":"eVar5","js_page.eVar6":"eVar6","js_page.eVar7":"eVar7","js_page.eVar8":"eVar8","js_page.eVar9":"eVar9","js_page.eVar10":"eVar10","js_page.eVar11":"eVar11","js_page.eVar12":"eVar12","js_page.eVar13":"eVar13","js_page.eVar14":"eVar14","js_page.eVar15":"eVar15","js_page.eVar16":"eVar16","js_page.eVar17":"eVar17","js_page.eVar18":"eVar18","js_page.eVar19":"eVar19","js_page.eVar20":"eVar20","js_page.eVar21":"eVar21","js_page.eVar22":"eVar22","js_page.eVar23":"eVar23","js_page.eVar24":"eVar24","js_page.eVar25":"eVar25","js_page.eVar26":"eVar26","js_page.eVar27":"eVar27","js_page.eVar28":"eVar28","js_page.eVar33":"eVar33","js_page.eVar34":"eVar34","js_page.eVar35":"eVar35","js_page.eVar36":"eVar36","js_page.eVar37":"eVar37","js_page.eVar38":"eVar38","js_page.eVar39":"eVar39","js_page.eVar40":"eVar40","js_page.eVar41":"eVar41","js_page.eVar42":"eVar42","js_page.eVar43":"eVar43","js_page.eVar48":"eVar48","js_page.eVar49":"eVar49","js_page.eVar50":"eVar50","js_page.prop11":"prop11","js_page.prop12":"prop12","js_page.prop13":"prop13","js_page.prop14":"prop14","js_page.prop15":"prop15","js_page.prop16":"prop16","js_page.prop17":"prop17","js_page.prop18":"prop18","js_page.prop19":"prop19","js_page.prop20":"prop20","js_page.prop21":"prop21","js_page.prop22":"prop22","js_page.prop23":"prop23","js_page.prop24":"prop24","js_page.prop25":"prop25","js_page.prop26":"prop26","js_page.prop27":"prop27","js_page.prop28":"prop28","js_page.prop29":"prop29","js_page.prop30":"prop30","js_page.prop31":"prop31","js_page.prop32":"prop32","js_page.prop33":"prop33","js_page.prop34":"prop34","js_page.prop35":"prop35","js_page.prop36":"prop36","js_page.prop37":"prop37","js_page.prop38":"prop38","js_page.prop39":"prop39","js_page.prop40":"prop40","js_page.prop41":"prop41","js_page.prop42":"prop42","js_page.prop43":"prop43","js_page.prop44":"prop44","js_page.prop45":"prop45","js_page.prop46":"prop46","js_page.prop47":"prop47","js_page.prop48":"prop48","js_page.prop49":"prop49","js_page.prop50":"prop50","BTScontent":"prop11,eVar11,eVar12,list1,prop12","pageNameLocalLang":"eVar4","productIndustry":"eVar29","productIndustryLocalLang":"eVar30","productPillar":"eVar44","productPillarLocalLang":"eVar45","productCategory":"eVar46","productCategoryLocalLang":"eVar47","js_page.systemname":"eVar55","js_page.suitename":"eVar56","js_page.systemcategoryname":"eVar57","js_page.systemsubcategoryname":"eVar58"};u.extend=[function(a,b){window.seguimientoForms=function(typeEvent,nameForm,errorField){if(typeEvent.toLowerCase()=='success'){s.sendFormEvent("s",s.pageName,nameForm);}
else if(typeEvent.toLowerCase()=='error'){var errorF=errorField||jQuery('div[id*="e"]:visible').attr('id')||'error_no_definido';s.sendFormEvent("e",s.pageName,nameForm,errorF);}}},function(a,b,c,d,e,f,g){d=b['qp.category'];if(typeof d=='undefined')return;c=[{'1319624934993':'Europe'},{'1319624934828':'Global'},{'1319624935071':'South & Central America'},{'1319624934954':'Middle East'},{'1319624935032':'North America'},{'1319624934915':'Africa'},{'1319624934876':'Asia & Pacific'},{'1319624934711':'Interview'},{'1319624934625':'Press Release'},{'1319624934672':'Story'},{'1319624934750':'Media Alert'},{'1319624934789':'Blog Post'},{'1319654752305':'Though Leadership'},{'1259068355670':'Airlines'},{'1259110055779':'Airports'},{'1259068355704':'Car Rental'},{'1259068355719':'Corporations'},{'1259068355734':'Cruise Lines'},{'1259068355760':'Ferry Lines'},{'1259068355773':'Hotels'},{'1259068355786':'Travel Insurance'},{'1259068355799':'Railways'},{'1259068355825':'Travel Agencies'},{'1319608908790':'Online Travel Agencies'},{'1319609075305':'Travel Management Companies'},{'1319653601062':'Corporate'},{'1319653594714':'Mobile'},{'1319653584011':'Travel Payments'},{'1319653598358':'Research & Development'},{'1319653569549':'Travel Intelligence'}];var m=false;for(e=0;e<c.length;e++){for(f in c[e]){if(d==f){b['category_JS']=c[e][f];m=true};};if(m)break};if(!m)b['category_JS']='';},function(a,b,c,d,e,f,g){d=b['qp.industrySegment'];if(typeof d=='undefined')return;c=[{'1259068355670':'Airlines'},{'1259110055779':'Airports'},{'1259068355653':'Business Lines'},{'1259068356108':'Business travel agencies'},{'1259068355704':'Car rental companies'},{'1259068356124':'Consolidators'},{'1319609084804':'Consolidators'},{'1259068355719':'Corporations'},{'1259068355734':'Cruise lines'},{'1259068355747':'Destination Services Providers'},{'1259068355760':'Ferry Lines'},{'1259068357824':'Global'},{'1259068355689':'Ground handlers'},{'1259100096261':'Home based'},{'1259068355773':'Hotels'},{'1259068355786':'Insurance companies'},{'1319609086474':'Large leisure'},{'1259078896434':'Leisure and Business Travel Agencies'},{'1259068356138':'Leisure travel agencies'},{'1319608916840':'Metasearch companies'},{'1259068356152':'Online Travel Agencies'},{'1319608908790':'Online Travel Agencies'},{'1259068355799':'Railway companies'},{'1259078896261':'Schools'},{'1259068356166':'Single-site travel agencies'},{'1259068355812':'Tour operators'},{'1259068355825':'Travel Agencies'},{'1259068356194':'Travel Management companies'},{'1319609075305':'Travel Management companies'},{'1259068356208':'Travel search companies'}];var m=false;for(e=0;e<c.length;e++){for(f in c[e]){if(d==f){b['industrySegment_JS']=c[e][f];m=true};};if(m)break};if(!m)b['industrySegment_JS']='';},function(a,b,c,d,e,f,g){d=b['qp.issue'];if(typeof d=='undefined')return;c=[{'1319653232326':'GH Issue 2012'},{'1319671438031':'GH Issue 2016'},{'1319653229119':'GH Issue 2013'},{'1319653225792':'GH Issue 2014'},{'1319644759450':'GH Issue 2015'},{'1319644753658':'Airports Issue 2015'},{'1319653238494':'Airports Issue 2014'},{'1319653241654':'Airports Issue 2013'}];var m=false;for(e=0;e<c.length;e++){for(f in c[e]){if(d==f){b['issue']=c[e][f];m=true};};if(m)break};if(!m)b['issue']='';},function(a,b){window.s_getLoadTime=function(){if(!window.s_loadT){var b=new Date().getTime(),o=window.performance?performance.timing:0,a=o?o.requestStart:window.inHeadTS||0;s_loadT=a?Math.round((b-a)/100):''}
return s_loadT}
window.nombradoAuxiliar=function(){if((document.location.pathname.toLowerCase().indexOf('share-this-article')>-1||document.location.pathname.toLowerCase().indexOf('ground-handlers')>-1)&&document.location.href.toLowerCase().search('^(.*newsletter+[a-zA-Z]*ppal).*')!=-1){var industrySegment=b['industrySegment_JS']||s.getQueryParam('industrySegment')||'';var issue=b.issue||"";var newsletterName=jQuery('.header-block.group h1').text();var pageName_aux=[];var articleID=s.getQueryParam('articleid');var articleName=jQuery('.newsHead h1').text();var subcategories=jQuery('.newsHead h1').text();var authorName=jQuery('.author a').text();var authorID=s.getQueryParam('author');var articleSubcategory=jQuery('.categories.group .last').text();pageName_aux.push('NewsLetterPage');pageName_aux.push(industrySegment);pageName_aux.push(newsletterName);if(issue!=""){s.prop44=issue;s.eVar50='D=c44';}
s.prop45=newsletterName;s.eVar51='D=c45';s.prop46=industrySegment;s.eVar52='D=c46';if(document.location.pathname.indexOf('NewsLetterPpal')>-1){pageName_aux.push(issue);s.pageName=pageName_aux.join(':');}else if(articleID){if(issue!=""){pageName_aux.push(issue);}
pageName_aux.push(articleName);s.pageName=pageName_aux.join(':');s.prop47=articleSubcategory;s.eVar53='D=c47';s.prop49=authorName;s.eVar54='D=c49';}else if(authorID){pageName_aux.push(authorID);s.pageName=pageName_aux.join(':');}else if(document.location.pathname.indexOf('NewsLetterListingPpal')>-1){pageName_aux.push(subcategories);s.pageName=pageName_aux.join(':');}
s.prop13='D=pageName';s.eVar13='D=c13';s.channel=pageName_aux[0];if(s.pageName){for(var i=0;i<pageName_aux.length&&i<10;i++){s['prop'+(i+1)]=pageName_aux.slice(0,i+1).join(':');}}}
else if(typeof(pageName)!='undefined'&&document.location.href.toLowerCase().indexOf('/newsroom/archive/')>-1&&document.location.href.toLowerCase().indexOf('category=')>-1){s.pageName=s.pageName+':'+b['category_JS'];s.prop13=s.prop13+':'+b['category_JS'];var pageName_aux=s.pageName.split(':');for(var i=0;i<pageName_aux.length-1&&i<10;i++){if(i==0){s['prop'+(i+1)]=pageName_aux.slice(0,i+2).join(':');}else{s['prop'+(i+1)]=pageName_aux.slice(0,i+2).join(':');}}}else if(typeof(pageName)=='undefined'&&document.domain=='www.learn.amadeus.com'){var title=document.title.trim().replace(/ :/g,':');title=title.replace(/: /g,':');var section=jQuery('.information .title').text().trim().replace(/ :/g,':');section=section.replace(/: /g,':');s.channel=title.split(':')[0].trim();s.pageName=title+':'+section;}
else{if(typeof(jQuery)!='undefined'&&typeof(jQuery('.path ul li'))!='undefined'&&jQuery('.path ul li').length>0){a='';jQuery('.path ul li a').each(function(){a+=':'+jQuery(this).text();});if(a.split(':').length>=2){s.channel=a.split(':')[2];s.pageName=s.channel;for(var i=3;i<a.split(':').length&&i<13;i++){s.pageName=s.pageName+':'+a.split(':')[i];s['prop'+(i-2)]=s.pageName;}
s.pageName=s.pageName+':'+jQuery.trim(jQuery('.path ul li:last').text());s['prop'+(a.split(':').length-2)]=s.pageName;}}
else{if(document.location.pathname.split('/').length>=4){s.channel=document.location.pathname.split('/')[4].replace(/-/gi,' ');s.pageName=s.channel;for(var i=5;i<document.location.pathname.split('/').length-1&&i<13;i++){s.pageName=s.pageName+':'+document.location.pathname.split('/')[i].replace(/-/gi,' ');s['prop'+(i-4)]=s.pageName;}}}}}
s.getQueryParam=new Function("p","d","u",""+"var s=this,v='',i,t;d=d?d:'';u=u?u:(s.pageURL?s.pageURL:s.wd.locati"+"on);if(u=='f')u=s.gtfs().location;while(p){i=p.indexOf(',');i=i<0?p"+".length:i;t=s.p_gpv(p.substring(0,i),u+'');if(t){t=t.indexOf('#')>-"+"1?t.substring(0,t.indexOf('#')):t;}if(t)v+=v?d+t:t;p=p.substring(i="+"=p.length?i:i+1)}return v");s.p_gpv=new Function("k","u",""+"var s=this,v='',i=u.indexOf('?'),q;if(k&&i>-1){q=u.substring(i+1);v"+"=s.pt(q,'&','p_gvf',k)}return v");s.p_gvf=new Function("t","k",""+"if(t){var s=this,i=t.indexOf('='),p=i<0?t:t.substring(0,i),v=i<0?'T"+"rue':t.substring(i+1);if(p.toLowerCase()==k.toLowerCase())return s."+"epa(v)}return ''");s.getValOnce=new Function("v","c","e",""+"var s=this,a=new Date,v=v?v:v='',c=c?c:c='s_gvo',e=e?e:0,k=s.c_r(c"+");if(v){a.setTime(a.getTime()+e*86400000);s.c_w(c,v,e?a:0);}return"+" v==k?'':v");s.apl=new Function("l","v","d","u",""+"var s=this,m=0;if(!l)l='';if(u){var i,n,a=s.split(l,d);for(i=0;i<a."+"length;i++){n=a[i];m=m||(u==1?(n==v):(n.toLowerCase()==v.toLowerCas"+"e()));}}if(!m)l=l?l+d+v:v;return l");s.getNewRepeat=new Function("d","cn",""+"var s=this,e=new Date(),cval,sval,ct=e.getTime();d=d?d:30;cn=cn?cn:"+"'s_nr';e.setTime(ct+d*24*60*60*1000);cval=s.c_r(cn);if(cval.length="+"=0){s.c_w(cn,ct+'-New',e);return'New';}sval=s.split(cval,'-');if(ct"+"-sval[0]<30*60*1000&&sval[1]=='New'){s.c_w(cn,ct+'-New',e);return'N"+"ew';}else{s.c_w(cn,ct+'-Repeat',e);return'Repeat';}");s.split=new Function("l","d",""+"var i,x=0,a=new Array;while(l){i=l.indexOf(d);i=i>-1?i:l.length;a[x"+"++]=l.substring(0,i);l=l.substring(i+d.length);}return a");s.setupFormAnalysis=new Function(""+"var s=this;if(!s.fa){s.fa=new Object;var f=s.fa;f.ol=s.wd.onload;"+"f.uc=s.useCommerce;f.vu=s.varUsed;f.vl=f.uc?s.even"+"tList:'';f.tfl=s.trackFormList;f.fl=s.formList;f.va=new Array('',''"+",'','')}");s.sendFormEvent=new Function("t","pn","fn","en",""+"var s=this,f=s.fa;t=t=='s'?t:'e';f.va[0]=pn;f.va[1]=fn;f.va[3]=t=='"+"s'?'Success':en;s.fasl(t);f.va[1]='';f.va[3]='';");s.faol=new Function("e",""+"var s=s_c_il["+s._in+"],f=s.fa,r=true,fo,fn,i,en,t,tf;if(!e)e=s.wd."+"event;f.os=new Array;if(f.ol)r=f.ol(e);if(s.d.forms&&s.d.forms.leng"+"th>0){for(i=s.d.forms.length-1;i>=0;i--){fo=s.d.forms[i];fn=fo.name"+";tf=f.tfl&&s.pt(f.fl,',','ee',fn)||!f.tfl&&!s.pt(f.fl,',','ee',fn);"+"if(tf){f.os[fn]=fo.onsubmit;fo.onsubmit=s.faos;f.va[1]=fn;f.va[3]='"+"No Data Entered';for(en=0;en<fo.elements.length;en++){el=fo.element"+"s[en];t=el.type;if(t&&t.toUpperCase&&t!='fieldset'){t=t.toUpperCase();var md=el.on"+"mousedown,kd=el.onkeydown,omd=md?md.toString():'',okd=kd?kd.toStrin"+"g():'';if(omd.indexOf('.fam(')<0&&okd.indexOf('.fam(')<0){el.s_famd"+"=md;el.s_fakd=kd;el.onmousedown=s.fam;el.onkeydown=s.fam}}}}}f.ul=s"+".wd.onunload;s.wd.onunload=s.fasl;}return r;");s.faos=new Function("e",""+"var s=s_c_il["+s._in+"],f=s.fa,su;if(!e)e=s.wd.event;if(f.vu){s[f.v"+"u]='';f.va[1]='';f.va[3]='';}su=f.os[this.name];return su?su(e):tru"+"e;");s.fasl=new Function("e",""+"var s=s_c_il["+s._in+"],f=s.fa,a=f.va,l=s.wd.location,ip=s.trackPag"+"eName,p=s.pageName;if(a[1]!=''&&a[3]!=''){a[0]=!p&&ip?l.host+l.path"+"name:a[0]?a[0]:p;if(!f.uc&&a[3]!='No Data Entered'){if(e=='e')a[2]="+"'Error';else if(e=='s')a[2]='Success';else a[2]='Abandon'}else a[2]"+"='';var tp=ip?a[0]+':':'',t3=e!='s'?':('+a[3]+')':'',ym=!f.uc&&a[3]"+"!='No Data Entered'?tp+a[1]+':'+a[2]+t3:tp+a[1]+t3,ltv=s.linkTrackV"+"ars,lte=s.linkTrackEvents,up=s.usePlugins;if(f.uc){s.linkTrackVars="+"ltv=='None'?f.vu+',events':ltv+',events,'+f.vu;s.linkTrackEvents=lt"+"e=='None'?f.vl:lte+','+f.vl;f.cnt=-1;if(e=='e')s.events=s.pt(f.vl,'"+",','fage',2);else if(e=='s')s.events=s.pt(f.vl,',','fage',1);else s"+".events=s.pt(f.vl,',','fage',0)}else{s.linkTrackVars=ltv=='None'?f."+"vu:ltv+','+f.vu}s[f.vu]=ym;s.usePlugins=false;var faLink=new Object"+"();faLink.href='#';s.tl(faLink,'o','Form Analysis');s[f.vu]='';s.us"+"ePlugins=up}return f.ul&&e!='e'&&e!='s'?f.ul(e):true;");s.fam=new Function("e",""+"var s=s_c_il["+s._in+"],f=s.fa;if(!e) e=s.wd.event;var o=s.trackLas"+"tChanged,et=e.type.toUpperCase(),t=this.type.toUpperCase(),fn=this."+"form.name,en=this.name,sc=false;if(document.layers){kp=e.which;b=e."+"which}else{kp=e.keyCode;b=e.button}et=et=='MOUSEDOWN'?1:et=='KEYDOW"+"N'?2:et;if(f.ce!=en||f.cf!=fn){if(et==1&&b!=2&&'BUTTONSUBMITRESETIM"+"AGERADIOCHECKBOXSELECT-ONEFILE'.indexOf(t)>-1){f.va[1]=fn;f.va[3]=e"+"n;sc=true}else if(et==1&&b==2&&'TEXTAREAPASSWORDFILE'.indexOf(t)>-1"+"){f.va[1]=fn;f.va[3]=en;sc=true}else if(et==2&&kp!=9&&kp!=13){f.va["+"1]=fn;f.va[3]=en;sc=true}if(sc){nface=en;nfacf=fn}}if(et==1&&this.s"+"_famd)return this.s_famd(e);if(et==2&&this.s_fakd)return this.s_fak"+"d(e);");s.ee=new Function("e","n",""+"return n&&n.toLowerCase?e.toLowerCase()==n.toLowerCase():false;");s.fage=new Function("e","a",""+"var s=this,f=s.fa,x=f.cnt;x=x?x+1:1;f.cnt=x;return x==a?e:'';");s.manageVars=new Function("c","l","f",""+"var s=this,vl,la,vla;l=l?l:'';f=f?f:1 ;if(!s[c])return false;vl='pa"+"geName,purchaseID,channel,server,pageType,campaign,state,zip,events"+",products,transactionID';for(var n=1;n<76;n++){vl+=',prop'+n+',eVar"+"'+n+',hier'+n+',list'+n;}if(l&&(f==1||f==2)){if(f==1){vl=l;}if(f==2"+"){la=s.split(l,',');vla=s.split(vl,',');vl='';for(x in la){for(y in"+" vla){if(la[x]==vla[y]){vla[y]='';}}}for(y in vla){vl+=vla[y]?','+v"+"la[y]:'';}}s.pt(vl,',',c,0);return true;}else if(l==''&&f==1){s.pt("+"vl,',',c,0);return true;}else{return false;}");s.clearVars=new Function("t","var s=this;s[t]='';");s.lowercaseVars=new Function("t",""+"var s=this;if(s[t]&&t!='events'){s[t]=s[t].toString();if(s[t].index"+"Of('D=')!=0){s[t]=s[t].toLowerCase();}}");s.getTrafficSource=new Function(""
+"  var ref=document.referrer;"
+"  var url=document.location;"
+""
+"  if (ref==''){"
+"      s.eVar39='directTraffic';"
+"  }else if(s.isSearchEngine(ref)){"
+"      s.eVar39='SEO';"
+"      s.campaign='seoTraffic';"
+"  }else if(s.isInternalDomain(ref)==0)"
+"      s.eVar39='OtherWebsites';"
+""
+"  if(s.getQueryParam('sem')!=''){"
+"      s.eVar39='Adwords';"
+"      s.campaign=s.getQueryParam('sem');"
+"      s.campaign=s.getValOnce(s.campaign,'s_campaign',0);"
+"      if(!s.campaign)s.eVar39='';"
+"  }"
+"  if(s.getQueryParam('nw')!=''){"
+"      s.eVar39='Newsletter';"
+"      s.campaign=s.getQueryParam('nw');"
+"      s.campaign=s.getValOnce(s.campaign,'s_campaign',0);"
+"      if(!s.campaign)s.eVar39='';"
+"  }"
+"  else if(s.getQueryParam('pro')!=''){"
+"      s.eVar39='OnsitePromos';"
+"      s.campaign=s.getQueryParam('pro');"
+"      s.campaign=s.getValOnce(s.campaign,'s_campaign',0);"
+"      if(!s.campaign)s.eVar39='';"
+"  }"
+"  else if(s.getQueryParam('omail')!=''){"
+"      s.eVar39='OnlineDirectMail';"
+"      s.campaign=s.getQueryParam('omail');"
+"      s.campaign=s.getValOnce(s.campaign,'s_campaign',0);"
+"      if(!s.campaign)s.eVar39='';"
+"  }"
+"  else if(s.getQueryParam('blog')!=''){"
+"      s.eVar39='Blogs';"
+"      s.campaign=s.getQueryParam('blog');"
+"      s.campaign=s.getValOnce(s.campaign,'s_campaign',0);"
+"      if(!s.campaign)s.eVar39='';"
+"  }"
+"  else if(s.getQueryParam('amail')!=''){"
+"      s.eVar39='AutomatedE-mails';"
+"      s.campaign=s.getQueryParam('amail');"
+"      s.campaign=s.getValOnce(s.campaign,'s_campaign',0);"
+"      if(!s.campaign)s.eVar39='';"
+"  }"
+"  else if(s.getQueryParam('com')!=''){"
+"      s.eVar39='Communities';"
+"      s.campaign=s.getQueryParam('com');"
+"      s.campaign=s.getValOnce(s.campaign,'s_campaign',0);"
+"      if(!s.campaign)s.eVar39='';"
+"  }"
+"  else if(s.getQueryParam('rss')!=''){"
+"      s.eVar39='RSS';"
+"      s.campaign=s.getQueryParam('rss');"
+"      s.campaign=s.getValOnce(s.campaign,'s_campaign',0);"
+"      if(!s.campaign)s.eVar39='';"
+"  }"
+"  else if(s.getQueryParam('for')!=''){"
+"      s.eVar39='Forums';"
+"      s.campaign=s.getQueryParam('for');"
+"      s.campaign=s.getValOnce(s.campaign,'s_campaign',0);"
+"      if(!s.campaign)s.eVar39='';"
+"  }"
+"  else if(s.getQueryParam('lpag')!=''){"
+"      s.eVar39='LandingPages';"
+"      s.campaign=s.getQueryParam('lpag');"
+"      s.campaign=s.getValOnce(s.campaign,'s_campaign',0);"
+"      if(!s.campaign)s.eVar39='';"
+"  }"
+"  else if(s.getQueryParam('ref')!=''){"
+"      s.eVar39='Referrals';"
+"      s.campaign=s.getQueryParam('ref');"
+"      s.campaign=s.getValOnce(s.campaign,'s_campaign',0);"
+"      if(!s.campaign)s.eVar39='';"
+"  }"
+"  else if(s.getQueryParam('dmail')!=''){"
+"      s.eVar39='DirectMail';"
+"      s.campaign=s.getQueryParam('dmail');"
+"      s.campaign=s.getValOnce(s.campaign,'s_campaign',0);"
+"      if(!s.campaign)s.eVar39='';"
+"  }"
+"  else if(s.getQueryParam('oads')!=''){"
+"      s.eVar39='OfflineAds';"
+"      s.campaign=s.getQueryParam('oads');"
+"      s.campaign=s.getValOnce(s.campaign,'s_campaign',0);"
+"      if(!s.campaign)s.eVar39='';"
+"  }"
+"  else if(s.getQueryParam('press')!=''){"
+"      s.eVar39='PressReleases';"
+"      s.campaign=s.getQueryParam('press');"
+"      s.campaign=s.getValOnce(s.campaign,'s_campaign',0);"
+"      if(!s.campaign)s.eVar39='';"
+"  }"
+"  else if(s.getQueryParam('pressc')!=''){"
+"      s.eVar39='PressClippings';"
+"      s.campaign=s.getQueryParam('pressc');"
+"      s.campaign=s.getValOnce(s.campaign,'s_campaign',0);"
+"      if(!s.campaign)s.eVar39='';"
+"  }"
+"  else if(s.getQueryParam('ev')!=''){"
+"      s.eVar39='Events';"
+"      s.campaign=s.getQueryParam('ev');"
+"      s.campaign=s.getValOnce(s.campaign,'s_campaign',0);"
+"      if(!s.campaign)s.eVar39='';"
+"  }"
+"  else if(s.getQueryParam('sp')!=''){"
+"      s.eVar39='SellingPlatform';"
+"      s.campaign=s.getQueryParam('sp');"
+"      s.campaign=s.getValOnce(s.campaign,'s_campaign',0);"
+"      if(!s.campaign)s.eVar39='';"
+"  }"
+"  else if(s.getQueryParam('ex')!=''){"
+"      s.eVar39='Extranet';"
+"      s.campaign=s.getQueryParam('ex');"
+"      s.campaign=s.getValOnce(s.campaign,'s_campaign',0);"
+"      if(!s.campaign)s.eVar39='';"
+"  }"
+"  else if(s.getQueryParam('ads')!=''){"
+"      s.eVar39='OnlineAds';"
+"      s.campaign=s.getQueryParam('ads');"
+"      s.campaign=s.getValOnce(s.campaign,'s_campaign',0);"
+"      if(!s.campaign)s.eVar39='';"
+"  }"
+"  else if(s.getQueryParam('opro')!=''){"
+"      s.eVar39='Off-line Promos';"
+"      s.campaign=s.getQueryParam('opro');"
+"      s.campaign=s.getValOnce(s.campaign,'s_campaign',0);"
+"      if(!s.campaign)s.eVar39='';"
+"  }"
+"  else if(s.getQueryParam('smads')!=''){"
+"      s.eVar39='Social Media Ads';"
+"      s.campaign=s.getQueryParam('smads');"
+"      s.campaign=s.getValOnce(s.campaign,'s_campaign',0);"
+"      if(!s.campaign)s.eVar39='';"
+"  }"
+"  else if(s.getQueryParam('tmog')!=''){"
+"      s.eVar39='Tube Mogul';"
+"      s.campaign=s.getQueryParam('tmog');"
+"      s.campaign=s.getValOnce(s.campaign,'s_campaign',0);"
+"      if(!s.campaign)s.eVar39='';"
+"  }"
+"  else if(s.getQueryParam('other')!=''){"
+"      s.eVar39='Other';"
+"      s.campaign=s.getQueryParam('other');"
+"      s.campaign=s.getValOnce(s.campaign,'s_campaign',0);"
+"      if(!s.campaign)s.eVar39='';"
+"  }"
+""
+"  s.prop39=s.eVar39;");s.isSearchEngine=new Function("ref",""
+"var se='.google.,.yahoo.,bing.com,live.com,.aol.,ask.com,terra.es,a"
+"ltavista.com,.lycos.,alltheweb.com,.hispavista.,.virgilio.,.yandex."
+",.starmedia.,.ozu.';se=se.split(',');for(var i=0;i<se.length;i++){i"
+"f(ref.match(se[i])!=null)return true;}return false;");s.isInternalDomain=new Function("ref",""
+"var dom=s.linkInternalFilters.split(',');for(i=1;i<dom.length;i=i+1)"
+"{if(ref.match(dom[i])!=null)return 1;}return 0;");s.isFirstAccess=new Function(""
+"if(document.cookie.length>0){if(document.cookie.indexOf('s_gts')!=-1"
+") return 0;}return 1;");},function(a,b){try{if((b['dom.domain']=='wcm.origin.amadeus.com'&&b['pageName']=='Home:Home')){try{b['pageName']=b['pageName']+'-'+b['site']}catch(e){}}}catch(e){utag.DB(e)}},function(a,b){try{if((b['dom.domain']=='www.learn.amadeus.com'&&/.*(es\.htm|en\.htm)$/.test(b['dom.pathname']))){try{b['language']=document.location.href.match(/(es\.htm|en\.htm)/g)[0].split('.')[0]+'_1A'}catch(e){}}}catch(e){utag.DB(e)}},function(a,b){s_getLoadTime();s.formList=""
s.trackFormList=true
s.trackPageName=true
s.useCommerce=true
s.varUsed="eVar3"
s.eventList="event18,event19,event20"
s.usePlugins=true
function s_doPlugins(s){window.scroll_flag=true;if((typeof(jQuery)!='undefined'&&typeof(jQuery('.error-title.corner-6'))!='undefined'&&jQuery('.error-title.corner-6').length>0)||b.pageErrorType=='400'||b.pageErrorType=='502'||b.pageErrorType=='500'){if(b.pageErrorType=='400'){s.pageType='errorPage';s.pageName=s.prop1=s.prop2=s.channel=s.hier1='';}else if(b.pageErrorType=='502'||b.pageErrorType=='500'){s.pageName='Error '+b.pageErrorType;s.prop51='Error 500:'+document.location.href;}
s.prop27=document.location.href;s.eVar5='D=c27';s.prop28=document.referrer;s.eVar6='D=c28';s.events=s.apl(s.events,"event36",",",1);s.eVar43=s.prop43=s_getLoadTime();if(s_getLoadTime())s.events=s.apl(s.events,'event43='+s_getLoadTime(),',',1);}
else if(typeof(jQuery)!='undefined'){if(typeof(window.systemname)!='undefined'){if(systemname!=''){array=window.systemname.split(" ");total=array.length;resultado="";for(var i=0;i<total;resultado+=array[i][0],i++);s.pageName=b.pageName.replace(window.systemname,resultado);b.pageName=s.pageName;}}
if(typeof(jQuery('.path ul li a'))!='undefined'&&jQuery('.path ul li a').text()!=''){x=[];a='';jQuery('.path ul li a').each(function(i){if(typeof(window.systemname)!='undefined'&&typeof(resultado)!='undefined'&&resultado!=''&&b.pageName.search(resultado)!=-1){a+=(jQuery(this).text()).replace(window.systemname,resultado)+':';}
else{a+=jQuery(this).text()+':';}});for(var i=1;i<a.split(':').length;i++){x[i]=a.split(':')[i];}
c=[];if(typeof(b.pageName)!='undefined'&&b.pageName!=''){for(var i=0;i<b.pageName.split(':').length;i++){c[i]=b.pageName.split(':')[i];}
d=[];d[0]=c[0];for(var i=1;i<x.length;i++){for(var j=0;j<c.length;j++){if(x[i]!=c[j]){d[i]=x[i];}
else{i++;j++;}}}
d.push(c[c.length-1]);nombre_pagina=d[0];for(var i=1;i<d.length;i++){nombre_pagina+=':'+d[i];}
nombre_pagina=nombre_pagina.replace(/::/gi,':').replace(/:undefined:/gi,':');s.channel=nombre_pagina.split(':')[0];if(typeof(nombre_pagina)!='undefined'&&nombre_pagina!=''){for(var i=1;i<nombre_pagina.split(':').length;i++){s['prop'+(i)]=nombre_pagina.split(':')[i];}}
if(typeof(s.prop1)!='undefined'&&s.prop1!=''&&b.pageName.toLowerCase()!='search:results'&&typeof(nombre_pagina)!='undefined'&&nombre_pagina!=''){s.prop1=s.channel+':'+s.prop1;for(var i=2;i<11&&nombre_pagina.split(':').length>2&&i<nombre_pagina.split(':').length;i++){if(typeof(s['prop'+(i)])!='undefined'&&s['prop'+(i)]!=''){s['prop'+(i)]=s['prop'+(i-1)]+':'+nombre_pagina.split(':')[i];}}}
if(typeof(b.BTScontent)!='undefined'&&b.BTScontent!=''){s.eVar11=b.BTScontent;s.prop11='D=v11';s.prop12='D=v11';s.eVar12='D=v11';s.prop13=nombre_pagina+':'+b.BTScontent;}
else{s.prop13=nombre_pagina;}
s.eVar13='D=c13';s.pageName=nombre_pagina;}}
else if(typeof(b.pageName)!='undefined'&&b.pageName!=''&&b.pageName.search(/Industries - /i)!=-1){nombre_pagina=b.pageName.replace(' - ',':');s.pageName=nombre_pagina;for(var i=1;i<nombre_pagina.split(':').length;i++){s['prop'+(i)]=nombre_pagina.split(':')[i];}
s.prop1=s.channel+':'+s.prop1;for(var i=2;i<11&&nombre_pagina.split(':').length>2&&i<nombre_pagina.split(':').length;i++){if(typeof(s['prop'+(i)])!='undefined'&&s['prop'+(i)]!=''){s['prop'+(i)]=s['prop'+(i-1)]+':'+nombre_pagina.split(':')[i];}}}
if(typeof(b.BTScontent)!='undefined'&&b.BTScontent!=''&&typeof(b.pageName)!='undefined'&&b.pageName!=''&&typeof(s.pageName)!='undefined'&&s.pageName!=''&&(typeof(s.prop13)=='undefined'||s.prop13=='')){s.eVar11=b.BTScontent;s.prop11='D=v11';s.prop12='D=v11';s.eVar12='D=v11';s.prop13=s.pageName+':'+b.BTScontent;}
else{s.prop13=s.pageName;}
if(typeof(b.productName)!='undefined'&&b.productName!=''&&typeof(b.productNameLocalLang)!='undefined'&&b.productNameLocalLang!=''&&typeof(b.products)!='undefined'&&b.products!=''){if(typeof(jQuery('.tabs.group ul li.on a'))!='undefined'&&jQuery.trim(jQuery('.tabs.group ul li.on a').text())!=''){s.eVar41=jQuery.trim(jQuery('.tabs.group ul li.on a').text());s.events=s.apl(s.events,"event8",",",1);}
s.events=s.apl(s.events,"prodView",",",1);var a=b.products.split(';');s.products=a[0];for(var i=1;i<a.length-1;i++){s.products+='|'+a[i];}
s.products+=';'+a[a.length-1];s.eVar31=b.productName;s.eVar32=b.productNameLocalLang;if(typeof(jQuery)!='undefined'&&typeof(b.pageName)!='undefined'&&b.pageName!=''&&typeof(jQuery('.tabs.group ul li.on a'))!='undefined'&&jQuery('.tabs.group ul li.on a').text()!=''){s.pageName=b.pageName
if((typeof(s['prop'+(s.pageName.split(':').length-1)])=='undefined'||s['prop'+(s.pageName.split(':').length-1)]==''||s['prop'+(s.pageName.split(':').length-1)]!=s.pageName)&&s.pageName.split(':').length-1<11){s['prop'+(s.pageName.split(':').length-1)]=s.pageName;}
if(typeof(b.BTScontent)!='undefined'&&b.BTScontent!=''){s.eVar11=b.BTScontent;s.prop11='D=v11';s.prop12='D=v11';s.eVar12='D=v11';s.prop13=s.pageName+':'+b.BTScontent;}
else{s.prop13=s.pageName;}
s.eVar13='D=c13';}}
if(!s.eVar49){s.eVar49=s.getQueryParam("int");s.eVar49=s.getValOnce(s.eVar49,'s_var_49',0);}
if(typeof(b.site)!='undefined'&&b.site!=''){s.prop14=b.site;s.eVar14='D=c14';}
if(typeof(b.language)!='undefined'&&b.language!=''){s.prop15=b.language;s.eVar15='D=c15';}
s.prop27=document.location.href;s.eVar5='D=c27';s.prop28=document.referrer;s.eVar6='D=c28';s.events=s.apl(s.events,"event36",",",1);s.prop29=s.getNewRepeat();s.eVar7=s.prop29;if(typeof(s.prop18)!='undefined'&&s.prop18!=''){s.eVar18='D=c18';}
if(typeof(s.prop19)!='undefined'&&s.prop19!=''){s.eVar19='D=c19';}
if(typeof(b.visitorType)!='undefined'&&b.visitorType!=''){s.prop20=b.visitorType;s.eVar20='D=c20';}
if(typeof(s.prop25)!='undefined'&&s.prop25!=''){s.eVar25='D=c25';}
if(typeof(s.prop26)!='undefined'&&s.prop26!=''){s.eVar26='D=c26';}
var fecha=new Date();dias=new Array("Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sabado");s.prop30=dias[fecha.getDay()];s.eVar8=s.prop30;var h=fecha.getHours();if(h<10)h='0'+h;var m=fecha.getMinutes();if(m<10)m='0'+m;s.prop31=h;s.eVar9=s.prop31;s.prop32=h+":"+m;s.eVar10=s.prop32;if(typeof(alreadyrun)=='undefined'){s.setupFormAnalysis();s.getTrafficSource();alreadyrun=true;}
if(typeof(b.pageName)!='undefined'&&b.pageName!=''&&b.pageName.toLowerCase()=='search:results'){if(typeof(b.keyword)!='undefined'&&b.keyword!=''){s.prop16=b.keyword;s.eVar16='D=c16';}
if(typeof(b.numResults)!='undefined'&&b.numResults!=''){s.prop17=b.numResults;s.eVar17='D=c17';}
if(typeof(b.filters)!='undefined'&&b.filters!=''){s.prop22=b.filters;s.eVar22='D=c22';}
s.events=s.apl(s.events,"event1",",",1);s.prop1=s.pageName;}
if(!s.fa){formularios_inicializados=false;}
else{formularios_inicializados=true;}
s.setupFormAnalysis();if(!formularios_inicializados){s.faol();}
if(document.location.href.indexOf('web/amadeus/en_1A-corporate/Airlines/For-the-numbers-that-really-count/1319627079895-Page-AMAD_SolutionDetailPpal?industrySegment=1259068355670')!=-1){s.channel="Airlines";var pageName_aux=document.location.pathname.split('/');pageName_aux=pageName_aux[pageName_aux.indexOf('Airlines')+1];pageName_aux=':'+pageName_aux.replace(/\-/g,' ');s.prop1=s.prop13=s.pageName=s.channel+pageName_aux;s.prop25=s.getQueryParam('industrySegment');s.eVar25='D=c25';s.eVar29='Airlines';}
if(typeof(s.pageName)=='undefined'||s.pageName==''||((document.location.pathname.toLowerCase().indexOf('share-this-article')>-1||document.location.pathname.toLowerCase().indexOf('ground-handlers')>-1)&&document.location.href.toLowerCase().search('^(.*newsletter+[a-zA-Z]*ppal).*')!=-1)||(document.location.href.toLowerCase().indexOf('category=')>-1&&document.location.href.toLowerCase().indexOf('/newsroom/archive/')>-1)||(document.domain=='www.learn.amadeus.com')){nombradoAuxiliar();}
if(document.location.pathname.indexOf('de_DE-DE')>-1&&s.pageName.indexOf('Industries:Reisebüros')>-1&&(s.pageName.indexOf(' Travel Reisebüros')>-1||s.pageName.indexOf('Leisure Travel Reisebüros')>-1)&&s.pageName.split(':').length>3){if(typeof(b.pageName)!='undefined'&&b.pageName!=''){s.pageName=b.pageName;s.pageName=s.pageName.replace(/::/gi,':').replace(/:undefined:/gi,':');}
var pageName_aux=s.pageName.split(':');pageName_aux.splice(pageName_aux.indexOf('Reisebüros'),1);var level3_actual=pageName_aux[2];pageName_aux[2]=pageName_aux[1];pageName_aux[1]=level3_actual;s.pageName=pageName_aux.join(':');for(var i=0;i<s.pageName.split(':').length;i++){if(i==0){s['prop'+(i+1)]=s.pageName.split(':')[i];}else{s['prop'+(i+1)]=s['prop'+(i)]+':'+s.pageName.split(':')[i];}}
s.prop13=(typeof(b.BTScontent)!='undefined'&&b.BTScontent!='')?s.pageName+':'+b.BTScontent:s.pageName;}
s.eVar1='D=pageName';s.hier1='D=pageName';s.eVar43=s.prop43=s_getLoadTime();if(s_getLoadTime())s.events=s.apl(s.events,'event43='+s_getLoadTime(),',',1);}
else if(document.location.pathname.search(/^\/site\/(overload|maintenance)\.html$/i)!=-1){s.pageName=s.prop1=s.prop2=s.channel=s.hier1='';s.prop27=document.location.href;s.eVar5='D=c27';s.prop28=document.referrer;s.eVar6='D=c28';s.events=s.apl(s.events,"event36",",",1);s.eVar43=s.prop43=s_getLoadTime();s.pageName=document.location.pathname.split('.')[0].split('/')[1]+":"+document.location.pathname.split('.')[0].split('/')[2]
s.channel=document.location.pathname.split('.')[0].split('/')[1];s.prop29=s.getNewRepeat();s.eVar7=s.prop29;var fecha=new Date();dias=new Array("Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sabado");s.prop30=dias[fecha.getDay()];s.eVar8=s.prop30;var h=fecha.getHours();if(h<10)h='0'+h;var m=fecha.getMinutes();if(m<10)m='0'+m;s.prop31=h;s.eVar9=s.prop31;s.prop32=h+":"+m;s.eVar10=s.prop32;s.eVar43=s.prop43=s_getLoadTime();if(s_getLoadTime())s.events=s.apl(s.events,'event43='+s_getLoadTime(),',',1);s.eVar1='D=pageName';s.prop1=s.channel;s.hier1='D=pageName';}}
s.doPlugins=s_doPlugins},function(a,b){if(typeof jQuery!='undefined'){window.omnitureScript=function(){var s=s_gi(s_account);s.linkTrackVars='prop21,eVar38,events';s.linkTrackEvents='event2';s.prop21=s.pageName+":Lead:Contact Us Page";s.eVar38="D=c21";s.events='event2';if(s.prop25!=''){s.linkTrackVars+=',eVar25,prop25';if(s.eVar29!=''){s.linkTrackVars+=',eVar29';}}
if(s.prop14!=''){s.linkTrackVars+=',eVar14,prop14';}
if(s.prop15!=''){s.linkTrackVars+=',eVar15,prop15';}
if(s.prop48!=''){s.linkTrackVars+=',eVar48,prop48';}
s.tl(this,'o','Lead:Contact Us Page');}
jQuery('.btn[href*="assettype=Contact_C"], .omnitureInternalPromotion[href*="assettype=Contact_C"]').click(function(){if(typeof(jQuery(this).attr('onclick'))=='undefined'||(jQuery(this).attr('onclick').search(/omnitureScript()/i)==-1&&jQuery(this).attr('onclick').search(/TrackContact()/i)==-1)){var s=s_gi(s_account);s.linkTrackVars='prop21,eVar38,events';s.linkTrackEvents='event2';s.prop21=s.pageName+":Lead:Contact Us Page";s.eVar38="D=c21";s.events='event2';if(s.prop25!=''){s.linkTrackVars+=',eVar25,prop25';if(s.eVar29!=''){s.linkTrackVars+=',eVar29';}}
if(s.prop14!=''){s.linkTrackVars+=',eVar14,prop14';}
if(s.prop15!=''){s.linkTrackVars+=',eVar15,prop15';}
if(s.prop48!=''){s.linkTrackVars+=',eVar48,prop48';}
s.tl(this,'o','Lead:Contact Us Page');}});window.TrackContact=function(){if(document.location.pathname.indexOf('/amadeus/en_1A-corporate/Railways/Our-portfolio/Connect/To-corporations/1319560218445-Page-AMAD_PortFolioGroupingPpal')==-1){var s=s_gi(s_account);s.linkTrackVars='prop21,eVar38,events';s.linkTrackEvents='event2';s.prop21=s.pageName+":Lead:Contact"
s.eVar38="D=c21";s.events='event2';if(s.prop25!=''){s.linkTrackVars+=',eVar25,prop25';if(s.eVar29!=''){s.linkTrackVars+=',eVar29';}}
if(s.prop14!=''){s.linkTrackVars+=',eVar14,prop14';}
if(s.prop15!=''){s.linkTrackVars+=',eVar15,prop15';}
if(s.prop48!=''){s.linkTrackVars+=',eVar48,prop48';}
s.tl(this,'o','Lead:Contact');}}
if(document.location.pathname.toLowerCase().indexOf('share-this-article')>-1&&document.location.href.toLowerCase().search('^(.*newsletter+[a-zA-Z]*ppal).*')!=-1){jQuery('[class*="Follow"]:not([href*="Share"]):not([href*="share"])').click(function(){var socialNetwork=jQuery(this).text();var s=s_gi(s_account);s.linkTrackVars='prop23,eVar23,events';s.linkTrackEvents='event47';s.events='event47';s.linkTrackVars='prop23,eVar23';s.prop23=socialNetwork;s.eVar23='D=c23';if(s.prop25!=''){s.linkTrackVars+=',eVar25,prop25';if(s.eVar29!=''){s.linkTrackVars+=',eVar29';}}
if(s.prop14!=''){s.linkTrackVars+=',eVar14,prop14';}
if(s.prop15!=''){s.linkTrackVars+=',eVar15,prop15';}
if(s.prop48!=''){s.linkTrackVars+=',eVar48,prop48';}
s.tl(this,'o','Social Media widget:Follow:'+socialNetwork);});jQuery('[class*="Follow"][href*="Share"],[class*="Follow"][href*="share"]').click(function(event){var socialNetwork=jQuery(this).text();var s=s_gi(s_account);s.linkTrackVars='prop23,eVar23,events';s.linkTrackEvents='event45';s.events='event45';s.linkTrackVars='prop23,eVar23';s.prop23=socialNetwork;s.eVar23='D=c23';if(s.prop25!=''){s.linkTrackVars+=',eVar25,prop25';if(s.eVar29!=''){s.linkTrackVars+=',eVar29';}}
if(s.prop14!=''){s.linkTrackVars+=',eVar14,prop14';}
if(s.prop15!=''){s.linkTrackVars+=',eVar15,prop15';}
if(s.prop48!=''){s.linkTrackVars+=',eVar48,prop48';}
s.tl(this,'o','Social Media widget:Share:'+socialNetwork);});}else{jQuery('a[href*="twitter.com/amadeus"], a[href*="twitter.com/Amadeus"], a.twFollow').click(function(){var s=s_gi(s_account);s.linkTrackVars='prop23,eVar23';s.prop23="twitter";s.eVar23="D=c23";if(s.prop25!=''){s.linkTrackVars+=',eVar25,prop25';if(s.eVar29!=''){s.linkTrackVars+=',eVar29';}}
if(s.prop14!=''){s.linkTrackVars+=',eVar14,prop14';}
if(s.prop15!=''){s.linkTrackVars+=',eVar15,prop15';}
if(s.prop48!=''){s.linkTrackVars+=',eVar48,prop48';}
s.tl(this,'o','Social Media widget:Twitter');});jQuery('a[href*="facebook.com/amadeus"],a[href*="facebook.com/Amadeus"], a.fbFollow').click(function(){var s=s_gi(s_account);s.linkTrackVars='prop23,eVar23';s.prop23="facebook";s.eVar23="D=c23";if(s.prop25!=''){s.linkTrackVars+=',eVar25,prop25';if(s.eVar29!=''){s.linkTrackVars+=',eVar29';}}
if(s.prop14!=''){s.linkTrackVars+=',eVar14,prop14';}
if(s.prop15!=''){s.linkTrackVars+=',eVar15,prop15';}
if(s.prop48!=''){s.linkTrackVars+=',eVar48,prop48';}
s.tl(this,'o','Social Media widget:Facebook');});jQuery('a[href*="linkedin.com/company/amadeus"],a[href*="linkedin.com/company/Amadeus"],a.inFollow').click(function(){var s=s_gi(s_account);s.linkTrackVars='prop23,eVar23';s.prop23="linkedin";s.eVar23="D=c23";if(s.prop25!=''){s.linkTrackVars+=',eVar25,prop25';if(s.eVar29!=''){s.linkTrackVars+=',eVar29';}}
if(s.prop14!=''){s.linkTrackVars+=',eVar14,prop14';}
if(s.prop15!=''){s.linkTrackVars+=',eVar15,prop15';}
if(s.prop48!=''){s.linkTrackVars+=',eVar48,prop48';}
s.tl(this,'o','Social Media widget:Linkedin');});jQuery('a[href*="youtube.com/amadeus"],a[href*="youtube.com/Amadeus"]').click(function(){var s=s_gi(s_account);s.linkTrackVars='prop23,eVar23';s.prop23="youtube";s.eVar23="D=c23";if(s.prop25!=''){s.linkTrackVars+=',eVar25,prop25';if(s.eVar29!=''){s.linkTrackVars+=',eVar29';}}
if(s.prop14!=''){s.linkTrackVars+=',eVar14,prop14';}
if(s.prop15!=''){s.linkTrackVars+=',eVar15,prop15';}
if(s.prop48!=''){s.linkTrackVars+=',eVar48,prop48';}
s.tl(this,'o','Social Media widget:Youtube');});jQuery('a[href*="plus.google.com/u/"],a.gglFollow').click(function(){var s=s_gi(s_account);s.linkTrackVars='prop23,eVar23';s.prop23="google+";s.eVar23="D=c23";if(s.prop25!=''){s.linkTrackVars+=',eVar25,prop25';if(s.eVar29!=''){s.linkTrackVars+=',eVar29';}}
if(s.prop14!=''){s.linkTrackVars+=',eVar14,prop14';}
if(s.prop15!=''){s.linkTrackVars+=',eVar15,prop15';}
if(s.prop48!=''){s.linkTrackVars+=',eVar48,prop48';}
s.tl(this,'o','Social Media widget:Google+');});jQuery('a[href*="pinterest.com/amadeusitgroup"],a.pinFollow').click(function(){var s=s_gi(s_account);s.linkTrackVars='prop23,eVar23';s.prop23="pinterest";s.eVar23="D=c23";if(s.prop25!=''){s.linkTrackVars+=',eVar25,prop25';if(s.eVar29!=''){s.linkTrackVars+=',eVar29';}}
if(s.prop14!=''){s.linkTrackVars+=',eVar14,prop14';}
if(s.prop15!=''){s.linkTrackVars+=',eVar15,prop15';}
if(s.prop48!=''){s.linkTrackVars+=',eVar48,prop48';}
s.tl(this,'o','Social Media widget:Pinterest');});jQuery(document).on('click','.social .addthis_sharing_toolbox a span svg',function(){var socialNetwork=jQuery(this).attr('title');var s=s_gi(s_account);s.linkTrackVars='prop23,eVar23,events';s.linkTrackEvents='event45';s.events='event45';s.prop23=socialNetwork.toLowerCase();s.eVar23='D=c23';if(s.prop25!=''){s.linkTrackVars+=',eVar25,prop25';if(s.eVar29!=''){s.linkTrackVars+=',eVar29';}}
if(s.prop14!=''){s.linkTrackVars+=',eVar14,prop14';}
if(s.prop15!=''){s.linkTrackVars+=',eVar15,prop15';}
if(s.prop48!=''){s.linkTrackVars+=',eVar48,prop48';}
s.tl(this,'o','Social Media widget:Share:'+socialNetwork);});}
jQuery('a[href*="investor.amadeus.com"],a[href*="investors.amadeus.com"]').click(function(){var s=s_gi(s_account);s.linkTrackVars='prop24,eVar24';s.prop24='investor.amadeus.com';s.eVar24='D=c24';if(s.prop25!=''){s.linkTrackVars+=',eVar25,prop25';if(s.eVar29!=''){s.linkTrackVars+=',eVar29';}}
if(s.prop14!=''){s.linkTrackVars+=',eVar14,prop14';}
if(s.prop15!=''){s.linkTrackVars+=',eVar15,prop15';}
if(s.prop48!=''){s.linkTrackVars+=',eVar48,prop48';}
s.tl(this,'o','Investor relations widget:Investor Amadeus')});jQuery('img[alt*="Print"], img[alt*="print"]').click(function(){var s=s_gi(s_account);s.linkTrackVars='events'
s.linkTrackEvents="event5";s.events="event5";if(s.prop25!=''){s.linkTrackVars+=',eVar25,prop25';if(s.eVar29!=''){s.linkTrackVars+=',eVar29';}}
if(s.prop14!=''){s.linkTrackVars+=',eVar14,prop14';}
if(s.prop15!=''){s.linkTrackVars+=',eVar15,prop15';}
if(s.prop48!=''){s.linkTrackVars+=',eVar48,prop48';}
s.tl(this,'o','Print button')});jQuery('a[href*="mailto"]').click(function(){var s=s_gi(s_account);s.linkTrackVars='events'
s.linkTrackEvents="event6";s.events="event6";if(s.prop25!=''){s.linkTrackVars+=',eVar25,prop25';if(s.eVar29!=''){s.linkTrackVars+=',eVar29';}}
if(s.prop14!=''){s.linkTrackVars+=',eVar14,prop14';}
if(s.prop15!=''){s.linkTrackVars+=',eVar15,prop15';}
if(s.prop48!=''){s.linkTrackVars+=',eVar48,prop48';}
s.tl(this,'o','Mail button')});jQuery('#enlaceSeteo a[href*="grabarEnSesion"]').click(function(){var s=s_gi(s_account);s.linkTrackVars='events'
s.linkTrackEvents="event7";s.events="event7";if(s.prop25!=''){s.linkTrackVars+=',eVar25,prop25';if(s.eVar29!=''){s.linkTrackVars+=',eVar29';}}
if(s.prop14!=''){s.linkTrackVars+=',eVar14,prop14';}
if(s.prop15!=''){s.linkTrackVars+=',eVar15,prop15';}
if(s.prop48!=''){s.linkTrackVars+=',eVar48,prop48';}
s.tl(this,'o','Make default button')});jQuery("a, li").click(function(e){var fileName='';if(typeof(jQuery(this).attr("filetitle"))!='undefined'){fileName=jQuery(this).attr("filetitle");}else if(typeof(jQuery(this).find('a').attr("filetitle"))!='undefined'){fileName=jQuery(this).find('a').attr("filetitle");}else if(jQuery(this).find('a').text()!=''){fileName=jQuery(this).find('a').text();}else if(typeof(jQuery(this).find('img').attr('alt'))!='undefined'){fileName=jQuery(this).find('img').attr('alt');}else if(jQuery(this).text()!=''){fileName=jQuery(this).text();}else if(typeof(jQuery(this).find('img').attr('src').split('/')[jQuery(this).find('img').attr('src').split('/').length-1].replace(/-/gi,' ').split('.')[0])!='undefined'){fileName='Amadeus'+jQuery(this).find('img').attr('src').split('/')[jQuery(this).find('img').attr('src').split('/').length-1].replace(/-/gi,' ').split('.')[0];}
fileName=fileName.trim();if((jQuery(this).hasClass("omnitureDocument")||jQuery(this).hasClass("omnitureDownload"))&&fileName!=''){var s=s_gi(s_account);s.linkTrackVars="prop14,prop15,prop33,prop34,eVar14,eVar15,eVar33,eVar34,events";s.linkTrackEvents="event37";s.prop33=s.pageName;s.eVar33="D=c33";s.eVar34=fileName;s.prop34="D=v34";s.prop14=(typeof(document.location.pathname.split('/')[3])!='undefined'&&typeof(document.location.pathname.split('/')[3].split('-')[1])!='undefined')?document.location.pathname.split('/')[3].split('-')[1]:'';s.eVar14="D=c14";s.prop15=(typeof(document.location.pathname.split('/')[3])!='undefined')?document.location.pathname.split('/')[3].split('-')[0]:'';s.eVar15="D=c15";s.events="event37";if(s.prop25!=''){s.linkTrackVars+=',eVar25,prop25';if(s.eVar29!=''){s.linkTrackVars+=',eVar29';}}
if(s.prop14!=''){s.linkTrackVars+=',eVar14,prop14';}
if(s.prop15!=''){s.linkTrackVars+=',eVar15,prop15';}
if(s.prop48!=''){s.linkTrackVars+=',eVar48,prop48';}
s.tl(this,'d','Download');e.stopPropagation();}
else if(jQuery(this).hasClass("omnitureDemo")&&fileName!=''){var s=s_gi(s_account);s.linkTrackVars="prop14,prop15,prop33,prop36,eVar14,eVar15,eVar33,eVar36,events";s.linkTrackEvents="event38";s.prop33=s.pageName;s.eVar33="D=c33";s.prop36=fileName;s.eVar36="D=c36";s.prop14=(typeof(document.location.pathname.split('/')[3])!='undefined'&&typeof(document.location.pathname.split('/')[3].split('-')[1])!='undefined')?document.location.pathname.split('/')[3].split('-')[1]:'';s.eVar14="D=c14";s.prop15=(typeof(document.location.pathname.split('/')[3])!='undefined')?document.location.pathname.split('/')[3].split('-')[0]:'';s.eVar15="D=c15";s.events="event38";if(s.prop25!=''){s.linkTrackVars+=',eVar25,prop25';if(s.eVar29!=''){s.linkTrackVars+=',eVar29';}}
if(s.prop14!=''){s.linkTrackVars+=',eVar14,prop14';}
if(s.prop15!=''){s.linkTrackVars+=',eVar15,prop15';}
if(s.prop48!=''){s.linkTrackVars+=',eVar48,prop48';}
s.tl(this,'o','Demos');e.stopPropagation();}
else if(jQuery(this).hasClass("omnitureScreenshot")&&fileName!=''){if(typeof(jQuery(this).attr('filetitle'))!='undefined'&&jQuery(this).attr('filetitle').indexOf('Future Treveller Tribes 2030')==-1){var s=s_gi(s_account);s.linkTrackVars="prop33,prop35,eVar33,eVar35,events";s.linkTrackEvents="event39";s.prop33=s.pageName;s.eVar33="D=c33";s.prop35=fileName;s.eVar35="D=c35";s.events="event39";if(s.prop25!=''){s.linkTrackVars+=',eVar25,prop25';if(s.eVar29!=''){s.linkTrackVars+=',eVar29';}}
if(s.prop14!=''){s.linkTrackVars+=',eVar14,prop14';}
if(s.prop15!=''){s.linkTrackVars+=',eVar15,prop15';}
if(s.prop48!=''){s.linkTrackVars+=',eVar48,prop48';}
s.tl(this,'o','Screenshot');e.stopPropagation();};}
else if(jQuery(this).hasClass("omnitureLink")&&fileName!=''){var s=s_gi(s_account);s.linkTrackVars="prop14,prop15,prop33,prop36,eVar14,eVar15,eVar33,eVar36,events";s.linkTrackEvents="event55";s.prop33=s.pageName;s.eVar33="D=c33";s.prop36=fileName;s.eVar36="D=c36";s.prop14=(typeof(document.location.pathname.split('/')[3])!='undefined'&&typeof(document.location.pathname.split('/')[3].split('-')[1])!='undefined')?document.location.pathname.split('/')[3].split('-')[1]:'';s.eVar14="D=c14";s.prop15=(typeof(document.location.pathname.split('/')[3])!='undefined')?document.location.pathname.split('/')[3].split('-')[0]:'';s.eVar15="D=c15";s.events="event55";if(s.prop25!=''){s.linkTrackVars+=',eVar25,prop25';if(s.eVar29!=''){s.linkTrackVars+=',eVar29';}}
if(s.prop14!=''){s.linkTrackVars+=',eVar14,prop14';}
if(s.prop15!=''){s.linkTrackVars+=',eVar15,prop15';}
if(s.prop48!=''){s.linkTrackVars+=',eVar48,prop48';}
s.tl(this,'o','Links');e.stopPropagation();}
else if(jQuery(this).hasClass("omnitureEmbed")&&fileName!=''){var s=s_gi(s_account);s.linkTrackVars="prop14,prop15,prop33,prop36,eVar14,eVar15,eVar33,eVar36,events";s.linkTrackEvents="event56";s.prop33=s.pageName;s.eVar33="D=c33";s.prop36=fileName;s.eVar36="D=c36";s.prop14=(typeof(document.location.pathname.split('/')[3])!='undefined'&&typeof(document.location.pathname.split('/')[3].split('-')[1])!='undefined')?document.location.pathname.split('/')[3].split('-')[1]:'';s.eVar14="D=c14";s.prop15=(typeof(document.location.pathname.split('/')[3])!='undefined')?document.location.pathname.split('/')[3].split('-')[0]:'';s.eVar15="D=c15";s.events="event56";if(s.prop25!=''){s.linkTrackVars+=',eVar25,prop25';if(s.eVar29!=''){s.linkTrackVars+=',eVar29';}}
if(s.prop14!=''){s.linkTrackVars+=',eVar14,prop14';}
if(s.prop15!=''){s.linkTrackVars+=',eVar15,prop15';}
if(s.prop48!=''){s.linkTrackVars+=',eVar48,prop48';}
s.tl(this,'o','Embed Code');e.stopPropagation();}
else if((jQuery(this).hasClass("omnitureInternalPromotion")||jQuery(this).find('a').hasClass("omnitureInternalPromotion"))&&document.location.pathname.toLowerCase().indexOf('/newsroom/')==-1){if((typeof(jQuery(this).attr('href'))!='undefined'&&jQuery(this).attr('href').search(/assettype=Contact_C/i)==-1&&jQuery(this).text().search(/Give us/i)==-1)||(typeof(jQuery(this).find('a').attr('href'))!='undefined'&&jQuery(this).find('a').text().search(/Give us/i)==-1)){if(!jQuery(this).hasClass('more')){var stl_extraText='';if(document.location.pathname.toLowerCase().indexOf('/newsroom/')>-1){stl_extraText='Newsroom:';}
var s=s_gi(s_account);s.linkTrackVars="prop14,prop15,prop33,prop37,eVar14,eVar15,eVar33,eVar37,events";s.linkTrackEvents="event40";s.prop33=s.pageName;s.eVar33="D=c33";s.prop37=jQuery.trim(jQuery(this).parent().children('h3').text())||jQuery.trim(jQuery(this).attr('title'))||jQuery.trim(jQuery(this).attr('alt'))||jQuery.trim(jQuery(this).attr('filetitle'))||fileName||jQuery(this).children().children("h2").text().trim()||jQuery(this).siblings(".content.group").children("h3").text()||jQuery(this).text();s.eVar37="D=c37";s.prop14=(typeof(document.location.pathname.split('/')[3])!='undefined'&&typeof(document.location.pathname.split('/')[3].split('-')[1])!='undefined')?document.location.pathname.split('/')[3].split('-')[1]:'';s.eVar14="D=c14";s.prop15=(typeof(document.location.pathname.split('/')[3])!='undefined')?document.location.pathname.split('/')[3].split('-')[0]:'';s.eVar15="D=c15";s.events="event40";if(s.prop25!=''){s.linkTrackVars+=',eVar25,prop25';if(s.eVar29!=''){s.linkTrackVars+=',eVar29';}}
if(s.prop14!=''){s.linkTrackVars+=',eVar14,prop14';}
if(s.prop15!=''){s.linkTrackVars+=',eVar15,prop15';}
if(s.prop48!=''){s.linkTrackVars+=',eVar48,prop48';}
s.tl(this,'o',stl_extraText+'Internal Promotions');e.stopPropagation();}}else if(jQuery(this).text().search(/Give us/i)!=-1||jQuery(this).find('a').text().search(/Give us/i)!=-1){var s=s_gi(s_account);s.linkTrackVars='prop21,eVar38,events';s.linkTrackEvents='event2';s.prop21=s.pageName+":Lead:Give Us Page";s.eVar38="D=c21";s.events='event2';if(s.prop25!=''){s.linkTrackVars+=',eVar25,prop25';if(s.eVar29!=''){s.linkTrackVars+=',eVar29';}}
if(s.prop14!=''){s.linkTrackVars+=',eVar14,prop14';}
if(s.prop15!=''){s.linkTrackVars+=',eVar15,prop15';}
if(s.prop48!=''){s.linkTrackVars+=',eVar48,prop48';}
s.tl(this,'o','Lead:Give Us Page');e.stopPropagation();}}});$('#travel-intelligence_diagram').click(function(evt){var s=s_gi(s_account);s.linkTrackVars='prop37,events';s.linkTrackEvents='event40';nombre=document.location.pathname.split('/')[6].replace(/-/g,"");s.prop37=s.eVar37=nombre+':Amadeus Travel Intelligenence & Personalisation System';s.events='event40';if(s.prop25!=''){s.linkTrackVars+=',eVar25,prop25';if(s.eVar29!=''){s.linkTrackVars+=',eVar29';}}
if(s.prop14!=''){s.linkTrackVars+=',eVar14,prop14';}
if(s.prop15!=''){s.linkTrackVars+=',eVar15,prop15';}
if(s.prop48!=''){s.linkTrackVars+=',eVar48,prop48';}
s.tl(this,'o','Click - Amadeus Travel Intelligenence & Personalisation System');s.prop37=s.eVar37=s.events='';});if(document.location.pathname.indexOf('Amadeus-Home')>-1){jQuery('#slider-3d-placeholder').on("click",function(ev){if($(ev.target).parent().parent().find('p').length>0){var stl_extraText='';if(document.location.pathname.toLowerCase().indexOf('/newsroom/')>-1){stl_extraText='Newsroom:';}
var s=s_gi(s_account);s.linkTrackVars="prop14,prop15,prop33,prop37,eVar14,eVar15,eVar33,eVar37,events";s.linkTrackEvents="event40";s.prop33=s.pageName;s.eVar33="D=c33";s.prop37=jQuery(this).find('p').text();s.eVar37="D=c37";s.prop14=(typeof(document.location.pathname.split('/')[3])!='undefined'&&typeof(document.location.pathname.split('/')[3].split('-')[1])!='undefined')?document.location.pathname.split('/')[3].split('-')[1]:'';s.eVar14="D=c14";s.prop15=(typeof(document.location.pathname.split('/')[3])!='undefined')?document.location.pathname.split('/')[3].split('-')[0]:'';s.eVar15="D=c15";s.events="event40";if(s.prop25!=''){s.linkTrackVars+=',eVar25,prop25';if(s.eVar29!=''){s.linkTrackVars+=',eVar29';}}
if(s.prop48!=''){s.linkTrackVars+=',eVar48,prop48';}
s.tl(this,'o',stl_extraText+'Internal Promotions');}});jQuery(document).on('click','a[filetitle*="Future Traveller Tribes 2030"][class*="omnitureInternalPromotion omnitureScreenshot"]',function(e){var s=s_gi(s_account);s.linkTrackVars="prop14,prop15,prop33,prop34,eVar14,eVar15,eVar33,eVar34,events";s.linkTrackEvents="event37";s.prop33=s.pageName;s.eVar33="D=c33";s.eVar34='Six new traveller personalities – Infographic';s.prop34="D=v34";s.prop14=(typeof(document.location.pathname.split('/')[3])!='undefined'&&typeof(document.location.pathname.split('/')[3].split('-')[1])!='undefined')?document.location.pathname.split('/')[3].split('-')[1]:'';s.eVar14="D=c14";s.prop15=(typeof(document.location.pathname.split('/')[3])!='undefined')?document.location.pathname.split('/')[3].split('-')[0]:'';s.eVar15="D=c15";s.events="event37";s.tl(this,'d','Download');if(s.prop25!=''){s.linkTrackVars+=',eVar25,prop25';if(s.eVar29!=''){s.linkTrackVars+=',eVar29';}}
if(s.prop48!=''){s.linkTrackVars+=',eVar48,prop48';}
s.events=s.eVar15=s.prop15=s.eVar14=s.prop14=s.eVar34=s.prop34=s.eVar33=s.prop33=s.linkTrackEvents=s.linkTrackVars='';e.stopPropagation();});}
jQuery('.careers-boxes a[href*=".pdf"],.careers-boxes a[href*=".png"]').click(function(e){var s=s_gi(s_account);s.linkTrackVars="prop14,prop15,prop33,prop34,eVar14,eVar15,eVar33,eVar34,events";s.linkTrackEvents="event37";s.prop33=s.pageName;s.eVar33="D=c33";var fileName='';for(var i=0;i<jQuery(this).attr('href').split('/').length;i++){if(jQuery(this).attr('href').split('/')[i].indexOf('.pdf')||jQuery(this).attr('href').split('/')[i].indexOf('.png')){fileName=jQuery(this).attr('href').split('/')[i].replace(/-/g,' ');}}
s.eVar34=fileName;s.prop34="D=v34";s.prop14=(typeof(document.location.pathname.split('/')[3])!='undefined'&&typeof(document.location.pathname.split('/')[3].split('-')[1])!='undefined')?document.location.pathname.split('/')[3].split('-')[1]:'';s.eVar14="D=c14";s.prop15=(typeof(document.location.pathname.split('/')[3])!='undefined')?document.location.pathname.split('/')[3].split('-')[0]:'';s.eVar15="D=c15";s.events="event37";if(s.prop25!=''){s.linkTrackVars+=',eVar25,prop25';if(s.eVar29!=''){s.linkTrackVars+=',eVar29';}}
if(s.prop48!=''){s.linkTrackVars+=',eVar48,prop48';}
s.tl(this,'d','Download');e.stopPropagation();});jQuery('a.omnitureInternalPromotion.more').click(function(e){if((typeof(jQuery(this).attr('href'))!='undefined'&&jQuery(this).attr('href').search(/assettype=Contact_C/i)==-1&&jQuery(this).text().search(/Give us/i)==-1)||(typeof(jQuery(this).find('a').attr('href'))!='undefined'&&jQuery(this).find('a').attr('href').search(/assettype=Contact_C/i)==-1&&jQuery(this).find('a').text().search(/Give us/i)==-1)){var stl_extraText='';if(document.location.pathname.toLowerCase().indexOf('/newsroom/')>-1){stl_extraText='Newsroom:';}
var s=s_gi(s_account);s.linkTrackVars="prop14,prop15,prop33,prop37,eVar14,eVar15,eVar33,eVar37,events";s.linkTrackEvents="event40";s.prop33=s.pageName;s.eVar33="D=c33";s.prop37=jQuery(this).parent().parent().find('.omnitureInternalPromotion img').attr('alt')||jQuery.trim(jQuery(this).attr('title'))||jQuery(this).parent().parent().find('.omnitureInternalPromotion img').attr('src');s.eVar37="D=c37";s.prop14=(typeof(document.location.pathname.split('/')[3])!='undefined'&&typeof(document.location.pathname.split('/')[3].split('-')[1])!='undefined')?document.location.pathname.split('/')[3].split('-')[1]:'';s.eVar14="D=c14";s.prop15=(typeof(document.location.pathname.split('/')[3])!='undefined')?document.location.pathname.split('/')[3].split('-')[0]:'';s.eVar15="D=c15";s.events="event40";if(s.prop25!=''){s.linkTrackVars+=',eVar25,prop25';if(s.eVar29!=''){s.linkTrackVars+=',eVar29';}}
if(s.prop48!=''){s.linkTrackVars+=',eVar48,prop48';}
s.tl(this,'o',stl_extraText+'Internal Promotions');e.stopPropagation();}});$('#global-retailing-left_diagram').click(function(evt){var s=s_gi(s_account);s.linkTrackVars='prop37,events';s.linkTrackEvents='event40';nombre=document.location.pathname.split('/')[6].replace(/-/g,"");s.prop37=s.eVar37=nombre+':Amadeus Global Retailing & Distribution Systems - Indirect channel (GDS)';s.events='event40';if(s.prop25!=''){s.linkTrackVars+=',eVar25,prop25';if(s.eVar29!=''){s.linkTrackVars+=',eVar29';}}
if(s.prop14!=''){s.linkTrackVars+=',eVar14,prop14';}
if(s.prop15!=''){s.linkTrackVars+=',eVar15,prop15';}
if(s.prop48!=''){s.linkTrackVars+=',eVar48,prop48';}
s.tl(this,'o','Click - Inderect channel (GDS)');s.prop37=s.eVar37=s.events='';});$('#global-retailing-right_diagram').click(function(evt){var s=s_gi(s_account);s.linkTrackVars='prop37,events';s.linkTrackEvents='event40';nombre=document.location.pathname.split('/')[6].replace(/-/g,"");s.prop37=s.eVar37=nombre+':Amadeus Global Retailing & Distribution Systems - Direct Channel';s.events='event40';if(s.prop25!=''){s.linkTrackVars+=',eVar25,prop25';if(s.eVar29!=''){s.linkTrackVars+=',eVar29';}}
if(s.prop14!=''){s.linkTrackVars+=',eVar14,prop14';}
if(s.prop15!=''){s.linkTrackVars+=',eVar15,prop15';}
if(s.prop48!=''){s.linkTrackVars+=',eVar48,prop48';}
s.tl(this,'o','Click - Direct Channel');s.prop37=s.eVar37=s.events='';});$('#global-merchandising_diagram').click(function(evt){var s=s_gi(s_account);s.linkTrackVars='prop37,events';s.linkTrackEvents='event40';nombre=document.location.pathname.split('/')[6].replace(/-/g,"");s.prop37=s.eVar37=nombre+':Amadeus Global Merchandising System';s.events='event40';if(s.prop25!=''){s.linkTrackVars+=',eVar25,prop25';if(s.eVar29!=''){s.linkTrackVars+=',eVar29';}}
if(s.prop14!=''){s.linkTrackVars+=',eVar14,prop14';}
if(s.prop15!=''){s.linkTrackVars+=',eVar15,prop15';}
if(s.prop48!=''){s.linkTrackVars+=',eVar48,prop48';}
s.tl(this,'o','Click - Amadeus Global Merchandising System');s.prop37=s.eVar37=s.events='';});$(".intro div div[style*='float: left']").last().click(function(evt){var s=s_gi(s_account);s.linkTrackVars='prop37,events';s.linkTrackEvents='event40';nombre=document.location.pathname.split('/')[6].replace(/-/g,"");s.prop37=s.eVar37=nombre+':The Amadeus Global Travel Ecosystem';s.events='event40';if(s.prop25!=''){s.linkTrackVars+=',eVar25,prop25';if(s.eVar29!=''){s.linkTrackVars+=',eVar29';}}
if(s.prop14!=''){s.linkTrackVars+=',eVar14,prop14';}
if(s.prop15!=''){s.linkTrackVars+=',eVar15,prop15';}
if(s.prop48!=''){s.linkTrackVars+=',eVar48,prop48';}
s.tl(this,'o','Click - The Amadeus Global Travel Ecosystem');s.prop37=s.eVar37=s.events='';});$(window).scroll(function(){if(typeof(scrollY)!='undefined'&&typeof(document.body.offsetHeight)!='undefined'&&typeof(window.innerHeight)!='undefined'&&scroll_flag==true){if((window.innerHeight+window.scrollY)>=document.body.offsetHeight){var s=s_gi(s_account);s.linkTrackVars='events';s.linkTrackEvents='event50';s.events='event50';if(s.prop25!=''){s.linkTrackVars+=',eVar25,prop25';if(s.eVar29!=''){s.linkTrackVars+=',eVar29';}}
if(s.prop14!=''){s.linkTrackVars+=',eVar14,prop14';}
if(s.prop15!=''){s.linkTrackVars+=',eVar15,prop15';}
if(s.prop48!=''){s.linkTrackVars+=',eVar48,prop48';}
s.tl(this,'o','Scroll down - End of Page');s.events='';scroll_flag=false;}}});jQuery('.tabs.group ul li a').click(function(){if(document.location.pathname.toLowerCase().indexOf('/newsroom/')==-1){var s=s_gi(s_account);s.linkTrackVars='eVar41,events';s.linkTrackEvents='event8';s.eVar41=jQuery.trim(jQuery('.tabs.group ul li.on a').text());s.events='event8';if(s.prop25!=''){s.linkTrackVars+=',eVar25,prop25';if(s.eVar29!=''){s.linkTrackVars+=',eVar29';}}
if(s.prop14!=''){s.linkTrackVars+=',eVar14,prop14';}
if(s.prop15!=''){s.linkTrackVars+=',eVar15,prop15';}
if(s.prop48!=''){s.linkTrackVars+=',eVar48,prop48';}
s.tl(this,'o','Click - Product tab');s.eVar41=s.events='';}});jQuery('.module.pilars-accordion ul li h2, .module.airlines-systems-accordion ul li h2').click(function(){var s=s_gi(s_account);s.linkTrackVars='prop40,eVar40,events';s.linkTrackEvents='event41';s.prop40='Sign Posting:'+jQuery.trim(jQuery(this).text());s.eVar40='D=c40';s.events='event41';if(s.prop25!=''){s.linkTrackVars+=',eVar25,prop25';if(s.eVar29!=''){s.linkTrackVars+=',eVar29';}}
if(s.prop14!=''){s.linkTrackVars+=',eVar14,prop14';}
if(s.prop15!=''){s.linkTrackVars+=',eVar15,prop15';}
if(s.prop48!=''){s.linkTrackVars+=',eVar48,prop48';}
s.tl(this,'o','Click - Sign Posting');s.prop40=s.eVar40=s.events='';});jQuery(".news-and-events .text .jCarouselLite ul li a").click(function(){if(document.location.pathname.toLowerCase().indexOf('/newsroom/')==-1){var stl_extraText='';var s=s_gi(s_account);s.linkTrackVars="prop14,prop15,prop33,prop37,eVar14,eVar15,eVar33,eVar37,events";s.linkTrackEvents="event40";s.prop33=s.pageName;s.eVar33="D=c33";s.prop37="News and events:"+jQuery.trim(jQuery(this).text());s.eVar37="D=c37";s.prop14=(typeof(document.location.pathname.split('/')[3])!='undefined'&&typeof(document.location.pathname.split('/')[3].split('-')[1])!='undefined')?document.location.pathname.split('/')[3].split('-')[1]:'';s.eVar14="D=c14";s.prop15=(typeof(document.location.pathname.split('/')[3])!='undefined')?document.location.pathname.split('/')[3].split('-')[0]:'';s.eVar15="D=c15";s.events="event40";if(s.prop25!=''){s.linkTrackVars+=',eVar25,prop25';if(s.eVar29!=''){s.linkTrackVars+=',eVar29';}}
if(s.prop48!=''){s.linkTrackVars+=',eVar48,prop48';}
s.tl(this,'o',stl_extraText+'Internal Promotions');}});if(document.location.pathname.toLowerCase().indexOf('share-this-article')>-1&&document.location.href.toLowerCase().search('^(.*newsletter+[a-zA-Z]*ppal).*')!=-1){jQuery('.module.get-in-touch .content.corner-bottom-3.group a').click(function(event){var s=s_gi(s_account);s.linkTrackVars='events';s.linkTrackEvents='event2';s.events='event2';if(s.prop25!=''){s.linkTrackVars+=',eVar25,prop25';if(s.eVar29!=''){s.linkTrackVars+=',eVar29';}}
if(s.prop14!=''){s.linkTrackVars+=',eVar14,prop14';}
if(s.prop15!=''){s.linkTrackVars+=',eVar15,prop15';}
if(s.prop48!=''){s.linkTrackVars+=',eVar48,prop48';}
s.tl(this,'o',pageName+':Contact Us');});};if(document.domain=='www.learn.amadeus.com'){jQuery('.media.omnitureDemo').each(function(){if(typeof(jQuery(this).attr('onclick'))!='undefined'){var oldOnClick=jQuery(this).attr('onclick');oldOnClick=oldOnClick.split('javascript:');var timeOut='';if(typeof(oldOnClick[1])!='undefined'){timeOut='setTimeout(function(){'+oldOnClick[1]+'},300)';}
if(timeOut!=''){jQuery(this).attr('onclick','');jQuery(this).attr('onclick',timeOut);}}});jQuery('div.omnitureDemo').click(function(e){var fileName='';if(typeof(jQuery(this).attr("filetitle"))!='undefined'){fileName=jQuery(this).attr("filetitle");}else if(typeof(jQuery(this).find('a').attr("filetitle"))!='undefined'){fileName=jQuery(this).find('a').attr("filetitle");}else if(jQuery(this).find('a').text()!=''){fileName=jQuery(this).find('a').text();}else if(typeof(jQuery(this).find('img').attr('alt'))!='undefined'){fileName=jQuery(this).find('img').attr('alt');}else if(jQuery(this).text()!=''){fileName=jQuery(this).text();}else if(typeof(jQuery(this).find('img').attr('src').split('/')[jQuery(this).find('img').attr('src').split('/').length-1].replace(/-/gi,' ').split('.')[0])!='undefined'){fileName='Amadeus'+jQuery(this).find('img').attr('src').split('/')[jQuery(this).find('img').attr('src').split('/').length-1].replace(/-/gi,' ').split('.')[0];}
fileName=fileName.trim();var s=s_gi(s_account);s.linkTrackVars="prop14,prop15,prop33,prop36,eVar14,eVar15,eVar33,eVar36,events";s.linkTrackEvents="event38";s.prop33=s.pageName;s.eVar33="D=c33";s.prop36=fileName;s.eVar36="D=c36";s.prop14=(typeof(document.location.pathname.split('/')[3])!='undefined'&&typeof(document.location.pathname.split('/')[3].split('-')[1])!='undefined')?document.location.pathname.split('/')[3].split('-')[1]:'';s.eVar14="D=c14";s.prop15=(typeof(document.location.pathname.split('/')[3])!='undefined')?document.location.pathname.split('/')[3].split('-')[0]:'';s.eVar15="D=c15";s.events="event38";if(s.prop25!=''){s.linkTrackVars+=',eVar25,prop25';if(s.eVar29!=''){s.linkTrackVars+=',eVar29';}}
if(s.prop14!=''){s.linkTrackVars+=',eVar14,prop14';}
if(s.prop15!=''){s.linkTrackVars+=',eVar15,prop15';}
if(s.prop48!=''){s.linkTrackVars+=',eVar48,prop48';}
s.tl(this,'o','Demos');e.stopPropagation();});}}},function(a,b){if(typeof(channel)!='undefined'&&typeof(jQuery)!='undefined'){if(channel=='Newsroom'){jQuery(document).ready(function(){if(typeof(pageName)!='undefined'&&(pageName=='Newsroom'||pageName=='Newsroom:Archive')){jQuery(document).on('click','.nr-results-container li[class*="module"] .header a',function(){sessionStorage.setItem('newsroom section',jQuery(this).text());});jQuery(document).on('click','.nr-tags-icon',function(ev){var elemento=$(ev.target);var archiveType=elemento.siblings('a').text();sessionStorage.setItem('newsroom section',archiveType);})
jQuery(document).on('click','.segments li a img',function(ev){var elemento=$(ev.target);var archiveType=elemento.attr('alt');sessionStorage.setItem('newsroom section',archiveType);});}
jQuery(document).on('submit','.nr-search-form.group form',function(){setTimeout(function(){var keyword=jQuery('.nr-searchfield').val();keyword=keyword.toLowerCase();var language=typeof(document.location.pathname.split('/')[3])!='undefined'?document.location.pathname.split('/')[3].split('-')[0]:'';var numResults=jQuery('.num-results').text().split(' ')[0]||jQuery('#resultCount').text().split(' ')[0];var s=s_gi(s_account)
s.linkTrackVars="prop16,prop15,eVar17,prop17,prop33,prop37,eVar16,eVar15,eVar33,eVar37,events";s.linkTrackEvents="event51";s.prop33=s.pageName;s.eVar33="D=c33";s.eVar16=keyword;s.prop16='D=v16';s.prop15=language
s.eVar15="D=c15";s.eVar17=numResults;s.prop17='D=v17';s.events="event51";if(s.prop25!=''){s.linkTrackVars+=',eVar25,prop25';if(s.eVar29!=''){s.linkTrackVars+=',eVar29';}}
if(s.prop14!=''){s.linkTrackVars+=',eVar14,prop14';}
if(s.prop15!=''){s.linkTrackVars+=',eVar15,prop15';}
if(s.prop48!=''){s.linkTrackVars+=',eVar48,prop48';}
s.tl(this,'o','Newsroom Search:'+keyword);},1000);setTimeout(function(){if(jQuery('.nr-search-row2.group.no-results').is(':visible')){var keyword=jQuery('.nr-searchfield').val();keyword=keyword.toLowerCase();var language=typeof(document.location.pathname.split('/')[3])!='undefined'?document.location.pathname.split('/')[3].split('-')[0]:'';var s=s_gi(s_account)
s.linkTrackVars="prop16,prop15,prop33,prop37,eVar16,eVar15,eVar33,eVar37,events";s.linkTrackEvents="event53";s.prop33=s.pageName;s.eVar33="D=c33";s.eVar16=keyword;s.prop16='D=v16';s.prop15=language
s.eVar15="D=c15";s.events="event53";if(s.prop25!=''){s.linkTrackVars+=',eVar25,prop25';if(s.eVar29!=''){s.linkTrackVars+=',eVar29';}}
if(s.prop14!=''){s.linkTrackVars+=',eVar14,prop14';}
if(s.prop15!=''){s.linkTrackVars+=',eVar15,prop15';}
if(s.prop48!=''){s.linkTrackVars+=',eVar48,prop48';}
s.tl(this,'o','Newsroom Search:Zero Results');}},1000);});jQuery(".omnitureExport").click(function(event){var s=s_gi(s_account);s.linkTrackVars="prop13,prop15,eVar13,eVar15,events";s.linkTrackEvents="event54";s.events="event54";if(typeof(jQuery("h1"))!='undefined'&&jQuery("h1").text().indexOf('')!=-1){article=jQuery("h1").text();}
s.tl(this,'o','Export News - '+article);});jQuery(document).on('click','#searchPR',function(){var keyword=jQuery('.nr-searchfield').val();keyword=keyword.toLowerCase();var language=typeof(document.location.pathname.split('/')[3])!='undefined'?document.location.pathname.split('/')[3].split('-')[0]:'';var s=s_gi(s_account)
s.linkTrackVars="prop16,prop15,prop33,prop37,eVar16,eVar15,eVar33,eVar37,events";s.linkTrackEvents="event52";s.prop33=s.pageName;s.eVar33="D=c33";s.eVar16=keyword;s.prop16='D=v16';s.prop15=language
s.eVar15="D=c15";s.events="event52";if(s.prop25!=''){s.linkTrackVars+=',eVar25,prop25';if(s.eVar29!=''){s.linkTrackVars+=',eVar29';}}
if(s.prop14!=''){s.linkTrackVars+=',eVar14,prop14';}
if(s.prop15!=''){s.linkTrackVars+=',eVar15,prop15';}
if(s.prop48!=''){s.linkTrackVars+=',eVar48,prop48';}
s.tl(this,'o','Newsroom Search:Apply Filters');});if(typeof(jQuery("#tags-carousel ul li a[class*='location']"))!='undefined'){jQuery("#tags-carousel ul li a[class*='location']").each(function(e){if(!sessionStorage.hasOwnProperty('location_list')){sessionStorage.setItem('location_list',jQuery(jQuery(this)).text());}else{sessionStorage.setItem('location_list',sessionStorage.getItem('location_list')+","+jQuery(jQuery(this)).text());}});s.list2=sessionStorage.getItem('location_list');sessionStorage.removeItem('location_list');}
if(typeof(jQuery("#segments-carousel ul li a[class*='segment']"))!='undefined'){jQuery("#segments-carousel ul li a[class*='segment']").each(function(e){if(!sessionStorage.hasOwnProperty('segment_list')){sessionStorage.setItem('segment_list',jQuery(this).children().attr('alt'));}else{sessionStorage.setItem('segment_list',sessionStorage.getItem('segment_list')+","+jQuery(jQuery(this)).children().attr('alt'));}});s.list3=sessionStorage.getItem('segment_list');sessionStorage.removeItem('segment_list');}
jQuery(document).on('mouseup','.OmnitureInternalPromotion, .omnitureInternalPromotion',function(e){var elemento=jQuery(e.target);if(e.target.tagName=='IMG'){elemento=elemento.parents('a:first');}
var fileName='';if(typeof(elemento.attr("filetitle"))!='undefined'){fileName=elemento.attr("filetitle");}else if(typeof(elemento.find('a').attr("filetitle"))!='undefined'){fileName=elemento.find('a').attr("filetitle");}else if(elemento.find('a').text()!=''){fileName=elemento.find('a').text();}else if(elemento.text()!=''){fileName=elemento.text();}else if(typeof(elemento.find('img').attr('alt'))!='undefined'){fileName=elemento.find('img').attr('alt');}else if(typeof(elemento.find('img').attr('title'))!='undefined'){fileName=elemento.find('img').attr('title');}else if(elemento.parents('.module').find('h3 a[class*="mnitureInternalPromotion"]').length>0){fileName=elemento.parents('.module').find('h3 a[class*="mnitureInternalPromotion"]').text();}else if(typeof(elemento.find('img').attr('src').split('/')[elemento.find('img').attr('src').split('/').length-1].replace(/-/gi,' ').split('.')[0])!='undefined'){fileName='Amadeus '+elemento.find('img').attr('src').split('/')[elemento.find('img').attr('src').split('/').length-1].replace(/-/gi,' ').split('.')[0];}
if((typeof(elemento.attr('class'))!='undefined'&&elemento.attr('class').indexOf('jcarousel-control-')==-1)||typeof(elemento.attr('class'))=='undefined'){var stl_extraText='Newsroom:';var nombre_seccion=jQuery(elemento.parentsUntil('div[class*="content-block"]')[elemento.parentsUntil('div[class*="content-block"]').length-1]).siblings('h2').text()||jQuery(elemento.parentsUntil('div[class*="content-block"]')[elemento.parentsUntil('div[class*="content-block"]').length-1]).siblings(':first-child').find('h2#resultCount').text()||jQuery(elemento.parentsUntil('div.nr-desktop-only')[elemento.parentsUntil('div.nr-desktop-only').length-1]).siblings('h2').text()||jQuery(elemento.parentsUntil('div[class="rel-news-posts"]')[elemento.parentsUntil('div[class="rel-news-posts"]').length-1]).siblings('h3').text();s=s_gi(s_account);s.linkTrackVars="prop14,prop15,prop33,prop37,eVar14,eVar15,eVar33,eVar37,events";s.linkTrackEvents="event40";s.prop33=s.pageName;s.eVar33="D=c33";s.prop37=jQuery.trim(elemento.parent().children('h3').text())||jQuery.trim(elemento.attr('title'))||jQuery.trim(elemento.attr('alt'))||jQuery.trim(elemento.attr('filetitle'))||elemento.parent().siblings(".content.group").children("h3").text()||fileName||elemento.children().children("h2").text().trim()||elemento.text().trim()||elemento.parent('h3').attr("filetitle")||elemento.parent().siblings('.content.group').children('h3').children('a').attr('filetitle');s.prop37=s.prop37.trim();if(typeof(nombre_seccion)!='undefined'&&nombre_seccion.indexOf('')!=-1&&nombre_seccion.toLowerCase().indexOf('result')==-1&&nombre_seccion!=''){s.prop37=nombre_seccion+":"+s.prop37;}
s.prop37=s.prop37.trim();s.eVar37="D=c37";s.prop14=document.location.pathname.split('/')[3].split('-')[1];s.eVar14="D=c14";s.prop15=document.location.pathname.split('/')[3].split('-')[0];s.eVar15="D=c15";s.events="event40";if(s.prop25!=''){s.linkTrackVars+=',eVar25,prop25';if(s.eVar29!=''){s.linkTrackVars+=',eVar29';}}
if(s.prop14!=''){s.linkTrackVars+=',eVar14,prop14';}
if(s.prop15!=''){s.linkTrackVars+=',eVar15,prop15';}
if(s.prop48!=''){s.linkTrackVars+=',eVar48,prop48';}
s.tl(this,'o',stl_extraText+'Internal Promotions');e.stopPropagation();}});});}}},function(a,b){try{if((b['dom.pathname'].toString().toLowerCase().indexOf('NewsroomExportPpal'.toLowerCase())>-1&&b['dom.pathname'].toString().toLowerCase().indexOf('/Newsroom/'.toLowerCase())>-1)){b['js_page.channel']='Newsroom'}}catch(e){utag.DB(e)}},function(a,b,c,d){try{if((b['dom.pathname'].toString().toLowerCase().indexOf('NewsroomExportPpal'.toLowerCase())>-1&&b['dom.pathname'].toString().toLowerCase().indexOf('/Newsroom/'.toLowerCase())>-1)){c=[b['js_page.channel'],b['pageName']];b['pageName']=c.join(':')}}catch(e){utag.DB(e)}},function(a,b,c,d){try{if((b['dom.pathname'].toString().toLowerCase().indexOf('NewsroomExportPpal'.toLowerCase())>-1&&b['dom.pathname'].toString().toLowerCase().indexOf('/Newsroom/'.toLowerCase())>-1)){c=[b['js_page.channel'],b['pageNameLocalLang']];b['pageNameLocalLang']=c.join(':')}}catch(e){utag.DB(e)}},function(a,b){if(typeof(s.prop14)!='undefined'&&s.prop14!=''){if(s.prop14=="AU"||s.prop14=="CN"||s.prop14=="HK"||s.prop14=="ID"||s.prop14=="JP"||s.prop14=="MN"||s.prop14=="MY"||s.prop14=="PH"||s.prop14=="SG"||s.prop14=="TH"||s.prop14=="TW"||s.prop14=="VN"){s.prop48="APAC";s.eVar48=s.prop48;}
if(s.prop14=="AR"||s.prop14=="BO"||s.prop14=="BR"||s.prop14=="CC"||s.prop14=="CL"||s.prop14=="CO"||s.prop14=="EC"||s.prop14=="MX"||s.prop14=="PE"||s.prop14=="PY"||s.prop14=="UY"||s.prop14=="VE"){s.prop48="LATAM";s.eVar48=s.prop48;}
if(s.prop14=="SE"||s.prop14=="AT"||s.prop14=="CH"||s.prop14=="BG"||s.prop14=="DE"||s.prop14=="KZ"||s.prop14=="CZ"||s.prop14=="LV"||s.prop14=="PL"||s.prop14=="RU"||s.prop14=="SK"||s.prop14=="TR"||s.prop14=="UA"||s.prop14=="BA"||s.prop14=="EE"||s.prop14=="FI"||s.prop14=="GR"||s.prop14=="HR"||s.prop14=="HU"||s.prop14=="IL"||s.prop14=="LT"||s.prop14=="MT"||s.prop14=="RO"||s.prop14=="RS"||s.prop14=="SCA"||s.prop14=="SI"||s.prop14=="IS"){s.prop48="NECSE";s.eVar48=s.prop48;}
if(s.prop14=="US"){s.prop48="NORAM";s.eVar48=s.prop48;}
if(s.prop14=="TN"||s.prop14=="YE"||s.prop14=="SA"||s.prop14=="SD"||s.prop14=="SY"||s.prop14=="PK"||s.prop14=="PS"||s.prop14=="QA"||s.prop14=="LB"||s.prop14=="LY"||s.prop14=="MA"||s.prop14=="IR"||s.prop14=="JO"||s.prop14=="KW"||s.prop14=="DZ"||s.prop14=="EG"||s.prop14=="GULF"||s.prop14=="MU"||s.prop14=="MG"||s.prop14=="ZA"||s.prop14=="NG"||s.prop14=="GH"||s.prop14=="SN"||s.prop14=="EA"||s.prop14=="CWA"||s.prop14=="GB"||s.prop14=="BE"||s.prop14=="BNL"||s.prop14=="IE"||s.prop14=="FR"||s.prop14=="IT"||s.prop14=="PT"||s.prop14=="ES"||s.prop14=="UK"||s.prop14=="AE"){s.prop48="WEMEA";s.eVar48=s.prop48;}
if((typeof(s.prop14)!='undefined'&&s.prop14.toLowerCase()=="corporate")||(typeof(b.site)!='undefined'&&b.site.toLowerCase()=='corporate')){s.prop48="CORPORATE";s.eVar48=s.prop48;}}
else if(typeof(utag.data.site)!='undefined'&&utag.data.site!=''){if(utag.data.site=="AU"||utag.data.site=="CN"||utag.data.site=="HK"||utag.data.site=="ID"||utag.data.site=="JP"||utag.data.site=="MN"||utag.data.site=="MY"||utag.data.site=="PH"||utag.data.site=="SG"||utag.data.site=="TH"||utag.data.site=="TW"||utag.data.site=="VN"){s.prop48="APAC";s.eVar48=s.prop48;}
if(utag.data.site=="AR"||utag.data.site=="BO"||utag.data.site=="BR"||utag.data.site=="CC"||utag.data.site=="CL"||utag.data.site=="CO"||utag.data.site=="EC"||utag.data.site=="MX"||utag.data.site=="PE"||utag.data.site=="PY"||utag.data.site=="UY"||utag.data.site=="VE"){s.prop48="LATAM";s.eVar48=s.prop48;}
if(utag.data.site=="SE"||utag.data.site=="AT"||utag.data.site=="CH"||utag.data.site=="BG"||utag.data.site=="DE"||utag.data.site=="KZ"||utag.data.site=="CZ"||utag.data.site=="LV"||utag.data.site=="PL"||utag.data.site=="RU"||utag.data.site=="SK"||utag.data.site=="TR"||utag.data.site=="UA"||utag.data.site=="BA"||utag.data.site=="EE"||utag.data.site=="FI"||utag.data.site=="GR"||utag.data.site=="HR"||utag.data.site=="HU"||utag.data.site=="IL"||utag.data.site=="LT"||utag.data.site=="MT"||utag.data.site=="RO"||utag.data.site=="RS"||utag.data.site=="SCA"||utag.data.site=="SI"||utag.data.site=="IS"){s.prop48="NECSE";s.eVar48=s.prop48;}
if(utag.data.site=="US"){s.prop48="NORAM";s.eVar48=s.prop48;}
if(utag.data.site=="TN"||utag.data.site=="YE"||utag.data.site=="SA"||utag.data.site=="SD"||utag.data.site=="SY"||utag.data.site=="PK"||utag.data.site=="PS"||utag.data.site=="QA"||utag.data.site=="LB"||utag.data.site=="LY"||utag.data.site=="MA"||utag.data.site=="IR"||utag.data.site=="JO"||utag.data.site=="KW"||utag.data.site=="DZ"||utag.data.site=="EG"||utag.data.site=="GULF"||utag.data.site=="MU"||utag.data.site=="MG"||utag.data.site=="ZA"||utag.data.site=="NG"||utag.data.site=="GH"||utag.data.site=="SN"||utag.data.site=="EA"||utag.data.site=="CWA"||utag.data.site=="GB"||utag.data.site=="BE"||utag.data.site=="BNL"||utag.data.site=="IE"||utag.data.site=="FR"||utag.data.site=="IT"||utag.data.site=="PT"||utag.data.site=="ES"||utag.data.site=="UK"||utag.data.site=="AE"){s.prop48="WEMEA";s.eVar48=s.prop48;}
if((typeof(utag.data.site)!='undefined'&&utag.data.site.toLowerCase()=="corporate")||(typeof(b.site)!='undefined'&&b.site.toLowerCase()=='corporate')){s.prop48="CORPORATE";s.eVar48=s.prop48;}}}];u.send=function(a,b,c,d,e,f,g,h,ev){if(u.ev[a]||typeof u.ev.all!="undefined"){utag.DB("send:7");u.data={};u.a=a;b.sc_events=b.sc_events||{};u.addEvent=function(v,n){var t=[];if(v instanceof Array){t=v.slice(0);}else if(typeof n!="undefined"){t.push(v+"="+n);}else{t.push(v);}
for(var i=0;i<t.length;i++){b.sc_events[t[i]]=1;u.pushlt(u.lte,t[i].split('=')[0]);}
return b.sc_events;}
u.addProduct=function(v){u.data.sc_addProd="";if(v instanceof Array){u.data.sc_addProd=v.join(',');}else{u.data.sc_addProd=v;}}
if(u.a=="link"){u.ltflag=true;u.ltv=[];u.lte=[];}
for(c=0;c<u.extend.length;c++){try{d=u.extend[c](a,b);if(d==false)return}catch(e){}};for(e in utag.loader.GV(u.map)){if(typeof b[e]!="undefined"&&typeof u.map[e]=="string"&&u.map[e].indexOf("PRODUCTS_")>-1){f=u.map[e].split(",");for(g=0;g<f.length;g++){if(f[g].indexOf("PRODUCTS_id")||f[g].indexOf("PRODUCTS_category")||f[g].indexOf("PRODUCTS_quantity")||f[g].indexOf("PRODUCTS_price")){u.data[f[g].substring(9)]=b[e];}}}}
u.data.id=u.data.id||(typeof b._cprod!="undefined"?b._cprod.slice(0):[]);u.data.category=u.data.category||(typeof b._ccat!="undefined"?b._ccat.slice(0):[]);u.data.quantity=u.data.quantity||(typeof b._cquan!="undefined"?b._cquan.slice(0):[]);u.data.price=u.data.price||(typeof b._cprice!="undefined"?b._cprice.slice(0):[]);if(typeof u.data.id!="undefined"&&u.data.id!=""){c=[];d={};ev={};for(e in utag.loader.GV(u.map)){if(typeof b[e]!="undefined"&&typeof u.map[e]=="string"&&u.map[e].indexOf("PRODUCTS_")>-1){f=u.map[e].split(",");for(g=0;g<f.length;g++){var pv=f[g].substring(9);if(f[g].indexOf("PRODUCTS_evar")==0||f[g].indexOf("PRODUCTS_eVar")==0){if(b[e]instanceof Array){b.sc_prodevars=b.sc_prodevars||[];for(var i=0;i<b[e].length;i++){var prodvars={};if(typeof b.sc_prodevars[i]!="undefined"&&b.sc_prodevars[i]!=""){b.sc_prodevars[i][pv]=b[e][i];}else{prodvars[pv]=b[e][i];b.sc_prodevars.push(prodvars);}}}else{d[pv]=b[e].split(",");}}else if(f[g].indexOf("PRODUCTS_event")==0){if(b[e]instanceof Array){b.sc_prodevents=b.sc_prodevents||[];for(var i=0;i<b[e].length;i++){var prodevents={};if(typeof b.sc_prodevents[i]!="undefined"&&b.sc_prodevents[i]!=""){b.sc_prodevents[i][pv]=b[e][i];}else{prodevents[pv]=b[e][i];b.sc_prodevents.push(prodevents);}}
u.addEvent(pv);}else{ev[pv]=b[e];u.addEvent(pv);}}}}}
e="";for(f in utag.loader.GV(d)){for(g=0;g<d[f].length;g++){if(e!="")e+="|"+f+"="+d[f][g];else e=f+"="+d[f][g];}}
h="";for(f in utag.loader.GV(ev)){if(h)h+="|"+f+"="+((isNaN(ev[f]))?"1":ev[f]);else h=f+"="+((isNaN(ev[f]))?"1":ev[f]);}
b.sc_prodevents=b.sc_prodevents||[];b.sc_prodevars=b.sc_prodevars||[];for(d=0;d<u.data.id.length;d++){var h2=h;var h3=e;if(typeof b.sc_prodevents!="undefined"){for(f in b.sc_prodevents[d]){if(typeof b.sc_prodevents[d][f]!="undefined"){var l=b.sc_prodevents[d][f];if(typeof l!="undefined"&&l!=""&&isNaN(l)==false){if(h2){h2+="|"+f+'='+l;}else{h2=f+'='+l;}}}}}
if(typeof b.sc_prodevars!="undefined"){for(f in b.sc_prodevars[d]){if(typeof b.sc_prodevars[d][f]!="undefined"){var l=b.sc_prodevars[d][f];if(typeof l!="undefined"&&l!=""){if(h3){h3+="|"+f+'='+l;}else{h3=f+'='+l;}}}}}
c.push((u.data.category[d]?u.data.category[d]:"")+";"+u.data.id[d]+";"+(u.data.quantity[d]?u.data.quantity[d]:"")+";"+(u.data.price[d]?((u.data.quantity[d]?parseInt(u.data.quantity[d]):1)*parseFloat(u.data.price[d])).toFixed(2):"")+";"+h2+";"+h3);}
if(typeof u.data.sc_addProd!="undefined"&&u.data.sc_addProd){c.push(u.data.sc_addProd);}
u.o.products=c.join(",");}
var evt=/^event|prodView|scOpen|scAdd|scRemove|scView|scCheckout|purchase$/;for(c in utag.loader.GV(b)){d=[];if(typeof u.map[c+":"+b[c]]!="undefined"){b[c+":"+b[c]]=b[c];d=u.map[c+":"+b[c]].split(",");}else if(typeof u.map[c]!="undefined")d=u.map[c].split(",");for(e=0;e<d.length;e++){if(d[e]!="events"&&evt.test(d[e])&&b[c]!=""){if(d[e].indexOf("ONCE_")==0){f=d[e].substring(5);if(utag.handler.ONCE("ev_"+b[c])){u.addEvent(f);}}else{u.addEvent(d[e]);}}}}
for(c in utag.loader.GV(b)){if(typeof u.map[c]!="undefined"){d=u.map[c].split(",");for(e=0;e<d.length;e++){if(d[e].indexOf("ONCE_")==0){f=d[e].substring(5);if(utag.loader.ONCE("map_"+b[c])){u.o[f]=b[c];u.pushlt(u.ltv,f)}}else if(d[e]=="doneAction"){b.doneAction=b[c];if(b.doneAction!="navigate"){b.doneAction=eval(b[c]);}}else{if(c=="sc_events"||c=="sc_prodevents"||c=="sc_prodevars"){utag.DB("Error: Mapping reserved object name "+c)}else{u.o[d[e]]=b[c];}
if(d[e]=="s_account"){u.o.dynamicAccountSelection=true;u.o.dynamicAccountList=b[c]+"=.";}else if(d[e]=="linkTrackVars"){u.ltflag=false;}else{u.pushlt(u.ltv,d[e]);}}}}}
d=[];for(c in utag.loader.GV(b.sc_events)){if(b.sc_events[c])d.push(c)};if(d.length>0){u.o.events=d.join(",");u.pushlt(u.lte,u.o.events);}
if(b._corder){u.pushlt(u.lte,"purchase");u.pushlt(u.ltv,"purchaseID");u.o.purchaseID=((u.o.purchaseID)?u.o.purchaseID:b._corder);u.o.events=((u.o.events)?u.o.events:"purchase");if(u.o.events.indexOf("purchase")<0){u.o.events+=",purchase"};}
var t=u.o;var q={},l={};c=u.varlist;for(d in utag.loader.GV(c)){if(typeof t[d]!='undefined'&&t[d]!=null&&t[d]!=''&&t[d].toString().indexOf('D=')!=0)
{if(typeof l[t[d]]=='undefined')l[t[d]]=c[d];else t[d]='D='+l[t[d]];}}
if(u.a=="view"){var img=u.o.t();if(typeof img!="undefined"&&img!=""){u.img=new Image();u.img.src=img.substring(img.indexOf("src=")+5,img.indexOf("width=")-2);}}else if(u.a=="link"){if(typeof b.linkTrackVars=="undefined"&&u.ltflag){if(u.o.events){u.ltv.push("events")};if(u.o.products){u.ltv.push("products")};b.linkTrackVars=u.ltv.join(',');}
if(typeof b.linkTrackEvents=="undefined"&&u.ltflag){b.linkTrackEvents=u.lte.join(',');}
if(b.linkTrackEvents){u.o.linkTrackEvents=b.linkTrackEvents;}
if(b.linkTrackVars){u.o.linkTrackVars=b.linkTrackVars;}
if(!u.o.linkType)u.o.linkType='o';if(b.link_name)b.link_text=b.link_name;b.link_text=(b.link_text)?b.link_text:"no link_name";if(b.link_type=='exit link'){u.o.linkType='e'}
else if(b.link_type=='download link')u.o.linkType='d';u.o.tl(((b.link_obj)?b.link_obj:true),u.o.linkType,b.link_text,null,(b.doneAction?b.doneAction:null));}
if("no"=="yes"){u.o.events="";u.o.products="";for(d in utag.loader.GV(u.varlist)){if(d!="pageName")u.o[d]=""}}
utag.DB("send:7:COMPLETE");}}
try{utag.o[loader].loader.LOAD(id)}catch(e){utag.loader.LOAD(id)}})('7','amadeus.main');}catch(e){};