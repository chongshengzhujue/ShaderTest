// gray.frag.js
module.exports =
`
#ifdef GL_ES
precision lowp float;
#endif

uniform float u_frameMoveY;

varying vec4 v_fragmentColor;
varying vec2 v_texCoord;
void main()
{
    float temp = mod(u_frameMoveY + v_texCoord.y, 1.0);
    gl_FragColor = v_fragmentColor * texture2D(CC_Texture0, vec2(v_texCoord.x, temp));    
}
`