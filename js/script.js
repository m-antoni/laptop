// all carousel will take 2 seconds internval 
$('.carousel').carousel({
	interval:2000
});


// article email subscribe button

$('#subemail').click(function(){	
	swal({
	  title: 'Input email address',
	  input: 'email'
	}).then(function (email) {
	  swal({
	    type: 'success',
	    html: 'Your Email has been subscribe: ' + email
	  })
	});
});


// toggle slide when you click this button 

$(document).ready(function(){
	$('#comments_form').hide();

	$("a[href='#view_comments']").click(function(){
		$('#comments_form').slideToggle(3000);
	 });
	$("a[href='#follow']").click(function(){
		$('.form-control').val(" ");
			swal(
		  		'Thank You!',
		  		'We will surely look into it',
		  		'success'
			);
	});
}); 

