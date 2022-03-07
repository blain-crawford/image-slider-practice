import './styles.css';
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

const pictureScroller = document.querySelector('#pictures');
const secondPictureScroller = document.querySelector('#second-pictures');
const leftScroller = document.querySelector('#picture-scroll-left');
const rightScroller = document.querySelector('#picture-scroll-right');
const secondLeftScroller = document.querySelector('#second-picture-scroll-left');
const secondRightScroller = document.querySelector('#second-picture-scroll-right');
const pictureIndicators = document.querySelector('#picture-indicators');
let imageArray = [
  apple,
  bald,
  blainFunnyFace,
  candle,
  cheers,
  christmas,
  freshHair,
  froPoint,
  hardhat,
  kiss,
  sneak,
  snow,
  solar,
];

const populatePictureFrom = (() => {
  for (let i = 0; i < imageArray.length; i += 1) {
    let newPicture = new Image();
    newPicture.src = imageArray[i];
    newPicture.classList.add('picture');
    pictureScroller.appendChild(newPicture);
  }
})();

const scrollPictures = (() => {
  let pictures = document.querySelectorAll('.picture');
  let scrollAmount = 0;

  function scrollRight() {
    if (scrollAmount < 1200) {
      scrollAmount += 200;
      pictures.forEach((picture) => {
        picture.style.cssText = `transform: translate(${scrollAmount}px);`;
      });
    }
  }

  function scrollLeft() {
    if (scrollAmount > -1200) {
      scrollAmount -= 200;
      pictures.forEach((picture) => {
        picture.style.cssText = `transform: translate(${scrollAmount}px);`;
      });
    }
  }

  return { scrollLeft, scrollRight };
})();

leftScroller.addEventListener('mousedown', scrollPictures.scrollLeft, false);
rightScroller.addEventListener('mousedown', scrollPictures.scrollRight, false);

const populateSecondPictureFrom = (image) => {
  secondPictureScroller.innerHTML = '';
  let shownImage = new Image();
  shownImage.src = image
  shownImage.id = imageArray.indexOf(image)
  shownImage.classList.add('second-picture');
  secondPictureScroller.appendChild(shownImage);
};

const populatePictureIndicators = (() => {
  for (let i = 0; i < imageArray.length; i++) {
    let newIndicator = document.createElement('div');
    newIndicator.classList.add('indicator');
    newIndicator.id = i;
    pictureIndicators.appendChild(newIndicator);
    if(parseInt(newIndicator.id) === 0) {
      newIndicator.classList.add('current-picture');
    }
  }
})();

populateSecondPictureFrom(imageArray[0]);

const scrollSecondPictures = (() => {
  let secondPictures = document.querySelector('#second-pictures');
  let currentImage = 0;
  const indicators = document.querySelectorAll('.indicator');

  function indicateCurrentImage(images) {
    const displayedImage = document.querySelector('.second-picture')
    images.forEach((image) => {
      image.classList.remove('current-picture');
      if(image.id === displayedImage.id) {
        image.classList.add('current-picture')
      }
    })
  }

  function secondScrollLeft() {
    let secondNewImage = new Image();

    if(currentImage === 0) {
      currentImage = imageArray.length - 1;
      populateSecondPictureFrom(imageArray[currentImage])
    } else {
      currentImage -= 1;
      populateSecondPictureFrom(imageArray[currentImage]);
    }

    indicateCurrentImage(indicators);
  }

  function secondScrollRight() {
    let secondNewImage = new Image();

    if(currentImage === imageArray.length - 1) {
      currentImage = 0;
      populateSecondPictureFrom(imageArray[currentImage])
    } else {
      currentImage += 1;
      populateSecondPictureFrom(imageArray[currentImage]);
    }

    indicateCurrentImage(indicators);
  }

  return { secondScrollLeft, secondScrollRight }
})();

secondLeftScroller.addEventListener('mousedown', scrollSecondPictures.secondScrollLeft, false);
secondRightScroller.addEventListener('mousedown', scrollSecondPictures.secondScrollRight, false);