$(function() {
  $("#convert").click(function(){
  	var options = $("#options").val();
  	var input = $("#input").val();
  	var output;
  	console.log(options);
  	switch (options) {
  		case "rthk":
  			output = input.replace(/[^\S\n+]/g, "");
  			$("#output").val(output);
  		break;
  		case "inmediahk":
  			output = input.replace(/\(([0-9]*):([0-9]*)\)/,"$1$2");
  			$("#output").val(output);
  		break;
  	}
  })
});