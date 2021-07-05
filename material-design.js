/** Material Design .js **/
/** @Version : 1.0 (05/07/2021) **/
/** @Author : Benjamin Fourmaux -- Beruet **/
/** ------------------------------------- **/


/* Check if Jquery is here */
window.onload = function() {
    if (window.jQuery) {  
        // jQuery is loaded
		if(jQuery().jquery != '3.4.1'){ // Check jQuery version
			console.log("%c[Material-design.js] Warning : jQuery 3.4.1 is required ! This can cause troubles. Please load jQuery (3.4.1) at https://jquery.com/download/", "background: #4c4c00; color: #ffff32");
		}
    } else {
        // jQuery is not loaded
        console.log("%c[Material-design.js] Warning : jQuery is missing ! This can cause troubles. Please load jQuery (3.4.1) at https://jquery.com/download/", "background: #4c4c00; color: #ffff32");
    }
}


$(document).ready(function() {
	
	/* ---------------------- */
	/* |	    FORM		| */	
	/* ---------------------- */
	
	// Add focus
	$('.material-form-control-input, .material-form-control-input-filled, .material-form-control-input-outlined, .material-form-control-textarea').focus(function(){
		var parent = $(this).parent(); // get the parent element
		// add class is-focus and has-label
		parent.addClass('is-focus has-label');
		// Delete error message
		parent.removeClass('error');
		parent.children('span.error-label').empty();
	});
	
	$('.material-form-control-input, .material-form-control-input-filled, .material-form-control-input-outlined, .material-form-control-textarea').blur(function(){
		var parent = $(this).parent(); // get the parent element
		// Remove the class has-label when the input is not empty
		if ($(this).val() == ""){
			parent.removeClass('has-label');
		}
		// Remove .is-focus has the parent element (form-group)  
		parent.removeClass('is-focus');
	});
});