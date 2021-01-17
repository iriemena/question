
let buttons = document.querySelectorAll(".btn");
let text = document.querySelectorAll(".text");
console.log(text)

// First Option: Traversing the dom

buttons.forEach(function (button) {
  button.addEventListener("click", function (e) {
    let target = e.target.parentElement.parentElement;
    target.classList.toggle("show");

    // To close button when another opens
    text.forEach(function (item) {
      if (item !== target) {
        item.classList.remove("show");

      }
    });
  });
 
});


// //Second option: Selecting element inside element

// text.forEach(function (txt) {   let button =
// txt.querySelector(".btn");   button.addEventListener("click",
// function () {     txt.classList.toggle("show");

//     // To close button when another opens
//     text.forEach(function (item) {
//       if (item !== txt) {
//         item.classList.remove("show");
//       }
//     });
//   });
// });
