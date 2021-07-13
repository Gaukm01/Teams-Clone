# Teams_Clone
ENGAGE'21 Microsoft Teams clone repository. </br>
Work Distribution : https://docs.google.com/spreadsheets/d/1vg9WSe_C13kTNRIfP7fR_o26OiMy4Cwz0D6M5i8M46s/edit?usp=sharing.

The site is hosted currently on Heroku. Website to access the app: https://friends-corner.netlify.app .

## How to SetUp 
Fork this repository and make a local copy. Then do following changes in the code: </br>
In clinet/src/SocketContext.js, change socket.io to localhost, comment out heroku server, finally it should be like this. </br>
const socket = io('http://localhost:5000'); </br>
//const socket = io('https://video-chat-app-gk.herokuapp.com/');
</br>
### To Deploy
Open Terminal and change directory to your main folder containing the project </br>
Run command : **nodemon start** </br>
This will start the server, and server will start listening at port 5000. </br>
</br>
To start the react app, change directory to client</br>
Using command: **cd client** </br>
Then, Run command: **npm start**</br>
This will deploy the react app, and app will start in the browser in localhost.

</br></br>
</br>
## Basic UI designs
For my App I have thought of the following UIs.
### When opening the webapp
![App_open](https://user-images.githubusercontent.com/60579477/124244567-b4a27b00-db3c-11eb-8936-2aaecf859d42.png) </br>
### While Reciving Call 
![Call_recieve](https://user-images.githubusercontent.com/60579477/124244661-ce43c280-db3c-11eb-9bd9-0eaa7b3b73d3.png) </br>
### Ongoing Call
![Ongoing call](https://user-images.githubusercontent.com/60579477/124244727-e4518300-db3c-11eb-9e54-3b765022b106.png)
</br>
</br>
## Deployment
For making the webapp I am using JavaScript, React, Socket.io and WebRTC. I am using React to make the webApp, and Socket.io and webRTC's simple Peer for the connection between the users.
</br>
### Frontend
Frontend part is kept under _**./client/src**_ folder. 
</br> **App.js** gives the basic outline of the App.</br>
</br> **index.js** is to first load the Connection details and run the App in it.
</br> </br> **SocketCOntext.js** is the main file where all the details regarding the Connection is done. Here we return the function _ContextProvider_ which in turn give us values and functions:  call (contain call details), callAccepted (call Accepted bool), userVideo, myVideo, name, stream (audio & video),me (my details) , callEnded ( call Ended bool), setName( to set our name), callUser (funcction to call someone using their ID), leaveCall and anserCall (functions).</br> This file is called in different components of the App, where we can use the all above details related to the connection or carry out any function.
<br> </br> 
**Components**, this folder conntains _Notification.jsx , Options.jsx_ and _VideoPlayer.jsx_ . These three files used _ContextProvider_ to make the UI's related to the call. </br>
**_Notication.jsx_** contains details of the notification part of the App i.e. gives notification if we are receiving a call and also plays notificaton sound. </br>
**_Options.jsx_** is to add the Options in the app. Option added consits of one fillup to fill my name, one button to copy the ID, and a Call Button. After a call is connected this menu is removed</br>
**_VideoPlayer.jsx_** is the file to add the Video Stream from both sides if permission is given. While call is not ongoing, we have our own feed, but ater we accept the recived call or someone recieve our call, video stream of both parties are available.</br>
**_Permissons.jsx_** controls the Audio & Video ON/OFF button and also End Call button while ongoing call.
**_ChatScreen.jsx_** controls the chat app, it contains functions working on sending and recieving of messages.
</br> </br>
### Backend
Backend server is deployed on _**index.js**_ file. Here we run the backend server at PORT 5000, ten use socket function to initalize different call features. 
### Hosting
I have currently hosted the App using Heroku and Netlify. Heroku is the place where the app is hosted, and netlify is used to host the frontend of the App, to get a working app accessible with the link https://friends-corner.netlify.app .
