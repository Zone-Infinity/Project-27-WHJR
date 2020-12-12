class Bob{
    constructor(x, y, radius){
        var options={
            isStatic:false,
            restitution:1.2,
            density:1.5
        };
        this.body = Bodies.circle(x, y, radius/2, options);
        this.position = this.body.position;
        this.radius = radius;
        
        World.add(world, this.body);
    }   
    display() {
        var pos = this.position;
        ellipseMode(CENTER);
        fill("white");
        circle(pos.x, pos.y, this.radius);
    }
}