// Vector in 2D. Vectors are immutable.
function Vector(x, y) {
  console.log("x ", x, "y ", y);
  this.x = x;
  this.y = y;
}

var zeroVector = new Vector(0, 0);

Vector.prototype.getXCoordinate = function() {
  return this.x;
};

Vector.prototype.getYCoordinate = function() {
  return this.y;
};

Vector.prototype.addVector = function(delta) {
  return new Vector(this.x + delta.x, this.y + delta.y);
};

Vector.prototype.multiplyByScalar = function(s) {
  var v = new Vector(s*this.x, s*this.y);
  return v;
};

Vector.prototype.length = function() {
  return Math.sqrt(this.x*this.x + this.y*this.y);
}

Vector.prototype.distanceFrom = function(v) {
  var x = v.x - this.x;
  var y = v.y - this.y;
  return Math.sqrt(x*x + y*y);
}
