(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/uv.frag.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '915fe3S0PtD0ahMNvHEw07+', 'uv.frag', __filename);
// Script/uv.frag.js

"use strict";

// gray.frag.js
module.exports = "\n#ifdef GL_ES\nprecision lowp float;\n#endif\n\nuniform float u_frameMoveY;\n\nvarying vec4 v_fragmentColor;\nvarying vec2 v_texCoord;\nvoid main()\n{\n    float temp = mod(u_frameMoveY + v_texCoord.y, 1.0);\n    gl_FragColor = v_fragmentColor * texture2D(CC_Texture0, vec2(v_texCoord.x, temp));    \n}\n";

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
        //# sourceMappingURL=uv.frag.js.map
        