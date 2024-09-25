const customersInput = document.querySelector('#customers');
const weekInput = document.querySelector("#week");
const savingsInput = document.querySelector('#saving');
const statusIndicator = document.querySelector('#statusIndicator');
const audio = document.querySelector("#audio");
const innerRange = document.querySelector('.innerRange');

//SECOND AUDIO
const secondInnerRange = document.querySelector('.secondInnerRange');
const secondStatusIndicator = document.querySelector('#secondStatusIndicator');
const secondAudio = document.querySelector("#secondAudio");


var slideIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) { slideIndex = 1 }
  x[slideIndex - 1].style.display = "block";
  setTimeout(carousel, 5000); // Change image every 2 seconds
}


const calculator = () => {

  if (customersInput.value === '' || weekInput.value === '') {

    return null;

  } else {
    const customervalue = parseFloat(customersInput.value);
    const weekValue = parseFloat(weekInput.value);

    const overallValue = customervalue * weekValue;
    const totalPerYear = overallValue * 50;

    if (totalPerYear <= 1500) {
      let overAllTotal = totalPerYear * 0.45;
      savingsInput.value = `£${(overAllTotal * 50 / 100).toFixed(2)}`;
    } else {
      let overAllTotal = totalPerYear * 0.35;
      savingsInput.value = `£${(overAllTotal * 50 / 100).toFixed(2)}`;
    }
  }
};

let isPlaying = false

statusIndicator.addEventListener('click', () => {
  console.log("clicked");
  if (!isPlaying) {
    isPlaying = true
    statusIndicator.src = './pauseBtn.png'
    audio.play();
    innerRange.classList.add('playing');
  } else {
    isPlaying = false
    statusIndicator.src = './playBtn.png'
    audio.pause()
    innerRange.classList.remove('playing');
  }
});

let secondIsPlaying = false

secondStatusIndicator.addEventListener('click', () => {
  console.log("clicked");
  if (!secondIsPlaying) {
    secondIsPlaying = true
    secondStatusIndicator.src = './pauseBtn.png'
    secondAudio.play();
    secondInnerRange.classList.add('playing');
  } else {
    secondIsPlaying = false
    secondStatusIndicator.src = './playBtn.png'
    secondAudio.pause()
    secondInnerRange.classList.remove('playing');
  }
});