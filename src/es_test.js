console.log("WELCOME")

// 기본 Babel만으로 동작
const funcEx = () => {
  alert('arrow')
}

funcEx()

// Promise 등은 Pollyfill을 필요로 한다.
function msgAfterTimeout (msg, who, timeout) {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(`${who}: ${msg}!`), timeout)
    })
}
msgAfterTimeout("First", "James", 100).then((msg) =>
    msgAfterTimeout(msg, "Cool James", 200)
).then((msg) => {
    console.log(`done after 300ms: \n${msg}`)
})