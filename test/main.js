$(function() {

var cnt=0, texts=["'First Quote!' - A Student", "'Second quote!' - A Colleague", "'Third Quote' - An employer"];

// save the texts in an array for re-use
$(".textContent").each(function() {
  texts[cnt++]=$(this).text();
});
function slide() {
  if (cnt>=texts.length) cnt=0;
  $('#textMessage').html(texts[cnt++]);
  $('#textMessage')
    .fadeIn('slow').animate({opacity: 1.0}, 6000).fadeOut('slow',
     function() {
       return slide()
     }
  );
}
slide()

})
