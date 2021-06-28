var weather = require('weather-js');

exports.weather = (req, res) => {
    var city = req.query.city;
    if (!city) {
        res.send(JSON.stringify({ found: false }));
        return;
    }

    weather.find({ search: city, degreeType: 'C' }, function (err, result) {
        if (err) {
            res.send(JSON.stringify({ found: false }));
            console.error(err);
            return;
        }
        if (result.length === 0) {
            res.send(JSON.stringify({ found: false }));
            return;
        }
        res.send(JSON.stringify({ found: true, city: result[0].location.name, temperature: result[0].current.temperature }));
    });
};