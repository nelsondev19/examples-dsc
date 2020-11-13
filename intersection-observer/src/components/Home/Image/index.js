import React, { useState, useRef, useEffect } from "react";
import { ObserverImages } from "../../../functions/ObserverImages";

export default function Image({ src }) {
  const [showImage, setShowImage] = useState(false);
  const placeHolderRef = useRef(null);

  useEffect(() => {
    ObserverImages(placeHolderRef.current, setShowImage);
  }, []);

  if (showImage) {
    return <img src={src} alt="img-card" className="img-card" />;
  }
  return (
    <p align="center" ref={placeHolderRef}>
      Cargando...
    </p>
  );
}
