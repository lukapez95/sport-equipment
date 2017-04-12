const express = require('express');
const app = express();
const data = require('./public/data.json');
const service = require('./public/js/services/data-service');

app.use(express.static(__dirname + '/public'));


app.get('/api/data', function (req, res) {
    res.json(data);
});

app.get('/api/item/:id', function (req, res) {
    let id = req.params.id;
    res.json(service.findInJsonById(data, id));
});


app.listen(3000);
