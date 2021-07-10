import React, { createContext, useState, useRef, useEffect } from 'react';
import  { io } from 'socket.io-client';
import Peer from 'simple-peer';
const queryString = require('querystring');

const SocketContext = createContext();

//const socket = io('http://localhost:5000');
const socket = io('https://video-chat-app-gk.herokuapp.com/');

//ContextProvider is the main function which returns all necessary details ( streams, ids etc.) of the connection.
const ContextProvider = ({ children }) => {
    // intialization and [state,setState] = useState() keeps on updating returning function whenever setState is updated. 
    const meetingSpecs = queryString.parse(window.location.search.substr(1))
    const [stream, setStream] = useState(); // get strem
    const [me, setMe] = useState(''); // my details
    const [call, setCall] = useState({}); // call details
    const [callAccepted, setCallAccepted] = useState(false); // call accepted or not value
    const [callEnded, setCallEnded] = useState(false); // call ended or not value
    const [name, setName] = useState(''); // name

    const myVideo = useRef(); 
    const userVideo = useRef();
    const connectionRef = useRef();

    const [audio, setAudio] = useState(true); // audio stream
    const [video, setVideo] = useState(true); // video stream

    //intialization called once
    useEffect(() => {
        /* for asking video and audio permision*/
        navigator.mediaDevices.getUserMedia({ video, audio })
            .then((currentStream) => {
                setStream(currentStream);
                // getting the video stream at myVideo.
                myVideo.current.srcObject = currentStream;
            });
        // my details
        socket.on('me', (id) => setMe(id));
        // user (person on the 2nd end of connection) details.
        socket.on('callUser', ( {from, name: callerName, signal }) => {
            setCall({isReceivingCall:true, from, name: callerName, signal})
        });
    }, []);

    useEffect(() => {
        // whenever audio, video permissions are toggled then accordingly get the permissions from browser.

        console.log(audio, video,'first', stream);
        if((audio || video) && stream) {
            const audio_track = stream.getAudioTracks();
            console.log(audio_track.length, 'my audio track');
            if(audio_track[0]) audio_track[0].enabled = audio;

            const video_track = stream.getVideoTracks();
            console.log(video_track.length, 'my video track');
            if(video_track[0]) video_track[0].enabled = video;
        }
            
    }, [audio, video]); 

    /*different fucntions of our video call app*/
    const answerCall = () => {
        // if call acepted
        setCallAccepted(true);

        // make a new webRTC peer connection.
        const peer = new Peer({ initiator:false, trickle: false, stream });

        peer.on('signal', (data) =>{
            //get caller details
            socket.emit('answerCall', {signal:data, to: call.from });
        });

        peer.on('stream', (currentStream) => {
            // get user Video stream
            userVideo.current.srcObject = currentStream;
        });

        peer.signal(call.signal);

        connectionRef.current = peer; // to use peer for connection
    };
    
    // to make a call
    const callUser = (id) => {
        
        const peer = new Peer({ initiator:true, trickle: false, stream });

        peer.on('signal', (data) => {
            socket.emit('callUser', {userToCall: id, signalData: data, from: me, name });
        });

        peer.on('stream', (currentStream) => {
            userVideo.current.srcObject = currentStream;
        });

        socket.on('callAccepted', (signal) => {
            setCallAccepted(true);
            peer.signal(signal);
        });
        // connection refrence
        connectionRef.current = peer; 
    };

    // to leave the call
    const leaveCall = () => {
        setCallEnded(true);

        connectionRef.current.destroy();

        window.location.reload();
    };

    // to toggle my video and audio
    const enableVideo = () => {
        setVideo(!video);
    };

    const enableAudio = () => {
        setAudio(!audio);
    };

    return (
        // return all the components including functions and const defined.
        <SocketContext.Provider value= {{
            call,
            callAccepted,
            userVideo,
            myVideo,
            name,
            stream,
            me,
            callEnded,
            meetId: meetingSpecs['id'],
            setName,
            callUser,
            leaveCall,
            answerCall,
            enableAudio,
            enableVideo
        }}
        >

            {children}
        </SocketContext.Provider>
    );
};

export { ContextProvider, SocketContext };