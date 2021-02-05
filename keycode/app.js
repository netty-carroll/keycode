const display = document.getElementById("display")

window.addEventListener('keydown',(e)=>{
    console.log(e);
    const key = e.key;
    const keyCode = e.keyCode;
    const code = e.code;
    
    display.innerHTML = `
    <div class = "key">
        ${key}
        <small>event.key</small>
    </div> 
  
        ${code}
       
    </div>
    <div class ="key">
        ${keyCode}
    
    </div>`
})