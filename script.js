function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")

  if(html.classList.contains('light')) {
    //se tiver light mode, adicionar a imagem light
    img.setAttribute('src', './assets/avatar.png')
  } else {
    // se tiver sem light mode, manter imagem normal
    img.setAttribute('src', './assets/avatar-light.png')
  }

}