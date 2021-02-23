'use strict';

let namesOfImages=['chinook.jpg','cutter.jpeg','fish.jpg','frosted-cookie.jpg','salmon.png','shirt.jpg'];
let index=-1;
function randomImages(){
  let element=document.querySelector('#logo');
  index > namesOfImages.length-2 ? index = 0 : index++;
  element.src=`./assets/img/${namesOfImages[index]}`;
  setTimeout(randomImages,1000);
};
randomImages();
