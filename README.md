# Teams_Clone
ENGAGE'21 Microsoft Teams clone repository. </br>
Work Distributio(Using Agile Methodology) : https://docs.google.com/spreadsheets/d/1vg9WSe_C13kTNRIfP7fR_o26OiMy4Cwz0D6M5i8M46s/edit?usp=sharing.

This Webapp is develope using ```JavaScript```,  ```React```,  ```Socket.io```, ```WebRTC``` ```Simple-peer```. The web app's server is hosted on Heroku server link: ```https://video-chat-app-gk.herokuapp.com/```. And the App is published on Netlify. Webapp can be accessed using the link: https://friends-corner.netlify.app

## Setup and Installation
### Clone the repo
```$ git clone https://github.com/Gaukm01/Teams-Clone.git```
### For setup run
``` 
    $ npm install
    $ cd client
    $ npm install
```
Now the project is completely installed in your system.

## Start the server and app client
Before starting the server, change the server to localhost 5000 by changing following code snippets in ``` ../client/src/SocketContext.js ``` 
from
```reactjs
    // const socket = io('http://localhost:5000');
    const socket = io('https://video-chat-app-gk.herokuapp.com/');
```
to
```reactjs
    const socket = io('http://localhost:5000');
    // const socket = io('https://video-chat-app-gk.herokuapp.com/');
```
### Starting the server
``` 
    $ node index.js 
```
And then change to client directory and start the app client using following commands:
```
    $ cd client 
    $ npm start
 ```
This will start the app in http://localhost:5000.


## Descritption about Developement

For making the webapp I am using JavaScript, React, Socket.io and WebRTC. I am using React to make the webApp, and Socket.io and webRTC's simple Peer for the connection between the users.

### Frontend
Frontend part is kept under **```../client/src```** folder. </br>
**``App.js``** gives the basic structure of the App. Here we also define the Appbar which contains the title of the App and basic css styles about the app is also fixed here.</br></br> 

**``index.js``** is to first load the Connection details using socketContext and run the App in it.
</br> </br>

**``SocketContext.js``** is the main file where all the details regarding the Connection is done. Here we return the function _ContextProvider_ which in turn give us values and functions:  call (contain call details), callAccepted (call Accepted bool), userVideo, myVideo, name, stream (audio & video),me (my details) , callEnded ( call Ended bool), setName( to set our name), callUser (funcction to call someone using their ID), leaveCall and anserCall (functions), enableAudio, enableVideo (functions to toggle mic and video) .</br> This file is called in different components of the App, where we can use the all above details related to the connection or carry out any function.
<br> </br> 
**``Components``**, this folder conntains _``Notification.jsx`` , ``Options.jsx``, ``Permissions.jsx``, ``ChatScreen.jsx``_ and _``VideoPlayer.jsx``_ . These three files used _``ContextProvider``_ to make the UI's related to the call. </br>
**_```Notication.jsx```_** contains details of the notification part of the App i.e. gives notification if we are receiving a call and also plays notificaton sound while call is incoming.This menu remains only while reciving call.</br>
**_``Options.jsx``_** is to add the Options in the app. Option added consits of one fillup to fill my name, one button to copy the chat Link, button to share link on watsapp, and a Call Button to call on filled ID. After a call is connected this menu is removed.</br>
**_``VideoPlayer.jsx``_** is the file to add the Video Stream from both sides if permission is given. While call is not ongoing, we have our own feed, but ater we accept the recived call or someone recieve our call, video stream of both parties are available.</br>
**_``Permissons.jsx``_** contains details about the Audio & Video ON/OFF toggle buttons and also End Call button while ongoing call.
**_``ChatScreen.jsx``_** controls the chat app, it contains functions working on sending and recieving of messages.
</br> </br>
### Backend
Backend server is deployed on _**``index.js``**_ file. Here we run the backend server at PORT 5000(in local machine), ten use socket functions to initalize different call features. 
### Hosting
I have currently hosted the App's on Heroku. And the app is published on Netlify to get a working app accessible over internet with the link https://friends-corner.netlify.app to allow participants to have a video call with each other.

## Features Added
**1v1 Audio Video Call ** </br>
**Audio & Video Toggle Button before and during call ** </br>
**Link Generator** to be shared for calling </br>
**Watsapp Share button** to share the link</br>
**Notification Sound** </br>
**Chat messages** 

## Guide to use the App
### Start the App
Start the App by opening the app via the link https://friends-corner.netlify.app.</br>
And allow audio video permission when browser asks for permission.
### Make a call
First you can change audio or video permission usinng the button provided as per your convinence. </br>
Fill the ID of the friend, you want to call. And press ``Call`` button.
### Sharing link
You can even copy the link using ```Copy Link``` Button and share it. Or Click ```Share On Button``` to shre the link via Watsapp.</br>
Ask your friend to open the link. ID to call will get filled by your ID. Ask him to Call by clicking ```Call``` button.
### Ongoing Call
You can switch on/off your video or audio one at a time using the toggle button. </br>
Use the chating app to send messages. type your message and press the send icon. 
### End Call
To end the call press the red End Call Icon button. The call will be disconnected and the app will restart.


