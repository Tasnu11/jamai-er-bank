document.getElementById('btn-submit').addEventListener('click',function(){

    const emailField=document.getElementById('user-email');
    const email=emailField.value;
    // console.log(email);
    const passwordField=document.getElementById('user-password');
    const password=passwordField.value;
    // console.log(password);
    if(email==='ami@tmi.com' && password ==='something'){
        window.location.href='bank.html'
    }
    else{
        alert('invalid user,provide valid one')

    }
})