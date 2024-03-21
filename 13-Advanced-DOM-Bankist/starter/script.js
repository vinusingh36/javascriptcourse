'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const section1 = document.querySelector('#section--1');

const nav = document.querySelector('.nav');
const dotContainer = document.querySelector('.dots');
console.log(dotContainer);

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach((btn) => {
  return btn.addEventListener('click', openModal)
})

// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

let handleHover = function (e) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(el => {
      if (el !== link) el.style.opacity = this;
    })
    logo.style.opacity = this;
  }
}

//Menu fade
nav.addEventListener('mouseover', handleHover.bind(0.5))

nav.addEventListener('mouseout', handleHover.bind(1))

///Sticky Navigation

const initialCoords = section1.getBoundingClientRect();
//console.log(initialCoords);


window.addEventListener('scroll', function (e) {
  // console.log(window.scrollY);
  // nav.classList.add('sticky');
  if (window.scrollY > initialCoords.top) nav.classList.add('sticky');
  else nav.classList.remove('sticky')

})

//intersection oberver API

const obsCallback = function (entries, observer) {
  entries.forEach(entry => {
    //console.log(entry);
  })
};

const obsOptions = {
  root: null,
  threshold: [0, 0.2]

};

let observer = new IntersectionObserver(obsCallback, obsOptions);
observer.observe(section1);

const header = document.querySelector('.header');

const navHeight = nav.getBoundingClientRect().height;
//console.log(navHeight);

const stickyNav = function (entries) {
  const [entry] = entries;
  // console.log(entry);
  if (!entry.isIntersecting)
    nav.classList.add('sticky');
  else
    nav.classList.remove('sticky');
}

