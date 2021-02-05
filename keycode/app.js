const display = document.getElementById("display")

window.addEventListener('keydown',(e)=>{
    console.log(e);
    const key = e.key;
    const keyCode = e.keyCode;
    const code = e.code;
    
    display.innerHTML = `
    <div class = "key">
        ${key}
    </div> 
    <div class = "key">
        ${keyCode}
    </div>
    <div class ="key">
        ${code}
    </div>`
})