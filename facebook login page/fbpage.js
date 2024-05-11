$(document).ready(function(){
	$("#signup-form").validate({
		rules:{
			fname:{
			    required:true,
			    minlength:4
		    },
		    sname:{
		    	required:true,
		    	minlength:4
		    },
		    mobno:{
		    	required:true,
		    	email:true
		    },
		    paswd:{
		    	minlength:6
		    },
		    day:{
		    	required:true
		    }
		}

	})

		
})
