

// * Write a function to swap to values at two different indicies in an array.

  ```
  var swap = function (arr, indexOne, indexTwo) {
  var temp = arr[indexOne]
  arr[indexOne] = arr[indexTwo];
  arr[indexTwo] = temp;

;
    console.log(arr)
  return arr;
  };
  ```


// * Write a function to generate a random number in a specified range.

var getRand = function (low, high) {
    randNum =  Math.floor(Math.random() * (high - low)) + low;
    return randNum;
  };

getRand(2,10)


// * Write a function to create a specified number of random numbers 
//from `1` to `100` in an array.
var arr = []
var randArr = function (size) {
for(i = 0; i < size; ++i){
    randNum = Math.floor((Math.random() * 100) + 1)
    arr[i] = randNum;
}
   return arr; 
  }

randArr(20)
 
  ```

// * Write a function to find the maximum number in an array.

var getMax = function (arr) {
      max = Math.max.apply(Math, arr);
      return max;
}

getMax([10,200,3,1])

  ```

// ## Playing With The DOM

// Go to [generalassemb.ly](https://generalassemb.ly) and try the following exercises.

// * Grab the `body` from the page using, `document.querySelector`. and chnage the `opacity` to `.5`.
document.querySelector("body").style.opacity = .5 

// * Grab all the `img` tags from the page. Iterate through each image and change the source to 
//`http://www.maine-coon-cat-nation.com/image-files/girl-kitten-names.jpg`.

var images = document.querySelectorAll("img");

for(var i = 0; i < images.length; ++i){
  images[i].src = "http://www.maine-coon-cat-nation.com/image-files/girl-kitten-names.jpg"
}

//   * Create a `kittenPaint` function for your code above .
//Save it as a snippet in your developer console. Go to yahoo and run it there.


var kittenPaint = function(){
  var images = document.querySelectorAll("img");
  for(var i = 0; i < images.length; ++i){
    images[i].src = "http://www.maine-coon-cat-nation.com/image-files/girl-kitten-names.jpg"
  }
}

kittenPaint()

// * Using `document.querySelectorAll("*")` to grab all elements on the page, 
// iterate through each `element` in the list using a `for` loop. 
// Use `element.style.backgroundImage = "url(http://www.maine-coon-cat-nation.com/image-files/girl-kitten-names.jpg)"` 
// to change every element to have a kitten background image.

var allEl = document.querySelectorAll("*");
for(var i = 0; i < allEl.length; ++i){
  allEl[i].style.backgroundImage = "url(http://www.maine-coon-cat-nation.com/image-files/girl-kitten-names.jpg)"
}

//   * Create a `kittenBomb` function with the above backgroundImage changing 
// feature and save it to your `sources` under snippets. Run it on your favorite site.

var allEl = document.querySelectorAll("*");
var kittenBomb = function () {
  for(var i = 0; i < allEl.length; ++i){
    allEl[i].style.backgroundImage = "url(http://www.maine-coon-cat-nation.com/image-files/girl-kitten-names.jpg)"
}
  }
}


// * Select the `body` from the page. When the body is clicked, 
// change its style using the following, `body.style.transform = "rotateZ(60deg)";`.
document.querySelector("body").onclick = function(event) {
  event.target.style.transform = "rotateZ(60deg)";};

// * Using the element transform from above, grab every `img` 
// off the page, and create a `click` event on the `body` that 
// iterates through all images and rotates them. In other words, 
// when the page is clicked rotate all images on the pages.


var images = document.querySelectorAll("img");
document.querySelector("body").onclick = function(event){
  for(var i = 0; i < images.length; ++i){
    images[i].style.transform = "rotateZ(60deg)";
  }
}











