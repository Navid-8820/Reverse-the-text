function reverseText() {
    const inputText = document.getElementById('inputText').value;
    const reversedText = inputText.split('').reverse().join('');
    document.getElementById('outputText').value = reversedText;
  }
  
  function copyText() {
    const outputText = document.getElementById('outputText').value;
    if (outputText) {
      navigator.clipboard.writeText(outputText).then(() => {
        const copyMessage = document.getElementById('copyMessage');
        copyMessage.classList.remove('hidden');
        copyMessage.style.opacity = '1';
        setTimeout(() => {
          copyMessage.style.opacity = '0';
          setTimeout(() => copyMessage.classList.add('hidden'), 500);
        }, 2000);
      });
    }
  }
  
  function clearText() {
    document.getElementById('inputText').value = '';
    document.getElementById('outputText').value = '';
  }