class Drops{
    constructor(x,y,r){
var options ={
    friction: 0.1,
    restitution: 0.2
}
this.body = Bodies.circle(x,y,width,height,options);
this.r = r;
World.add(world, this.body);
    }
    update(){
if (this.rain.position.y > height) {
    Matter.Body.setPosition(this.rain, {x:random(0, 400), y:random(0, 400)});
}

    }

}