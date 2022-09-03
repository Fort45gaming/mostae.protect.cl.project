noseX=0;
noseY=0;

function preload(){
mostache=loadImage('https://i.postimg.cc/d3MTDJj7/mostache.png');
}

function draw(){
image(video,0,0,300,300);
image(mostache,noseX,noseY,30,30);
}

function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
  
function modelLoaded(){

console.log('poseNet is Initilized');
}

function take_snapshot(){
    save('myFilterimage.png');
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
noseX=results[0].pose.nose.X;
noseY=results[0].pose.nose.Y;
        console.log("noseX="+results[0].pose.nose.x);
        console.log("noseY="+results[0].pose.nose.y);
        
    }
}