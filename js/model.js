// Information associated with a model in the animation
// TODO: Not sure we need action
function Model(position, velocity, action, imageLink) {
  // Current position of model
  this.position = position;
  // Current velocity of model
  this.velocity = velocity;
  // What the object is doing (for now let's make the actions
  // stationary or moving
  this.action = action;
  this.center = position;
  this.radians = 0;
  // Image representing model 
  this.image = new Image();
  this.image.src = imageLink;
}

function Model(position, velocity, center, radians, action, imageLink) {
  // Current position of model
  this.position = position;
  console.log("Model position ", this.position);
  // Current velocity of model
  this.velocity = velocity;
  // What the object is doing (for now let's make the actions
  // stationary or moving
  this.action = action;
  this.center = center;
  this.radians = radians;
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
  var displacement = (this.velocity.multiplyByScalar(deltaSeconds)).length();
  console.log("StepPosition");
  if (this.action == action.STRAIGHT) {
    console.log("STRAIGHT");
    this.position = this.position.addVector(this.velocity.multiplyByScalar(deltaSeconds));
  } else if (this.action == action.CIRCLE) {
    console.log("CIRCLE");
    console.log("POSITION ", this.position);
    console.log("CENTER ", this.center);
    var radius = this.position.distanceFrom(this.center);
    console.log("RADIUS ", radius);
    // Number of radius moved
    var deltaRadians = displacement / radius;
    console.log("DELTA RADIANS ", deltaRadians);
    this.radians += deltaRadians;
    console.log("NEW RADIANS ", this.radians);
    this.position.x = this.center.x + radius*Math.cos(this.radians);
    console.log("POSITION ", this.position.x, this.position.y);
    this.position.y = this.center.y + radius*Math.sin(this.radians);
  }
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
