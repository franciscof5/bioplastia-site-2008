function getElement(strID) {
	return document.getElementById(strID)
}
function getMovieById(movieName) {
	if (navigator.appName.indexOf ("Microsoft") !=-1) {
		return window[movieName]
	} else {
		return window.document[movieName]
	}
}
function moveElementBy(strObj,x,y) {
	var el = getElement(strObj);
	el.style.left = parseInt(el.style.left) + parseInt(x) + "px";
	el.style.top = parseInt(el.style.top) + parseInt(y) + "px";
}
function moveElementTo(strObj,x,y) {
	var el = getElement(strObj);
	el.style.left = parseInt(x) + "px";
	el.style.top = parseInt(y) + "px";
}
function setSize(el,w,h) {
	if (w.indexOf("%")!=-1) {	el.style.width = w; }
	else { el.style.width = parseInt(w) + "px"; }
	if (h.indexOf("%")!=-1) {	el.style.height = h; }
	else { el.style.height = parseInt(h) + "px"; }
}

function resizeElementBy(strObj,w,h) {
	var el = getElement(strObj);
	var _w = el.style.width;
	var _h = el.style.height;
	el.style.width = parseInt(_w) + parseInt(w) + "px";
	el.style.height = parseInt(_h) + parseInt(h) + "px";
}
function resizeElementTo(strArgs) {
	var arrArgs = new Array();
	arrArgs = parseArgs(strArgs);
	var el = getElement(arrArgs["divId"]);
	if (isIE) {
		setSize(el,arrArgs['ieW'],arrArgs['ieH']);
	}
	else {
		setSize(el,arrArgs['mozW'],arrArgs['mozH']);
	}
}
function resizeWidth(strArgs) {
	var newWidth = 0;
	var arrArgs = new Array();
	arrArgs = parseArgs(strArgs);
	var el = getElement(arrArgs["divId"]);
	el.style.width = (isIE) ? parseInt(arrArgs["ieW"]) + "px" : parseInt(arrArgs["mozW"]) + "px";
	if (arrArgs["bindHeight"]=="true") {
		setDivHeight(arrArgs["divId"]);
		setFlashDivHeight(arrArgs["flashDivId"], arrArgs["divId"], arrArgs["pB"]);
	}
}
function resizeHeight(strArgs) {
	var newHeight = 0;
	var arrArgs = new Array();
	arrArgs = parseArgs(strArgs);
	var el = getElement(arrArgs["divId"]);
	el.style.height = (isIE) ? parseInt(arrArgs["ieH"]) + "px" : parseInt(arrArgs["mozH"]) + "px";
}
function stretchHeight(divId,flashDivId,pB) {
	setDivHeight(divId);
	setFlashDivHeight(flashDivId, divId, pB);
}
function fixDivHeight(strDiv) {
	setDivHeight(strDiv);
}
function show(strObj) {
	var el = getElement(strObj);
	el.style.visibility = "visible";
}
function hide(strObj) {
	var el = getElement(strObj);
	el.style.visibility = "hidden";
}
function setElementStyle(theEl,theStyles) {
	var el = getElement(theEl)
	if (el!=null) {
		if (theStyles!="" && theStyles!="undefined") {
			setStyles(el,theStyles);
		}
	}
}
function setStyles(el, s) {
	if (el!=null) {
		if (s!="" && s!="undefined") {
			var arrProps = s.split(";");
			for (var i=0;i<arrProps.length;i++) {
				var arrProp = arrProps[i].split(":");
				var myProp = arrProp[0];
				var myVal = arrProp[1];
				if (myProp!="" && myProp!="undefined" && myProp!="" && myVal!="undefined") {
					if (el.style[myProp] != null) {
						el.style[myProp] = myVal;
					}	
				}
			}
		}
	}
}
function setStyle(el, s) {
	if (el!=null) {
		el.style.cssText += ";" + s;
		el.style.cssText = el.style.cssText; // force recalculation
	}
}
function stretchHeight(divId,flashDivId,pB) {
	setDivHeight(divId);
	setFlashDivHeight(flashDivId, divId, pB);
}
function setHTML(divId, strHTML) {
	var el = getElement(divId);
	if (el!=null) {
		el.innerHTML = unescape(strHTML);
	}
}
function createDiv(strFlashObj, strArgs) {
	flashObj = getMovieById(strFlashObj);
	var arrArgs = new Array();
	arrArgs = parseArgs(strArgs);
	
	var id = arrArgs["id"];
	var el = arrArgs["el"];
	var sW = arrArgs["sW"];
	var sH = arrArgs["sH"];
	var ieW = arrArgs["ieW"];
	var ieH = arrArgs["ieH"];
	var mozW = arrArgs["mozW"];
	var mozH = arrArgs["mozH"];
	var pR = arrArgs["pR"];
	var pB = arrArgs["pB"];
	var bindHeight = arrArgs["bindHeight"];
	var flashDivId = arrArgs["flashDivId"];
	var innerHTML = arrArgs["html"];
	var style = arrArgs["style"];
	var elStyle = arrArgs["elStyle"];
	var overflow = arrArgs["overflow"];
	var isCreated = getElement(id);
	if (isCreated!=null) {
		return false;
	}
	var newDiv = document.createElement("div");
	newDiv.id = id;
	setStyles(newDiv,style);
	if(isIE) {
		setSize(newDiv,ieW,ieH);
	}
	else {
		setSize(newDiv,mozW,mozH);
	}
	if (el!="undefined" && el!="" && el.length>0) {
		var elName = el;
		var el = getElement(el);
		if (el!=null) {
			el.style.top = 0 + "px";
			el.style.left = 0 + "px";
			setStyles(el,elStyle);
			newDiv.appendChild(el);
		}
	}
	else {
		newDiv.innerHTML = innerHTML;
	}
	flashObj.parentNode.appendChild(newDiv);
	var extraHeight;
	var extraWidth;
	if (bindHeight=="true") {
		setDivHeight(id, heightOffset);
		setFlashDivHeight(flashDivId, id, pB);
	}
	addToGlobalArray(newDiv);
}
function setDivHeight(divId) {
	var theDiv = getElement(divId);
	theDiv.style.height = "";
	correctedHeight = (theDiv.offsetHeight) + "px";
	theDiv.style.height = correctedHeight;
	extraHeight = parseInt(theDiv.offsetHeight) - parseInt(theDiv.style.height);
	if (extraHeight > 0 && extraHeight!="NaN") {
		theDiv.style.height = parseInt(correctedHeight) - extraHeight + "px";
	}
	theDiv.style.cssText = theDiv.style.cssText;
	return parseInt(correctedHeight) - extraHeight + "px";
}
function setFlashDivHeight(flashDivId, divId, pB) {
	var flashDiv = getElement(flashDivId);
	var theDiv = getElement(divId);
	flashDiv.style.height = "100%";
	var newFlashDivHeight = (theDiv.offsetHeight + parseInt(theDiv.style.top)+parseInt(pB)) + "px";
	var bodyHeight = flashDiv.offsetHeight;
	if (parseInt(newFlashDivHeight) >= bodyHeight) {
		flashDiv.style.height = "";
		flashDiv.style.height = newFlashDivHeight;
		flashDiv.style.cssText = flashDiv.style.cssText;
	}
	else {
		flashDiv.style.width = "100%";
		flashDiv.style.height = "100%";
	}
}
function addToGlobalArray(el) {
	htmlOverlayWidgets.push(el);
}
function parseArgs(strArgs) {
	var arrOut = new Array();
	var arrArgs = new Array();
	arrArgs = strArgs.replace(/\+/,' ').replace(/&/,'').split('&')
	for (i=0;i<arrArgs.length;i++){
		var temp=arrArgs[i].split('=');
		var prop = temp.splice(0,1);
		var val = temp.join("=");
		arrOut[prop]=unescape(val);
	}
	return arrOut;
}
function flashCommand(command,args) {
	if (command=="alert") {
		alert(args);
	}
	else if (command=="initMovie") {
		//initMovie(flashMovieId,args);
	}
	else if (command=="createDiv") {
		createDiv(flashMovieId,args);
	}
	else if (command=="moveElementBy") {
		var moveArr = args.split(",");
		moveElementBy(moveArr[0],moveArr[1],moveArr[2]);
	}
	else if (command=="moveElementTo") {
		var moveArr = args.split(",");
		moveElementTo(moveArr[0],moveArr[1],moveArr[2]);
	}
	else if (command=="resizeElementBy") {
		var myArr = args.split(",");
		resizeElementBy(myArr[0],myArr[1],myArr[2]);
	}
	else if (command=="resizeElementTo") {
		resizeElementTo(args);
	}
	else if (command=="resizeWidth") {
		resizeWidth(args);
	}
	else if (command=="resizeHeight") {
		resizeHeight(args);
	}
	else if (command=="setElementStyle") {
		var myArr = parseArgs(args);
		setElementStyle(myArr['id'], myArr['s']);
	}
	else if (command=="setHTML") {
		var myArr = parseArgs(args);
		setHTML(myArr['id'], myArr['html']);
	}
	else if (command=="fixDivHeight") {
		fixDivHeight(args);
	}
	else if (command=="stretchHeight") {
		var myArr = args.split(",");
		stretchHeight(myArr[0], myArr[1], myArr[2]);
	}
	else if (command=="show") {
		show(args);
	}
	else if (command=="hide") {
		hide(args);
	}
	else if (command=="eval") {
		args = unescape(args);
		eval(args);
	}
	else {
		alert("The command, " + command + ", was misspelled or the function has not been created yet. Open this page and enter it in the flashCommand function.");
	}
}