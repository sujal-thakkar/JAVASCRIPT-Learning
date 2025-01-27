const clock = document.getElementById('clock')
const date = document.querySelector('#date')

setInterval(() => {
  let time = new Date()
  clock.innerHTML = time.toLocaleTimeString()
}, 1000)

let curDate = new Date()
date.innerHTML = curDate.toLocaleDateString('en-IN')