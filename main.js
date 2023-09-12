Webcam.set({
    width: 350,
    height: 350,
    image_format: "png",
    png_quality: 100
})

camera = document.getElementById("camera");
Webcam.attach("#camera");

function take_snapshot() {
    Webcam.snap(function (data_uri) {
        document.getElementById("result").innerHTML = "<img id='pic' src='" + data_uri + "'/>"
    })
}

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/NH3xAGlSg/model.json", modelLoaded);

function modelLoaded() {
    console.log("modelLoaded")
}

function identify_image() {
    img = document.getElementById("pic")
    classifier.classify(img, gotResult)
}

function gotResult(error, result) {
    if (error) {
        console.log(error);
    } else {
        console.log(result);
document.getElementById("result1").innerHTML="Object identified is:"+result[0].label
        if (result[0].label == object[r]) {
            document.getElementById("result").innerHTML = "Result: You Won"
        } else {
            document.getElementById("result").innerHTML = "Result: You Lost.Try again"
        }
    }
}


var object = ["charger", "mobile phone", "pen"];
r = Math.floor(Math.random() * 3)
document.getElementById("object").innerHTML = object[r];