const headerObserver = new IntersectionObserver(
  stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`
});

headerObserver.observe(header);


//Reveal section

const allSection = document.querySelectorAll('.section')

const revealSection = function (entries, observer) {
  const [entry] = entries;
  // console.log(entry);

  if (!entry.isIntersecting) return;

  entry.target.classList.remove('section--hidden')
  observer.unobserve(entry.target);
}


const sectionObserver = new IntersectionObserver(revealSection, {

  root: null,
  threshold: .15,

})

allSection.forEach(function (section) {
  sectionObserver.observe(section);
  //section.classList.add('section--hidden')
})


/////////Lazy Loading of Image
const imgTarget = document.querySelectorAll('img[data-src]');


const loadImg = function (entries, observer) {
  const [entry] = entries;
  //console.log(entry);

  if (!entry.isIntersecting) return;
  // Replace src with data-src
  entry.target.src = entry.target.dataset.src;
  //entry.target.classList.remove('lazy-img');

  entry.target.addEventListener('load', function () {
    entry.target.classList.remove('lazy-img');
  })

  observer.unobserve(entry.target);

}

//console.log(imgTarget);
const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
  rootMargin: '200px'
})

imgTarget.forEach((img) => imgObserver.observe(img))


//Slider

const slides = document.querySelectorAll('.slide')
//console.log(slides);

const btnLeft = document.querySelector('.slider__btn--left')
const btnRight = document.querySelector('.slider__btn--right');

let curSlide = 0;
let maxSlide = slides.length - 1;

// const slider = document.querySelector('.slider');
// slider.style.transform = 'scale(0.3) translateX(-800px)';
// slider.style.overflow = 'visible';


const createDots = function () {
  slides.forEach(function (_, i) {
    dotContainer.insertAdjacentHTML('beforeend', `<button class="dots__dot" data-slide="${i}"></button>`)
  })
}
createDots();

const activateDot = function (slide) {
  document.querySelectorAll('.dots__dot').forEach(dot => dot.classList.remove('dots__dot--active'));

  document.querySelector(`.dots__dot[data-slide="${slide}"]`).classList.add("dots__dot--active");
}

activateDot(0);

const goToSlide = function (slide) {
  slides.forEach((s, i) => s.style.transform = `translateX(${100 * (i - slide)}%)`
  )
}
goToSlide(0);

const nextSlide = () => {
  if (curSlide === maxSlide)
    curSlide = 0;
  else
    curSlide++;
  goToSlide(curSlide);
  activateDot(curSlide);
}
const preSlide = () => {
  if (curSlide === 0)
    curSlide = maxSlide;
  else
    curSlide--;
  goToSlide(curSlide);
  activateDot(curSlide);
}

btnRight.addEventListener('click', nextSlide)
btnLeft.addEventListener('click', preSlide)

dotContainer.addEventListener('click', function (e) {
  if (e.target.classList.contains('dots__dot')) {
    console.log("Dots");
    const { slide } = e.target.dataset;
    goToSlide(slide);
    activateDot(slide);

  }
})




// document.addEventListener('keydown', function (e) {
//   console.log('>>>>>>>>>>>>');
//   console.log(e);
//   console.log(e.key);
//   if (e.key === 'ArrowLeft') {
//     preSlide();
//   }
//   else {
//     nextSlide();
//   }
//   // e === 'ArrowRight' && nextSlide();
// })





// btnLeft.addEventListener('click', function () {
//   if (curSlide === maxSlide)
//     curSlide = 0;
//   else
//     curSlide++;

//   slides.forEach((s, i) => s.style.transform = `translateX(${100 * (curSlide)}%)`
//   )
// })



// //////////////////////
// //Tabbed Component
// const tabs = document.querySelectorAll('.operations__tab');
// const tabsContainer = document.querySelector('.operations__tab-container');
// const tabsContent = document.querySelectorAll('.operations__content')

// // tabs.forEach(tab => tab.addEventListener('click', () => {
// //   return console.log('>>>>>>>>>>>>>>');
// // }))

// tabsContainer.addEventListener('click', function (e) {
//   const clicked = e.target.closest('.operations__tab');
//   //console.log(clicked);
//   //Gaurd class
//   if (!clicked) return;

//   //ramove calss
//   tabs.forEach(t => t.classList.remove('operations__tab--active'))
//   tabsContent.forEach(c => c.classList.remove('operations__content--active'));

//   //activate tab
//   clicked.classList.add('operations__tab--active')

//   //activate content area
//   console.log(clicked.dataset.tab);
//   document.querySelector(`.operations__content--${clicked.dataset.tab}`).classList.add('operations__content--active');


// })





// const h1 = document.querySelector('h1');
// console.log(h1.querySelectorAll('.highlight'));

// console.log(h1.childNodes);
// console.log(h1.children);  //direct children


// h1.firstElementChild.style.color = "white"
// h1.lastElementChild.style.color = "orangered"

//Going upwards :
// console.log(h1.parentNode);
// console.log(h1.parentElement);

// h1.closest('.header').style.background = 'var(--gradient-secondary)';
// h1.closest('h1').style.background = 'var(--gradient-primary)';

// // Going sideways : sibling
// console.log(h1.previousElementSibling);
// console.log(h1.nextElementSibling);

// console.log(h1.previousSibling);
// console.log(h1.nextSibling);

// console.log(h1.parentElement.children);

// [...h1.parentElement.children].forEach((el) => {
//   if (el !== h1) {
//     el.style.transform = 'scale(.5)';
//   }
// })





const btnScrollTo = document.querySelector('.btn--scroll-to');



btnScrollTo.addEventListener('click', (e) => {
  section1.scrollIntoView({
    behavior: "smooth"
  })

})








///Page navigation
// document.querySelectorAll('.nav__link').forEach((el) => {
//   el.addEventListener('click', function (e) {
//     e.preventDefault();
//     //console.log("Link");
//     const id = this.getAttribute('href');

//     document.querySelector(id).scrollIntoView({
//       behavior: "smooth"
//     })
//   })
// })


// document.querySelector('.nav__links').addEventListener('click', function (e) {
//   // console.log(e.target);
//   e.preventDefault();
//   //Matching strategy
//   if (e.target.classList.contains("nav__link")) {
//     const id = e.target.getAttribute('href');
//     console.log(id);
//     document.querySelector(id).scrollIntoView({
//       behavior: "smooth"
//     })
//   }
// })




// const s1coords = section1.getBoundingClientRect();
// console.log(s1coords);

// console.log(e.target.getBoundingClientRect());

// console.log("current scroll (x/y)", window.pageXOffset, pageYOffset);

// console.log('height/width', document.documentElement.clientHeight, document.documentElement.clientWidth);


//
// window.scrollTo(s1coords.left + window.pageXOffset, s1coords.top + window.pageYOffset)


// window.scrollTo({
//   left: s1coords.left + window.pageXOffset,
//   top: s1coords.top + window.pageYOffset,
//   behavior: "smooth"
// })



// const h1 = document.querySelector('h1');

// const alertH1 = () => {
//   alert("addEventListner : Great! You are reading heading ");

// }

// h1.addEventListener('mouseenter', alertH1)

// setTimeout(() => {
//   h1.removeEventListener('mouseenter', alertH1)
// }, 3000)

// h1.onmouseenter = () => {
//   alert("addEventListner : Great! You are reading heading ");
// }


// const randomInt = (min, max) => {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// }

// const randomColor = () => {
//   return `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;
// }
// console.log(randomColor());

// document.querySelector('.nav__link').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log(">>>>>>>>>>>LINK", e.target, e.currentTarget);

//   //e.stopPropagation();
// })

// document.querySelector('.nav__links').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   // console.log(">>>>>>>>>>>Container", e.target, e.currentTarget);

// })


// document.querySelector('.nav').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   // console.log(">>>>>>>>>>>Nav", e.target, e.currentTarget);
// })



/*

console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

const header = document.querySelector('.header');
console.log(document.querySelector('.header'));
console.log(document.querySelectorAll('.section'));

document.getElementById('section--1');
let allButtons = document.getElementsByTagName("button");
console.log(allButtons);

let btn = document.getElementsByClassName("btn");
console.log(btn);

//Creating and Inserting element

//.insertAdjacentHTML
let message = document.createElement('div');
message.classList.add('cookie-message');
message.textContent = "we use cookies for improved functionality and analytics.";
message.innerHTML = 'we use cookies for improved functionality and analytics. <button class="btn btn--close-cookie"> Got It!  </button>';

// header.prepend(message);
// header.append(message);
// header.append(message.cloneNode(true));
header.before(message);
header.after(message);

//delete element
document.querySelector('.btn--close-cookie').addEventListener('click', function () {
  message.remove();
  // message.parentElement.removeChild(message);
})


//Styles Attribute and classes

message.style.backgroundColor = '#37383d';
message.style.width = '120%';

console.log(message.style.color);
console.log(message.style.backgroundColor);

console.log(getComputedStyle(message).height);
message.style.height = Number.parseInt(getComputedStyle(message).height, 10) + 30 + 'px';
console.log(getComputedStyle(message).height);

document.documentElement.style.setProperty('--color-primary', 'orangered');

//Attribute
const logo = document.querySelector('.nav__logo');
console.log(logo.alt);
console.log(logo.src);

logo.alt = "Beautiful Logo";

console.log(logo.className);
console.log(logo.getAttribute('designer'));

logo.setAttribute("company", 'Bankist')

console.log(logo.src);
console.log(logo.getAttribute('src'));

const link = document.querySelector('.nav__link--btn');
console.log(link.href);
console.log(link.getAttribute('href'));

console.log(logo.dataset.versionNumber);

logo.classList.add('c');
logo.classList.remove('c');
logo.classList.toggle('c');
logo.classList.contains('c');

*/

document.addEventListener("DOMContentLoaded", function (e) {
  console.log("HTML parsed and DOM tree built!", e);
});


window.addEventListener('load', (e) => {
  console.log("page loaded", e);
})

// window.addEventListener('beforeunload', (e) => {
//   e.preventDefault();
//   console.log(e);
//   e.returnValue = "";
// });

