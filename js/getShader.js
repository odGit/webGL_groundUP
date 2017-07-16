function getShader(gl, id) {
  var shaderScript = document.getElementById(id)
  var shader
  var str = ''
  if(!shaderScript) return null
  
  var k = shaderScript.firstChild
  while (k) {
    if (k.nodeType == 3) {
      str += k.textContent
    }
    k = k.nextSibling
  }
    
  if (shaderScript.type == 'x-shader/x-fragment') {
    shader = gl.createShader(gl.FRAGMENT_SHADER)
  }

  if (shaderScript.type == 'x-shader/x-vertex') {
    shader = gl.createShader(gl.VERTEX_SHADER)
  }

  
  gl.shaderSource(shader, str)
  gl.compileShader(shader)


  if(!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    alert(gl.getShaderInfoLog(shader))
    return null
  }
  return shader
}