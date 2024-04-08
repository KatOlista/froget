export const validateInputValue = (inputValue, min, max) => {
  if (inputValue < min) {
    return min;
  }

  if (inputValue > max) {
    return max;
  }

  return inputValue;
};
