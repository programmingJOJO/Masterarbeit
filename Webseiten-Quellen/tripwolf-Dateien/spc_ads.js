
    if (typeof(OA_zones) != 'undefined') {
        var OA_zoneids = '';
        for (var zonename in OA_zones) OA_zoneids += escape(zonename+'=' + OA_zones[zonename] + "|");
        OA_zoneids += '&amp;nz=1';
    } else {
        var OA_zoneids = escape('');
    }

    if (typeof(OA_source) == 'undefined') { OA_source = ''; }
    var OA_p=location.protocol=='https:'?'https://www.tripwolf.com/trackads/www/delivery/spc.php':'http://www.tripwolf.com/trackads/www/delivery/spc.php';
    var OA_r=Math.floor(Math.random()*99999999);
    OA_output = new Array();

    var OA_spc="<"+"script type='text/javascript' ";
    OA_spc+="src='"+OA_p+"?zones="+OA_zoneids;
    OA_spc+="&amp;source="+escape(OA_source)+"&amp;r="+OA_r;
    OA_spc+="&amp;cou_code=DE&amp;keyword=&amp;language=de&amp;city=N%C3%BCrnberg&amp;lat=49.4478&amp;loc_city=&amp;loc_type=&amp;loc_id=&amp;pageparam=&amp;lon=11.0683&amp;ip=141.75.214.177&amp;page=page&amp;query=&amp;sitepath=&amp;loc_country=&amp;loc_fullpath=&amp;randnr=94&amp;loc_region=";
    OA_spc+=(document.charset ? '&amp;charset='+document.charset : (document.characterSet ? '&amp;charset='+document.characterSet : ''));

    if (window.location) OA_spc+="&amp;loc="+escape(window.location);
    if (document.referrer) OA_spc+="&amp;referer="+escape(document.referrer);
    OA_spc+="'><"+"/script>";
    document.write(OA_spc);

    function OA_show(name) {
        if (typeof(OA_output[name]) == 'undefined') {
            return;
        } else {
            document.write(OA_output[name]);
        }
    }

    function OA_showpop(name) {
        zones = window.OA_zones ? window.OA_zones : false;
        var zoneid = name;
        if (typeof(window.OA_zones) != 'undefined') {
            if (typeof(zones[name]) == 'undefined') {
                return;
            }
            zoneid = zones[name];
        }

        OA_p=location.protocol=='https:'?'https://www.tripwolf.com/trackads/www/delivery/apu.php':'http://www.tripwolf.com/trackads/www/delivery/apu.php';

        var OA_pop="<"+"script type='text/javascript' ";
        OA_pop+="src='"+OA_p+"?zoneid="+zoneid;
        OA_pop+="&amp;source="+escape(OA_source)+"&amp;r="+OA_r;
        OA_spc+="&amp;cou_code=DE&amp;keyword=&amp;language=de&amp;city=N%C3%BCrnberg&amp;lat=49.4478&amp;loc_city=&amp;loc_type=&amp;loc_id=&amp;pageparam=&amp;lon=11.0683&amp;ip=141.75.214.177&amp;page=page&amp;query=&amp;sitepath=&amp;loc_country=&amp;loc_fullpath=&amp;randnr=94&amp;loc_region=";
        if (window.location) OA_pop+="&amp;loc="+escape(window.location);
        if (document.referrer) OA_pop+="&amp;referer="+escape(document.referrer);
        OA_pop+="'><"+"/script>";

        document.write(OA_pop);
    }
var OA_fo = '';
OA_fo += "<"+"script type=\'text/javascript\' src=\'http://www.tripwolf.com/trackads/www/delivery/fl.js\'><"+"/script>\n";
document.write(OA_fo);
