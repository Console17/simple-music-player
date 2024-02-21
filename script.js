let audioPlayer = document.getElementById("audio-player");
let audioFileInput = document.getElementById("audio-file");
let musicNameElement = document.getElementById("music-name");

function playAudio() {
  let file = audioFileInput.files[0];
  if (file) {
    let url = URL.createObjectURL(file);
    console.log("Generated URL:", url);
    audioPlayer.src = url;
    audioPlayer.play();
    musicNameElement.textContent = file.name.split(".")[0];
  } else {
    alert("Select MP3 file");
  }
}

function pauseAudio() {
  audioPlayer.pause();
}

function rewindAudio() {
  audioPlayer.currentTime -= 5;
}

function forwardAudio() {
  audioPlayer.currentTime += 5;
}
