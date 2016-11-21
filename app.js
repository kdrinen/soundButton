var express = require('express')
var app = express(); //use the express js framework to serve out html files (handle the request and the response on the server)
var server = require('http').Server( app ) //start a server instance on a port
var io = require('socket.io')(server) //use socket.io for real time connections aka. wesockets

var port = process.env.PORT || 8000

server.listen(port, function(){ //set up a server on port 3000, do a callback when it started successfully
  console.log("server started on port" + port);
})

app.use( express.static('public'))

var storedPositions = [true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true];


io.on('connection', function(socket){ //if socket.io sees a new connection, do something with them...
  console.log(socket.id)//prints out the socket that connected (ie. all users + the projection)

    for(i = 0; i <= storedPositions.length;i++){
      var data = { id:i, status:storedPositions[i] }//pull data by comparing storedPosition to idls -al
      io.emit('UDmyStatus', data); //send out the stored positions to all users
    }

  socket.on('getPosition', function(id){ //see if the user updated any positions
    io.emit('GPmyStatus', { id:id, status:storedPositions[id] }); //send out the stored positions to everyone connected.
  })

  socket.on('updateMyStatus',function(data){
    storedPositions[data.id] =  data.status;
    // console.log(storedPositions);
    var newData = { id:data.id, status:storedPositions[data.id] }//when there is an update in positions, update storedPositions
    io.emit('UDmyStatus', newData); //send out the stored positions to everyone connected. Constantly sending data out.

  })

})
