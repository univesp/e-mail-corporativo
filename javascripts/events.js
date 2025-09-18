$(document).ready(function(){

  $(".botao").click(function() {
      $("#conteudo2").show();
      $('html, body').animate({
         scrollTop: $("#conteudo2").offset().top
     }, 1500);
    });
$(".botao2").click(function() {
      $("#conteudo3").show();
      $('html, body').animate({
         scrollTop: $("#conteudo3").offset().top
     }, 1500);
    });

$(".botao3").click(function() {
      $("#conteudo4").show();
      $('html, body').animate({
         scrollTop: $("#conteudo4").offset().top
     }, 1500);
    });

$(".botao4").click(function() {
      $("#conteudo5").show();
      $('html, body').animate({
         scrollTop: $("#conteudo5").offset().top
     }, 1500);
    });

  $(".enviar2").click(function() {
      window.print();
    });

  
   $('.accordion').on('click', '.accordion-control', function(e) {
    e.preventDefault();
    $(".accordion-control").removeClass('active');
    $(this).addClass("active");
    $(this).next('.accordion-panel').not(':animated').slideToggle();
  });

   $('.accordion2').on('click', '.accordion-control2', function(e) {
    e.preventDefault();
    $(".accordion-control2").removeClass('active2');
    $(this).addClass("active2");
    $(this).next('.accordion-panel2').not(':animated').slideToggle();
  });
 
});
