
var backgroundimg,man,manimg,manAn;

var  manAnima,zombie,zombieImg1,ZombieG,manMove,bullet,bulletImg,bulletGroup;
var zombie2,zombie2G,zombie3,zombie3G,zombie4,zombie4G,zombie5,zombie5G,rand;
var life=100;
var score=0;

var gameState,PLAY,END
var PLAY=0;
var END=0;
var gameState=0





function preload() {
    backgroundimg=loadImage("Images/background.png");
    manimg=loadImage("Images/man1.png")
   // manAn=loadAnimation("images/man.png","images/man1.png");
 // manAnima=loadAnimation("Images/man1.png","Images/man3.png")
    zombieImg1=loadAnimation("Images/zombie1.png","Images/zombie4.png","Images/zombie8.png");
    bulletImg=loadImage("Images/bullet.png");
  //  manMove=loadAnimation("Images/man1.png","Images/man11.png","Images/man21.png");
    }

function setup(){
    var canvas = createCanvas(displayWidth,displayHeight-200);
    man=createSprite(displayWidth-170,500,10,30);
    //man=createSprite(600,600,10,30);
    man.addImage(manimg)
    
    man.setCollider("rectangle",-10,-10,150,man.height-200)
    

    
    console.log(man.x)
    console.log(man.y)

    /* bullet=createSprite(man.x-40,man.y+15)
        bullet.addImage(bulletImg);
        bullet.scale=0.15
        bullet.visible=false;*/
        
     zombieG=new Group ()
     zombie2G=new Group ()
     zombie4G=new Group ()
     zombie3G=new Group ()
     zombie5G=new Group ()
     bulletGroup=new Group()
   
   //bullet.debug();
}

function draw(){
    background(backgroundimg);
    textSize(38);
    text("Life="+life,displayWidth-170,50)

    textSize(38);
    text("Score-"+score,displayWidth-1520,50)

    if(gameState===0){
        if(keyWentDown("space")){
            // man.addAnimation("man",manAnima)
              createBullet();
              //bullet.visible=true;
             // bullet.velocityX=-9
          }
          if (frameCount % 90 === 0){
            //generate random obstacles
            rand = Math.round(random(1,5));
            switch(rand) {
              case 1: zombieSpawn1();
                      break;
              case 2: zombieSpawn2();
                      break;
              case 3: zombieSpawn3();
                      break;
              case 4: zombieSpawn4();
                      break;
              case 5: zombieSpawn5();
                      break;
              default: break; 
            }}
    
    
            if(bulletGroup.isTouching(zombieG)){
                destroyZombie();
                bulletGroup.destroyEach()
                score=score+3;
            }
            if(bulletGroup.isTouching(zombie2G)){
                bulletGroup.destroyEach()
                score=score+1;
            }
            if(bulletGroup.isTouching(zombie3G)){
                destroyZombie3();
                bulletGroup.destroyEach()
                score=score+2;
            }
            if(bulletGroup.isTouching(zombie4G)){
                destroyZombie4();
                bulletGroup.destroyEach()
                score=score+4;
            }
            if(bulletGroup.isTouching(zombie5G)){
                destroyZombie5();
                bulletGroup.destroyEach()
                score=score+1;
            }
    
    
            if(zombieG.isTouching(man)){
                zombieG.destroyEach();
                life1();
            }
            if(zombie2G.isTouching(man)){
                zombie2G.destroyEach();
                life1();
            }
            if(zombie3G.isTouching(man)){
                zombie3G.destroyEach();
                life1();
            }
            if(zombie4G.isTouching(man)){
                zombie4G.destroyEach();
                life1();
            }
            if(zombie5G.isTouching(man)){
                zombie5G.destroyEach();
                life1();
            }

            if(life===0){
           gameState=1;
            }
    
    
    }

    if(gameState===1){
        textSize(100);
        text("Game Over",displayWidth-displayWidth/1.5,displayHeight-displayHeight/1.5)
        textSize(85)
        text("Press R to restart",displayWidth-displayWidth/1.5,displayHeight-displayHeight/1.5+100)
        if(keyDown("r")){
            gameState=0;
            score=0;
            life=100;
            man.opacity=10-0.001
        }
        zombie2G.destroyEach();
        zombie3G.destroyEach();
        zombie4G.destroyEach();
        zombie5G.destroyEach();
        zombieG.destroyEach();
    }

    
//call different zombies group
    
       
       man.y=World.mouseY

  
  // manMoving();
     

    drawSprites();
      }
 
        function zombieSpawn1(){
        zombie=createSprite(random(0,400),random(400,height-70),20,20);
        zombie.addAnimation("zombie",zombieImg1);
        zombie.scale=0.6
        zombie.velocityX=3;
        zombieG.add(zombie)
        zombie.lifetime=500

        zombie.setCollider("rectangle",-10,-10,100,zombie.height-200)
        }
        function zombieSpawn2(){
        zombie2=createSprite(random(0,400),random(400,height-70),20,20);
        zombie2.addAnimation("zombie",zombieImg1);
        zombie2.scale=0.6
        zombie2.velocityX=5+0.001;
        zombie2G.add(zombie2)
        zombie2.lifetime=500

        zombie2.setCollider("rectangle",-10,-10,100,zombie2.height-200)
        

        }

        function zombieSpawn3(){
        zombie3=createSprite(random(0,400),random(400,height-70),20,20);
        zombie3.addAnimation("zombie",zombieImg1);
        zombie3.scale=0.6
        zombie3.velocityX=2+0.001;
        zombie3G.add(zombie3)
        zombie3.lifetime=500

        zombie3.setCollider("rectangle",-10,-10,100,zombie3.height-200)
        }
        function zombieSpawn4(){        
        zombie4=createSprite(random(0,400),random(400,height-70),20,20);
        zombie4.addAnimation("zombie",zombieImg1);
        zombie4.scale=0.6
        zombie4.velocityX=4+0.001;
        zombie4G.add(zombie4)
        zombie4.lifetime=500

        zombie4.setCollider("rectangle",-10,-10,100,zombie4.height-200)
                    }

        function zombieSpawn5(){
        zombie5=createSprite(random(0,400),random(400,height-70),20,20);
        zombie5.addAnimation("zombie",zombieImg1);
        zombie5.scale=0.6
        zombie5.velocityX=3+0.001;
        zombie5G.add(zombie5)
        zombie5.lifetime=500
        
        zombie5.setCollider("rectangle",-10,-10,100,zombie5.height-200)
                        }

        

