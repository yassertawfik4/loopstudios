var button=document.querySelector(".list")
var mainlist=document.querySelector(".mainlist")
var cancelicon=document.querySelector(".cancelicon")

button.addEventListener("click",()=>{
mainlist.classList.add("activeright")
})
cancelicon.addEventListener('click',()=>{
    mainlist.classList.remove('activeright')
})