// keydown is a click event for any keys on keyboard pressed
$('body').on('keydown', (event) => {
  // event key match checks for which key is pressed
  var arrowPress = event.key.match(/Arrow(Up|Down|Left|Right)/);
  console.log(arrowPress)
  if (arrowPress) {
    // var direction = arrowPress[1].toLowerCase();
    // SwimTeam.move(direction.toLowerCase());
    getSwimCommand();
  }
});

console.log('Client is running in the browser!');

const serverUrl = 'http://127.0.0.1:3000';
const getSwimCommand = () => {

  $.ajax({
    type: 'GET',
    // data: arrowPress,
    url: serverUrl, // added serve url from above
    // cache: false,
    // contentType: false,
    // processData: false,
    success: (data) => {
      
      SwimTeam.move(data);
      // console.log(data);
      // reload the page
      // window.location = window.location.href;
    },
    fail: () => {
      console.log('fail');
    }

  });
};

