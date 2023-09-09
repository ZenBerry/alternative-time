const now = new Date();
let h = now.getHours();
let m = now.getMinutes();
let s = now.getSeconds()+2;
let newMs = 960;

setInterval(() => {
  console.log(`${h}: ${m}: ${s}`);
  s += 1;
  if (s > 59) {
    s = 0;
    m += 1;
    if (m > 59) {
      m = 0;
      h += 1;
      if (h > 25) {
        h = 0;
      }
    }
  }
}, newMs)
