const {UserRoute,ChatRoomRoute,MessageRoute} = require("./src/Routes/index");

const express = require("express");
const http = require("http");
const app = express();
const cors = require("cors");
const server = http.createServer(app);
const swaggerUi = require("swagger-ui-express");
const swaggerJson = require("./swagger.json")
const connectDb = require("./src/Loaders/db");
const io = require("socket.io")(server);

connectDb();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerJson));

io.on("connection", (client) => {
  client.on("test", (data) => {
    console.log(data);
  })
  client.on("login", (data) => {
    console.log(data);
  });

  client.on("create", (room) => {
    console.log(room);
    client.join(room);
    io.sockets.in(room).emit("event", "Odaya birisi katıldı");

    client.on("sendMessage", (data) => {
      io.to(room).emit("message", data);
    });
  });

  client.on("chat-screen", (data) => {
    console.log(data);
  });
});

server.listen(3000, () => {
  console.log("Listening on 3000 port");

  app.use("/users", UserRoute);
  app.use("/rooms", ChatRoomRoute);
  app.use("/messages", MessageRoute);
});
