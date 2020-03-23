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
    e => {
      let { clientX, clientY } = e.changedTouches[0];
      console.log("state.isDragging", state.isDragging);
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
    window.addEventListener("touchmove", handleMouseMove);
    window.addEventListener("touchmove", handleMouseUp);

    return () => {
      window.removeEventListener("touchmove", handleMouseMove);
      window.removeEventListener("touchmove", handleMouseUp);
    };
  }, [handleMouseMove, handleMouseUp]);

  return (
    <Circle
      isDragging={state.isDragging}
      onTouchMove={handleMouseDown}
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
    x: 76,
    y: 76
  },
  radius: 38
};

export default Draggable;
