function Clock() {
  this.step = 0;
}

Clock.prototype.interval = function(buttonGrid) {
  var self = this;
  var intervalDuration = 1000;
  setInterval(function() {
    self.step === buttonGrid.cols - 1 ? self.step = 0 : self.step++;
    for (i = 0; i < buttonGrid.rows; i++){
     self.play(buttonGrid.buttons[i][self.step]);
    }
  },intervalDuration)
}

Clock.prototype.play = function(button) {
  button.isOn ? playSound(audio, button.frequency, "sine") : null;
}