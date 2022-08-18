// get the email and password when click on submit btn
document.getElementById('submitBtn').addEventListener('click', function () {
    const useremail = document.getElementById('userEmail');//get email field
    const emailValue = useremail.value;//get email value
    console.log(emailValue);

    const userpassword = document.getElementById('userPassword');//get password field
    const passwordValue = userpassword.value;//get password value
    console.log(passwordValue);

    // DANGER: !!!DO NOT CHECK VALIDITY IN THIS WAY!!!
    // check validity
    if (emailValue === 'ami@tumi.com' && passwordValue == 'home') {
        location.href = 'bankInside.html'
    }
    else {
        alert('invalid user')
    }
})