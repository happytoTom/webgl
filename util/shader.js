function initShader(gl, VERTEX_SHADER, FRAG_SHADER) {
  let vertex = gl.createShader(gl.VERTEX_SHADER);
  let frag = gl.createShader(gl.FRAGMENT_SHADER);
  gl.shaderSource(vertex, VERTEX_SHADER);
  gl.shaderSource(frag, FRAG_SHADER);

  gl.compileShader(vertex);
  gl.compileShader(frag);

  let program = gl.createProgram();
  gl.attachShader(program, vertex);
  gl.attachShader(program, frag);
  gl.linkProgram(program);
  gl.useProgram(program);
  return program;
}
