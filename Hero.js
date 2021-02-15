class Hero {
    constructor(x,y,r){
        this.image = loadImage("images/Superhero-01.png", "images/Superhero-02.png");
        
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0.1,
            density:1.2
            
        }
        this.x=x;
        this.y=y;
        this.r=r;
        this.body=Bodies.circle(this.x, this.y, this.r/2, options);
        World.add(world, this.body);

    }

    display()
    {
        var heropos=this.body.position;
        var heroObject=this.body.radius(70);
        push();
        translate(heropos.x, heropos.y);
        rectMode(CENTER);
        strokeWeight(3);
        fill(255,0,255);
        ellipse(0,0,this.r, this.r);
        radius:70;
        pop();
    }
}
