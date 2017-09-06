# Create a calorie counter mobile app using Watson Visual Recognition

In this developer journey, we will create a calorie counter mobile app using Apache Cordova, Node.JS and Watson Visual Recognition.This mobile application analyzes the captured image(food) using Watson Visual Recognition and extracts nutritional information.

![Architecture Diagram](https://github.com/RiyaMRoy04/CalorieCounterApp/blob/master/images/arch_diagram.png "Architecture_diagram")

## Flow

1. User interacts with the mobile app and captures an image.
    
2. The image is passed to the server application which uses Watson Visual Recognition Service to analyze the images and Nutritionix API to provide nutritional information.
    
3. Data is returned to the mobile app for display.

## With Watson

Want to take your Watson app to the next level? Looking to leverage Watson Brand assets? Join the [With Watson](https://www.ibm.com/watson/with-watson/) program which provides exclusive brand, marketing, and tech resources to amplify and accelerate your Watson embedded commercial solution.

## Included components

* Watson Visual Recognition: Visual Recognition understands the contents of images - visual concepts tag the image, find human faces, approximate age and gender, and find similar images in a collection.

* Nutritionix API: The largest verified database of nutrition information.

## Featured Technologies

* Mobile: Systems of engagement are increasingly using mobile technology as the platform for delivery.

* Node.js: An open-source JavaScript run-time environment for executing server-side JavaScript code.


## Prerequisite

* Obtain a Nutritionix API Key: For this project, you'll need an API Key from Nutritionix, so that app can have access to nutritional information of analysed image. Instructions for obtaining a key can be found [here](https://developer.nutritionix.com/). **Make note of the API key for later use in your mobile application.**

If you haven't so yet, you also need to download and install Node.js and cordova module. Follow steps below to install
 
 1. Download and install [Node.js](https://nodejs.org/en/download/). On installation you should be able to invoke node and npm on your command line.
 
 2. Install the cordova module using npm utility of Node.js. The cordova module will automatically be downloaded by the npm utility. Follow the steps [here](https://cordova.apache.org/docs/en/latest/guide/cli/#installing-the-cordova-cli) to install the corodva module.

## Steps

Use the following steps to deploy the application
- Deploy the Server Application
- Update the Mobile Application
- Run the Mobile Application

### Deploy the Server Application

#### Using the Deploy to Bluemix button
Clicking on the button below creates a Bluemix DevOps Toolchain and deploys this application to Bluemix. The `manifest.yml` file [included in the repo] is parsed to obtain the name of the application, configuration details, and the list of services that should be provisioned. For further details on the structure of the `manifest.yml` file, see the [Cloud Foundry documentation](https://docs.cloudfoundry.org/devguide/deploy-apps/manifest.html#minimal-manifest).

[![Deploy to Bluemix](https://bluemix.net/deploy/button.png)](https://bluemix.net/deploy?repository=https://github.com/RiyaMRoy04/CalorieCounterApp.git)

Once deployment to Bluemix is completed, you can view the deployed application and services from your bluemix account.
**Make note of the URL for later use in mobile application.**
 
 ### Update the Mobile Application
 
 Execute the following command to clone the Git repository:

```bash
git clone https://github.com/RiyaMRoy04/CalorieCounterApp.git
```
Go to the project's root folder on your system and navigate to mobile/www/js/index.js
 
 **Update APP URL -> Bluemix Server URL, APP ID -> Your Nutritionix APP ID and APP KEY -> Your Nutritionix APP Key** 
 
 ### Run the Mobile Application
 
 *All subsequent commands need to be run within the project's directory, or any subdirectories:* 
 
 Here it will be, ``` cd CalorieCounterApp/mobile ```
 
 1. Add the platforms that you want to target your app. We will add the 'android' platform and ensure they get saved to config.xml and package.json.
      ```
      cordova platform add android
      ```
 Check if you satisfy requirements for building the platform [here](https://cordova.apache.org/docs/en/latest/guide/cli/#install-pre-requisites-for-building)
 
 2. For the app to access device-level features, you need to add plugins:
   
      ```
      cordova plugin add cordova-plugin-camera

      cordova plugin add cordova-plugin-file-transfer
      ```
 3. Run the following command to build the project for android platform:
   
      ```
      cordova build android
      ```
 4. Plug the mobile device into your computer and test the app directly by issuing the command
 
      ```
      cordova run android
      ```
 
  ## Sample Output
  
  <img src="images/output1.jpg" width="250">  <img src="images/output2.jpg" width="250">
  
  ## Watch the video
  
  ## Links
  
  
  ## Troubleshooting
  
  ## License
  
  Apache 2.0
  
  
