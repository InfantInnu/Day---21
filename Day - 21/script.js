var wishes=document.createElement("div");
wishes.className="content";

setTimeout(()=>{
    wishes.innerText="Count-down Starts!!!";
},1000);
setTimeout(()=>{
    wishes.innerText="10";
  },2000);
  setTimeout(()=>{
    wishes.innerText="9"; 
},3000);  
setTimeout(()=>{
    wishes.innerText="8"; 
},4000);  
setTimeout(()=>{
    wishes.innerText="7"; 
},5000);  
setTimeout(()=>{
    wishes.innerText="6"; 
},6000);  
setTimeout(()=>{
    wishes.innerText="5"; 
},7000);  
setTimeout(()=>{
    wishes.innerText="4"; 
},8000); 
setTimeout(()=>{
    wishes.innerText="3"; 
},9000); 
setTimeout(()=>{
    wishes.innerText="2"; 
},10_000); 
setTimeout(()=>{
    wishes.innerText="1"; 
},11_000); 
setTimeout(()=>{
    wishes.innerText="Happy Independence Day!";
},12_000);
document.body.appendChild(wishes);