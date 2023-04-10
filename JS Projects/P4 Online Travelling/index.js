console.log('hello i am meet');
const username = document.getElementById('username');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
let validUser = false;
let validEmail = false;
let validPhone = false;
$('#failure').hide();
$('#success').hide();


// console.log(username, email, phone);

username.addEventListener('blur', () => {
    console.log('name is blurred');

    // validate name here
    let regex = /^[a-zA-Z]([0-9a-zA-Z]){2,10}$/
    let str = username.value;
    console.log(regex, str);
    if (regex.test(str)) {
        console.log("Your username is valid");
        username.classList.remove('is-invalid');
        validUser = true;

    }
    else {
        console.log("Your username is not valid");
        username.classList.add('is-invalid')
        validUser = false;
    }
})
email.addEventListener('blur', () => {
    console.log('email is blurred');
    // validate email here
    let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/
    let str = email.value;
    console.log(regex, str);
    if (regex.test(str)) {
        console.log("Your email is valid");
        email.classList.remove('is-invalid');
        validEmail = true;

    }
    else {
        console.log("Your email is not valid");
        email.classList.add('is-invalid')
        validEmail = false;
    }
})
phone.addEventListener('blur', () => {
    console.log('phone is blurred');
    // validate phone here
    let regex = /^([0-9]){10}$/
    let str = phone.value;
    console.log(regex, str);
    if (regex.test(str)) {
        console.log("Your phone is valid");
        phone.classList.remove('is-invalid');
        validPhone = true;

    }
    else {
        console.log("Your phone is not valid");
        phone.classList.add('is-invalid')
        validPhone = false;
    }
})

let submit = document.getElementById('submit');
submit.addEventListener('click', (e) => {
    e.preventDefault();

    console.log("clicked");

    // submit your form here
    if (validUser && validEmail && validPhone) {
        let failure = document.getElementById('failure');
        console.log('Username, Email and form are valid. submitting the form');
        let success = document.getElementById('success');
        success.classList.add('show');
        // failure.classList.remove('show');
        $('#failure').hide();
        $('#success').show();
    }
    else {
        console.log('one of Username, Email or form are not valid.please correct the errors and try again');
        let failure = document.getElementById('failure');
        failure.classList.add('show');
        // success.classList.remove('show');
        $('#success').hide();
        $('#failure').show();


    }

})