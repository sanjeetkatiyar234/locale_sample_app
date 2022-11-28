export const convertArrayToRgb = (arrayValue) => {
  if (Array.isArray(arrayValue)) {
    if (arrayValue.length === 4) {
      const arrayValueString = arrayValue
        .map((value, index) => {
          if (index === 3) return (value / 255).toPrecision(2);
          else return value;
        })
        .join(", ");
      return `rgba(${arrayValueString})`;
    } else {
      return `rgb(${arrayValue.join(", ")})`;
    }
  } else return "rgba(0, 0, 0, 0.5)";
};
