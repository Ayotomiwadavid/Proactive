const customersInput = document.querySelector('#customers');
const weekInput = document.querySelector("#week");
const savingsInput = document.querySelector('#saving');


var slideIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1}
  x[slideIndex-1].style.display = "block";
  setTimeout(carousel, 2000); // Change image every 2 seconds
}


const calculator = () => {
    const customervalue = customersInput.value
    const weekValue = weekInput.value

    const overallValue = customervalue * weekValue

    if (overallValue < 1500) {
        savingsInput.value = "40%"
    } else {
        savingsInput.value = "50%"
    }
}