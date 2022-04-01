
let q = document.getElementById('quote')
let btn2 = document.getElementById('btn2')
let btn = document.getElementById('btn')
let list = document.getElementById('list')
let submit = document.getElementById('quotetext')
let form = document.getElementById('form')
let btn3 = document.getElementById('btn3')

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

form.addEventListener('submit', (e) => {
    e.preventDefault() 
    let li = document.createElement('li')
    li.innerText = submit.value
    q.append(li)
    console.log(submit.value)
})

btn3.addEventListener('click', () => {
    let reaction = document.createElement('li')
    reaction.innerText = "Kanye loved that too"
    q.append(reaction)
})


