function updateCaseCount(isIncrease){
    const countPlus = document.getElementById('phone-item-count');
    const getCountPlus = countPlus.value;
    const finalCountPlus = parseInt(getCountPlus);

    let newCountPlus;

    if(isIncrease == true){
        newCountPlus = finalCountPlus + 1;
    }
    else{
        newCountPlus = finalCountPlus - 1;
    }

    countPlus.value = newCountPlus;

    return newCountPlus;
}

function updateCaseCost(newCostNumber){
    const totalCost = newCostNumber * 1219;
    const presentCost = document.getElementById('phone-total-cost');
    presentCost.innerText = totalCost;

    return totalCost;
}


document.getElementById('phone-item-plus').addEventListener('click', function(){
    const newCostNumber = updateCaseCount(true);

    updateCaseCost(newCostNumber);

})


document.getElementById('phone-item-minus').addEventListener('click', function(){
    const newCostNumber = updateCaseCount(false);

    updateCaseCost(newCostNumber);

})

