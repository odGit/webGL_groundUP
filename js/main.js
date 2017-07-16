const vertices = [
  //defines positions of points(vertices) on a screen
    0.0,  0.0, 0.0,
    0.5,  0.0, 0.0,
    0.5,  0.5, 0.0
]

function startGL() {
  const canvas = document.getElementById('glcanvas')
  initGL(canvas) //won't change
  initShaders() //won't change
  initBuffers(vertices, 3, 3) //init scene

  clearScreen() //won't change

  drawScene()
}