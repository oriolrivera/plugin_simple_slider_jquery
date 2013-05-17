;(function($, window, undefined){

	$.fn.marquesina = function(prev, sig){
		return this.each(function(){
			var $container = $(this).children().eq(0);

			if ($container) {
				var $foto = $container.children();
				var cantidad = $foto.length;
				var incremento = $foto.outerWidth(true);
				var enMarquesina = Math.floor($(this).width() / incremento);
				var primerElemento = 1;
				var estaMoviendo = false;
			};

			$container.css('width', (cantidad + enMarquesina) * incremento);
			for (var i = 0; i < enMarquesina; i++) {
				$container.append($foto.eq(i).clone());
			};

            //boton siguiente
			$(sig).click(function(e){
                  e.preventDefault();

                  if (!estaMoviendo) {
                  	if (primerElemento > cantidad) {
                  		primerElemento = 2;
                  		$container.css('left', '0px');
                  	}else{
                  		primerElemento++;
                  	}

                  	estaMoviendo = true;

                  	$container.animate({
                  		"opacity":"0.5",
                        left: '-=' + incremento,                                      
                  	},500, 'swing', function(){
                         estaMoviendo = false;
                         $container.animate({
                          "opacity":"1",
                         });
                  	});
                  };
			}); //end sig

			// ********auto ratacion*************
			startauto=setInterval(function(){ 
                  
                  if (!estaMoviendo) {
                  	if (primerElemento > cantidad) {
                  		primerElemento = 2;
                  		$container.css('left', '0px');
                  	}else{
                  		primerElemento++;
                  	}

                  	estaMoviendo = true;

                  	$container.animate({
                  		"opacity":"0.7",
                        left: '-=' + incremento,                                      
                  	},500, 'swing', function(){
                         estaMoviendo = false;
                         $container.animate({
                          "opacity":"1",
                         });
                  	});
                  };
                   
			},4500);


			// ********auto ratacion*************

			//boton anterior
				$(prev).click(function(e){
                  e.preventDefault();

                  if (!estaMoviendo) {
                  	if (primerElemento == 1) {
                  		$container.css('left', cantidad * incremento * -1);
                  		primerElemento = cantidad;
                  	}else{
                  		primerElemento--;
                  	}

                  	estaMoviendo = true;
                  	$container.animate({
                      "opacity":"0.5",
                        left: '+=' + incremento,
                  	}, 'swing', function(){
                         estaMoviendo = false;
                         $container.animate({
                          "opacity":"1",
                         });
                  	});
                  };
			}); //end prev


		});
	}
       
})(jQuery, window)