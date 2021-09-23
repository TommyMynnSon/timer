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

let timerCount = 0;

stdin.on('data', (key) => {
  if (key === 'b') {
    console.log('pressed ' + chalk.red('b') + ' - beep!');
    process.stdout.write('\x07');
  }

  if (key >= 1 && key <= 9) {
    timerCount++;

    const currentTimer = timerCount;

    console.log('setting timer #' + currentTimer + ' for ' + chalk.red(key) + ' seconds...');

    setTimeout(() => {
      console.log('\ttimer #' + currentTimer + ' - beep!');
      process.stdout.write('\x07');
    }, (key * 1000));
  }

  if (key === '\u0003') {
    console.log('pressed ' + chalk.red('ctrl+c') + '\n\n\n');
    console.log(chalk.green('Thanks for using me, ciao!'));
    process.exit();
  }
});