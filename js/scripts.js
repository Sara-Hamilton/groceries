$(document).ready(function(){
  var groceries = [];

  $("#groceryForm").submit(function(event) {
    groceries.push($("input#item1").val());
      $("#groceryForm").trigger("reset");
    console.log(groceries);


    event.preventDefault();


  });
});
