class Dustbin{
    constructor(x,y)
    {
        this.x= x;
        this.y =y;
        this.width = 200;
        this.height = 100;
        this.thickness = 20;
        this.bottom = Bodies.rectangle(x,y,this.width,this.thickness,{isStatic:true});

        this.left = Bodies.rectangle(x-this.width/2 , y-this.height/2,this.thickness,this.height,{isStatic:true});

        this.right = Bodies.rectangle(x+this.width/2 , y-this.height/2,this.thickness,this.height,{isStatic:true});

        World.add(world,this.bottom);
        World.add(world,this.left);
        World.add(world,this.right);
    }

    display()
    {
        //push ();
      //  translate(this.bottom.position.x,this.bottom.position.y);

        rectMode(CENTER);
        fill ("pink");
        rect(this.bottom.position.x,this.bottom.position.y,this.width,this.thickness);
        rect(this.left.position.x,this.left.position.y,this.thickness,this.height);
        rect(this.right.position.x,this.right.position.y,this.thickness,this.height);
    }




}