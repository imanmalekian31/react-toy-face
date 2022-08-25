import React, { useMemo } from "react";

const GROUPS = [
  {
    rows: 3,
    cols: 6,
    img: "url('https://user-images.githubusercontent.com/58827166/184355357-0b278997-c163-45cf-a575-19f532b07864.jpg')",
  },
  {
    rows: 3,
    cols: 6,
    img: "url('https://user-images.githubusercontent.com/58827166/184355612-a8b12e00-a815-4456-8892-30836b4d1c2c.jpg')",
  },
];

const ReactToyFace = ({ size, toyNumber, group, rounded }) => {
  const currentGroup = useMemo(() => GROUPS[group - 1], [group]);

  const posX = useMemo(
    () => (toyNumber - 1) % currentGroup.cols,
    [toyNumber, currentGroup]
  );

  const posY = useMemo(
    () => Math.floor((toyNumber - 1) / currentGroup.cols),
    [toyNumber, currentGroup]
  );

  return (
    <span
      style={{
        display: "inline-block",
        width: `${size}px`,
        height: `${size}px`,
        backgroundImage: currentGroup.img,
        backgroundRepeat: "no-repeat",
        backgroundSize:
          size * currentGroup.cols + "px " + size * currentGroup.rows + "px",
        borderRadius: rounded + "px",
        backgroundPositionX: `-${posX * size}px`,
        backgroundPositionY: `-${posY * size}px`,
      }}
    />
  );
};

export default ReactToyFace;
