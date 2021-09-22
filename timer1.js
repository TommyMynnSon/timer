const getTimes = () => {
  return (process.argv).splice(2, (process.argv).length).filter(x => Number(x) > 0).map(x => Number(x)).sort();
};

const timer = () => {
  const times = getTimes();

  for (const time of times) {
    setTimeout(() => {
      console.log(`Wake up, ${time} seconds is up!`);
      process.stdout.write('\x07');
    }, (time * 1000));
  }
};

timer();