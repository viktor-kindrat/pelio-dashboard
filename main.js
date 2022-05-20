let burgerTrigger = 0;
let accountTrigger = 0;
let loginStatus = localStorage.getItem('loginStatus') || 'guest';
let users = JSON.parse(localStorage.getItem('users')) || [];
let getClassNameFromStatus;
$('.formWrap').fadeOut(0);
$('.form__login').fadeOut(0);
let formDate = document.getElementById('formDate');
formDate.max = new Date().toISOString().split("T")[0];
let userImage = '';
let alphabet = [];
let actualUser = localStorage.getItem('actualUser') || {}

for (let i = 0; i !== 225; i++) {
    alphabet.push(String.fromCharCode(i));
}

function chiper(password, n = 3) {
    let chiperPasswoed = '';
    for (let i = 0; i !== password.length; i++) {
        let currentIndex = alphabet.indexOf(password[i]);
        if (currentIndex + n <= alphabet.length - 1) {
            currentIndex += n;
            chiperPasswoed += alphabet[currentIndex]
        } else {
            chiperPasswoed += alphabet[n - (alphabet.length - currentIndex)]
        }
    }
    return chiperPasswoed
}

getClassNameFromStatus = (stat) => {
    if (stat === 'guest') {
        return ' header__account-row_active header__account-row__guest'
    } else if (stat === 'login') {
        return ' header__account-row_active header__account-row__login'
    }
};

if (loginStatus === 'guest') {
    fetch ('https://randomuser.me/api/')
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            $('.header__user-name').html(data.results[0].name.first + ' ' + data.results[0].name.last + ' (Guest)');
            $('.header__email').html(data.results[0].email);
            $('.header__account-avatar').css({
                'background': 'url("' + data.results[0].picture.large + '") no-repeat center',
                'backgroundSize': 'cover'
            })
            userImage = data.results[0].picture.large;
        });
} else {
    $('.header__user-name').html(actualUser.firstName + ' ' + actualUser.lastName);
    $('.header__email').html(actualUser.email);
    $('.header__account-avatar').css({
        'background': 'url("' + actualUser.image + '") no-repeat center',
        'backgroundSize': 'cover'
    })
}

$('#form__login-btn').click(function () {
    let loginCandidate = {
        login: $('#form__logUser').val(),
        password: chiper($('#form__logPassword').val(), 10)
    }
    let noncomplete = true;
    for (let i = 0; i !== users.length; i++) {
        if (users[i].username === loginCandidate.login || users[i].email === loginCandidate.login) {
            if (users[i].password === loginCandidate.password) {
                alert('Hello ' + users[i].firstName + ' ' + users[i].lastName);
                noncomplete = false;

                localStorage.setItem('loginStatus', loginStatus);

                $('#form__logUser').val('');
                $('#form__logPassword').val('');
                $('.form__logo').click();
                setChart1(users[i].data1);
                setChart2(users[i].data2);
                $('.header__user-name').html(actualUser.firstName + ' ' + actualUser.lastName);
                $('.header__email').html(actualUser.email);
                $('.header__account-avatar').css({
                    'background': 'url("' + actualUser.image + '") no-repeat center',
                    'backgroundSize': 'cover'
                })


                loginStatus = 'login';
                actualUser = users[i];
                localStorage.setItem('actualUser', actualUser);
            } else {
                alert('Password is incorrect');
            }
        }
    }
    if (noncomplete) {
        alert(`Cant find this user \nPlease check your login`);
    }
})

