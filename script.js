// Alert on button clicks

function showPrompt() {
  const name = prompt('😊 Please enter your first name 😊');
  function capitalizeFirstLetter(name) {
    return name.charAt(0).toUpperCase() + name.slice(1);
  };
  alert(`😊 Have a wonderful day ${capitalizeFirstLetter(name)}! 😊`);
};

function showAlert() {
  const myText = "🥰 Thank you so much for visiting! 🥰";
  alert(myText);
};