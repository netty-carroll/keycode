const display = document.getElementById("display")

window.addEventListener('keydown',(e)=>{
   // console.log(e);
    const key = e.key;
    const keyCode = e.keyCode;
    const code = e.code;
    
    display.innerHTML = `
    <div class = "key">
        ${key}
        <small>event.key</small>
    </div> 
  <div class ="key">
        ${keyCode}
       <small>event.which</small>
    </div>
    <div class ="key">
        ${code}
    <small>event.code</small>
    </div>`
})