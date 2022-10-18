// let users = [];

// const addUser = (userId, socketId) => {
//   !users.some((user) => user.userId === userId) &&
//     users.push({ userId, socketId });
// };

// const removeUser = (socketId) => {
//   users = users.filter((user) => user.socketId !== socketId);
// };

// const getUser = (userId) => {
//   return users.find((user) => user.userId === userId);
// };

// io.on('connection', (socket) => {
//   console.log(`User Connected: ${socket.id}`);

//   socket.on('addUser', (userId) => {
//     addUser(userId, socket.id);
//     io.emit('getUsers', users);
//   });

//   socket.on('sendMessage', async ({ senderId, receiverId, text }) => {
//     const user = await getUser(receiverId);
//     const newmessage = await Chat.create({
//       chat: text,
//       requestId: senderId,
//       acceptId: receiverId,
//     });

//     io.to(user.socketId).emit('getMessage', {
//       senderId,
//       text,
//     });
//   });

//   socket.on('disconnect', () => {
//     console.log('a user disconnected!');
//     removeUser(socket.id);
//     io.emit('getUsers', users);
//   });

//   // socket.on('join_room', (data) => {
//   //   socket.join(data);
//   //   console.log(User with ID: ${socket.id} joined room: ${data});
//   // });

//   // socket.on('send_message', (data) => {
//   //   console.log(data);
//   //   socket.to(data.room).emit('receive_message', data);
//   // });

//   // socket.on('disconnect', () => {
//   //   console.log('User Disconnected', socket.id);
//   // });
// });

// // const port = process.env.PORT || 8080;
// const port = 8000;
// server.listen(port, () => console.log(server running on port: ${port}));