class Slingshot {
    constructor(bodyA, pointB) {
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.bodyB = pointB;
        this.body = Constraint.create(options);
        World.add(world, this.body);
    }

    fly() {
        this.body.bodyA = null;
    }

    display() {
        if (this.body.bodyA) {
            var pointA = this.body.bodyA.position;
            var pointB = this.bodyB;
            strokeWeight(3);
            stroke("black");
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }

    attach(body) {
        this.body.bodyA = body;
    }
}