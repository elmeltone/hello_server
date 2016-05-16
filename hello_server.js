var express = require('express');

var app = express();

app.get('/', function(request, response) {
  response.send("Hello World");
  });

app.get('/:firstname/:lastname', function(request, response) {
    var first = request.params.firstname;
    var last = request.params.lastname;
    response.send(["Hello", first, last].join(" "));
});

app.get('/:firstname/:lastname/:jedi', function(request, response) {
    var first = request.params.firstname;
    var last = request.params.lastname;
    var jediArray = [];
    function getJediName() {
        var firstArray = first.split("");
        var lastArray = last.split("");
        for (var i=0; i<3; i++){
            jediArray.push(lastArray[i])}
        console.log(jediArray);
        for (var i=0; i<2; i++){
            jediArray.push(firstArray[i])}
        console.log(jediArray);
    }
    getJediName();
    var jedi = jediArray.join("");
    //jedi.toString("");
    console.log(jedi);
    response.send(["Hello", jedi].join(" "));
});

app.listen(8080);
