$(document).ready(function(){
  var groceries = [];

  $("#groceryForm").submit(function(event) {
    if (($("input#item1").val()) != "") {
      $(groceries.push($("input#item1").val().toUpperCase()));
      };

        var listItems = groceries.sort();
        console.log(listItems);
        $("#groceryForm").trigger("reset");

    console.log(groceries);

    event.preventDefault();
  });
});
