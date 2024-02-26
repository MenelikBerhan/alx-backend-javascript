// read inputs from CLI
process.stdout.write('Welcome to Holberton School, what is your name?\n');
// add event listner to stdin stream for 'readable' event
process.stdin.on('readable', () => {
  // read line (null when EOF is reached. If so 'end' event is triggered next.)
  const name = process.stdin.read();
  if (name !== null) {
    process.stdout.write(`Your name is: ${name}`);
  }
});
// EOF (ctrl+d)
process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
