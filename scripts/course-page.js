"use strict";

const ourCourses = document.querySelector(".courses-wrapper");
const modal = document.querySelector(".modal");
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
      <detail description="${course.description}" class="btn">More info</detail>
    </div>`
  );
};

const loadDetails = () => {
  const details = document.querySelectorAll(".courses-card detail");

  details.forEach((detail) => {
    let description = detail.getAttribute("description");
    detail.addEventListener("click", () => {
      openModal(description);
    });
  });
};

const getCourses = () => {
  courses.forEach((course) => {
    createHtml(course);
  });
  loadDetails();
};

const openModal = (e) => {
  const description = modal.querySelector(".modal-container");
  description.innerHTML = `<a>${e}</a>`;
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const quitModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

closeModal.addEventListener("click", quitModal);
document.addEventListener("keyup", (e) => {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) quitModal();
});

getCourses();
