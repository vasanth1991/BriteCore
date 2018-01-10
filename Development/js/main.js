 $(document).ready(function() {

            $("#in").click(function(){
               $(".target").fadeIn( '300', function(){ 
                  $(".log").text('Fade In Transition Complete');
               });
            });

            $("#out").click(function(){
               $(".target").fadeOut( '300', function(){ 
                  $(".log").text('Fade Out Transition Complete');
               });
            });


             $("#add").click(function(){
               $(".target").fadeOut( '300', function(){
                  $(".log").text('Fade Out Transition Complete');
               });
            });
        

             $("#add").click(function(){
               $(".dp").fadeIn( '300', function(){
                  $(".log").text('Fade Out Transition Complete');
               });
            });
        


         });