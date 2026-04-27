// counter update

window.onload = function() {
    document.getElementById("all-button-hero").style.backgroundColor = "black";
    document.getElementById("all-button-hero").style.color = "white";
    updateCounter();
};

let firstAllButton = document.getElementById("all-button-hero");
let firstInterviewButton = document.getElementById("interview-button-hero");
let firstRejectButton = document.getElementById("rejected-button-hero");

function resetStyle(){
    const buttons = [ firstAllButton, firstInterviewButton, firstRejectButton];
    buttons.forEach(function(sobBtn){
        if(sobBtn){
            sobBtn.style.backgroundColor = "";
            sobBtn.style.color = "";
        }
    })
}

// all button

firstAllButton.addEventListener("click", function(){
    resetStyle();
    this.style.backgroundColor = "black";
    this.style.color = "white";
});
firstInterviewButton.addEventListener("click", function(){
    resetStyle();
    this.style.backgroundColor = "black";
    this.style.color = "white";
});
firstRejectButton.addEventListener("click", function(){
    resetStyle();
    this.style.backgroundColor = "black";
    this.style.color = "white";
});



// interview button


let interviewBtns = document.querySelectorAll(".interview");
// console.log(interviewBtns.length);

interviewBtns.forEach(function(btn){
    btn.addEventListener("click", function(){
        let card = btn.closest(".card")
        card.dataset.status = "interview";
        card.querySelector(".notApplied").innerText = "Interviewing";
        card.querySelector(".notApplied").className = "notApplied btn bg-green-100 text-green-800 font-bold";
        updateCounter();
    })

    

})



// rejected button

let rejectedBtns = document.querySelectorAll(".rejected");

rejectedBtns.forEach(function(btn){
    btn.addEventListener("click", function(){
        let card = btn.closest(".card");
        card.dataset.status = "rejected"
        card.querySelector(".notApplied").innerText = "Rejected";
        card.querySelector(".notApplied").className = "notApplied btn bg-red-100 text-red-800 font-bold";
        updateCounter();
    })
    
})


// delete button 


let deleteBtns = document.querySelectorAll(".delete");

deleteBtns.forEach(function(btn){

    btn.addEventListener("click", function(){
        let card =btn.closest(".card");
        card.remove();
        updateCounter();
    })
})


