var gl;
  
function initGL(canvas) {
  try {
    gl = canvas.getContext('webgl')
    gl.viewportWidth = canvas.width;
    gl.viewportHeight = canvas.height;
  } catch(e) {
    console.log('ERROR: on getContext("webgl")')
  }
  if (!gl) {alert('Could not inialize WebGl')}
}