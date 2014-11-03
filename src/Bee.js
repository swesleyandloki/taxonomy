var Bee = function() {
	Grub.call(this);
	this.age = 5;
	this.color = 'yellow';
	this.job = 'keep on growing';

};

Bee.Prototype = Object.create(Grub.prototype);
Bee.Prototype.constructor = Bee;
