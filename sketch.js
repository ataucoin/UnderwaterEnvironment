var jelly;
var grid;
var s = 0; //seconds
var kelp1;
var kelp2;
var fish;
var crab1;
var crab2;
var x = 0;  // establishing x, y, and z for camera movements
var y = 0;
var z = -100;



function preload(){
   
    jelly = loadModel('assets/Jellyfish.obj');
    grid = loadImage("assets/grid.png");
    kelp1 = loadImage("assets/kelp1.png");
    kelp2 = loadImage("assets/kelp2.png");
    fish = loadImage("assets/fish.png");
    crab1 = loadImage("assets/crab1.png");
    crab2 = loadImage("assets/crab2.png");
   

}

function setup(){
    
    createCanvas(1000, 700, WEBGL); 
    
    jelly = loadModel('assets/Jellyfish.obj');
    grid = loadImage("assets/grid.png");
    kelp1 = loadImage("assets/kelp1.png");
    kelp2 = loadImage("assets/kelp2.png");
    fish = loadImage("assets/fish.png");
    crab1 = loadImage("assets/crab1.png");
    crab2 = loadImage("assets/crab2.png");


}
                 

function draw(){
    background(100);

    if (keyIsDown(65)) //allows movement of camera through space from keys
    x-=5;
    if (keyIsDown(68))
    x+=5;
    if (keyIsDown(UP_ARROW))
    y-=5; 
    if (keyIsDown(DOWN_ARROW))
    y+=5;   
    if (keyIsDown(87))
    z-=5;    
    if (keyIsDown(83)) 
    z+=5; 
    camera(x, y, z);
       

    orbitControl(); //can rotate while mouse is pressed

    orange = color(255, 0, 0, 0.2 * 255);  //variables for color 
    purple = color(0, 0, 255, 0.2 * 255);
    
    s = second();
    

    push(); //box
    translate(0,-100, -10);
    pointLight(250, 250, 250, 1);
    ambientMaterial(255,0);
    texture(grid); 
    box(1000,800,1000);
    pop();
   
    push(); //jellyfish 
    translate(0, sin(frameCount * 0.01) * -50, 0, 0, 0, 0, 0, 0, 0); //movement
    ambientMaterial(0,191,255,100);
    scale(30,50,30);
    model(jelly);
    pop();
    
    push();
    translate(200, sin(frameCount * 0.03) * -10, 0, 0, 0, 0, 0, 0, 1000);
    translate(0,0,-500);
    ambientMaterial(0,191,255,50);
    scale(25,35,25);
    model(jelly);
    pop();
    
    push();
    translate(-200, sin(frameCount * 0.02) * -20, 0, 0, 0, 0, 0, 0, 0);
    ambientMaterial(0,191,255,100);
    scale(20,30,20);
    model(jelly);
    pop();

    ambientLight(125);

    for( var i = 0; i < 1000 ; i++){ //bubbles array
    push();
    translate(0,200,0);
    translate(-150,radians(frameCount * PI/100 / i) * -1000, 0, 0, 0, 0, 0, 0,);
    translate(sin(frameCount * PI/100 / i) * -10, 0, 0, 0, 0, 0, 0,);
    ambientMaterial(purple);
    sphere(10, 10, 10);   
    pop();
        
    push();
    translate(300,200,-100);
    translate(-150,radians(frameCount * PI/100 / i) * -1000, 0, 0, 0, 0, 0, 0,);
    translate(sin(frameCount * PI/100 / i) * -10, 0, 0, 0, 0, 0, 0,);
    ambientMaterial(purple);
    sphere(10, 10, 10);   
    pop();
    
    }
    push(); //fish
    translate(sin(frameCount * PI/100) * -1000, 0, 0, 0, 0, 0, 0,);
    translate(0,-100,0);
    rotateY(frameCount / 31);
    ambientMaterial(255);
    texture(fish);
    plane(75, 50); 
    pop();
        
    push();
    translate(sin(frameCount * PI/100) * -1000, 0, 0, 0, 0, 0, 0,);
    translate(200,-100,0);
    rotateY(frameCount / 31);
    ambientMaterial(255);
    texture(fish);
    plane(50, 30); 
    pop();

    
    if(s%2){ //animation of 2D planes

    push();
    translate(300,200, -300);
    ambientMaterial(255);
    texture(kelp1);     
    plane(300,200);
    pop();
         
    push();
    translate(-300,200, -200);
    ambientMaterial(255);
    texture(kelp1);     
    plane(400,200);
    pop();   
         
    push();
    translate(-200,200, -100);
    ambientMaterial(255);
    texture(kelp1);     
    plane(200,300);
    pop();   
         
    push();
    translate(100,200, -150);
    ambientMaterial(255);
    texture(kelp1);     
    plane(300,400);
    pop();   
         
    push();
    translate(300,200, -100);
    ambientMaterial(255);
    texture(kelp1);     
    plane(300,400);
    pop(); 
    
    push();
    translate(-450,300, -150);
    ambientMaterial(255);
    texture(crab1);     
    plane(200,200);
    pop(); 
        
            
         
 }
    else{
    push();
    translate(300,200, -300);
    texture(kelp2);
    plane(300,200);
    pop();   
              
    push();
    translate(-300,200, -200);
    ambientMaterial(255);
    texture(kelp2);     
    plane(400,200);
    pop();  
        
    push();
    translate(-200,200, -100);
    ambientMaterial(255);
    texture(kelp2);     
    plane(200,300,200);
    pop();       
              
    push();
    translate(100,200, -150);
    ambientMaterial(255);
    texture(kelp2);     
    plane(300,400);
    pop();  
        
     push();
    translate(300,300, -100);
    ambientMaterial(255);
    texture(kelp2);     
    plane(300,400);
    pop(); 
        
    push();
    translate(-450,300, -150);
    ambientMaterial(255);
    texture(crab2);     
    plane(200,200);
    pop(); 
        
  
    }
}












   
   