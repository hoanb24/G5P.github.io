var slideImg = document.getElementById("slideImg");
var images = new Array (
    "/project/publish/images/docter1.jpg",
    "/project/publish/images/docter2.jpg",
    "/project/publish/images/docter3.jpg"
);
var len = images.length;
var i = 0;

function slider(){
    if(i > len-1){
      i = 0;
    }
    slideImg.src = images[i];
    i++;
    setTimeout('slider()', 3000);
}