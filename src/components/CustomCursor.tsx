// import { useState, useEffect } from 'react';

//Trying different cursors, already tried no cursor, diamond

import { useEffect, useState } from "react";

const CustomCursor = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [trail, setTrail] = useState<{ x: number; y: number }[]>([]);
  const [moving, setMoving] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    const onMouse = (e: MouseEvent) => {
      const { clientX: x, clientY: y } = e;
      setPos({ x, y });
      setTrail((prev) => [{ x, y }, ...prev.slice(0, 4)]);
      setMoving(true);
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        setMoving(false);
        setTrail([]);
      }, 100);
    };

    window.addEventListener("mousemove", onMouse);
    return () => {
      window.removeEventListener("mousemove", onMouse);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <>
      {moving &&
        trail.map((p, i) => (
          <div
            key={i}
            className="cursor-trail"
            style={{
              left: p.x - 5,
              top: p.y - 5,
              opacity: 1 - i * 0.2,
              transform: `scale(${1 - i * 0.15})`,
            }}
          />
        ))}
      <div className="cursor-main" style={{ left: pos.x - 7, top: pos.y - 7 }} />
      <div className="cursor-glow" style={{ left: pos.x - 30, top: pos.y - 30 }} />
    </>
  );
};

export default CustomCursor;
