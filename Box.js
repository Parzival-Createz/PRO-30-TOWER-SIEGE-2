class Box {
  constructor(x, y, width, height) {
    var options = {
      'restitution': 0.8,
      'friction': 1.0,
      'density': 1.0,
      isStatic: false,
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    World.add(world, this.body);
  }
  display() {
    var angle = this.body.angle;
    if (this.body.speed < 3) {
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      rectMode(CENTER);
      fill("cyan");
      rect(0, 0, this.width, this.height);
      pop();
    } else {
      World.remove(world, this.body);
      push();
      this.Visibilty = this.Visibilty - 5;
      tint(255, this.Visibilty);
      // rect(this.body.position.x, this.body.position.y, 40, 40);
      pop();
    }


  }
};
