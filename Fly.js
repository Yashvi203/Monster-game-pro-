class Fly{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 1.2,
            length: 250
        }
        
        this.pointB = pointB
        this.fly1 = Constraint.create(options);
        World.add(world, this.fly1);
    }
    attach(body){
        this.fly1.bodyA = body;
    }
    
    fly(){
        this.fly1.bodyA = null;
    }

    display(){

        if(this.fly1.bodyA){
            var pointA = this.fly1.bodyA.position;
            var pointB = this.pointB;
            push();
            
            stroke(48,22,8);
            strokeWeight(3);
            line(pointB.x, pointB.y, pointA.x, pointA.y);
           
            pop();
        }
    }
    
}