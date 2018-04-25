    // infinity animation
$(document).ready(function(){
    var a =1000;
    function animatiton(){
       $(".circle").animate({top:"10%"},a);
       $(".circle").animate({top:"88%"},a,animatiton); 
    }
   animatiton()
    
   $("#color").change(function(){
        $(".circle").css("backgroundColor",$(this).val())
   });

   $("#back").change(function(){
    $(".main").css("backgroundColor",$(this).val())
   });

   $("#circlepic").blur(function(){
       $(".circle").css("background-image","url("+ $(this).val()+ ")")
   });

   $("#backpic").blur(function(){
    $(".main").css("background-image","url("+ $(this).val()+ ")")
   });

   $("#radius").change(function(){
    $(".circle").css({
        "width": $(this).val()+"px",
        "height": $(this).val()+"px"
    });
   });

   $("#speed").change(function(){
       a=Number($(this).val());
       animatiton();
       $("p").html(a+" ms").fadeIn(1500);  
       })
       $("#speed").blur(function(){
        $("p").fadeOut(1000);
    })

   $(".stop").click(function(){
    $(".circle").stop()
   })

   $(".start").click(function(){
      animatiton();
   })




}) 
