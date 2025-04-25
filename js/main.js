                                                     //logo//
function myHeader(){
    let header = document.getElementById("header");
    let lol = document.getElementById("lol");
    window.addEventListener("scroll" , function(){
        if(window.scrollY > 0){
            
            header.classList.add("active")
            lol.src = "images/HPS-corelogo-1-WHITE_875x2012-1.webp";
            // lol.style.filter="grayscale(100%)";
        }
       
        else
        {
            header.classList.remove("active");
            lol.src = "images/HPS-corelogo-1-WHITE_875x201.webp";
            // lol.style.filter="none";
        }
           
        
    })
}
myHeader();





