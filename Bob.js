class Bob {
    constructor(x,y,radius) {
      var options = {
          'isStatic' :true,
          'restitution':0.2,
          'friction':10.3,
          'density':1.2,
         
      }
      this.body = Bodies.circle(x, y, 10, options);
      this.width = 50;
      this.height = 50;
      this.radius = 40;

      
      World.add(world, this.body);
     
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      
      fill("red");
      stroke("black");
      circle(0, 0, this.radius);
      
      pop();
    }
  };

  