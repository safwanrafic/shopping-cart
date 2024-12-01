function updateCaseCount(isIncrease){
    const countPlus = document.getElementById('item-count');
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
    const totalCost = newCostNumber * 59;
    const presentCost = document.getElementById('total-cost');
    presentCost.innerText = totalCost;
}


document.getElementById('item-plus').addEventListener('click', function(){
    const newCostNumber = updateCaseCount(true);

    updateCaseCost(newCostNumber);

})


document.getElementById('item-minus').addEventListener('click', function(){
    const newCostNumber = updateCaseCount(false);

    updateCaseCost(newCostNumber);

})

