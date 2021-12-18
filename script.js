$(document).ready(function() {

  var x, y;

  $(".cards").click(function(e) {
    if (e.target.innerText == 'x') {
      e.target.parentElement.parentElement.remove();

    } else if(e.target.className == 'card-body') {
      $('#notes-modal-edit').modal('show');

      $("#notes_title_edit").val(e.target.children[1].innerText);
      $("#notes_itself_edit").val(e.target.children[2].innerText);

      x = e.target.children[1];
      y = e.target.children[2];

    }
    e.stopPropagation();
    e.preventDefault();
  });

const edit_notes_button = document.getElementById("edit-notes-button");

  edit_notes_button.addEventListener("click", function() {
    var title_edit = $("#notes_title_edit").val();
    var content_edit = $("#notes_itself_edit").val();

    x.innerText = title_edit;
    y.innerText = content_edit;

    $("#notes-modal-edit").modal('hide');

    return true;
  });

  //cara Jquery:
  
  // $("#edit-notes-button").click(function() {
  //   var title_edit = $("#notes_title_edit").val();
  //   var content_edit = $("#notes_itself_edit").val();
  //
  //   x.innerText = title_edit;
  //   y.innerText = content_edit;
  //
  //   $("#notes-modal-edit").modal('hide');
  //
  //   return true;
  // });




  $("#add-notes-button").click(function() {

    var notes_title = $("#notes_title").val();
    var notes_content = $("#notes_itself").val();

    if (notes_title != "" && notes_content != "") {
      $(".cards").append("<div class='card mx-1 my-2' style='width: 18rem;'><div class='card-body'><p class='close-button'>x</p><h5 class='card-title'>"+ notes_title +"</h5><p>"+ notes_content +"</p></div></div>");

      $("#notes_title").val("");
      $("#notes_itself").val("");


    } else {
      alert("Isikan data dengan benar!");
    }

  });


});
