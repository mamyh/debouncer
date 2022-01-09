const btn = document.querySelector('button');

//debounce handler 
function debounce(fn,delay){
    let clearTime;
    return function(){
        
        if(clearTime){
            clearTimeout(clearTime);  
        }
        clearTime =setTimeout(()=>{
            fn()
        },delay);
        
    }
}
//click event fire here
btn.addEventListener('click',debounce(function(){
    console.log('clicked !!');
},1000));