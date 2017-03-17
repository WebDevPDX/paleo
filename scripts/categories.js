$('.category-extend').click(function(e) {
  var target = e.target.id;
  // $('.subCat').slideUp();
  $('.' + target).slideToggle();
})

$('.subCat').hide();
