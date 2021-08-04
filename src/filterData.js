// data Filter
const filterData = (SearchVal, data) => {
  const identicalData = [];
  for (let i = 0; i < data.length; i += 1) {
    if (data[i].startsWith(SearchVal) && identicalData.length <= 5) {
      identicalData.push(data[i]);
    }
  }
  return identicalData;
};
module.exports = filterData;