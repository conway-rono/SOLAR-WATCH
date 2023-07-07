
const toggleBtn=document.querySelector('#toggle-btn');

function themeChange(){
    let theme=localStorage.getItem("SW_theme");
    if(theme){
        document.body.classList.add(theme);
        toggleBtn.textContent="light_mode";
    }
}
themeChange();

toggleBtn.onclick=()=>{
    document.body.classList.toggle('dark_mode');
    toggleBtn.textContent=toggleBtn.textContent==="dark_mode"?"light_mode":"dark_mode";
    if(toggleBtn.textContent==="dark_mode"){
        localStorage.removeItem("SW_theme");
    }else{
        localStorage.setItem("SW_theme","dark_mode");
    }
    themeChange();
}

document.querySelector("#comments-btn").addEventListener("click",()=>{
    document.querySelector(".comments").classList.toggle('open');
    document.querySelector("#comments-btn").textContent=document.querySelector("#comments-btn").innerText==="comment"?"close":"comment";
})

document.querySelector(".feed").onclick=()=>{
    document.querySelector(".comments").classList.remove('open');
}
