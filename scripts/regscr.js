$(document).ready(function(){
	var regMail = /^[-._a-z0-9]+@(?:[a-z0-9][-a-z0-9]+\.)+[a-z]{2,6}$/;
	var regName = /^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-' ]+[a-zA-Zа-яА-Я']?$/;
	var msg = "Input error!";

	$("#user > input").blur(function(){
		var username = $(this).val();

		if (username.search(regName)===-1){ 
			$("#user > span").addClass("glyphicon-remove").hide().fadeIn(800);
			$("#user").addClass("has-error");
			$("#helpUser").append("Your name is incorrect").hide().fadeIn(800);

		}
		else{
			$("#user > span").removeClass("glyphicon-remove").addClass("glyphicon-ok").hide().fadeIn(800);
			$("#user").removeClass("has-error").addClass(" has-success");
		}
	});
	$("#user > input").focus(function(){
		$("#helpUser").html("");
		$("#user > span").removeClass("glyphicon-remove glyphicon-ok");
		$("#user").removeClass("has-error  has-success");

	});

	$("#email > input").blur(function(){
		var email = $(this).val();
		if (email.search(regMail)===-1){ 
			$("#email > span").addClass("glyphicon-remove").hide().fadeIn(800);
			$("#email").addClass("has-error");
			$("#helpEmail").append("Your email is incorrect").hide().fadeIn(800);

		}
		else{
			$("#email > span").removeClass("glyphicon-remove").addClass("glyphicon-ok").hide().fadeIn(800);
			$("#email").removeClass("has-error").addClass(" has-success");
		}
		$("#email > input").focus(function(){
			$("#helpEmail").html("");
			$("#email > span").removeClass("glyphicon-remove glyphicon-ok");
			$("#email").removeClass("has-error  has-success");

		});

	});


	$("#pwd > input").blur(function(){
			var passc=$("#pwdc > input").val();
			var pass= $(this).val();
		if ((passc!=pass)&&(passc!="")) {

			$("#pwd > span").addClass("glyphicon-remove").hide().fadeIn(800);
			$("#pwd").addClass("has-error");
			$("#helpPass").append("<br>Passwords  isn't equal").hide().fadeIn(800);

		}
		else{
			$("#pwd > span").removeClass("glyphicon-remove").addClass("glyphicon-ok").hide().fadeIn(800);
			$("#pwd").removeClass("has-error").addClass(" has-success");
		}
		$("#pwd > input").focus(function(){
			$("#helpPass").html("");
			$("#pwd > span").removeClass("glyphicon-remove glyphicon-ok");
			$("#pwd").removeClass("has-error  has-success");

		});

	});

	$('#pwd > input').keypress(function(e) { 
		$("#helpPass").html("");
		$("#pwd > span").removeClass("glyphicon-warning-sign");
		$("#pwd").removeClass("has-warning");
		var s = String.fromCharCode( e.which );
		if ( s.toUpperCase() === s && s.toLowerCase() !== s && !e.shiftKey ) {
			$("#helpPass").append("Caps lock is active").hide().fadeIn(800);
			$("#pwd > span").addClass("glyphicon-warning-sign");
			$("#pwd").addClass("has-warning");

		}
	});
	$('#pwdc > input').keypress(function(e) { 
		$("#helpPassc").html("");
		$("#pwdc > span").removeClass("glyphicon-warning-sign");
		$("#pwdc").removeClass("has-warning");
		var s = String.fromCharCode( e.which );
		if ( s.toUpperCase() === s && s.toLowerCase() !== s && !e.shiftKey ) {
			$("#helpPassc").append("Caps lock is active").hide().fadeIn(800);
			$("#pwdc > span").addClass("glyphicon-warning-sign");
			$("#pwdc").addClass("has-warning");

		}
	});



	$("#pwdc > input").blur(function(){
		var pass=$("#pwd > input").val();
		var passc= $(this).val();
		if (passc!=pass) {
			$("#pwdc > span").addClass("glyphicon-remove").hide().fadeIn(800);
			$("#pwdc").addClass("has-error");
			$("#helpPassc").append("<br>Passwords  isn't equal").hide().fadeIn(800);
		}
		else{
			$("#pwdc > span").removeClass("glyphicon-remove").addClass("glyphicon-ok").hide().fadeIn(800);
			$("#pwdc").removeClass("has-error").addClass(" has-success");
		}
		$("#pwdc > input").focus(function(){
			$("#helpPassc").html("");
			$("#pwdc > span").removeClass("glyphicon-remove glyphicon-ok");
			$("#pwdc").removeClass("has-error  has-success");

		});

	});
});