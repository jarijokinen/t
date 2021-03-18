export const buildOverlayStyle = (overlayColor, overlayOpacity) => {
  const rgb = overlayColor
    ? /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i
        .exec(overlayColor)
        .slice(1, 4)
        .map((color) => {
          return parseInt(color, 16);
        })
        .join(',')
    : '0,0,0';

  return overlayOpacity && overlayOpacity > 0
    ? {
        boxShadow: `inset 0 0 0 100vmax rgba(${rgb}, ${
          parseInt(overlayOpacity, 10) / 100
        })`
      }
    : null;
};
