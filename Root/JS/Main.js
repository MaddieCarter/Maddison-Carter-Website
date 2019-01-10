
$(document).ready(function(){
	//localStorage.clear();

	$(".Add").click(function(){
		var picture = $(this).data('picture');
		var name = $(this).data('name');
		var price = $(this).data('price');
		
		localStorage.setItem('Wishlist', localStorage.getItem('Wishlist') + '<table><tr><td class="wList"><img src="' + picture + '"></td><td class="wList">' + '<p>' + name + '</p></td><td class="wList">' + '<p>' + price + '</p></td></tr></table>');
	});

	$('div#Wishlist').append(localStorage.getItem('Wishlist'));
});