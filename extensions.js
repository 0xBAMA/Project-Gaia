// Generated by CoffeeScript 1.10.0
(function() {
  THREE.Color.prototype.setIntegerRGB = function(rOrObject, g, b) {
    var r;
    if (_.isObject(rOrObject)) {
      r = rOrObject.r;
      g = rOrObject.g;
      b = rOrObject.b;
    } else {
      r = rOrObject;
    }
    return this.setRGB(r / 255, g / 255, b / 255);
  };

}).call(this);

//# sourceMappingURL=extensions.js.map
