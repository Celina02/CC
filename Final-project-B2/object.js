class Poop{

    constructor(){

    this.r = 45;
    this.x = width;
    this.y= height-this.r;
    }


move(){

this.x -= 10;

}

show(){
image(poop, this.x, this.y, this.r, this.r );

}
stop(){
if(timer==0)
this.x -= 0;
}
hits(){
    if(this.x<160&&this.y==45){
    Text("YOU LOSE")
    }

}
}