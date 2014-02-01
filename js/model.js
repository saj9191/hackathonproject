// Information associated with a model in the animation
// TODO: Not sure we need action
function Model(position, velocity, action, imageLink) {
  // Current position of model
  this.position = position
  // Current velocity of model
  this.velocity = velocity;
  // What the object is doing (for now let's make the actions
  // stationary or moving
  this.action = action;
  // Image representing model 
  this.image = new Image();
  this.image.src = imageLink;
}

Model.prototype.getPosition = function() {
  return this.position;
}

Model.prototype.setPosition = function(position) {
  this.position = position;
}

// Updates the position based on the given velocity and change in time
Model.prototype.stepPosition = function(deltaMilliseconds) {
  var deltaSeconds = deltaMilliseconds / 1000;
  this.position = this.position.addVector(this.velocity.multipleByScalar(deltaSeconds));
}

Model.prototype.getVelocity = function() {
  return this.velocity;
}

Model.prototype.setVelocity = function(velocity) {
  this.velocity = velocity;
}

Model.prototype.getAction = function() {
  return this.action;
}

Model.prototype.getImage = function() {
  return this.image;
}

Model.prototype.getWidth = function() {
 return this.image.width;
}

Model.prototype.getHeight = function() {
  return this.image.height;
}
