// Access Variable 
var sliderShow = document.querySelector(".slider-container .show-slide");
var images = document.querySelectorAll(".slider-container .image img");
var prevButton = document.querySelector(".slider-control .prev");
var nextButton = document.querySelector(".slider-control .next");
var points = document.querySelector(".slider-control .points");

// Create Array Content Images
var imageArray = Array.from(images);

// Number Of Images
var imagesNum = imageArray.length;

// Create Slider Counter
var sliderNow = 1;

// Trigger previous function
prevButton.onclick = previous;

// Trigger next function
nextButton.onclick = next;

// Create Points In Order By Image Slider 
var ul_points = document.createElement("ul");
ul_points.className = "ul_points"

// Create li_point
for(let i = 1; i <= imagesNum; i++) {
    
    var li_point = document.createElement("li");
    li_point.setAttribute("data-index", i);
    li_point.appendChild(document.createTextNode(i));
    ul_points.appendChild(li_point);
}
// Add ul_points To Me Points
points.appendChild(ul_points)

// Create Array Content Points
var pointArray = Array.from(document.querySelectorAll(".slider-control .points .ul_points li"));

for(var i = 0; i < pointArray.length; i++) {
    pointArray[i].onclick = function () {
        sliderNow = parseInt(this.getAttribute(`data-index`));
        checker();
    }
}
// Trigger Checker Function
checker();

// Create Function Previous
function previous () {
    if (sliderNow > 1) {
        sliderNow --;
        checker();
    }
}
// Create Function Next
function next () {
    if (sliderNow < 6) {
        sliderNow ++;
        checker();
    }
}

// Create The Checker Function
function checker () {

    // Remove All Active Class
    removeAllActive();

    // Add Text Value From sliderShow
    sliderShow.textContent = `Slide #${sliderNow} Of ${imagesNum}`;

    // Set Active Class On Show Image
    imageArray[sliderNow - 1].classList.add("active");
    
    // Set Active Class On Show Image Count 
    ul_points.children[sliderNow - 1].classList.add("active");

    // Check If Current Slide Is The First Item
    if (sliderNow == 1) {
        prevButton.classList.add("disable");
    } else if (sliderNow > 1){
        prevButton.classList.remove("disable");
    }
    if (sliderNow == imagesNum) {
        nextButton.classList.add("disable");
    } else if (sliderNow < imagesNum){
        nextButton.classList.remove("disable");
    }
}

// Remove Active Class From Image Not Show
function removeAllActive () {
    // Loop On Me Images
    imageArray.forEach ((img)=> {
        img.classList.remove("active")
    })

    // Loop On Me Points
    pointArray.forEach ((point)=> {
        point.classList.remove("active")
    })
}
