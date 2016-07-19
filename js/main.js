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

    // Start scanning
    $('#start').hide();
    $('.loader').show();
    nets.start(function(err, result) {
      $('.loader').hide();
      $('.result').html(result.url).attr('href', result.url);
      $('.result-wrapper').show();
      $('#start').show();
    });

  })

}());
