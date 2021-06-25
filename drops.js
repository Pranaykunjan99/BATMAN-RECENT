class Drops{
    constructor(x,y,radius){
        var options= {
           isStatic:false,
           friction:0.1,
           
        }
        this.body=Bodies.circle(x,y,radius,options)
        this.radius=radius
        World.add(world,this.body)
    }
    display(){
        
        var pos=this.body.position;
        if(this.body.position.y>height){
          Matter.Body.setPosition(this.body,{x:random(0,800),y:random(0,400)})
        }
        fill("blue")
        ellipseMode(CENTER);
        ellipse(pos.x,pos.y,this.radius,this.radius);
    }
}     
