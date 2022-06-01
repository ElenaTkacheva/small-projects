const back = document.querySelector('#back');
const next = document.querySelector('#next');
const photos = [
  "img1.png",
  "img2.png",
  "img3.png",
  "img4.png",
  "img5.png",
  "img6.png",
  "img7.png",
  "img8.png",
  "img9.png",
  "img10.png",
];

let i = 0;

next.addEventListener('click', () => {
    i++;
    if(i > (photos.length - 1)) {
        i =0;
    }
    document.querySelector('#photo').src = photos[i];
});

back.addEventListener("click", () => {
  i--;
  if (i < 0) {
    i = photos.length - 1;
  }
  document.querySelector("#photo").src = photos[i];
});