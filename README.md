# Create a calorie counter mobile app using Watson Visual Recognition

In this developer journey, we will create a calorie counter mobile app using Apache Cordova, Node.JS and Watson Visual Recognition.


When the reader has completed this journey, they will understand how to:



![alt text](https://github.com/RiyaMRoy04/CalorieCounterApp/blob/master/images/architecture_diagram.png "Architecture_diagram")

## Flow











## With Watson

Want to take your Watson app to the next level? Looking to leverage Watson Brand assets? Join the [With Watson](https://www.ibm.com/watson/with-watson/) program which provides exclusive brand, marketing, and tech resources to amplify and accelerate your Watson embedded commercial solution.

## Included components

* Watson Visual Recognition: Visual Recognition understands the contents of images - visual concepts tag the image, find human faces, approximate age and gender, and find similar images in a collection.

* Nutritionix API: The largest verified database of nutrition information.

## Featured Technologies

* Mobile: Systems of engagement are increasingly using mobile technology as the platform for delivery.

* Node.js: An open-source JavaScript run-time environment for executing server-side JavaScript code.


## Watch the video





## Steps


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
  
  
  ## Sample Output
  
  ![alt text](https://github.com/RiyaMRoy04/CalorieCounterApp/blob/master/images/output1.jpg "Output1") ![alt text](https://github.com/RiyaMRoy04/CalorieCounterApp/blob/master/images/output2.jpg "Output2") 
  
  
  ## Links
  
  
  
  
  
  
  ## Troubleshooting
  
  
  
  ## License
  
  Apache 2.0
  
  
