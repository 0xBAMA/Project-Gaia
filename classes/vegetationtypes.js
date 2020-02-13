// Generated by CoffeeScript 1.10.0
(function() {
  'use strict';
  var vegetationTypeIndex, vegetationTypeName;

  ProjectGaia.VegetationTypes = {
    Empty: 0,
    TreeBirchSmall: null,
    TreeBirchSmall2: null,
    TreeOak: null,
    TreeOakLarge: null,
    TreePineTundra: null,
    TreeRainforest1: null,
    TreeSoil1: null,
    TreeSoil2: null,
    TreeSoilSmall: null
  };

  vegetationTypeIndex = 1;

  for (vegetationTypeName in ProjectGaia.VegetationTypes) {
    if (!(ProjectGaia.VegetationTypes[vegetationTypeName] == null)) {
      continue;
    }
    ProjectGaia.VegetationTypes[vegetationTypeName] = vegetationTypeIndex;
    vegetationTypeIndex++;
  }

}).call(this);

//# sourceMappingURL=vegetationtypes.js.map