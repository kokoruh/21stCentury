// init image counter
var imgctr = 0;
var imglst = ["img1.jpeg", "img2.jpg", "img3.jpg"];
$("#p-img").attr("src", imglst[imgctr]);

// goes to next image
function nextimg(){
    imgctr = imgctr + 1;
    if (imgctr === 3) {
        imgctr = 0;
    };

    $("#p-img").attr("src", "images/" + imglst[imgctr]);
};

function remind1(){
    alert("Do not forget, O believer.");
};

function fearsyn(){
    $("#fearline").html("Consciousness of the Everlasting.");
    $("#fearline").click(function () {
        $("#fearline").html("Fear of the Everlasting.");
        $("#fearline").off("click");
    });
};

function makeModalPic(){
    console.log(event.target.src);
    $("#modalpic").attr("src", event.target.src);
    // $("myModal").modal("toggle");
};

setInterval(function (){
    nextimg();
} , 1700);
