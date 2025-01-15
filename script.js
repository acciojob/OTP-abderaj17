document.addEventListener('DOMContentLoaded', () => {
  const inputs = document.querySelectorAll('.code');

  inputs.forEach((input, index) => {
      input.addEventListener('input', (e) => {
          const value = e.target.value;
          if (value && index < inputs.length - 1) {
              input.classList.remove('focused'); // Remove 'focused' from the current input
              inputs[index + 1].classList.add('focused'); // Add 'focused' to the next input
              inputs[index + 1].focus();
          }
      });

      input.addEventListener('focus', () => {
          inputs.forEach(inp => inp.classList.remove('focused')); // Clear 'focused' from all inputs
          input.classList.add('focused'); // Add 'focused' to the current input
      });

      input.addEventListener('keydown', (e) => {
          if (e.key === 'Backspace') {
              if (!input.value && index > 0) {
                  input.classList.remove('focused'); // Remove 'focused' from the current input
                  inputs[index - 1].classList.add('focused'); // Add 'focused' to the previous input
                  inputs[index - 1].focus();
              }
          }
      });
  });

  // Set the first input as focused on page load
  inputs[0].classList.add('focused');
  inputs[0].focus();
});
