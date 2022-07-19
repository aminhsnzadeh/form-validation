function _auth() {
    let flag = 0
    let _username = document.getElementById('username')
    let _usernameLab = document.querySelector('label[for="username"]>.invalid')
    let _email = document.getElementById('email')
    let _emailLab = document.querySelector('label[for="email"]>.invalid')
    let _password = document.getElementById('password')
    let _passwordLab = document.querySelector('label[for="password"]>.invalid')
    let _passwordCon = document.getElementById('con-password')
    let _passwordLabCon = document.querySelector('label[for="con-password"]>.invalid')
    let _day = document.getElementById('day')
    let _month = document.getElementById('month')
    let _year = document.getElementById('year')
    let _birthLab = document.querySelector('label[for="birth"]>.invalid')
    let _check = document.getElementById('checkterm')
    // username validation
    if (_username.value == '' || _username.value == undefined) {
        _usernameLab.classList.add('invalid-active')
        _username.classList.add('invalid-input')
        flag++
    } else {
        _usernameLab.classList.remove('invalid-active')
        _username.classList.remove('invalid-input')
    }
    // email validation
    if (((_email.value.match(/@/g)) == null) || ((_email.value.match(/@/g).length) != 1) || ((_email.value.search(/@/)) < 3) || ((_email.value.match(/./)) == null) || ((_email.value.match(/./)) >= 2) ) {
        _emailLab.classList.add('invalid-active')
        _email.classList.add('invalid-input')
        flag++
    } else {
        _emailLab.classList.remove('invalid-active')
        _email.classList.remove('invalid-input')
    }
    // password validation
    if((_password.value.search(/[!@#$%^&*()+-_*/]/)) == -1 || _password.value.match(/[0-9]/) < 1 || (_password.value.length <= 8) || _password.value.match(/[a-z]/) < 1 || _password.value.match(/[A-Z]/) < 1) {
        _passwordLab.classList.add('invalid-active')
        _password.classList.add('invalid-input')
        flag++
    } else {
        _passwordLab.classList.remove('invalid-active')
        _password.classList.remove('invalid-input')
    }
    if ( _password.value.match(/[0-9]/) < 1) {
        _passwordLab.innerHTML = 'Must have at least one number'
        flag++
    }  
    if (_password.value.match(/[a-z]/) < 1 || _password.value.match(/[A-Z]/) < 1) {
        _passwordLab.innerHTML = 'Must have one letter uppercase and one lowercase'
        flag++
    } 
    if ((_password.value.length <= 8)) {
        _passwordLab.innerHTML = 'Must be at least 8 charecters'
        flag++
    } 
    // password conforming
    if (_password.value === _passwordCon.value) {
        _passwordLabCon.classList.remove('invalid-active')
        _passwordCon.classList.remove('invalid-input')
    } else {
        _passwordLabCon.classList.add('invalid-active')
        _passwordCon.classList.add('invalid-input')
        flag++
    }
    // birthday validation
    if (_day.value.search(/[a-z]/i) >= 0 || _day.value > 31 || _day.value < 1 || _day.value == '') {
        _birthLab.innerHTML = 'Please correct your Birthday date.'
        _birthLab.classList.add('invalid-active')
        _day.classList.add('invalid-input')
        flag++
    } else {
        _birthLab.classList.remove('invalid-active')
        _day.classList.remove('invalid-input')
    }
    if (_month.value.search(/[a-z]/i) >= 0 || _month.value > 12 || _month.value < 1 || _month.value == '') {
        _birthLab.classList.add('invalid-active')
        _month.classList.add('invalid-input')
        flag++
    } else {
        _birthLab.classList.remove('invalid-active')
        _month.classList.remove('invalid-input')
    }
    if (_year.value.search(/[a-z]/i) >= 0 || _year.value == '' || _year.value < 1900 || _year.value > 2023) {
        _birthLab.classList.add('invalid-active')
        _year.classList.add('invalid-input')
        flag++
    } else {
        _birthLab.classList.remove('invalid-active')
        _year.classList.remove('invalid-input')
    }

    
    if (flag != 0) {
        return false
    }
}
document.getElementById('open-form').addEventListener('click', function() {
    document.getElementById('form').classList.toggle('form-oppening')
})