const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Introduce una cadena: ', (input) => {
  const reversed = input.split('').reverse().join('');
  
  console.log(`Cadena invertida: ${reversed}`);
  
  rl.close();
});