$(document).ready(function() {
		 
var output="";
$('#json-call-btn').click(function(){


	$.ajax({
		contentType: 'application/json; charset=utf-8',
		data: '',
		url: "http://localhost:2843/api/Service",
		type: "GET", 
		crossDomain: true,
		headers: {'X-Requested-With': 'XMLHttpRequest'},
		success: function(data) {
//alert(data);
		//var x=JSON.parse(data);//convert string to json object
		
	
		       $.each(data, function (index, item) {
	
            
   
output="<h1>"+output+item.Id+" "+item.Name+"</h1>";

  });
  $('#json-my-response').html(output);
 
  }

        });
		
		

		});
		



});


