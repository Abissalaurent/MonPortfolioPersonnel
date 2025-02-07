const toggleButton = document.getElementById('toggleButton');
    const hiddenText = document.getElementById('hiddenText');

    toggleButton.addEventListener('click', () => {
      if (hiddenText.classList.contains('hidden')) {
        hiddenText.classList.remove('hidden');
        toggleButton.textContent = 'Masquer';
      } else {
        hiddenText.classList.add('hidden');
        toggleButton.textContent = 'Présentation';
      }
    });
