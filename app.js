$( document ).ready(function() {
  $('.ui.card .image').dimmer({on: 'hover'})
  $('.ui.rating').rating({maxRating: 5})
  $('.ui.button').popup()

  $('.button.view').on('click', (function() {
    $('#album').fadeOut('slow', function() {
      $('#album_items').fadeIn('slow')
    })
  }))

  $('.button.back').on('click', (function() {
    $('#album_items').fadeOut('slow', function() {
      $('#album').fadeIn('slow')
    })
  }))

})
