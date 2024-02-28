export function changeTableData(data, offset = 0) {
  const results = data?.map((elem, index) => {
    const values = Object.values(elem);
    const filteredValues = values.filter((value) => !isURL(value)); // Фильтрация URL
    return filteredValues;
  });
  return results;
}

function isURL(str) {
  return /^https?:\/\//.test(str);
}
