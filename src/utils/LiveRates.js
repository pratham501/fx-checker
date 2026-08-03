export const calculatePercentage = (currRate, yesterdayRate) => {
  return (((currRate - yesterdayRate) / yesterdayRate) * 100).toFixed(2);
};
