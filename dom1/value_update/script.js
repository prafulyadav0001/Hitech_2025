let cntValue = document.querySelector('.cntValue');
let reduceBtn = document.querySelector('.reduce');
let updateBtn = document.querySelector('.update');

updateBtn.addEventListener('click',()=>{
    
    cntValue.innerText = parseInt(cntValue.innerText)+1;
})

reduceBtn.addEventListener('click',()=>{
   
    cntValue.innerText = parseInt(cntValue.innerText)-1;
})