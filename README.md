# Teams_Clone
ENGAGE'21 Microsoft Teams clone repository.

The site is hosted currently on Heroku. Website to access the app: https://video-chat-app-gk.netlify.app .
</br>
## Basic UI designs
For my App I have thought of the following UIs.
### When opening the webapp
![App_open](https://user-images.githubusercontent.com/60579477/124244567-b4a27b00-db3c-11eb-8936-2aaecf859d42.png)
### While Reciving Call 
![Call_recieve](https://user-images.githubusercontent.com/60579477/124244661-ce43c280-db3c-11eb-9bd9-0eaa7b3b73d3.png)
###Ongoing Call
![Ongoing call](https://user-images.githubusercontent.com/60579477/124244727-e4518300-db3c-11eb-9e54-3b765022b106.png)
</br>
</br>
## Deployment
For making the webapp I am using JavaScript, React, Socket.io and WebRTC. I am using React to make the webApp, and Socket.io and webRTC's simple Peer for the connection between the users.

###Frontend
Frontend part is kept under ./client/src folder. 
</br> **App.js** gives the basic outline of the App.
</br> **index.js** is to first load the Connection details and run the App in it.
</br> **SocketCOntext.js** is the main file where all the details regarding the Connection is done. Here we return the function _ContextProvider_ which in turn give us values and functions:  call (contain call details), callAccepted (call Accepted bool), userVideo, myVideo, name, stream (audio & video),me (my details) , callEnded ( call Ended bool), setName( to set our name), callUser (funcction to call someone using their ID), leaveCall and anserCall (functions).</br> This file is called in different components of the App, where we can use the all above details related to the connection or carry out any function.
<br> **Components**, this folder conntains _Notification.jsx , Options.jsx_ and _VideoPlayer.jsx_ . These three files used _ContextProvider_ to make buttons related to the call
