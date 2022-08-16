// step1 set event handler
document.getElementById('btn-withdraw').addEventListener('click',function(){
    // step2
    const withdrawField=document.getElementById('withdraw-field');
    const newWithDrawAmountString=withdrawField.value;
    const newWithdrawAmount=parseFloat(newWithDrawAmountString);
     // step7
     withdrawField.value='';


    if(isNaN(newWithdrawAmount)){
        alert('please provide a valid number');
        return;
    }

    // step3
    const withdrawTotalElement=document.getElementById('withdraw-total');
    const previousWithdrawTotalString=withdrawTotalElement.innerText;
    const previousWithdrawTotal=parseFloat(previousWithdrawTotalString);

    

    // 5step
    const balanceTotalElement=document.getElementById('balance-total');
    const previousBalanceTotalString=balanceTotalElement.innerText;
    const previousBalanceTotal=parseFloat(previousBalanceTotalString);
   

    if(newWithdrawAmount>previousBalanceTotal){
        alert('jamair account khali');
        return;
    }
    // step4
    const currentWithdrawTotal= previousWithdrawTotal + newWithdrawAmount;
    withdrawTotalElement.innerText=currentWithdrawTotal;

    // step 6
    const newBalanceTotal=previousBalanceTotal - newWithdrawAmount;
    balanceTotalElement.innerText=newBalanceTotal;

    
})