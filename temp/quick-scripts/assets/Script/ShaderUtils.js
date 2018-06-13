(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/ShaderUtils.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'a0715B5R5NNaqPZRrqhC6yT', 'ShaderUtils', __filename);
// Script/ShaderUtils.js

"use strict";

var ShaderUtils = {
    shaderPrograms: {},

    setShader: function setShader(sprite, shaderName) {
        var glProgram = this.shaderPrograms[shaderName];
        if (!glProgram) {
            glProgram = new cc.GLProgram();
            var vert = require(cc.js.formatStr("%s.vert", shaderName));
            var frag = require(cc.js.formatStr("%s.frag", shaderName));
            glProgram.initWithString(vert, frag);
            if (!cc.sys.isNative) {
                glProgram.initWithVertexShaderByteArray(vert, frag);
                glProgram.addAttribute(cc.macro.ATTRIBUTE_NAME_POSITION, cc.macro.VERTEX_ATTRIB_POSITION);
                glProgram.addAttribute(cc.macro.ATTRIBUTE_NAME_COLOR, cc.macro.VERTEX_ATTRIB_COLOR);
                glProgram.addAttribute(cc.macro.ATTRIBUTE_NAME_TEX_COORD, cc.macro.VERTEX_ATTRIB_TEX_COORDS);
            }
            glProgram.link();
            glProgram.updateUniforms();
            this.shaderPrograms[shaderName] = glProgram;
        }
        sprite._sgNode.setShaderProgram(glProgram);
    },

    setUniformIf: function setUniformIf(sprite, name, value) {
        var glProgram = sprite._sgNode.getShaderProgram();

        if (glProgram) {
            if (cc.sys.isNative) {
                var glProgram_state = cc.GLProgramState.getOrCreateWithGLProgram(glProgram);
                glProgram_state.setUniformFloat(name, value);
            } else {
                //let location = glProgram.getUniformLocationForName(name);
                glProgram.setUniformLocationWith1f(name, value);
            }
        }
    },
    use: function use(sprite) {
        var glProgram = sprite._sgNode.getShaderProgram();
        glProgram.use();

        if (cc.sys.isNative) {
            var programState = sprite._sgNode.getGLProgramState();
            if (programState) {}
        }
    }
};

module.exports = ShaderUtils;

cc._RF.pop();
        }
        if (CC_EDITOR) {
            __define(__module.exports, __require, __module);
        }
        else {
            cc.registerModuleFunc(__filename, function () {
                __define(__module.exports, __require, __module);
            });
        }
        })();
        //# sourceMappingURL=ShaderUtils.js.map
        