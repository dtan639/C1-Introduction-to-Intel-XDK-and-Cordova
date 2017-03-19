/*jshint browser:true */
/*global $ */(function()
{
 "use strict";
 /*
   hook up event handlers 
 */
 function register_event_handlers()
 {
    
        /* button  #btnChange */
    $(document).on("click", "#btnChange", function(evt)
    {
        $("#txtGreetings").val("Good Morning!");
         return false;
    });
    
    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
