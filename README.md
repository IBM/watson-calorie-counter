# Calorie Counter App using Watson Visual Recognition


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
