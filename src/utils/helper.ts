export const formatNumber = (num: number, precision = 1): string => {
    const map = [
      {suffix: 'T', threshold: 1e12},
      {suffix: 'B', threshold: 1e9},
      {suffix: 'M', threshold: 1e6},
      {suffix: 'K', threshold: 1e3},
      {suffix: '', threshold: 1},
    ];
  
    const found = map.find(x => Math.abs(num) >= x.threshold);
    if (found) {
      const value = num / found.threshold;
      const formatted =
        value % 1 === 0 // Check if the number is an integer
          ? value.toFixed(0) // No decimals for whole numbers
          : value.toFixed(precision); // Keep decimals for non-round numbers
      return formatted + found.suffix;
    }
  
    return num.toString();
  };