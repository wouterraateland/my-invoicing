const pxPer = {
  cm: 96 / 2.54,
  mm: 9.6 / 2.54,
  Q: 2.4 / 2.54,
  in: 96,
  pc: 96 / 6,
  pt: 96 / 72,
  px: 1
};

const units = Object.keys(pxPer);

const getUnit = s => {
  return units.find(unit => s.endsWith(unit));
};

export const convertToUnit = unit => s => {
  const [value, currentUnit] = [parseFloat(s), getUnit(s)];
  return units.includes(unit) && units.includes(currentUnit)
    ? (value * pxPer[currentUnit]) / pxPer[unit]
    : null;
};
