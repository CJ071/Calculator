let calculation=localStorage.getItem('calculation') || ''
const showCalculation=document.querySelector('.show-calculation')
showCalculation.innerHTML=calculation
function updateCalculation(buttonValue)
{

    if(buttonValue==='Clear')
    {
        calculation=''
        showCalculation.innerHTML=''
    }
    else if(buttonValue==='=')
    {
        calculation=eval(calculation)
    }
    else if(typeof parseInt(buttonValue)==="number"){
        calculation+=buttonValue
    }
    localStorage.setItem('calculation',calculation)
    calculation?showCalculation.innerHTML=calculation:calculation
    console.log(calculation)
}