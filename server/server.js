const express = require('express');
const bodyParser = require('body-parser');
const app = express();
//const propertiesDB = require('./controller');
app.use(bodyParser.json())

var propertiesDB = [{
    address: '839 E. 400 S. Provo, UT',
    propertyImg: './img/property.jpg',
    airFilter: 'May 1, 2018',
    id: 1
}, {
    address: '1050 W. 80 E. Lehi, UT',
    propertyImg: "./img/property2.jpg",
    airFilter: 'April 28, 2018',
    id: 2
}];

app.get('/api/properties', function (req, res) {
    res.status(200).send(propertiesDB);
})

app.post('/api/property', (req, res, next) => {
    var myDate = new Date();
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    var month = monthNames[myDate.getMonth()];
    var day = myDate.getUTCDate();
    var year = myDate.getUTCFullYear();
    let newProperty = {
        address: req.body.address,
        airFilter: month + " " + day + ", " + year,
        id: propertiesDB.length + 1
    }
    propertiesDB.push(newProperty);
    res.status(200).send(propertiesDB)
})

app.put('/api/property/:id', (req, res, ) => {
    for (let i = 0; i < propertiesDB.length; i++) {
        if (propertiesDB[i].id == req.params.id) {
            var myDate = new Date();
            const monthNames = ["January", "February", "March", "April", "May", "June",
                "July", "August", "September", "October", "November", "December"
            ];
            var month = monthNames[myDate.getMonth()];
            var day = myDate.getUTCDate();
            var year = myDate.getUTCFullYear();
            propertiesDB[i].airFilter = month + " " + day + ", " + year;
        }
    }
    res.sendStatus(200);
})


app.delete('/api/property/:id', (req, res, ) => {
    for (let i = 0; i < propertiesDB.length; i++) {
        if (propertiesDB[i].id === parseInt(req.params.id)) {
            propertiesDB.splice(i, 1)
        }
    }
    res.sendStatus(200);
})

app.listen(4000, () => console.log("Did someone say port 4000?"));