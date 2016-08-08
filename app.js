$(document).ready(function() {
   $.clearInput = function () {
        $('.modal').find('input[type=text], input[type=radio], input[type=number], textarea').val('');
	};

	$('#add-party').click(function(e){
		var number = $('#number').val();
		var name = $('#name').val();

		console.log(number);
		console.log(name);

		$('#party').append(
			"<h4>"+
				name +
				" party of "+
				number +
				" added to waitlist"+
			"</h4>"
		);
	});

	$('#okay').click(function(e){
		var number = $('#number').val();
		var name = $('#name').val();
		console.log(number,name);
		$('#Waiting').append(
		"<div class='Waitlist-Customer'>" +          
			"<div class='table-number'>" +
          		"<p>??</p>" +
        	"</div>" +
        	"<div class='customer-info'>" +
          		"<p>"+
          		name +
          		"</p>"+
          		"<p> Party of "+
          		number +
          		"</p>"+
          		"<p>Arrived at 5:44PM</p>" +
          		"<p>Wait time - 1 min</p>" +
        	"</div>" +
        	"<button type='button' class='call-button' disabled>Call</button>" +
      	"</div>"
		);
		$.clearInput();
		$('#party').empty();
	});

	$('#Waiting-ready').click(function(e){
		$('#Seated-modal').modal('toggle');
	});			

	$('#Sat').click(function(e){
		$('#Waiting-ready').appendTo('#Seated');
		$('#waiting-button').remove();
		$('#Waiting-ready').css("background-color", "#DBDBDB");
		$('.ground').css("display","none");
		$('.ground2').css("display","block");
	});	
	document.getElementById("button").onclick = function() {
    confirm("Great to see you," + " " + prompt("What's Your Name"));
};
});
