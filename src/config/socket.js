import io from 'socket.io-client';

// const socket = io.connect('http://localhost:8080/',{ autoConnect: false }); 
// socket.username = "hello"
// console.log(socket);
// export default socket;
 
export default io.connect('http://localhost:8080/',{ autoConnect: false }); 

