document.addEventListener('DOMContentLoaded', () => {
  const inputs = document.querySelectorAll('.code');

  const updateFocusClass = (input) => {
      inputs.forEach((inp) => inp.classList.remove('focused'));
      input.classList.add('focused');
  };

  inputs.forEach((input, index) => {
      input.addEventListener('input', (e) => {
          const value = e.target.value;
          if (value && index < inputs.length - 1) {
              updateFocusClass(inputs[index + 1]);
              inputs[index + 1].focus();
          }
      });

      input.addEventListener('focus', () => updateFocusClass(input));

      input.addEventListener('keydown', (e) => {
          if (e.key === 'Backspace') {
              if (!input.value && index > 0) {
                  updateFocusClass(inputs[index - 1]);
                  inputs[index - 1].focus();
              }
          }
      });
  });

  // Initialize focus on the first input
  inputs[0].focus();
  updateFocusClass(inputs[0]);
});
