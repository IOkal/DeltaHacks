var NodeWebcam = require( "node-webcam" );

//Default options 
var opts = {
    //Picture related
    width: 1280, 
    height: 720,
    quality: 100,
 
    //Delay in seconds to take shot
    //if the platform supports miliseconds
    //use a float (0.1)
    //Currently only on windows
    delay: 0,
    
    //Save shots in memory 
    saveShots: true,
 
    // [jpeg, png] support varies
    // Webcam.OutputTypes
    output: "jpeg",
 
 
    //Which camera to use
    //Use Webcam.list() for results
    //false for default device
    device: false,
 
    // [location, buffer, base64]
    // Webcam.CallbackReturnTypes
    callbackReturn: "base64",
 
    //Logging
    verbose: false
};
 
 
// //Return type with base 64 image
// var opts = {
//     callbackReturn: "base64"
// };

// function takePhoto(){
let x=0;
while(x<1){
    NodeWebcam.capture( "esha", opts, function( err, data ) {
        var image = "<img src='" + data + "'>";

        if(err) {
            return console.log(err);
        }

        var fs = require('fs');

        fs.writeFile("./sampletext.txt", fs.readFileSync('./esha.jpg', 'base64'), function(err) {
            if(err) {
                return console.log(err);
            }
        });
    });
    x++;

// make the POST req to the API and recieve resp. for .json
// save .json to some local dir
// f.e. pulls .json and visualizes it

}



// while (true) {
//     setTimeout(takePhoto(), 2000);
//     console.log("while loop");
// }
