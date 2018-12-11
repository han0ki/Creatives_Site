$('a[href^="#lok2"]').bind('click.smoothscroll',function (e) {
 e.preventDefault();
 
var target = this.hash,
 $target = $(target);
 
$('html, body').stop().animate({
 'scrollTop': $target.offset().top
 }, 1000, 'swing', function () {
 window.location.hash = target;
 });
 });

$('a[href^="#lok3"]').bind('click.smoothscroll',function (e) {
 e.preventDefault();
 
var target = this.hash,
 $target = $(target);
 
$('html, body').stop().animate({
 'scrollTop': $target.offset().top
 }, 1000, 'swing', function () {
 window.location.hash = target;
 });
 });

$('a[href^="#lok4"]').bind('click.smoothscroll',function (e) {
 e.preventDefault();
 
var target = this.hash,
 $target = $(target);
 
$('html, body').stop().animate({
 'scrollTop': $target.offset().top
 }, 2000, 'swing', function () {
 window.location.hash = target;
 });
 });

$('a[href^="#lok5"]').bind('click.smoothscroll',function (e) {
 e.preventDefault();
 
var target = this.hash,
 $target = $(target);
 
$('html, body').stop().animate({
 'scrollTop': $target.offset().top
 }, 2000, 'swing', function () {
 window.location.hash = target;
 });
 });

$('a[href^="#lok6"]').bind('click.smoothscroll',function (e) {
 e.preventDefault();
 
var target = this.hash,
 $target = $(target);
 
$('html, body').stop().animate({
 'scrollTop': $target.offset().top
 }, 1000, 'swing', function () {
 window.location.hash = target;
 });
 });

(function($){
  $(function() {
    $('.menuclass').on('click', function() {
      $(this).closest('.menu').toggleClass('menu_state_open');
    });
  });
})(jQuery);

$(function(){
	$('.Borya11').on('click',event=>{
		$('html, body').animate({scrollTop: 0}, 1000)
	})
})
 
$(function() {
$(window).scroll(function() {
if($(this).scrollTop() != 0) {
$('#naverx').fadeIn();
} else {
$('#naverx').fadeOut();
}
});
$('#naverx').click(function() {
$('body,html').animate({scrollTop:0},1500);
});
});

$(document).ready(function(){
$('.scroll').click(function(){
if($(window).scrollTop()<790){
$('html').animate({scrollTop: 790}, 1500);
}
else {
if($(window).scrollTop()<1820){
$('html').animate({scrollTop: 1820}, 1500);
}
else {
if($(window).scrollTop()< 2995){
$('html').animate({scrollTop: 2995}, 1500);
$(".scroll").css();
}
else {
if($(window).scrollTop()< 3345){
$('html').animate({scrollTop: 3345}, 1500);
}
else{
if($(window).scrollTop()< 4200){
$('html').animate({scrollTop: 4200}, 1500);
}
else{
if($(window).scrollTop()< 5131){
$('html').animate({scrollTop: 5131}, 1500);
}
else{
if($(window).scrollTop()< 6031){
$('html').animate({scrollTop: 6031}, 1500);
}
}
}
}
}
}
}
});

});

