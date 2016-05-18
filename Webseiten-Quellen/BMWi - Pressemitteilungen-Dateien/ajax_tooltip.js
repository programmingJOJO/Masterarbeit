var b;
var tb;

// Funktion holt die aufbereiteten Daten per XMLRequest, schreibt sie in die HTML Seite und ersetzt die toc-Links durch js Funktion "onClick"  
function getNewHttpObject() { 
	var objType = false; 

	try {
		objType = new ActiveXObject('Msxml2.XMLHTTP');
	} catch(e){
		try {
			objType = new ActiveXObject('Microsoft.XMLHTTP');
		} catch(e){
			objType = new XMLHttpRequest();
		}
	}

	return objType;
}

function getAjaxData(context, aid, type, rdid, zknotenId, zdid) {
	var id = "";

	if (type == "external") {
		id = aid.substring(3, aid.indexOf("_"));
	}

	var req = getNewHttpObject();
	var url = context + ",did=" + rdid + ".html?view=renderContent&artikel_id=" + id + "&zknotenId=" + zknotenId + "&zdid=" + zdid;
	var tplink = document.getElementById(aid);

	tplink.onmouseover= function(e) {
		//Tooltip ist geladen
		if(document.getElementById('btc_'+aid)) {				
			showTooltip(document.getElementById('btc_'+aid));
		} else {			
			//Tooltip ist noch nicht geladen	
			
			
			/* Tooltip in Dom Baum einhängen */
			var b = document.createElement("div");
			b.className = 'tooltip';
			b.setAttribute('id', 'btc_' + aid);
			

			
			var c = document.createElement("div");
			c.className = 'tooltipLoad';
			
			b.appendChild(c);
			
			var br = document.getElementById(aid);

			if (br.insertBefore) {
				var bbc = document.getElementById(aid);
				bbc.parentNode.insertBefore(b,bbc.nextSibling);
			}
			
			
			b.style.left =  tplink.offsetLeft + "px"; 	

					  
			tplink.onmouseover= function(e){showTooltip(b);};
			tplink.onmouseout=function(e){hideTooltip(b);};
			b.onmouseover= function(e){showTooltip(b);};
			b.onmouseout=function(e){hideTooltip(b);};
			showTooltip(b);
			 
			// open(METHODE,URL,ASYNCHRON=TRUE,SYNCHRON=FALSE);

			
			
			req.open("GET", url, true);

			req.onreadystatechange = function() {
				// Prüfen des Fortschritts 	
				if(req.readyState === 0) {		  // 0= "uninitialized"  
					// nothing to do
				} else if (req.readyState == 1) { // 1=Request wird gestartet, aber noch nicht abgeschickt
					// nothing to do
				} else if (req.readyState == 2) { // 2=Request wurde ausgeführt, auf Server-Antwort warten
					// nothing to do
				} else if (req.readyState == 3) { // 3=Request ausgeführt und Teile der Antwort sind schon im Puffer
					// nothing to do
				} else if (req.readyState == 4) { // 4=Request ausgeführt und Antwort des Servers erhalten, Up-/Download abgeschlossen
					// Wenn Statuscode = 200 oder "OK", Anfrage erhalten und Daten sind in Serverantwort	
					if (req.status == 200 || req.status == "OK") {
						/* Link abschalten */
						tplink.setAttribute('href','#');


						var a = document.createElement("div");
						a.className = 'tooltipMargin';
						a.innerHTML = req.responseText;
						c.appendChild(a);
						
					} else {
						//document.getElementById(elementContainer).innerHTML = "ERROR: "+req.statusText; 
					}
				}
			};

			// Anfrage gesendet
			req.send(null);
		}
	}

tplink.onmouseout = function(e) {
		if (document.getElementById('btc_'+aid)) {				
				hideTooltip(document.getElementById('btc_' + aid));
		}
	}
}

function showTooltip(e) {
	
	var alltooltips = getElementsByClassName("tooltip");	
	for (i = 0; i < alltooltips.length; i++) {
		alltooltips[i].style.visibility = "hidden";
		alltooltips[i].style.display = "none";		
	}

	e.style.visibility = "visible";
	e.style.display = "block";
	
}


function hideTooltip(e) {	
	e.style.visibility = "hidden";
	e.style.display = "none";
}

 
function getElementsByClassName(class_name) {
	var all_obj;
	var ret_obj=new Array();
	var j=0;
	var teststr;

	if (document.all) {
		all_obj=document.all;
	} else if (document.getElementsByTagName && !document.all) {
		all_obj=document.getElementsByTagName("*");
	}

  	
	for (i = 0; i < all_obj.length; i++) {
		if(all_obj[i].className){
		if (all_obj[i].className.indexOf(class_name) != -1) {
			teststr = "," + all_obj[i].className.split(" ").join(",") + ",";
	
			if (teststr.indexOf("," + class_name+",") != -1) {
				ret_obj[j] = all_obj[i];
				j++;
			}
		}
		}
		
	}	

	return ret_obj;
}

function disableLexikonLink(){
	var uri = '';
	var url = '';
	var strLexikon='';
	var lexikonStartString = 'http://lexikon.';
	var lexikonEndString = '012/';
	
	if(window.location.host != "") {
		uri = window.location.host;
		url = window.location.href;
		strLexikon = uri.search(lexikonStartString);
		
		
		if (strLexikon != -1){
			/*ist der Lexikonmodus angeschaltet wird der entsprechende Link deaktiviert**/
			lexikonLink = document.getElementById('an');						
			
			newItem	= document.createElement("span");
			newItem.className = 'noActive';			
			newItem.innerHTML = lexikonLink.childNodes[0].innerHTML;
			
			lexikonLink.replaceChild(newItem,lexikonLink.childNodes[0]);
			
			
			/*Erweiterung des Links durch den Pfad zum Dokument*/
			extLexikonLink = document.getElementById('aus');
			startindex = url.indexOf(lexikonEndString,0);
			extUri = url.substr(startindex + 4,url.length);
			extLexikonLink.firstChild.setAttribute("href",extLexikonLink.firstChild.getAttribute("href") + extUri);


			
		} else {
			/*ist der Lexikonmodus ausgeschaltet wird der entsprechende Link deaktiviert**/
			lexikonLink = document.getElementById('aus');
			
			newItem	= document.createElement("span");
			newItem.className = 'noActive';			
			newItem.innerHTML = lexikonLink.childNodes[0].innerHTML;
			
			lexikonLink.replaceChild(newItem,lexikonLink.childNodes[0]);
			
			/*Erweiterung des Links durch den Pfad zum Dokument*/
			extLexikonLink = document.getElementById('an');
			startindex = url.indexOf('012/',0);
			extUri = url.substr(startindex + 4,url.length);
			extLexikonLink.firstChild.setAttribute("href",extLexikonLink.firstChild.getAttribute("href") + extUri);

		}
	}
}