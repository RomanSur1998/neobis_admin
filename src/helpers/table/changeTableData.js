export function changeTableData(data) {
  const results = data?.map((elem, index) => {
    return [index + 1, ...Object.values(elem)];
  });
  return results;
}
