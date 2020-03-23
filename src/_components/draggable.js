import React, { useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import Circle from "./Circle";

const Draggable = ({ position, radius }) => {
  const [state, setState] = useState({
    isDragging: false,
    translateX: position.x,
    translateY: position.y
  });

  // mouse move
  const handleMouseMove = useCallback(
    ({ clientX, clientY }) => {
      if (state.isDragging) {
        setState(prevState => ({
          ...prevState,
          translateX: clientX,
          translateY: clientY
        }));
      }
    },
    [state.isDragging]
  );

  // mouse left click release
  const handleMouseUp = useCallback(() => {
    if (state.isDragging) {
      setState(prevState => ({
        ...prevState,
        isDragging: false
      }));
    }
  }, [state.isDragging]);

  // mouse left click hold
  const handleMouseDown = useCallback(() => {
    setState(prevState => ({
      ...prevState,
      isDragging: true
    }));
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [handleMouseMove, handleMouseUp]);

  return (
    <Circle
      isDragging={state.isDragging}
      onMouseDown={handleMouseDown}
      radius={radius}
      x={state.translateX}
      y={state.translateY}
    />
  );
};

Draggable.propTypes = {
  position: PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number
  }),
  radius: PropTypes.number
};

Draggable.defaultProps = {
  position: {
    x: 192,
    y: 192
  },
  radius: 96
};

export default Draggable;
