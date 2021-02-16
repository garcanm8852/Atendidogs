         $(window).resize(function() {
             $("#Resolucion").text();
             $("#Resolucion").text($(window).width() + "");

         });

         $("#AccionadorFundido").click(function() {
             $("#Animacion").animate({
                 opacity: 'toggle',
             });
         });
         $("#AccionadorPersiana").click(function() {
             $("#Animacion").animate({
                 height: 'toggle',
             });
         });