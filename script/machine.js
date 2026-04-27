function updateCounter(){

    let allCards = document.querySelectorAll('.card[data-status="not"]');
    
    let interviewCards = document.querySelectorAll('.card[data-status="interview"]');
    let rejectedCards = document.querySelectorAll('.card[data-status="rejected"]'); 




    const elements = document.getElementsByClassName("totalCount");

    for (let el of elements) {
       el.innerText = allCards.length;
    }
    // for (let el2 of elements2) {
    //    el2.innerText = interviewCards.length;
    // }
    


    document.getElementById("interviewCount").innerText =interviewCards.length;
    document.getElementById("rejectCount").innerText= rejectedCards.length;



    const totalExistingCards = document.querySelectorAll(".card").length;
    const noJobSection = document.getElementById("no-job-available");
    if (allCards.length === 0) {
        noJobSection.style.display = "block";
    } else {
        noJobSection.style.display = "none";
    }

}