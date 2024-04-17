import { io } from 'socket.io-client';

const socket = io('http://localhost:5000'); // URL вашего сервера

export default socket;
