$(document).ready(function(){
    $(".fa-search").click(function(){
      $(".main-search, .main-search-name,.act-search").toggleClass("active");
      $("input[type='text']").focus();
    });
    
  });
