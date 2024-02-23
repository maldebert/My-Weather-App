function handleSearchSubmit(event) {
  event.preventDefault();

  let searchInput = querySelector("#search-form-input");
  let cityElement = querySelector("#city");
  cityElement.innerHTML = searchInput.value;
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);
