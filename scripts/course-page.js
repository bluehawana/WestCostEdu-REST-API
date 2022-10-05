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
      <bottom description="${course.description}" class="btn">More info</bottom>
    </div>`
  );
};

const loadBottoms = () => {
  const bottoms = document.querySelectorAll(".courses-card bottom");

  bottoms.forEach((bottom) => {
    let description = bottom.getAttribute("description");
    bottom.addEventListener("click", () => {
      openModal(description);
    });
  });
};

const getCourses = () => {
  courses.forEach((course) => {
    createHtml(course);
  });
  loadBottoms();
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

const openModal = (e) => {
  const description = modalDialog.querySelector(".modal-container");
  description.innerHTML = `<a>${e}</a>`;
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
