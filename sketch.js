


function setup(){
  var canvas = createCanvas(1600,400);
  
  ground = new Ground(600,height,1200,20)

  bird = new Bird(100,100);
  slingshot = new Slingshot(bird.body,{x:100,y:100});


}