import React, { useState } from "react";

const OverlapHover = ({
  children,
  size = 25,
  spacing = 16,
  overlap = 0.33,
  direction = "right",
  className = "",
  darkMode = false,
}) => {
  const [hovered, setHovered] = useState(false);

  const onMouseEnter = () => {
    setHovered(true);
  };

  const onMouseLeave = () => {
    setHovered(false);
  };

  const childCount = React.Children.count(children);
  const wrapperWidth = `calc(${size}px * ${childCount} + ${spacing}px * ${
    childCount - 1
  })`;

  return (
    <div>
      <style>
        {`
          .overlap-hover {
            display: flex;
            justify-content: center;
          }

          .overlap-hover-image,
          .overlap-hover-svg {
            position: absolute;
            transition: all 0.3s;
          }

          .overlap-hover-image.dark-mode img,
          .overlap-hover-svg.dark-mode svg {
            filter: invert(1);
          }
        `}
      </style>
      <div
        className={`overlap-hover ${className}`}
        style={{ width: wrapperWidth, height: size }}
      >
        <div
          className="relative"
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          style={{ width: wrapperWidth, height: size }}
        >
          {React.Children.map(children, (child, index) => {
            const logoProps = {
              ...child.props,
              expand: hovered,
              index: index,
              size: size,
              spacing: spacing,
              overlap: overlap,
              direction: direction,
              darkMode: darkMode,
            };
            return React.cloneElement(child, logoProps);
          })}
        </div>
      </div>
    </div>
  );
};
export default OverlapHover;
