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

module.exports = {
  setupInput
};