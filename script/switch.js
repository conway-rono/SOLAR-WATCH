const hamburgerMenu=document.querySelector('#menu-btn');
const aboutBtn=document.querySelector('#about-btn');

hamburgerMenu.addEventListener('click',()=>{
    hamburgerMenu.style.rotate='45deg';
})
aboutBtn.onclick=()=>{
    document.querySelector('.main').style.display="none";

}