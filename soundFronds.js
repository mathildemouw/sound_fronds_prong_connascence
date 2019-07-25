window.onload = function () {
  console.log("setting soundID");
  soundID = "Ace";
  loadSound ();
};

function loadSound () {
  console.log("inside loadSound");
  createjs.Sound.registerSound("assets/Ace Hotel 2.m4a", soundID);
};

function playSong () {
  console.log("inside playSound");
  createjs.Sound.play(soundID);
};

function playSound () {

};
