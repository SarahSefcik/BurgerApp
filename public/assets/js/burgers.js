// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".change-plain").on("click", function(event) {
    var id = $(this).data("id");
    var newPlain = $(this).data("newplain");

    var newPlainState = {
      plain: newPlain
    };

    // Send the PUT request.
    $.ajax("/api/burgs/" + id, {
      type: "PUT",
      data: newPlainState
    }).then(
      function() {
        console.log("changed plain to", newPlain);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurg = {
      name: $("#ca").val().trim(),
      sleepy: $("[name=plain]:checked").val().trim()
    };

    // Send the POST request.
    $.ajax("/api/burgs", {
      type: "POST",
      data: newBurg
    }).then(
      function() {
        console.log("created new burg");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".delete-burg").on("click", function(event) {
    var id = $(this).data("id");

    // Send the DELETE request.
    $.ajax("/api/burgs/" + id, {
      type: "DELETE"
    }).then(
      function() {
        console.log("deleted burg", id);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});
