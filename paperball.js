class paperball{
    constructor(x, y, radius) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body =Bodies.circle(x, y, radius/2,options);
        this.radius= radius;
        World.add(world, this.body);
      }
      display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        ellipse(CENTER);
        fill("red");
      ellipse( 0, 0, this.radius, this.radius);
        pop();
      }
}