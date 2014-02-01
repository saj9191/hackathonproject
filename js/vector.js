// Vector in 2D. Vectors are immutable.
function Vector(x, y) {
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
}

Vector.prototype.multipleByScalar = function(s) {
  var v = new Vector(s*this.x, s*this.y);
  return v;
};
