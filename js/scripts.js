$(document).ready(function(){
  var groceries = [];

  $("#groceryForm").submit(function(event) {
    if (($("input#item1").val()) != "") {
      $(groceries.push($("input#item1").val().toUpperCase()));
      };

        var listItems = groceries.sort();
        console.log(listItems);
        $("#groceryForm").trigger("reset");

        $("#makeList").unbind('submit').submit(function(event) {
          console.log(listItems);
          listItems.forEach(function(listItem){
            $("#list ul").append("<li>" + listItem + "</li>");
          });
          $("#list").show();
          $("#groceryForm").hide();
          $("#makeList").hide();
          event.preventDefault();
        });


    event.preventDefault();
    return listItems;
  });
});
