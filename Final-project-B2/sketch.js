let pica;
let backgroundimage;
let character;
let poop;
let poops =[];
let timer = 20;




function preload(){
  backgroundimage =loadImage('background.png')
  character=loadImage('character.jpeg')
  poop=loadImage('object.jpeg')


}
function setup() {

  let cnv = createCanvas(900, 500);
  pica= new Pica();
  cnv.parent("canvasContainer")

  
}
function keyPressed() {
  if (key==" "){
    pica.jump();
  }
}


function draw() {

  background(backgroundimage);{

  }
  
  
  

  pica.show();
  pica.move();
  
  

  
  textAlign(CENTER);
    fill("white");
  if(frameCount%60===0 && timer >0){
    timer --;
  }else if (timer ===0){
    
    // this is the function make the game stop 
   createCanvas(900,500)
   fill('pink')
   textSize(100)
   text("Hope you enjoy!", width/2, height/2);
   poop.stop();
       
    }
    text(timer, width/2, 30);
    textSize(40)

 




 if (random(1)<0.008){
    poops.push(new Poop());
  }

 

  for(let p of poops){
    p.move();
    p.show();
    p.hits();

    

   

 
 }

}

