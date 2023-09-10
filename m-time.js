let now = new Date();
let h = now.getHours();
let m = now.getMinutes();
let s = now.getSeconds();
let ms = now.getMilliseconds();

let newH = now.getHours();
let newM = now.getMinutes();
let newS = now.getSeconds();
let newMs = 960;

if (h === 0 && m === 0 && s === 0 && ms === 0) {
  newH = now.getHours();
  newM = now.getMinutes();
  newS = now.getSeconds();
}

const displayAlternativeTime = () => {
  console.log(`${newH}: ${newM}: ${newS}`);
  newS += 1;
  if (newS > 59) {
    newS = 0;
    newM += 1;
    if (newM > 59) {
      newM = 0;
      newH += 1;
      if (newH > 25) {
        newH = 0;
      }
    }
  }
}

setInterval(displayAlternativeTime, newMs)
