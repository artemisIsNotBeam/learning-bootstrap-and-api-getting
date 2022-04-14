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

						
						$.get({
							url:"https://www.omdbapi.com/?i=tt3896198&apikey=740986f0&i="+moveData[x]["imdb"],

							success: function(moveiDetail,_textStatus,weirdParam	) {
								
							},
							error: function(){
								alert("promblem");
							}	
				

						
						});

						$("#list-view > table > tbody").append("<tr><td><p class='atitle' height=220px>"+movieData[x]["Title"]+"</p></td><td>"+movieData[x]["Year"]+"</td> <td><img width =155px height=200px src="+movieData[x]["Poster"]+"></td></tr>");
					console.log("hi nice code");
					}
        },
      error: function()
        {
          alert("There was an error");
        }

      
    }); // End of $.get
  }//end of function
  
);//end of jQuery

//jQuery for second one
$(

  function()
  {
    var searchTerm = "Star Wars";
    //console.log("one");
    $.get({

      url: "https://www.omdbapi.com/?i=tt3896198&apikey=740986f0&t="+searchTerm,
      success: function(data,textStatus,jqXHR)
        {
          console.log("hello");
					let Search = data["Search"];
					let movieData = Search;
					for (let x=0;x<Search.length;x++){
						$("#advanced-view > table > tbody").append("<tr><td><p class='atitle'>"+movieData[x]["Title"]["Value"]+"</p></td><td>"+movieData[x]+"</td> <td><img width =125px height=200px src="+movieData[x]["Poster"]+"></td><td>"+movieDatat["imdb"]+"</td></tr>");



					}
					console.log(movieData["Rating"]);
        },
      error: function()
        {
          alert("There was an error");
        }

      
    }); // End of $.get
  }//end of function
  
);//end of jQuery