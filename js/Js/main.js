window.addEventListener("DOMContentLoaded", () => {
	Carousel()
});

function Carousel(){
	var classImage = document.getElementsByClassName("upperimage")

	var uwu = false;
	setInterval(() => {
		console.log("ddd");

		if(!uwu){
			uwu = true;

			classImage[0].style.animation = "image-move 0.35s ease-in-out"
			classImage[1].style.animation = "image-move 0.35s ease-in-out"
			setTimeout(() => {
				classImage[0].style.transform = "translateX(100%)"
				classImage[1].style.transform = "translateX(-100%)"
			}, 350);
		}else {
			uwu = false;

			classImage[0].style.animation = "image-move2 0.35s ease-in-out"
			classImage[1].style.animation = "image-move3 0.35s ease-in-out"
			setTimeout(() => {
				classImage[0].style.transform = "translateX(0%)"
				classImage[1].style.transform = "translateX(0%)"
			}, 350);
		}
	}, 8000);
}

var images = ["imgs/browntshirt.png", "imgs/redtshirt.png", "imgs/darkgraytshirt.png"]
var index2 = images.length - 1
var index1 = index2 - 1
var index0 = 0
function ScrollShop(dir){
	var items = document.getElementsByClassName("storeItem")

	if(dir == "right"){
		index2++;
		index1++;
		index0++;
		if(index2 > images.length - 1){
			index2 = 0
		}
		if(index1 > images.length - 1){
			index1 = 0
		}
		if(index0 > images.length - 1){
			index0 = 0
		}

		items[0].setAttribute("src",images[index0])
		items[1].setAttribute("src",images[index1])
		items[2].setAttribute("src",images[index2])
	}else{
		index2--;
		index1--;
		index0--;
		if(index2 < 0){
			index2 = images.length - 1
		}
		if(index1 < 0){
			index1 = images.length - 1
		}
		if(index0 < 0){
			index0 = images.length - 1
		}

		items[0].setAttribute("src",images[index0])
		items[1].setAttribute("src",images[index1])
		items[2].setAttribute("src",images[index2])
	}
}