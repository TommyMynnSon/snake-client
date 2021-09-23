const { VALID_INPUTS } = require('./constants');

// Stores the active TCP connection object
let connection;

// Determines what happens depending on keyboard input
const handleUserInput = (key) => {
  if (key === '\u0003') {
    console.log('Disconnecting ...')
    console.log('Successfully disconnected from game server')
    process.exit();
  } else {
    connection.write(VALID_INPUTS[key]);
  }
};

// Allows terminal to listen for keyboard input
const setupInput = (conn) => {
  connection = conn;

  const stdin = process.stdin;

  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();

  stdin.on('data', handleUserInput);

  return stdin;
};

module.exports = {
  setupInput
};