var vertexPositionBuffer

function initBuffers(vertices, itemSize, numItems) {
  vertexPositionBuffer = gl.createBuffer()
  gl.bindBuffer(gl.ARRAY_BUFFER, vertexPositionBuffer)
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW)
  vertexPositionBuffer.itemSize = itemSize
  vertexPositionBuffer.numItems = numItems
}