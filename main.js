fetch('https://randomuser.me/api/')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        $('.header__user-name').html(data.results[0].name.first + ' ' + data.results[0].name.last);
        $('.header__email').html(data.results[0].email);
        $('.header__account-avatar').css({
            'background': 'url("' + data.results[0].picture.large + '") no-repeat center',
            'backgroundSize': 'cover'
        })
        console.log(data);
    });

$('.balance').mouseover(function() {
    $('.balance').css({
        'background': 'linear-gradient(247.35deg, #936DFF 0%, #3ED1FF 100%)',
        'animation': 'blick 0.3s ease-out'
    });
    $('.balance__circle').css('display', 'block');
    $('.balance').mouseleave(function() {})
    setTimeout(() => {
        $('.balance').css('animation', 'none');
    }, 299);
});
$('.balance').mouseout(function() {
    $('.balance').css({
        'background': '#171B1E',
        'animation': 'blick 0.3s ease-out'
    });
    $('.balance__circle').css('display', 'none');
    setTimeout(() => {
        $('.balance').css('animation', 'none');
    }, 299);
});