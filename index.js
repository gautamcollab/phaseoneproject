
let q = document.getElementById('quote')
let btn2 = document.getElementById('btn2')
let btn = document.getElementById('btn')
let list = document.getElementById('list')
let submit = document.getElementById('quotetext')
let form = document.getElementById('form')

btn.addEventListener('click', () => {
    const request = async () => {
        let req = await fetch('https://api.kanye.rest/')
        let res = await req.json()
        console.log(res.quote)
        q.innerText = res.quote    
        q.setAttribute('class','quote')
    }
    request()
})
// btn.addEventListener('click', () => {
//     const request = async () => {
//         let req = await fetch('https://api.kanye.rest/')
//         let res = await req.json()
//         let li = document.createElement('li')
//         li.innerText = res.quote    
//         list.append(li)
//     }
//     request()
// })
form.addEventListener('submit', (e) => {
    e.preventDefault() 
    let h1 = document.createElement('h1')
    h1.innerText = form.value

    console.log(submit.value)
})


