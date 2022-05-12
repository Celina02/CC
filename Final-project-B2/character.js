class Pica{
    constructor(){

        this.x=130;
        this.y=height-150;
        this.vy=0;
        this.gravity =0.5;
        
    }

    jump(){
        if (this.y == height-50){
            this.vy=-10;
        }
        
    }

   

    move(){
        this.y += this.vy;
        this.vy += this.gravity
        this.y= constrain(this.y,0,height-50);
    }

 

 

 
show (){
    image(character,this.x,this.y,80,50);
}

}