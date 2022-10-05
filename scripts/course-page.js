"use strict";

const ourCourses = document.querySelector(".courses-wrapper");
const modalDialog = document.querySelector(".modal");
const closeModal = document.querySelector(".close-modal");
const overlay = document.querySelector(".overlay");

const createHtml = (course) => {
  ourCourses.insertAdjacentHTML(
    "beforeend",
    `<div class="courses-card">
      <h4>${course.title}</h4>
      <img src="${course.imageUrl}" id="${course.id}" width="400" height="600" />
      <p>StartDate ${course.startDate} --- EndDate ${course.endDate}</p>
      <p>BookEdition ${course.bookEdition} | Price kr ${course.price}</p>
    </div>`
  );
};

const loadImages = () => {
  const images = document.querySelectorAll(".courses-card img");

  images.forEach((image) => {
    let src = image.getAttribute("src");
    let id = image.getAttribute("id");

    image.addEventListener("click", () => {
      openModal(src, id);
    });
  });
};

const getCourses = () => {
  courses.forEach((course) => {
    createHtml(course);
  });
  loadImages();
};

const findCourses = () => {
  const searchValue = searchField.value;
  if (searchValue === "") {
    ourCourses.innerHTML = "";
    getCourses();
    return;
  }

  let found;
  found = courses.filter((course) =>
    course.title.toUpperCase().startsWith(searchValue.toUpperCase())
  );

  ourCourses.innerHTML = "";
  found.forEach((course) => createHtml(course));
};

const openModal = (imageSrc, id) => {
  const image = modalDialog.querySelector(".modal-container");
  image.innerHTML = `<img src=${imageSrc}/>
  <a class="btn" href="course-detail.html?coursesId=${id}">More information</a>`;

  modalDialog.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const quitModal = () => {
  modalDialog.classList.add("hidden");
  overlay.classList.add("hidden");
};

searchBtn.addEventListener("click", (e) => {
  findCourses();
  const images = document.querySelectorAll(".courses-card img");
});

searchField.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    findCourses();
  }
});

closeModal.addEventListener("click", quitModal);
document.addEventListener("keyup", (e) => {
  if (e.key === "Escape") {
    if (!modalDialog.classList.contains("hidden")) quitModal();
  }
});

getCourses();
