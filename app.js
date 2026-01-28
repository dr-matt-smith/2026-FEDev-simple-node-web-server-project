// file: app.js

const express = require('express')
const app = express()
const port = 3000

const { faker } = require('@faker-js/faker');

// return a response containing "hello world"
function handleRequest(request, response) {
    let fakeEmail = faker.internet.email();
    let pageContent = "hello world";
    pageContent +=  "<hr>";
    pageContent +=  "fake email = <b>" + fakeEmail + "</b>";
    response.send(pageContent)
}

// when request made to root of web server, execute the handleRequest() function
app.get('/', handleRequest);

// run the web server at port 3000
app.listen(port, () => {
    console.log('Server running at http://localhost:' + port);
});