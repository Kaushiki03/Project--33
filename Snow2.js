class Snow2
{
    constructor(x,y,radius)
    {
        var options = {
            restitution:0.4,
            isStatic:false
        }
          this.radius = radius
        this.body = Bodies.circle(x,y,radius,options)
        this.image = loadImage("snowflakes.png")
        this.image=loadImage("Snowman.png")
        World.add(world,this.body)
    }
    display()
    {
        var pos = this.body.position;
        var angle = this.body.angle;
        push()
        translate(pos.x,pos.y)
        rotate(angle);
           
            imageMode(RADIUS)
           image(this.image,0,0,this.radius,this.radius)
        pop()
    }
}