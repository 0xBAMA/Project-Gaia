// Get block information for current block.
ivec3 blockPosition = ivec3(blockCoordinates);
vec4 blockInformation = texture2D(blocksInformation, getTextureCoordinatesForPosition(blockPosition));

// See if the block is empty.
int blockMaterial = int(blockInformation.a * 255.0);
if (discardInvisible && blockMaterial == 0) {
  gl_Position = vec4(0);
  return;
}

// See if the neighbor towards the vertex is facing is also full.
ivec3 neighborPosition = ivec3(blockCoordinates + normal);
int neighborBlockMaterial = getBlockMaterialForPosition(neighborPosition);
if (neighborBlockMaterial > 0) {
  // No need to draw this face since it's inside the model.
  gl_Position = vec4(0);
  return;
}
