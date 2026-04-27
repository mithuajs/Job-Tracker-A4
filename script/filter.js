// filter buttons


let filterBtns = document.querySelectorAll("[data-filter]");
// const jobDisplay = document.getElementById("job-count-display");
 
filterBtns.forEach(function(btn){
    btn.addEventListener("click", function(){
        let filterValue = btn.dataset.filter ;
        let card = document.querySelectorAll(".card")
        let visibleCardCount = 0 ;

        card.forEach(function(card){
            if(filterValue === "all"){
                
                if(card.dataset.status === "not"){
                    card.style.display = "block";
                    visibleCardCount++;
                } else {
                    card.style.display = "none";
                }
                
            }else{
                if(card.dataset.status === filterValue){
                    card.style.display = "block";
                    visibleCardCount++;
                }
                else{
                    card.style.display = "none";
                }
            }
        });

        const jobDisplaySpan = document.querySelector(".first .totalCount"); 
        if (jobDisplaySpan) {
            jobDisplaySpan.innerText = visibleCardCount;
        }

        const noJobSection = document.getElementById("no-job-available");
        if(visibleCardCount === 0){
            noJobSection.style.display = "block";
        }else {
            noJobSection.style.display = "none";
        }
    })
})

