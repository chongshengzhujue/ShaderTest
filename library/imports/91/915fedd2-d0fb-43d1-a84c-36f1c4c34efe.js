"use strict";
cc._RF.push(module, '915fe3S0PtD0ahMNvHEw07+', 'uv.frag');
// Script/uv.frag.js

"use strict";

// gray.frag.js
module.exports = "\n#ifdef GL_ES\nprecision lowp float;\n#endif\n\nuniform float u_frameMoveY;\n\nvarying vec4 v_fragmentColor;\nvarying vec2 v_texCoord;\nvoid main()\n{\n    float temp = mod(u_frameMoveY + v_texCoord.y, 1.0);\n    gl_FragColor = v_fragmentColor * texture2D(CC_Texture0, vec2(v_texCoord.x, temp));    \n}\n";

cc._RF.pop();