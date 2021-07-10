//backend to run server

const app = require("express")();
const server = require("http").createServer(app);
const cors = require("cors"); 

const io = require("socket.io")(server,{
    cors:{
        origin: "*",
        methods: ["GET", "POST"],
    }
});

app.use(cors());

const PORT = process.env.PORT || 5001; // to work on localhost:5001

// to give message when server starts running
app.get("/",(req, res) => {
    res.send('Server is running.');
});

// using socket fucntions to initialize different call features
io.on("connection",(socket) => {
    socket.emit("me",socket.id);

    // socket.on is used to work with connection
    socket.on("disconnect", () => {
        socket.broadcast.emit("callEnded");
    });
    // to get details of user on other side of call, i.e. it's 
    socket.on("callUser",({ userToCall, signalData, from, name}) =>{
        io.to(userToCall).emit("callUser", { signal: signalData,  from, name });
    });

    // call accepts details
    socket.on("answerCall",(data) => {
        io.to(data.to).emit("callAccepted",data.signal);
    });
});

server.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
