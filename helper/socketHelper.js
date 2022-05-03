const socket = require("socket.io");
let io;
module.exports = {
  initMethod: (server) => {
    return (io = socket(server));
  },
  getIo: () => {
    if (!io) {
      throw err;
    }
    return io;
  },
};
