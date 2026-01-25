const express = require('express')
const app = express()
const port = 3000

const { faker } = require('@faker-js/faker');

function handleRequest(request, response) {
    let fakeEmail = faker.internet.email();
    let pageContent = "hello world";
    pageContent +=  "<hr>";
    pageContent +=  "fake email = <b>" + fakeEmail + "</b>";
    response.send(pageContent)
}

// respond with "hello world" when a GET request is made to the homepage
app.get('/', handleRequest);

app.listen(port, () => {
    console.log('Server running at http://localhost:' + port);
});