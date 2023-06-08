//This is the lambda function that will be triggered when an image is uploaded to the S3 bucket.
import {S3Client, GetObjectCommand, PutObjectCommand } from '@aws-sdk/client-s3';
import { Response } from 'node-fetch';

// this is the handler that will be called by the lambda function
export const handler = async(event) => {
  // this creates a client connection to S3
  const s3Client = new S3Client({region: 'us-east-1'});

  // these are the params for the GetObjectCommand
  const params = {
    Key: event.Records[0].s3.object.key,
    Bucket: 'images-bucket',
  };

  console.log('new event info', params);

  // this is the data that will be returned to the client
  let data;

  // this is the data that will be stored in the json file
  let imageData = {
    name: event.Records[0].s3.object.key,
    size: `${event.Records[0].s3.object.size} mbytes`,
    type: 'jpg',
  };

  // this is the try catch block that will get the data from the json file
  try {
    // https://stackoverflow.com/questions/36942442/how-to-get-response-from-s3-getobject-in-node-js

    let s3Results = await s3Client.send(new GetObjectCommand(params));
    const response = new Response(s3Results.Body);
    data = await response.json();


  }catch(err){
    console.log('get data Event', JSON.stringify(event, undefined, '  '));
    console.log('get data error', err);
  }

  console.log('this is my data', data);


  try {
    //find image in s3 bucket
    let findImage = data.objects.find((image) => image.name === imageData.name);
    console.log('find image', findImage);
    if (findImage) {
      data.objects[findImage] = imageData;
    } else {
      data.objects.push(imageData);
    }

    // this is updating the json file in the s3 bucket
    const newParams = {
      ...params,
      Body: JSON.stringify(data),
      ContentType: 'application/json',
    };

    //this is the command to update the json file in the s3 bucket
    let news3Results = await s3Client.send(new PutObjectCommand(newParams));
    console.log('new s3 results', news3Results);
    const jsonResponse = new Response(news3Results.Body);
    console.log('new response', jsonResponse);

  } catch (err) {
    console.log('put data Event', JSON.stringify(event, undefined, '  '));
    console.log('put data error', err);
  }


  console.log('this is my data', data);


  const response = {
    statusCode: 200,
    body: data,
  };

  return response;
};


