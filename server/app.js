var application;

const fs = require('fs');

var watson = require('watson-developer-cloud');
express = require('express');
application = express();
var formidable = require('formidable');
var vcapServices = require("vcap_services");

var credentials = vcapServices.getCredentials('watson_vision_combined');

var visual_recognition = watson.visual_recognition({
    api_key: credentials.api_key,
    version: 'v3',
    version_date: '2016-05-20'
});

application.post('/uploadpic', function(req, result) {
    
   var form = new formidable.IncomingForm();
    form.keepExtensions = true;
    form.parse(req, function(err, fields, files) {
        
       var abc= JSON.parse(JSON.stringify(files));
        var params = {
            image_file: fs.createReadStream(abc.myPhoto.path)
        };
     
    
        visual_recognition.classify(params, function(err, res) {
            
            if (err) {
                    console.log(err);
            } else {
                
                var labelsvr = JSON.parse(JSON.stringify(res)).images[0].classifiers[0];
                result.send({data:labelsvr});
                
            }
            
            });

        });

    });
    
const port = process.env.PORT || process.env.VCAP_APP_PORT || 3000;

application.listen(port, function() {
  console.log('Server running on port: %d', port);
});

