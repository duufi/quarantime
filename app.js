var express = require("express"); 
var app = express(); 
var request = require('request'); 

var covid = require('novelcovid'); 
var countries = covid.all();  

app.use(express.static(__dirname + '/public'));

app.set('view engine', 'ejs'); 

app.get('/', function(req, res) {
	res.render('home', ({countries:countries}));
});  

app.get('/numbers', function(req, res){  
	var url = 'https://corona.lmao.ninja/all';
	request(url, function(error, response, body){
		if(!error && response.statusCode == 200){
			var data = JSON.parse(body); 
			res.render('numbers', {data:data}); 
		}
	}); 
}); 

app.listen(process.env.PORT || 3000, process.env.IP, () => {
	console.log("server has started\nWelcome to doNothing\nsee https://quarantime.herokuapp.com/ for permanent home"); 
}); 