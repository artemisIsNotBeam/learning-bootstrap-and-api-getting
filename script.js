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
					let Search = data["Search"];
					let movieData = Search;
					for (let x=0;x<Search.length;x++){
						$("#list-view > table > tbody").append("<tr><td><p class='atitle'>"+movieData[x]["Title"]+"</p></td><td>"+movieData[x]["Year"]+"</td> <td><img width =125px height=200px src="+movieData[x]["Poster"]+"></td></tr>");

					}
        },
      error: function()
        {
          alert("There was an error");
        }

      
    }); // End of $.get
  }//end of function
  
);//end of jQuery