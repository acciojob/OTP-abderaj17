//your JS code here. If required.
document.addEventListener('DOMContentLoaded', () => {
    const codes = document.querySelectorAll('.code');
  
    codes.forEach((code, index) => {
      code.addEventListener('input', (e) => {
        if (e.target.value.length > 0 && index < codes.length - 1) {
          codes[index + 1].focus();
        }
      });
  
      code.addEventListener('keydown', (e) => {
        if (e.key === 'Backspace' && e.target.value.length === 0 && index > 0) {
          codes[index - 1].focus();
        }
      });
    });
  });
  