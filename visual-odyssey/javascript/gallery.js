// Add to existing JavaScript

// Search functionality
const searchInput = document.getElementById("search");
searchInput.addEventListener("keyup", (e) => {
  const searchValue = e.target.value.toLowerCase();
  const artworks = document.querySelectorAll(".artwork");
  artworks.forEach((artwork) => {
    const title = artwork.querySelector("h2").textContent.toLowerCase();
    if (title.includes(searchValue)) {
      artwork.style.display = "block";
    } else {
      artwork.style.display = "none";
    }
  });
});

// Load More button
const loadMoreButton = document.getElementById("loadMore");
loadMoreButton.addEventListener("click", () => {
  // Add logic to load and display more artworks
  // For example, fetch more artworks from an API or a local JSON file and append them to the gallery
});


const backToTopButton = document.querySelector(".back-to-top");

backToTopButton.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    });
});

// GO top from the bottom

document.addEventListener("DOMContentLoaded", () => {
    const backToTopButton = document.querySelector(".back-to-top");

    backToTopButton.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
        });
    });
});


