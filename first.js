function msg() {
    const error1 = document.querySelector('.f');
    const firstname = document.querySelector('.firstname');
    const error2 = document.querySelector('.l');
    const lastname = document.querySelector('.lastname');
    const error3 = document.querySelector('.e');
    const emailadd = document.querySelector('.emailadd');
    const error4 = document.querySelector('.n');
    const num = document.querySelector('.num');

    if (firstname.value.length === 0) {
        error1.innerHTML = "Empty space"
    } else {
        error1.innerHTML = " "
    }

    if (lastname.value.length === 0) {
        error2.innerHTML = "Empty Space"
    } else {
        error2.innerHTML = " "
    }

    if (emailadd.value.length === 0) {
        error3.innerHTML = "Empty space"
    } else {
        error3.innerHTML = " "
    }

    if (num.value.length === 0) {
        error4.innerHTML = "Empty space"
    } else {
        error4.innerHTML = " "

    }
}