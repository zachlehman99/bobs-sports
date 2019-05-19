// For the add More Merchandise button
let count = 0;
function addMoreMerch() {
  if (count < 7) {
    document.getElementsByTagName("section")[count].removeAttribute("hidden");
  } else {
    let button = document.getElementById('addMore');
    button.parentNode.removeChild(button);
  }
  count += 1;
};
