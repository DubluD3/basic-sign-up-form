function passwordValidation() {
    const password = document.getElementById('userPass').value;
    const passwordV = document.getElementById('userPassV').value;
    
    if (password === passwordV) {
        console.log('Correct')
    } else {
        document.getElementById('userPass').style.borderColor = "red"
        document.getElementById('userPassV').style.borderColor = "red"
        document.getElementById('error').textContent = 'Passwords do not match!'
    }
}


let button = document.getElementById('button1');
document.addEventListener('DOMContentLoaded', function () {
    button.addEventListener('click', () => {
        console.log('lol')
        passwordValidation()
    })
});