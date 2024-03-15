export function getPage(totalCount, countElement) {
  const newCount = Math.ceil(+totalCount / countElement);
  let array = [];
  for (let i = 1; i <= newCount; i++) {
    array.push(i);
  }
  return array.length !== 0 ? array : [1];
}
