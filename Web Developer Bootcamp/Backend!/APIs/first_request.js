// const request = require('request');
// request('http://www.google.com', function (error, response, body) {
//   console.error('error:', error); // Print the error if one occurred
//   console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//   console.log('body:', body); // Print the HTML for the Google homepage.
// });

var request = require("request");
request ('https://api.sunrise-sunset.org/json?lat=36.7201600&lng=-4.4203400', function(error, response, body){ 
	if (!error && response.statusCode == 200) {
		var parsedData = JSON.parse(body);
		console.log(parsedData);
	} 
});

//LESSON NOTES: 
//1) we always require "request", then add the url that we're gonna request
//2) then you add your callback function and 3 pieces of information:
//	a. check for an error, check for the status code of the response, and 
//	do something with the body(if there is no error and the status code is 200) 