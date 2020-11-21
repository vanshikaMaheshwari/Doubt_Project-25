class Paper{
    constructor(x,y,radius){
        var options = {
            isStatic : false,
            restitution : 0.3,
            friction : 0.5,
            density : 1.2
        }
        this.body = Bodies.circle(x, y,radius, options);
        this.radius = radius;
        this.image = loadImage("PaperImg.png");
        World.add(world, this.body);
    }
    display(){
        imageMode(CENTER);
        push();
        stroke(27, 225, 125);
        fill(27, 225, 125);
        image(this.image,this.body.position.x,this.body.position.y,this.radius,this.radius);
        pop();
    }
}