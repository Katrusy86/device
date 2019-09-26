$( function() {
  $( "#slider-range" ).slider({
    range: true,
    min: 0,
    max: 10000,
    values: [ 0, 5000 ],
    step:100,
    slide: function( event, ui ) {
      $("#price").val(ui.values[0]);
      $("#price2").val(ui.values[1]);
    }
  });

  $("#price").val($('#slider-range').slider("values",0));
  $("#price2").val($('#slider-range').slider("values",1));
  
});