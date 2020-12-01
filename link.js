class link {
  constructor(bodyA,bodyB) {
        var options = {
		bodyA : bodyA,
		bodyB : bodyB,
		stiffness : 1,
		length : 20
        }
           this.link = Constraint.create(options)
	   World.add(world,link);
	  
   }
      display() {
      strokeWeight(5);
      line(this.link.bodyA.position.x,this.link.bodyA.position.y, this.link.bodyB.position.x,this.link.bodyB.poition..y)
	 }

}

