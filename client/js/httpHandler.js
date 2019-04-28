(function() {
  const serverUrl = 'http://127.0.0.1:3000';

  //
  // TODO: build the swim command fetcher here
  //

  /////////////////////////////////////////////////////////////////////
  // The ajax file uplaoder is provided for your convenience!
  // Note: remember to fix the URL below.
  /////////////////////////////////////////////////////////////////////

  const ajaxFileUplaod = (file) => {
    var formData = new FormData();
    formData.append('file', file);
    $.ajax({
      type: 'POST',//changed to get to test jpeg
      data: formData,
      url: serverUrl + '/background.jpg',
      cache: false,
      contentType: false,
      processData: false,
      success: (file) => {
        // reload the page
        window.location = window.location.href;
      }
    });
  };

    // const getSwimCommand = () => {
    //   $.ajax({
    //     type: 'GET',
    //     // data: formData,
    //     url: serverUrl, // added serve url from above
    //     // cache: false,
    //     // contentType: false,
    //     // processData: false,
    //     success: (data) => {
          
    //       SwimTeam.move(data);
    //       console.log(data);
    //       // reload the page
    //       // window.location = window.location.href;
    //     },
    //     fail: () => {
    //       console.log('fail');
    //     }

    //   });
    // };
    // setInterval(getSwimCommand, 1000);
    

    $('form').on('submit', function(e) {
    e.preventDefault();
    var form = $('form .file')[0];
    if (form.files.length === 0) {
      console.log('No file selected!');
      return;
    }

    var file = form.files[0];
    if (file.type !== 'image/jpeg') {
      console.log('Not a jpg file!');
      return;
    }

    ajaxFileUplaod(file);
  });

})();
