// Function to remove the "playing" class after the transition ends
function removeTransition(e) {
    if (e.propertyName !== "transform") return; // Only act on the transform property
    e.target.classList.remove("playing"); // Remove the "playing" class
}

// Function to play sound and add the visual effect on keydown
function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`); // Select the audio element based on the keyCode
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`); // Select the div element based on the keyCode
    if (!audio) return; // If there's no corresponding audio element, do nothing

    key.classList.add("playing"); // Add the "playing" class to the key
    audio.currentTime = 0; // Rewind the audio to the start
    audio.play(); // Play the audio
}

// Select all the elements with the class 'key' and convert to an array
const keys = Array.from(document.querySelectorAll(".key"));

// Add an event listener to each key to listen for the transition end event
keys.forEach(key => {
    key.addEventListener("transitionend", removeTransition);
});

// Add an event listener to the window to listen for a keydown event
window.addEventListener("keydown", playSound);
