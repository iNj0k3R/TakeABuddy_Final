# TakeABuddy_Final
# Build-For-Women-Hackathon
Take A Buddy Website  

**Take A Buddy** is a location-based social networking platform that enables women to connect with other women near them. 

### Technologies & Libraries used
1. Front-End Development 
* HTML
* CSS
* Bootstrap - CSS Framework
* JavaScript
* ejs

2. Back-End Development
* Node js
* Express
* MongoDB
* Mongoose

### How to setup
run the following command on a terminal in the repo `node app.js`
this will start the server on localhost:3000
this app uses the local DB of MongoDB therefore it requires MongoDB to be installed for the database to function
this app cannot show the exact location since our systems are not gps compatible so you need to hardcode the latitude and longitude of a person after you set up their accounts in the DB for the maps to work correctly we intend on solving this problem by porting this project to a mobile based application
Log in using the credentials of a woman to locate all women having a TakeABuddy account in that city on the map

### Problems faced
1. Since we are a team of beginners, implementing backend was tricky as we had to implement maps in our website.
2. Google Maps API was paid hence issues were faced in this aspect.
3. We used leafletjs for the maps, the only issue faced here was the geolocation in the laptop which failed to work, hence we had to accept latitudes and longitudes from the user instead of the name of their location. 
