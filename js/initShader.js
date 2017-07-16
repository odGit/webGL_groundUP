var shaderProgram
var aVertexPosition

function initShaders() {
  var fragmentShader = getShader(gl, 'shader-fs')
  var vertexShader = getShader(gl, 'shader-vs')

  shaderProgram = gl.createProgram()
  gl.attachShader(shaderProgram, vertexShader)
  gl.attachShader(shaderProgram, fragmentShader)
  gl.linkProgram(shaderProgram)

  if(!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) {
    alert('Could not initialize shaderProgram')
  }

  gl.useProgram(shaderProgram)

  aVertexPosition = gl.getAttribLocation(shaderProgram, 'aVertexPosition')
  gl.enableVertexAttribArray(aVertexPosition)

}