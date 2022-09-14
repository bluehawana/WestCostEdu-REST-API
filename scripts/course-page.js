'use strict';

const ourCourses = document.querySelector('.courses-wrapper');
const modalDialog = document.querySelector('.modal');
const closeModal = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');




const createHtml = (course) => {
  ourCourses.insertAdjacentHTML(
    'beforeend',
    `<div class="courses-card">
      <h4>${course.title}</h4>
      <img src="${course.imageUrl}" id="${course.id}" width="400" height="600" />
      <p>StartDate ${course.startDate} --- EndDate ${course.endDate}</p>
      <p>Model ${course.modelYear} | Price kr ${course.price}</p>
    </div>`
  );
};

const loadImages = () => {
  const images = document.querySelectorAll('.courses-card img');

  images.forEach((image) => {
    let src = image.getAttribute('src');
    let id = image.getAttribute('id');

    image.addEventListener('click', () => {
      openModal(src, id);
    });
  });
};

const getCourses = () => {
  vehicles.forEach((vehicle) => {
    createHtml(vehicle);
  });
  loadImages();
};

const findVehicles = () => {
  const searchValue = searchField.value;
  if (searchValue === '') {
    ourCourses.innerHTML = '';
    getCourses();
    return;
  }

  let found;
  found = vehicles.filter(

    (vehicle) =>
      vehicle.make.toUpperCase().startsWith(searchValue.toUpperCase())
  );

  ourCourses.innerHTML = '';
  found.forEach((vehicle) => createHtml(vehicle));
};

const openModal = (imageSrc, id) => {
  const image = modalDialog.querySelector('.modal-container');
  image.innerHTML = `<img src=${imageSrc}/>
  <a class="btn" href="course-detail.html?coursesId=${id}">More information</a>`;

  modalDialog.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const quitModal = () => {
  modalDialog.classList.add('hidden');
  overlay.classList.add('hidden');
};


searchBtn.addEventListener('click', (e) => {
  findVehicles();
  const images = document.querySelectorAll('.courses-card img');
});


searchField.addEventListener('keyup', (e) => {
  if (e.key === 'Enter') {
    findVehicles();
  }
});

closeModal.addEventListener('click', quitModal);
document.addEventListener('keyup', (e) => {
  if (e.key === 'Escape') {
    if (!modalDialog.classList.contains('hidden')) quitModal();
  }
});


getCourses();
