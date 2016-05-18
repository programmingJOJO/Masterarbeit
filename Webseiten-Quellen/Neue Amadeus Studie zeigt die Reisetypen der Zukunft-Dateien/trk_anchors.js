var trk_existingLoad = String(document.body.getAttribute("onload"));
if (trk_existingLoad == "null") {trk_existingLoad = ""}
document.body.setAttribute("onload", "track_anchors(); " + trk_existingLoad);