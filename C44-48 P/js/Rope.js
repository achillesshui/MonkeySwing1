class Rope {
    constructor(bodyA, bodyB){
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            stiffness: 0.04,
            length: 300
        }
        this.bodyB = bodyB;
        this.rope = Constraint.create(options);

        World.add(world, this.rope);
    }
    
    attach(body) {
        this.bodyB = body;
    }

    detach() {
        this.bodyB = null;
    }

    display() {
        var pointA = this.rope.bodyA.position;
        var pointB = this.rope.bodyB.position;
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
}