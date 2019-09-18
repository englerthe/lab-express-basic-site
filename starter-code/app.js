const express = require('express');

const app = express();

app.use(express.static(`public`));

app.get(`/`,(request, response, next) => {
    console.log(request);
    response.sendFile(__dirname + `/views/index.html`);
})

app.get(`/aboutme`, (request, response, next) => {
    response.sendFile(__dirname + `/views/about.html`);
})

app.get(`/gallery`, (request, response, next) => {
    response.sendFile(__dirname + `/views/gallery.html`);
})

app.listen(3000,() => {
    console.log(`Der Server hört auf Port 3000`);
})