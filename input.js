// Stores the active TCP connection object
let connection;

// Determines what happens depending on keyboard input
const handleUserInput = (key) => {
  if (key === 'w') {
    connection.write('Move: up');
  }

  if (key === 'a') {
    connection.write('Move: left');
  }

  if (key === 's') {
    connection.write('Move: down');
  }

  if (key === 'd') {
    connection.write('Move: right');
  }

  if (key === '\u0003') {
    console.log('Disconnecting ...')
    console.log('Successfully disconnected from game server')
    process.exit();
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