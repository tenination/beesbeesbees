var Bee = function() {
  Grub.call(this);
  this.age = 5;
  this.color = "yellow";
  this.job = "keep on growing";

};

  //do more research on why the following two lines are needed
  Bee.prototype = Object.create(Grub.prototype);
  Bee.prototype.constructor = Bee; 

