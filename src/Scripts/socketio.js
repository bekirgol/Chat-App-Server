const http = require("http");
const app = express();
const server = http.createServer(app);

const socketio = require("socket.io")(server);

module.exports = socketio;
