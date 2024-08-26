let img = document.querySelector('img')
let btn = document.querySelector('button')
btn.addEventListener('click',reload)
function reload(){
    window.location.reload()
}
let url = `https://nekos.best/api/v2/neko`
 fetch(url)
.then((res)=>res.json())
.then((data)=>{
    console.log(data)
    img.src=data.results[0].url
   
})
.catch((err)=>{
    console.log(err)
})