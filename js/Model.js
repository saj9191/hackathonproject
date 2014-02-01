// Information associated with a model in the animation
function Model(name, direction, action, imageLink) {
  this.name = name;
  // Direction the model is moving
  this.direction = direction;
  // What the object is doing (for now let's make the actions
  // stationary or moving
  this.action = action;
  // Link to photo for model
  this.imageLink = imageLink;
}

Model.prototype.getName = function() {
  return this.name;
}

Model.prototype.getDirection = function() {
  return this.direction;
}

Model.prototype.setDirection = function(direction) {
  this.direction = direction;
}

Model.prototype.getAction = function() {
  return this.action;
}

Model.prototype.getImageLink = function() {
  return this.imageLink;
}
