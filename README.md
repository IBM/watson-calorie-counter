# Create a Calorie Counter mobile app using Watson Visual Recognition

In this developer journey, we will create a calorie counter mobile app using Apache Cordova, Node.JS and Watson Visual Recognition.


When the reader has completed this journey, they will understand how to:



Architecture Diagram




## Flow




## With Watson

Want to take your Watson app to the next level? Looking to leverage Watson Brand assets? Join the [With Watson](https://www.ibm.com/watson/with-watson/) program which provides exclusive brand, marketing, and tech resources to amplify and accelerate your Watson embedded commercial solution.

## Included components

* Watson Visual Recognition: Visual Recognition understands the contents of images.Analyze images for scenes, objects, faces, colors, food, and other subjects that can give you insights into your visual content.

* Nutritionix API: The largest verified database of nutrition information.

## Featured Technologies

* Apache Cordova: Apache Cordova is an open-source mobile development framework.

* Node.js: An asynchronous event driven JavaScript runtime, designed to build scalable applications.


## Watch the video




# Server

1. Edit app name,host name and visual recognition service name in server/manifest.yml
2. Push app into Bluemix from path directory by issuing command cf push
 
 
 # Mobile
 
1. Edit APP URL(Bluemix-server-url), APP ID(Nutritionix APP ID) and APP KEY(Nutritionix APP Key) in www/js/index.js

2. Add plugins: 
cordova plugin add org.apache.cordova.camera
cordova plugin add org.apache.cordova.file-transfer

3. Build the app
  cordova build android
  
4. Run the app
  cordova run android
  
  **You can get Nutritionix APP ID & APP Key from https://www.nutritionix.com/**
