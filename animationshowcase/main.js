const steps = document.querySelectorAll('.step');
let currentStep = 0;

function showStep(step) {
  steps[currentStep].style.display = 'none';
  steps[step].style.display = 'flex';
  currentStep = step;
}

showStep(currentStep);

document.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowRight') {
    if (currentStep < steps.length - 1) {
      showStep(currentStep + 1);
    }
  } else if (event.key === 'ArrowLeft') {
    if (currentStep > 0) {
      showStep(currentStep - 1);
    }
  }
});
