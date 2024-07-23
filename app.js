let btn = document.querySelector(".add");
let inp = document.querySelector("input");
let ull = document.querySelector("ul");

btn.addEventListener("click", function () {
    let activities = document.createElement("li");
    let delb = document.createElement("button");
    delb.innerText="Delete";
    delb.classList.add("del");
    
    activities.innerText = inp.value;
    ull.appendChild(activities);
    activities.appendChild(delb);
    inp.value ="";
});
// let delbtns = document.querySelectorAll(".del");
// for (delbtn of delbtns) {
//     delbtn.addEventListener("click", function() {
//         let clear = this.parentElement;
//         clear.remove();
//     });
//}
// For the above (16-22) it won't work on the new events that we add. 
// To get this out, we use event delegation in which we apply event listening 
// on the child element and then using target property we get same operation on parent element.


ull.addEventListener("click", function (event){
    if (event.target.nodeName == "BUTTON") {      // nodeName is the name on which the target property is used.
        let listItem = event.target.parentElement;
        listItem.remove();
    }

});
