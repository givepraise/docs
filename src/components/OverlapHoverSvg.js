import React from "react";

const OverlapHoverSvg = ({
  svg,
  href,
  className = "",
  darkMode = false,
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

  const darkModeClass = darkMode ? "dark-mode" : "";

  return (
    <div
      className={`overlap-hover-svg ${darkModeClass}`}
      style={{ width: size, height: size, ...positionStyle }}
    >
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`cursor-pointer ${className}`}
      >
        {svg}
      </a>
    </div>
  );
};

export default OverlapHoverSvg;
