import "./styles.css";
import apple from './images/apple.jpg';
import bald from './images/Bald.jpg';
import blainFunnyFace from './images/blain-funny-face.jpg';
import candle from './images/candle.jpg';
import cheers from './images/Cheers.jpg';
import christmas from './images/Christmas.jpg';
import freshHair from './images/fresh-hair.jpg';
import froPoint from './images/fro-point.jpg';
import hardhat from './images/hardhat.jpg';
import kiss from './images/kiss.jpg';
import sneak from './images/sneak.jpg';
import snow from './images/snow.jpg';
import solar from './images/solar.jpg';
// import studio from './images/studio.webp';

const pictureScroller = document.querySelector('#pictures');
const leftScroller = document.querySelector('#picture-scroll-left');
const rightScroller = document.querySelector('#picture-scroll-right');

let imageArray = [apple, bald, blainFunnyFace, candle, cheers, christmas, freshHair, froPoint, hardhat, kiss, sneak, snow, solar];

const populatePictureFrom = (() => {
  for (let i = 0; i < imageArray.length; i += 1) {
    let newPicture = new Image();
    newPicture.src = imageArray[i];
    newPicture.classList.add('picture');
    pictureScroller.appendChild(newPicture);
  }
})();

const scrollPictures = (() => {
  let scrollAmount = 0;
  let pictures = document.querySelectorAll('.picture')
  function scrollRight(e) {
    scrollAmount += 300;
    pictures.forEach((picture) => {
      picture.style.cssText = `transform: translate(${scrollAmount}px);`
    });
  }

  function scrollLeft(e) {
    scrollAmount -= 300;
    pictures.forEach((picture) => {
      picture.style.cssText = `transform: translate(${scrollAmount}px);`
    });
  }

  return {scrollLeft, scrollRight};
})();

leftScroller.addEventListener('mousedown', scrollPictures.scrollLeft, false);
rightScroller.addEventListener('mousedown', scrollPictures.scrollRight, false);



