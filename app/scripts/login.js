
// ======================================================
// === LAUNCH ===========================================
// ======================================================

$(function(){

    //resize elements
    $(window).resize(function(){
        resizeItemsLogin();
    });
    resizeItemsLogin();

});


// ======================================================
// === RESIZE ITEMS =====================================
// ======================================================

function resizeItemsLogin() {

	var windowHeight = $(window).height();
	console.log(windowHeight);

	$('main.login').css('height',windowHeight);

}

