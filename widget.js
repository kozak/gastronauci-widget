
 jQuery(function () {

// Opcjonalne: bo pewnie macie własne funkcje do pisania/czytania cookies - trzeba ja podmienic w skrypcie dialogu nizej
     function createCookie(name,value,days) {
         if (days) {
             var date = new Date();
             date.setTime(date.getTime()+(days*24*60*60*1000));
             var expires = "; expires="+date.toGMTString();
         }
         else var expires = "";
         document.cookie = name+"="+value+expires+"; path=/";
     }

     function readCookie(name) {
         var nameEQ = name + "=";
         var ca = document.cookie.split(';');
         for(var i=0;i < ca.length;i++) {
             var c = ca[i];
             while (c.charAt(0)==' ') c = c.substring(1,c.length);
             if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
         }
         return null;
     }

// Pokazuje dialog gdy nie ma dialogu Stoliczku, a klient nie widzial dialogu Skubacza
     var $ = jQuery;
     if ($("#stoliczku-reservation").length == 0) {
         var val = readCookie("shown-skubacz-dialog");
         if (val == null) {
             var order_online = $("#skubacz_popup");
             order_online.faceBox({className: 'stoliczku'});
             order_online.find(".no").bind("click", function () {
                 $(document).trigger("close.facebox");
             });
             createCookie("shown-skubacz-dialog", "yes", 60);
         }
     }
// Opcjonalne: Ustawia zakraglenia buttona gdy przycisk Stoliczku tez jest okragly
     if ($("a.stoliczku.rounded").length == 1) {
         $(".btn-skubacz").addClass("btn-rounded");
     }

 });
