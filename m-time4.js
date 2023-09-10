
let newSystem = 25;
let oldSystem = 24;

setInterval(() => {
  const now = new Date();
  const currentHour = now.getHours() + now.getMinutes() / 60 + now.getSeconds() / 3600;
  const resultingNewHour = currentHour * (newSystem / oldSystem);

  const hours = Math.floor(resultingNewHour);
  const minutes = Math.floor((resultingNewHour - hours) * 60);
  const seconds = Math.floor(((resultingNewHour - hours) * 60 - minutes) * 60);
  console.log(`${hours.toString().padStart(2, '0')} : ${minutes.toString().padStart(2, '0')} : ${seconds.toString().padStart(2, '0')}`);
}, 86400000/newSystem/60/60)

