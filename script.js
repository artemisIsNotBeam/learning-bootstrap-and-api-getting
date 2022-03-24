$(

  function()
  {
    var searchTerm = "Star Wars";
    //console.log("one");
    $.get({

      url: "https://www.omdbapi.com/?i=tt3896198&apikey=740986f0&s="+searchTerm,
      success: function(data,textStatus,jqXHR)
        {
          console.log("hello");
					let Search = data["Search"]
					for (let i=0;i<Search.length;i++){
						let Move = Search[i];
						console.log(Move["Title"]);
						console.log(Move["Year"]);
					}
        },
      error: function()
        {
          alert("There was an error");
        }

      
    }); // End of $.get
  }//end of function
  
);//end of jQuery