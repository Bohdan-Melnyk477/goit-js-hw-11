import "./css/style.css";

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import { getImagesByQuery } from "./js/pixabay-api.js";
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from "./js/render-functions.js";

const form = document.querySelector(".form");
const input = form.querySelector("input[name='search-text']");

form.addEventListener("submit", event => {
  event.preventDefault();

  const query = input.value.trim();

  if (!query) {
    iziToast.error({
      message: "Please enter a search term",
      position: "topRight",
    });
    return;
  }

  clearGallery();
  showLoader();

  getImagesByQuery(query)
    .then(data => {
      if (!data.hits.length) {
        iziToast.info({
          message:
            "Sorry, there are no images matching your search query. Please try again!",
          position: "topRight",
        });
        return;
      }

      createGallery(data.hits);
      form.reset();
    })
    .catch(() => {
      iziToast.error({
        message: "Failed to fetch images. Please try again later.",
        position: "topRight",
      });
    })
    .finally(() => {
      hideLoader();
    });
});