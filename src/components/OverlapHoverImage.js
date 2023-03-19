import React from "react";

const OverlapHoverImage = ({
  img,
  href,
  className = "",
  expand,
  index,
  size,
  spacing,
  overlap,
  direction,
}) => {
  const positionStyle =
    direction === "right"
      ? {
          left: expand
            ? `${index * size + index * spacing}px`
            : `${index * size - index * (size * overlap)}px`,
        }
      : {
          right: expand
            ? `${index * size + index * spacing}px`
            : `${index * size - index * (size * overlap)}px`,
        };

  return (
    <div
      className={` absolute transition-all duration-300`}
      style={positionStyle}
    >
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`cursor-pointer`}
      >
        <img
          src={img}
          alt="Logo"
          width={size}
          height={size}
          className={className}
        />
      </a>
    </div>
  );
};

export default OverlapHoverImage;
