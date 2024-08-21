const smallbox=document.querySelector('.smallbox');
const hr=document.querySelector('.hr');
const min=document.querySelector('.min');
const sec=document.querySelector('.sec');
 
 
const update=function(){
    
const data=new Date();
hr.innerHTML=data.getHours()+"hr";
min.innerHTML=data.getMinutes()+"min";
sec.innerHTML=data.getSeconds()+"sec";
}
update();
setInterval(update,1000);
// const smallbox = document.querySelector('.smallbox');
// const hr = document.querySelector('.hr');
// const min = document.querySelector('.min');
// const sec = document.querySelector('.sec');

// const data = new Date();
// hr.innerHTML = data.getHours();     // Corrected with parentheses and innerHTML
// min.innerHTML = data.getMinutes();  // Corrected with parentheses and innerHTML
// sec.innerHTML = data.getSeconds();  // Corrected with parentheses and innerHTML
