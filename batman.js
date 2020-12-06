class Batman{
    constructor(x, y, radius) {
        var options = {
            isStatic: true
        }
        this.radius = radius;
        this.body = Bodies.circle(x, y, radius, options);
        
        this.image1 = loadImage("images/walking_1.png");
        this.image2 = loadImage("images/walking_2.png");
        this.image3 = loadImage("images/walking_3.png");
        this.image4 = loadImage("images/walking_4.png");
        this.image5 = loadImage("images/walking_5.png");
        this.image6 = loadImage("images/walking_6.png");
        this.image7 = loadImage("images/walking_7.png");
        this.image8 = loadImage("images/walking_8.png");
        World.add(world, this.body);
    }
    display() {
        push();
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        image(this.image+randomNumber(1,8), 0, 0, this.radius, this.radius);
        this.visiblity = 0;
        pop();
    }
}