import { useEffect, useRef } from 'react';

export default function LavaLampBackground() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;


        const gl = canvas.getContext('webgl');
        if (!gl) {
            console.error('WebGL not supported');
            return;
        }


        let width, height;
        const resizeCanvas = () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
            gl.viewport(0, 0, width, height);
        };
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);


        const mouse = { x: width / 2, y: height / 2 };
        const onMouseMove = (e) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        };
        window.addEventListener('mousemove', onMouseMove);


        const circleColors = [
            [18 / 255, 113 / 255, 1.0],
            [221 / 255, 74 / 255, 1.0],
            [100 / 255, 220 / 255, 1.0],
            [200 / 255, 50 / 255, 50 / 255],
            [180 / 255, 180 / 255, 50 / 255],
            [140 / 255, 100 / 255, 1.0],
        ];

        let circles = [];
        const initCircles = () => {
            circles = [];
            const baseRadius = (width + height) * 0.2;
            for (let i = 0; i < 5; i++) {
                const radius = baseRadius;
                const x = Math.random() * width;
                const y = Math.random() * height;
                const speed = Math.random() * 4 + 1;
                const vx = (Math.random() - 0.5) * speed;
                const vy = (Math.random() - 0.5) * speed;
                circles.push({ x, y, radius, color: circleColors[i], vx, vy, interactive: false });
            }

            const r = (width + height) * 0.1;
            circles.push({ x: width / 2, y: height / 2, radius: r, color: circleColors[5], vx: 0, vy: 0, interactive: true });
        };
        initCircles();


        const vertexSrc = `
      attribute vec2 a_position;
      varying vec2 v_uv;
      void main() {
        v_uv = a_position * 0.5 + 0.5;
        v_uv.y = 1.0 - v_uv.y;
        gl_Position = vec4(a_position, 0.0, 1.0);
      }
    `;

        const fragmentSrc = `
      precision mediump float;
      varying vec2 v_uv;

      uniform vec2 u_resolution;
      uniform int  u_circleCount;
      uniform vec3 u_circlesColor[6];
      uniform vec3 u_circlesPosRad[6];

      void main() {
        vec2 st = v_uv * u_resolution;

        vec3 topColor    = vec3(108.0/255.0, 0.0, 162.0/255.0);
        vec3 bottomColor = vec3(0.0, 17.0/255.0, 82.0/255.0);
        vec3 bg          = mix(topColor, bottomColor, st.y / u_resolution.y);

        float fieldSum = 0.0;
        vec3  weighted = vec3(0.0);

        for (int i = 0; i < 6; i++) {
          if (i >= u_circleCount) break;
          vec3 pr = u_circlesPosRad[i];
          vec2 c  = vec2(pr.r, pr.g);
          float r = pr.b;

          float d   = length(st - c);
          float val = exp(-(d*d)/(2.0 * r * r * 0.25));
          fieldSum     += val;
          weighted     += u_circlesColor[i] * val;
        }

        vec3 circleCol = (fieldSum > 0.0) ? weighted / fieldSum : vec3(0.0);
        float intensity = pow(fieldSum, 1.4);
        gl_FragColor = vec4(mix(bg, circleCol, clamp(intensity, 0.0, 1.0)), 1.0);
      }
    `;

        const compile = (type, src) => {
            const sh = gl.createShader(type);
            gl.shaderSource(sh, src);
            gl.compileShader(sh);
            if (!gl.getShaderParameter(sh, gl.COMPILE_STATUS))
                console.error(gl.getShaderInfoLog(sh));
            return sh;
        };

        const prog = gl.createProgram();
        gl.attachShader(prog, compile(gl.VERTEX_SHADER, vertexSrc));
        gl.attachShader(prog, compile(gl.FRAGMENT_SHADER, fragmentSrc));
        gl.linkProgram(prog);
        gl.useProgram(prog);


        const verts = new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]);
        const quad  = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, quad);
        gl.bufferData(gl.ARRAY_BUFFER, verts, gl.STATIC_DRAW);

        const aPos = gl.getAttribLocation(prog, 'a_position');
        gl.enableVertexAttribArray(aPos);
        gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 0, 0);

        const uRes         = gl.getUniformLocation(prog, 'u_resolution');
        const uCount       = gl.getUniformLocation(prog, 'u_circleCount');
        const uColors      = gl.getUniformLocation(prog, 'u_circlesColor');
        const uPosRad      = gl.getUniformLocation(prog, 'u_circlesPosRad');

        /* ---------- 7. Animation loop ---------- */
        const updateCircles = () => {
            circles.forEach((c) => {
                if (!c.interactive) {
                    c.x += c.vx;
                    c.y += c.vy;
                    if (c.x - c.radius > width)  c.x = -c.radius;
                    if (c.x + c.radius < 0)      c.x = width + c.radius;
                    if (c.y - c.radius > height) c.y = -c.radius;
                    if (c.y + c.radius < 0)      c.y = height + c.radius;
                } else {
                    c.x += (mouse.x - c.x) * 0.1;
                    c.y += (mouse.y - c.y) * 0.1;
                }
            });
        };

        let animId;
        const render = () => {
            updateCircles();

            gl.viewport(0, 0, width, height);
            gl.clear(gl.COLOR_BUFFER_BIT);

            gl.uniform2f(uRes, width, height);
            gl.uniform1i(uCount, circles.length);

            const colArr = new Float32Array(18); // 6*3
            const prArr  = new Float32Array(18);
            circles.forEach((c, i) => {
                colArr.set(c.color, i * 3);
                prArr.set([c.x, c.y, c.radius], i * 3);
            });
            gl.uniform3fv(uColors, colArr);
            gl.uniform3fv(uPosRad, prArr);

            gl.drawArrays(gl.TRIANGLES, 0, 6);
            animId = requestAnimationFrame(render);
        };
        render();


        return () => {
            cancelAnimationFrame(animId);
            window.removeEventListener('resize', resizeCanvas);
            window.removeEventListener('mousemove', onMouseMove);
            gl.getExtension('WEBGL_lose_context')?.loseContext();
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'fixed',
                inset: 0,
                width: '100vw',
                height: '100vh',
                zIndex: -1,
                pointerEvents: 'none',
            }}
        />
    );

}

//The code was taken from https://codepen.io/haljasala/pen/pvzbpXd and edited by me for React.