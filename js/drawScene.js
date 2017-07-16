function drawScene() {
  gl.bindBuffer(gl.ARRAY_BUFFER, vertexPositionBuffer)
  gl.vertexAttribPointer(aVertexPosition, 3, gl.FLOAT, false, 0, 0)
  gl.drawArrays(gl.TRIANGLES, 0, vertexPositionBuffer.numItems)
}