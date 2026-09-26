
const searchbox = document.getElementById("searchInput")
const isGoogle = document.getElementById("Google")

searchbox.addEventListener('keydown', Search)

function Search(key) {
  if (key.key == 'Enter') {
    if (isGoogle.selected == true) {
      window.location.href = `https://www.google.com/search?q=${searchbox.value}`
    }
    else {
      window.location.href = `https://www.bing.com/search?q=${searchbox.value}`
    }
  }
}