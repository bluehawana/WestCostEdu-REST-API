'use strict';

const description = document.querySelector('#description');
const title = document.querySelector('#title');
const image = document.querySelector('#heading img');

const urlParams = new URLSearchParams(location.search);

let courseId = 0;

for (let [key, value] of urlParams) {
  if (key === 'courseId') {
    courseId = value;
  }
}

const course = course.find((course) => course.id == courseId);

image.setAttribute('src', course.imageUrl);
image.setAttribute('width', '600');

title.innerHTML += `<span style="font-weight:bold;color:#888;">&nbsp;${courses.title}</span>`;
