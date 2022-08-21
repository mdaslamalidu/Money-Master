function totalCast(inputId) {
    const castValue = document.getElementById(inputId)
    const castString = castValue.value;
    return parseInt(castString)
}

function getElementValue(inputElement, value) {
    const finalBalance = document.getElementById(inputElement);
    finalBalance.innerText = value;
}


function totalExpense() {
    const foodCast = totalCast('food-cast')
    const rentCast = totalCast('rent-cast')
    const clothCast = totalCast('cloth-cast')
    if(foodCast > 0 && rentCast > 0 && clothCast > 0){
        const finalCast = foodCast + rentCast + clothCast;
        return finalCast;
    }
    return 0;
}



document.getElementById("calculate-btn").addEventListener('click', function () {

    const finalCast = totalExpense();
    const income = totalCast('income');

    if (Number.isNaN(finalCast) && Number.isNaN(income)){
        alert("enter a number")
        return;
    }else if(finalCast > income){
        alert("your income is law")
    }else if (income > 0 && finalCast > 0) {
        const balance = income - finalCast;
        getElementValue('expense', finalCast);
        getElementValue('balance', balance);
    }
    else{
        alert("Enter a positive number")
        return;
    }

})


document.getElementById('save-btn').addEventListener('click', function () {
    const finalCast = totalExpense();
    const income = totalCast('income');
    const balance = income - finalCast;
    const savePercantage = totalCast('percantage')
    
    if(isNaN(savePercantage)){
        alert("Enter a Number")
        return;
    }
    const totalSaveAmount = income * savePercantage / 100;
    if(totalSaveAmount > balance){
        alert("your saving amount is high from main balance")
        return;
    }
    const remainingBalance = balance - totalSaveAmount;
    getElementValue('save-amount', totalSaveAmount);
    getElementValue('remaining-amount', remainingBalance)
})