let searchbar = document.getElementById("searchbar");
let btnSearch = document.getElementById("btn-gs");
let btnIfl = document.getElementById("btn-ifl");

searchbar.addEventListener("keydown", (e) => {
  const value = searchbar.value;
  if (e.code === "Enter") {
    location.replace("https:/www.google.com/search?q=" + value);
  }
});

btnSearch.addEventListener("click", (e) => {
  const value = searchbar.value;
  location.replace("https://www.google.com/search?q=" + value);
});

btnIfl.addEventListener("click", (e) => {
  location.replace("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
});
