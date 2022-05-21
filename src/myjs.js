$(document).ready(function () {
    $('#mySidenav').attr('style', 'width: 80px');
    $('#main').attr('style', 'margin-left: 80px');
    $('#navdel1').attr('style', 'display: none');
    $('#navdel2').attr('style', 'display: none');
    $('#navdel3').attr('style', 'display: none');
    $('#navdel4').attr('style', 'display: none');
    $('#navdel5').attr('style', 'display: none');
    $('#navdel6').attr('style', 'display: none');
    $('.logo').attr('style', 'padding-left: 100px');
    $('.datepicker').datepicker()
});

$("#mySidenav").hover(function () {
    $('#mySidenav').attr('style', 'width: 250px');
    $('#main').attr('style', 'margin-left: 250px');
    $('#navdel1').delay(290).fadeIn();
    $('#navdel2').delay(290).fadeIn();
    $('#navdel3').delay(290).fadeIn();
    $('#navdel4').delay(290).fadeIn();
    $('#navdel5').delay(290).fadeIn();
    $('#navdel6').delay(290).fadeIn();
    $('.logo').attr('style', 'padding-left: 258px');
    
}, function () {
    $('#mySidenav').attr('style', 'width: 80px');
    $('#main').attr('style', 'margin-left: 80px');
    $('#navdel1').attr('style', 'display: none');
    $('#navdel2').attr('style', 'display: none');
    $('#navdel3').attr('style', 'display: none');
    $('#navdel4').attr('style', 'display: none');
    $('#navdel5').attr('style', 'display: none');
    $('#navdel6').attr('style', 'display: none');
    $('.logo').attr('style', 'padding-left: 100px');
}
);

