#ifdef GL_ES
precision highp float;
#endif

uniform float u_time;               
uniform vec2 u_resolution;

void main(){
    vec2 coord = (gl_FragCoord.xy * 2.0 - u_resolution) / min(u_resolution.x, u_resolution.y);
    float color = 1.0;

    color -= 0.1 * ((u_time) + 0.2) / length(coord);

    gl_FragColor = vec4(vec3(color), 2);
}