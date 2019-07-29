// alert("make the Gifs!");
var term = "linda";

var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=gx8UOgMleEwf8m4dZ2tJXwNJhSfUR8aD&q=bob+burger+" + term + "&limit=8&offset=0&rating=PG&lang=en";
    


    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
    
        console.log(response);
    
    for (var i = 0 ; i < 8 ; i++){
   
        var gifStill = $("<img>").attr("src", response.data[i].images.fixed_height.url);
        
        $("#gifDiv").append(gifStill);
    }

    });