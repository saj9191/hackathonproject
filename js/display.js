var display = function() {
  exports = {};

  var animationCanvas = document.getElementById("animationCanvas");
  var ctx = animationCanvas.getContext("2d");
  ctx.canvas.width = "500";
  ctx.canvas.height = "500"; 

  exports.updateCanvas = function(models) {
    ctx.clearRect(0, 0, animationCanvas.width, animationCanvas.height);
    for (var i = 0; i < models.length; i++) {
      var model = models[i];
      var image = model.getImage();
      var position = model.getPosition();
      var xCoordinate = position.getXCoordinate();
      var yCoordinate = position.getYCoordinate();
      var width = model.getWidth();
      var height = model.getHeight();
      ctx.drawImage(image, xCoordinate, yCoordinate, width, height);
    }
  }

  exports.getCanvas = function() {
    return animationCanvas;
  }

  return exports;
}
