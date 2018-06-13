
var ShaderUtils = {
    shaderPrograms: {},

    setShader: function(sprite, shaderName) {
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

    setUniformIf(sprite, name, value) {
        let glProgram = sprite._sgNode.getShaderProgram();

        if (glProgram) {
            if (cc.sys.isNative) {
                const glProgram_state = cc.GLProgramState.getOrCreateWithGLProgram( glProgram );
                glProgram_state.setUniformFloat( name, value);
            } else {
                //let location = glProgram.getUniformLocationForName(name);
                glProgram.setUniformLocationWith1f(name, value);
            }
        }
    },

    use(sprite) {
        let glProgram = sprite._sgNode.getShaderProgram();
        glProgram.use();

        if (cc.sys.isNative)
        {
            let programState = sprite._sgNode.getGLProgramState();
            if (programState) {
                
            }
        }
    }
};

module.exports = ShaderUtils;