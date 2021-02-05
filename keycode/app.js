const display = document.getElementById("display")

window.addEventListener('keydown',(e)=>{
    console.log(e);
    const key = e.key;
    const keycode = e.keycode;
    const code = e.code;
    
    display.innerHTML = `
    <div class = "key">
        ${key}
    </div> 
    <div class = "key">
        ${keycode}
    </div>
    <div class ="key">
        ${code}
    </div>`
})