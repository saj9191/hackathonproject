var move = function() {
  exports = {};

  var isCanvasCollision = function(position, width, height) {
    var canvas = display.getCanvas();
    var xCoordinate = position.getXCoordinate();
    var yCoordinate = position.getYCoordinate();
    return (xCoordinate < 0 || (xCoordinate + width) >= canvas.width ||
        yCoordinate < 0 || (yCoordinate + height) >= canvas.height)
    
  }

  // Moves each model forward one timestep
  exports.step = function(display, models, dt) {
    for (var i = 0; i < models.length; i++) {
      var model = models[i];
      var initial_position = model.getPosition();
      model.stepPosition(dt);
      var new_position = model.getPosition();
      var width = model.getWidth();
      var height = model.getHeight();
      if (isCanvasCollision(new_position, width, height)) {
        // Collision so we can't keep moving forward
        model.setPosition(initial_position);
      }
    }
    display.updateCanvas(models);
    setTimeout(function() { exports.step(display, models, dt); }, dt);
  }
  return exports;
}
