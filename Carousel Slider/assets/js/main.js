const img = document.querySelector(".mainimg")
const btn1 = document.querySelector(".btn1")
const btn2 = document.querySelector(".btn2")

btn1.onclick = function(){
    if(img.src == "assets/img/download.jpg"){

        img.src = "assets/img/download1.jpg"
    }
    else{
        img.src = "assets/img/download2.jpg"
    }
}