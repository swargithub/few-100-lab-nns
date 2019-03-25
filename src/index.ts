import './styles.css';
console.log('Ready to Party');

document.getElementById('tenPercent').addEventListener('click', function(){
    let amount = (<HTMLInputElement>document.getElementById('amount'));
    let billAmt = parseFloat(amount.value);        

    enableDisableButtons(10);

    document.getElementById('tipPercentageSelected').innerText = "Tip Percentage: 10%";              
    document.getElementById('tipPercentage').innerText = "You are tipping 10%";

    let tipAmount = amountOfTip(parseFloat(amount.value), 10)
    document.getElementById('tipAmount').innerText = 'Amount of tip:$ ' + tipAmount ;

    let totalAmt = totalToBePaid(billAmt, tipAmount);
    document.getElementById('total').innerText = 'Total to be Paid:$ ' + totalAmt;
    
});

document.getElementById('fifteenPercent').addEventListener('click', function(){
    let amount = (<HTMLInputElement>document.getElementById('amount'));
    let billAmt = parseFloat(amount.value);        

    enableDisableButtons(15);
        
    document.getElementById('tipPercentageSelected').innerText = "Tip Percentage: 15%";              
    document.getElementById('tipPercentage').innerText = "You are tipping 15%";

    let tipAmount = amountOfTip(parseFloat(amount.value), 15)
    document.getElementById('tipAmount').innerText = 'Amount of tip:$ ' + tipAmount ;

    let totalAmt = totalToBePaid(billAmt, tipAmount);
    document.getElementById('total').innerText = 'Total to be Paid:$ ' + totalAmt;
});

document.getElementById('twentyPercent').addEventListener('click', function(){
    let amount = (<HTMLInputElement>document.getElementById('amount'));
    let billAmt = parseFloat(amount.value);        
        
    enableDisableButtons(20);        
        
    document.getElementById('tipPercentageSelected').innerText = "Tip Percentage: 20%";              
    document.getElementById('tipPercentage').innerText = "You are tipping 20%";
    
    let tipAmount = amountOfTip(parseFloat(amount.value), 20)
    document.getElementById('tipAmount').innerText = 'Amount of tip:$ ' + tipAmount ;

    let totalAmt = totalToBePaid(billAmt, tipAmount);
    document.getElementById('total').innerText = 'Total to be Paid:$ ' + totalAmt;
});

document.getElementById('amount').addEventListener('input', function(){
    let amount = (<HTMLInputElement>document.getElementById('amount'));
    
    let btn10 = (<HTMLInputElement>document.getElementById('tenPercent'));
    let btn15 = (<HTMLInputElement>document.getElementById('fifteenPercent'));
    let btn20 = (<HTMLInputElement>document.getElementById('twentyPercent'));
    let selectedButton = 10;

    if (btn10.disabled === true)
        selectedButton = 10;
        else if(btn15.disabled === true)
            selectedButton = 15;
            else 
                selectedButton = 20;

    if(!isNaN(parseFloat(amount.value)))
    {
        (<HTMLInputElement>document.getElementById('amount')).style.borderColor = "black";    
        let billAmt = parseFloat(amount.value);
        checkEnteredAmount(billAmt);
        document.getElementById('billAmount').innerText = 'Bill Amount:$ ' + amount.value;
        
        let tipAmount = amountOfTip(parseFloat(amount.value), selectedButton)
        document.getElementById('tipAmount').innerText = 'Amount of tip:$ ' + tipAmount ;

        let totalAmt = totalToBePaid(billAmt, tipAmount);
        document.getElementById('total').innerText = 'Total to be Paid:$ ' + totalAmt;
     
    }
    else 
        checkEnteredAmount(-10);            

});
    
function amountOfTip(amount : number, tipPercentage : number){
    return amount*tipPercentage*0.01;
}

function totalToBePaid(amount: number, tip: number){
    return amount+tip;
}

function checkEnteredAmount(amount: number){                
    if(amount< 0){
        let badInput = (<HTMLInputElement>document.getElementById('amount'));
        badInput.value = '';
        badInput.style.borderColor = "red";
    }
}

function enableDisableButtons(buttonNum:number){
    let btn10 = (<HTMLInputElement>document.getElementById('tenPercent'));
    let btn15 = (<HTMLInputElement>document.getElementById('fifteenPercent'));
    let btn20 = (<HTMLInputElement>document.getElementById('twentyPercent'));

    if(buttonNum === 10)
    {
        btn10.disabled = true;
        btn15.disabled = false;
        btn20.disabled = false;
    }
    if(buttonNum === 15)
    {
        btn10.disabled = false;
        btn15.disabled = true;
        btn20.disabled = false;
    }
    if(buttonNum === 20)
    {
        btn10.disabled = false;
        btn15.disabled = false;
        btn20.disabled = true;
    }
}