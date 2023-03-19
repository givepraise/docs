import React, { useState } from "react";

const OverlapHover = ({
  children,
  size = 25,
  spacing = 16,
  overlap = 0.33,
  direction = "right",
  className = "",
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

  const wrapperClassName = `flex justify-center ${className}`;

  return (
    <div className={wrapperClassName}>
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
          };
          return React.cloneElement(child, logoProps);
        })}
      </div>
    </div>
  );
};

export default OverlapHover;