function manMoving(){
    //bullet.x = man.x;
   // bullet.y = man.y;

    
    if(keyWentUp("space")){
        man.addAnimation("man",manAn)
        bulletGroup.remove(bullet);
    }
    if(keyWentDown(UP_ARROW)){
        man.addAnimation("man",manMove)   
           man.velocityY=-2;
           bulletGroup.x=man.x;
           bulletGroup.y=man.y;
       }
       if(keyWentUp(UP_ARROW)){
           man.addAnimation("man",manAn); 
              man.velocityY=0;
              bulletGroup.x=man.x;
           bulletGroup.y=man.y;
          }
    if(keyWentDown(DOWN_ARROW)){
        man.addAnimation("man",manMove)   
           man.velocityY=2;
           bullet.x=man.x;
           bullet.y=man.y;
       }
       if(keyWentUp(DOWN_ARROW)){
           man.addAnimation("man",manAn); 
              man.velocityY=0;
              bullet.x=man.x;
           bullet.y=man.y;
          }

          if(keyWentDown(LEFT_ARROW)){
            man.addAnimation("man",manMove)   
               man.velocityX=-2;
               bullet.x=man.x;
           bullet.y=man.y;
           }
           if(keyWentUp(LEFT_ARROW)){
               man.addAnimation("man",manAn); 
                  man.velocityX=0;
                  bullet.x=man.x;
           bullet.y=man.y;
              }
       
              if(keyWentDown(RIGHT_ARROW)){
               man.addAnimation("man",manMove)   
                  man.velocityX=2;
                  bullet.x=man.x;
           bullet.y=man.y;
              }
              if(keyWentUp(RIGHT_ARROW)){
                  man.addAnimation("man",manAn); 
                     man.velocityX=0;
                     bullet.x=man.x;
           bullet.y=man.y;
                 }

}

        function destroyZombie (){
            zombieG.destroyEach();


        }
        function destroyZombie2 (){
            zombie2G.destroyEach();


        }
        function destroyZombie3 (){
            zombie3G.destroyEach();


        }
        function destroyZombie4 (){
            zombie4G.destroyEach();


        }
        function destroyZombie5 (){
            zombie5G.destroyEach();


        }

// Creating  bullet for man
        function createBullet() {
            var bullet= createSprite(man.x,man.y, 60, 10);
            bullet.addImage(bulletImg);
       //     bullet.x = 360;
            bullet.y=man.y;
            bullet.velocityX = -20;
            bullet.lifetime = 100;
            bullet.scale = 0.1;
            bulletGroup.add(bullet);
            bullet.debug=false;
            
        }

        function life1(){
           
                 life=life-25;
                 man.y=50
                 console.log(man.y)    
                      }
        
  
    