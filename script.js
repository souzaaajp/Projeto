function togglemode() {
  const hmtl = document.documentElement
  hmtl.classList.toggle("light")

  const img = document.querySelector("#profile img")

  if (hmtl.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    img.setAttribute("src", "./assets/avatar.png")
  }
}
