  
  



// Sticky Navbar
let header = document.querySelector('header');
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
 
 
window.addEventListener('scroll', () => {
    header.classList.toggle('shadow', window.scrollY > 0);
});
 
menu.onclick = () => {
    navbar.classList.toggle('active');
}
window.onscroll = () => {
    navbar.classList.remove('active');
}
 
// Dark Mode
let darkmode = document.querySelector('#darkmode');
 
darkmode.onclick = () => {
    if(darkmode.classList.contains('bx-moon')){
        darkmode.classList.replace('bx-moon','bx-sun');
        document.body.classList.add('active');
    }else{
        darkmode.classList.replace('bx-sun','bx-moon');
        document.body.classList.remove('active');
    }
}



// function contshow4(){
//        window.open(href=" https://drive.google.com/uc?export=download&id=1U-Q7IM4qbw90OQSpgbbfruVExkA69Kdo"); 
//         }
//   let my_cont_4=document.querySelector(".RFAL").addEventListener("click",contshow4)








  
document.querySelector('#resume-link-1').addEventListener("click", () => {
    //console.log("OPENinig.....")
    window.location.assign("https://1drv.ms/b/s!AjBmCTc8FZsYi88zsUsj9CLyqms8uA?e=1yenaQ", "_blank");
})

document.querySelector('#resume-link-2').addEventListener("click", () => {
     //console.log("OPENinig.....")
    window.location.assign("https://1drv.ms/b/s!AjBmCTc8FZsYi88zsUsj9CLyqms8uA?e=1yenaQ", "_blank");
})

