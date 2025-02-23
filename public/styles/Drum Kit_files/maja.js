
for (i=0; i<document.querySelectorAll(".drum").length; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){

        playSound(this.innerHTML);
        playAnimation(this.innerHTML);

    } );  

}
document.addEventListener("keydown", function(event){
    
    playSound(event.key);
    playAnimation(event.key);
}
);


function playSound(button){

    switch (button){
        case 'w':
            
            makeSound("crash");
            break;
    
         case 'a':
            makeSound("kick-bass");
            break;
    
        case 's':
            makeSound("snare");
            break;
     
    
        case 'd':
           makeSound("tom-1");
            break;
    
         case 'j':
            makeSound("tom-2");
            break;
    
        case 'k':
            makeSound("tom-3");
            break;
    
         case 'l':
                makeSound("tom-4");
            break;
       
            default: 
        console.log("nothing selected");
     
    
    }
}

function makeSound (button){

    var sound =new Audio("./sounds/"+button+".mp3");
    sound.play();
  
}
function playAnimation(key){
    document.querySelector("."+key).classList.add("pressed");
    setTimeout(function(){
        document.querySelector("."+key).classList.remove("pressed");

    },800);

}