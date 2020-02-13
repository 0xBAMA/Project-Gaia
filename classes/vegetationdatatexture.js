// Generated by CoffeeScript 1.10.0
(function() {
  'use strict';
  var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  ProjectGaia.VegetationDataTexture = (function(superClass) {
    extend(VegetationDataTexture, superClass);

    function VegetationDataTexture() {
      var blockMaterial, dataArray, height, i, index, j, k, model, modelOffset, ref, ref1, ref2, ref3, rowOffset, vegetationTypeIndex, vegetationTypeName, vegetationTypesCount, width, x, y, z;
      vegetationTypesCount = _.keys(ProjectGaia.VegetationTypes).length;
      width = 4096;
      height = vegetationTypesCount;
      dataArray = new Uint8Array(width * height);
      ref = ProjectGaia.VegetationTypes;
      for (vegetationTypeName in ref) {
        vegetationTypeIndex = ref[vegetationTypeName];
        if (!(vegetationTypeIndex)) {
          continue;
        }
        rowOffset = vegetationTypeIndex * width;
        model = ProjectGaia.VoxelWorld.vegetationModels[vegetationTypeIndex];
        dataArray[rowOffset] = model.width;
        dataArray[rowOffset + 1] = model.height;
        dataArray[rowOffset + 2] = model.depth;
        modelOffset = rowOffset + 3;
        for (z = i = 0, ref1 = model.depth; 0 <= ref1 ? i < ref1 : i > ref1; z = 0 <= ref1 ? ++i : --i) {
          for (y = j = 0, ref2 = model.height; 0 <= ref2 ? j < ref2 : j > ref2; y = 0 <= ref2 ? ++j : --j) {
            for (x = k = 0, ref3 = model.width; 0 <= ref3 ? k < ref3 : k > ref3; x = 0 <= ref3 ? ++k : --k) {
              index = modelOffset + x + y * model.width + z * model.width * model.height;
              blockMaterial = model.blocks[x][y][z].material;
              dataArray[index] = blockMaterial;
              dataArray[index + 1] = blockMaterial ? 255 : 0;
            }
          }
        }
      }
      VegetationDataTexture.__super__.constructor.call(this, dataArray, width, height, THREE.AlphaFormat);
    }

    return VegetationDataTexture;

  })(THREE.DataTexture);

}).call(this);

//# sourceMappingURL=vegetationdatatexture.js.map
