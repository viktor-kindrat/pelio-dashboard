let burgerTrigger = 0;
let accountTrigger = 0;
fetch ('https://randomuser.me/api/')
.then((response) => {
        return response.json();
    })
.then((data) => {
        $('.header__user-name').html(data.results[0].name.first + ' ' + data.results[0].name.last + ' (Guest)');
        $('.header__email').html(data.results[0].email);
        $('.header__account-avatar').css({
            'background': 'url("' + data.results[0].picture.large + '") no-repeat center',
            'backgroundSize': 'cover'
        })
        console.log(data);

    });
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
        $('.header__account-row').attr('class', $('.header__account-row').attr('class') + ' header__account-row_active');
        accountTrigger = 1;
    } else {
        $('.header__account-row').attr('class', 'header__account-row');
        accountTrigger = 0;
    }
})