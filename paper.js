class Paper {
    constructor(){
        var options = {
            restitution : 0.3,
            isStatic : false,
            friction : 0.5,
            density : 1.2
        }
        this.body = Bodies.circle(200, 500, 30, options);
        World.add(world, this.body);
    }
    display(){
        fill("cyan");
        ellipseMode(RADIUS);
        ellipse(200, 500, 30);
    }
}