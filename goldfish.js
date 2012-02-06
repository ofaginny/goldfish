$(document).ready(function(){
	$("#addScreen").click(function(){
			var boxy = document.createElement("div");
			$('body').append(boxy);
			$(boxy).attr("id","boxy");
			$(boxy).load("insertHTML.html",posting);
			var URLz = document.location.href;
			console.log(URLz);
			var titlez = $('title').html();
			console.log(titlez);		
		});
	
	function posting(){
		$('#submit').click(function(){
			$.post("/send",{address:"niniu", subject:"sdfsdf", body:"sdfasdf"});
		});
	};
});