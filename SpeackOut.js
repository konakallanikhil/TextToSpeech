let speech = new SpeechSynthesisUtterance();
let voices = [];
let voiceSelect = document.querySelector("select");

window.speechSynthesis.onvoiceschanged = () => {
  voices = window.speechSynthesis.getVoices();
  speech.voice = voices[0]; // Assign the first voice from the array

  voices.forEach((voice, i) => {
    voiceSelect.options[i] = new Option(voice.name, i);
  });
};

voiceSelect.addEventListener("change", () => {
  speech.voice = voices[voiceSelect.value];
});



document.querySelector("button").addEventListener("click", () => {
  speech.text = document.querySelector("textarea").value;
  window.speechSynthesis.speak(speech);
});
document.addEventListener('DOMContentLoaded', () => {
    const audioPlayer = document.querySelector('.audio-player');
    const audioDisc = document.querySelector('.audio-disc');
  
    audioPlayer.addEventListener('play', () => {
      audioDisc.style.animationPlayState = 'running';
    });
  
    audioPlayer.addEventListener('pause', () => {
      audioDisc.style.animationPlayState = 'paused';
    });
  });




document.addEventListener('DOMContentLoaded', () => {
    const textArea = document.querySelector('.text-area');
    const languageSelect = document.querySelector('.language-select');
    const listenBtn = document.querySelector('.listen-btn');
    const stopBtn = document.querySelector('.stop-btn');
    const audioPlayer = document.querySelector('.audio-player');
  
    listenBtn.addEventListener('click', () => {
      const text = textArea.value.trim();
      const language = languageSelect.value;
  
      if (text !== '') {
        const speech = new SpeechSynthesisUtterance(text);
        speech.lang = language;
        window.speechSynthesis.speak(speech);
        audioPlayer.src = `https://translate.google.com/translate_tts?ie=UTF-8&q=${encodeURIComponent(text)}&tl=${language}&client=tw-ob`;
        audioPlayer.play();
      }
    });
  
    stopBtn.addEventListener('click', () => {
      window.speechSynthesis.cancel();
      audioPlayer.pause();
      audioPlayer.currentTime = 0;
    });
  });
  
