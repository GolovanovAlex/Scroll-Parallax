let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountainsBehind = document.getElementById('mountains_behind');
let mountainsFront = document.getElementById('mountains_front');
let btn = document.getElementById('btn');
let title = document.getElementById('text');

window.addEventListener('scroll', function () {
  let value = window.scrollY;
  stars.style.left = value * 0.25 + 'px';
  moon.style.right = value + 'px';
});
