function remove_fields(link) {
  alert($(link).up(".fields"));
  $(link).previous("input[type=hidden]").value = "1";
  $(link).up(".fields").hide();
}

function add_fields(link, association, content) {
  var new_id = new Date().getTime();
  var regexp = new RegExp("new_" + association, "g")
  $(link).up().insert({
    before: content.replace(regexp, new_id)
  });
}

// jQuery equivalents
// function remove_fields(link) {
//   $(link).prev("input[type=hidden]").val("1");
//   $(link).closest(".fields").hide();
// }
// 
// function add_fields(link, association, content) {
//   var new_id = new Date().getTime();
//   var regexp = new RegExp("new_" + association, "g");
//   $(link).parent().before(content.replace(regexp, new_id));
// }