class Rope{

    constructor(body1,body2,offsetX,offsetY){

      this.offsetX = offsetX
      this.offsetY = offsetY


      var options = {
       
        bodyA: body1,
        bodyB: body2,
        stiffness: 0.5,
        length: 40,
        pointB:{x:this.offsetX, y:this.offsetY}

      }

      this.bodyA = body1;
      this.bodyB = body2;

      this.rope = Constraint.create(options);
      World.add(world,this.rope);


    }

     display(){

           /*fill("black");
           strokeWeight(5);
           stroke("black");
           line(this.bodyA.position.x,this.bodyA.position.y,this.bodyB.position.x,this.bodyB.position.y);*/

           var pointA = this.rope.bodyA.position;
           var pointB = this.rope.bodyB.position;

           strokeWeight(2);

           var Anchor1X = pointA.x;
           var Anchor1Y = pointA.y;

           var Anchor2X = pointB.x+this.offsetX;
           var Anchor2Y = pointB.x+this.offsetY;

           line(Anchor1X,Anchor1Y-20,Anchor2X,Anchor2Y);


     }


};