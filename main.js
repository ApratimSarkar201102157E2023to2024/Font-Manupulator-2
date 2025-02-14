function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 550);
    canvas.position(560,150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('poses', gotPoses);
}
function modelLoaded() {
    console.log('PoseNet Is Initialized!');
}
function draw() {
    background('#A1B2C3');
}
function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
    }
}