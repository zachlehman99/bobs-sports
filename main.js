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

// function todayDate() {
//   const date = new Date();
//   const printedDate = new Array(7);
//   printedDate[0] = "Sunday 11:00am-6:00pm"
//   printedDate[1] = "Monday 10:00am-9:00pm"
//   printedDate[2] = "Sunday 10:00am-9:00pm"
//   printedDate[3] = "Sunday 10:00am-9:00pm"
//   printedDate[4] = "Sunday 10:00am-9:00pm"
//   printedDate[5] = "Sunday 10:00am-9:00pm"
//   printedDate[6] = "Sunday 10:00am-9:00pm"
//   const stringDate = weekday[date.getDay()];
//   document.getElementById("realDate").innerHTML = printedDate;
// }
