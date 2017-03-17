var link, newLink

$('div.image img').mouseenter(function() {
  link = $(this)[0].src
  newLink = link.substring(0, link.length - 4) + 'hover.png'
  $(this)[0].src = newLink
})

$('div.image img').mouseleave(function() {
  $(this)[0].src = link
})
