# Create a calorie counter mobile app using Watson Visual Recognition

In this developer journey, we will create a calorie counter mobile app using Apache Cordova, Node.JS and Watson Visual Recognition.This mobile application analyzes the captured image(food) using Watson Visual Recognition and extracts nutritional information.

![alt text](https://github.com/RiyaMRoy04/CalorieCounterApp/blob/master/images/architecture_diagram.png "Architecture_diagram")

## Flow

1. The user deploys the server application to IBM Bluemix.

2. The user interacts with the Mobile App.

3. When the user captures the image, the server application uses the Watson Visual Recognition service to analyze the images and Nutritionix API to provide nutritional information.

## With Watson

Want to take your Watson app to the next level? Looking to leverage Watson Brand assets? Join the [With Watson](https://www.ibm.com/watson/with-watson/) program which provides exclusive brand, marketing, and tech resources to amplify and accelerate your Watson embedded commercial solution.

## Included components

* Watson Visual Recognition: Visual Recognition understands the contents of images - visual concepts tag the image, find human faces, approximate age and gender, and find similar images in a collection.

* Nutritionix API: The largest verified database of nutrition information.

## Featured Technologies

* Mobile: Systems of engagement are increasingly using mobile technology as the platform for delivery.

* Node.js: An open-source JavaScript run-time environment for executing server-side JavaScript code.


## Prerequisite

* Obtain a Nutritionix API Key: For this project, you'll need an API Key from Nutritionix, so that app can have access to nutritional information of analysed image. Instructions for obtaining a key can be found here(https://developer.nutritionix.com/). Make note of the API key for later use in your mobile application.

## Steps

Use the following steps to deploy the application
- Deploy the Server Application
- Update the Mobile Application
- Run the Mobile Application

### Deploy the Server Application

1. Edit app name,host name and visual recognition service name in server/manifest.yml
2. Push app into Bluemix from path directory by issuing command 
   cf push
 
 ### Update the Mobile Application
 
 1. Edit APP URL(Bluemix-server-url), APP ID(Nutritionix APP ID) and APP KEY(Nutritionix APP Key) in www/js/index.js
 
 ### Run the Mobile Application

1. Add plugins: 

cordova plugin add org.apache.cordova.camera

cordova plugin add org.apache.cordova.file-transfer

2. Build the app

  cordova build android
  
3. Run the app

  cordova run android
 
  ## Sample Output
  
  <img src="images/output1.jpg" width="250">  <img src="images/output2.jpg" width="250">
  
  ## Watch the video
  
  ## Links
  
  
  ## Troubleshooting
  
  ## License
  
  Apache 2.0
  
  
