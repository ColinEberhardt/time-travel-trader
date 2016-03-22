var openfinLauncher = require('openfin-launcher');

openfinLauncher.launchOpenFin({
        configPath: 'http://localhost:3000/app.json'
    })
    .then(function() {
        console.log('success!');
    })
    .fail(function(error) {
        console.log('error!', error);
    });
