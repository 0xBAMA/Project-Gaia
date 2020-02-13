// Generated by CoffeeScript 1.10.0
(function() {
  'use strict';
  var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  ProjectGaia.Materials.VegetationInformation = (function(superClass) {
    extend(VegetationInformation, superClass);

    VegetationInformation.load = function(loadingManager) {
      return new THREE.FileLoader(loadingManager).load('classes/materials/vegetationinformationfragmentshader.glsl', (function(_this) {
        return function(fragmentShader) {
          _this.fragmentShader = fragmentShader;
        };
      })(this));
    };

    function VegetationInformation(options) {
      var parameters;
      parameters = {
        blending: THREE.NoBlending,
        uniforms: _.extend({
          blocksInformation: {
            value: options.blocksInformationTexture.texture
          },
          blocksInformationSize: {
            value: new THREE.Vector2(options.blocksInformationTexture.texture.image.width, options.blocksInformationTexture.texture.image.height)
          },
          vegetationInformation: {
            value: options.vegetationInformationTexture.texture
          },
          vegetationInformationSize: {
            value: new THREE.Vector2(options.vegetationInformationTexture.texture.image.width, options.vegetationInformationTexture.texture.image.height)
          },
          vegetationData: {
            value: options.vegetationDataTexture
          },
          vegetationDataSize: {
            value: new THREE.Vector2(options.vegetationDataTexture.image.width, options.vegetationDataTexture.image.height)
          },
          worldSize: {
            value: options.worldSizeVector
          },
          blockTypesCount: {
            value: _.keys(ProjectGaia.BlockTypes).length
          }
        }, ProjectGaia.Materials.getTimeUniforms()),
        defines: ProjectGaia.Materials.getTypeDefines(),
        vertexShader: ProjectGaia.ComputedTexture.vertexShader,
        fragmentShader: this.constructor.fragmentShader
      };
      VegetationInformation.__super__.constructor.call(this, parameters);
      this.options = options;
    }

    VegetationInformation.prototype.update = function(gameTime) {
      ProjectGaia.Materials.updateTimeUniforms(this.uniforms, gameTime);
      this.uniforms.blocksInformation.value = this.options.blocksInformationTexture.texture;
      this.uniforms.vegetationInformation.value = this.options.vegetationInformationTexture.texture;
      return this.needsUpdate = true;
    };

    return VegetationInformation;

  })(THREE.RawShaderMaterial);

}).call(this);

//# sourceMappingURL=vegetationinformation.js.map
