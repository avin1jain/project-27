class Rope{
    constructor(bodyA,bodyB,offsetX,offsetY){
        this.offsetX=offsetX
        this.offsetY=offsetY
    var options={
    bodyA:bodyA,
    bodyB:bodyB,
    length:10,
    stiffness:0.04,
    pointB:{x:this.offsetX, y:offsetY}
    }
    this.Rope=Constraint.create(options) 
    World.add(world,this.Rope)
    
    }
        display(){
     var pointc=this.Rope.bodyA.position
     var pointD=this.Rope.bodyB.position
    
      line(pointc.x,pointc.y,pointD.x,pointD.y)
    
    
    
        }
    }