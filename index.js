const textToSpeak = document.querySelectorAll('.btn');

const OpenPopup=document.getElementById('togger');
const popup = document.getElementById('popup');
const closeButton = document.getElementById('closePopup');
const textFromInputField=document.getElementById('textArea');
const readButton=document.getElementById('readText');
const voice=document.getElementById('lanaguge');


textToSpeak.forEach((div) => {
    div.addEventListener('click', () => {
    
      const pTag = div.querySelector('p');
      const text = pTag.textContent;
      const utterance = new SpeechSynthesisUtterance(text);
      window.speechSynthesis.speak(utterance);

    });
});
readButton.addEventListener('click',()=>{
  const text=textFromInputField.value;
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang=voice;
  window.speechSynthesis.speak(utterance);
})


OpenPopup.addEventListener('click', () => {
  popup.style.display = 'block';
});

// Close the popup when the close button is clicked
closeButton.addEventListener('click', () => {
  popup.style.display = 'none';
});
