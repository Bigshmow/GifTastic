// alert("make the Gifs!");

function gifSearch(term){

    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=gx8UOgMleEwf8m4dZ2tJXwNJhSfUR8aD&q=bob+burger+" + term + "&limit=8&offset=0&rating=PG&lang=en";
    
    $.ajax({
        url: queryURL,
      method: "GET"
    }).then(function(response) {
    
        console.log(response);
        $("#gifDiv").empty();

    for (var i = 0 ; i < 8 ; i++){
   
        var gifStill = $("<img>").attr("src", response.data[i].images.fixed_height.url);
        $("#gifDiv").append("<p>" + "Rating: " + response.data[i].rating + "<p>" , gifStill);
    }
    
});
};

    $("#search-button").on("click", function(event) {
        event.preventDefault();
    
        var inputTerm = $("#search-string").val().trim();
    
        gifSearch(inputTerm);
        var newButton = $("<button>").text(inputTerm);
        $("#new-buttons").append(newButton);
      });