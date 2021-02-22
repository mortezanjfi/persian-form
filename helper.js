export const isString = (input) => {
  if (typeof input === "string") {
    return true;
  }
};
export const isNumber = (input) => {
  if (typeof input === "number") {
    return true;
  }
};
export const validSheba = (str) => {
  var remainder = str,
    block;

  while (remainder.length > 2) {
    block = remainder.slice(0, 9);
    remainder = (parseInt(block, 10) % 97) + remainder.slice(block.length);
  }

  return parseInt(remainder, 10) % 97;
};
export const getLanguage = () => {
  return (
    (navigator.languages && navigator.languages[0]) ||
    navigator.language ||
    navigator.userLanguage
  );
};
