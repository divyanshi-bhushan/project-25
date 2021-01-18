class Dustbin{
    constructor(x, y) {
        var options = {
            isStatic:true
        }
       
        this.width = 100;
        this.height = 100;
        this.x=x;
        this.y=y;
        this.wallthickness=10;
        this.angle=0;
        
       this.leftbody=Bodies.rectangle(this.x,this.y,this.wallthickness,this.height,options,this.angle);
       Matter.Body.setAngle(this.leftbody,this.angle)
       World.add(world,this.leftbody);
       this.rightbody=Bodies.rectangle(this.x+this.width,this.y,this.wallthickness,this.height,options);
       Matter.Body.setAngle(this.rightbody,this.angle);
       World.add(world,this.rightbody);
       this.basebody=Bodies.rectangle(this.x+this.width/2,this.y+this.height/2,this.width,this.wallthickness,options);
       World.add(world,this.basebody);
     
      }
      display(){
        var leftbodypos=this.leftbody.position;
        var rightbodypos=this.rightbody.position;
        var basebodypos=this.basebody.position;
        push();
        translate(leftbodypos.x, leftbodypos.y);
    
        rotate(this.angle);
        fill("white");
        rectMode(CENTER);
        rect (0, 0, this.wallthickness, this.height);
        pop();
        push();
        translate(rightbodypos.x, rightbodypos.y);
        rotate(this.angle);
        fill("white");
        rectMode(CENTER);
         rect( 0, 0, this.wallthickness, this.height);
        pop();
        push();
        translate(basebodypos.x, basebodypos.y);
        fill("white");
        rectMode(CENTER);
         rect(0, 0, this.width, this.wallthickness);
        pop();
      }
    }