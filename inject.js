// this is the code which will be injected into a given page...

(function() {

	// just place a div at top right
    var imgs = document.getElementsByTagName("img");
    var imgSrcs = [];
        alert("Test before for loop");
    for (var i = 0; i < imgs.length; i++) {
        imgSrcs.push(imgs[i].src);
        alert("Test in the for loop");
    }
alert(JSON.stringify(imgSrcs));
 alert(imgSrcs.join("\n"));

})();