
const menu = document .getElementById("menu");
const action = document .getElementById("actions");

menu.addEventListener("click" , ()=>{
hundleMenu();

})

function hundleMenu(){
menu.classList.toggle("is-active");
action.classList.toggle("is-active");
}
 //................................................................................

 const links = document.querySelectorAll(".pointer");
 links.forEach((item)=>{
    item.addEventListener("click",()=>
    {
        let el = document.getElementById(item.getAttribute("data-link"))
        el.scrollIntoView({behavior:"smooth",block:"start"});
    })
 })