const now = new Date();
let s = 0;
let h = 0;
let ms = 0;
let newMs = 960;
console.log(date);

setInterval(() => {
  console.log(`${h}: ${s}: ${ms}`);
  ms+= 1;
  if (ms > 60) {
    ms = 0;
    s += 1;
    if (s > 60) {
      s = 0;
      h +=1;
      if (h > 25) {
        h = 0;
      }
    }
  }
}, newMs);
