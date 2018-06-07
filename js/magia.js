$(document).ready(function(){
	$('.form').on('submit', function(event){
		event.preventDefault();
		var tweet = $('.tweet').val();
		$('.tweet').val('');
		$('.tweet').focus();
		$('.pizarra').prepend(
			'<article class="row">'
			+'<button type="button" class="close eliminar" aria-label="Close" title="Eliminar Tiutt"><span aria-hidden="true">&times;</span></button>'
            +'<div class="panel panel-tweet">'
              +'<div class="panel-body">'
                +'<div class="media">'
                 +'<a class="media-left" href="#">'
                 +'<img class="media-object img-circle pequeno" src="img/avatar.png">'
                  +'</a>'
                  +'<div class="media-body">'
                   +'<h4 class="media-heading"><span class="black">Verde Pez</span> <small>@yo.verdpz</small></h4>'
					+tweet
					+'<ul class="nav nav-pills nav-pills-custom">'   
                      +'<li><a href="#" class="retwittear" title="Retwittear"><i class="fas fa-retweet"></i></a></li>'
                      +'<li><a href="#" title="Me Gusta" class="megusto"><i class="fas fa-heart" ><span> 0</span></i></a></li>'
                      +'<li><a href="#" title ="Enviar DM" class="dm"><i class="far fa-envelope"></i></a></li>'
                      +'<li><a href="#" class="responder" title="Responder"><i class="fas fa-comments"></i></a></li>'
                    +'</ul>'
                  +'</div>'
                +'</div>'
              +'</div>'
            +'</div>'   
          +'</article>');
	});
	$('.pizarra').on('click','.eliminar', function(event){
		event.stopPropagation();
		$(this).parent().fadeOut(700);
	});

	$('.pizarra').on('click', '.megusto', function(){
		var num = parseInt($(this).text())+1;
        $(this).html('<i class="fas fa-heart">'+'<span>'+' '+num+'</span>'+'</i>');    
	});
	$('.pizarra').on('click', '.megusto', function(){
		$(this).addClass('likeable');
	});	


});