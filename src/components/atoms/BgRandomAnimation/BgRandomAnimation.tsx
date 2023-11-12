import { useMemo, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { SimplexNoise } from "three/examples/jsm/math/SimplexNoise.js";
const simplex = new SimplexNoise();

const Circle = () => {
  const meshRef = useRef(null);
  const timeRef = useRef(0);
  const { size } = useThree(); // キャンバスのサイズを取得

  // キャンバスのサイズに基づいて円のサイズを計算
  const radius = useMemo(() => size.width * 0.014, [size.width]);

  useFrame(() => {
    timeRef.current += 0.0018; // この値を調整することで動きの速さを変えられます

    const noiseX = simplex.noise(timeRef.current, 0);
    const noiseY = simplex.noise(0, timeRef.current);

    // ノイズ関数の出力を使用して円の新しい位置を決定します
    // 出力は-1と1の間なので、適切なスケールに調整します
    const posX = noiseX * 5; // スケールを調整
    const posY = noiseY * 5; // スケールを調整

    if (meshRef.current) {
      // lerp関数を使って滑らかに移動させます
      (meshRef.current as THREE.Mesh).position.lerp(
        new THREE.Vector3(posX, posY, 0),
        0.1
      );
    }
  });

  const vertexShader = `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `;

  const fragmentShader = `
  varying vec2 vUv;
  float random(vec2 st){
    return fract(sin(dot(st.xy, vec2(12.9898,78.233)))*43758.5453123);
  }

  void main() {
    float noise = random(vUv);
    vec3 baseColor = vec3(1.0, 1.0, 1.0); // ベースの色（白）

    // 中心からの距離を計算（UVは0.0〜1.0なので2.0で乗算して範囲を1.0にします）
    float dist = distance(vUv, vec2(0.5, 0.5)) * 2.0;
    
    // エッジでのぼかしを決定するためのしきい値
    float edgeBlur = 0.2;
    
    // エッジに近づくにつれてアルファ値を0にする
    float alpha = smoothstep(edgeBlur, edgeBlur + 0.1, dist);

    // 最終的なカラー値（アルファを含む）
    //(1.0 - noise * 0.1)の0.1のところで円本体の濃度を調整
    gl_FragColor = vec4(baseColor * (1.0 - noise * 0.12), 1.0 - alpha);
  }
`;

  return (
    <mesh ref={meshRef}>
      <circleGeometry args={[radius, 128]} />
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        transparent // 透明度を有効にする
      />
    </mesh>
  );
};

const MovingNoiseCircle = () => {
  return (
    <Canvas style={{ position: "fixed", top: 0, left: 0, zIndex: -20 }}>
      <Circle />
    </Canvas>
  );
};

export default MovingNoiseCircle;
