// Displays a 3x3 image grid with click-to-open modal
import React from "react";

function ImageGrid({ images, onImageClick }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "10px",
        marginTop: "20px",
      }}
    >
      {images.map((img) => (
        <button
          key={img.id}
          onClick={() => onImageClick(img)}
          style={{
            all: "unset",
            cursor: "pointer",
            width: "100%",
          }}
        >
          <img
            src={img.previewURL}
            alt={img.tags}
            style={{
              width: "100%",
              aspectRatio: "1 / 1",
              objectFit: "contain",
              borderRadius: "8px",
            }}
          />
        </button>
      ))}
    </div>
  );
}

export default ImageGrid;
