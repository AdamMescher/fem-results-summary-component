const addAlpha = (input: string, alpha: number): string => {
  const values = input.split('hsl(')[1].slice(0, -1).split(',');

  const [hue, saturation, lightness] = values;

  return `hsl(${hue}, ${saturation}, ${lightness}, ${alpha})`;
};

export default addAlpha;
