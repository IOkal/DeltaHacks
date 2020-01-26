//Copyright 2018 Amazon.com, Inc. or its affiliates. All Rights Reserved.
//PDX-License-Identifier: MIT-0 (For details, see https://github.com/awsdocs/amazon-rekognition-developer-guide/blob/master/LICENSE-SAMPLECODE.)

   const AWS = require('aws-sdk')
//    const bucket = 'bucket' // the bucketname without s3://
   const photo  = 'iyad.jpg' // the name of file
   const config = new AWS.Config({
    accessKeyId: 'AKIAUHXLQKOZPEG2XZD6',
    secretAccessKey: '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',
    region: 'us-east-1'
   })
   const client = new AWS.Rekognition(config);
   
   const params = {
    Image: {"S3Object": {
        "Bucket": "dhacks-recognize",
        "Name": "iyad.jpg"
    }},
    //{Bytes: new Buffer.from(fs.readFileSync("./esha.jpg"), 'base64')}, //ArrayBuffer.from('./sampletext.txt')},
    Attributes: ['ALL']
}

   client.detectFaces(params, function(err, response) {
     if (err) {
       console.log(err, err.stack); // an error occurred
     } else {
       console.log(`Detected faces for: ${photo}`)
       for (i=0; i<8; i++){
       response.FaceDetails.forEach(data => {
           if (data.Emotions[i].Type == "CONFUSED"){
            console.log("All other attributes:")
            console.log(`  Emotions[${i}].Type:       ${data.Emotions[i].Type}`)
            console.log(`  Emotions[${i}].Confidence: ${data.Emotions[i].Confidence}`)
            console.log(`  Confidence:             ${data.Confidence}`)
            console.log("------------")
            console.log("")
           }
         else {
            console.log("")
         }
       }) // for response.faceDetails
     }} // if
   });