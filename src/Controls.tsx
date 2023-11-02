import * as React from "react";
import { extend, useThree, useFrame } from "react-three-fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

extend({ OrbitControls });

declare global {
  namespace JSX {
    interface IntrinsicElements {
      orbitControls: Partial<OrbitControls> & {
        ref?: React.Ref<OrbitControls>;
        args: [THREE.Camera, HTMLElement?];
      };
    }
  }
}

export const Controls = () => {
  const { camera, gl } = useThree();
  const ref: React.Ref<OrbitControls> = React.useRef(null);
  useFrame(() => ref.current.update());
  return (
    <orbitControls ref={ref} args={[camera, gl.domElement]} enableDamping />
  );
};