$('#form__register-btn').click(function () {
    let genData1 = [];
    for (let i=0; i!==5; i++) {
        genData1.push(Math.round(Math.random() * (100 - 20) + 20));
    }
    let genData2 = [];
    for (let i=0; i!==5; i++) {
        genData2.push(Math.round(Math.random() * (100 - 20) + 20));
    }
    let userCandidate = {
        firstName : $('#form__regFirstName').val(),
        lastName : $('#form__regLastName').val(),
        username : $('#form__regUsername').val().toLowerCase(),
        email : $('#form__regEmail').val(),
        birthDate : $('#formDate').val(),
        password : chiper($('#form__regPassword').val(), 10),
        image : userImage,
        data1: genData1,
        data2: genData2
    }
    let passwordConfirm = chiper($('#form__regPasswordConfirm').val(), 10);
    let elements = $('.form__input');
    let isThereAnEmptyValues = false;
    for (let i = 0; i !== elements.length - 2; i++){
        if (elements[i].value === '') {
            isThereAnEmptyValues = true;
        }
    }
    if (!isThereAnEmptyValues && userCandidate.password.length >= 8) {
        if (userCandidate.password === passwordConfirm) {
            $('#form__regFirstName').val('');
            $('#form__regLastName').val('');
            $('#form__regUsername').val('');
            $('#form__regEmail').val('');
            $('#formDate').val('');
            $('#form__regPassword').val('');
            $('#form__regPasswordConfirm').val('');
            userImage = '';
            users.push(userCandidate);
            localStorage.setItem('users', JSON.stringify(users));
            alert('Registered successfully');
            $('#form__goToLogin').click();
        } else {
            alert('Passwords do not match')
        }
    } else {
        alert('Something went wrong! \nPlease, check all inputs and try again')
    }
    console.log(isThereAnEmptyValues)
})

$('.balance').mouseenter(function() {
    $(".balance").css({
        'background': 'linear-gradient(247.35deg, #936DFF 0%, #3ED1FF 100%)',
        'animation': 'blick 0.3s ease-out'
    });
    $('.balance__circle').css('display', 'block');
    $('.balance').mouseleave(function() {})
    setTimeout(() => {
        $('.balance').css('animation', 'none');
    }, 299);
});
$(`.balance`).mouseleave(function() {
    $('.balance').css({
        'background': '#171B1E',
        'animation': 'blick 0.3s ease-out'
    });
    $('.balance__circle').css('display', 'none');
    setTimeout(() => {
        $('.balance').css('animation', 'none');
    }, 299);
});
$('.transactions__pagination-item').click(function() {
    $('.transactions__pagination-item').attr('class', 'transactions__pagination-item')
    $(this).attr('class', 'transactions__pagination-item transactions__pagination-item_active')
})
$('.aside__menu-item').click(function() {
    $('.aside__menu-item').attr('class', 'aside__menu-item');
    $(this).attr('class', 'aside__menu-item aside__menu-item_active')
});
$('#header__burger').click(function() {
    let elements = document.getElementsByClassName('header__line');
    if (burgerTrigger === 0) {
        elements[0].style.top = '8px';
        elements[2].style.bottom = '8px';
        burgerTrigger = 1;
        if (document.documentElement.clientWidth < 900) {
            $('.aside').css('left', '0');
            $('.header__burger').css('left', '90%')
            $('body').css('overflow', 'hidden')
        } else {
            $('.aside').css('left', '0');
            $('.header__burger').css('left', '290px')
        }
    } else {
        elements[0].style.top = '0';
        elements[2].style.bottom = '0';
        burgerTrigger = 0;
        $('body').css('overflow', 'auto')
        if (document.documentElement.clientWidth < 900) {
            $('.aside').css('left', '-100%');
            $('.header__burger').css('left', '25px')
        } else {
            $('.aside').css('left', '-100%');
            $('.header__burger').css('left', '50px')
        }
    }
})
$('.header__account-group-1').click(function () {
    if (accountTrigger === 0) {
        $('.header__account-row').attr('class', 'header__account-row' + getClassNameFromStatus(loginStatus));
        accountTrigger = 1;
    } else {
        $('.header__account-row').attr('class', 'header__account-row');
        accountTrigger = 0;
    }
});
$('#header__loginBtn').click(function () {
    $('.formWrap').fadeIn(300);
    $('#wrap').fadeOut(300)
})
$('#form__goToLogin').click(function (){
    $('.form__register').fadeOut(300);
    $('.form__login').fadeIn(300);
});
$('#form__goToRegister').click(function () {
    $('.form__register').fadeIn(300);
    $('.form__login').fadeOut(300);
})
$('.form__logo').click(function () {
    $('.formWrap').fadeOut(300);
    $('.header__account-row').attr('class', 'header__account-row');
    $('input').val('')
    $('#wrap').fadeIn(300);
})