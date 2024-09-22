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
  setTimeout(carousel, 5000); // Change image every 2 seconds
}


const calculator = () => {
    const customervalue = customersInput.value
    const weekValue = weekInput.value

    const overallValue = customervalue * weekValue

    const totalPerYear = overallValue * 50

    if (totalPerYear <=  1500) {
        let overAllTotal = totalPerYear * 0.45
        savingsInput.value = `£${overAllTotal - 100/50}`
    } else {
      let overAllTotal = totalPerYear * 0.35
        savingsInput.value = `£${overAllTotal - 100/50}`
    }
}