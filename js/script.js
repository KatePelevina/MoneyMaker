var modal = document.getElementById("my_modal");
var btn = document.getElementById("btn_modal_window");
var span = document.getElementsByClassName("close_modal_window")[0];

btn.onclick = function () {
   modal.style.display = "block";
}

span.onclick = function () {
   modal.style.display = "none";
}

window.onclick = function (event) {
   if (event.target == modal) {
       modal.style.display = "none";
   }
}

$(document).ready(function () {
   $(".klundesaga-title").click(function (e) {
   var klundesagaitem = $(this).attr("data-tab");
   $("#" + klundesagaitem)
   .slideToggle()
   .parent()
   .siblings()
   .find(".klundesaga-content")
   .slideUp();
 
   $(this).toggleClass("active-title");
   $("#" + klundesagaitem)
   .parent()
   .siblings()
   .find(".klundesaga-title")
   .removeClass("active-title");
 
   $("i.fa-chevron-down", this).toggleClass("chevron-top");
   $("#" + klundesagaitem)
   .parent()
   .siblings()
   .find(".klundesaga-title i.fa-chevron-down")
   .removeClass("chevron-top");
   });
   });
