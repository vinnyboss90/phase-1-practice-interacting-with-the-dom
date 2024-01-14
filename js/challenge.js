document.addEventListener("DOMContentLoaded", (replaceNumber)=>{
     
    let counterEl = document.getElementById('counter');
    // console.log(counterEl)
    let number = 0;
    let interval = setInterval(() =>  {
      counterEl.innerText =  number++; 
      if(number > 60) {
        clearInterval(interval);
        
      }
    //   console.log(number)
    }, 1000);// repeat every 1 second
 

  
})