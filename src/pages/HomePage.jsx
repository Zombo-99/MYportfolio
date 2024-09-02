import React, { useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { Canvas } from "@react-three/fiber";
import { ScrollControls } from "@react-three/drei";
import { EffectComposer, Noise } from "@react-three/postprocessing";
import { Experience } from "../components/Experience";
import { Overlay } from "../components/Overlay";
import { usePlay } from "../contexts/Play";

const HomePage = () => {
  const { play, end } = usePlay();
  const navigate = useNavigate();

  const effects = useMemo(
    () => (
      <EffectComposer>
        <Noise opacity={0.08} />
      </EffectComposer>
    ),
    []
  );

  useEffect(() => {
    if (end) {
      const timer = setTimeout(() => {
        navigate('/other');
      }, 6000); // Wait 5 seconds before navigating

      return () => clearTimeout(timer); // Cleanup timer on component unmount or when `end` changes
    }
  }, [end, navigate]);

  return (
    <>
      <Canvas>
        <color attach="background" args={["#ececec"]} />
        <ScrollControls
          pages={play && !end ? 20 : 0}
          damping={0.5}
          style={{
            top: "10px",
            left: "0px",
            bottom: "10px",
            right: "10px",
            width: "auto",
            height: "auto",
            animation: "fadeIn 2.4s ease-in-out 1.2s forwards",
            opacity: 0,
          }}
        >
          <Experience />
        </ScrollControls>
        {effects}
      </Canvas>
      <Overlay />
    </>
  );
};

export default HomePage;
