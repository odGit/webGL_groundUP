function mat4_identity() {
  var M = new Array(16);
  M[ 0] = 1; M[ 1] = 0; M[ 2] = 0; M[ 3] = 0;
  M[ 4] = 0; M[ 5] = 1; M[ 6] = 0; M[ 7] = 0;
  M[ 8] = 0; M[ 9] = 0; M[10] = 1; M[11] = 0;
  M[12] = 0; M[13] = 0; M[14] = 0; M[15] = 1;
  return M
}

function mat4_rotation_y(theta) {
  var c = Math.cos(theta)
  var s = Math.sin(theta)  
  var M = new Array(16)
  M[ 0] = c; M[ 1] = 0; M[ 2] = s; M[ 3] = 0;
  M[ 4] = 0; M[ 5] = 1; M[ 6] = 0; M[ 7] = 0;
  M[ 8] =-s; M[ 9] = 0; M[10] = c; M[11] = 0;
  M[12] = 0; M[13] = 0; M[14] = 0; M[15] = 1;
  return M
}

function mat4_translation(x, y, z) {
  var M = new Array(16)
  M[ 0] = 1; M[ 1] = 0; M[ 2] = 0; M[ 3] = x;
  M[ 4] = 0; M[ 5] = 1; M[ 6] = 0; M[ 7] = y;
  M[ 8] = 0; M[ 9] = 0; M[10] = 1; M[11] = z;
  M[12] = 0; M[13] = 0; M[14] = 0; M[15] = 1;
  return M
}

function mat4_scaling(x, y, z) {
  var M = new Array(16)
  M[ 0] = x; M[ 1] = 0; M[ 2] = 0; M[ 3] = 0;
  M[ 4] = 0; M[ 5] = y; M[ 6] = 0; M[ 7] = 0;
  M[ 8] = 0; M[ 9] = 0; M[10] = z; M[11] = 0;
  M[12] = 0; M[13] = 0; M[14] = 0; M[15] = 1;
  return M
}

function mat4_perspective(vertical_fov, aspect_ratio, near, far) {
  var y = 1.0 / Math.tan(vertical_fov / 2)
  var x = y / aspect_ratio
  var a = (near + far) / (near - far)
  var b = (2 * near * far) / (near - far)
  var M = new Array(16)
  M[ 0] = x; M[ 1] = 0; M[ 2] = 0; M[ 3] = 0;
  M[ 4] = 0; M[ 5] = y; M[ 6] = 0; M[ 7] = 0;
  M[ 8] = 0; M[ 9] = 0; M[10] = a; M[11] = b;
  M[12] = 0; M[13] = 0; M[14] =-1; M[15] = 0;
  return M
}

function mat4_mul(A, B) {
  var M = new Array(16)
  for (var i = 0; i != 4; i++) {
    for (var j = 0; j != 4; j++) {
      M[i * 4 + j] = 0
      for (var k = 0; k != 4; k++){
        M[i * 4 + j] += A[i * 4 + k] * B[k * 4 + j]
      }
    }
  }
  return M
}

function mat4_transpose(A) {
  var M = new Array(16)
  for (var i = 0; i != 4; i++) {
    for (var j = 0; j != 4; j++) {
      M[i * 4 + j] = A[j * 4 + i]
    }
  }
  return M
}