// alert("it's working!");

// let actors = document.querySelectorAll(".hamlet");
 
// console.log(actors);
 
// function myAlert(){
   // alert("I'm clicked!");

// }

let spans = document.querySelectorAll("#play span");

console.log(spans);

for(const mySpan of spans){
    mySpan.addEventListener('click', function(ev){
        highlightActor(mySpan.dataset.actor);
    });
    // alert(mySpan.dataset.actor);
    }

function highlightActor(actor){
    //alert("The current actor is: " + actor);
    for(const mySpan of spans){
    if (actor == mySpan.dataset.actor){
        mySpan.style.backgroundColor='yellow';
    }else{
        mySpan.style.backgroundColor='white';
    }
    }
}

