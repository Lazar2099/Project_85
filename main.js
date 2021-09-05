nasa_images_array=["Mars1.jpg","Mars2.jpg","Mars3.jpg","Mars4.jpg"];
random_number=Math.floor(Math.random()*4);
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
//background_image="mars.jpg";
background_image=nasa_images_array[random_number];
rover_image="rover.png";
var rover_width=100;
var rover_height=90;
rover_x=10;
rover_y=10;
function add(){
    background_imageTag=new Image();
    background_imageTag.onload=uploadBackground;
    background_imageTag.src=background_image;

    roverTag=new Image();
    roverTag.onload=uploadRover;
    roverTag.src=rover_image;
}
function uploadBackground(){
    ctx.drawImage(background_imageTag,0,0,canvas.width,canvas.height);
}
function uploadRover(){
    ctx.drawImage(roverTag,rover_x,rover_y,rover_width,rover_height);
}
window.addEventListener("keydown",mykeydown);
function mykeydown(e){
    var keypressed=e.keyCode;
    console.log(keypressed);
    if(keypressed=='38'){
        console.log("upkey");
        up();
    }
    if(keypressed=='40'){
        console.log("downkey");
        down();
    }
    if(keypressed=='37'){
        console.log("leftkey");
        left();
    }
    if(keypressed=='39'){
        console.log("rightkey");
        right();
    }
}
function up(){
    if(rover_y>0){
        rover_y=rover_y-10;
        console.log("rover_x="+rover_x+" rover_y="+rover_y);
        uploadBackground();
        uploadRover();
    }

}
function down(){
    if(rover_y<=500){
        rover_y=rover_y+10;
        console.log("rover_x="+rover_x+" rover_y="+rover_y);
        uploadBackground();
        uploadRover();
    }
}
function right(){
    if(rover_x<=700){
        rover_x=rover_x+10;
        console.log("rover_x="+rover_x+" rover_y="+rover_y);
        uploadBackground();
        uploadRover();
    }
}
function left(){
    if(rover_x>0){
        rover_x=rover_x-10;
        console.log("rover_x="+rover_x+" rover_y="+rover_y);
        uploadBackground();
        uploadRover();
    }
}
