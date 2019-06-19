var movies = [
	{
		title: "the Hangover", rating:"4", haswatched: true
	},
	{
		title: "the Hangover 2", rating:"4.5", haswatched: true
	},
	{
		title: "Baby driver", rating:"4", haswatched: false
	},
	{
		title: "Coco", rating:"3.5", haswatched: true
	}  
]
	movies.forEach(function(movie){
		var result="You have " 
		if (movie.haswatched) {
			result += "watched";
		} else {
			result +="not seen";
		}
		result +="\"" +movie.title + "\" - ";
		result += movie.rating+ " stars";
		console.log(result)
	})

movies.forEach(function(movie){
	var result = "You have "
	if(movie.haswatched) {
		result +="watched";
	} else {
		result += "not seen";
	}
	result +="\"" 
})