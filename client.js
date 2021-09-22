// Require net module
const net = require('net');

const connect = () => {
  // Establish connection with game server
  const connection = net.createConnection({
    host: '135.23.223.133',
    port: 50542
  });

  // Interpret incoming data as text
  connection.setEncoding('utf8');

  // Handle successful connection even
  connection.on('connect', () => {
    console.log('Successfully connected to game server');
  });

  // Handle incoming data
  connection.on('data', (data) => {
    console.log(data);
  });

  return connection;
};

module.exports = {
  connect
};