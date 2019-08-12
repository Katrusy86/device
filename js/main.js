$(document).ready(function(){
  
    $(".fa-search").click(function(){
      $(".main-search, .main-search-name").toggleClass("active");
      $("input[type='text']").focus();
    });
    
  });
