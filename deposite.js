// step1
document.getElementById('btn-deposit').addEventListener('click',function(){
    // second step
    const depositField=document.getElementById('deposit-field');
    const newDepositAmountString=depositField.value;
    const newDepositAmount=parseFloat(newDepositAmountString);
// 3rd step
const depositTotalElement=document.getElementById('deposit-total');
const previousDepositTotalString=depositTotalElement.innerText;
const previousDepositTotal=parseFloat(previousDepositTotalString)
//  step 4
 const currentDepositTotal=  previousDepositTotal+newDepositAmount;
 depositTotalElement.innerText=currentDepositTotal;
// step 5
const balanceTotalElement=document.getElementById('balance-total');
const previousBalanceTotalString=balanceTotalElement.innerText;
const previousBalanceTotal=parseFloat(previousBalanceTotalString);

// step 6
const currentBalanceTotal=previousBalanceTotal+newDepositAmount;
balanceTotalElement.innerText= currentBalanceTotal;

//  step7
depositField.value='';

}) 