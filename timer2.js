// The user can press b and it should beep right away
// The user can input any number from 1 to 9 and it should
// immediately output "setting timer for x seconds...", and
// beep after that number of seconds has passed
// The user can use ctrl + c to exit the program, at which point the program should say "Thanks for using me, ciao!" before terminating

const chalk = require('chalk');

const stdin = process.stdin;

stdin.setRawMode(true);
stdin.setEncoding('utf8');

process.stdout.write(chalk.blue('\n******************************\n'));
process.stdout.write('Welcome to Timer2 Terminal App\n');
process.stdout.write(chalk.blue('******************************\n'));
process.stdout.write('- Press b to hear a beep right away\n');
process.stdout.write('- Input a number from 1 to 9 to set a beep timer for that many seconds\n');
process.stdout.write('- Press CTRL+C to exit the program\n\n');
process.stdout.write(chalk.yellow('Action History:\n'));


stdin.on('data', (key) => {
  if (key === 'b') {
    console.log('Pressed ' + chalk.red('b ') + '- beep!');
    process.stdout.write('\x07');
  }

  if (key >= 1 && key <= 9) {
    console.log('setting timer for ' + chalk.red(key) + ' seconds...');

    setTimeout(() => {
      console.log('\tbeep!')
      process.stdout.write('\x07');
    }, (key * 1000));
  }

  if (key === '\u0003') {
    console.log('pressed ' + chalk.red('ctrl+c') + '\n\n\n');
    console.log(chalk.green('Thanks for using me, ciao!'));
    process.exit();
  }
});