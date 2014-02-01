var move = function() {
  exports = {};

  var collidesWithCanvas = function(position, width, height) {
    var canvas = display.getCanvas();
    var xCoordinate = position.getXCoordinate();
    var yCoordinate = position.getYCoordinate();
    return (xCoordinate < 0 || (xCoordinate + width) >= canvas.width ||
        yCoordinate < 0 || (yCoordinate + height) >= canvas.height)
  }

  // Detects if "bounding boxes" for images collide"
  // http://stackoverflow.com/questions/306316/determine-if-two-rectangles-overlap-each-other
  var modelsCollide = function(model1, model2) {
    var position1 = model1.getPosition();
    var position2 = model2.getPosition();

    var left1 = position1.x;
    var top1 = position1.y;
    var right1 = left1 + model1.getWidth();
    var bottom1 = top1 + model1.getHeight();

    var left2 = position2.x;
    var top2 = position2.y;
    var right2 = left2 + model2.getWidth();
    var bottom2 = top2 + model2.getHeight();

    return (left1 < right2 && right1 > left2 && top1 < bottom2 && bottom1 > top2);
  }

  var updatePositionAndVelocity = function(model, initial_position) {
      model.setPosition(initial_position);
      model.setVelocity(model.getVelocity().multipleByScalar(-1));
  }

  // Moves each model forward one timestep
  exports.step = function(display, models, dt) {
    for (var i = 0; i < models.length; i++) {
      var model = models[i];
      var initial_position = model.getPosition();
      model.stepPosition(dt);
      if (collidesWithCanvas(model.getPosition(), model.getWidth(), model.getHeight())) {
        // Collision so we can't keep moving forward
        updatePositionAndVelocity(model, initial_position);
     }
      // Check if model collides with another model
      for (var j = 0; j < models.length; j++) {
        if (i != j) {
          if (modelsCollide(model, models[j])) {
            updatePositionAndVelocity(model, initial_position);
          }
        }
      }
    }
    display.updateCanvas(models);
    setTimeout(function() { exports.step(display, models, dt); }, dt);
  }
  return exports;
}
