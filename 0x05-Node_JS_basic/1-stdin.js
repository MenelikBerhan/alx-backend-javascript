// read inputs from CLI
const readline = require('readline');

const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

r1.question('Welcome to Holberton School, what is your name?\n', (name) => {
  process.stdout.write(`Your name is: ${name}\n`);
  // if (!process.stdin.isTTY) process.stdout.write('This important software is now closing\n');
  // r1.close();
});
