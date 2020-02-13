// Generated by CoffeeScript 1.10.0
(function() {
  'use strict';
  var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  ProjectGaia.ComputedTexture = (function() {
    ComputedTexture.vertexShader = "attribute vec3 position;\nattribute vec2 uv;\n\nvarying vec2 vUv;\n\nvoid main() {\n  gl_Position = vec4(position, 1.0);\n  vUv = uv;\n}";

    function ComputedTexture(options1) {
      var i, image, initializationMaterial, j, ref, renderTarget;
      this.options = options1;
      this.renderTargets = [];
      image = (ref = this.options.initializationTexture) != null ? ref.image : void 0;
      for (i = j = 0; j <= 1; i = ++j) {
        renderTarget = new THREE.WebGLRenderTarget((image != null ? image.width : void 0) || this.options.width, (image != null ? image.height : void 0) || this.options.height, {
          minFilter: THREE.NearestFilter,
          magFilter: THREE.NearestFilter
        });
        this.renderTargets.push(renderTarget);
      }
      this.quad = new THREE.Mesh(new THREE.PlaneBufferGeometry(2, 2));
      this.quad.position.set(0.5, 0.5, -1);
      this.scene = new THREE.Scene();
      this.scene.add(this.quad);
      this.camera = new THREE.OrthographicCamera(0, 1, 0, 1, 0.5, 1.5);
      if (this.options.initializationTexture) {
        initializationMaterial = new this.constructor.InitializationMaterial({
          map: this.options.initializationTexture
        });
        this.quad.material = initializationMaterial;
        this.options.renderer.setRenderTarget(this.renderTargets[1]);
        this.options.renderer.render(this.scene, this.camera);
      }
      this.quad.material = this.options.material;
      this.texture = this.renderTargets[1].texture;
    }

    ComputedTexture.prototype.setMaterial = function(material) {
      return this.quad.material = material;
    };

    ComputedTexture.prototype.update = function(gameTime) {
      this.renderTargets = [this.renderTargets[1], this.renderTargets[0]];
      this.quad.material.uniforms[this.options.mapName].value = this.renderTargets[0].texture;
      this.options.renderer.setRenderTarget(this.renderTargets[1]);
      this.options.renderer.render(this.scene, this.camera);
      return this.texture = this.renderTargets[1].texture;
    };

    ComputedTexture.InitializationMaterial = (function(superClass) {
      extend(InitializationMaterial, superClass);

      function InitializationMaterial(options) {
        InitializationMaterial.__super__.constructor.call(this, {
          blending: THREE.NoBlending,
          uniforms: _.extend({
            map: {
              value: options.map
            }
          }),
          vertexShader: ProjectGaia.ComputedTexture.vertexShader,
          fragmentShader: "precision mediump float;\n\nuniform sampler2D map;\nvarying vec2 vUv;\n\nvoid main() {\n  gl_FragColor = texture2D(map, vUv);\n}\n"
        }, this.map = options.map, this.needsUpdate = true);
      }

      return InitializationMaterial;

    })(THREE.RawShaderMaterial);

    return ComputedTexture;

  })();

}).call(this);

//# sourceMappingURL=computedtexture.js.map
