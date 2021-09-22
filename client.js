// Require net module
const net = require('net');

// Determines what happens depending on keyboard input
const handleUserInput = (key) => {
  if (key === '\u0003') {
    console.log('Disconnecting ...')
    console.log('Successfully disconnected from game server')
    process.exit();
  }
};

// Allows terminal to listen for keyboard input
const setupInput = () => {
  const stdin = process.stdin;

  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();

  stdin.on('data', handleUserInput);

  return stdin;
};

// Establish a connection to the game server
const connect = () => {
  // Establish connection with game server
  const connection = net.createConnection({
    host: '135.23.223.133',
    port: 50542
  });

  // Interpret incoming data as text
  connection.setEncoding('utf8');

  // Handle successful connection event
  connection.on('connect', () => {
    console.log('Successfully connected to game server');
    connection.write('Name: TMS');
  });

  // Handle incoming data
  connection.on('data', (data) => {
    console.log(data);
  });

  return connection;
};

module.exports = {
  connect,
  setupInput
};