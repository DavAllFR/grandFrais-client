import { io, Socket } from "socket.io-client";

class SocketIOService {
  socket!: Socket;
  constructor() {}

  setupSocketConnection() {
    this.socket = io(import.meta.env.VITE_SOCKET_ENDPOINT);
  }
}

export default new SocketIOService();
