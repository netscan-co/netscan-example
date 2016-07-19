(function() {

  // Initialize the netscan SDK.
  var nets = window.netscan();

  $('form').submit(function (event) {
    event.preventDefault();

    nets.setup({
      // Your personal token goes here. You can find this in your dashboard.
      token: 'mdj39485dhsnwlspair443201mfjdskae',

      data: {
        // Pass the name input field as custom data to the netscan SDK.
        name: $('#name').val(),
      }
    });

    // Hide submit button and show loader just before scanning start.
    $('#start').hide();
    $('.loader').show();
    // Start scanning
    nets.start(function(err, result) {
      // Show, hide and change result link accordingly
      $('.loader').hide();
      $('.result').html(result.url).attr('href', result.url);
      $('.result-wrapper').show();
      $('#start').show();
    });

  })

}());
