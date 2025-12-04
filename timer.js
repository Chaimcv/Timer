  let counter=100;
        let out=null;
        var display=document.getElementById("display");
        const playFn=()=>{
           // if(out)
             //   return;
          out= setInterval(()=>{
                 display.innerHTML=counter;
            counter--;
             },1000);    
    }
    
    function stop(){
         clearInterval(out);
         out=null;
         counter=100;
         display.innerHTML=counter;
    }
    function pause(){
        clearInterval(out);
        out=display.innerHTML;

    }