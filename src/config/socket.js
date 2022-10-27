import io from 'socket.io-client';

// const socket = io.connect('http://localhost:8080/',{ autoConnect: false }); 
// socket.username = "hello"
// console.log(socket);
// export default socket;
 
export default io.connect('http://localhost:8080/',{ autoConnect: false }); 

// export default io.connect('https://0b7a-183-89-154-116.ap.ngrok.io',{ autoConnect: false ,extraHeaders: {
//     ['ngrok-skip-browser-warning']: "*"
//   } }); 


